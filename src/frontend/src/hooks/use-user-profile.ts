import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ExternalBlob, createActor } from "../backend";
import type { backendInterface } from "../backend.d";
import type { UserProfile } from "../types/user-profile";

export function useUserProfile(isAuthenticated: boolean) {
  const { actor, isFetching: actorFetching } = useActor(createActor);

  const query = useQuery<UserProfile | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      const typedActor = actor as unknown as backendInterface;
      try {
        const raw = await typedActor.getOrCreateProfile();
        return {
          userId: raw.userId,
          avatarBlob: raw.avatarBlob ?? null,
          createdAt: raw.createdAt,
          isAdmin: raw.isAdmin,
        };
      } catch {
        return null;
      }
    },
    enabled: isAuthenticated && !!actor && !actorFetching,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useUpdateProfileAvatar() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => {
      if (!actor) throw new Error("Actor not available");
      const typedActor = actor as unknown as backendInterface;
      const bytes = new Uint8Array(await file.arrayBuffer());
      const blob = ExternalBlob.fromBytes(bytes);
      await typedActor.updateProfileAvatar(blob);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}

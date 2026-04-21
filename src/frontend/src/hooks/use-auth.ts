import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";

export function useAuth() {
  const {
    login,
    clear,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    identity,
    loginStatus,
  } = useInternetIdentity();
  const queryClient = useQueryClient();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    clear();
    queryClient.clear();
  };

  const principal = identity?.getPrincipal();
  const principalText = principal?.toString() ?? null;

  return {
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    identity,
    principal,
    principalText,
    loginStatus,
    login: handleLogin,
    logout: handleLogout,
  };
}

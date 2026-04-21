import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface PublicProfile {
    avatarBlob?: ExternalBlob;
    userId: string;
    createdAt: bigint;
    isAdmin: boolean;
}
export interface OrderItem {
    name: string;
    productId: string;
    quantity: bigint;
    price: number;
}
export interface OrderItemInput {
    name: string;
    productId: string;
    quantity: bigint;
    price: number;
}
export interface Order {
    status: string;
    total: number;
    userId: string;
    orderId: string;
    timestamp: bigint;
    items: Array<OrderItem>;
}
export interface UserProfile {
    avatarBlob?: ExternalBlob;
    userId: string;
    createdAt: bigint;
    isAdmin: boolean;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllOrders(): Promise<{
        __kind__: "ok";
        ok: Array<Order>;
    } | {
        __kind__: "err";
        err: string;
    }>;
    getCallerUserRole(): Promise<UserRole>;
    getMyOrders(): Promise<Array<Order>>;
    getMyProfile(): Promise<UserProfile | null>;
    getOrCreateProfile(): Promise<UserProfile>;
    isCallerAdmin(): Promise<boolean>;
    placeOrder(items: Array<OrderItemInput>): Promise<{
        __kind__: "ok";
        ok: Order;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateProfileAdmin(isAdmin: boolean): Promise<{
        __kind__: "ok";
        ok: PublicProfile;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateProfileAvatar(avatarBlob: ExternalBlob): Promise<void>;
}

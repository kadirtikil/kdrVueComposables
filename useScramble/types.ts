import type { Ref } from "vue";

/**
 * Types
 */
export interface scrambleOptions {
    duration?: number;
    style?: string;
}

export interface Scramble {
    id: number;
    name: string; 
    func: (text: Ref<string>, ms: number) => Promise<void>;
}

export const largeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
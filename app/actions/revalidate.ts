"use server";

import { revalidateTag } from "next/cache";

export async function revalidateCacheAction(tag: string) {
    try {
        console.log(`[Revalidation] Purging cache tag: ${tag}`);
        revalidateTag(tag, 'max');
        return { success: true };
    } catch (error: any) {
        console.error(`[Revalidation] Failed to purge cache tag ${tag}:`, error);
        return { success: false, error: error.message };
    }
}

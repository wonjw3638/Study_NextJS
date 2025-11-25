'use server';

import samplePosts from '@/lib/constants/sample-posts.json';
import { revalidatePath } from 'next/cache';

export async function readPostsAction(): Promise<myNextApp.Post[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(samplePosts);
        }, 2000);
    })
}

export async function readPostsActionWithCache(): Promise<myNextApp.Post[]> 
{
    return fetch('http://localhost:3000/api/posts', {cache: 'no-store'}).then((response) => response.json());
}

export async function resetCache() {
    revalidatePath('/feed', 'page');
}
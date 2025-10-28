import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

function usePost(postId: string) {
    const {isLoading, data, error, mutate} = useSWR<myNextApp.Post>(`/api/posts/${postId}`, fetcher);

    return {
        isLoading,
        post: data,
        error,
        mutate
    }
}
export default usePost
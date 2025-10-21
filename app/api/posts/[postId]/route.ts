import {NextRequest, NextResponse} from 'next/server';
import samplePosts from '@/lib/constants/sample-posts.json';

interface RequestPayload {
    params: { postId: string }
}

export async function GET(request:NextRequest, payload: RequestPayload) {
    console.log(payload);
    const {postId} = payload.params;
    console.log('============ postId : ', postId);


    const post = samplePosts.find((post) => {
        return post.id === postId;
    })

    if (!post) {
        return NextResponse.json({error: 'Not found'}, {status: 404});
    }

    return NextResponse.json(post, {status: 200});
}
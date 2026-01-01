'use client'
import Intro from '@/app/components/Intro/Intro';
import PostCards from '@/app/components/PostCards/PostCards';
import { usePosts } from '@/app/stateManagement/usePosts'
import CategoryWrapper from '@/app/wrapper/CategoryWrapper'
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoryID() {
    const { id = '' } = useParams();
    const { postResult, loadingPosts, getPost } = usePosts();


    const filter = {
        category: String(id),
        published: 'true'
    }

    useEffect(() => {
        if (id) {
            getPost(filter)
        }
    }, [id]);

    if (loadingPosts) {
        return (
            <CategoryWrapper>
                <p>Loading...</p>
            </CategoryWrapper>
        )
    };

    return (
        <CategoryWrapper>
            <Intro
                title={`Total Contents: ${postResult?.pagination.totalDocs}`}
                description='Click on any of the contents to read and/or watch explanatory video'
            />
            <PostCards />
        </CategoryWrapper>
    )
}
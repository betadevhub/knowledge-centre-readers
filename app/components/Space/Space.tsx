'use client'
import { useParams } from 'next/navigation';
import classes from './Space.module.css';
import { useEffect } from 'react';
import { useContents } from '@/app/stateManagement/useContents';
import Read from './Read';
import TableOfContents from './TableOfContent';

export default function Space() {
    const { id } = useParams();
    const { getContent, loadingContentResult } = useContents();

    const filter = {
        postId: String(id),
        sort: '+createdAt'
    }

    useEffect(() => {
        if (id) {
            getContent(filter)
        }
    }, [id]);

    if (loadingContentResult) {
        return (
            <p>Loading...</p>
        )
    }


    return (
        <div className={classes.spaceContainer}>
            <Read />
            <TableOfContents />
        </div>
    )
}
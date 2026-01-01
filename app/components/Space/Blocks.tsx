import { useContents } from '@/app/stateManagement/useContents';
import classes from './Space.module.css';
import { getTag } from './helper';
import { useScrollTo } from '@/app/hooks/useScrollTo';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Blocks() {
    const scrollTo = useScrollTo();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    useEffect(() => {
        if (id) {
            scrollTo(id)
        }
    }, [id])

    const { contentResult } = useContents();
    return (
        <div className={classes.blocksContainer}>
            {contentResult?.contents?.map(c => (
                <div className={classes.block} key={c._id}>
                    {getTag(c.content, c.type, c._id)}
                </div>
            ))}
        </div>
    )
}
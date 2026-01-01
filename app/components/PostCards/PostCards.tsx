import { usePosts } from '@/app/stateManagement/usePosts';
import classes from './PostCards.module.css';
import PostCard from './PostCard';

export default function PostCards() {
    const { postResult } = usePosts();
    return (
        <div className={classes.postCards}>
            {postResult?.posts?.map((p) => (
                <PostCard key={p._id} {...p} />
            ))}
        </div>
    )
}
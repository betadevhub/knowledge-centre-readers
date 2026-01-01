import { useTextHighlight } from '@/app/hooks/useTextHighlight';
import classes from './SearchResultCard.module.css';
import { SEARCH_RESULT_CARD } from './types';
import { extractYouTubeId, isItYoutubeLink } from '@/app/helpers/util';
import { routes } from '@/app/constants/util';
import { useRouter } from 'next/navigation';

export default function SearchResultCard(params: SEARCH_RESULT_CARD) {
    const router = useRouter();

    const highlight = params.search || '';
    const highlightedName = useTextHighlight(params.postDetails.name, highlight);
    const highlightedContent = useTextHighlight(params.content, highlight);
    const highlightedCategory = useTextHighlight(params.categoryDetails.name, highlight);


    const renderHighlighted = (parts: Array<{ text: string; isHighlight: boolean; id: number }>) => {
        return parts.map(part =>
            part.isHighlight ?
                <mark key={part.id} className={classes.highlight}>{part.text}</mark> :
                part.text
        );
    };

    return (
        <div onClick={() => {
            router.push(`${routes.contents}/${encodeURIComponent(params.postDetails.name)}/${params.postDetails._id}?id=${params._id}`);
        }} className={classes.cardContainer}>
            <p className={classes.name}>{renderHighlighted(highlightedName)}</p>
            {params.categoryDetails._id && <p className={classes.category}>{renderHighlighted(highlightedCategory)}</p>}

            {
                isItYoutubeLink(params.content) ?
                    <div className={classes.youtubeContainer}>
                        <iframe
                            src={`https://www.youtube.com/embed/${extractYouTubeId(params.content)}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={classes.youtubeIframe}
                        />
                    </div>
                    :
                    <p className={classes.content}>
                        {renderHighlighted(highlightedContent)}
                    </p>
            }
        </div>
    );
}
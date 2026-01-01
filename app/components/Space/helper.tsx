import { extractYouTubeId, isItYoutubeLink } from '@/app/helpers/util';
import classes from './Space.module.css';
import { BLOCK_TYPES, CONTENT } from "./types";


export const getTag = (content: string, type: BLOCK_TYPES , id:string) => {

    switch (type) {
        case 'h1':
            return <h1 id={id} className={classes.h1}>{content}</h1>

        case 'h2':
            return <h2 id={id} className={classes.h2}>{content}</h2>

        case 'h3':
            return <h2 id={id} className={classes.h3}>{content}</h2>

        case 'link':
            const t = isItYoutubeLink(content) ?
                <div  id={id} className={classes.youtubeContainer}>
                    <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeId(content)}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={classes.youtubeIframe}
                    />
                </div>
                :
                <a  id={id} href={content} rel="noopener noreferrer nofollow" target="_blank" referrerPolicy="no-referrer">{content}</a>
            return t


        default:
            return <p  id={id}>{content}</p>;
    }
}

export const getTableOfContents = (contents: CONTENT[]) => {
    const priority = ['h1', 'h2', 'h3'];
    const f = contents.filter(c => priority.includes(c.type))
    return f

}
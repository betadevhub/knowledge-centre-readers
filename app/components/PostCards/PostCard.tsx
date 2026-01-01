import { minutesFormat } from '@/app/helpers/util';
import classes from './PostCards.module.css';
import { POST_CARD } from './types';
import { BsArrowRightShort } from 'react-icons/bs';
import { PiFireSimple } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/constants/util';


export default function PostCard(params: POST_CARD) {
    const router = useRouter();
    return (
        <div className={classes.postCard}>
            <p className={classes.name}>{params.name}</p>
            <p className={classes.durations}>{minutesFormat(params.readDuration)} read   |   {minutesFormat(params.videoDuration)} video explanatory</p>
            <div className={classes.ctaGroup}>
                <button onClick={()=>{router.push(`${routes.contents}/${encodeURIComponent(params.name)}/${params._id}`)}} className={classes.learnMoreBtn}>
                    Start Reading Content
                    <BsArrowRightShort className={classes.rightArrow} />
                </button>

                <div className={classes.fireContainer}>
                    <PiFireSimple className={classes.fire}/>
                </div>
            </div>
        </div>
    )
}
import { useContents } from '@/app/stateManagement/useContents';
import classes from './Space.module.css';
import { dateFormat, minutesFormat } from '@/app/helpers/util';
import { TOP } from './types';

export default function Top(params: TOP) {
    const { contentResult } = useContents();
    const { postDetails, } = contentResult?.contents[0] || {};

    return (
        <div className={classes.topContainer}>
            {
                params?.left &&
                <>
                    {/* <div className={classes.postDetailsContainer}>
                        <p>• {categoryDetails?.name}</p>
                        <p>{"/"}</p>
                        <p> {postDetails?.name}</p>
                    </div> */}

                    <p className={classes.updatedAt}> • {postDetails?.updatedAt ? `${dateFormat(postDetails.updatedAt)} at ${new Date(postDetails.updatedAt).toLocaleTimeString()}` : "--"} </p>
                </>
            }


            {
                params.right &&
                <div className={classes.durationContainer}>
                    <p> • {minutesFormat(postDetails?.readDuration || 0)} read</p>
                    <p> • {minutesFormat(postDetails?.videoDuration || 0)} explanatory video</p>
                </div>
            }

        </div>
    )
}
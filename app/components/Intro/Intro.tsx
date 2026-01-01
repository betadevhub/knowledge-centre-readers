import classes from './Intro.module.css';
import { INTRO } from './types';

export default function Intro(params: INTRO) {
    return (
        <div className={classes.container}>
            <p className={classes.title}>{params.title}</p>
            <p className={classes.description}>{params.description}</p>
        </div>
    )
}

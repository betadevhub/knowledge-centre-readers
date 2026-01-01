import { BsArrowLeftShort } from 'react-icons/bs';
import classes from './Back.module.css';
import { BACK } from './types';

export default function Back(params: BACK) {
    return (
        <button className={classes.container}>
            <BsArrowLeftShort className={classes.icon} />
            <p>{params.name}</p>
        </button>
    )
}
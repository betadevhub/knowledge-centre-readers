import classes from './Space.module.css';
import Top from './Top';
import Blocks from './Blocks';

export default function Read() {

    return (
        <div className={classes.readContainer}>
            <Top left={true} />
            <Blocks />
        </div>
    )
}
import { CATEGORY_WRAPPER } from './types';
import classes from './Wrapper.module.css';

export default function CategoryWrapper(params: CATEGORY_WRAPPER) {
    return (
        <div className={classes.categoryWrapper}>
            {params.children}
        </div>
    )
}
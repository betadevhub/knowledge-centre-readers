import { FLEX_WRAPPER } from './types';
import classes from './Wrapper.module.css';

export default function FlexWrapper(params: FLEX_WRAPPER) {
    return (
        <div style={params.width ? { width: params.width } : {}} className={classes.flexWrapperContainer}>
            {params.children}
        </div>
    )
}
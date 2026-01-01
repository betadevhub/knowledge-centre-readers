import { MAIN_WRAPPER } from './types'
import classes from './Wrapper.module.css'

export default function MainWrapper(params: MAIN_WRAPPER) {
    return (
        <div className={classes.mainWrapper}>
            {params.children}
        </div>
    )
}
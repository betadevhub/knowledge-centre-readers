import classes from './Loader.module.css'
import { LOADER } from './types'

export default function Loader(params: LOADER) {
    return (
        <div style={params?.background ? { background: params.background } : {}} className={classes.loader}></div>
    )
}
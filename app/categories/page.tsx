import CategoryWrapper from '../wrapper/CategoryWrapper'
import classes from './categories.module.css'
export default function Categories() {
    return (
        <CategoryWrapper>
            <div className={classes.container}>
                <p>Loading...</p>
            </div>
        </CategoryWrapper>
    )
}
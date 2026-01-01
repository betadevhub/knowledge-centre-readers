import { AiOutlineBorderlessTable } from 'react-icons/ai';
import classes from './Space.module.css';
import Top from './Top';
import { getTableOfContents } from './helper';
import { useContents } from '@/app/stateManagement/useContents';
import { useScrollTo } from '@/app/hooks/useScrollTo';


export default function TableOfContents() {
    const scrollTo = useScrollTo();
    const { contentResult } = useContents();

    const { contents } = contentResult || {};
    return (
        <div className={classes.tableOfContentsContainer}>
            <Top right={true} />
            <div className={classes.tableOfContentsSubContainer}>

                <div className={classes.tableOfContentsHeaderContainer}>
                    <AiOutlineBorderlessTable className={classes.tableOfContentIcon} />
                    <h3>Table of Contents</h3>
                </div>
                    <ul className={classes.unOrderedList}>
                        {
                            getTableOfContents(contents ||[])?.map((c)=>(
                                <li onClick={()=>scrollTo(c._id)} key={c._id}>{c.content}</li>
                            ))
                        }
                       
                    </ul>
            </div>
        </div>
    )
}
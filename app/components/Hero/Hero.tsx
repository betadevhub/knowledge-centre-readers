import Search from '../Search/Search'
import classes from './Hero.module.css'
import { HERO } from './types'


export default function Hero(params: HERO) {
    return (
        <section className={classes.container}>
            <h3>Everything you need to master <span>TicketLush</span>.</h3>
            <p>Start with a search on what you{"'"}re looking for and explore curated articles and videos designed to answer your questions fast.</p>
            <Search searching={params.searching} search={params.search} handleSearch={params.handleSearch} placeholder='Search a topic or article text.' width='50%' />
        </section>
    )
}
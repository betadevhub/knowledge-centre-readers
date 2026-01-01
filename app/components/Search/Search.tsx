import { useEffect, useState } from 'react';
import classes from './Search.module.css';
import { SEARCH } from './types';
import Loader from '../Loader/Loader';

export default function Search(params: SEARCH) {
    const [value, setValue] = useState(params.search || '');

    useEffect(() => {
        if (value === '') {
            params.handleSearch(value)
        }
    }, [value]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        params.handleSearch(value)
    }

    return (
        <form onSubmit={submit} style={{ width: params.width }} className={classes.container}>
            <input value={value} onChange={(e) => { setValue(e.target.value) }} type='text' inputMode='search' className={classes.input} placeholder={params.placeholder} />
            <button disabled={!value} onClick={submit} className={classes.searchButton}>
                {params.searching ? <Loader background='#fff' />
                    :
                    'Search'}

            </button>
        </form>
    )
}
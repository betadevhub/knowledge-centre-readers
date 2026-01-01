'use client'
import classes from './SidePane.module.css';
import type { MENU_CARD } from './types';
import { usePathname } from 'next/navigation';

export default function MenuCard(params: MENU_CARD) {
    const path = usePathname();
    const isActive = path === params.route;

    return (
        <div onClick={() => params.func(params.route)} className={`${classes.menuCard} ${isActive ? classes.menuCardActive : ''}`}>
            {params.icon}
            <p className={classes.menuCardName}>{params.name}</p>
        </div>
    )
}
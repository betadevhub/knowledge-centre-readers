'use client'
import classes from './Header.module.css';
import logo from '../../assets/ticketlogo 1.svg';
import Image from 'next/image';
import { items } from './constants';
import { usePathname, useRouter } from 'next/navigation';
import { functionTypes, routes } from '@/app/constants/util';
import { useCategories } from '@/app/stateManagement/useCategories';
import DropdownCard from './dropdownCard';


export default function Header() {
    const path = usePathname();
    const router = useRouter();
    const { categoriesResult } = useCategories();
    const { name = '', _id = '' } = categoriesResult?.categories[0] || {}

    return (
        <header className={classes.container}>
            <Image src={logo} alt='Ticket lush logo' className={classes.logo} />
            <p className={classes.knowledgeCentre}>Knowledge Centre</p>
            <div className={classes.itemsContainer}>
                {items?.map((i, id) => {
                    const f = () => {
                        if (i.functionType === functionTypes.NAVIGATE) {
                            const r = (i.route === routes.categories && categoriesResult) ? `${i.route}/${encodeURIComponent(name)}/${_id}` : i.route
                            router.push(r);
                        };

                        if (i.functionType === functionTypes.EXTERNAL_LINK) {
                            window.open(i.route, '_blank', 'noopener,noreferrer');
                        };
                    }

                    const isActive = i.route === path
                    return (
                        <button onClick={f} style={{ background: i.background, color: i.color }} className={`${classes.button} ${i.background ? classes.padded : ''} ${isActive ? classes.activeRoute : ''}`} key={id}>{i.name}</button>
                    )
                })}
            </div>
            <DropdownCard />
        </header>
    )
}
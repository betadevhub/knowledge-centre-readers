'use client'
import classes from './SidePane.module.css';
import MenuCardList from './MenuCardList';
import { formatCategories } from './helper';
import { useEffect } from 'react';
import useNavigation from '@/app/hooks/navigation';
import { useCategories } from '@/app/stateManagement/useCategories';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { routes } from '@/app/constants/util';
import { HiOutlineRefresh } from 'react-icons/hi';

export default function SidePane() {
    const { func } = useNavigation();
    const { categoriesResult, getCategoriesResult, loadingCategoriesResult } = useCategories();
    const path = usePathname();
    const router = useRouter();
    const { name, id } = useParams()
    console.log(useParams())

    const getRoute = async () => {
        const r = await getCategoriesResult({ sort: '+name' });
        if (r) {
            router.push(r)
        }
    }
    useEffect(() => {
        !name && !id && path.startsWith(routes.categories) && getRoute()
    }, [name, id, path])



    if (!path.startsWith(routes.categories)) return;

    return (
        <div className={classes.container}>
            <MenuCardList title='Categories' list={formatCategories(categoriesResult?.categories || [])} hasNextPage={categoriesResult?.pagination.hasNextPage}
                loading={loadingCategoriesResult}
                func={func}
                titleIcon={<HiOutlineRefresh className={classes.paneIcon} />}
            />

            <div className={`${classes.line1} ${classes.line2}`} />
        </div>
    )
}
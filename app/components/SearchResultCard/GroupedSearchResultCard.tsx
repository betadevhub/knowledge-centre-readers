import FlexWrapper from '@/app/wrapper/FlexWrapper';
import SearchResultCard from './SearchResultCard';
import classes from './SearchResultCard.module.css';
import { GROUPED_SEARCH_RESULT_CARD } from './types';

export default function GroupedSearchResultCard(params: GROUPED_SEARCH_RESULT_CARD) {
    return (
        <div className={classes.groupContainer}>
            <FlexWrapper width={params.width}>
                {params?.list?.map((l) => (
                    <SearchResultCard key={l._id} {...l} search={params.search} />
                ))}
            </FlexWrapper>
        </div>
    )
}
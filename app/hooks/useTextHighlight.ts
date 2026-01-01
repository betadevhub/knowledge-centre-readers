import { useMemo } from 'react';
import { HIGHLIGHT_PART } from './types';

export const useTextHighlight = (text: string, query: string): HIGHLIGHT_PART[] => {
    return useMemo(() => {
        if (!query.trim() || !text) {
            return [{ text, isHighlight: false, id: 0 }];
        }

        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);

        return parts
            .filter(part => part !== undefined && part !== '')
            .map((part, index) => ({
                text: part,
                isHighlight: part.toLowerCase() === query.toLowerCase(),
                id: index
            }));
    }, [text, query]);
};
import { POST_RESULT } from "../categories/types";
import { CATEGORIES } from "../components/SidePane/types";
import { CONTENT_RESULT } from "../components/Space/types";
import { TOAST_OBJECT, TOAST_TYPE } from "../components/Toast/types";
import { BUILD_FILTER, CATEGORIES_RESULT } from "../types";



export interface USE_TOAST {
    toasts: TOAST_OBJECT[];
    addToast: (type: TOAST_TYPE, title: string, message: string, duration?: number) => void
    removeToast: (id: number) => void;
}

export interface USE_ERROR {
    handleAPIError: (error: unknown) => void;
}


export interface USE_CATEGORIES {
    loadingCategoriesResult: boolean;
    loadingCategoriesByIdResult: boolean;
    categoriesByIdResult: CATEGORIES | null;
    categoriesResult: CATEGORIES_RESULT | null;
    categoriesByIdLastFetchedTimeStamp: Date | string;
    categoriesLastFetchedTimeStamp: Date | string;
    getCategoriesResult: (filter: BUILD_FILTER) => Promise<string | undefined>;
    getCategoriesByIdResult: (id: string) => void;
}


export interface USE_POSTS {
    loadingPosts: boolean;
    postResult: POST_RESULT | null;
    getPost: (filter: BUILD_FILTER) => Promise<string | undefined>;
}



export interface USE_CONTENTS {
    loadingContentResult: boolean;
    contentResult: CONTENT_RESULT | null;
    getContent: (filter: BUILD_FILTER) => Promise<string | undefined>;
}


export interface USE_COPY {
    handleCopyToClipboard: (text: string) => void;
}



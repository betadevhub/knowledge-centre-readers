import { FLEX_WRAPPER_WIDTH } from "@/app/wrapper/types";

export interface SEARCH_RESULT_CARD {
    _id: string;
    post: string;
    id: string;
    type: string;
    placeholder: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    postDetails: {
        name: string;
        _id: string;
    };
    categoryDetails: {
        name: string;
        _id: string;
    };
    search?: string
}


export interface GROUPED_SEARCH_RESULT_CARD {
    list: SEARCH_RESULT_CARD[];
    width: FLEX_WRAPPER_WIDTH;
    search: string
}
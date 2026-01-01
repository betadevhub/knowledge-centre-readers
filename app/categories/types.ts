import { CATEGORIES } from "../components/SidePane/types";
import { PAGINATION } from "../types";


export interface POST {
    _id: string;
    category: CATEGORIES;
    name: string;
    views: number;
    postCount: number;
    videoDuration: number;
    readDuration: number;
    published: true;
    createdAt: string;
    updatedAt: string;
}

export interface POST_RESULT {
    posts: POST[];
    pagination: PAGINATION;
}
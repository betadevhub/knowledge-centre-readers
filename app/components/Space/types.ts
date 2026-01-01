import { PAGINATION } from "@/app/types";

export type BLOCK_TYPES =
    | 'text'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'bullet'
    | 'todo'
    | 'quote'
    | 'code'
    | 'image'
    | 'link';


export interface CONTENT {
    _id: string;
    post: string;
    id: string;
    type: BLOCK_TYPES,
    content: string;
    createdAt: string;
    updatedAt: string;
    postDetails: {
        name: string;
        _id: string;
        updatedAt: string;
        readDuration: number;
        videoDuration: number;
    },
    categoryDetails: {
        name: string;
        _id: string;
    }
}

export interface CONTENT_RESULT {
    contents: CONTENT[];
    pagination: PAGINATION;
}

export interface TOP {
    left?: boolean;
    right?: boolean;
}
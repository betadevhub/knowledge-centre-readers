import { ReactNode } from "react";

export type FLEX_WRAPPER_WIDTH = '100%' | '80%' | '50%';

export interface FLEX_WRAPPER {
    children: ReactNode;
    width: FLEX_WRAPPER_WIDTH
};

export interface MAIN_WRAPPER {
    children: ReactNode;
}

export interface CATEGORY_WRAPPER {
    children: ReactNode;
};
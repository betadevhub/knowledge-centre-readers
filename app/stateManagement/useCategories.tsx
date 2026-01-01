import { create } from "zustand";
import type { USE_CATEGORIES } from "./types";
import { useError } from "./useError";
import axios from "axios";
import { buildFilter } from "../helpers/util";
import { routes, URL, withCredentials } from "../constants/util";
import { BUILD_FILTER } from "../types";

export const useCategories = create<USE_CATEGORIES>((set) => ({

    loadingCategoriesResult: false,
    loadingCategoriesByIdResult: false,
    categoriesByIdResult: null,
    categoriesResult: null,
    categoriesByIdLastFetchedTimeStamp: '',
    categoriesLastFetchedTimeStamp: '',


    getCategoriesResult: async (filter: BUILD_FILTER) => {
        try {
            set({ loadingCategoriesResult: true });
            const { data } = await axios.get(`${URL}/category?${buildFilter(filter)}`, withCredentials);
            set({
                categoriesResult: data.data
            })
            set({ categoriesLastFetchedTimeStamp: new Date() });
            const recent = data?.data?.categories?.[0];
            const route = `${routes.categories}/${encodeURIComponent(recent?.name)}/${recent?._id}`
            return route ||'';
        } catch (error) {
            useError.getState().handleAPIError(error)
        } finally {
            set({ loadingCategoriesResult: false })
        }
    },

    getCategoriesByIdResult: async (id: string) => {
        try {
            set({ loadingCategoriesByIdResult: true });
            const { data } = await axios.get(`${URL}/category/${id}`, withCredentials);
            set({
                categoriesByIdResult: data.data.category
            })
            set({ categoriesByIdLastFetchedTimeStamp: new Date() })

        } catch (error) {
            useError.getState().handleAPIError(error)
        } finally {
            set({ loadingCategoriesByIdResult: false })
        }
    }
}))
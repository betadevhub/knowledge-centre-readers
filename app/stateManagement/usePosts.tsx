import { create } from "zustand";
import { USE_POSTS } from "./types";
import { useError } from "./useError";
import axios from "axios";
import { URL, withCredentials } from "../constants/util";
import { buildFilter } from "../helpers/util";
import { BUILD_FILTER } from "../types";

export const usePosts = create<USE_POSTS>((set) => ({
    loadingPosts: false,
    postResult: null,
    getPost: async (filter: BUILD_FILTER) => {
        set({ loadingPosts: true });
        try {
            const res = await axios.get(`${URL}/post?${buildFilter(filter)}`, withCredentials)
            set({ postResult: res.data?.data })
            console.log(res.data?.data)
        } catch (error) {
            useError.getState().handleAPIError(error)
        } finally {
            set({ loadingPosts: false });
        }
    }
}))
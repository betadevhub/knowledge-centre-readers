import { create } from "zustand";
import { BUILD_FILTER } from "../types";
import { USE_CONTENTS } from "./types";
import axios from "axios";
import { URL, withCredentials } from "../constants/util";
import { buildFilter } from "../helpers/util";
import { useError } from "./useError";


export const useContents = create<USE_CONTENTS>((set) => ({
    loadingContentResult: false,
    contentResult: null,

    getContent: async (filter: BUILD_FILTER) => {
        try {
            set({ loadingContentResult: true });
            const { data } = await axios.get(`${URL}/content?${buildFilter(filter)}`, withCredentials);
            set({
                contentResult: data.data
            })
            
        } catch (error) {
            useError.getState().handleAPIError(error)
        } finally {
            set({ loadingContentResult: false })
        }
    }
}))
import axios from "axios";
import { create } from "zustand";
import { useToast } from "./useToast";
import type { USE_ERROR } from "./types";

export const useError = create<USE_ERROR>(() => ({
    handleAPIError: (error: unknown) => {
        if (axios.isAxiosError(error)) {
            const msg = error?.response?.data?.message || "unexpected error";
            useToast.getState().addToast('error', 'Error', msg)
        } else {
            useToast.getState().addToast('error', 'Error', 'Unexpected error')
        }
    },
}))
import { create } from "zustand";
import { USE_COPY } from "./types";
import { useToast } from "./useToast";

export const useCopy = create<USE_COPY>(() => ({
    handleCopyToClipboard: async (text: string) => {
        // Ensure we're in a browser environment
        if (typeof window === 'undefined') {
            console.error('Clipboard API not available in server environment');
            useToast.getState().addToast('error', 'Cannot copy in this environment', 'error');
            return;
        }

        try {
            // Check if clipboard API is available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                useToast.getState().addToast('success', 'Copied to clipboard', 'copied');
            } else {
                // Fallback for browsers without clipboard API
                throw new Error('Clipboard API not available');
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
            
            // Fallback method for older browsers
            try {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (successful) {
                    useToast.getState().addToast('success', 'Copied to clipboard', 'copied');
                } else {
                    console.error('execCommand copy failed');
                }
            } catch (fallbackErr) {
                console.error('Fallback copy failed: ', fallbackErr);
                useToast.getState().addToast('error', 'Error copying to clipboard', 'error');
            }
        }
    }
}));
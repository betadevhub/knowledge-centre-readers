
export const routes = {
    search: '/',
    categories: '/categories',
    contents: '/contents',
    'F.A.Q': '/faq',

};


export const functionTypes = {
    NAVIGATE: 'navigate',
    DROP_DOWN: 'dropdown',
    EXTERNAL_LINK: 'external_link'
}


export const URL = process.env.NEXT_PUBLIC_BASE_URL;
export const withCredentials = { withCredentials: true }

export const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

export const baseWidth = 1440;
 
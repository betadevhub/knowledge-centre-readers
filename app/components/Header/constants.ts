import { functionTypes, routes } from "@/app/constants/util";

export const items = [
    { name: 'search', route: routes.search, functionType: functionTypes.NAVIGATE },
    { name: 'categories', route: routes.categories, functionType: functionTypes.NAVIGATE },
    { name: 'F.A.Q', route: routes.search, functionType: functionTypes.NAVIGATE },
    { name: 'follow us', route: routes.search, functionType: functionTypes.DROP_DOWN },
    { name: 'createEvent', route: 'https://github.com', functionType: functionTypes.EXTERNAL_LINK, background: '#4da0ff', color: '#fff' },
]

import { FRONTEND_URL, functionTypes, routes } from "@/app/constants/util";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const items = [
    { name: 'search', route: routes.search, functionType: functionTypes.NAVIGATE },
    { name: 'categories', route: routes.categories, functionType: functionTypes.NAVIGATE },
    { name: 'F.A.Q', route: routes["F.A.Q"], functionType: functionTypes.NAVIGATE },
    { name: 'follow us', route: '', functionType: functionTypes.DROP_DOWN },
    { name: 'createEvent', route: `${FRONTEND_URL}/create-ticket`, functionType: functionTypes.EXTERNAL_LINK, background: '#4da0ff', color: '#fff' },
]

export const socialMediaLinks = [
    { name: 'Facebook', url: 'https://web.facebook.com/people/ticketlush/61565210012589/?rdid=oS7e87oTZHWPBR3r&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15w6uNDDtW%2F%3F_rdc%3D1%26_rdr', icon: <FaFacebookF />, username: '@ticketlush' },
    { name: 'Twitter / X', url: 'https://x.com/ticketlush', icon: <FaXTwitter />, username: '@ticketlush' },
    { name: 'Instagram', url: 'https://www.instagram.com/ticketlush/#', icon: <FaInstagram />, username: '@ticketlush' },
    { name: 'Tik-Tok', url: 'https://www.tiktok.com/@ticketlush', icon: <FaTiktok />, username: '@ticketlush' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ticketlush', icon: <FaYoutube />, username: '@ticketlush' }
];
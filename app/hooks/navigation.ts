import { useRouter } from "next/navigation";


export default function useNavigation() {

    const router = useRouter();
    const func = (r: string) => {
        router.push(r)
    }

    return { func }
}
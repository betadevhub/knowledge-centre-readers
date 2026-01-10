'use client';
import Back from "@/app/components/Back/Back";
import Space from "@/app/components/Space/Space";
import classes from "./contents.module.css";
import { useRouter } from "next/navigation";

export default function ContentId() {
    const router = useRouter()
    return (
        <div className={classes.container}>
            <Back name="All posts" func={() => {router.back() }} />
            <Space />
        </div>
    )
}
import Back from "@/app/components/Back/Back";
import Space from "@/app/components/Space/Space";
import classes from "./contents.module.css";

export default function ContentId() {
    return (
        <div className={classes.container}>
            <Back name="All posts" func={() => { }} />
            <Space />
        </div>
    )
}
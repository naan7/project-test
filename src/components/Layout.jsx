import Link from "next/link"
import style from "../styles/Layout.module.css"

export default function Layout(props){

    return(

        <div className={style.layout}>
            <div className={style.header}>
                <h1>{props.title ?? "Mais um exemplo"}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={style.content}>
                {props.children}

            </div>
        </div>

    )

}
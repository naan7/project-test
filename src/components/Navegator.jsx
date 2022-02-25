import Link from "next/link"
import style from "../styles/Navegator.module.css"

export default function Navegator(props){
    return(
        <>
            <Link href={props.SRC}> 
                <div className={style.navegator} style={{
                    backgroundColor: props.color ?? 'blue;'
                }}>
                    {props.text}    
                </div>

            </Link>
        </>
    )
}
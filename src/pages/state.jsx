import { useState } from "react";
import Layout from "../components/Layout";

export default function State(){

    const [num, setNum] = useState(0)

    function increments(){
        setNum(num + 1)
    }


    return(

        <Layout title="Componente com estado">

            <div>{num}</div>
            <button onClick={increments}>+1</button>
        </Layout>

    )

}
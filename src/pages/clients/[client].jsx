import Layout from "../../components/Layout";
import { useRouter } from "next/router"
export default function Client(){

    const router = useRouter();

    return(

        <Layout title="Navegação dinamica">

            <div> Cliente: {router.query.client}</div>

        </Layout>

    )

}
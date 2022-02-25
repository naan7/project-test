import Header from "../components/Header";
import Navegator from "../components/Navegator";

export default function Home(){

  return(

    <>
      <Navegator text="Pag. Exemplo Red" SRC="/Exemplo" color="red"></Navegator>
      <Navegator text="Clients" SRC="/clients/293f3esd23" color="green"></Navegator>
      <Navegator text="State" SRC="/state" ></Navegator>
    </>

  )

}
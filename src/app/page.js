import Prop from "@/components/Cartao/Cartao";
import Contar from "@/components/Contador/Contador";
import Header from "@/components/Header/Header";


export default function Home(){
  return(
    <>
    <Header/>
    <Contar/>
    <Prop/>
    <h1>Clique em sobre para saber mais</h1>
    <Prop nome = "Titulo"/>

    </>
  )
}
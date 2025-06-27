'use client'
import {useState} from "react";

export default function Contar(){
    const[contador, setContador] = useState(0);

    return(
        <>
            <p>{contador}</p>
            <button onClick={()=> setContador(contador + 1)}>Adicionar</button>

        </>
    )
}
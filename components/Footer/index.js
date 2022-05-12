import React from "react"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-gray-700">
            <div className="container mx-auto text-center text-white font-bold">
                Projeto desenvolvido por: {" "}
                    <a className="hover:underline">Ricardo Kühlkamp da Silva</a> / {" "}
                    <a className="hover:underline"href="https://linkedin.com/in/ricardokühlkampdasilva">Linkedin</a> / {" "}
                    <a className="hover:underline"href="https://github.com/ricardokuhlkamp">Github</a> 
                <div className="mt-2">                 
                    <img className="inline p-4" src="/logo_devpleno.png"></img>
                    <img className="inline p-4" src="/logo_semana_fsm.png"></img>
                </div>
            </div>          
        </div>
    )
}

export default Footer
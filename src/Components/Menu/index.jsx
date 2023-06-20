import { Input } from "@mui/base";
import { AccountCircle, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import Logo from '../../assets/01.png'
import './estilo.css'


export const MenuTop= ()=>{
    return(
        <>
            <div className="menu">
            <img src={Logo} alt="logo Whatsapp" className="Logo" />
                 <Input className="pesquisa"/>
               <div className="btns">
               <button>
                     <Add/>
                     Adicionar Grupos
                 </button>
                 <button>
                     Meus Grupos
                 </button>
                 <AccountCircle/>
               </div>

            </div>
        </>
    )
}
import React from "react";
import MediaCard from "../../Components/Card";
import { MenuTop } from "../../Components/Menu";

export function Home(){
    return(
        <>
        <nav className="header">
            <MenuTop />
        </nav>
        <div className="content">
            <MediaCard />
        </div>
        </>
    )
}
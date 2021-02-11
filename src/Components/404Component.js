import React from "react";
import pagenotfound from './pagenotfound.svg';
import "../style/style404.css";
export default function HomeComponent(){
    return(
        
        <div>
        <img src="./page-not-found.svg" alt="vector"/>
        <div class="wrapper">
    <h1>Page Not Found</h1>
        <p class="message">Lo sentimos, Pero la pagina que busca no existe o no se puede encontrar</p>
        <a href="#" class="btn">Volver</a>
        </div>
        </div> 
    );
}
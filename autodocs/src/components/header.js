import React from 'react';
import '../styles/Header.css';
import LogoLado from "../ImagensHeader/LogoLado.png";
import user from "../ImagensHeader/user.png";
import { Router } from 'react-router';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header class="header">
            <img class="logotipo" src={LogoLado}/>
                <ul>
                    <li><Link class = "sair"> Sair</Link></li>
                    <li><img class ="ImagemUser" src={user}/></li>
                </ul>
        </header>
    );
}
export default Header;
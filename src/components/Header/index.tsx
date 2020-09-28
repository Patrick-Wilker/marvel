import React from 'react';

import logo from '../../assets/images/logo.png';

import {Container} from './styles';

export default function Header(){
    return(
        <Container>
            <header>
                <img src={logo} alt="Marvel"/>
            </header>
            <nav>
                <ul>
                    <li>CHARACTERS</li>
                    <li>COMICS</li>
                </ul>
            </nav>
        </Container>
    );
}
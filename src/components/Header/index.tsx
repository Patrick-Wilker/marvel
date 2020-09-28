import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import {Container} from './styles';

export default function Header(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <img src={logo} alt="Marvel"/>
                </Link>
                
            </header>
            <nav>
                <ul>
                    <Link to="/characters"><li>CHARACTERS</li></Link>
                    <Link to="/comics"><li>COMICS</li></Link>
                </ul>
            </nav>
        </Container>
    );
}
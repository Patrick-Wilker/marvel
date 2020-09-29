import React from 'react';

import Header from '../../components/Header';

import {Search, Results} from './styles';

export default function Home(){
    return(
        <>
            <Header/>
            <Search>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="search">Informe o personagem</label>
                        <input type="text" id="search" placeholder="(Ex: Hulk, Iron Man, Spider-Man, etc)"/>                     
                    </div>
                    <div className="button">
                        <button>
                            Buscar
                        </button>
                    </div>
                </form>                
            </Search>

            <Results>
                <h1>Personagem</h1>

                <div className="character">
                    <div className="character-img">
                        <img src="https://upload.wikimedia.org/wikipedia/pt/9/91/Bruce_Banner.jpg" alt="Hulk"/>
                    </div>
                    <div className="character-content">
                        <h2>Hulk</h2>
                        <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.</p>
                        <span>Comics | 1583</span>

                        <footer>
                            Data provided by Marvel &copy; 2020 Marvel
                        </footer>
                    </div>
                </div>

                <h1>Histórias em quadrinhos</h1>

                <ul className="comics">
                    <li>
                        <div className="comic-img">
                            <img src="https://upload.wikimedia.org/wikipedia/pt/9/91/Bruce_Banner.jpg" alt="Hulk"/>
                        </div>
                        <div className="comic-content">
                            <div className="text">
                               <h2>Titulo</h2>
                                <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.</p>

                                <span>Criador: Fulano</span> 
                            </div>
                            
                            <footer>
                                <span>Data provided by Marvel &copy; 2020 Marvel</span>
                            </footer>
                        </div>
                    </li>

                    <li>
                        <div className="comic-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNW4l9kEi1xGPbK75hvqnrOlOV4S4FB1QiHw&usqp=CAU" alt="Hulk"/>
                        </div>
                        <div className="comic-content">
                            <div className="text">
                                <h2>Titulo</h2>
                                <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.</p>

                                <span>Criador: Fulano</span>                                
                            </div>

                            <footer>
                                <span>Data provided by Marvel &copy; 2020 Marvel</span>
                            </footer>
                        </div>
                    </li>
                    <li>
                        <div className="comic-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSieBqtLwWlPpJ-quR2d8uGM7pEVuLXn3hK7w&usqp=CAU" alt="Hulk"/>
                        </div>
                        <div className="comic-content">
                            <div className="text">
                                <h2>Titulo</h2>
                                <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.</p>

                                <span>Criador: Fulano</span>                                
                            </div>
                            <footer>
                                <span>Data provided by Marvel &copy; 2020 Marvel</span>
                            </footer>
                        </div>
                    </li>
                    <li>
                        <div className="comic-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4LrEf2wkGsn_650oIxMcUE-_p3iD9hP70iQ&usqp=CAU" alt="Hulk"/>
                        </div>
                        <div className="comic-content">
                            <div className="text">
                                <h2>Titulo</h2>
                                <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.</p>

                                <span>Criador: Fulano</span>                                
                            </div>
                            <footer>
                                <span>Data provided by Marvel &copy; 2020 Marvel</span>
                            </footer>
                        </div>
                    </li>
                    <li>
                        <div className="comic-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdX5GVikzwxXaXaZBzwNO6FjiqaDxMLhKSbg&usqp=CAU" alt="Hulk"/>
                        </div>
                        <div className="comic-content">
                            <div className="text">
                                <h2>Titulo</h2>
                                <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.</p>

                                <span>Criador: Fulano</span>                                
                            </div>
                            <footer>
                                <span>Data provided by Marvel &copy; 2020 Marvel</span>
                            </footer>
                        </div>
                    </li>

                </ul>
            </Results>
        </>
    );
}
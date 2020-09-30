import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ts, hash } from '../../services/marvelConfig';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Characters() {

    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [characters, setCharacters] = useState([{
        id: 0, name: '', description: '', thumbnail: { path: '', extension: '' }, comics: { available: 0 }
    }]);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const response = await api.get(`/characters?ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);

            setCharacters(response.data.data.results);
            setLoading(false);
        }

        load();
    }, [])

    async function loadMore() {
        setLoadingMore(true);

        const offset = characters.length;

        const response = await api.get(`/characters?offset=${offset}&ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);

        const newCharacters = ([...characters, ...response.data.data.results]);

        setCharacters(newCharacters)

        setLoadingMore(false);
    }

    return (
        <>
            <Header />
            <Container>

                {
                    loading ? <h1>Loading...</h1> : (
                        <ul className="characters">

                            {
                                characters.map((character, i) => {
                                    return (<li key={character.id}>
                                        <div className="character-img">
                                            <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                                        </div>
                                        <div className="character-content">
                                            <div className="text">
                                                <h2>{character.name}</h2>
                                                <p>{character.description ? character.description : 'No description available'}</p>

                                                <span>
                                                    Comics | {character.comics.available}
                                                </span>

                                            </div>

                                            <footer>
                                                <span>Data provided by Marvel &copy; 2020 Marvel</span>
                                            </footer>
                                        </div>
                                    </li>)
                                })
                            }

                        </ul>
                    )
                }


                {
                    loading ? '' : <div className="button">
                        <button onClick={loadMore}>
                            {loadingMore ? 'Loading' : 'More'}
                        </button>
                    </div>
                }

            </Container>
        </>
    );
}
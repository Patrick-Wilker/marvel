import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ts, hash } from '../../services/marvelConfig';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Comics() {

    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [comics, setComics] = useState([{
        id: 0, title: '', description: '', thumbnail: { path: '', extension: '' },
        creators: { available: 0, items: [{ name: '' }] }
    }]);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const response = await api.get(`/comics?ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);

            setComics(response.data.data.results);
            setLoading(false);
        }

        load();
    }, [])

    async function loadMore() {
        setLoadingMore(true);

        const offset = comics.length;

        const response = await api.get(`/comics?offset=${offset}&ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);

        const newComics = ([...comics, ...response.data.data.results]);

        setComics(newComics)

        setLoadingMore(false);
    }

    return (
        <>
            <Header />
            <Container>

                {
                    loading ? <h1>Loading...</h1> : (
                        <ul className="comics">
                            {
                                comics.map((comic, i) => {
                                    return (<li key={i}>
                                        <div className="comic-img">
                                            <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title} />
                                        </div>
                                        <div className="comic-content">
                                            <div className="text">
                                                <h2>{comic.title}</h2>
                                                <p>{comic.description ? comic.description : 'No description available'}</p>

                                                <span>
                                                    Criador | {
                                                        comic.creators.items.length === 0
                                                            ? 'Unknown'
                                                            : comic.creators.items.length === 1
                                                                ? comic.creators.items.map(item =>
                                                                    item.name)
                                                                : comic.creators.items.map((item, i) =>
                                                                    comic.creators.available === (i + 1) ?
                                                                        item.name + ' ' : item.name + ' | ')
                                                    }
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
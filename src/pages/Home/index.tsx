import React, { FormEvent, useState, useEffect } from 'react';
import api from '../../services/api';
import { ts, hash } from '../../services/marvelConfig';

import Header from '../../components/Header';

import { Search, Results } from './styles';

function Home(props: any) {

    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState(
        { id: 0, path: '', name: '', description: '', available: 0 }
    )
    const [comics, setComics] = useState([{
        id: 0, title: '', description: '', thumbnail: { path: '', extension: '' },
        creators: { available: 0, items: [{ name: '' }] }
    }])

    async function handleSearchCharacter(e: FormEvent) {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.get(`/characters?name=${name}&ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);
            const newDatas =
            {
                id: response.data.data.results[0].id,
                path: response.data.data.results[0].thumbnail.path + '.' + response.data.data.results[0].thumbnail.extension,
                name: response.data.data.results[0].name,
                description: response.data.data.results[0].description,
                available: response.data.data.results[0].comics.available,
            };

            setData(newDatas);

            if (response.data.data.results.length === 0) {
                console.log('Not found character');
            }

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        async function loadComics() {
            if (data.id !== 0) {
                const response = await api.get(`/characters/${data.id}/comics?ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);

                setComics(response.data.data.results);

                setLoading(false);
            }
        }

        loadComics()
    }, [data]);

    async function loadMore() {
        setLoadingMore(true);

        const offset = comics.length;

        const response = await api.get(`/characters/${data.id}/comics?offset=${offset}&ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`);

        const newComics = ([...comics, ...response.data.data.results]);

        setComics(newComics)

        setLoadingMore(false);
    }


    return (
        <>
            <Header />
            <Search>
                <form onSubmit={handleSearchCharacter}>
                    <div className="input-group">
                        <label htmlFor="name">Enter the name of the character</label>
                        <input
                            type="text" id="name" placeholder="(Ex: Hulk, Iron Man, Spider-Man, etc)"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="button">
                        <button type="submit">
                            {loading ? 'Loading' : 'Search'}
                        </button>
                    </div>
                </form>
            </Search>

            {
                data.id === 0 ? ''
                    : (
                        <Results>
                            <h1>Character</h1>

                            <div className="character">
                                <div className="character-img">
                                    <img src={data.path} alt={data.name} />
                                </div>
                                <div className="character-content">
                                    <h2>{data.name}</h2>
                                    <p>{data.description}</p>
                                    <span>Comics | {data.available}</span>

                                    <footer>
                                        Data provided by Marvel &copy; 2020 Marvel
                                </footer>
                                </div>
                            </div>

                            <h1>Comics</h1>

                            <ul className="comics">
                                {
                                    comics.length > 0 ? comics.map((comic, i) => {
                                        return (
                                            <li key={comic.id}>
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
                                            </li>
                                        )
                                    })

                                        : ''
                                }
                            </ul>
                            <div className="button">
                                <button onClick={loadMore}>
                                    { loadingMore ? 'Loading' : 'More'}
                                </button>
                            </div>
                        </Results>
                    )
            }

        </>
    );
}

export default Home;
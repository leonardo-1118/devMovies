import Button from '../../components/Button'
import Slider from '../../components/Slider/index'
import api from '../../services/api'
import getImages from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styled'
import { useState, useEffect } from 'react'

function Home () {

    const  [movie, setMovie] = useState()
    const  [topMovies, setTopMovies] = useState()
    const  [topSeries, setTopSeries] = useState()
    const  [popularSeries, setPopularSeries] = useState()
    const  [topActor, setTopActor] = useState()
    
    useEffect( () => {

        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[12])
        }

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')

            setTopMovies(results)
        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')

            setTopSeries(results)
        }

        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('/tv/popular')

            setPopularSeries(results)
        }

        async function getTopActor() {
            const {
                data: { results }
            } = await api.get('/person/popular')
            setTopActor(results)

            console.log(results)
        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopActor()
    }, [])

    return(
        <>
        {movie && (
            <Background img={getImages(movie.backdrop_path)}>
                <Container>
                    <Info>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <ContainerButtons>
                            <Button red={true}>Assista Agora</Button>
                            <Button red={false}>Assista o Trailer</Button>
                        </ContainerButtons>
                    </Info>
                    <Poster>
                        <img 
                            alt='Capa do filme'
                            src={getImages(movie.poster_path)}/>
                    </Poster>
                </Container>
            </Background>
        )}
        {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
        {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
        {topActor && <Slider info={topActor} title={'Atores Populares'} />}
        </>
        
    )
}

export default Home
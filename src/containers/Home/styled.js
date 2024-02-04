import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
`

export const Info = styled.div`
    
    z-index: 2;
    padding: 20px;
    width: 40%;

    h1{
        font-size: 4rem;
        font-weight: 700;
        color: #ffffff;
    }

    p {
        font-size: 1.3rem;
        font-weight: 500;
        color: #ffffff;
        margin-top: 3vh;
        margin-bottom: 25px;
    }
`

export const Poster = styled.div`
    z-index: 2; 

    img {
        width: 45vh;
        border-radius: 30px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 15px;
`
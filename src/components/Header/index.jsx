import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

import { Link, useLocation } from 'react-router-dom'

function Header() {

    const [backChange, setBackChange] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!backChange && window.scrollY > 150) {
            setBackChange(true)
        }

        if (backChange && window.scrollY <= 150) {
            setBackChange(false)
        }
    }

    return (
        <Container backChange={backChange}>
                <img src={Logo} alt='logo-dev-movies' />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
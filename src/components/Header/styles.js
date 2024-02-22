import styled from 'styled-components'

export const Container = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    background-color: ${props => props.backChange ? '#000000' : 'transparent'};
    transition: background-color 0.7s ease-in-out;

    img {
        width: 26%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 45px;
    padding-right: 25px;
`

export const Li = styled.li`
    cursor: pointer;
    font-weight: 600;
    position: relative;
    
    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 138%;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : 0};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -7px;
        background-color: #189b20;
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`
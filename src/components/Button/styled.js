import styled, { css } from 'styled-components'

const buttonStyles = css`
    border: 3px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
    border-radius: 30px;
    cursor: pointer;
    font-size: 120%;
    font-weight: 500;
    width: 15vw;
    height: 55px;
    min-width: 190px;

    &:hover {
        background-color: #ffffff;
        color: #ff0000;
    }
`

export const WhiteButton = styled.button`
    ${buttonStyles}
`

export const RedButton = styled.button`
    ${buttonStyles}
    background-color: #ff0000;
    color: #ffffff;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 13px rgb(255 0 0 / 30%);
        color: #ffffff;
        background-color: #ff0000;
    }
`
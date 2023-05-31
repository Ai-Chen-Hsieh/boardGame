import styled from "styled-components";
import { FavoriteStyled, ClosedStyled } from "./iconStyled"

const GameCardStyled = styled.div`
    width: 100%;
    padding: 0.7em 0.8em;
    display: flex;
    flex-direction: column;
    border: 4px solid #e4e4e4;
    border-radius: 10px;
    position: relative;

    img {
        width: 90%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
        align-self: center;
    }

    &:hover {
        background-color: #E7E7E7;
        cursor: pointer;
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {
        padding: 1em 0.8em;
    }
`

const CardInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em auto;

    h4{
        font-size: 1.4rem;
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {

        h4{
            font-size: 1.2rem;
        }
    }

`

const FavoriteButton = styled(FavoriteStyled)`
    width: 20%;
    height: 20%;
    max-width: 30px;
    max-height: 30px;
    position: absolute;
    top: 3%;
    right: 3%;
    background-color: transparent;
    color: transparent;

    ${GameCardStyled}:hover &{
        color: #fff;
        background-color: #727171;
    }
`

const RemoveButton = styled(ClosedStyled)`
    width: 20%;
    height: 20%;
    max-width: 30px;
    max-height: 30px;
    padding: 5px;
    position: absolute;
    top: 3%;
    right: 3%;
    background-color: transparent;
    color: transparent;

    ${GameCardStyled}:hover &{
        color: #000;
        background-color: #FEF2C8;
    }
   
`

export { 
    GameCardStyled, 
    CardInfoStyled, 
    FavoriteButton,
    RemoveButton
 }

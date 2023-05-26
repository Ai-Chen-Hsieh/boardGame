import styled from "styled-components";
import { Button } from "./buttonStyled";
import { FavoriteStyled, ClosedStyled } from "./iconStyled"

const GameCardStyled = styled.div`
    padding: 0 0.8em;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border: 4px solid #e4e4e4;
    border-radius: 10px;
    position: relative;

    img {
        width: 40%;
        align-self: center;
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {
        flex-direction: row;
    }
`

const CardInfoStyled = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 45px auto 5px auto;

    h4{
        font-size: 1.6rem;
        margin-bottom: 0.5em;
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {
        width: 50%;

        h4{
            font-size: 1.4rem;
        }
    }

`

const InfoCollectionStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    h4 {
        margin-bottom:0.5em;
        
    }    
`
const InfoRowStyled = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin: 0.3em;
    gap: 0.5em;

    @media(min-width: ${({ theme }) => theme.mobile}) {
        font-size: 1rem;
    }
`

const ProductInfoStyled = styled(Button)`
`

const ButtonCollectionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8em;
`

const FavoriteButton = styled(FavoriteStyled)`
    width: 20%;
    height: 20%;
    max-width: 45px;
    max-height: 45px;
    position: absolute;
    top: 3%;
    right: 3%;
`

const RemoveButton = styled(ClosedStyled)`
    position: absolute;
    top: 3%;
    right: 3%;
`

export { 
    GameCardStyled, 
    CardInfoStyled, 
    ProductInfoStyled, 
    InfoCollectionStyled, 
    InfoRowStyled,
    ButtonCollectionStyled,
    FavoriteButton,
    RemoveButton
 }

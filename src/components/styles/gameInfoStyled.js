import styled from "styled-components";
import { ClosedStyled } from "./iconStyled";

const GameInfoContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;

    //避免被navbar蓋住
    z-index: 4;
`

const GameInfoStyled = styled.div`
    width: 90%;
    height: 85%;
    max-height: 750px;
    position: fixed;
    inset: 0;
    margin: auto;

    padding: 0.8em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    box-shadow: 0px 0px 5px 5px rgba(200, 200, 200, 0.9);
    background-color: #fff;

    @media(min-width: ${({ theme }) => theme.mobile}) {
        width: 50%;
        height: 60%;
        flex-direction: row;
    }

    @media(min-width: ${({ theme }) => theme.medium}) {
        max-width: 900px;
    }
`

const GameImgStyled = styled.img`
    width: 40%;
    aspect-ratio: 1/1;
    object-fit: contain;
`

const GameDescriptionStyled = styled.div`
    height: calc(90% - 35px);
`

const GameInfoContent = styled.div`
    width: 90%;
    max-height: 150px;
    border: 2px solid #e4e4e4;
    border-radius: 10px;
    overflow-y: auto;
    padding: 0.5em;
    margin-top: 0.8em;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #e4e4e4; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #aaa; 
        border-radius: 4px;
    }
`

const InfoCollectionStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;    

    h4 {
        margin-bottom:0.5em;
        font-size: 1.6rem;
    }    
    @media(min-width: ${({ theme }) => theme.mobile}){
        h4 {
            font-size: 1.4rem;
        }
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

const ButtonCollectionStyled = styled.div`
    display: flex;
    justify-content: end;
    margin: 1em;
`


const CloseButton = styled(ClosedStyled)`
    width: 20%;
    height: 20%;
    max-width: 35px;
    max-height: 35px;
    padding: 5px;
    position: absolute;
    top: 3%;
    right: 3%;
    cursor: pointer;
`


export { 
    GameInfoContainerStyled, 
    GameInfoStyled, 
    GameImgStyled, 
    GameDescriptionStyled, 
    GameInfoContent, 
    InfoCollectionStyled,
    InfoRowStyled,
    ButtonCollectionStyled,
    CloseButton }
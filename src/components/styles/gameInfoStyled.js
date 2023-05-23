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
    width: 60%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.8em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    box-shadow: 0px 0px 5px 5px rgba(200, 200, 200, 0.9);
    background-color: #fff;

    @media(min-width: ${({ theme }) => theme.mobile}) {
        height: 60%;
        flex-direction: row;
    }

    @media(min-width: ${({ theme }) => theme.medium}) {
        max-width: 900px;
    }
`

const GameImgStyled = styled.img`
    width: 60%;
    height: 60%;

    @media(min-width: ${({ theme }) => theme.mobile}) {
        max-width: 50%;
    }
`

const GameDescriptionStyled = styled.div`
    flex: 1;
`

const GameInfoContent = styled.div`
    width: 90%;
    max-height: 150px;
    border: 2px solid #e4e4e4;
    border-radius: 10px;
    overflow-y: auto;
    padding: 0.5em;
    margin-top: 1em;
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

const CloseButton = styled(ClosedStyled)`
    position: absolute;
    top: 3%;
    right: 3%;
`


export { GameInfoContainerStyled, GameInfoStyled, GameImgStyled, GameDescriptionStyled, GameInfoContent, CloseButton }
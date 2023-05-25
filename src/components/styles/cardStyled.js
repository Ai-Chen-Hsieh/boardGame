import styled from "styled-components";

const CardStyled = styled.div`
    max-width: 80%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
    opacity: 0.8;

    &:hover {
        opacity: 0.6;
        background-color: rgba(0, 0, 0, 0.07);
    }

    @media(min-width: ${({ theme }) => theme.desktop}) {
        gap: 1.2em;
        text-align: start;
    }

`

const CardImgStyled = styled.img`
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;

    @media(min-width: ${({ theme }) => theme.desktop}) {
        width: 60%;
        height: 60%;
    }
`

const CardInfoStyled = styled.div`

    & > span{
        display: block;
        font-size: 1.8em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        text-align: center;
    }

    ${CardStyled}:hover & > h2{
        color: red;
        transition: all ease-in 0.2s;
    }
    
    @media(min-width: ${({ theme }) => theme.desktop}) {
        & > * {
            font-size: 2.8rem;
        }
    }    
`

export { CardStyled, CardImgStyled, CardInfoStyled }
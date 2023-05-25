import styled from "styled-components";

const MainContentStyled =  styled.div`
    width: 90%;
    margin: 0 auto;
    flex: 1;
`

const TitleStyled = styled.h4`
    background-color: #7E7E7E;
    color: #fff;
    padding: 1rem;
    margin: 5vmin auto;
    border-radius: 10px;
    font-size: 1.8rem;

    @media(min-width: ${({ theme }) => theme.medium}) {
        font-size: 1.6rem;
    }
`

export { MainContentStyled, TitleStyled }
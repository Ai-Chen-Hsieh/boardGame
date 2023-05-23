import styled from "styled-components";

const MainContentStyled =  styled.div`
    width: 90%;
    margin: 1rem auto;
    flex: 1;
    padding: 0 1rem; 
`

const TitleStyled = styled.h4`
    background-color: #7E7E7E;
    color: #fff;
    margin: 1rem 0;
    padding: 1rem;
    margin-top: 60px;
    margin-bottom: 1rem;
    border-radius: 10px;

    @media(min-width: ${({ theme }) => theme.medium}) {
        font-size: 1.8rem;
    }
`

export { MainContentStyled, TitleStyled }
import styled from "styled-components";

const MainContentStyled =  styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 100px;
    flex: 1;
`

const TitleStyled = styled.h4`
    margin: 4vmin auto 2vmin auto;
    font-size: 1.8rem;

    @media(min-width: ${({ theme }) => theme.medium}) {
        font-size: 1.6rem;
    }
`

export { MainContentStyled, TitleStyled }
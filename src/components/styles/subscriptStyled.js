import styled from "styled-components";

const SubscriptBannerStyled = styled.div`
    height: 40vh;
    background-color: ${({ theme }) => theme.background.banner};
    border-radius: 60px 0 60px 0;
    margin: 2em 0;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SubscriptButtonStyled = styled.label`
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ bg }) => bg || '#fff'};
    font-size: 1.2rem;
    font-weight: 700;
    &:hover {
        background-color: #e0e0e0;
        color: #000;
        cursor: pointer;
    }
`

const SubscriptContentStyled = styled.div`
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 2em;
    h4 {
        text-align: center;
        font-size: 1.6em;
    }

    @media(min-width: ${({ theme }) => theme.medium}) {
        h4 {
            font-size: 2rem;
        }
    }
`

const SubscriptInputStyled = styled.div`
    display: flex;
    align-items: center;
    input {
        margin-right: 1.5em;
        padding: 0.7rem 0.5rem;
        max-width: 250px;
        border-radius: 5px;
        font-size: 1rem;
    }

    @media(min-width: ${({ theme }) => theme.medium}) {
        input {
            max-width: 400px;
            font-size: 1.4rem;
        }
    }
`

export { 
    SubscriptBannerStyled, 
    SubscriptButtonStyled,
    SubscriptContentStyled,
    SubscriptInputStyled
 }
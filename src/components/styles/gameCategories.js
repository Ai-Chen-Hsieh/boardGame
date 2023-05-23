import styled from "styled-components"

const GameCategoriesCard = styled.div`
    border: 5px solid #FDCF8A;
    border-radius: 10px;
    padding: 1rem 0;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;

    &:hover {
        background-color: #ECB45F;
        border-color: #FFF1DB; 
        color: #fff;
        transition: all ease-in 0.2s;
    }
`

const GameCategoriesStyled = styled.div`
    margin: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
`

export { GameCategoriesStyled, GameCategoriesCard }
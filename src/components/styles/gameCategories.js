import styled from "styled-components"

const Tab = styled.div`
    margin: 1em 0;
    input {
        visibility: hidden;
        position: absolute;
    }

    input:checked + label {
        background-color: #F8ECC2;
        border-color: #FDCF8A; 
        transition: all ease-in 0.1s;
    }

`

const GameCategoriesTab = styled.label`
    display: block;
    width: 100%;
    border-bottom: 5px solid transparent;
    border-radius: 5px;
    background-color: #e4e4e4;
    color: #545454;
    padding: 0.8em 0;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;

    &:hover{
        border-color: #FDCF8A; 
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.4rem;
    }
`

const GameCategoriesStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12%, 120px));
    justify-content: center;
    gap: 1em;
    margin-bottom: 2em;
    @media(min-width: ${({ theme }) => theme.mobile}){
        justify-content: space-between;
    }
    
`

const GameCategoryContainer= styled.div`
`

const GameCategoriesList = styled.div`
    display: flex;
`

export { 
    GameCategoriesStyled, 
    GameCategoriesTab, 
    GameCategoryContainer, 
    GameCategoriesList,
    Tab
 }
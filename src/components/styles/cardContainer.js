import styled from "styled-components";


const CardContainerStyled = styled.div`
    min-height: 300px;
    width: 90%;
    margin: 2em auto;
    padding: 1.2em;
    display: grid;
    grid-template-columns: minmax(300px, 80%);
    grid-template-rows: repeat(3, 400px);
    grid-gap: 0.5em;
    justify-items: center;
    justify-content: center;


    @media(min-width:${({ theme }) => theme.medium}) {
        grid-template-rows: minmax(300px, 450px);
        grid-template-columns: repeat(3, minmax(300px, 500px));
    }
` 

export { CardContainerStyled }
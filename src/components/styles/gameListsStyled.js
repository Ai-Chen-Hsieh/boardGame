import styled from "styled-components";

const GameListStyled = styled.div`
    flex: 1;
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 450px));
    gap: 0.5em;
    justify-content: center;
`



export { GameListStyled }
import styled from "styled-components";

const GameListStyled = styled.div`
    flex: 1;
    min-height: 200px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    justify-items: center;
    justify-content: center;
    gap: 0.5em;
`



export { GameListStyled }
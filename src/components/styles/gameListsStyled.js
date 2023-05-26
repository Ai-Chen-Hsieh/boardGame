import styled from "styled-components";

const GameListStyled = styled.div`
    flex: 1;
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
    gap: 0.5em;
    justify-content: center;
`



export { GameListStyled }
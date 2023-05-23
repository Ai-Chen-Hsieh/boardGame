import styled from "styled-components";

const FavoriteContentStyled = styled.div`
    width:90%;
    
    margin: 0 auto;
    h1 {
        font-size: 2.4rem;
        color: ${({ color }) => color || '#000'};
    }
`

export { 
    FavoriteContentStyled
 }

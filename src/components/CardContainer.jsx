import { CardContainerStyled } from "./styles/cardContainer";

const CardContainer = ({ children }) => {
    return(
        <CardContainerStyled>
            {children}
        </CardContainerStyled>
    )
}

export default CardContainer
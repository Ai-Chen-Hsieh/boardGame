import { CardStyled, CardImgStyled, CardInfoStyled } from "./styles/cardStyled"

const Card = ({children, img}) => {
    return (
        <CardStyled>
            <CardImgStyled src={img} alt="" />
            <CardInfoStyled>
                {children}
            </CardInfoStyled>
        </CardStyled>
    )
}

export default Card
   
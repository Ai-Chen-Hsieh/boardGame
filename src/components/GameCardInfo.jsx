import { GameInfoContainerStyled, GameInfoStyled, GameImgStyled, GameDescriptionStyled, GameInfoContent, CloseButton } from "./styles/gameInfoStyled";
import { BsPeopleFillStyled, FaDollarSignStyled, BiTimeFiveStyled } from "../components/styles/iconStyled"
import { InfoCollectionStyled, InfoRowStyled } from "./styles/gameCardStyled"

const GameCardInfo = ({game, onClose}) => {
    const description = game.description.replace(/<[^>]*>?/gm, '');
    return (
        <GameInfoContainerStyled onClick={onClose}>
            <GameInfoStyled onClick={(e) => {
                e.stopPropagation()
            }}>
                <GameImgStyled className="cardInfo" src={game.images.small} alt="" />
                <GameDescriptionStyled className="description block">
                    <CloseButton 
                        title="close"
                        onClick={onClose}
                    />
                    <InfoCollectionStyled className="description">
                        <h4>{game.name}</h4>
                        <InfoRowStyled>
                            <FaDollarSignStyled/>
                            <span>{game.price}</span>
                        </InfoRowStyled>
                        <InfoRowStyled>
                            <BsPeopleFillStyled /> 
                            <span>{game.players}</span>
                        </InfoRowStyled>
                        <InfoRowStyled>
                            <BiTimeFiveStyled />
                            <span>{game.playtime}min</span>
                        </InfoRowStyled>
                        <InfoRowStyled>Description:</InfoRowStyled>
                        <GameInfoContent className="description">{description}</GameInfoContent>
                    </InfoCollectionStyled>
                </GameDescriptionStyled>
            </GameInfoStyled>

        </GameInfoContainerStyled>
    )
}

export default GameCardInfo
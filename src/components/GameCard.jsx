import { useLocation } from "react-router-dom"
import { GameCardStyled, CardInfoStyled, ProductInfoStyled, InfoRowStyled, InfoCollectionStyled, ButtonCollectionStyled, RemoveButton, FavoriteButton } from "./styles/gameCardStyled"
import { BsPeopleFillStyled, FaDollarSignStyled, BiTimeFiveStyled, ShopBagIcon } from "../components/styles/iconStyled"

const GameCard = ({game, onAddToFavorite, onRemoveFromFavorite, onAddToCart, onShowDescription}) => {
    const path = useLocation();
    const isAtFavorite = path.pathname === '/favorite';

    return(
        <>
            <GameCardStyled className="gameCard">
                <img src={game.images.medium} alt="game img" />
                    <CardInfoStyled className="cardInfo">
                        {isAtFavorite ? (
                            <RemoveButton title="remove from favorite" onClick={() => {
                                onRemoveFromFavorite?.({id: game.id})
                            }}
                            />
                        ) : (
                            <FavoriteButton title="add to favorite" onClick={() => {
                                onAddToFavorite?.({id: game.id, name: game.name})
                            }} />
                        )}
                        
                        <InfoCollectionStyled className="infoCollection">
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
                        </InfoCollectionStyled>
                        <ButtonCollectionStyled>
                            <ShopBagIcon 
                                title="add to cart" 
                                color="#fff" 
                                bg="#1E385F" 
                                onClick={() => {
                                    onAddToCart?.({item: game})
                                }}/>
                            <ProductInfoStyled 
                                title="see more introduction"
                                bg="#E7E7E7" 
                                onClick={() => onShowDescription?.({game})}>
                                    More...
                            </ProductInfoStyled>
                        </ButtonCollectionStyled>
                    </CardInfoStyled>
            </GameCardStyled>
        </>
    )
}

export default GameCard

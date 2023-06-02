import { useLocation } from "react-router-dom"
import { GameCardStyled, CardInfoStyled, RemoveButton, FavoriteButton } from "./styles/gameCardStyled"

const GameCard = ({game, onAddToFavorite, onRemoveFromFavorite, onShowDescription}) => {
    const path = useLocation();
    const isAtFavorite = path.pathname === '/favorite';

    return(
        <>
            <GameCardStyled className="gameCard" onClick={() => onShowDescription?.({game})}>
                <img src={game.images.medium} alt="game img" />
                    <CardInfoStyled className="cardInfo">
                        {isAtFavorite ? (
                            <RemoveButton title="remove from favorite" onClick={(e) => {
                                e.stopPropagation();
                                onRemoveFromFavorite?.({id: game.id})
                            }}
                            />
                        ) : (
                            <FavoriteButton title="add to favorite" onClick={(e) => {
                                e.stopPropagation();
                                onAddToFavorite?.({id: game.id, name: game.name})
                            }} />
                        )}
                        <h4>{game.name}</h4>
                        {game.price > 0 ? (
                            <p>$ {game.price}</p>
                        ) : (
                            <p>free</p>
                        )}
                    </CardInfoStyled>
            </GameCardStyled>
        </>
    )
}

export default GameCard

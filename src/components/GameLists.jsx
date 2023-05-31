import { useState } from "react";
import { createPortal } from "react-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { GameListStyled } from "./styles/gameListsStyled" 
import { GameCard, GameCardInfo } from "./";
import { LoadingMessageStyled } from "./styles/utilityStyled"

/**
 * 遊戲清單
 * @param {Array} listData - 遊戲清單 
 * @param {Boolean} - 判斷遊戲清單API是否回傳response
 * @returns 
 */

const GameLists = ({ listData, loading, onAddToFavorite, onRemoveFromFavorite }) => {
    const [ showDescription, setShowDescription ] = useState(false);
    const [ gameInfo, setGameInfo ] = useState({});

    //處理遊戲詳細介紹
    function handleShowDescription ({game}) {
        //將點擊的遊戲資訊放入modal內
        setGameInfo(() => game)

        //開啟遊戲modal
        setShowDescription(() => true)
    }

    return(
        <>
            {loading ? (
                <LoadingMessageStyled>
                    <ClipLoader 
                        size={100}
                        color="#666740"
                    />
                    <span>Loading...</span>
                </LoadingMessageStyled>
                
            ) : (
                <>  
                    <GameListStyled>  
                        {listData.map((game) => {
                            return (
                                <GameCard 
                                    key={game.id} 
                                    game={game} 
                                    onAddToFavorite={() => {
                                        onAddToFavorite?.({target: game})
                                    }}
                                    onRemoveFromFavorite={() => {
                                        onRemoveFromFavorite?.({id: game.id, name: game.name})
                                    }}
                                    onShowDescription={handleShowDescription}
                                />
                            )
                        })}      
                    </GameListStyled>
                    {showDescription && createPortal( <GameCardInfo 
                        game={gameInfo}
                        onClose={()=> setShowDescription(false)}
                    /> ,document.body)}

                </>
            )}
        </>
    )

}


export default GameLists

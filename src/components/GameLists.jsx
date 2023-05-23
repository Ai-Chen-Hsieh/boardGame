import { useState,useContext } from "react";
import { createPortal } from "react-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { GameListStyled } from "./styles/gameListsStyled" 
import { GameCard, GameCardInfo } from "./";
import { LoadingMessageStyled } from "./styles/utilityStyled"
import { CartContext } from "../context/cartInfo"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 遊戲清單
 * @param {Array} listData - 遊戲清單 
 * @param {Boolean} - 判斷遊戲清單API是否回傳response
 * @returns 
 */

const GameLists = ({ listData, loading, onAddToFavorite, onRemoveFromFavorite }) => {
    const [ showDescription, setShowDescription ] = useState(false);
    const [ gameInfo, setGameInfo ] = useState({});
    const { addToCart } = useContext(CartContext)

    //處理遊戲詳細介紹
    function handleShowDescription ({game}) {
        //將點擊的遊戲資訊放入modal內
        setGameInfo(() => game)

        //開啟遊戲modal
        setShowDescription(() => true)
    }

    //處理加入購物車
    function handleAddToCart({item}) {
        addToCart(item);
        toast.success(`【${item.name}】have been added to the shopping cart`, {
            theme: "light",
            position: toast.POSITION.TOP_CENTER,
            })
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
                                        onAddToFavorite?.({id: game.id})
                                    }}
                                    onRemoveFromFavorite={() => {
                                        onRemoveFromFavorite?.({id: game.id, name: game.name})
                                    }}
                                    onAddToCart={handleAddToCart}
                                    onShowDescription={handleShowDescription}
                                />
                            )
                        })}      
                        <ToastContainer autoClose={2000}/>
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

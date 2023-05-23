import { useState } from "react";
import { FavoriteContentStyled } from "./styles/favoriteContentStyled"
import { GameLists } from "../components/"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoriteContent = () => {
    const favoriteList = JSON.parse(localStorage.getItem('favorite_game')) || [];
    const [ storageGame, setStorageGame ] = useState(favoriteList);

    //移除收藏
    function handleRemoveFromFavorite ({id, name}) {
        const removeGameIndex = storageGame.findIndex(game => game.id === id);
        //若game不存在則return 
        if(removeGameIndex === -1) return 

        //將刪除的game從清單中移除
        const newStorageGames = storageGame.filter(game => game.id !== id);
        localStorage.setItem('favorite_game', JSON.stringify(newStorageGames));

        toast.success(`【${name}】has already remove from favorite`, {
            theme: "dark",
            position: toast.POSITION.TOP_CENTER,
            })

        setStorageGame(newStorageGames);
    }

    return (
        <FavoriteContentStyled color="#71908F">
            {(favoriteList.length === 0) ? (
              <h1>You don&apos;t have any favorite game yet</h1>
            ) : (
                <GameLists 
                    listData={favoriteList}
                    onRemoveFromFavorite={handleRemoveFromFavorite}    
                />
            )}
            <ToastContainer autoClose={2000}/>
        </FavoriteContentStyled>
    )
}

export default FavoriteContent
import { GameCategoriesStyled, GameCategoriesCard } from "./styles/gameCategories"
import { LoadingMessageStyled } from "./styles/utilityStyled"
import ClipLoader from "react-spinners/ClipLoader";


/**
 * 遊戲種類列表
 * @param {Array} listData - 遊戲種類清單
 * @param {Boolean} isCategoryLoading - 判斷遊戲種類清單API是否回傳response
 * @returns 
 */

const GameCategories = ({listData, loading}) => {

    return (
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
                <GameCategoriesStyled>
                {listData.map((category) => {
                    return(
                        <GameCategoriesCard key={category.id}>
                            <span>{category.name}</span>    
                        </GameCategoriesCard>
                    )
                })}
                </GameCategoriesStyled>
            )}
        </>
        
    )
}

export default GameCategories 

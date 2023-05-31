import { GameCategoriesStyled, GameCategoriesTab, GameCategoryContainer, GameCategoriesList, Tab } from "./styles/gameCategories"
import { LoadingMessageStyled } from "./styles/utilityStyled"
import ClipLoader from "react-spinners/ClipLoader";


/**
 * 遊戲種類列表
 * @param {Array} listData - 遊戲種類清單
 * @param {Boolean} isCategoryLoading - 判斷遊戲種類清單API是否回傳response
 * @returns 
 */

const GameCategories = ({listData, loading, onSearchCategory, children}) => {

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
                <GameCategoryContainer>
                    <GameCategoriesStyled>
                        {listData.map((category, index) => {
                            return(
                                <Tab key={category.id} >
                                    <input 
                                        type="radio" 
                                        name="category"
                                        id={category.id}
                                        defaultChecked={index === 0}
                                        value={category.name}
                                        onClick={e=> {
                                            e.stopPropagation()}}
                                        />
                                    <GameCategoriesTab 
                                        htmlFor={category.id}
                                        onClick={()=>{
                                            onSearchCategory(category.name)
                                        }}
                                        >
                                        {category.name}    
                                    </GameCategoriesTab>

                                </Tab>
                               
                            )
                        })}
                    </GameCategoriesStyled>
                    <GameCategoriesList>
                        {children}
                    </GameCategoriesList>
                </GameCategoryContainer>
            )}
        </>
        
    )
}

export default GameCategories 

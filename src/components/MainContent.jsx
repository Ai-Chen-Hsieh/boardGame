import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContentStyled, TitleStyled } from "./styles/mainContentStyled"
import { SearchBlockStyled, SearchInput } from "./styles/searchStyled"
import { SlMagnifierIcon } from "./styles/iconStyled"
import { GameLists, GameCategories, CardContainer, Card, SubscriptBanner } from "../components/index"
import { getGameList, getGameCategory, getSearchResult } from "../api/gameList" 
import img_chess from "../assets/img_chess.jpg";
import img_game from "../assets/img_game.jpg"
import img_people from "../assets/img_people.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//dummy game list
import { generateDummyList } from "../dummyData/dummyGameList"
import { dummyCategoryList } from "../dummyData/dummyGameCategories"

/**
 * 主要內容
 * @returns 
 */

const MainContent = () => {
    const [ list, setList ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ categoryGame, setCategoryGame ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isCategoryLoading, setIsCategoryLoading ] = useState(true);

    const navigate = useNavigate();
    const inputRef = useRef(null);

    //處理加入收藏
    function handleAddToFavorite ({target}) {

        //收藏遊戲清單，若有清單則getItem否則為空陣列
        const storageGame = JSON.parse(localStorage.getItem('favorite_game')) || [];

        //若已經在收藏哩，跳"已收藏"通知；否則加入收藏
        if(storageGame.some(game => game.id === target.id)){
            return (
                toast.error(`【${target.name}】has already in favorite`, {
                    position: toast.POSITION.TOP_CENTER
                })
            )
        } else {
            toast.success(`Add 【${target.name}】 into favorite`, {
                theme: "dark",
                position: toast.POSITION.TOP_CENTER,
                })
        }

        //將遊戲存入localStorage
        storageGame.push(target);
        localStorage.setItem('favorite_game', JSON.stringify(storageGame))
    }

    //處理搜尋
    function handleSearch () {
        const isEmpty = inputRef.current.value.trim().length === 0;

        //若為空值跳出錯誤提示
        if(isEmpty){
            toast.error(`search block cannot be blank`, {
                theme: "light",
                position: toast.POSITION.TOP_CENTER,
                })
            return 
        }

        navigate(`/search/${inputRef.current.value}`)

        //清空搜尋框內容
        inputRef.current.value = ''
    }

    //處理類別標籤
    function handleCategoryGame (category) {
        const categoryGames = async () => {
            try{
                const result = await getSearchResult(category);
                setCategoryGame(() => result)
            } catch(error){
                console.error(error)
            }
        }
        categoryGames()
    }

    // 呼叫game list & categoryList API
    useEffect(()=>{
        const result = async () => {
            try {
                const [gameList, categoriesList]  = await Promise.all([
                    getGameList() || generateDummyList,
                    getGameCategory() || dummyCategoryList
                ])
                const { category, firstCategoryGame } = categoriesList;

                setList(() => gameList);
                
                setCategories(() => category);
                setCategoryGame(() => firstCategoryGame)
                setIsLoading(() => false);
                setIsCategoryLoading(()=> false)
            } catch (error) {
                console.log(error, 'get list or game category failed')
            }
        }
        result()
    },[])

    return (
        <MainContentStyled className="mainContent">
            <SearchBlockStyled>
                <label htmlFor="search">
                    <SlMagnifierIcon title="search" onClick={handleSearch}/>
                </label>
                <SearchInput 
                    type="text"
                    id="search" 
                    placeholder="Search store" 
                    ref={inputRef}
                    onClick={e => e.stopPropagation()}
                    onKeyDown={e => {
                        if(e.key === 'Enter'){
                            handleSearch()
                        }
                    }}
                    />
            </SearchBlockStyled>
            <TitleStyled>Popular Games</TitleStyled>
            <GameLists 
                listData={list} 
                loading={isLoading}
                onAddToFavorite={handleAddToFavorite}
            />
            <TitleStyled>Categories</TitleStyled>
            <GameCategories 
                listData={categories} 
                loading={isCategoryLoading}
                onSearchCategory={handleCategoryGame}>
                <GameLists 
                    listData={categoryGame} 
                    onAddToFavorite={handleAddToFavorite}
                />
            </GameCategories>
            <CardContainer>
                <Card img={img_chess}>
                    <span>Creative</span>
                    <span>Innovation</span>
                    <span>For all ages</span>
                </Card>
                <Card img={img_game}>
                    <span>Playful</span>
                    <span>strategy</span>
                </Card>
                <Card img={img_people}>
                    <span>Party game</span>
                    <span>Multiple</span>
                </Card>
            </CardContainer>
            <SubscriptBanner />
            <ToastContainer autoClose={2000}/>
        </MainContentStyled>
    )
}

export default MainContent
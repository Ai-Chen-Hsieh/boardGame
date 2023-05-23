import { useEffect, useState } from 'react'
import { MainContentStyled, TitleStyled } from "./styles/mainContentStyled"
import { GameLists, GameCategories, CardContainer, Card, SubscriptBanner } from "../components/index"
import { getGameList, getGameCategory } from "../api/gameList" 
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
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isCategoryLoading, setIsCategoryLoading ] = useState(true);

    //處理加入收藏
    function handleAddToFavorite ({id}) {
        //收藏遊戲清單，若有清單則getItem否則為空陣列
        const storageGame = JSON.parse(localStorage.getItem('favorite_game')) || [];
        
        //找到點擊的遊戲
        const game = list.find(game => game.id === id);

        //若已經在收藏哩，跳"已收藏"通知；否則加入收藏
        if(storageGame.some(game => game.id === id)){
            return (
                toast.error(`【${game.name}】has already in favorite`, {
                    position: toast.POSITION.TOP_CENTER
                })
            )
        } else {
            toast.success(`Add 【${game.name}】 into favorite`, {
                theme: "dark",
                position: toast.POSITION.TOP_CENTER,
                })
        }

        //將遊戲存入localStorage
        storageGame.push(game);
        localStorage.setItem('favorite_game', JSON.stringify(storageGame))
    }

    // 呼叫game list API
    useEffect(()=>{
        const result = async () => {
            try {
                const gameList = await getGameList() || generateDummyList;
                setList(() => gameList);
                setIsLoading(() => false);
            } catch (error) {
                console.log(error, 'get list failed')
            }
        }
        result()
    },[])

    //呼叫category game API
    useEffect(()=> {
        const result = async () => {
            try{
                const categoriesList = await getGameCategory() || dummyCategoryList;
                setCategories(() => categoriesList);
                setIsCategoryLoading(()=> false)

            } catch (error) {
                console.log(error, 'get game category fail')
            }
        }
        result()
    },[])

    return (
        <MainContentStyled className="mainContent">
            <TitleStyled>Popular</TitleStyled>
            <GameLists 
                listData={list} 
                loading={isLoading}
                onAddToFavorite={handleAddToFavorite}
            />
            <TitleStyled>Categories</TitleStyled>
            <GameCategories listData={categories} loading={isCategoryLoading}/>
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
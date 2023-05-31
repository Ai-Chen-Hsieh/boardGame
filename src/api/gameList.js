import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const getGameList = async () => {
    try {
        const data = await axios.get(`https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&limit=15&client_id=${key}`);
        return data.data.games
    } catch (error){
        console.error(error,'error')
    }
}

const getGameCategory = async () => {
    try{
        const data = await axios.get(`https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=${key}`);
        const category = data.data.categories.slice(0, 6);
        const firstCategoryGameResult = await axios.get(`https://api.boardgameatlas.com/api/search?name=${category[0].name}&pretty=true&limit=10&client_id=${key}`);
        const firstCategoryGame = firstCategoryGameResult.data.games;
        const result = {category, firstCategoryGame};
        return result
    } catch (error) {
        console.error(error)
    }
}

const getSearchResult = async (word) => {
    try {
        const data = await axios.get(`https://api.boardgameatlas.com/api/search?name=${word}&pretty=true&limit=10&client_id=${key}`);
        return data.data.games
    } catch (error) {
        console.error(error)
        return []
    }
}

export { getGameList, getGameCategory, getSearchResult }
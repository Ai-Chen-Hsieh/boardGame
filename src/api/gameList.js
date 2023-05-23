import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const getGameList = async () => {
    try {
        const data = await axios.get(`https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&limit=8&client_id=${key}`);
        return data.data.games
    } catch (error){
        console.error(error,'error')
    }
}

const getGameCategory = async () => {
    try{
        const data = await axios.get(`https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=${key}`);
        const TopData = data.data.categories.slice(0, 10);
        return TopData
    } catch (error) {
        console.error(error)
    }
}


export { getGameList, getGameCategory }
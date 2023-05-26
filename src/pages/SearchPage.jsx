import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" 
import { SearchPageStyled } from "./styles/searchPageStyled"
import { GameLists } from "../components"
import { getSearchResult } from "../api/gameList"

const SearchPage = () => {
    const { word } = useParams();
    const [ list, setList ] = useState([]);

    useEffect(() => {
        const result = async () => {
            try {
                const searchResult = await getSearchResult(word);

                //未搜尋到相符結果
                if(searchResult.length === 0){
                    setList(() => [])
                    return
                }
                setList(() => searchResult)
            } catch (error) {
                console.error(error)
            }
        }
        result()
    }, [word])

    return(
        <SearchPageStyled>
            <h3> Search &apos;{word}&apos; result:</h3>
            <GameLists listData={list}/>
        </SearchPageStyled>
       
    )
}

export default SearchPage
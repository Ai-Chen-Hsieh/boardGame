import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" 
import ClipLoader from "react-spinners/ClipLoader";
import { LoadingMessageStyled } from "../components/styles/utilityStyled"
import { SearchPageStyled } from "./styles/searchPageStyled"
import { GameLists } from "../components"
import { getSearchResult } from "../api/gameList"

const SearchPage = () => {
    const { word } = useParams();
    const [ list, setList ] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = async () => {
            try {
                const searchResult = await getSearchResult(word);

                //未搜尋到相符結果
                if(searchResult.length === 0){
                    setList(() => [])
                    return
                }
                setIsLoading(() => false)
                setList(() => searchResult)
            } catch (error) {
                console.error(error)
            }
        }
        result()
    }, [word])

    return(
        <>
        {isLoading ? (
                <LoadingMessageStyled>
                    <ClipLoader 
                        size={100}
                        color="#666740"
                    />
                    <span>Loading...</span>
                </LoadingMessageStyled>
                
            ) : (
            <SearchPageStyled>
                <h3> Search &apos;{word}&apos; result:</h3>
                <GameLists listData={list}/>
            </SearchPageStyled>
        )}
        </>
       
    )
}

export default SearchPage
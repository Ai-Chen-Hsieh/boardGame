import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom" 
import ClipLoader from "react-spinners/ClipLoader";
import { SearchBlockStyled, SearchInput } from "../components/styles/searchStyled"
import { LoadingMessageStyled } from "../components/styles/utilityStyled"
import { SearchPageStyled } from "./styles/searchPageStyled"
import { SlMagnifierIcon } from "../components/styles/iconStyled"
import { GameLists } from "../components"
import { getSearchResult } from "../api/gameList"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchPage = () => {
    const { word } = useParams();
    const [ list, setList ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const inputRef = useRef(null);

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
            <SearchPageStyled>
                <LoadingMessageStyled>
                    <ClipLoader 
                        size={100}
                        color="#666740"
                    />
                    <span>Loading...</span>
                </LoadingMessageStyled>
            </SearchPageStyled>
            ) : (
            <SearchPageStyled>
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
                <h3> Search &apos;{word}&apos; result:</h3>
                <GameLists listData={list}/>
                <ToastContainer autoClose={2000}/>
            </SearchPageStyled>
        )}
        </>
       
    )
}

export default SearchPage
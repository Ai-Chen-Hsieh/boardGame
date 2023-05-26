import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Logo } from "./styles/iconStyled"
import { NavbarStyled, Nav, TabStyled, TabItem, ToolKitStyled, SearchBlockStyled, SearchInput, Hamburger, HamburgerLabel, ToggleHamburger } from "./styles/navbarStyled"
import { CubeIcon, ShopBagIcon, AccountIcon, SlMagnifierIcon } from "./styles/iconStyled";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const [ showCart, setShowCart ] = useState(false);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    
    //處理購物車視窗
    function handleShowCart () {
        setShowCart(() => true)
    }

    //處理搜尋
    function handleSearch () {
        const isEmpty = inputRef.current.value.trim().length === 0;

        //若為空值跳出錯誤提示
        if(isEmpty){
            toast.error(`search block cannot be empty`, {
                theme: "light",
                position: toast.POSITION.TOP_CENTER,
                })
            return 
        }

        navigate(`/search/${inputRef.current.value}`)

        //清空搜尋框內容
        inputRef.current.value = ''
    }

    const mainContent = document.querySelector('.mainContent');

    return (
        <>
            <NavbarStyled>
                <Logo to="/" title="BoardGames.Com">
                    <CubeIcon />
                    <p>BoardGames.Com</p>
                </Logo>

                <ToggleHamburger type="checkbox" id="hamburgerLabel"/>
                <Nav>
                    <TabStyled>
                        <TabItem to="/favorite">Favorite</TabItem>
                    </TabStyled>
                    
                    <ToolKitStyled>
                        <SearchBlockStyled>
                            <label htmlFor="search">
                                <SlMagnifierIcon title="search" onClick={handleSearch}/>
                            </label>
                            <SearchInput 
                                type="text"
                                id="search" 
                                placeholder="Search game" 
                                ref={inputRef}
                                onClick={e => e.stopPropagation()}
                                onKeyDown={e => {
                                    if(e.key === 'Enter'){
                                        handleSearch()
                                    }
                                }}
                                />
                        </SearchBlockStyled>
                        <ShopBagIcon
                           title="shopping cart"
                           onClick={handleShowCart}
                         />
                        <AccountIcon 
                            title="account"
                            color="#fff"/>
                    </ToolKitStyled>    
                </Nav>
                <Hamburger htmlFor="hamburgerLabel">
                    <HamburgerLabel />
                </Hamburger>
                <ToastContainer autoClose={2000}/>
            </NavbarStyled>
            {showCart && createPortal( <Cart 
                onClose={() => setShowCart(false)}
            /> ,mainContent)}
        </>
       
    )
}

export default Navbar


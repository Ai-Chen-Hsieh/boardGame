import { createPortal } from "react-dom";
import { useState } from "react";
import { Logo } from "./styles/iconStyled"
import { NavbarStyled, Nav, TabStyled, TabItem, ToolKitStyled, SearchBlockStyled, SearchInput, Hamburger, HamburgerLabel, ToggleHamburger } from "./styles/navbarStyled"
import { CubeIcon, ShopBagIcon, AccountIcon, SlMagnifierIcon } from "./styles/iconStyled";
import Cart from "./Cart";

const Navbar = () => {
    const [ showCart, setShowCart ] = useState(false);

    //處理購物車視窗
    function handleShowCart () {
        setShowCart(() => true)
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
                                <SlMagnifierIcon />
                            </label>
                            <SearchInput type="text" id="search"/>
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
            </NavbarStyled>
            {showCart && createPortal( <Cart 
                onClose={() => setShowCart(false)}
            /> ,mainContent)}
        </>
       
    )
}

export default Navbar


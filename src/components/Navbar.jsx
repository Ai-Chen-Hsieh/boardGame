import { createPortal } from "react-dom";
import { useState } from "react";
import { Logo } from "./styles/iconStyled"
import { NavbarStyled, Nav, TabStyled, TabItem, Hamburger, HamburgerLabel, ToggleHamburger } from "./styles/navbarStyled"
import { CubeIcon, ShopBagIcon, AccountIcon } from "./styles/iconStyled";
import Cart from "./Cart";

const Navbar = () => {
    const [ showCart, setShowCart ] = useState(false);
    
    //處理購物車視窗
    function handleShowCart () {
        setShowCart(() => true)
    }

    return (
        <>
            <NavbarStyled>
                <Logo to="/" title="BoardGames.Com">
                    <CubeIcon />
                    <p>BoardGames.Com</p>
                </Logo>

                <ToggleHamburger type="checkbox" id="hamburgerLabel"/>
                <Nav className="nav">
                    <TabStyled className="tab"> 
                        <TabItem to="/favorite" className="tabItem">Favorite</TabItem>
                        <ShopBagIcon
                           title="shopping cart"
                           onClick={handleShowCart}
                         />
                        <AccountIcon 
                            title="account"
                            color="#fff"/>
                    </TabStyled>
                </Nav>
                <Hamburger htmlFor="hamburgerLabel">
                    <HamburgerLabel />
                </Hamburger>
            </NavbarStyled>
            {showCart && createPortal( <Cart 
                onClose={() => setShowCart(false)}
            /> ,document.body)}
        </>
       
    )
}

export default Navbar


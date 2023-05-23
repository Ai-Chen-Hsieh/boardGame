import { Outlet } from "react-router-dom"
import { MainPageStyled } from "./styles/mainPageStyled"
import { Navbar, Footer } from "../components"

const MainPage = () => {
    return(
        <MainPageStyled className="mainPage">
            <Navbar />
                <Outlet />
            <Footer />
        </MainPageStyled>
    )
}

export default MainPage
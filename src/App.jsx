import GlobalStyle from "./components/styles/globalStyled"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage, FavoritePage, SearchPage } from "./pages"
import { MainContent } from "./components"
import { CartProvider } from "./context/cartInfo"

function App() {

  const theme = {
    colors: {
      primary: '#f33033',
      main: '#fff',
      hover: '#FCFF5C',
      socialIcon: '#0B9890',
      secondary: '#1E385F',
      price: '#a9a9a9'
    },
    button: {
      primary: '#FFE4CA',
      hover: '#F9A366'
    },
    background: {
      navbar: '#1E385F',
      mainPage: '#F6F5F5',
      footer: '#3A6190',
      banner: '#FF7B5E',
      cart: '#1E385F'
    },
    mobile: '768px',
    medium: '970px',
    desktop: '1360px',
  }

  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <CartProvider>
          <GlobalStyle />
            <Routes>
              <Route path="*" element={<MainPage />}>
                <Route path="search/:word" element={<SearchPage />}></Route>
                <Route path="favorite" element={<FavoritePage />}></Route>
                <Route index element={<MainContent />} />
              </Route>
            </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

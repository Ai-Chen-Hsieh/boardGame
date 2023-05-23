import { FooterStyled, SocialIconsStyled, FooterContentStyled, ContentItem } from "./styles/footerStyled"
import { Logo, FaInstagramStyled, FaFacebookStyled, FaYoutubeStyled, CubeIcon } from "./styles/iconStyled"

const Footer = () => {
    return(
        <FooterStyled>
            <FooterContentStyled>
                <ContentItem>About us</ContentItem>
                <ContentItem>Contact us</ContentItem>
                <ContentItem>Private Policy</ContentItem>
                <ContentItem>FAQ</ContentItem>
            </FooterContentStyled>

            <SocialIconsStyled>
                <FaInstagramStyled/>
                <FaFacebookStyled />
                <FaYoutubeStyled />
            </SocialIconsStyled>
            <Logo to="/">
                <CubeIcon />
                <p>BoardGames.Com</p>
            </Logo>
        </FooterStyled>
    )
}

export default Footer
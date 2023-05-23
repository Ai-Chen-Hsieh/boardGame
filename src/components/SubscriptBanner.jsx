import { SubscriptBannerStyled, SubscriptButtonStyled, SubscriptContentStyled, SubscriptInputStyled } from "./styles/subscriptStyled";

const SubscriptBanner = () => {
    return (
        <SubscriptBannerStyled>
            <SubscriptContentStyled>
                <h4>Subscribe us to get latest news and coupon</h4>               
            </SubscriptContentStyled>    
            <SubscriptInputStyled>
                <input type="text" id="subscribe" placeholder="enter your email address"/>
                <SubscriptButtonStyled htmlFor="subscribe" bg="#000">
                    Subscribe
                </SubscriptButtonStyled>
            </SubscriptInputStyled>        
        </SubscriptBannerStyled>
    )
}

export default SubscriptBanner
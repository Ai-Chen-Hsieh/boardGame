import { useContext } from "react";
import { GameInfoContainerStyled, GameInfoStyled, GameImgStyled, GameDescriptionStyled, GameInfoContent, InfoCollectionStyled, InfoRowStyled, ButtonCollectionStyled,  CloseButton } from "./styles/gameInfoStyled";
import { BsPeopleFillStyled, FaDollarSignStyled, BiTimeFiveStyled, ShopBagIcon } from "../components/styles/iconStyled"
import { CartContext } from "../context/cartInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GameCardInfo = ({game, onClose}) => {
    const description = game.description.replace(/<[^>]*>?/gm, '');
    const { addToCart } = useContext(CartContext)

    //處理加入購物車
    function handleAddToCart({item}) {
        addToCart(item);
        toast.success(`【${item.name}】have been added to the shopping cart`, {
            theme: "light",
            position: toast.POSITION.TOP_CENTER,
            })
    }

    return (
        <GameInfoContainerStyled onClick={onClose}>
            <GameInfoStyled onClick={(e) => {
                e.stopPropagation()
            }}>
                <GameImgStyled className="cardInfo" src={game.images.medium} alt="" />
                <GameDescriptionStyled className="description block">
                    <CloseButton 
                        title="close"
                        onClick={onClose}
                    />
                    <InfoCollectionStyled className="description">
                        <h4>{game.name}</h4>
                        <InfoRowStyled>
                            <FaDollarSignStyled/>
                            <span>{game.price}</span>
                        </InfoRowStyled>
                        <InfoRowStyled>
                            <BsPeopleFillStyled /> 
                            <span>{game.players}</span>
                        </InfoRowStyled>
                        <InfoRowStyled>
                            <BiTimeFiveStyled />
                            <span>{game.playtime}min</span>
                        </InfoRowStyled>
                        <InfoRowStyled>Description:</InfoRowStyled>
                        <GameInfoContent className="description">{description}</GameInfoContent>
                    </InfoCollectionStyled>
                    <ButtonCollectionStyled>
                        <ShopBagIcon 
                            title="add to cart" 
                            color="#fff" 
                            bg="#1E385F" 
                            onClick={() => {
                                handleAddToCart({item: game})
                            }}/>
                    </ButtonCollectionStyled>
                </GameDescriptionStyled>
               
            </GameInfoStyled>
            <ToastContainer autoClose={2000}/>
        </GameInfoContainerStyled>
    )
}

export default GameCardInfo
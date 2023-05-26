import { CartContainerStyled, CartStyled, ProductList, ProductTotalPriceContainer, ProductTotalPrice, ProductItem, Product, ProductImg, ProductAmount, IncreaseButton, DecreaseButton, OrderButton, CloseButton } from "./styles/cartStyled";
import { useContext } from "react"; 
import { CartContext } from "../context/cartInfo"

const Cart = ({onClose}) => {
    const { cartItem, increase, decrease } = useContext(CartContext);

    //計算購物車總金額
    const calculateTotalPrice = cartItem.reduce((acc, cur) => cur.price * cur.quantity + acc, 0);
    const totalPrice = new Intl.NumberFormat().format(calculateTotalPrice);

    return (
        <>
            {(cartItem.length === 0) ? (
                <CartContainerStyled onClick={onClose}>
                    <CartStyled color="#71908F">
                        <CloseButton 
                            title="close"
                            onClick={onClose}/>
                        <h4>Shopping cart</h4>
                        <h1>your cart is empty</h1>
                    </CartStyled>
                </CartContainerStyled>
            ) : (
                <CartContainerStyled>
                    <CartStyled onClick={(e) => {
                        e.stopPropagation()
                        onClose
                        }}>
                        <CloseButton 
                            title="close"
                            onClick={onClose}/>
                            <h4>Shopping cart</h4>
                        <ProductList>
                            {cartItem.map(product => {
                                return (
                                    <ProductItem key={product.id} className="productItem">
                                        <ProductImg src={product.image} alt="product img" />
                                        <Product className="product">
                                            <span>{product.name}</span>
                                            <ProductAmount className="productAmount">
                                                <IncreaseButton className="increase" onClick={() => increase(product)}></IncreaseButton>
                                                <p>{product.quantity}</p>
                                                <DecreaseButton className="decrease" onClick={() => decrease(product)}></DecreaseButton>
                                            </ProductAmount>
                                            <span className="price">
                                                $ {product.price * product.quantity}
                                            </span>
                                        </Product>
                                    </ProductItem>
                                )
                            })}
                            
                        </ProductList>
                        <ProductTotalPriceContainer>
                            <ProductTotalPrice>
                                <div className="total">Total:</div>
                                <div>$ {totalPrice}</div>
                            </ProductTotalPrice>
                            <OrderButton color="#fff" bg="#F07777">complete order </OrderButton>
                        </ProductTotalPriceContainer>
                    </CartStyled>
                </CartContainerStyled>
                    
            )}
        </>
    )
    
}

export default Cart
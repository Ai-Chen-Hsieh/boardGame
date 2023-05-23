import { createContext, useState } from "react";


export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
    const [ cartItem, setCartItem ] = useState([]);

    //商品加入購物車
    function addToCart (item) {
        //判斷是否已存在購物車
        const hasInCart = cartItem.find(product => product.id === item.id);

        //已存在購物車，數量加一
        if(hasInCart){
            const newProducts = cartItem.map(product => {
                if(product.id === item.id){
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    }
                } else {
                    return product
                }
            })
            setCartItem(() => newProducts)
        } else {
            
            //不存在購物車，新增該品項進去購物車
            setCartItem((prevItem) => {
                return[
                    ...prevItem,
                    {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                        image: item.images.medium
                    }
                ]
            })
        }
    }

    //購物車內商品數量增加一
    function increase (item) {
        const newProducts = cartItem.map(product => {
            console.log(product.id, item.id)
            if(product.id === item.id){
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            } else {
                return product
            }
        })
        setCartItem(() => newProducts)

    }

    //購物車內商品數量減一
    function decrease (item) {
        let newProducts = cartItem.map(product => {
            //找到對應的商品id 將數量-1
            if(product.id === item.id){
                return {
                    ...product,
                    quantity: product.quantity - 1,
                };
            } 
            else {
                return product
            }
        })

        //移除數量小於0的品項
        newProducts = newProducts.filter(product => product.quantity > 0)
        setCartItem(() =>newProducts)
    }

    return (
        <CartContext.Provider value={{ cartItem, addToCart, increase, decrease }}>
            {children}
        </CartContext.Provider>
    )
}
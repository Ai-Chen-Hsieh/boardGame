import styled from "styled-components";
import { Button } from "./buttonStyled";
import { ClosedStyled } from "./iconStyled"

const CartContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;   
    z-index: 4;
`

const CartStyled = styled.div`
    height: 80%;
    width: 80%;
    padding: 1em 0 ;
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.7);  
    background-color: ${({ theme }) => theme.background.cart};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    z-index: 3;

    
    & > h1 {
        font-size: 2.4rem;
        color: ${({ color }) => color || '#000'};
    }

    & > h4 {
        letter-spacing: 2px;
      color: #fff;  
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {
        max-width: 900px;
    }
`

const ProductList = styled.ul`
    width: 90%;
    height: 75%;
    border: 4px solid #fff;
    border-radius: 15px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #e4e4e4; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #aaa; 
        border-radius: 4px;
    }
`

const ProductImg = styled.img`
    aspect-ratio: 4 / 3;

`

const ProductItem = styled.li`
    height: 30%;
    display: flex;
    margin: 1em;
    padding: 1em;
    gap: 0.7em;
    border-bottom: 2px solid #fff;
`

const Product = styled.div`
    flex: 1;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme. colors.main};
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        flex: 1;
        display: flex; 
        align-items: center; 
        justify-content: center;
        text-align: center;
        height: 80%;
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {
        flex-direction: row;

        & > span:not(:last-child) {
            border-right: 1px solid #fff;
        }
    }
`

const ProductAmount = styled.span`
    & > P {
        margin: 0.3em;
    } 
`

const AmountButton = styled.p`
    width: 25px;
    height: 25px;
    background-color: #adadad;
    border-radius: 50%;
    position: relative;

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }

`

const IncreaseButton = styled(AmountButton)`
    &::before {
        position: absolute;
        content: '+';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const DecreaseButton = styled(AmountButton)`
    &::before {
        position: absolute;
        content: '-';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const ProductTotalPriceContainer = styled.div`
    width: 90%;
    flex: 1;
    border: 4px solid #fff;
    border-radius: 20px;
    padding: 1em 0;
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    justify-content: space-around;

    @media(min-width:${({ theme }) => theme.mobile}) {
        flex-direction: row;
        gap: 0;
        padding: 0;
    }
`

const ProductTotalPrice = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > div {
        font-size: 1.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.main};
        margin: 0 1em;
    }

    & > div:not(:first-child) {
        padding: 0.7em 1.5em;
        border-radius: 10px;
    }

    @media(min-width:${({ theme }) => theme.mobile}) {
        justify-content: start;
    }

`

const OrderButton = styled(Button)`
    font-size: 1.2rem;
    align-self: center;
`

const CloseButton = styled(ClosedStyled)`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 2%;
    right: 2%;
`

export {
    CartContainerStyled,
    CartStyled,
    ProductList,
    ProductTotalPriceContainer,
    ProductTotalPrice,
    ProductItem,
    Product,
    ProductImg,
    ProductAmount,
    IncreaseButton,
    DecreaseButton,
    OrderButton,
    CloseButton
}
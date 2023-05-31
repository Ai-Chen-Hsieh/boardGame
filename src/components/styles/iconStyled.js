import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaCube, FaInstagram, FaFacebook, FaYoutube, FaDollarSign } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci"
import { BsPeopleFill } from "react-icons/bs"
import { BiTimeFive } from "react-icons/bi"
import { MdAccountCircle } from "react-icons/md"
import { IoIosAddCircleOutline } from "react-icons/io"
import { GoSearch } from "react-icons/go"
import { AiOutlineClose } from "react-icons/ai"


const Logo = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.main};
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;

    p{
        margin-top: 5px;
    }
`

const CubeIcon = styled(FaCube)`
    width: 50px;
    height: 50px;
    color: #fff;
    
`

const ShopBagIcon = styled(CiShoppingCart)`
    width: 100%;
    height: 100%;
    max-width: 45px;
    max-height: 45px;
    color: ${({ color }) => color || '#fff'};
    background-color: ${({ bg }) => bg || 'transparent'};
    padding: 7px;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: rgba(225, 225, 225, 0.9);
        transition: background-color ease-in .15s;
    }
`

const AccountIcon = styled(MdAccountCircle)`   
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
    color: ${({ color }) => color || "#000"};
`

const SlMagnifierIcon = styled(GoSearch)`
    width:40px;
    height: 40px;
    color: #fff;
    padding: 10px;
    margin: 8px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0,0.4);
        transition: background-color ease-in .15s;
    }
`

const FaInstagramStyled = styled(FaInstagram)`
    width: 60px;
    height: 60px;
    color:  ${({ theme }) => theme.colors.socialIcon};
    border-radius: 20px;
    padding: 8px;


    &:hover {
        background-color: rgba(225, 225, 225, 0.1);
    }
`

const FaFacebookStyled = styled(FaFacebook)`
    width: 60px;
    height: 60px;
    color:  ${({ theme }) => theme.colors.socialIcon};
    border-radius: 20px;
    padding: 8px;

    &:hover {
        background-color: rgba(225, 225, 225, 0.1);
    }
`

const FaYoutubeStyled = styled(FaYoutube)`
    width: 60px;
    height: 60px;
    color:  ${({ theme }) => theme.colors.socialIcon};
    border-radius: 20px;
    padding: 8px;

    &:hover {
        background-color: rgba(225, 225, 225, 0.1);
    }
`

const BsPeopleFillStyled = styled(BsPeopleFill)`
    width: 25px;
    height: 25px;
`

const FaDollarSignStyled = styled(FaDollarSign)`
    width: 20px;
    height: 20px;
`

const BiTimeFiveStyled = styled(BiTimeFive)`
    width: 20px;
    height:20px;
`
// 共用基本按鈕樣式
const BasicButton = css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.button.primary};
`

const FavoriteStyled = styled(IoIosAddCircleOutline)`
    ${BasicButton}
`

const ClosedStyled = styled(AiOutlineClose)`
    ${BasicButton} {
    }

`

export { 
    Logo, 
    CubeIcon, 
    ShopBagIcon,
    AccountIcon, 
    SlMagnifierIcon, 
    FaInstagramStyled, 
    FaFacebookStyled, 
    FaYoutubeStyled, 
    BsPeopleFillStyled,
    FaDollarSignStyled,
    BiTimeFiveStyled,
    FavoriteStyled,
    ClosedStyled
 }

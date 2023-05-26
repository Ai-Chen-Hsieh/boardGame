import { Link } from "react-router-dom";
import styled from "styled-components";


// navbar style
const NavbarStyled = styled.nav`
    height: 100px;
    background-color: ${({ theme }) => theme.background.navbar};
    box-shadow: 2px 0 4px 5px rgba(0, 0, 0, 0.3);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    @media(min-width: ${({ theme }) => theme.medium}) {
        flex-direction: row;
    }
`

// hamburger style
const ToggleHamburger = styled.input`
    visibility: hidden;
    position: absolute;
    
    @media(max-width: ${({ theme }) => theme.medium}) {
        &:checked + div {
            all: unset;
            transform: scale(1, 1);
            transform-origin: top;
            transition: transform ease-in-out 0.5s;
            width: 100%;
            background-color: ${({ theme }) => theme.background.navbar};
    
            position: absolute;
            top: 100px;
            z-index: 2;
            padding-bottom: 1.2rem;
            padding-right: 1.2rem;
        }
    }

    
`

const Hamburger = styled.label`  
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    right: 8%;
    transform: translateY(-50%);

    @media(min-width: ${({ theme }) => theme.medium}) {
        display: none;
    }
`

const HamburgerLabel = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    &,
    &::before,
    &::after {
        height: 3px;
        width: 25px;
        background-color: #fff;
    }
    &::before {
        content:''; 
        position: absolute;
        top: -8px;
        left: 0;
    }
    &::after {
        content:''; 
        position: absolute;
        top: 8px;
        left: 0;
    }
`

const Nav = styled.div`
    position: absolute;
    top:100%;
    transform: scale(1, 0);
    
    @media(min-width: ${({ theme }) => theme.medium}) {
        all: unset;
        flex: 1;
        display: flex;
    }
`

const TabStyled = styled.div`
    height: 100px;
    color: ${({ theme }) => theme.colors.main};
    margin-left: 4.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    flex: 1;

    @media(min-width: ${({ theme }) => theme.medium}) {
        justify-content: flex-start;
    }
`

const TabItem = styled(Link)`
    display: inline-block;
    width: 120px;
    height: 100px;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.hover};
    }

    &:focus {
        color: ${({ theme }) => theme.colors.hover};
    }

    @media(min-width: ${({ theme }) => theme.medium}) {

        &:hover {
            border-bottom: 5px solid ${({ theme }) => theme.colors.hover};
        }
        &:focus {
            color: ${({ theme }) => theme.colors.hover};
            border-bottom: 5px solid ${({ theme }) => theme.colors.hover};
        }
    }
`

const ToolKitStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex: 1;
    @media(min-width: ${({ theme }) => theme.medium}) {
        justify-content: flex-end;
    }
`

const SearchBlockStyled = styled.div`
    display: inline-flex;
    align-items: center;
    height: 70px;
    width: 100%;
    max-width: 350px;
    margin: 0 2em;
    border-radius: 35px;
    background-color: rgba(225, 225, 225, 0.6);

    @media(min-width: ${({ theme }) => theme.medium}) {
        flex: auto;
    }
`

const SearchInput = styled.input`
    height: 35px;
    width: calc(100% - 120px);
    background-color: transparent;

    &::placeholder { 
        color: rgba(215, 215, 215, 0.8);
        font-size: 1.1em;
        letter-spacing: 1px;
    }

    :-ms-input-placeholder {
        color: rgba(215, 215, 215, 0.8);
        font-size: 1.1em;
        letter-spacing: 1px;
    }
    ::-ms-input-placeholder {
        color: rgba(215, 215, 215, 0.8);
        font-size: 1.1em;
        letter-spacing: 1px;
    }

    &:focus {
        border-bottom: 2px solid #fff;
    }

    .error {
        border-color: #red;
    }
`

export { 
    NavbarStyled, 
    TabStyled, 
    TabItem, 
    Nav, 
    ToolKitStyled, 
    SearchBlockStyled, 
    Hamburger, 
    HamburgerLabel, 
    ToggleHamburger,
    SearchInput
 }
import { Link } from "react-router-dom";
import styled from "styled-components";


// navbar style
const NavbarStyled = styled.nav`
    height: 100px;
    width: 100%;
    background-color: ${({ theme }) => theme.background.navbar};
    box-shadow: 2px 0 4px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;

    @media(min-width: ${({ theme }) => theme.medium}) {
        flex-direction: row;
        padding: 0 20px;
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
    display: flex;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    flex: 1;

    @media(min-width: ${({ theme }) => theme.medium}) {
        margin-left: 4em;
    }
`

const TabItem = styled(Link)`
    width: 120px;
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
        margin-right: auto;

        &:hover {
            border-bottom: 5px solid ${({ theme }) => theme.colors.hover};
        }
        &:focus {
            color: ${({ theme }) => theme.colors.hover};
            border-bottom: 5px solid ${({ theme }) => theme.colors.hover};
        }
    }
`

export { 
    NavbarStyled, 
    TabStyled, 
    TabItem, 
    Nav, 
    Hamburger, 
    HamburgerLabel, 
    ToggleHamburger,
 }
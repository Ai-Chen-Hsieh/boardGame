import styled from "styled-components"

const SearchBlockStyled = styled.div`
    height: 50px;
    max-width: 100%;
    margin: 1.5em 1em;
    border-radius: 35px;
    background-color: rgba(120, 120, 120, 0.6);

    @media (min-width: ${({ theme }) => theme.mobile}) {
        max-width: 400px;
        margin-left: 2.5em;
    }
`

const SearchInput = styled.input`
    height: 35px;
    width: calc(100% - 120px);
    background-color: transparent;

    &::placeholder { 
        color: rgba(255, 255, 255);
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
`

export {
    SearchBlockStyled,
    SearchInput
}
import styled from "styled-components";

const Button = styled.button`
    margin: 0;
    padding: 0 1em;
    min-height: 45px;
    border-radius: 10px;
    border: none;
    color: ${({ color }) => color || '#000'};
    background-color: ${({ bg }) => bg || 'transparent'};
    font-weight: 700;
    letter-spacing: 1px;

    &:hover {
        cursor: pointer;
        background-color: rgba(225, 225, 225, 0.4);
        transition: background-color ease-in .15s;
    }
`

export { Button }
import styled from "styled-components";

const FooterStyled = styled.div`
    height: 200px;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.background.footer};
    color: ${({ theme }) => theme.colors.main};
    font-size: 1rem;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        gap: 1.2rem;
        height: auto;
        padding: 1.5rem 0;
    }
`

const SocialIconsStyled = styled.div`
    flex: 1;
    display: flex;
    gap: 1.2rem;    
`
const FooterContentStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContentItem = styled.span`
    margin-bottom: 0.7rem;
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }
`

export { FooterStyled, SocialIconsStyled, FooterContentStyled, ContentItem }
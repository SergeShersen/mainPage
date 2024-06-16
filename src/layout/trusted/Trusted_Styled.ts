import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

const Trusted =styled.section`
    background: #fef2f2;
`
const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media ${myTheme.media.mobile} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
`
const Link = styled.a`
    flex-grow: 1;
    color: ${myTheme.colors.iconsColor};
    &:hover {
        color: ${myTheme.colors.secondaryBg};
    }
    svg {
        max-width: 157px;
        width: 100%;
        @media ${myTheme.media.mobile} {
            max-width: 140px;
            width: 100%;
            height: 40px;
        }
    }
`
const Title =styled.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #9ca3af;
`
export const S = {
    Title,
    Link,
    Wrapper,
    Trusted
}
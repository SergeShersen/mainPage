import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

const Footer = styled.footer`
    background: #FEF2F2;
    padding: 111px 0;
`

const Descr = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (18 - 12) + 12px);
    line-height: 156%;
    text-align: center;
    color: #9ca3af;
    max-width: 664px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
`

const Icons = styled.div`
    max-width: 460px;
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    a {
        color: ${myTheme.colors.iconsColor};
        &:hover {
            color: ${myTheme.colors.secondaryBg};
        }
    }
`
export const S ={
    Descr,
    Footer,
    Icons
}
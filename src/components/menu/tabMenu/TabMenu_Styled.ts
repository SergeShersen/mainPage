import {myTheme} from "../../../styles/Theme.styled";
import styled, {css} from "styled-components";

const TabMenu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 80px;
    
    @media ${myTheme.media.mobile} {
        gap: 30px
    }

`
const Link = styled.a<{active:boolean}>`
    cursor: pointer;
    text-decoration: none;
    color: #6b7280;
    position: relative;
    z-index: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    &:hover {
        &:after {
            height: 10px;
        }
    }
    &::after {
        position: absolute;
        content: '';
        bottom: 5px;
        right: 0;
        left: 0;
        background: #c5b0e4;
        display: inline-block;
        z-index: -1;
        ${props => props.active && css<{active:boolean}>`
            height: 10px
        `
    }
`
export const S = {
    TabMenu,
    Link
}

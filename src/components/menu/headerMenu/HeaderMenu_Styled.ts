import {myTheme} from "../../../styles/Theme.styled";
import styled, {css} from "styled-components";

const UlMenu = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
    gap: 80px;
    margin-right: 80px;
    li {
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;

        a {
            text-decoration: none;
            color: #6b7280;
            position: relative;
            &:hover {
                &:after {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 10px;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background: #c5b0e4;
                    display: inline-block;
                    z-index: -1;
                }
            }
        }
    }
    @media ${myTheme.media.mobile} {
        margin-right: 0;
    }
`
const NavMobile = styled.nav`
`

const BurgerButtom = styled.button<{isOpen:boolean}> `
    position: relative;
    width: 36px;
    height: 36px;
    z-index: 99999999;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${myTheme.colors.secondaryBg};
        position: absolute;
        ${props => props.isOpen && css<{isOpen:boolean}>`
            background-color: rgba( 255, 255, 255, 0 );
        `}
        
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${myTheme.colors.secondaryBg};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform: rotate(-45deg) translateY(0);
        `}
        }
        &::after{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${myTheme.colors.secondaryBg};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
        `}
        }
    }
    
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: none;
    background-color: burlywood;
    ${props => props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`
const DesktopMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const S = {
    UlMenu,
    MobileMenuPopup,
    BurgerButtom,
    NavMobile,
    DesktopMenu,
}
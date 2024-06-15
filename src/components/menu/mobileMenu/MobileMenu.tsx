import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {MenuComponent} from "../menuComponent/MenuComponent";


export const MobileMenu = (props: {menuItems: Array<string>
}) => {
    const [menuIsOpen,setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () =>{setmenuIsOpen(!menuIsOpen)}
    return (
        <NavStyleMobile>
            <BurgerButtom isOpen = {menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </BurgerButtom>
            <MobileMenuPopup isOpen = {menuIsOpen}>
                <MenuComponent menuItems={props.menuItems} />
            </MobileMenuPopup>
        </NavStyleMobile>

    );
};
const NavStyleMobile = styled.nav`
    display: none;
    @media ${myTheme.media.tablet} {
        display: block;
    }
    @media ${myTheme.media.mobile} {
        display: block;
    }
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
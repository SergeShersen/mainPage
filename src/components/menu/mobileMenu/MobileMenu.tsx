import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";


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
                <UlMenu>
                    {props.menuItems.map((item:string,index:number)=> {
                        return( <li key={index}>
                            <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item}</a>
                        </li>
                        )
                    })}
                </UlMenu>

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


const UlMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    align-items: center;
    gap: 80px;
    li {
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;

        a {
            text-decoration: none;
            color: #6b7280;
            &:hover {
                color: ${myTheme.colors.secondaryBg};
            }
        }
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
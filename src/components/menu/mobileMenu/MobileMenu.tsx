import React from 'react';
import styled, {css} from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {ButtonStyled} from "../../buttons/Button";



export const MobileMenu = (props: {menuItems: Array<string>
}) => {
    return (

        <NavStyle>
            <BurgerButtom isOpen = {false}>
                <span></span>
            </BurgerButtom>
            <MobileMenuPopup isOpen = {false}>
                <UlMenu>
                    {props.menuItems.map((item:string,index:number)=> {
                        return( <li key={index}>
                            <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item}</a>
                        </li>)
                    })}
                </UlMenu>
                <ButtonStyled as='a' href='#' width='131px'>Hire me</ButtonStyled>
            </MobileMenuPopup>
        </NavStyle>

    );
};
const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${myTheme.media.tablet} {
        a {
            display: none;
        }
    }
`


const UlMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
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
    
    @media ${myTheme.media.tablet} {
        display: none;
    }
`

const BurgerButtom = styled.button<{isOpen:boolean}> `
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 99999999;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${myTheme.colors.secondaryBg};
        position: absolute;
        left: 40px;
        bottom: 50px;
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
    background-color: burlywood;
    display: none;
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
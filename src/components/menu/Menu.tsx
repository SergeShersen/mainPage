import React from 'react';
import styled from "styled-components";
import {ButtonStyled} from "../buttons/Button";
import {myTheme} from "../../styles/Theme.styled";




export const Menu = (props: {menuItems: Array<string>
}) => {
    return (
            <NavStyle>
                <UlMenu>
                    {props.menuItems.map((item:string,index:number)=> {
                        return( <li key={index}>
                            <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item}</a>
                        </li>)
                    })}
                </UlMenu>
                <ButtonStyled as='a' href='#' width='131px'>Hire me</ButtonStyled>
            </NavStyle>
    );
};

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${myTheme.media.tablet} {
        a {
            display: none;
        }
    }
    @media ${myTheme.media.mobile} {
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
    justify-content: space-between;
    gap: 80px;
    margin-right: 80px;
    li {
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        a {
            text-decoration: none;
            color: #6b7280;
            &:hover {
                color: #6b7280;
            }
        }
    }
    
    @media ${myTheme.media.tablet} {
        display: none;
    }
    @media ${myTheme.media.mobile} {
        a {
            display: none;
        }
    }
`
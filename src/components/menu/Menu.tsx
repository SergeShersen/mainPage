import React from 'react';
import styled from "styled-components";
import {ButtonStyled} from "../buttons/Button";

export const Menu = () => {
    return (
        <NavStyle>
            <UlMenu>
                <li><a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>Services</a></li>
                <li><a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>Works</a></li>
                <li><a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>Blog</a></li>
            </UlMenu>
            <ButtonStyled as='a' href='#' width='131px'>Hire me</ButtonStyled>
        </NavStyle>
    );
};

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    
`
const UlMenu = styled.ul`
    display: flex;
    list-style: none;

    
    li+li {
        margin-left: 80px;
    }
    li {
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        &:last-child{
            margin-right: 80px;
        }
        a {
            text-decoration: none;
            color: #6b7280;
        }
    }
`
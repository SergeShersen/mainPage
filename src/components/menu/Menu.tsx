import React from 'react';
import styled from "styled-components";
import {ButtonStyled} from "../buttons/Button";
import {myTheme} from "../../styles/Theme.styled";
import {FormPage} from "../../layout/forms/FormPage";
import {FlexWrapper} from "../flexWrapper/FlexWrapper";



export const Menu = (props: {menuItems: Array<string>
}) => {
    return (
        <FlexWrapper justify={'space-between'} align={'center'} >
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
        </FlexWrapper>

    );
};

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    
`
const UlMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;

    
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
            &:hover {
                color: ${myTheme.colors.secondaryBg};
            }
        }
    }
`
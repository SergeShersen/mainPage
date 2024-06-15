import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";





export const TabeMenu = (props: {tabsItems: Array<{status: 'services' | 'works' | 'blog', title: string}>
}) => {
    return (
            <UlTabMenu>
                {props.tabsItems.map((item:{status: 'services' | 'works' | 'blog', title: string},index:number)=> {
                    return( <li key={index}>
                        <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item.title}</a>
                    </li>)
                })}
            </UlTabMenu>
    );
};


const UlTabMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 80px;

    li {
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;

        a {
            text-decoration: none;
            color: #6b7280;
            position: relative;
            z-index: 0;

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
        gap: 30px
    }

`
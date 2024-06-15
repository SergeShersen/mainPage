import React from 'react';
import {myTheme} from "../../../styles/Theme.styled";
import styled from "styled-components";

export  const MenuComponent:React.FC<{menuItems: Array<string>
}> = (props: {menuItems: Array<string>}) => {
    return (
        <UlMenu>
            {props.menuItems.map((item:string,index:number)=> {
                return( <li key={index}>
                        <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item}</a>
                    </li>
                )
            })}
        </UlMenu>
    );
};

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
            &:hover {
                color: ${myTheme.colors.secondaryBg};
            }
        }
    }
    @media ${myTheme.media.mobile} {
        margin-right: 0;
    }
`


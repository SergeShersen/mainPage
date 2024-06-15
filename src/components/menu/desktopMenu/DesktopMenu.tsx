import React from 'react';
import styled from "styled-components";
import {ButtonStyled} from "../../buttons/Button";
import {myTheme} from "../../../styles/Theme.styled";
import {MenuComponent} from "../menuComponent/MenuComponent";




export const DesktopMenu: React.FC<{menuItems: Array<string>
}> = (props: {menuItems: Array<string>
}) => {
    return (
            <DesktopMenuStyled>
               <MenuComponent menuItems={props.menuItems} />
                <ButtonStyled as='a' href='#' width='131px'>Hire me</ButtonStyled>
            </DesktopMenuStyled>
    );
};

const DesktopMenuStyled = styled.nav`
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

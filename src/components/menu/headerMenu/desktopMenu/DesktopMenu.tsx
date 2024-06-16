import React from 'react';
import {ButtonStyled} from "../../../buttons/Button";
import {MenuComponent} from "../menuComponent/MenuComponent";
import {S} from '../HeaderMenu_Styled'



export const DesktopMenu: React.FC<{menuItems: Array<string>
}> = (props: {menuItems: Array<string>
}) => {
    return (
            <S.DesktopMenu>
               <MenuComponent menuItems={props.menuItems} />
                <ButtonStyled as='a' href='#' width='131px'>Hire me</ButtonStyled>
            </S.DesktopMenu>
    );
};



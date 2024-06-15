import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "../../components/menu/desktopMenu/DesktopMenu";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu";
import {S} from "../header/Header_Styled"

const items = ['Services','Works','Blog']

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Conatiner>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Conatiner>
        </S.Header>
    );
};


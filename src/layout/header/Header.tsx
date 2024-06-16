import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "../../components/menu/headerMenu/desktopMenu/DesktopMenu";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {MobileMenu} from "../../components/menu/headerMenu/mobileMenu/MobileMenu";
import {S} from "../header/Header_Styled"

const items = ['Services','Works','Blog']

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <Conatiner>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Conatiner>
        </S.Header>
    );
};


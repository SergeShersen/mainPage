import React, {useState} from 'react';
import {S} from  '../HeaderMenu_Styled'
import {MenuComponent} from "../menuComponent/MenuComponent";


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>
}) => {
    const [menuIsOpen,setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () =>{setmenuIsOpen(!menuIsOpen)}
    return (
        <S.NavMobile>
            <S.BurgerButtom isOpen = {menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButtom>
            <S.MobileMenuPopup isOpen = {menuIsOpen}>
                <MenuComponent menuItems={props.menuItems} />
            </S.MobileMenuPopup>
        </S.NavMobile>

    );
};

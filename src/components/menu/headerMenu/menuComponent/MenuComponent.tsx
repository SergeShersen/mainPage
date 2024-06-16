import React from 'react';
import {S} from '../HeaderMenu_Styled'

export  const MenuComponent:React.FC<{menuItems: Array<string>
}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.UlMenu>
            {props.menuItems.map((item:string,index:number)=> {
                return( <li key={index}>
                        <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item}</a>
                    </li>
                )
            })}
        </S.UlMenu>
    );
};




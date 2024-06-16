import React from 'react';
import {S} from '../tabMenu/TabMenu_Styled'


export const TabMenu: React.FC<{tabsItems: Array<{status: 'services' | 'works' | 'blog', title: string}>
}> = (props: {tabsItems: Array<{status: 'services' | 'works' | 'blog', title: string}>
}) => {
    return (
            <S.TabMenu>
                {props.tabsItems.map((item:{status: 'services' | 'works' | 'blog', title: string},index:number)=> {
                    return( <li key={index}>
                        <a href='https://www.youtube.com/?app=desktop&hl=ru&gl=BY'>{item.title}</a>
                    </li>)
                })}
            </S.TabMenu>
    );
};


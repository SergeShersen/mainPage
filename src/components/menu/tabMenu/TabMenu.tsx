import React from 'react';
import {S} from '../tabMenu/TabMenu_Styled'

export type TabsStatusType = 'services' | 'works' | 'blog'

type TabMenuPropsType = {
    tabsItems:Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props:TabMenuPropsType) => {
    return (
            <S.TabMenu>
                {props.tabsItems.map((item:{status: TabsStatusType, title: string},index:number)=> {
                    return( <li key={index}>
                        <S.Link as={'button'} active={props.currentFilterStatus === item.status} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
                    </li>)
                })}
            </S.TabMenu>
    );
};


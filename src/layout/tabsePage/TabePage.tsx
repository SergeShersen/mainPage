import React, {useState} from 'react';
import {SubTitles} from "../../components/subTitles/SubTitles";

import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {WorkTab} from "../table/workTab/WorkTab";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import businessImg from '../../assets/img/city.webp'
import financialssImg from '../../assets/img/car.webp'
import {TabeMenu} from "../../components/menu/tabMenu/TabeMenu";



const  tabsItems :Array<{status: 'services' | 'works' | 'blog', title: string}> = [
    {
        title: 'Services',
        status: 'services'
    },
    {
        title: 'Works',
        status: 'works'
    },
    {
        title: 'Blog',
        status: 'blog'
    }
]
export const TabePage = () => {
    const [currentFilterStatus, setcurrentFilterStatus] = useState ('services')
    const filteredWorks = WorkTab

    if (currentFilterStatus === 'works') {

    }
    return (
        <TabePageStyled>
            <Conatiner>
                <SubTitles>Tabs</SubTitles>
                <TabeMenu tabsItems={tabsItems}/>
                <FlexWrapper justify='space-between'  wrap='wrap'>
                    <WorkTab src={businessImg} title='Business planning'
                             text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                             type = 'services'/>
                    <WorkTab src={financialssImg} title='Financial planning'
                             text='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                             type ='works' />
                </FlexWrapper>
            </Conatiner>
        </TabePageStyled>
    );
};

const TabePageStyled = styled.section`
    background: ${myTheme.colors.primoryBg};
    ${FlexWrapper} {
        gap: 30px;
    }
    
`
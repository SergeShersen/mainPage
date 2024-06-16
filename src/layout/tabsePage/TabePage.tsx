import React, {useState} from 'react';
import {SubTitles} from "../../components/subTitles/SubTitles";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {WorkTab} from "./workTab/WorkTab";
import businessImg from '../../assets/img/city.webp'
import financialssImg from '../../assets/img/car.webp'
import {TabMenu} from "../../components/menu/tabMenu/TabMenu";
import {S} from '../tabsePage/Tabs_Styled'

const tabData = [
    {
        src: businessImg,
        title: 'Business planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        src: financialssImg,
        title: 'Financial planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

]

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
        <S.TabePage>
            <Conatiner>
                <SubTitles>Tabs</SubTitles>
                <TabMenu tabsItems={tabsItems}/>
                <FlexWrapper justify='space-between'  wrap='wrap'>
                    {tabData.map((t) => {
                        return <WorkTab src={t.src}
                                        title={t.title}
                                        text= {t.text}
                        />
                    })}
                </FlexWrapper>
            </Conatiner>
        </S.TabePage>
    );
};


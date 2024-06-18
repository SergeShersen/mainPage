import React, {useState} from 'react';
import {SubTitles} from "../../components/subTitles/SubTitles";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {WorkTab} from "./workTab/WorkTab";
import businessImg from '../../assets/img/city.webp'
import financialssImg from '../../assets/img/car.webp'
import {TabMenu, TabsStatusType} from "../../components/menu/tabMenu/TabMenu";
import {S} from '../tabsePage/Tabs_Styled'

const tabData = [
    {
        src: businessImg,
        title: 'Business planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'services'

    },
    {
        src: financialssImg,
        title: 'Financial planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'works',
    },
    {
        src: financialssImg,
        title: 'Financial planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'blog',
    },
    {
        src: financialssImg,
        title: 'Financial planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'works',
    },
    {
        src: businessImg,
        title: 'Business planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'blog'

    },
    {
        src: businessImg,
        title: 'Business planning',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'blog'

    },


]

const  tabsItems :Array<{status: TabsStatusType, title: string}> = [
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
export const TabePage :React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState ('services')
    let filteredWorks = tabData

    if (currentFilterStatus === 'works') {
        filteredWorks = tabData.filter(work => work.type === 'works')
    }
    if (currentFilterStatus === 'blog') {
        filteredWorks = tabData.filter(work => work.type === 'blog')
    }

    function  changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStatus(value)

    }
    return (
        <S.TabePage>
            <Conatiner>
                <SubTitles>Tabs</SubTitles>
                <TabMenu  tabsItems={tabsItems}
                          changeFilterStatus = {changeFilterStatus}
                          currentFilterStatus = {currentFilterStatus}
                />
                <FlexWrapper justify='space-between'  wrap='wrap'>
                    {filteredWorks.map((t) => {
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


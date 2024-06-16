import React from 'react';
import styled from "styled-components";
import {PlanningItem} from "./planningItem/PlanningItem";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";

const planningData = [
    {
        nameIcons:'chart',
        itemTitle:'Business planning',
        itemDescription:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        nameIcons:'dollar',
        itemTitle:'Financial planning',
        itemDescription:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        nameIcons:'search',
        itemTitle:'Market Analystics',
        itemDescription:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
]

export const Planning:React.FC = () => {
    return (
        <PlanningStyled>
            <Conatiner>
                <SubTitles marginBottom= '80px'>Planning</SubTitles>
                <FlexWrapper justify="space-between" align="center" >
                    {planningData.map((p,index) => {
                        return <PlanningItem nameIcons={p.nameIcons}
                                             itemTitle={p.itemTitle}
                                             itemDescription={p.itemDescription}
                        />
                    })}

                </FlexWrapper>
            </Conatiner>
        </PlanningStyled>
    );
};

const PlanningStyled = styled.section`
`
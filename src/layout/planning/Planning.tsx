import React from 'react';
import styled from "styled-components";
import {PlanningItem} from "./planningItem/PlanningItem";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";

export const Planning = () => {
    return (
        <PlanningStyled>
            <Conatiner>
                <SubTitles marginBottom= '80px'>Planning</SubTitles>
                <FlexWrapper justify="space-between" align="center" >
                    <PlanningItem nameIcons= 'chart' itemTitle='Business planning' itemDescription='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                    <PlanningItem nameIcons= 'dollar' itemTitle='Financial planning' itemDescription='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                    <PlanningItem nameIcons= 'search' itemTitle='Market Analystics' itemDescription='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                </FlexWrapper>
            </Conatiner>
        </PlanningStyled>
    );
};

const PlanningStyled = styled.section`
`
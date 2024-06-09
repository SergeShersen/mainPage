import React from 'react';
import {Icons} from "../../../components/icons/Icons";
import styled from "styled-components";

 type PlanningItemProps = {
     nameIcons?: string
     itemTitle?: string
     itemDescription?: string
 }

export const PlanningItem = (props:PlanningItemProps) => {
    return (
        <PlanningItemBox>
            <div>
                <Icons iconId={`${props.nameIcons}`} height={'35'} width={'35'} viewBox={'0 0 35 35'}/>
            </div>
            <PlanningItemTitle>
                {props.itemTitle}
            </PlanningItemTitle>
            <PlanningItemDescription>
                {props.itemDescription}
            </PlanningItemDescription>
        </PlanningItemBox>
    );
};

 const PlanningItemBox = styled.div`
     max-width: 361px;
     width: 100%;
     div {
         max-width: 140px;
         width: 100%;
         height: 140px;
         background:#eef2ff;
         border-radius: 6px;
         margin: 0 auto;
         display: flex;
         align-items: center;
         justify-content: center;
     }
 `
const PlanningItemTitle = styled.h2`
    font-weight: 600;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (30 - 15) + 15px);
    line-height: 120%;
    text-align: center;
    color: #374151;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
`
const PlanningItemDescription = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (18 - 12) + 12px);
    line-height: 156%;
    text-align: center;
    color: #9ca3af;
    margin-top: 20px;
`
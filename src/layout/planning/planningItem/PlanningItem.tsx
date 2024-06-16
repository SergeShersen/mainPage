import React from 'react';
import {Icons} from "../../../components/icons/Icons";
import {S} from "../Planning_Styled"

 type PlanningItemProps = {
     nameIcons?: string
     itemTitle?: string
     itemDescription?: string
 }

export const PlanningItem:React.FC<PlanningItemProps> = (props:PlanningItemProps) => {
    return (
        <S.ItemBox>
            <span>
                <Icons iconId={`${props.nameIcons}`} height={'35'} width={'35'} viewBox={'0 0 35 35'}/>
            </span>
            <S.Title>
                {props.itemTitle}
            </S.Title>
            <S.Description>
                {props.itemDescription}
            </S.Description>
        </S.ItemBox>
    );
};


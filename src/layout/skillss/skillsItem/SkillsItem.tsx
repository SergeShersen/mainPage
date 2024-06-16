import React from 'react';
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../../components/icons/Icons";
import {S} from '../Skills_Styled'

type skilssType = {
    bottom?: string
    title?: string
    description?: string
}

export const SkillsItem:React.FC<skilssType> = (props: skilssType) => {

        return (
            <S.ItemWrapper >
                <S.Subtitle>{props.title}</S.Subtitle>
                <S.Descr>{props.description}</S.Descr>
                <FlexWrapper align="center">
                    <S.Link href='#'>See Works</S.Link>
                    <Icons iconId={'right'} width={'35'} height={'35'}/>
                </FlexWrapper>
            </S.ItemWrapper>
        )

};



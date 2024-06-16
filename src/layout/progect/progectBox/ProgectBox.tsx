import React from 'react';
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../../components/icons/Icons";
import {S} from '../Progect_Styled'

export const ProgectBox:React.FC = () => {
    return (
        <S.ProgectBox>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <div >
                    <S.BoxTitle>Project title here</S.BoxTitle>
                    <S.BoxDescr>Photograph</S.BoxDescr>
                </div>
                <Icons iconId={'blackRight'} height={'30'} width={'30'} viewBox={'0 0 30 30'}/>
            </FlexWrapper>
        </S.ProgectBox>
    );
};




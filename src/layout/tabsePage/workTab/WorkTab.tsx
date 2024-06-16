import React from 'react';
import {ButtonStyled} from "../../../components/buttons/Button";
import {S} from '../Tabs_Styled'

type WorkTabProps = {
    title?: string;
    text?: string;
    src?: string;
    type?: string;
}

export const WorkTab: React.FC<WorkTabProps> = (props:WorkTabProps) => {
    return (
        <S.WorkTab>
            <S.ImageWrapper>
                <S.Image src = {props.src}/>
                <ButtonStyled>View project</ButtonStyled>
            </S.ImageWrapper>
            <S.BoxDescr>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Link href= '#'>demo</S.Link>
                <S.LinkSecond href='#'>code</S.LinkSecond>
            </S.BoxDescr>
        </S.WorkTab>
    );
};


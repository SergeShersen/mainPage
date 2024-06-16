import React from 'react';
import {S} from '../Main_Styled'
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {ButtonStyled} from "../../../components/buttons/Button";


export const MainDescr:React.FC = () => {
    return (
        <S.MainDescr>
            <S.Name>Jessica Strosin</S.Name>
            <S.Title>Creative thinker
                Minimalism lover</S.Title>
            <S.Description>Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer to build your
                brands and grow your business Let’s shake hands with me.</S.Description>
            <FlexWrapper>
                <ButtonStyled as='a' href='#' width='131px' primory color='#3730a3' margin = '20px'>Read more</ButtonStyled>
                <ButtonStyled as='a' href='#' width='151px'>Hire me</ButtonStyled>
            </FlexWrapper>
            <hr/>
            <S.DescrMini>I am currently open for part-time work.</S.DescrMini>
        </S.MainDescr>
    );
};


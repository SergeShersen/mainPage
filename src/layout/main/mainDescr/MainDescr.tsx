import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {ButtonStyled} from "../../../components/buttons/Button";

export const MainDescr = () => {
    return (
        <div>
            <Name>Jessica Strosin</Name>
            <TitleMain>Creative thinker
                Minimalism lover</TitleMain>
            <Description>Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer to build your
                brands and grow your business Let’s shake hands with me.</Description>
            <FlexWrapper>
                <ButtonStyled as='a' href='#' width='131px' primory color='#3730a3' margin = '20px'>Read more</ButtonStyled>
                <ButtonStyled as='a' href='#' width='151px'>Hire me</ButtonStyled>
            </FlexWrapper>
            <hr/>
            <DescrMini>I am currently open for part-time work.</DescrMini>
        </div>
    );
};
const Name = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #4338ca;
`
const TitleMain = styled.h1`
    margin: 0;
    margin-top: 40px;
    font-weight: 700;
    font-size: 72px;
    line-height: 100%;
    color: #1f2937;
    width: 596px;
`
const Description = styled.p`
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 18px;
    line-height: 156%;
    color: #6b7280;
    width: 553px;
`
const  DescrMini = styled(Description)`
    font-size: 12px;
    line-height: 133%;
    margin: 0;
    margin-top: 20px;
    
`

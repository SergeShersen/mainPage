import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {ButtonStyled} from "../../../components/buttons/Button";
import {myTheme} from "../../../styles/Theme.styled";

export const MainDescr = () => {
    return (
        <MainDescrStyled>
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
        </MainDescrStyled>
    );
};
const MainDescrStyled = styled.div `
    max-width: 622px;
    width: 100%;
    @media ${myTheme.media.laptop} {
        max-width: 1159px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
    @media ${myTheme.media.tablet} {
        max-width: 768px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
    @media ${myTheme.media.mobile} {
        max-width: 576px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
    
`
const Name = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #4338ca;
    position: relative;
    padding-left: 104px;

    &:before {
        content: '';
        position: absolute;
        display: block;
        width: 102px;
        height: 1px;
        background-color: ${myTheme.colors.secondaryBg};
        top: 50%;
        left: 0;
        @media ${myTheme.media.laptop} {
            content: '';
            position: absolute;
            display: block;
            width: 102px;
            height: 1px;
            background-color: ${myTheme.colors.secondaryBg};
            top: 50%;
            left: -110px;
        }
        @media ${myTheme.media.tablet} {
            content: '';
            position: absolute;
            display: block;
            width: 102px;
            height: 1px;
            background-color: ${myTheme.colors.secondaryBg};
            top: 50%;
            left: -110px;
        }
        @media ${myTheme.media.mobile} {
            content: '';
            position: absolute;
            display: block;
            width: 102px;
            height: 1px;
            background-color: ${myTheme.colors.secondaryBg};
            top: 50%;
            left: -110px;
        }
    }
    @media ${myTheme.media.laptop} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
    
    @media ${myTheme.media.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
    @media ${myTheme.media.mobile} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
`
const TitleMain = styled.h1`
    margin: 0;
    margin-top: 40px;
    font-weight: 700;
    line-height: 100%;
    color: #1f2937;
    max-width: 596px;
    width: 100%;
    @media ${myTheme.media.laptop} {
        text-align: center;
    }
    
    @media ${myTheme.media.tablet} {
        text-align: center;
    }
    @media ${myTheme.media.mobile} {
        text-align: center;
    }
`
const Description = styled.p`
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 18px;
    line-height: 156%;
    color: #6b7280;
    max-width: 553px;
    width: 100%;
`
const  DescrMini = styled(Description)`
    font-size: 12px;
    line-height: 133%;
    margin: 0;
    margin-top: 20px;
    
`

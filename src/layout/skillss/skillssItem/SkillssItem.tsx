import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../../components/icons/Icons";
import {myTheme} from "../../../styles/Theme.styled";

type skilssType = {
    bottom?: string
    title?: string
    description?: string
}

export const SkillssItem = (props: skilssType) => {

        return (
            <SkillItemWrapper >
                <SkillsSubtitle>{props.title}</SkillsSubtitle>
                <SkillsDescr>{props.description}</SkillsDescr>
                <FlexWrapper align="center">
                    <SkillsLink href='#'>See Works</SkillsLink>
                    <Icons iconId={'right'} width={'35'} height={'35'}/>
                </FlexWrapper>
            </SkillItemWrapper>
        )

};

const SkillItemWrapper = styled.div`
    max-width: 311px;
    width: 100%;
    margin-bottom: 40px;
`
const SkillsSubtitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 156%;
    color: #1f2937;
    @media ${myTheme.media.laptop} {
        text-align: center;
    }
    @media ${myTheme.media.tablet} {
        text-align: center;
    }
    
`

const SkillsDescr = styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: #6b7280;
    max-width: 311px;
    width: 100%;
`
const SkillsLink = styled.a`
    display: block;
    text-decoration: none;
    margin-right: 10px
`

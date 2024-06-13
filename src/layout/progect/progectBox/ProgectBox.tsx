import React from 'react';
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../../components/icons/Icons";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const ProgectBox = () => {
    return (
        <ProgectBoxStyled>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <div >
                    <ProgectBoxTitle>Project title here</ProgectBoxTitle>
                    <ProgectBoxDescr>Photograph</ProgectBoxDescr>
                </div>
                <Icons iconId={'blackRight'} height={'30'} width={'30'} viewBox={'0 0 30 30'}/>
            </FlexWrapper>

        </ProgectBoxStyled>
    );
};

const ProgectBoxStyled = styled.div`
    max-width: 450px;
    width: 100%;
    border: 1px #ffff solid;
    padding: 23px 27px;
    margin: 0 auto;
    margin-bottom: 10px;
    background: #fff;
    @media ${myTheme.media.tablet} {
        max-width: 300px;
        width: 100%;
        padding: 15px 20px;
    }
`
const ProgectBoxTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (18 - 12) + 12px);
    line-height: 156%;
    color: #1f2937;
`
const ProgectBoxDescr = styled.p`
    margin-top: 5px;
    margin-bottom: 0;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (16 - 12) + 12px);
`


import React from 'react';
import {SubTitles} from "../../components/subTitles/SubTitles";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Slider} from "../../components/slider/Slider";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Conatiner} from "../../components/container/Conatiner";

export const SliderPage = () => {
    return (
        <SliderPageStyled>
            <Conatiner>
                <SubTitles>Slider</SubTitles>
                <FlexWrapper  align='center' direction='column'>
                    <Slider/>
                </FlexWrapper>
            </Conatiner>
        </SliderPageStyled>
    );
};

const SliderPageStyled = styled.section`
    background: ${myTheme.colors.primoryBg};
`
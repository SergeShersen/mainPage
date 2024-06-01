import React from 'react';
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Company} from "./company/Company";
import {Position} from "./position/Position";
import {Year} from "./year/Year";
import styled from "styled-components";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";

export const Careeres = () => {
    return (
        <CareersStyled>
            <Conatiner>
                <SubTitles marginBottom = '150px'>Careeres</SubTitles>
                <FlexWrapper justify='space-between' align="center" wrap='wrap'>
                    <Company/>
                    <Position/>
                    <Year/>
                </FlexWrapper>
            </Conatiner>
        </CareersStyled>
    );
};

const CareersStyled = styled.div`
    padding: 150px 0;
`
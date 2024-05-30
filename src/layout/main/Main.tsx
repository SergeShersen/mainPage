import React from 'react';
import photoMain from '../../assets/img/main.webp';
import styled from "styled-components";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {MainDescr} from "./mainDescr/MainDescr";

export const Main = () => {
    return (
        <MainStyled>
            <Conatiner>
                <FlexWrapper justify="space-between" align="center" wrap='wrap'>
                    <MainDescr/>
                    <img src={photoMain} alt=""/>
                </FlexWrapper>
            </Conatiner>
        </MainStyled>
    );
};

const MainStyled = styled.div`
    padding: 180px 0 120px 0;
    hr {
        margin-top: 20px;
        margin-bottom: 0;
        border: 1px solid #e5e7eb;
        width: 622px;
        height: 0;
        background: #6b7280;
    }
`




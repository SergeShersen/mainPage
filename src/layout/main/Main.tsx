import React from 'react';
import photoMain from '../../assets/img/main.webp';
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {MainDescr} from "./mainDescr/MainDescr";
import {S} from '../main/Main_Styled'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Conatiner>
                <FlexWrapper justify="space-between" align="center" wrap='wrap-reverse'>
                    <MainDescr/>
                    <img src={photoMain} alt=""/>
                </FlexWrapper>
            </Conatiner>
        </S.Main>
    );
};






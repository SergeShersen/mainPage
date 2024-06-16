import React from 'react';
import {Conatiner} from "../../components/container/Conatiner";
import {Forms} from "./form/Forms";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {SubTitles} from "../../components/subTitles/SubTitles";
import photoForms from '../../assets/img/main.webp'
import {S} from "../forms/Form_Styled"


export const FormPage:React.FC = () => {
    return (
        <S.FormPage>
            <Conatiner>
                <SubTitles marginBottom='40px'>Subscribe</SubTitles>
                <FlexWrapper  align='center' justify='space-around' wrap='wrap'>
                    <S.Img src={photoForms}/>
                    <Forms/>
                </FlexWrapper>
            </Conatiner>
        </S.FormPage>

    );
};




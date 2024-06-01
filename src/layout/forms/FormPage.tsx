import React from 'react';
import {Conatiner} from "../../components/container/Conatiner";
import {Logo} from "../../components/logo/Logo";
import {Forms} from "../../components/form/Forms";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {myTheme} from "../../styles/Theme.styled";
import photoForms from '../../assets/img/main.webp'



export const FormPage = () => {
    return (
        <FormPageStyled>
            <Conatiner>
                <SubTitles marginBottom='40px'>Subscribe</SubTitles>
                <FlexWrapper  align='center' justify='center' >
                    <FormImg src={photoForms}/>
                    <Forms/>
                </FlexWrapper>
            </Conatiner>
        </FormPageStyled>

    );
};

const FormPageStyled = styled.div`
    padding: 50px 0;
    background-color: ${myTheme.colors.primoryBg};
`
const FormImg = styled.img`
    width: 400px;
    margin-right: 100px;
    border-radius: 50%;
    box-shadow: 10px 5px 5px #5e5858;`


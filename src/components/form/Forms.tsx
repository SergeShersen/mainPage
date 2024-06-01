import React from 'react';
import {ButtonStyled} from "../buttons/Button";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Forms = () => {
    return (
        <FormsStyled>
            <label>Jessica Strosin</label>
            <InputStyled placeholder="Write your name"  type='text'/>
            <InputStyled placeholder="Write your number" type='number'/>
            <InputStyled placeholder="Write your email address" type='email'/>
            <ButtonStyled width='304px' href='#' color=''>Subscribe it</ButtonStyled>
        </FormsStyled>
    );
};

const FormsStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 304px;
    label {
        font-weight: 700;
        font-size: 20px;
        color: ${myTheme.colors.secondaryBg};
    }
`

const  InputStyled = styled.input`
    width: 304px;
    font-weight: 400;
    font-size: 17px;
    height: 50px;
    color: ${myTheme.colors.secondaryBg};
    border: none;
    padding-left: 20px;
`
import React from 'react';
import {ButtonStyled} from "../buttons/Button";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

export const Forms = () => {
    return (
        <FormsStyled action='#' method='get'>
            <label>Jessica Strosin</label>
            <InputStyled placeholder="Write your name"  type='text' name='userName'/>
            <InputStyled placeholder="Write your number" type='number' name='userNumber'/>
            <InputStyled placeholder="Write your email address" type='email' name='userEmail'/>
            <DatalistStyled as='input' id='project' list='projectsList' placeholder='Write your project'/>
            <DatalistStyled id='projectsList'>
                <option value='project_1'>project_4</option>
                <option value='project_2'>project_3</option>
                <option value='project_3'>project_2</option>
                <option value='project_4'>project_1</option>
            </DatalistStyled>
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
const DatalistStyled = styled.datalist`
    width: 304px;
    font-weight: 400;
    font-size: 17px;
    height: 50px;
    color: ${myTheme.colors.secondaryBg};
    border: none;
    padding-left: 20px; 
`
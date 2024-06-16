import React from 'react';
import {ButtonStyled} from "../../../components/buttons/Button";
import {S} from "../Form_Styled"

export const Forms:React.FC = () => {
    return (
        <S.Forms action='#' method='get'>
            <label>Jessica Strosin</label>
            <S.Input placeholder="Write your name"  type='text' name='userName'/>
            <S.Input placeholder="Write your number" type='number' name='userNumber'/>
            <S.Input placeholder="Write your email address" type='email' name='userEmail'/>
            <S.Datalist as='input' id='project' list='projectsList' placeholder='Write your project'/>
            <S.Datalist id='projectsList'>
                <option value='project_1'>project_4</option>
                <option value='project_2'>project_3</option>
                <option value='project_3'>project_2</option>
                <option value='project_4'>project_1</option>
            </S.Datalist>
            <ButtonStyled width='304px' href='#'  type='submit'>Subscribe it</ButtonStyled>
        </S.Forms>
    );
};

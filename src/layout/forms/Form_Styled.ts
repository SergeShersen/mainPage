import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";

const FormPage = styled.section`
    background-color: ${myTheme.colors.primoryBg};
`
const Img = styled.img`
    max-width: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 10px 5px 5px #5e5858;
    @media ${myTheme.media.tablet} {
        margin: 0 auto;
        margin-bottom: 20px;
    }
    @media ${myTheme.media.mobile} {
        margin: 0 auto;
        margin-bottom: 20px;
    }
`
const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 304px;
    width: 100%;
    label {
        font-weight: 700;
        font-size: 20px;
        color: ${myTheme.colors.secondaryBg};
        @media ${myTheme.media.tablet} {
            text-align: center;
        }
        @media ${myTheme.media.mobile} {
            text-align: center;
        }
    }
`

const  Input = styled.input`
    max-width: 304px;
    width: 100%;
    font-weight: 400;
    font-size: 17px;
    height: 50px;
    color: ${myTheme.colors.secondaryBg};
    border: none;
    padding-left: 20px;
`
const Datalist = styled.datalist`
    max-width: 304px;
    width: 100%;
    font-weight: 400;
    font-size: 17px;
    height: 50px;
    color: ${myTheme.colors.secondaryBg};
    border: none;
    padding-left: 20px; 
`
export const S = {
    Img,
    FormPage,
    Datalist,
    Input,
    Forms
}
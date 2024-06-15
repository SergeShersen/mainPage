import React from 'react';
import photoMain from '../../assets/img/main.webp';
import styled from "styled-components";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {MainDescr} from "./mainDescr/MainDescr";
import {myTheme} from "../../styles/Theme.styled";

export const Main = () => {
    return (
        <MainStyled>
            <Conatiner>
                <FlexWrapper justify="space-between" align="center" wrap='wrap-reverse'>
                    <MainDescr/>
                    <img src={photoMain} alt=""/>
                </FlexWrapper>
            </Conatiner>
        </MainStyled>
    );
};

const MainStyled = styled.section`
    hr {
        margin-top: 20px;
        margin-bottom: 0;
        border: 1px solid #e5e7eb;
        max-width: 500px;
        width: 100%;
        height: 0;
        background: #6b7280;
        @media ${myTheme.media.laptop} {
            max-width: 560px;
            width: 100%;
        }
        @media ${myTheme.media.tablet} {
            max-width: 560px;
            width: 100%;
        }
        
        
    }
    img {
        max-width: 478px;
        width: 100%;
        object-fit: cover;
        box-shadow: 10px 5px 5px #656060;
    }
    @media ${myTheme.media.laptop} {

        img {
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
    @media ${myTheme.media.tablet} {
        
        img {
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
    @media ${myTheme.media.mobile} {

        img {
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
`




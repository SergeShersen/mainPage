import React from 'react';
import photoCar from '../../assets/img/car.webp'
import photoCity from '../../assets/img/city.webp'

import photoHome from '../../assets/img/home.webp'
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import {ProgectBox} from "./progectBox/ProgectBox";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {myTheme} from "../../styles/Theme.styled";
export const Progect = () => {
    return (
        <ProgectStyled>
            <Conatiner>
                <SubTitles marginBottom='150px'>It’s great to always give the customer the <br/> best feed.</SubTitles>
                <FlexWrapper justify="space-around"  >
                    <ProgectPhotos>
                        <img src={photoCar} />
                        <img src={photoCity}/>
                    </ProgectPhotos>
                    <ProgectLink >
                        <ProgectBox/>
                    </ProgectLink>
                </FlexWrapper>
            </Conatiner>
        </ProgectStyled>
    );
};

const ProgectStyled=styled.div`
        padding: 120px 0;
`
const ProgectLink =styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 10px ;
    max-width: 536px;
    width: 100%;
    background-image: url("${photoHome}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media ${myTheme.media.tablet} {
        margin: 0 auto;
    }

`

const ProgectPhotos = styled.div`
    max-width: 619px;
    width: 100%;
    img {
        max-width: 619px;
        width: 100%;
        object-fit: cover;

        &:last-child{
            margin-bottom: 0;
        }
    }

`
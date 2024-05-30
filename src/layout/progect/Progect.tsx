import React from 'react';
import photoCar from '../../assets/img/car.webp'
import photoCity from '../../assets/img/city.webp'
import photoFlowers from '../../assets/img/flowers.webp'
import photoHome from '../../assets/img/home.webp'
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import {ProgectBox} from "./progectBox/ProgectBox";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";
export const Progect = () => {
    return (
        <ProgectStyled>
            <Conatiner>
                <SubTitles marginBottom='150px'>It’s great to always give the customer the <br/> best feed.</SubTitles>
                <FlexWrapper justify="space-between" wrap='wrap'>
                    <ProgectPhotos>
                        <img src={photoCar} />
                        <img src={photoCity}/>
                    </ProgectPhotos>
                    <ProgectLink >
                        <ProgectBox/>
                    </ProgectLink>
                </FlexWrapper>
                <img src={photoFlowers}/>
            </Conatiner>
        </ProgectStyled>
    );
};

const ProgectStyled=styled.div`
        min-height: 1700px;
        padding: 120px 0;
`
const ProgectLink =styled.div `
    width: 536px;
    height: 900px;
    background-image: url("${photoHome}");
`

const ProgectPhotos = styled.div`
    width: 619px;
    gap: 30px;
    margin-bottom: 30px;
    img {
        margin-bottom: 30px;
        &:last-child{
            margin-bottom: 0;
        }
    }
    
`
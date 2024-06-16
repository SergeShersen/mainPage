import React from 'react';
import photoCar from '../../assets/img/car.webp'
import photoCity from '../../assets/img/city.webp'
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {ProgectBox} from "./progectBox/ProgectBox";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {S} from '../progect/Progect_Styled'


export const Progect:React.FC = () => {
    return (
        <S.Progect>
            <Conatiner>
                <SubTitles marginBottom='150px'>It’s great to always give the customer the <br/> best feed.</SubTitles>
                <FlexWrapper justify="space-between"    >
                    <S.Photos>
                        <img src={photoCar} />
                        <img src={photoCity}/>
                    </S.Photos>
                    <S.Link >
                        <ProgectBox/>
                    </S.Link>
                </FlexWrapper>
            </Conatiner>
        </S.Progect>
    );
};


import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import {S} from "../../layout/sliderPage/SliderPage_Styled"

type SlidersPropsType = {
    text: string
    userName: string
}

const Slides = (props:SlidersPropsType) => {
    return(
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>{props.userName}</S.Name>
        </S.Slide>
    )
}
const items = [
    <Slides text = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            userName ='@Business planning'/>,
    <Slides text = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            userName ='@Planning'/>,
    <Slides text = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            userName ='@Business'/>

];

export const Slider = () => (
    <S.SliderPage>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.SliderPage>
);






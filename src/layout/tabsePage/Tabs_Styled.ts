import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {ButtonStyled} from "../../components/buttons/Button";

const TabePage = styled.section`
    background: ${myTheme.colors.primoryBg};
    ${FlexWrapper} {
        gap: 30px;
    }
    
`
const WorkTab = styled.div`
    background-color: #FFF;
    width: 320px;
    flex-grow: 1;
    margin-top: 50px;
    border: 1px solid #FFF;
    box-shadow: 10px 5px 5px #656060;
    padding-bottom: 20px;
    @media ${myTheme.media.desktop} {
        max-width: 550px;
    }
    @media ${myTheme.media.mobile} {
        box-shadow: 10px 5px 5px #656060;
    }
`
const BoxDescr = styled.div`
    margin-top: 20px;
    max-width: 500px;
    width: 100%;
    padding: 0 20px;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`
    font-weight: 600;
    font-size: calc( (100vw - 320px) / (1920 - 320) * (30 - 15) + 15px);
    line-height: 120%;
    color: #374151;
    text-align: center;
`
const Text = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 320px) / (1920 - 320) * (18 - 12) + 12px);
    line-height: 156%;
    color: #9ca3af;
    margin: 20px 0;
`
const Link = styled.a`

    text-decoration: none;
    color: #6b7280;
    position: relative;
    z-index: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    margin-right: 20px;

    &:hover {
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 10px;
            bottom: 0;
            background: #c5b0e4;
            display: block;
            z-index: -1;
        }
    }
`
const LinkSecond = styled.a`
    text-decoration: none;
    color: #6b7280;
    position: relative;
    z-index: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    &:hover{
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 10px;
            bottom: 0;
            left: 0;
            background: #c5b0e4;
            display: block;
            z-index: -1;
        }
    }
`
const ImageWrapper =styled.div`
    position: relative;
    &:hover{
        ${ButtonStyled}{
            opacity: 1;
        }
        &:before {
            position: absolute;
            content:'';
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
    }
    
    ${ButtonStyled} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50% );
        opacity: 0;
        cursor: pointer;
    }
`
export const  S = {
    TabePage,
    ImageWrapper,
    LinkSecond,
    Link,
    Text,
    Title,
    Image,
    BoxDescr,
    WorkTab
}
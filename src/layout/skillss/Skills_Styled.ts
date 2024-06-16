import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";

const Skills = styled.section`
    img {
        max-width: 440px;
        width: 100%;
        object-fit: cover;
        box-shadow: 10px 5px 5px #656060;
    }
    @media ${myTheme.media.laptop} {

        img {
            margin: 0 auto;
            margin-bottom: 40px;
        }
    }
    @media ${myTheme.media.tablet} {

        img {
            margin: 0 auto;
            margin-bottom: 40px;
        }
    }
    @media ${myTheme.media.mobile} {

        img {
            margin: 0 auto;
            margin-bottom: 40px;
        }
    }
`
const WrapperBox =styled.div`
    max-width: 690px;
    width: 100%;
    @media ${myTheme.media.laptop} {
        max-width: 1159px;
        width: 100%;

    }
    @media ${myTheme.media.tablet} {
        max-width: 768px;
        width: 100%;

    }
`
const ItemWrapper = styled.div`
    max-width: 311px;
    width: 100%;
    margin-bottom: 40px;
`
const Subtitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 156%;
    color: #1f2937;
    @media ${myTheme.media.laptop} {
        text-align: center;
    }
    @media ${myTheme.media.tablet} {
        text-align: center;
    }
    
`

const Descr = styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    color: #6b7280;
    max-width: 311px;
    width: 100%;
`
const Link = styled.a`
    display: block;
    text-decoration: none;
    margin-right: 10px
`
export const S = {
    WrapperBox,
    Skills,
    Link,
    Descr,
    Subtitle,
    ItemWrapper
}
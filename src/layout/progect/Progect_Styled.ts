import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import photoHome from '../../assets/img/home.webp'



const Progect=styled.section`
    ${FlexWrapper} {
        gap: 10px;
    }
`
const Link =styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 536px;
    width: 100%;
    max-height: 900px;
    background-image: url("${photoHome}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media ${myTheme.media.tablet} {
        margin: 0 auto;
    }
    @media ${myTheme.media.mobile} {
        height: 600px;
    }

`

const Photos = styled.div`
    max-width: 619px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    img {
        max-width: 619px;
        width: 100%;
        object-fit: cover;

        &:last-child{
            margin-bottom: 0;
        }
    }
    @media ${myTheme.media.mobile} {
        display: none;
    }

`
const ProgectBox = styled.div`
    max-width: 450px;
    width: 90%;
    border: 1px #ffff solid;
    padding: 23px 27px;
    margin: 0 auto;
    margin-bottom: 10px;
    background: #fff;

`
const BoxTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (18 - 12) + 12px);
    line-height: 156%;
    color: #1f2937;
`
const BoxDescr = styled.p`
    margin-top: 5px;
    margin-bottom: 0;
    font-size: calc( (100vw - 360px) / (1440 - 360) * (16 - 12) + 12px);
`

export const S = {
    Progect,
    Link,
    Photos,
    BoxDescr,
    BoxTitle,
    ProgectBox,
}
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

const ItemBox = styled.div`
     max-width: 361px;
     width: 100%;
     span {
         display: flex;
         align-items: center;
         justify-content: center;
         &{
             content: '';
             max-width: 140px;
             width: 100%;
             height: 140px;
             background:#eef2ff;
             border-radius: 6px;
             margin: 0 auto;
             @media ${myTheme.media.mobile} {
                 max-width: 80px;
                 height: 80px;
                 width: 100%;
             }
             @media ${myTheme.media.tablet} {
                 max-width: 100px;
                 height: 100px;
                 width: 100%;
             }
         }
     }
 `
const Title = styled.h3`
    font-weight: 600;
    font-size: calc( (100vw - 320px) / (1920 - 320) * (30 - 15) + 15px);
    line-height: 120%;
    text-align: center;
    color: #374151;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
`
const Description = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 320px) / (1440 - 320) * (18 - 12) + 12px);
    line-height: 156%;
    text-align: center;
    color: #9ca3af;
    margin-top: 20px;
`

export const S = {
    Description,
    Title,
    ItemBox
}
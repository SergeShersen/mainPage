import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";

const Main = styled.section`
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
const MainDescr = styled.div `
    max-width: 622px;
    width: 100%;
    @media ${myTheme.media.laptop} {
        max-width: 1159px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
    @media ${myTheme.media.tablet} {
        max-width: 768px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
    @media ${myTheme.media.mobile} {
        max-width: 576px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
    }
    
`
const Name = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #4338ca;
    position: relative;
    padding-left: 104px;

    &:before {
        content: '';
        position: absolute;
        display: block;
        max-width: 102px;
        width: 100%;
        height: 1px;
        background-color: ${myTheme.colors.secondaryBg};
        top: 50%;
        left: 0;
        @media ${myTheme.media.laptop} {
            content: '';
            position: absolute;
            display: block;
            width: 102px;
            height: 1px;
            background-color: ${myTheme.colors.secondaryBg};
            top: 50%;
            left: -110px;
        }
        @media ${myTheme.media.tablet} {
            content: '';
            position: absolute;
            display: block;
            width: 102px;
            height: 1px;
            background-color: ${myTheme.colors.secondaryBg};
            top: 50%;
            left: -110px;
        }
        @media ${myTheme.media.mobile} {
            content: '';
            position: absolute;
            display: block;
            max-width: 60px;
            width: 100%;
            height: 1px;
            background-color: ${myTheme.colors.secondaryBg};
            top: 50%;
            left: -60px;
        }
    }
    @media ${myTheme.media.laptop} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
    
    @media ${myTheme.media.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
    @media ${myTheme.media.mobile} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
`
const Title = styled.h1`
    margin: 0;
    margin-top: 40px;
    font-weight: 700;
    line-height: 100%;
    color: #1f2937;
    max-width: 596px;
    width: 100%;
    @media ${myTheme.media.laptop} {
        text-align: center;
    }
    
    @media ${myTheme.media.tablet} {
        text-align: center;
    }
    @media ${myTheme.media.mobile} {
        text-align: center;
    }
`
const Description = styled.p`
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 18px;
    line-height: 156%;
    color: #6b7280;
    max-width: 553px;
    width: 100%;
`
const  DescrMini = styled(Description)`
    font-size: 12px;
    line-height: 133%;
    margin: 0;
    margin-top: 20px;
    
`
export const S = {
    Main,
    DescrMini,
    Description,
    Title,
    Name,
    MainDescr
}
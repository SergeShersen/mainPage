import React from 'react';
import styled from "styled-components";
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import photoSkills from "../../assets/img/promo.webp"
import {SkillssItem} from "./skillssItem/SkillssItem";
import {myTheme} from "../../styles/Theme.styled";



export const Skillss = () => {
    return (
        <SkillssStyled>
            <Conatiner>
                <SubTitles marginBottom='150px'>From beginning ideas to individual integrity,<br/> rich identity from the line
                    <span> on the paper to final projects </span></SubTitles>
                <FlexWrapper justify="space-between" align='center' wrap='wrap'>
                    <img src={photoSkills}/>
                    <WrapperBox>
                        <FlexWrapper justify="space-around" wrap="wrap"  >
                            <SkillssItem  title={'Web design'} description={'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.'}/>
                            <SkillssItem  title={'Mobile design'} description={'Mobile application development is a highlight that businesses are interested in at the moment and in the future.'}/>
                            <SkillssItem  title={'Branding'} description={'Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.'}/>
                            <SkillssItem  title={'3D Modeling'} description={'Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art'}/>
                            <SkillssItem title={'Photography'} description={'While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.'}/>
                            <SkillssItem title={'Video creating'} description={'Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.'}/>
                        </FlexWrapper>
                    </WrapperBox>
                </FlexWrapper>

            </Conatiner>
        </SkillssStyled>
    );
};

const SkillssStyled = styled.section`
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
import React from 'react';
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import photoSkills from "../../assets/img/promo.webp"
import {SkillsItem} from "../skillss/skillsItem/SkillsItem";
import {S} from '../skillss/Skills_Styled'


const skillData = [
    {
        title: 'Web design',
        description: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.'
    },
    {
        title: 'Mobile design',
        description: 'Mobile application development is a highlight that businesses are interested in at the moment and in the future.'
    },
    {
        title: 'Branding',
        description: 'Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.'
    },
    {
        title: '3D Modeling',
        description: 'Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art'
    },
    {
        title: 'Photography',
        description: 'While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.'
    },
    {
        title: 'Video creating',
        description: 'Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.'
    },
]


export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Conatiner>
                <SubTitles marginBottom='150px'>From beginning ideas to individual integrity,<br/> rich identity from the line
                    <span> on the paper to final projects </span></SubTitles>
                <FlexWrapper justify="space-between" align='center' wrap='wrap'>
                    <img src={photoSkills}/>
                    <S.WrapperBox>
                        <FlexWrapper justify="space-around" wrap="wrap"  >
                            {skillData.map((s,index) => {
                                return <SkillsItem title={s.title} key={index}
                                                   description={s.description}/>
                            })}
                        </FlexWrapper>
                    </S.WrapperBox>
                </FlexWrapper>

            </Conatiner>
        </S.Skills>
    );
};


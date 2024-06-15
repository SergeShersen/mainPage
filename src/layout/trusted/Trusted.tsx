import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../components/icons/Icons";
import {Conatiner} from "../../components/container/Conatiner";
import {myTheme} from "../../styles/Theme.styled";

export const Trusted = () => {
    return (
        <TrustedStyled>
            <Conatiner>
                <TitleTrusted>Trusted by</TitleTrusted>
                <FlexWrapper justify="space-between" wrap='wrap' >
                    <a href='#'>
                        <Icons iconId={'aphabet'} height={'51'} width={'157'}/>
                    </a>
                    <a href='#'>
                        <Icons iconId={'amazon'} height={'51'} width={'157'}/>
                    </a>
                    <a href='#'>
                        <Icons iconId={'shopify'} height={'51'} width={'157'}/>
                    </a>
                    <a href='#'>
                        <Icons iconId={'netflix'} height={'51'} width={'157'}/>
                    </a>
                    <a href='#'>
                        <Icons iconId={'google'} height={'51'} width={'157'}/>
                    </a>
                </FlexWrapper>
            </Conatiner>
        </TrustedStyled>
    );
};

const TrustedStyled =styled.section`
    background: #fef2f2;
    a {
        color: ${myTheme.colors.iconsColor};
        
        &:hover {
            color: ${myTheme.colors.secondaryBg};
        }
        
    }
    @media ${myTheme.media.laptop} {
        a {
            &:last-child{
                display: none;
            }
        }
    }
    @media ${myTheme.media.tablet} {
        a {
            &:last-child{
                display: none;
            }
            &:nth-child(4){
                display: none;
            }
        }
    }
    @media ${myTheme.media.mobile} {
        a {
            &:last-child{
                display: none;
            }
        }
    }

`
const TitleTrusted =styled.h2`
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #9ca3af;
`
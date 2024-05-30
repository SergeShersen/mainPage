import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../components/icons/Icons";
import {Conatiner} from "../../components/container/Conatiner";

export const Trusted = () => {
    return (
        <TrustedStyled>
            <Conatiner>
                <TitleTrusted>Trusted by</TitleTrusted>
                <FlexWrapper justify="space-between"  wrap='wrap'>
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

const TrustedStyled =styled.div`
    background: #fef2f2;
    padding: 100px 0;
`
const TitleTrusted =styled.h2`
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #9ca3af;
`
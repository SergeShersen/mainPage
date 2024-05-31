import React from 'react';
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Icons} from "../../../components/icons/Icons";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const FooterIcons = () => {
    return (
        <FooterIconsStyled>
            <FlexWrapper justify={'space-between'} align={'center'} >
                <a href='https://www.google.by/?hl=ru'>
                    <Icons iconId={'facebool'} viewBox={'0 0 35 35'} width={'35'} height={'35'} />
                </a>
                <a href='https://www.google.by/?hl=ru'>
                    <Icons iconId={'dribbble'} viewBox={'0 0 35 35'} width={'35'} height={'35'}/>
                </a>
                
                <a href='https://www.google.by/?hl=ru'>
                    <Icons iconId={'codepen'} viewBox={'0 0 35 35'} width={'35'} height={'35'}/>
                </a>
                <a href='https://www.google.by/?hl=ru'>
                    <Icons iconId={'mail'} viewBox={'0 0 35 35'} width={'35'} height={'35'}/>
                </a>
                <a href='https://www.google.by/?hl=ru'>
                    <Icons iconId={'instagram'} viewBox={'0 0 35 35'} width={'35'} height={'35'}/>
                </a>
                <a href='https://www.google.by/?hl=ru'>
                    <Icons iconId={'twitter'} viewBox={'0 0 35 35'} width={'35'} height={'35'}/>
                </a>

            </FlexWrapper>
        </FooterIconsStyled>
    );
};

const FooterIconsStyled = styled.div`
    width: 460px;
    margin: 0 auto;
    margin-top: 100px;
    a {
        color: ${myTheme.colors.iconsColor};
        &:hover {
            color: ${myTheme.colors.secondaryBg};
        }
    }
`
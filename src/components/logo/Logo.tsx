import React from 'react';
import photo from '../../assets/img/logo.webp';
import styled from "styled-components";

export const Logo = () => {
    return (
        <a href='#'>
            <LogoImg src={photo} alt="logo" />
        </a>
    );
};

const LogoImg = styled.img`
    img{
        width: 100%;
    }
`
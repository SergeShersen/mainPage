import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Conatiner} from "../../components/container/Conatiner";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {myTheme} from "../../styles/Theme.styled";

const items = ['Services','Works','Blog']

export const Header = () => {
    return (
        <StyledHeader>
            <Conatiner>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Conatiner>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 10px 0  ;
`
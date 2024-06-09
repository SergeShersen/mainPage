import React from 'react';
import {StyledCareeres} from "../../../components/styledCareeres/StyledCareeres";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

export const Year = () => {
    return (
        <StyledCareeres>
            <ResponsiveYers>
                <h2>YEAR</h2>
                <p>2016</p>
                <p>2016</p>
                <p>2016</p>
                <p>2016</p>
                <p>2016</p>
            </ResponsiveYers>
        </StyledCareeres>
    );}

    const ResponsiveYers = styled.div`
    @media ${myTheme.media.tablet} {
        display: none;  
    }
    @media ${myTheme.media.mobile} {
        display: none;
    }`



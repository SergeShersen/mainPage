import React from 'react';
import {Conatiner} from "../../components/container/Conatiner";
import {SubTitles} from "../../components/subTitles/SubTitles";
import styled from "styled-components";

const TablePage = () => {
    return (
        <TablePageStyled>
            <Conatiner>
                <SubTitles marginBottom='150px'>Careeres</SubTitles>
                <TableStyled>
                    <tr>
                        <td>COMPANY</td>
                        <td>POSITION</td>
                        <td>YEAR</td>
                    </tr>
                    <tr>
                        <td><span>Massa Fames</span> / New York</td>
                        <td>Junior Front-End Developer</td>
                        <td>2016</td>

                    </tr>
                    <tr>
                        <td><span>Massa Fames</span> / New York</td>
                        <td>Junior Front-End Developer</td>
                        <td>2016</td>

                    </tr>
                    <tr>
                        <td><span>Massa Fames</span> / New York</td>
                        <td>Junior Front-End Developer</td>
                        <td>2016</td>

                    </tr>
                    <tr>
                        <td><span>Massa Fames</span> / New York</td>
                        <td>Junior Front-End Developer</td>
                        <td>2016</td>

                    </tr>
                    <tr>
                        <td><span>Massa Fames</span> / New York</td>
                        <td>Junior Front-End Developer</td>
                        <td>2016</td>

                    </tr>
                </TableStyled>
            </Conatiner>
        </TablePageStyled>
    );
};

const TablePageStyled = styled.section`

`
const TableStyled =styled.table`
    
    max-width: 1110px;
    width: 100%;
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #1f2937;
    }
    td {
        font-weight: 400;
        color: #6b7280;
        height: 100px;
    }
`

export default TablePage;
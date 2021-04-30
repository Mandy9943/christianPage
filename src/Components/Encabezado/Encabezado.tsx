import React, { FunctionComponent } from 'react'
import styled from "styled-components";
const Encabezado:FunctionComponent = () => {
    return (
        <EncabezadoS>
            <h1>Christian Faravel</h1>
        </EncabezadoS>
    )
}

export default Encabezado

const EncabezadoS = styled.div`
color: white;
padding: 20px;
display:flex;
justify-content:center;

`
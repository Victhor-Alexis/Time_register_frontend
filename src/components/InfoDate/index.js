import React from 'react'
import { Container } from './styles'

const InfoDate = ({number, display}) => {

    return (
        <Container number={number} display={display}>
            <svg width="204" height="149" viewBox="0 0 204 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 146L38 120H202V2L2 2V120L22 146Z" fill="#FF0000" stroke="white" strokeWidth="3"/>
            </svg>

            <svg width="204" height="149" viewBox="0 0 204 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M182 146L166 120H2V2H202V120L182 146Z" fill="#FF0000" stroke="white" strokeWidth="3"/>
            </svg>
        </Container>
    )
}

export default InfoDate

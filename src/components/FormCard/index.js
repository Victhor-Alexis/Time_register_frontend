import React from 'react'
import { useDynimicityContext } from '../../context/useDynimicityContext'
import { Container } from './styles'

const FormCard = () => {
    
    const { showForm, changeFormDisplay } = useDynimicityContext();

    return (
        <Container display={showForm[0]} opacity={showForm[1]}>
        </Container>
    )
}

export default FormCard

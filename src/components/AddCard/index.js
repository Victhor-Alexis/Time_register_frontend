import React from 'react'
import { Container } from './styles'

const AddCard = () => {
    return (
        <Container>
            <div className="cross">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="47" width="120" height="25" fill="white"/>
                    <rect x="48" y="120" width="120" height="25" transform="rotate(-90 48 120)" fill="white"/>
                </svg>
            </div>
        </Container>
    )
}

export default AddCard
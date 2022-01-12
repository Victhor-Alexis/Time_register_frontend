import React from 'react'
import AddCard from '../AddCard'
import CardSubject from '../CardSubject'
import ChangeTheme from '../ChangeTheme'
import FormCard from '../FormCard'
import { Holder } from './styles'

const Container = () => {

    /*const cardShapes = () => {
        const cardsAmount = 6;
        const n = cardsAmount % 6;

        if (n == 0 || n == 5)
            return "big"
    }*/

    return (
        <Holder>
            <CardSubject/>
            <CardSubject/>
            <CardSubject/>
            <CardSubject/>
            <CardSubject/>
            <CardSubject/>
            <AddCard/>
            <ChangeTheme/>
            <FormCard/>
        </Holder>
    )
}

export default Container

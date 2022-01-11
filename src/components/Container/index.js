import React from 'react'
import AddCard from '../AddCard'
import ChangeTheme from '../ChangeTheme'
import { Holder } from './styles'

const Container = () => {
    return (
        <Holder>
            <AddCard/>
            <ChangeTheme/>
        </Holder>
    )
}

export default Container

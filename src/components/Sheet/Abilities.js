import React from 'react'
import styled from 'styled-components'
import Stat from './Stat'

const StyledAbilities = styled.div`
    display: flex;
    margin: 2rem auto;
    width: 100%;
`

const Abilities = ({ str, dex, con, int, wis, cha }) => {
    return (
        <StyledAbilities>
            <Stat
                name='Strength'
                score={str}
            />
            <Stat
                name='Dexterity'
                score={dex}
            />
            <Stat
                name='Constitution'
                score={con}
            />
            <Stat
                name='Intelligence'
                score={int}
            />
            <Stat
                name='Wisdom'
                score={wis}
            />
            <Stat
                name='Charisma'
                score={cha}
            />
        </StyledAbilities>
    )
}

export default Abilities
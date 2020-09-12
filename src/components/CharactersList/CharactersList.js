import React from 'react'
import styled from 'styled-components'
import CharacterListItem from './CharacterListItem'

const StyledList = styled.ul`
    margin: 3rem auto;
    padding: 0;
    width: 80%;
`

const CharactersList = ({ list }) => {
    const charList = list.map(char => 
        <CharacterListItem 
            name={char.name}
            race={char.race}
            build={char.build}
            stats={char.stats}
            key={char.name}
        />
    )

    return (
        <StyledList>
            {charList}
        </StyledList>        
    )
}

export default CharactersList
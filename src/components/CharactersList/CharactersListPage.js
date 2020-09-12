import React from 'react'
import styled from 'styled-components'
import CharactersList from './CharactersList'
import { COLOR_CREAM } from '../../utilities/colors'

const StyledPage = styled.article`
    background: ${COLOR_CREAM};
    height: 80%;
    width: 100%;
`

const StyledHeader = styled.header`
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
`

const CharactersListPage = ( props ) => {
    const characters = [
        { 
            name: 'Ionan', 
            build: [
                { class: { type: 'warlock' }, level: 1 },
                { class: { type: 'ranger', subtype: 'hunter' }, level: 10 },
                { class: { type: 'rogue', subtype: 'assassin' }, level: 5 }
            ], 
            race: 'wood elf',
            stats: {
                str: 14,
                dex: 22,
                con: 17,
                int: 13,
                wis: 18,
                cha: 16
            }

        },
        {
            name: 'Coman',
            build: [
                { class: { type: 'barbarian', subtype: 'totem warrior' }, level: 13 }
            ],
            race: 'human'
        }
    ]

    return (
        <StyledPage>
            <StyledHeader>
                <h1>characters</h1>
            </StyledHeader>
            <CharactersList list={characters} />
        </StyledPage>
    )
}

export default CharactersListPage
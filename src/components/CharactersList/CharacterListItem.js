import React, { useState } from 'react'
import styled from 'styled-components'
import OpenCharacterButton from './OpenCharacterButton'

const StyledItem = styled.li`
    background: white;
    cursor: pointer;
    list-style: none;
    margin: 2rem 0;
    padding: 0.5rem;
    text-decoration: none;
    width: 100%;
`

const StyledH = styled.h1`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    text-transform: uppercase;
`

const Character = ({ name, race, build, stats }) => {
    console.log('[CLI]', name, race, build, stats)
    const [showInfo, setShowInfo] = useState(false)

    const clickItem = () => {
        setShowInfo(!showInfo)
    }

    // Iterate over the build object and push into buildString 
    let info = null
    let buildString = []
    let subtype = ''
    let totalLevel = 0
    for (let multi of build) {
        totalLevel += multi.level

        if (multi.class.subtype) {
            subtype = `- ${multi.class.subtype}`
        }

        buildString.push(
            <p key={multi.class.type}>
                {multi.class.type} {subtype}, {multi.level}
            </p>
        ) 
    }

    if (showInfo) {
        buildString.push(
            
        )
        info = buildString
    }

    return (
        <StyledItem onClick={clickItem}>
            <StyledH>
                {name}, {race} - Lvl: {totalLevel}
                <OpenCharacterButton 
                    key='openChar'
                    name={name} 
                />
            </StyledH>
            {info}
        </StyledItem>
    )
}

export default Character
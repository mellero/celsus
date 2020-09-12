import React from 'react'
import styled from 'styled-components'
import { COLOR_BLACK } from '../../utilities/colors'

const StyledStat = styled.div`
    align-items: center;
    border: 1px solid ${COLOR_BLACK};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 16%;
`

const StyledName = styled.div`
    text-transform: uppercase;
`

const StyledScore = styled.p`
    /* border: 1px solid ${COLOR_BLACK};
    border-radius: 10%;
    font-size: 25px;
    text-align: center;
    padding: 2rem; */
`

const StyledModifier = styled.div`
    /* border: 1px solid ${COLOR_BLACK};
    border-radius: 50%;
    padding: 0.8rem;
    text-align: center;
    width: 30%; */
`

const Stat = ({ name, score, modifier }) => {
    if (!modifier) {
        modifier = Math.floor((score - 10) / 2)
        if (modifier >= 0) {
            modifier = '+' + modifier
        }
    }
    return (
        <StyledStat>
            <StyledName>{name}</StyledName>
            <StyledScore>{score}</StyledScore>
            <StyledModifier>{modifier ? modifier : ''}</StyledModifier>
        </StyledStat>
    )
}

export default Stat
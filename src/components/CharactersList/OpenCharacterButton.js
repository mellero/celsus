import React from 'react'
import styled from 'styled-components'
import Octicon, { ChevronRight } from '@primer/octicons-react'
import { Link } from 'react-router-dom'
import { COLOR_DARK_GREY, COLOR_RED, COLOR_WHITE } from '../../utilities/colors'

const StyledLink = styled(Link)`
    color: ${COLOR_WHITE};
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
`

const StyledIcon = styled(Octicon)`
    color: ${COLOR_RED};
    padding: 0.2rem 0.4rem;
    transition: background 0.3s ease;

    :hover {
        background: ${COLOR_DARK_GREY};
    }
`

const OpenCharacterButton = ({ name }) => {
    console.log('[OCB]', name)
    return (
        <StyledLink to={{
            pathname: '/characters/' + name,
            state: {
                name: name
            }
        }}>
            <StyledIcon 
                icon={ChevronRight} 
                size='medium'
            />
        </StyledLink>
    )
}

export default OpenCharacterButton
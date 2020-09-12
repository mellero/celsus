import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { COLOR_DARK_RED, COLOR_RED, COLOR_WHITE } from '../../utilities/colors'

const StyledNavLink = styled(NavLink)`
    background: ${COLOR_DARK_RED};
    border: none;
    color: ${COLOR_WHITE};
    cursor: pointer;
    font-weight: 700;
    list-style: none;
    padding: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    transform: rotate(-90deg); 
    transition: background-color .25s ease;

    &.active {
        background: ${COLOR_RED};
    }

    @media screen and (max-width: 600px) {
        background: none;
        color: ${COLOR_DARK_RED};
        transform: none;

        &.active {
            background: none;            
            color: ${COLOR_RED};
        }
    }
`

const NavItem = ({ text, link, isOpen }) => {
    return (
            <StyledNavLink to={{
                pathname: link,
                isOpen: isOpen
            }}>
                {text}
            </StyledNavLink>
    )
}

export default NavItem
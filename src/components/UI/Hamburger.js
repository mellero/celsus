import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR_DARK_GREY } from '../../utilities/colors'

const StyledHamburger = styled.div`
    display: none;
    height: 2rem;
    padding: 1rem;
    position: relative;
    width: 2rem;
    z-index: 100;

    @media screen and (max-width: 600px) {
        display: block;
    }
`

const StyledLine = styled.span`
    background: ${COLOR_DARK_GREY};
    border-radius: 3px;
    display: block;
    height: 0.2rem;
    margin-bottom: 0.2rem;
    transform-origin: 0 0;
    transition: all 0.3s ease;
    width: 1.3rem;
`

const FirstLine = styled(StyledLine)`
    transform: ${ ({ isOpen }) => {
        if (isOpen) {
            return 'rotate(45deg)';
        }
    }};
`
const SecondLine = styled(StyledLine)`
    transform: ${ ({ isOpen }) => {
        if (isOpen) {
            return 'rotate(-45deg) translate(-7px,4px)';
        }
    }};
`
const ThirdLine = styled(StyledLine)`
    transform: ${ ({ isOpen }) => {
        if (isOpen) {
            return 'rotate(-90deg) translate(-6px, -2px)';
        }
    }};
    opacity: ${ ({ isOpen }) => isOpen ? '0' : '1' };
`



const Hamburger = ({ click, isOpen }) => {
    return (
        <StyledHamburger onClick={click}>
            <FirstLine isOpen={isOpen} />
            <SecondLine isOpen={isOpen} />
            <ThirdLine isOpen={isOpen} />
        </StyledHamburger>
    )
}

export default Hamburger
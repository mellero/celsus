import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR_CREAM, COLOR_DARK_RED, COLOR_WHITE, COLOR_DARK_GREY_FADED } from '../utilities/colors'
import NavItem from './UI/NavItem'
import Hamburger from './UI/Hamburger'


const StyledSidebar = styled.nav`
    background: ${COLOR_CREAM};
    border-right: 0.2rem solid ${COLOR_DARK_RED};
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    transition: all 0.5s ease;
    width: 3rem;

    @media screen and (max-width: 600px) {
        background: ${COLOR_WHITE};
        opacity: ${ ({isOpen}) => isOpen ? '1' : '0'};
        width: ${ ({isOpen}) => isOpen ? '60vw' : '0rem'};
        z-index: 9;
    }
`

const StyledUL = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    width: 100%;

    @media screen and (max-width: 600px) {
        display: ${ ({isOpen}) => isOpen ? 'flex' : 'none'};
        justify-content: flex-start;
        padding-top: 5rem;
    }
`

const StyledBacking = styled.div`
    background: ${COLOR_DARK_GREY_FADED};
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 8;
`

const Sidebar = ( props ) => {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)

    const click = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    
    return (
        <React.Fragment>
            {menuIsOpen ? <StyledBacking onClick={click}/> : null}
            <StyledSidebar isOpen={menuIsOpen}>
                <StyledUL isOpen={menuIsOpen}>
                    <NavItem text='Campaigns' link='/campaigns' isOpen={menuIsOpen} />
                    <NavItem text='Characters' link='/characters' isOpen={menuIsOpen} />
                </StyledUL>
            </StyledSidebar>
            <Hamburger 
                click={click}
                isOpen={menuIsOpen}
            />
        </React.Fragment>
    )
}

export default Sidebar
import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom' 
import { COLOR_WHITE, COLOR_DARK_RED, COLOR_BLACK, COLOR_RED } from '../../utilities/colors'
import bg from '../../utilities/tomb.jpg'

const StyledHeader = styled.header`
    background: url(${bg});
    background-position: 70vw 60vh;
    background-size: cover;
    display: grid;
    grid-template-rows: 3fr 1fr;
    height: 25%;
    position: relative;
`

const StyledBanner = styled.div`
    align-items: center;
    background: rgba(85, 85, 85, 0.6);
    border: 0px solid grey;
    border-radius: 10px;
    color: ${COLOR_WHITE};
    display: flex;
    font-size: 30px;
    font-weight: 700;
    height: 50%;
    justify-content: center;
    text-decoration: none;
    margin: auto;
    text-transform: uppercase;
    width: 75%;
`

const StyledBar = styled.div`
    align-self: flex-end;
    border-top: 0.2rem solid ${COLOR_DARK_RED};
    bottom: 0;
    background: ${COLOR_BLACK};
    display: flex;
    height: 3rem;
    position: absolute;
    width: 100%;
`

const StyledBarLink = styled(NavLink)`
    color: ${COLOR_WHITE};
    text-decoration: none;
    transition: color 0.3s ease;

    :hover, &.active {
        color: ${COLOR_RED}
    }
`

const StyledLink = styled(NavLink)`
    align-items: center;
    background: ${COLOR_DARK_RED};
    border: 1px solid ${COLOR_BLACK};
    border-bottom: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: ${COLOR_WHITE};
    cursor: pointer;
    display: flex;
    grid-row: 4;
    justify-content: center;
    list-style: none;
    margin: 0.5rem auto 0 auto;
    text-decoration: none;
    transition: background 0.3s ease;
    width: 34%;

    :hover, &.active {
        background: ${COLOR_RED};
    }
`

const CharacterHeader = ({ name, match }) => {
    return (
        <StyledHeader>
            <StyledBanner>
                <StyledBarLink exact to={match.url}>
                    {name}
                </StyledBarLink>
            </StyledBanner>
            <StyledBar>
                <StyledLink to={match.url + '/Sheet'}>
                    Sheet
                </StyledLink>
                <StyledLink to={match.url + '/Info'}>
                    Info
                </StyledLink>
                <StyledLink to={match.url + '/Notes'}>
                    Notes
                </StyledLink>
            </StyledBar>
        </StyledHeader>
    )
}

export default withRouter(CharacterHeader)

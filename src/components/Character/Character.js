import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Switch, Route, withRouter  } from 'react-router-dom'
import CharacterHeader from './CharacterHeader'
import Sheet from '../Sheet/Sheet'

const StyledPage = styled.article`
    align-self: center;
    background: none;
    height: 100vh;
    position: absolute;
    width: 70vw;
`


const StyledSection = styled.section`

`

const Character = ({ match, location }) => {
    const [char, setChar] = useState(location.state ? location.state : {})

    return (
        <StyledPage>
            <CharacterHeader name={char.name ? char.name : 'character name'} />
            <Switch>
                <Route path={match.url + '/Sheet'} render={(props) => 
                    <Sheet 
                        {...props}
                        name={char.name} 
                        race={char.race} 
                        build={char.build}
                        stats={char.stats}
                    />} 
                />
                <Route path={match.url + '/Info'} render={(props) => <h1>INFO</h1>} />
                <Route path={match.url + '/Notes'} render={(props) => <h1>NOTES</h1>} />
                <Route path={match.url} render={(props) => <h1>CHAR</h1>} />
            </Switch>
        </StyledPage>
    )
}

export default withRouter(Character)
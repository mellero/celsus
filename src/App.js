import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Switch, Route, withRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { COLOR_CREAM, COLOR_DARK_BROWN } from './utilities/colors'
import CampaignPage from './components/CampaignPage'
import CharactersListPage from './components/CharactersList/CharactersListPage'
import Character from './components/Character/Character'

const StyledApp = styled.div`
`

const StyledInner = styled.main`
  background: ${COLOR_CREAM};
  color: ${COLOR_DARK_BROWN};
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  width: 50%;
`

const App = () => {
  return (
    <StyledApp>
      <Sidebar />
      <StyledInner>
        <Switch>
          <Route path='/campaigns' component={CampaignPage} />
          <Route path='/characters/:character' component={Character} />
          <Route path='/characters' component={CharactersListPage} />
          <Route path='/' render={(props) => 'Hello'} />
        </Switch>
      </StyledInner>
    </StyledApp>
  );
}

export default withRouter(App);

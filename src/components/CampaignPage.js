import React from 'react'
import styled from 'styled-components'
import { COLOR_CREAM } from '../utilities/colors';

const StyledPage = styled.article`
    background: ${COLOR_CREAM};
    height: 80%;
    width: 100%;
`

const CampaignPage = ( props ) => {
    return (
        <StyledPage>
            CAMPAIGNS
        </StyledPage>
    )
}

export default CampaignPage
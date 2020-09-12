import React from 'react'
import styled from 'styled-components'
import Info from './Info'
import Abilities from './Abilities'
import { COLOR_CREAM } from '../../utilities/colors'

const StyledSection = styled.section`
    background: ${COLOR_CREAM};
`

const StyledForm = styled.form`

`


const Sheet = ({ stats = {} }) => {
    return (
        <StyledSection>
            <StyledForm>
                <Info />
                <Abilities 
                    str={stats.str}
                    dex={stats.dex}
                    con={stats.con}
                    int={stats.int}
                    wis={stats.wis}
                    cha={stats.cha}
                />
            </StyledForm>
        </StyledSection>
    )
}

export default Sheet
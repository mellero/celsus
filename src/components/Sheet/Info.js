import React from 'react'
import styled from 'styled-components'
import { COLOR_DARK_GREY, COLOR_RED, COLOR_DARK_RED, COLOR_LIGHT_GREY, COLOR_WHITE, COLOR_CREAM } from '../../utilities/colors'

const StyledInfo = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
`

const StyledInner = styled.div`
    display: grid;
    grid-template-areas:
        "a a a"
        "a a a";
`

const StyledInputWrapper = styled.div`
    position: relative;
    text-align: center;
`

const StyledInputLabel = styled.span`
    color: ${COLOR_LIGHT_GREY};
    font-size: 1rem;
    font-weight: 500;
    left: 0;
    position: absolute;
    top: 20px;
    transform-origin: 0 0;
    transition: all .2s ease;
    width: 80%;
`

const StyledInputBorder = styled.div`
    background: ${COLOR_RED};
    bottom: 0;
    height: 2px;
    left: 50%;
    margin: auto;
    position: absolute;
    transform: translateX(-50%) scaleX(0);
    transform-origin: 0 0;
    transition: all .2s ease;
    width: 80%;
`

const StyledInput = styled.input`
    background: none;
    border: none;
    border-radius: 0;
    color: ${COLOR_DARK_GREY};
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    height: 48px;
    padding: 0;
    transition: all .2s ease;
    -webkit-appearance: none;
    width: 80%;    

    &:not(:focus) {
        border-bottom: 1px solid ${COLOR_DARK_GREY};
        ~span {
        background: none;
        transform: scale(.75);
      }
    }

    &:focus, &:not(:placeholder-shown) {
      background: none;
      outline: none;
      ~span {
        transform: translateY(-20px) scale(.75);
      }
      ~div {
        transform: translateX(-50%) scale(1);
      }
    }

    &:focus {
        ~span {
            color: ${COLOR_RED};
        }
    }

    &:not(:placeholder-shown) {
        border: none;
        ~span {
            color: ${COLOR_DARK_RED};
        }
        ~div {
            display: none;
        }
    }

`

const StyledLabel = styled.label`
    align-items: center;
    border: 1px solid ${COLOR_DARK_GREY};
    display: flex;
    justify-content: center;
`

const StyledSelect = styled.select`
    background: ${COLOR_CREAM};
    border: none;
    outline: none;
`

const CharacterName = styled(StyledInput)`
`

const PlayerName = styled(StyledInput)`

`

const XP = styled(StyledInput)`

`

const Race = styled(StyledSelect)`
    
`

const Alignment = styled(StyledSelect)`
`

const Background = styled(StyledSelect)`
`

const Build = styled.div`
`

const Info = ( props ) => {
    return (
        <StyledInfo>
                <StyledLabel>
                    <StyledInputWrapper>
                        <CharacterName
                            name='charName'
                            type='text'
                            placeholder=' '
                        />
                        <StyledInputLabel>Character Name:</StyledInputLabel>
                        <StyledInputBorder />
                    </StyledInputWrapper>
                </StyledLabel>
                <StyledInner>
                    <StyledLabel>
                        <StyledInputWrapper>
                            <PlayerName
                                name='playerName'
                                type='text'
                                placeholder=' '
                            />
                            <StyledInputLabel>Player Name:</StyledInputLabel>
                            <StyledInputBorder />
                        </StyledInputWrapper>
                    </StyledLabel>
                    <StyledLabel>
                        <span>Race:</span>
                        <Race>
                            <option value='human'>Human</option>
                            <option value='elf'>Elf</option>
                            <option value='halfElf'>Half-Elf</option>
                        </Race>
                    </StyledLabel>
                    <StyledLabel>
                        <p>Alignment:</p>
                        <Alignment>
                            <option value='lawfulGood'>Lawful Good</option>
                            <option value='neutral'>Neutral</option>
                            <option value='chaoticEvil'>Chaotic Evil</option>
                        </Alignment>
                    </StyledLabel>
                    <StyledLabel>
                        <p>Background:</p>
                        <Background>
                            <option value='outlander'>Outlander</option>
                            <option value='sailor'>Sailor</option>
                            <option value='Acolyte'>Acolyte</option>
                        </Background>
                    </StyledLabel>
                    <StyledLabel>
                        <StyledInputWrapper>
                            <XP 
                                name='xp'
                                type='number'
                                placeholder=' '
                            />
                            <StyledInputLabel>Experience Points:</StyledInputLabel>
                            <StyledInputBorder />
                        </StyledInputWrapper>
                    </StyledLabel>
                    <Build>
                        <StyledLabel>
                            Class:
                            Level: 
                        </StyledLabel>
                    </Build>
                </StyledInner>
        </StyledInfo>
    )
}

export default Info
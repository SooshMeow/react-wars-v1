import React from 'react'
import Character from './Character'

const CharacterList = props => {
    return (
        <div className='characterList'>
            {props.starwarsChars.map((char, id) => (
                <Character key={id} character={char} />
            ))}
        </div>
    )
}

export default CharacterList;
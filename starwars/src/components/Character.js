import React from 'react'  

const Character = props => {
    return (
        <div className='character'>
            <p>
                {props.character.name}
            </p>
            <p>
                Birth Year: {props.character.birth_year}
            </p>
            <p>
                Eye Color: {props.character.eye_color}
            </p>
        </div>
    )
}

export default Character;
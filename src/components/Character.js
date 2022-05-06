import React from 'react';
import { Route, Redirect } from 'react-router'

const Character = ({ character, refreshCharacters }) => {
    const updatedCharacter = async () => {
        try {
            await fetch('/.netlify/functions/characters', {
                method: 'PUT',
                body: JSON.stringify({ ...character}),
            });
            refreshCharacters();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCharacter = async () => {
        try {
            await fetch('/.netlify/functions/characters', {
                method: 'DELETE',
                body: JSON.stringify({ id: character.id }),
            });
            refreshCharacters();
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Route render = {({ history }) => (
        <div class="box" onClick={() => { history.push('/'+{character.name})}}>
            <h2>{character.name}</h2>
            <div className="character-card">
                <div className="character-card-header">
                    <h3>{character.level}</h3>
                </div>
                <div className="character-card-body">
                    <h3>{character.characters}</h3>
                </div>
            </div>
        </div>
        )} />
    )
};

export default Character;
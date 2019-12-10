import React from 'react';

import './players.css';

const Players = (props) => {

    const renderPlayers = (player, key)  => {
        return (
            <tr key={ key }>
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td>{ player.nationality }</td>
                <td>{ player.age }</td>
            </tr>
        );
    }

    return (
        <table className="players">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Nationality</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                { props.filteredPlayers.map(renderPlayers) }
            </tbody>
        </table>
    );
}

export default Players;
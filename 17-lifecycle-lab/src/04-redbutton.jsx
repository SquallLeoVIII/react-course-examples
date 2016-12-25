/**
 * Lab 01:
 *
 * Write a game that shows 10 squares: 9 gray and 1 red.
 * When a user clicks on the red she gets 5 points and red changes its place.
 * When a user clicks on any other square nothing happens.
 *
 */

import React from 'react';

export default class RedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
        };
    }

    render() {
        var style = {
            backgroundColor: this.props.color,
            width: 50,
            height: 20,
        };

        return (
            <div>
                <button style={style} onClick={this.props.playGame.bind(this, this.props.color)}></button>
            </div>);
    }
}
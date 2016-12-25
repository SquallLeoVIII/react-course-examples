/**
 * Lab 02: CPS monitor with indicator
 *
 * Add an indicator panel to the CPS monitor
 * that shows a green rectangle if user clicks fast enough
 * or a red rectangle if user clicks too slow
 *
 * Decide how to share information between the components
 * and what values to pass when creating the Indicator
 */

import React from 'react';

export default class Indicatior extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        };
    }

    render() {
        var style = {
            backgroundColor: this.props.color,
            width: 50,
            height: 20,
        };
        return (
            <div style={style}>
            </div>
        );
    }
};

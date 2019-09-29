import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
        clickHandler: PropTypes.func
    }

    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }

    render(){
        const className = [
            "component-button"
        ]

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }

}
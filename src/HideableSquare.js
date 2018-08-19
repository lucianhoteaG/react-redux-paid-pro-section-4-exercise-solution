import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default class Square extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentColor: this.props.initialColor,
            isHidden: this.props.initialIsHidden,
        };
    }

    setCurrentColor (currentColor) {
        this.setState({
            currentColor,
        });
    }

    toggleHiddenState () {
        this.setState((currentState) => {
            return { isHidden: !currentState.isHidden };
        });
    }

    render () {
        let textInput;
        const { isHidden } = this.state;
        const size = `${this.props.size}px`;
        const style = {
            width: size,
            height: size,
            backgroundColor: this.state.currentColor,
            display: isHidden ? 'none' : 'block',
        };
        const hideButtonText = (
            isHidden
            ? 'Show'
            : 'Hide'
        );
        return (
            <div className="SquareContainer">
                <div style={style} className="Square">
                </div>
                <div className="SquareControls">
                    <input ref={(element) => { textInput = element; }} type="text" placeholder="Color..." />
                    <button onClick={() => { this.setCurrentColor(textInput.value) }}>Ok</button>
                    <button onClick={() => this.toggleHiddenState()}>{hideButtonText}</button>
                </div>
                <div class="clear" />
            </div>
        );
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
    initialIsHidden: PropTypes.bool,
};

Square.defaultProps = {
    initialColor: 'blue',
    initialIsHidden: false,
};
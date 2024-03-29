import React from 'react';

export default class FittedText extends React.Component {
    constructor(props) {
        super(props)

        const { defaultFontSize } = this.props;

        this.state = {
            fontSize: !defaultFontSize ? 200 : defaultFontSize
        }

        this.text = React.createRef();
    }

    getTextElement = () => {
        return this.text.current;
    }

    getTextParentElement = () => {
        return this.text.current.parentElement;
    }

    updateText = () => {
        const element = this.getTextElement();
        const parent = this.getTextParentElement();

        if (!element) return;

        let { fontSize } = this.state;

        element.style.fontSize = fontSize + "px";

        while (parent.scrollHeight > parent.clientHeight ||
            parent.scrollWidth > parent.clientWidth) {
            fontSize = Math.floor(fontSize * 0.95);
            element.style.fontSize = fontSize + "px";
        }
    }

    componentDidMount = () => {
        this.updateText();

        const { windowObject } = this.props;

        if (windowObject) {
            windowObject.addEventListener("resize", this.updateText);
            return;
        }

        window.addEventListener("resize", this.updateText);
    }

    componentDidUpdate = () => {
        this.updateText();
    }

    componentWillUnmount = () => {
        const { windowObject } = this.props;

        if (windowObject) {
            windowObject.removeEventListener("resize", this.updateText);
            return;
        }

        window.removeEventListener("resize", this.updateText);
    }

    render = () => {
        let { fontSize } = this.state;

        const style = {
            fontSize
        }
        
        return <div ref={this.text} style={style}>{this.props.children}</div>
    }
}
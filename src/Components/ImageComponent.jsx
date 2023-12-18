import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return (
            <>
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    style={{
                        maxWidth: this.props.maxWidth,
                        borderRadius: this.props.borderRadius,
                        margin: this.props.margin,
                    }}
                />
            </>
        );
    }
}

export default ImageComponent;

import { Component } from "react";

class Block extends Component {
    render() {
        return (
            <>
                <h1>{this.props.mainTitle}</h1>
                <p>{this.props.par1}</p>
                <div className="d-flex">
                    <div>{this.props.par2}</div>
                    <div className="d-flex">{this.props.par3}</div>
                </div>
            </>
        );
    }
}

export default Block;

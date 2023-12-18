import { Component } from "react";
import ImageComponent from "./ImageComponent";
import bird from "../imgs/bird.jpg";
class ComponentsBlock extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.backgroundColor }}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <div className="d-flex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, repellendus?</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi facere ea sit reprehenderit
                        accusamus quibusdam ipsa, aspernatur maiores incidunt aperiam.
                    </p>
                </div>
                <div>
                    <ImageComponent alt="img presa a caso " src={bird} maxWidth="150px" borderRadius="50%" />
                </div>
            </div>
        );
    }
}

export default ComponentsBlock;

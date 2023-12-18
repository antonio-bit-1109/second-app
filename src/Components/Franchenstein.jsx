import ImageComponent from "./ImageComponent";
import Block from "./Block";
import ButtonComponents from "./ButtonComponents";

import cucinare from "../imgs/cucinare.jpg";

const Franchenstein = () => {
    return (
        <>
            <ImageComponent alt="cuciniamo" src={cucinare} maxWidth="200px" borderRadius="50%" margin="2rem" />
            <Block
                mainTitle="La grande Cucina di Zio Peppone"
                par1="Stiamo andando a cucinare nel deserto"
                par2="andiamo tutti insieme a mangiare la bistecca"
                par3="ciao ciao ciao "
            />
            <div className="d-flex">
                <ButtonComponents content="premi qui " margin="1rem" padding="0.5rem" />
                <ButtonComponents content="no premi di qua" margin="1rem" padding="0.5rem" />
            </div>
        </>
    );
};

export default Franchenstein;

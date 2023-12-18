import ImageComponent from "./ImageComponent";
import imgAnimale from "./imgs/aniamli.jpg";
import Block from "./Block";

const FormComponent = (props) => {
    return (
        <>
            <Block
                mainTitle="form bellissimo"
                par1="andiam andiam andiamo a lavorar"
                par2=" sto provando delle robe proprio a caso ma che nemmanco te immagini"
                par3=" zioziozioziozioziozizo"
            />
            <ImageComponent src={imgAnimale} alt="antilopi" maxWidth="200px" />
            <label htmlFor={props.for}>{props.content}</label>
            <input type="text" id={props.inputId} placeholder={props.placeholder} />
        </>
    );
};

export default FormComponent;

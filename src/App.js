/* import logo from "./logo.svg"; */
import "./App.css";
import ButtonComponents from "./Components/ButtonComponents";
import ImageComponent from "./Components/ImageComponent";
import img1 from "./Components/imgs/img-a-caso.jpg";
import img2 from "./Components/imgs/spiaggia.jpg";
import FormComponent from "./Components/FormComponent";
import Block from "./Components/Block";
import Franchenstein from "./Components/Franchenstein";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <ImageComponent src={img1} alt="img a caso " maxWidth="200px" margin="1rem" />
                    <ImageComponent src={img2} alt="img a caso " maxWidth="200px" margin="1rem" />
                </div>
                <>
                    <FormComponent
                        for="animali"
                        inputId="inputStrano"
                        content="che animale stai vedendo ? "
                        placeholder="inserisci il nome dell'animale..."
                    />
                    <ButtonComponents
                        content="Cliccami"
                        marginBlock="2rem"
                        padding="1rem"
                        borderRadius="45px"
                        border="none"
                    />
                </>
                <>
                    <ButtonComponents
                        content="No clicca a me!! gg"
                        content1="altro content"
                        marginBlock="2rem"
                        padding="1rem"
                        borderRadius="45px"
                        border="none"
                    />
                </>
            </header>
            <Block
                mainTitle="Pagagrafo bellissimo"
                par1="lorem lorem lorem lorem"
                par2=" sto provando delle robe proprio a caso ma che nemmanco te immagini"
                par3=" bla bla bla bla bla bla bla blb"
            />
            <>{<Franchenstein />}</>
        </div>
    );
}

export default App;

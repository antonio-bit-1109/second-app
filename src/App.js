import logo from "./logo.svg";
import "./App.css";
import ButtonComponents from "./Components/ButtonComponents";
import ImageComponent from "./Components/ImageComponent";
import img1 from "./Components/imgs/img-a-caso.jpg";
import img2 from "./Components/imgs/spiaggia.jpg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <>
                    <ButtonComponents
                        content="Cliccami"
                        marginBlock="2rem"
                        padding="1rem"
                        borderRadius="45px"
                        border="none"
                    />
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
            <div>
                <ImageComponent src={img1} alt="img a caso " maxWidth="200px" />
                <ImageComponent src={img2} alt="img a caso " maxWidth="200px" />
            </div>
        </div>
    );
}

export default App;

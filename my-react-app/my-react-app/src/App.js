import "./App.css";
import Counter from "./component/counter";

function App() {
    return (
        <div className="App">
            <div className="alert alert-success" role="alert">
                Bootstrap est opérationnel
            </div>
            <Counter />
        </div>
    );
}

export default App;

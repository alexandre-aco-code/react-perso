import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/loginForm.jsx";

function App() {
  return (
    <div className="container">
      <header className="row">
        <div className="col-sm-6">
          <h1 className="text-center">Titre de dingue</h1>
        </div>
      </header>
      <section className="row">
        <div className="col-sm-6 offset md-3">
          <LoginForm />
        </div>
      </section>
    </div>
  );
}

export default App;

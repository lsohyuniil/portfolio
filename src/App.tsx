import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import TodoList from "./components/TodoList";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App wrap">
      <Header />
      <Main />
      <About />
      <Skill />
      <Portfolio />
      {/* <TodoList /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

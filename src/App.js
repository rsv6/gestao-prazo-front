import './App.css';
import Headers from './componentes/Header'
import ListToDo from './componentes/ListToDo'
import ListDoing from './componentes/ListDoing'
import ListDone from './componentes/ListDone'
import Footer from './componentes/Footer'


function App() {
  return (
    <div className="App">
      <Headers />
      <ListToDo />
      <ListDoing />
      <ListDone />
      <Footer />
    </div>
  );
}

export default App;

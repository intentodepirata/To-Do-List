import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Contacto_Component from './components/container/contacto_';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Contacto_Component></Contacto_Component>
        {/* <TaskListComponent></TaskListComponent> */}
      </header>
    </div>
  );
}

export default App;

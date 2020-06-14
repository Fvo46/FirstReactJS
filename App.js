import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import lista from './sample/lista.json';
import Lio from './components/Lio';
import Formulario from './components/Formulario';
import Posts from './components/Posts';

class App extends Component {
  state = {
    quehacer: lista
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.quehacer.length
    }
    this.setState({
      quehacer: [...this.state.quehacer, newTask]
    })
  }

  deleteTask = (id) => { 
    const newTasks = this.state.quehacer.filter(quehacer => quehacer.id !== id);
    this.setState({quehacer: newTasks})
  }
 
  checkDone = (id) => {
    const newDone = this.state.quehacer.map(quehacer => {
      if (quehacer.id === id) {
        quehacer.done = !quehacer.done
      }
      return quehacer;
    });
    this.setState({quehacer: newDone})
  }

  render() {
    return <div>
        <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
          <Formulario addTask={this.addTask}/>
          <Lio embrollo={this.state.quehacer} 
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone}/>
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts}/>
        </Router>
        </div>
  }
}

export default App;

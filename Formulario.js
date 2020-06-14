import React, {Component} from 'react';

class Formulario extends Component {
    state = {
        title: "",
        description: "",
    }

    hielo = event => {
        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault();
    }

    borrar = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.hielo}>
                <input 
                type="text" 
                name="title"
                placeholder="write a task" 
                onChange={this.borrar} 
                value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                name="description"
                placeholder="write details" 
                onChange={this.borrar} 
                value={this.state.description} />
                <button type="submit"> 
                Save Task </button>
            </form>
        )
    }
}

export default Formulario
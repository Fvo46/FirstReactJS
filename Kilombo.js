import React, {Component} from 'react';
import propTypes from 'prop-types';

class Kilombo extends Component {
    
    styleCompleted() {
        return {
            fontSize: "20px",
            textDecoration: this.props.nudo.done ? "line-through" : "none",
            color: this.props.nudo.done ? "grey" : "blue",
        }
    }
          
    render() {
        const {nudo} = this.props;

        return  <div style={this.styleCompleted()}>
        {nudo.title} - 
        {nudo.description} - 
        {nudo.done} - 
        {nudo.id}
        <input type="checkbox" onChange={this.props.checkDone.bind(this, nudo.id)}/>
        <button style={btnDelette} onClick={this.props.deleteTask.bind(this, nudo.id)}>
            x
        </button>
    </div>
        
    }
}

Kilombo.propTypes = {
    nudo: propTypes.object.isRequired
}

const btnDelette = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
}


export default Kilombo
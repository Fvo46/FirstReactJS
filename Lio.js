import React, {Component} from 'react';
import Kilombo from "./Kilombo";
import propTypes from "prop-types";


class Lio extends Component {
render() {
    return this.props.embrollo.map (e => 
        <Kilombo 
        nudo={e} key={e.id} 
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
        />)
    }
}

Lio.propTypes = {
    embrollo: propTypes.array.isRequired
}

export default Lio;
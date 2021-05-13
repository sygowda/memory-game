import React, {Component} from 'react';
import Structure from './Structure';
import '../Styles/Box.css';
import StopWatch from '../Components/StopWatch';
import Button from '@material-ui/core/Button'

class Box extends React.Component{

    constructor(props){
        super(props);
        this.state = {row: this.props.row, col: this.props.col};
      }
      
      

      render(){        
            return(
                <React.Fragment>
                  <div className = 'top'>
                   <div className = 'row'>
                      <div className = 'col'>  <StopWatch /> </div>
                      <div className = 'col'> Concentration Game </div>
                      <div className = 'col'> 
                        <Button variant = 'contained' color = 'primary' onClick={this.handleClick}> Restart </Button>
                      </div>
                   </div> 
                   <Structure row = {this.props.row} col = {this.props.col} />
                   </div>
                </React.Fragment>    
            )
        }
}

export default Box;

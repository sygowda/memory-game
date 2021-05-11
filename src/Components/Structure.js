import React, {Component} from 'react';
import StopWatch from '../Components/StopWatch';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';

class Structure extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
      }

    getView = () =>{
        this.setState(
            {
                row : this.props.row,
                col: this.props.col
            }
        );
    }

    render(){    
        let col = this.props.col;
        let row = this.props.row;

        let total = col* row;
        
        
        let images_total = total/2;

        return(
            <React.Fragment>
                <StopWatch />
            </React.Fragment>    
        )
    }

}

export default Structure;
import React, {Component} from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import Structure from './Structure';

class Box extends React.Component{

    constructor(props){
        super(props);
        this.state = {isLoading: true, loader: true, row: this.props.row, col: this.props.col};
      }
      
      changeView = () => {
          this.setState({
              isLoading: false
          });
      }

      render(){        
        if(this.state.isLoading){
          return(
            <BounceLoader 
              size = {60}
              color={"#123321"}
              css=""
              loading={this.state.loader}
            />
          );
        }else{
            return(
                <React.Fragment>
                   <Structure row = {this.props.row} col = {this.props.col} />
                </React.Fragment>    
            )
        }
    }
}

export default Box;

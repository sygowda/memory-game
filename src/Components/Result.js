import { Button } from "@material-ui/core";
import React from "react";

class Result extends React.Component{

    render(){
        return(
            <div className = 'final'>
                <h1> Total Flips : {this.props.total}</h1>
                <h1> Successful Flips : {this.props.success} </h1>
                <h1> Failed Flips : {(this.props.total) - this.props.success} </h1>
                <Button  variant = 'contained' color = 'primary' onClick = {()=> window.location.reload(true)}>Restart Game</Button>
            </div>
        )
    }
}
export default Result;
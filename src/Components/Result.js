import React from "react";

class Result extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = 'final'>
                <h1> Total Flips : {this.props.total}</h1>
                <h1> Successful Flips : {this.props.success} </h1>
                <h1> Failed Flips : {(this.props.total) - this.props.success} </h1>
            </div>
        )
    }
}
export default Result;
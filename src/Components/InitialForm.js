import Box from './Box.js';
import React from 'react';
import '../Styles/InitialForm.css';


class InitialForm extends React.Component{


    constructor(props){

        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {row: '', col: '', loader: false};
        this.GridRef = React.createRef();
    }

    handleChange(event){
        let n = event.target.name;
        let v = event.target.value;
        this.setState({[n]: v});
    }

    handleSubmit = () => {
        let total = this.state.row * this.state.col;
        if (total % 2 === 0){
            this.setState({loader: true});
        }
        else
            alert("Try entering another dimension with even cards");
    }

    render(){
            if(this.state.loader){
                return(
                    <Box row = {this.state.row} col = {this.state.col}/>
                )
            }else{
            return(
                <div className="inputs">
                    <h1>
                        Welcome to Concentration Games
                    </h1>
                    <form name='form' className='init'>
                        Row<input type = 'text'  name="row" value = {this.state.row} onChange = {this.handleChange}/>
                        Column<input type = 'text' name = "col" value = {this.state.col} onChange = {this.handleChange}/>
                        <button type='submit' onClick = {this.handleSubmit}> Build </button>
                    </form>
                </div>
            );
        }
    }
}
export default InitialForm;


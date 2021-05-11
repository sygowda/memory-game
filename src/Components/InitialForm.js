import Box from './Box.js';
import React, {useRef} from 'react';


class InitialForm extends React.Component{


    constructor(props){

        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {row: '', col: '', loader: true};
        this.GridRef = React.createRef();
    }

    handleChange(event){
        let n = event.target.name;
        let v = event.target.value;
        this.setState({[n]: v});
    }

    handleSubmit = () => {
        let total = this.state.row * this.state.col;
        if (total % 2 == 0)
            this.GridRef.current.changeView();
        else
            alert("Try entering another dimension with even cards");
    }

    render(){
        
            return(
                <React.Fragment>
                    <div name='form'>
                        Row<input type = 'text'  name="row" value = {this.state.row} onChange = {this.handleChange}/>
                        Column<input type = 'text' name = "col" value = {this.state.col} onChange = {this.handleChange}/>
                        <button type='submit' onClick = {this.handleSubmit}> Build </button>
                    </div>
                    <Box ref = {this.GridRef} row = {this.state.row} col = {this.state.col}/>

                </React.Fragment>
            );
        }

}
export default InitialForm;


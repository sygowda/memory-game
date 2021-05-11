import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import '../Styles/Structure.css'

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
        
        let arr = Array.from(Array(total).keys());

        return(
            <div className="grid">
                {arr
                    .sort(() => Math.random()-0.5)
                    .map((element) => {
                        return (
                            <Card className = "tile" style={{width: window.innerWidth/col}}>
                                <Card.Title>{element}</Card.Title>
                            </Card>
                        );
                    })
                }
            </div>
        )
    }

}

export default Structure;
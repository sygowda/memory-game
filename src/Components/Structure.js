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
        let w = window.innerWidth/2;
        
        var arr = new Array(total)
        var suit = ['H', 'D', 'S', 'C'];
        var v = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];

        for(let i=0; i<total ; i=i+2){
            let t1 = Math.floor(Math.random() * (4));
            let t2 = Math.floor(Math.random() * (13));
            console.log(t1,t2);
            arr[i] = suit[t1] + v[t2]; arr[i+1] = suit[t1] + v[t2];
        }
        return(
            <div className="grid">
                {arr
                    .sort(() => Math.random()-0.5)
                    .map((element) => {
                        return (
                            <Card className = "tile blank" style={{width: w/col}}>
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
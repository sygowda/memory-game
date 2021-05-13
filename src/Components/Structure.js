import React, {Component} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../Styles/Structure.css';

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
        // let images_total = total/2;
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        var arr = new Array(total)
        var suit = ['H', 'D', 'S', 'C'];
        var v = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
        for(let i=0; i<total ; i=i+2){
            let t1 = Math.floor(Math.random() * (4));
            let t2 = Math.floor(Math.random() * (13));
            arr[i] = suit[t1] + v[t2]; arr[i+1] = suit[t1] + v[t2];
        }
        return(
            <div className="grid">
                {arr
                    .sort(() => Math.random()-0.5)
                    .map((element) => {
                        return (
                            <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: (w/col)-30, float:'left', margin:'1%', height: (h/row)-30}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      {element}
    </BackSide>
  </Flippy>
                        );
                    })
                }
            </div>
        )
    }

}

export default Structure;
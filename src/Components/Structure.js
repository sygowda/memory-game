import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "../Styles/Structure.css";
const temp = true;
class Structure extends React.Component {
  constructor(props) {
    super(props);
    let total = props.col * props.row;
    var arr = new Array(total);
    var suit = ["H", "D", "S", "C"];
    var v = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13"
    ];
    for (let i = 0; i < total; i = i + 2) {
      let t1 = Math.floor(Math.random() * 4);
      let t2 = Math.floor(Math.random() * 13);
      arr[i] = suit[t1] + v[t2];
      arr[i + 1] = suit[t1] + v[t2];
    }
    arr = this.shuffle(arr);
    this.state = {
      isCardFlippedArr: new Array(props.row * props.col).fill().map(() => true),
      isflipOnClickEnabled: new Array(props.row * props.col)
        .fill()
        .map(() => true),
      successfulCards: [],
      lastSelectedCard: "",
      arr: arr,
      w: window.innerWidth / 2,
      h: window.innerHeight / 2,
      row: props.row,
      col: props.col,
      randomValue: Math.random() - 0.5
    };
  }
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getView = () => {
    this.setState({
      row: this.props.row,
      col: this.props.col
    });
  };

  cardClicked = (element, index) => {
    if (this.state.lastSelectedCard === "") {
      let copy = [...this.state.isCardFlippedArr];
      copy[index] = false;
      this.setState({
        lastSelectedCard: element + "/" + index,
        isCardFlippedArr: copy
      });
    } else if (this.state.lastSelectedCard.split("/")[0] === element) {
      console.log("HERE");
      let isflipOnClickEnabledCopy = [...this.state.isflipOnClickEnabled];
      let isCardFlippedArrCopy = [...this.state.isCardFlippedArr];
      isflipOnClickEnabledCopy[index] = false;
      isCardFlippedArrCopy[index] = false;
      let previousElementIndex = this.state.lastSelectedCard.split("/")[1];
      isflipOnClickEnabledCopy[previousElementIndex] = false;
      isCardFlippedArrCopy[previousElementIndex] = false;
      this.setState({
        isflipOnClickEnabled: isflipOnClickEnabledCopy,
        isCardFlippedArr: isCardFlippedArrCopy,
        lastSelectedCard: ""
      });
    } else {
      console.log("EKLSE");
      let isCardFlippedArrCopy = [...this.state.isCardFlippedArr];
      // console.log(isCardFlippedArrCopy0
      isCardFlippedArrCopy[index] = true;

      let previousElementIndex = this.state.lastSelectedCard.split("/")[1];
      console.log(previousElementIndex);
      isCardFlippedArrCopy[previousElementIndex] = true;
      // console.log(isCardFlippedArrCopy);
      this.setState({
        lastSelectedCard: "",
        isCardFlippedArr: isCardFlippedArrCopy
      });
    }
  };

  render() {
    return (
      <div className="grid">
        {this.state.arr.map((element, i) => {
          return (
            <Flippy
              key={i}
              onClick={() => this.cardClicked(element, i)}
              flipOnHover={false} // default false
              flipOnClick={this.state.isflipOnClickEnabled[i]} // default false
              isFlipped={this.state.isCardFlippedArr[i]}
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{
                width: this.state.w / this.state.col - 30,
                float: "left",
                margin: "1%",
                height: this.state.h / this.state.row - 30
              }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#41669d"
                }}
              ></FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>
                {element}
              </BackSide>
            </Flippy>
          );
        })}
      </div>
    );
  }
}

export default Structure;

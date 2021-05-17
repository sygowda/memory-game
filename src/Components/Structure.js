import React from "react";
import "../Styles/Structure.css";
import Result from "../Components/Result";
import Card from "@material-ui/core/Card";
import { Button, CardMedia } from "@material-ui/core";
import Timer from "react-compound-timer/build";

const newLocal = (
  <Timer>
    <Timer.Hours />:
    <Timer.Minutes />:
    <Timer.Seconds />
  </Timer>
);

class Structure extends React.Component {
  constructor(props) {
    super(props);
    let total = props.col * props.row;
    var arr = new Array(total);
    var suit = ["H", "D", "S", "C"];
    var v = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "K", "Q"];
    let i = 0;
    while (i < total) {
      let t1 = Math.floor(Math.random() * 4);
      let t2 = Math.floor(Math.random() * 13);
      if (!arr.includes(v[t2] + suit[t1])) {
        arr[i] = v[t2] + suit[t1];
        arr[i + 1] = v[t2] + suit[t1];
        i = i + 2;
      }
    }
    arr = this.shuffle(arr);
    this.initialState = {
      isCardFlippedArr: new Array(props.row * props.col)
        .fill()
        .map(() => false),
      isflipOnClickEnabled: new Array(props.row * props.col)
        .fill()
        .map(() => true),
      successfulCards: [],
      lastSelectedCard: "",
      arr: arr,
      totalFlips: 0,
      successfulFlips: 0,
      hintUse: 3,
      row: props.row,
      col: props.col,
      clock_reset: false,
      randomValue: Math.random() - 0.5
    };
    this.state = {
      isCardFlippedArr: new Array(props.row * props.col)
        .fill()
        .map(() => false),
      isflipOnClickEnabled: new Array(props.row * props.col)
        .fill()
        .map(() => true),
      successfulCards: [],
      lastSelectedCard: "",
      arr: arr,
      totalFlips: 0,
      successfulFlips: 0,
      hintUse: 3,
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

  handleClick = () => {
    let hintUseCopy = this.state.hintUse;
    if (hintUseCopy > 0) {
      let isCardFlippedArrCopy = this.state.isCardFlippedArr;
      let temp = new Array(this.state.row * this.state.col)
        .fill()
        .map(() => true);
      this.setState({
        isCardFlippedArr: temp,
        hintUse: hintUseCopy - 1
      });
      setTimeout(() => {
        this.setState({
          isCardFlippedArr: isCardFlippedArrCopy
        });
      }, 1000);
    }
  };

  handleRecreate = () => {
    let reshuffledArr = this.shuffle(this.initialState.arr);
    this.initialState.arr = reshuffledArr;
    this.setState(this.initialState);
  };

  cardClicked = (element, index) => {
    if (this.state.lastSelectedCard === "") {
      let copy = [...this.state.isCardFlippedArr];
      copy[index] = true;
      this.setState({
        lastSelectedCard: element + "/" + index,
        isCardFlippedArr: copy,
        totalFlips: this.state.totalFlips + 1
      });
    } else if (this.state.lastSelectedCard.split("/")[0] === element) {
      let isflipOnClickEnabledCopy = [...this.state.isflipOnClickEnabled];
      let isCardFlippedArrCopy = [...this.state.isCardFlippedArr];
      let successfulCardsCopy = [...this.state.successfulCards];
      isflipOnClickEnabledCopy[index] = false;
      isCardFlippedArrCopy[index] = true;
      let previousElementIndex = this.state.lastSelectedCard.split("/")[1];
      isflipOnClickEnabledCopy[previousElementIndex] = false;
      isCardFlippedArrCopy[previousElementIndex] = true;
      successfulCardsCopy.push(parseInt(previousElementIndex), index);
      this.setState({
        isflipOnClickEnabled: isflipOnClickEnabledCopy,
        isCardFlippedArr: isCardFlippedArrCopy,
        lastSelectedCard: "",
        successfulCards: successfulCardsCopy,
        totalFlips: this.state.totalFlips + 1,
        successfulFlips: this.state.successfulFlips + 1
      });
    } else {
      let isCardFlippedArrCopy = [...this.state.isCardFlippedArr];
      // console.log(isCardFlippedArrCopy0
      isCardFlippedArrCopy[index] = true;
      this.setState({
        isCardFlippedArr: isCardFlippedArrCopy
      });
      // this.UNSAFE_componentWillUpdate();
      setTimeout(() => {
        let previousElementIndex = this.state.lastSelectedCard.split("/")[1];
        // console.log(previousElementIndex);
        isCardFlippedArrCopy[previousElementIndex] = false;
        isCardFlippedArrCopy[index] = false;
        console.log(isCardFlippedArrCopy);
        // console.log(isCardFlippedArrCopy);
        this.setState({
          lastSelectedCard: "",
          isCardFlippedArr: isCardFlippedArrCopy,
          totalFlips: this.state.totalFlips + 1
        });
      }, 500);
    }
  };

  render() {
    if (this.state.successfulCards.length === this.state.row * this.state.col) {
      return (
        <Result
          total={this.state.totalFlips / 2}
          success={this.state.successfulFlips}
        />
      );
    }
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.handleClick();
          }}
        >
          Peek
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // alert("refresh");
            this.handleRecreate();
          }}
        >
          Recreate
        </Button>
        <h3> Hints available : {this.state.hintUse}</h3>
        <div
          style={{
            marginBottom: "1%"
          }}
        >
          {newLocal}
        </div>
        <div
          className="grid"
          style={{
            height: this.state.row * 50,
            width: this.state.col * 50
          }}
        >
          {this.state.arr.map((element, i) => {
            var dis = "";
            var img_link =
              "https://deckofcardsapi.com/static/img/" + element + ".png";
            if (!this.state.isCardFlippedArr[i]) {
              return (
                <Card
                  onClick={() => this.cardClicked(element, i)}
                  style={{
                    width: 40,
                    float: "left",
                    margin: "1%",
                    height: 90,
                    display: dis
                  }}
                ></Card>
              );
            } else {
              // if (this.state.successfulCards.includes(i)){
              //   console.log("Display");
              //   dis = "None";
              // }
              return (
                <Card
                  style={{
                    width: 40,
                    float: "left",
                    margin: "1%",
                    height: 90
                  }}
                >
                  <CardMedia image={img_link} className="card-image" />
                </Card>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Structure;

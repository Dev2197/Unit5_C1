import { useState } from 'react';
import './App.css';

function App() {

  const score = (value)=>{
    setCount({
      score : count.score+value,
      wickets : count.wickets,
      over : count.over
    })
  }

  const wicket = ()=>{
    setCount({
      score : count.score,
      wickets : count.wickets+1,
      over : count.over
    })
  }


  const ball = ()=>{
    setCount({
      score : count.score,
      wickets : count.wickets,
      over : overs(count.over)
    })
  }

  function overs(value){
    var ball = 0.1
    let res = +(value)+ball
    res = res.toFixed(1)
    let first = Math.floor(res)

    let float_part = Number((res-first).toFixed(2));

    if(+(float_part) > 0.5)
    {
      return Math.round(res)
    }

    return res
  }

  const [count, setCount] = useState({
    score : 76,
    wickets : 2,
    over : overs(8)
  })
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              count.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              count.wickets
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              count.over
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>score(1)}>Add 1</button>
        <button className="addScore4" onClick={()=>score(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>score(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={wicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={ball}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1>{count.score>100 ? "India" : ""}</h1>
    </div>
  );
}

export default App;
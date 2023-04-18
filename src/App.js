import React, { useState } from 'react';

function App() {

  const [click_count, click_count_fun] = useState(0);
  const [find_player, find_player_fun] = useState("Player-1");
  const [player_symbol, find_player_symbol_fun] = useState("X");
  const [game_stat, find_game_stat] = useState("");
  const [game_end, find_game_end] = useState(false);
  let temp_game_stat="";
  
  function player_click(e,index){
  
    click_count_fun(click_count+1);

    find_player_fun( (click_count%2===0)?"Player-1":"Player-2");
    find_player_symbol_fun((click_count%2===0)?"O":"X");


   e.target.innerText=player_symbol;
   e.target.disabled=true;
   if(player_symbol==="X")
   {
    e.target.className="btn btn-success";
   }
   else
   {
    e.target.className="btn btn-danger";
   }
   if(document.getElementById("b1").innerText===document.getElementById("b2").innerText && document.getElementById("b2").innerText===document.getElementById("b3").innerText && document.getElementById("b3").innerText===document.getElementById("b1").innerText && document.getElementById("b1").innerText!==""&&  document.getElementById("b2").innerText!=="" &&  document.getElementById("b3").innerText!=="")
   {
    temp_game_stat="Y"
  }
  else if(document.getElementById("b1").innerText===document.getElementById("b4").innerText && document.getElementById("b4").innerText===document.getElementById("b7").innerText && document.getElementById("b7").innerText===document.getElementById("b1").innerText && document.getElementById("b1").innerText!==""&&  document.getElementById("b4").innerText!=="" &&  document.getElementById("b7").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 else if(document.getElementById("b7").innerText===document.getElementById("b8").innerText && document.getElementById("b8").innerText===document.getElementById("b9").innerText && document.getElementById("b9").innerText===document.getElementById("b7").innerText && document.getElementById("b7").innerText!==""&&  document.getElementById("b8").innerText!=="" &&  document.getElementById("b9").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 else if(document.getElementById("b7").innerText===document.getElementById("b8").innerText && document.getElementById("b8").innerText===document.getElementById("b9").innerText && document.getElementById("b9").innerText===document.getElementById("b7").innerText && document.getElementById("b7").innerText!==""&&  document.getElementById("b8").innerText!=="" &&  document.getElementById("b9").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 else if(document.getElementById("b3").innerText===document.getElementById("b6").innerText && document.getElementById("b6").innerText===document.getElementById("b9").innerText && document.getElementById("b9").innerText===document.getElementById("b3").innerText && document.getElementById("b3").innerText!==""&&  document.getElementById("b6").innerText!=="" &&  document.getElementById("b9").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 
 else if(document.getElementById("b1").innerText===document.getElementById("b5").innerText && document.getElementById("b5").innerText===document.getElementById("b9").innerText && document.getElementById("b9").innerText===document.getElementById("b1").innerText && document.getElementById("b1").innerText!==""&&  document.getElementById("b5").innerText!=="" &&  document.getElementById("b9").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 
 else if(document.getElementById("b3").innerText===document.getElementById("b5").innerText && document.getElementById("b5").innerText===document.getElementById("b7").innerText && document.getElementById("b7").innerText===document.getElementById("b3").innerText && document.getElementById("b3").innerText!==""&&  document.getElementById("b5").innerText!=="" &&  document.getElementById("b7").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 
 else if(document.getElementById("b2").innerText===document.getElementById("b5").innerText && document.getElementById("b5").innerText===document.getElementById("b8").innerText && document.getElementById("b8").innerText===document.getElementById("b2").innerText && document.getElementById("b2").innerText!==""&&  document.getElementById("b5").innerText!=="" &&  document.getElementById("b8").innerText!=="")
 {
  temp_game_stat="Y"
 } 
 
 else if(document.getElementById("b4").innerText===document.getElementById("b5").innerText && document.getElementById("b5").innerText===document.getElementById("b6").innerText && document.getElementById("b6").innerText===document.getElementById("b4").innerText && document.getElementById("b4").innerText!==""&&  document.getElementById("b5").innerText!=="" &&  document.getElementById("b6").innerText!=="")
 {
  temp_game_stat="Y"
 } 

  else
  {
    find_game_stat("");
  } 
  if (temp_game_stat==="Y")
  {
    find_game_stat(`Game Over `);
    find_game_end(true);
   // disp_stat= `${game_stat} -- ${find_player} Wins`;
  }
  else{
   // disp_stat= `Current Player : ${find_player}`;
  }
  


  }
  function reset() {
    window.location.reload(false)
  }
  return (
    <div className="App">
      <br/>
         <div className="container" style={{width:"900px",background:"#d1d1cf",padding:"50px",color:"#03a1fc",textAlign:"center"}}>
         <h1>Tic-Tac-Toe</h1>
          <div className="row" >
            <div className="col">
              <div className="h3"></div>
                <div id="score_board" className="alert alert-secondary">

                    <div className="h6">No of Move(s) : {click_count}  <br/><br/></div>
                    <div className="h6"> Current Player : {find_player}<br/><br/></div>
                    <div className="h4" style={{color:"#fc03f4"}}>
                      { (game_stat==="")?"":`${game_stat}  ${find_player} wins the match `} <br/><br/>
                    </div>
                    <div className="h6">
                        Player -1 :  <button    style={{width:"40px", height:"40px"}} className="btn btn-success">X</button><br/><br/>
                    </div>
                    <div className="h6"> 
                        Player -2 : <button   style={{width:"40px", height:"40px"}} className="btn btn-danger">O</button><br/><br/>
                    </div>
                    <div className="h6"> 
                    <button className="btn btn-warning" onClick={reset}>Play Again</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="container" style={{width:"330px",background:"#d1d1cf",padding:"50px"}}>
                  <div className="row">
                    <div className="col">
                      <button id="b1" disabled={game_end}  style={{width:"50px", height:"50px"}} className="btn btn-secondary" onClick={(e) => player_click(e, "b1")}></button>
                    </div>
                    <div className="col">
                      <button id="b2" disabled={game_end}   className="btn btn-secondary" style={{width:"50px", height:"50px"}}    onClick={(e) => player_click(e, "b2")}></button>
                    </div>
          <div className="col">
            <button id="b3" disabled={game_end} className="btn btn-secondary" style={{width:"50px", height:"50px"}}   onClick={(e) => player_click(e, "b3")}></button>
          </div>
        </div>
        <div className="row">
          <div className="col"><br></br>
            <button id="b4" disabled={game_end} className="btn btn-secondary" style={{width:"50px", height:"50px"}}  onClick={(e) => player_click(e, "b4")}></button>
          </div>
          <div className="col"><br></br>
            <button id="b5" disabled={game_end}  className="btn btn-secondary" style={{width:"50px", height:"50px"}}  onClick={(e) => player_click(e, "b5")}></button>
          </div>
          <div className="col"><br></br>
            <button id="b6" disabled={game_end}  className="btn btn-secondary" style={{width:"50px", height:"50px"}}  onClick={(e) => player_click(e, "b6")}></button>
          </div>
        </div>
        <div className="row">
          <div className="col"><br></br>
            <button id="b7" disabled={game_end}  className="btn btn-secondary" style={{width:"50px", height:"50px"}}  onClick={(e) => player_click(e, "b7")}></button>
          </div>
          <div className="col"><br></br>
            <button id="b8" disabled={game_end}  className="btn btn-secondary" style={{width:"50px", height:"50px"}}  onClick={(e) => player_click(e, "b8")}></button>
          </div>
          <div className="col"><br></br>
            <button id="b9"  disabled={game_end}  className="btn btn-secondary" style={{width:"50px", height:"50px"}}  onClick={(e) => player_click(e, "b9")}></button>
          </div>
        </div>
      </div> 
    </div>
    </div>
      </div>
      </div>
      
  );
}

export default App;

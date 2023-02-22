import React from "react";

function App(){
    let curDate = new Date();
curDate= curDate.getHours();

let greeting = ' ';
const cssStyle={
  color:'green'
};

if(curDate>=1 && curDate<12){
greeting='Good morning';
cssStyle.color='green';
}
else if(curDate>=12 && curDate<19){
  greeting='good afternoon';
  cssStyle.color='orange';
}
else{
  greeting='good night'
  cssStyle.color='black';
}

return (
    <>
        <div>
                <h1> 
                  Hello Sir,<span style={cssStyle}> {greeting}</span> 
                </h1>

        </div>
    </>
    
    );

}

export default App;

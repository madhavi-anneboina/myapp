import React from "react";

const Hello =  () =>{
    // return(
    //     <div>
    //       <h4>Hello Madhura</h4>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1',null,"Hello Madhura"))
}
export default Hello;

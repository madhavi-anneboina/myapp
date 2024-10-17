import React from "react";

const UpdatedComponent = OriginalComponet => {
 class  NewComponent extends React.Component{
    render(){
        return <OriginalComponet name="madhavi" />
    }
 }
 return NewComponent
}
export default UpdatedComponent

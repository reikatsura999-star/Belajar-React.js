import React from "react";
import { memo } from "react";

const MemoChild = React.memo(function MemoChild({name}){
    console.log(`[MemoChild] Selalu merender ulang pada ${new Date().toLocaleTimeString()}`);
      return <div>MemoChild : {name}</div>
    
})

export default MemoChild;
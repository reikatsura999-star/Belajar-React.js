import React from "react";
const MemoActionButton = React.memo( function MemoActionButton({onExecute}) {
    console.log("[MemoactionButton] render ulang pada",new Date().toLocaleTimeString())

    return <button onClick={onExecute}>Tambah Score</button>
})

export default MemoActionButton;
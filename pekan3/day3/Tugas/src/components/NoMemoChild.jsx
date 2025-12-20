import { useMemo } from "react";

function NoMemoChild({ name }) {
  console.log(`[No_MemoChild] Selalu merender ulang pada ${new Date().toLocaleTimeString()}`);
  return <div>NoMemoChild : {name}</div>;
}

export default NoMemoChild;
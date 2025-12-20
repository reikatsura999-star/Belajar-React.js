import React, { useState } from 'react';
import MemoChild from './MemoChild';
import NoMemoChild from './NoMemoChild';

function Parent() {
  const [name, setName] = useState("budi");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>No.1</h1>
      <h1>Ini adalah Contoh Memo di React</h1>
      <p>Count: {count}</p>

      <button onClick={() => setName(name === "budi" ? "yanto" : "budi")}>
        ganti nama
      </button>

      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <br /><br />

      {/* komponen anak */}
      <MemoChild name={name} />
      <NoMemoChild name={name} />
    </div>
  );
}

export default Parent;

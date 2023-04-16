import { useState } from "react";
import "./App.css";
import axios from "axios";

// 取得データのタイプ
type Data = {
  id: number;
  name: string;
};

const App = () => {
  // データ
  const [userData, setUserData] = useState<Data[]>([]);

  //データ取得
  const getData = () => {
    axios
      .get("/sample")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <h2>データ取得ボタン</h2>
      <button onClick={getData}>データ取得</button>
      {userData.map((data) => (
        <ul key={data.id}>
          <li>{data.id}</li>
          <li>{data.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;

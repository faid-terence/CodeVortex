import { useState } from "react";
import "./App.css";

import { Layout } from "../src/layouts/layout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <Layout />;
}

export default App;

import "../src/styles/global.css";
import Header from "./components/Header";
import CalcBody from "./components/Button";
export default function App() {
  return (
    <div className="calculator">
      <Header />
      <CalcBody />
    </div>
  );
}

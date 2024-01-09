import "../styles/display.css";
const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
export default function CalcBody() {
  return (
    <div className="calc-body">
      {buttons.map((e, index) => {
        return <Button data={e} key={index} />;
      })}
    </div>
  );
}
function Button(probs) {
  const { data } = probs;
  let classBtn = "btn";
  return <button className={classBtn}>{data}</button>;
}

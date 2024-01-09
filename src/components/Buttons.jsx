export default function Buttons(probs) {
  const { data } = probs;
  let classBtn = "btn";
  return <button className={classBtn}>{data}</button>;
}

import "./Training.css";
function Card(props) {
  return (
    <div className="card">
      <img className="cardImg" src={props.img} alt="Card cap" />
      <div>
        <h5 className="cardname">{props.name}</h5>
        <span className="text1">{props.notes}</span>
      </div>
    </div>
  );
}
export default Card;

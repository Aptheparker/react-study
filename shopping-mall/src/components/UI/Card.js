// css
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //string concatenation

  return <div className={classes}>{props.children}</div>;
}

export default Card;

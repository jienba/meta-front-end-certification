import  './promo.css'
function Promo(props) {
  return (
    <div className="promo-section">
      <div>
        <h1> {props.heading}</h1>
      </div>
      <div>
        <h2 style={{
            color: "lightgray",
            fontSize: ".8rem",
            fontWeight: "bold"
        }}>
            {props.promoSubHeading}
        </h2>
          <button onClick={handleClickEvent} >Awesome</button>
          <button onClick={handleClickEventExpressionFunction} >Awesome Expression</button>
      </div>
    </div>
  );
}

const handleClickEventExpressionFunction = () => {
    console.log("Yo i'm expression clicked")

}
function handleClickEvent() {

    console.log("Yo i'm clicked")
}

export default Promo;

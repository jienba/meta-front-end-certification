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
      </div>
    </div>
  );
}

export default Promo;

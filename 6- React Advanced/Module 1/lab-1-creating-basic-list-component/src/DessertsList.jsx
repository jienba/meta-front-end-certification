function DessertsList(props) {
  const dessertsList = props.data
      .filter(item => item.calories < 600)
      .sort((a, b) => a.calories - b.calories)
      .map(item => {
      const dessertItem = ` ${item.name} - ${item.calories} cal`
      return <li>{dessertItem}</li>
  });
  console.log("List of Desserts", dessertsList);
  return (
      <ul>
          {dessertsList}
      </ul>
  );
}

export default DessertsList;

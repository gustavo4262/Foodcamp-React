import Options from "../Components/Options";

export default function Container(props) {
  console.log(props);
  let itens = props.children;
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <ul className="options">
        {itens.map((item) => (
          <Options
            key={item.id}
            id={item.id}
            container={props.container}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          ></Options>
        ))}
      </ul>
    </div>
  );
}

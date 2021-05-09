import Container from "../Components/Container";
import data from "../data/data.json";

export default function Content() {
  const containers = data;

  function confirmOrder() {
    alert();
  }

  return (
    <div className="content">
      {containers.map((container) => (
        <Container
          key={container.id}
          title={container.title}
          container={container.id}
        >
          {container.itens}
        </Container>
      ))}
      <div className="order">
        <button onClick={confirmOrder}>
          Selecione os 3 itens <br />
          para fechar o pedido
        </button>
      </div>
    </div>
  );
}

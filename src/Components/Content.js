import Container from "../Components/Container";
import data from "../data/data.json";

export default function Content() {
  const containers = data;

  function confirmOrder() {
    if (
      document.querySelector(".order button").classList.contains("finished")
    ) {
      let pratos = "",
        bebidas = "",
        sobremesas = "",
        totalPrice = 0;
      Array.from(document.querySelectorAll(".selected")).forEach((item) => {
        let repeats = item.querySelector(".counter p").innerHTML;
        let title = item.querySelector("h1").innerHTML;
        let price = item.querySelector("h3").innerHTML;
        totalPrice += parseFloat(price.slice(2)) * parseInt(repeats);
        if (repeats > 1) title += `(${repeats}x)`;
        if (getContainer(item) === "Prato") pratos += title + "  ";
        else if (getContainer(item) === "Bebida") bebidas += title + "  ";
        else if (getContainer(item) === "Sobremesa") sobremesas += title + "  ";
      });
      let text = `Olá, gostaria de fazer o pedido:
      - Prato: ${pratos}
      - Bebida: ${bebidas}
      - Sobremesa: ${sobremesas}
      Total: ${totalPrice.toFixed(2)}`;
      sendMessage(text);
    }
  }

  function sendMessage(text) {
    text = encodeURIComponent(text);
    let url = "https://wa.me/5585996393218?text=" + text;
    window.open(url);
  }

  function getContainer(element) {
    let container = element.parentElement.parentElement;
    let title = container.querySelector("h1").innerHTML;
    if (title === "Primeiro, seu prato") return "Prato";
    if (title === "Agora, sua bebida") return "Bebida";
    if (title === "Por fim, sua sobremesa") return "Sobremesa";
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

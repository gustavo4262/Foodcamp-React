import frango from "../images/frango_yin_yang.png";
import coca from "../images/coquinha_gelada.png";
import pudim from "../images/pudim.png";
import React from "react";

export default function Options(props) {
  const [counters, setCounters] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let removeCounter = false;

  function selectItem() {
    let container = `.container:nth-child(${props.container}) `;
    let item = `.item:nth-child(${props.id}) `;
    let element = document.querySelector(container + item);
    let counter = element.querySelector(".counter");

    if (counter.classList.contains("hidden") && !removeCounter) {
      element.classList.add("selected");
      counter.classList.remove("hidden");
      addCounter();
    }

    finish();
  }

  function finish() {
    let element = document.querySelector(".order button");
    if (checkselection(1) && checkselection(2) && checkselection(3)) {
      element.innerHTML = "Fechar pedido";
      element.classList.add("finished");
    } else {
      element.innerHTML = "Selecione os 3 itens <br /> para fechar o pedido";
      element.classList.remove("finished");
    }
  }

  function addCounter() {
    const index = (props.container - 1) * 3 + props.id - 1;
    let newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  }

  function subCounter() {
    const index = (props.container - 1) * 3 + props.id - 1;
    let newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);

    if (newCounters[index] === 0) {
      let container = `.container:nth-child(${props.container}) `;
      let item = `.item:nth-child(${props.id}) `;
      let element = document.querySelector(container + item);
      element.classList.remove("selected");
      element.querySelector(".counter").classList.add("hidden");
      removeCounter = true;
    }
  }

  function checkselection(container_number) {
    let container = `.container:nth-child(${container_number}) `;
    let all_elements = document.querySelectorAll(container + " .item");

    for (let i = 0; i < all_elements.length; i += 1) {
      let element = all_elements[i];
      if (element.classList.contains("selected")) {
        return true;
      }
    }
    return false;
  }

  function getImagem(img) {
    if (img === "frango") return frango;
    if (img === "coca") return coca;
    if (img === "pudim") return pudim;
  }

  return (
    <li className="item" onClick={selectItem}>
      <img src={getImagem(props.img)} />
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.price}</h3>
      <div className="counter hidden">
        <button onClick={subCounter}>-</button>
        <p>{counters[(props.container - 1) * 3 + props.id - 1]}</p>
        <button onClick={addCounter}>+</button>
      </div>
    </li>
  );
}

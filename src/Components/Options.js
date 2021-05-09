export default function Options(props) {
  function selectItem() {
    let container = `.container:nth-child(${props.container}) `;
    let item = `.item:nth-child(${props.id}) `;

    let element = document.querySelector(container + item);
    element.classList.toggle("selected");

    let icon = document.querySelector("ion-icon");
    if (element.contains(icon)) {
      icon.remove();
    } else {
      icon = document.createElement("ion-icon");
      icon.setAttribute("name", "checkmark-circle");
      element.appendChild(icon);
    }

    finish();
  }

  function finish() {}

  return (
    <li className="item" onClick={selectItem}>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.price}</h3>
    </li>
  );
}

import { formatCurrency } from "./utils.js";
import Card from "./Card.js";
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    this.notificationDiv = document.querySelector(".notifications");
  }

  render({ type, price}) {
    const template = `
                <div class='notification type-${type}${classNames({
      "is-danger": type === Card.types.HAWAIIAN,
    })}'>
                <button class='delete'></button>
                <span class="type">${type}</span> (<span class='price'> ${formatCurrency(
      price
    )}</span>) has been added to your order!
                </div>`;
    this.container.innerHTML = template;

    this.notificationDiv.appendChild(this.container);

    let button = this.container.querySelector(".delete");
    button.addEventListener("click", () => this.empty());
  }

  empty() {
    this.notificationDiv.removeChild(this.container);
  }
}

export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }
  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      const modalElemet = modalElements.querySelector(".modal");
      const backdropElement = modalElements.querySelector(".backdrop");

      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      modalElemet.append(contentElement);
      document.body.insertAdjacentElement("afterbegin", modalElemet);
      document.body.insertAdjacentElement("afterbegin", backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }
  hide() {}
}

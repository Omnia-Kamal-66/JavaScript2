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
      this.modalElemet = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");

      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      this.modalElemet.append(contentElement);
      document.body.insertAdjacentElement("afterbegin", this.modalElemet);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }
  hide() {
    if (this.modalElemet) {
      document.body.removeChild(this.modalElemet);
      document.body.removeChild(this.backdropElement);
      this.modalElemet = null;
      this.backdropElement = null;
    }
  }
}

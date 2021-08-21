import { Modal } from "./UI/Modal";

//this class is to manage all buttons in the main html page

class PlaceFinder {
  constructor() {
    const getUserLocationBtn = document.getElementById("locate-btn");
    const form = document.querySelector("form");

    getUserLocationBtn.addEventListener("click", this.locateUserHandler);
    form.addEventListener("submit", this.formSubmitHandler);
  }

  formSubmitHandler() {}

  locateUserHandler() {
    const modal = new Modal(
      "loading-modal-content",
      "loading location , please wait"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.longitude,
          lng: successResult.coords.longitude,
        };
        console.log(coordinates);
      },
      (error) => {
        modal.hide();
        console.log(error);
      }
    );
  }
}
new PlaceFinder();

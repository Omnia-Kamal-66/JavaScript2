//this class is to manage all buttons in the main html page

class PlaceFinder {
  constructor() {
    const getUserLocationBtn = document.getElementById("locate-btn");
    const form = document.querySelector("form");

    getUserLocationBtn.addEventListener("click", this.findAddressHandler);
    form.addEventListener("submit", this.formSubmitHandler);
  }

  formSubmitHandler() {}

  findAddressHandler() {
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        console.log(successResult);
        const coordinates = {
          lat: successResult.coords.longitude,
          lng: successResult.coords.longitude,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
new PlaceFinder();


//this class is to manage all buttons in the main html page
class PlaceFinder{
constructor(){
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click',this.locateUserHandler);
    addressForm.addEventListener('submit',this.findAdressHandler);
}
locateUserHandler(){

}

findAdressHandler(){}

}
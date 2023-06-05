function addNewMessage() {
  let divRef = document.querySelector("#parent");

  let existingValue = divRef.innerHTML;
  let newValue = "<h1>Hello</h1>";

  let updatedValue = existingValue + newValue;

  // set the latest udpated value
  divRef.innerHTML = updatedValue;
}

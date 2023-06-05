function addNewMessage() {
  let divRef = document.querySelector("#parent");
  let inputRef = document.querySelector("#id1");
  let message = inputRef.value;

  let existingValue = divRef.innerHTML;
  // let newValue = "<h1>Hello</h1>";
  // let newValue = "<h1>" + message + "</h1>";
  let newValue = `<h1>${message}</h1>`;

  let updatedValue = existingValue + newValue;

  // set the latest udpated value
  divRef.innerHTML = updatedValue;

  // clear the message
  inputRef.value = "";
}

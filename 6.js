function addNewMessage(reply) {
  let divRef = document.querySelector("#parent");
  let inputRef = document.querySelector("#id1");
  let message = inputRef.value;

  let existingValue = divRef.innerHTML;
  let messagePosition = reply ? "end" : "start";
  let newValue = `<h1 style="display: flex; justify-content: ${messagePosition}">${message}</h1>`;

  let updatedValue = newValue + existingValue;

  // set the latest udpated value
  divRef.innerHTML = updatedValue;

  // clear the message
  inputRef.value = "";
}

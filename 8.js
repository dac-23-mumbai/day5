function addNewMessage(reply) {
  let divRef = document.querySelector("#parent");
  let inputRef = document.querySelector("#id1");
  let message = inputRef.value;

  let existingValue = divRef.innerHTML;
  let messagePosition = reply ? "end" : "start";
  let messageColor = reply ? "warning" : "success";
  let newValue = `<h1 class="d-flex justify-content-${messagePosition}">
                    <span class="badge text-bg-${messageColor}">${message}</span>
                    <span>&#128077;</span>
                    <span>0</span>
                    <span>&#128465;</span>
                  </h1>`;

  let updatedValue = newValue + existingValue;

  // set the latest udpated value
  divRef.innerHTML = updatedValue;

  // clear the message
  inputRef.value = "";
}

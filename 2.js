function likeMe() {
  let h1ref = document.querySelector("#id1");

  // get the existing value
  let existingValue = h1ref.innerHTML;

  // Incrmenent Operation
  let newValue = parseInt(existingValue) + 1;

  // set the new value
  h1ref.innerHTML = newValue;
}

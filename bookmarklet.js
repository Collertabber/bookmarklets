document.body.onload = addElement;

function positionElement(el, x, y) {
  el.style.position = 'absolute';
  el.style.left = x + 'px';
  el.style.top = y + 'px';
}

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  const b = newDiv;
  b.innerHTML = '<center><iframe src="https://collertabber.github.io/bookmarklets/index.html" title="description" height="100" width="450" style="border:none;"></iframe></center>';
  b.style.left = 0;
  }

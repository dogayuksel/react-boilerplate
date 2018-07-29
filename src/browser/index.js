function component() {
  const element = document.createElement('div');
  const app = 'RB';
  element.innerHTML = `Hello World, ${app}`;
  return element;
}

document.body.appendChild(component());

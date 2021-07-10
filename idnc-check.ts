const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll<HTMLButtonElement>('button');
buttons[0].click();
buttons[2].click();
buttons[5].click();
setTimeout(() => buttons[11].click(), 500);

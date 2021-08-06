function main(): void {
  if (
    !Array.from(document.querySelectorAll<HTMLAnchorElement>('a')).find(
      (element: HTMLAnchorElement): RegExpMatchArray =>
        element.href.match('policies.google.com/technologies')
    )
  )
    return;
  const hostArray: string[] = location.hostname.split('.');
  hostArray.pop();
  switch (hostArray.join('.')) {
    case 'consent.youtube':
      document.querySelector<HTMLButtonElement>('button').click();
      break;
    case 'www.google':
      document.querySelectorAll<HTMLButtonElement>('button')[4].click();
      break;
    case 'www.youtube':
      Array.from(
        document.querySelectorAll<HTMLButtonElement>(
          'tp-yt-paper-button#button'
        )
      )
        .filter(
          (button: HTMLButtonElement): boolean =>
            button.children[0].tagName === 'YT-FORMATTED-STRING'
        )[1]
        .click();
      break;
    default:
      return;
  }
}
main();

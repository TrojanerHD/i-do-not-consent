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
    default:
      return;
  }
}
main();

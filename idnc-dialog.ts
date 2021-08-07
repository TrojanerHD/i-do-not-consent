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
    case 'www.google':
      document.querySelectorAll<HTMLButtonElement>('button')[4].click();
      break;
    case 'www.youtube':
      (
        Array.from(
          document.querySelectorAll<HTMLAnchorElement>(
            'a.yt-simple-endpoint.style-scope.ytd-button-renderer'
          )
        ).find((a: HTMLAnchorElement) =>
          a.href.match(/^https:\/\/consent.youtube/)
        ).children[0] as HTMLButtonElement
      ).click();
      break;
    default:
      return;
  }
}
main();

export function compareUrl(urlarr1: string[], urlarr2: string[]): number {
  let count: number = 0;
  let maxlen: number = urlarr1.length > urlarr2.length ? urlarr2.length : urlarr1.length;
  let isSameLength: boolean = urlarr1.length === urlarr2.length;
  for (; count < maxlen; count++) if (urlarr1[count] !== urlarr2[count]) break;
  return count === 0 ? -1 : count === maxlen && isSameLength ? 0 : count;
}

export function tokenize(url: string): string[] {
  if (url.match(/\/$/)) url = url.slice(0, -1);
  let ret: string[] = url.split('/');
  ret.shift();
  return ret;
}

export function removeLangFromArr(arr: string[], lang: string): void {
  if (arr[0] === lang) arr.shift();
  if (arr.length === 0) arr[0] = '';
}

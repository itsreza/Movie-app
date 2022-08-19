export const getSearchParams = (): any => {
  const searchParams = new URLSearchParams(window.location.search);
  const entries = searchParams.entries();
  const paramsObject: object = paramsToObject(entries);
  return paramsObject;
};

export const replaceSearchParams = (searchParams: object): void => {
  const { protocol, host, pathname } = window?.location;
  const CURRENT_URL = new URL(`${protocol}//${host}${pathname}`);
  // [TODO]-Should be Convert To another functionality
  const stringParamsArray: string[] = [];
  for (const entry of Object.entries(searchParams)) {
    const [param, value] = entry;
    stringParamsArray.push(`${param}=${value}`);
  }
  const stringifyObject: string = stringParamsArray.join('&');
  const updatedURLWithParams = CURRENT_URL + '?' + stringifyObject;
  window.history.pushState({ path: updatedURLWithParams }, '', updatedURLWithParams);
};

interface InterfaceResult {
  [name: string]: any;
}

function paramsToObject(entries: any) {
  const result: InterfaceResult = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

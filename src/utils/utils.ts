export function parseFormData(formElement: HTMLFormElement) {
  const parsedData: { [key: string]: any } = {};
  const formData = new FormData(formElement);
  for (const [k, v] of formData.entries()) {
    parsedData[k] = v;
  }
  return parsedData;
}

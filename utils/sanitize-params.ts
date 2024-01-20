export function sanitizeParams(parameters?: Record<string, any>) {
  let params = { ...parameters };

  for (let key in params) {
    if (!params[key]) delete params[key];
  }

  return params;
}

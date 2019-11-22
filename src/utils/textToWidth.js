
export const nameToWidth = (name, parameters) => {
  const nodeFontSize = 13;
  const parameterFontSize = 10;
  const nodeWidth = name && name.length * nodeFontSize;
  if (!parameters || parameters.length === 0) return nodeWidth;

  const parameterWidth = parameters && parameters
    .reduce((max, parameter) => Math.max(max, parameter.name.length), 0) 
    * parameterFontSize;
  return Math.max(nodeWidth, parameterWidth);
};

export const nameToWidth = (name, parameters) => {
  const nodeFontSize = 13;
  const parameterFontSize = 10;
  const nodeWidth = name.length * nodeFontSize;
  const parameterWidth = parameters && parameters
    .filter((parameter) => parameter.isVisible)
    .reduce((max, parameter) => Math.max(max, parameter.name.length), 0) 
    * parameterFontSize;
  return Math.max(nodeWidth, parameterWidth);
};
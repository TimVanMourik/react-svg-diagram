
import {save} from 'save-file';
import pretty from 'pretty';
import {saveSvgAsPng} from 'save-svg-as-png';


const svgXmlHeader = `<?xml
version="1.0"
encoding="iso-8859-1"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`;

const svgHeader = `<svg
height="100%"
width="100%"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink">`;

export const svgElementToFile = (svg, format) => {
  const svgString = pretty(element.outerHTML).split('\n');
  //replace svg header for a stand-alone file:
  svgString[0] = svgHeader;

  switch (format) {
    case 'SVG':
      save(pretty((svgXmlHeader + svgString.join('\n'))), 'canvas.svg');
      break;
    case 'PNG':
      saveSvgAsPng(svg, 'canvas.png');
      break;
    default:
      save(pretty((svgXmlHeader + svgString.join('\n'))), 'canvas.svg');
      break;
  }
}
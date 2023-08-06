import tinycolor from 'tinycolor2'

export default function usegenerateTintsAndShades(color,n) {
    const tintss = [];
    const shadess = [];
    const baseColor = tinycolor(color);

    // Calculate the steps between each tint/shade based on the total number of colors
    // const stepx = 3.2; //darken
    const stepS = 120 / (n + 19);
    const stepT = 110 / (n +16); //lightrn
    //2.2
    //3.2
    // Generate n tints and n shades
    for (let i = 1; i <= n; i++) {
      const tint = baseColor.lighten(stepT * i).toHexString();
      const shade = baseColor.darken(stepS * i).toHexString();

      tintss.push(tint);
      shadess.push(shade);
    }
    return { tintss, shadess };
  }
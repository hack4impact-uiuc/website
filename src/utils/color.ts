/* eslint-disable */
// @ts-nocheck

// Adapted from https://stackoverflow.com/a/13542669
export const pSBC = (
  p: number,
  c0: string,
  c1?: string,
  l?: boolean
): string => {
  let r,
    g,
    b,
    P,
    f,
    t,
    h,
    m = Math.round,
    a = typeof c1 == "string";
  if (
    typeof p != "number" ||
    p < -1 ||
    p > 1 ||
    typeof c0 != "string" ||
    (c0[0] != "r" && c0[0] != "#") ||
    (c1 && !a)
  )
    return null;

  (h = c0.length > 9),
    (h = a ? (c1.length > 9 ? true : c1 == "c" ? !h : false) : h),
    (f = pSBCr(c0)),
    (P = p < 0),
    (t =
      c1 && c1 != "c"
        ? pSBCr(c1)
        : P
        ? { r: 0, g: 0, b: 0, a: -1 }
        : { r: 255, g: 255, b: 255, a: -1 }),
    (p = P ? p * -1 : p),
    (P = 1 - p);
  if (!f || !t) return null;
  if (l)
    (r = m(P * f.r + p * t.r)),
      (g = m(P * f.g + p * t.g)),
      (b = m(P * f.b + p * t.b));
  else
    (r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5)),
      (g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5)),
      (b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5));
  (a = f.a),
    (t = t.a),
    (f = a >= 0 || t >= 0),
    (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0);
  if (h)
    return (
      "rgb" +
      (f ? "a(" : "(") +
      r +
      "," +
      g +
      "," +
      b +
      (f ? "," + m(a * 1000) / 1000 : "") +
      ")"
    );
  else
    return (
      "#" +
      (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0))
        .toString(16)
        .slice(1, f ? undefined : -2)
    );
};

const pSBCr = (d) => {
  let n = d.length,
    x = {},
    i = parseInt;

  if (n > 9) {
    ([r, g, b, a] = d = d.split(",")), (n = d.length);
    if (n < 3 || n > 4) return null;
    (x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4))),
      (x.g = i(g)),
      (x.b = i(b)),
      (x.a = a ? parseFloat(a) : -1);
  } else {
    if (n == 8 || n == 6 || n < 4) return null;
    if (n < 6)
      d =
        "#" +
        d[1] +
        d[1] +
        d[2] +
        d[2] +
        d[3] +
        d[3] +
        (n > 4 ? d[4] + d[4] : "");
    d = i(d.slice(1), 16);
    if (n == 9 || n == 5)
      (x.r = (d >> 24) & 255),
        (x.g = (d >> 16) & 255),
        (x.b = (d >> 8) & 255),
        (x.a = m((d & 255) / 0.255) / 1000);
    else (x.r = d >> 16), (x.g = (d >> 8) & 255), (x.b = d & 255), (x.a = -1);
  }
  return x;
};

const HEX_MATCH = /^#(?=[0-9A-F]*$)(?:.{6}|.{8})$/i;

/**
 * Convert any color format into RGBA
 *
 * ! This function does not support CSS named colors
 * https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
 *
 * @param color -- hex, hsla, or rgba color string
 * @returns -- a color string in rgba format
 */
export const convertToRGBA = (color: string): string => {
  if (color.startsWith("rgba")) {
    return color;
  }

  if (color.startsWith("rgb")) {
    return color.replace("rgb", "rgba").replace(")", ",1)");
  }

  if (HEX_MATCH.test(color)) {
    return convertHexToRGBA(color);
  }

  if (color.startsWith("hsl")) {
    return convertHSLAToRGBA(color);
  }

  throw new Error(`Color '${color}' is in an unsupported format.`);
};

const convertHexToRGBA = (hexString: string) => {
  let hex = hexString.replace("#", "");

  // pad shorthand hex
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  // parse channels
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  let a = 1;

  if (hex.length > 6) {
    a = parseInt(hex.substring(6, 8), 16) / 255;
  }

  return `rgba(${r},${g},${b},${a})`;
};

const convertHSLAToRGBA = (_hslaString: string) => {
  // TODO: support hsla
  throw new Error("HSLA not yet supported :(");
};

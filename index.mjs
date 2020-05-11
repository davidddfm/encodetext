//base64
export function convertirBase64(str) { return Buffer.from(str).toString("base64"); }

//ROT13
export function convertirROT13(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    );
  });
}

//HEX
export function convertirHEX(str) {
  let arr1 = [];
  for (let n = 0, l = str.length; n < l; n++) {
    let hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
}

//Binario
export function convertirBin(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let e = str[i].charCodeAt(0);
    let s = "";
    do {
      var a = e % 2;
      e = (e - a) / 2;
      s = a + s;
    } while (e !== 0);
    while (s.length < 8) {
      s = "0" + s;
    }
    res += s;
  }

  return res;
}


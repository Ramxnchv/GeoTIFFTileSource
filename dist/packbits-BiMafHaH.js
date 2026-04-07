<<<<<<<< HEAD:dist/packbits-CevMF2Sq.js
import { B as c } from "./main-D9QVMkP0.js";
========
import { B as c } from "./main-DxWiebmb.js";
>>>>>>>> upstream/main:dist/packbits-BiMafHaH.js
class l extends c {
  decodeBlock(s) {
    const n = new DataView(s), r = [];
    for (let e = 0; e < s.byteLength; ++e) {
      let t = n.getInt8(e);
      if (t < 0) {
        const o = n.getUint8(e + 1);
        t = -t;
        for (let a = 0; a <= t; ++a)
          r.push(o);
        e += 1;
      } else {
        for (let o = 0; o <= t; ++o)
          r.push(n.getUint8(e + o + 1));
        e += t + 1;
      }
    }
    return new Uint8Array(r).buffer;
  }
}
export {
  l as default
};
<<<<<<<< HEAD:dist/packbits-CevMF2Sq.js
//# sourceMappingURL=packbits-CevMF2Sq.js.map
========
//# sourceMappingURL=packbits-BiMafHaH.js.map
>>>>>>>> upstream/main:dist/packbits-BiMafHaH.js

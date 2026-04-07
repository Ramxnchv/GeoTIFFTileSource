var qt = Object.defineProperty;
var Vt = (r, e, t) => e in r ? qt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Be = (r, e, t) => Vt(r, typeof e != "symbol" ? e + "" : e, t);
function j(r) {
  return (e, ...t) => Wt(r, e, t);
}
function ge(r, e) {
  return j(
    ct(
      r,
      e
    ).get
  );
}
const {
  apply: Wt,
  getOwnPropertyDescriptor: ct,
  getPrototypeOf: ze,
  ownKeys: $t
} = Reflect, {
  iterator: be,
  toStringTag: Yt
} = Symbol, Xt = Object, {
  create: Ke,
  defineProperty: Zt
} = Xt, Jt = Array, Qt = Jt.prototype, ft = Qt[be], er = j(ft), ht = ArrayBuffer, tr = ht.prototype;
ge(tr, "byteLength");
const nt = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
nt && ge(nt.prototype, "byteLength");
const ut = ze(Uint8Array);
ut.from;
const H = ut.prototype;
H[be];
j(H.keys);
j(
  H.values
);
j(
  H.entries
);
j(H.set);
j(
  H.reverse
);
j(H.fill);
j(
  H.copyWithin
);
j(H.sort);
j(H.slice);
j(
  H.subarray
);
ge(
  H,
  "buffer"
);
ge(
  H,
  "byteOffset"
);
ge(
  H,
  "length"
);
ge(
  H,
  Yt
);
const rr = Uint8Array, gt = Uint16Array, He = Uint32Array, nr = Float32Array, we = ze([][be]()), dt = j(we.next), ir = j(function* () {
}().next), sr = ze(we), or = DataView.prototype, ar = j(
  or.getUint16
), qe = WeakMap, pt = qe.prototype, mt = j(pt.get), lr = j(pt.set), yt = new qe(), cr = Ke(null, {
  next: {
    value: function() {
      const e = mt(yt, this);
      return dt(e);
    }
  },
  [be]: {
    value: function() {
      return this;
    }
  }
});
function fr(r) {
  if (r[be] === ft && we.next === dt)
    return r;
  const e = Ke(cr);
  return lr(yt, e, er(r)), e;
}
const hr = new qe(), ur = Ke(sr, {
  next: {
    value: function() {
      const e = mt(hr, this);
      return ir(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const r of $t(we))
  r !== "next" && Zt(ur, r, ct(we, r));
const wt = new ht(4), gr = new nr(wt), dr = new He(wt), X = new gt(512), Z = new rr(512);
for (let r = 0; r < 256; ++r) {
  const e = r - 127;
  e < -24 ? (X[r] = 0, X[r | 256] = 32768, Z[r] = 24, Z[r | 256] = 24) : e < -14 ? (X[r] = 1024 >> -e - 14, X[r | 256] = 1024 >> -e - 14 | 32768, Z[r] = -e - 1, Z[r | 256] = -e - 1) : e <= 15 ? (X[r] = e + 15 << 10, X[r | 256] = e + 15 << 10 | 32768, Z[r] = 13, Z[r | 256] = 13) : e < 128 ? (X[r] = 31744, X[r | 256] = 64512, Z[r] = 24, Z[r | 256] = 24) : (X[r] = 31744, X[r | 256] = 64512, Z[r] = 13, Z[r | 256] = 13);
}
const Ve = new He(2048);
for (let r = 1; r < 1024; ++r) {
  let e = r << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, Ve[r] = e | t;
}
for (let r = 1024; r < 2048; ++r)
  Ve[r] = 939524096 + (r - 1024 << 13);
const de = new He(64);
for (let r = 1; r < 31; ++r)
  de[r] = r << 23;
de[31] = 1199570944;
de[32] = 2147483648;
for (let r = 33; r < 63; ++r)
  de[r] = 2147483648 + (r - 32 << 23);
de[63] = 3347054592;
const bt = new gt(64);
for (let r = 1; r < 64; ++r)
  r !== 32 && (bt[r] = 1024);
function pr(r) {
  const e = r >> 10;
  return dr[0] = Ve[bt[e] + (r & 1023)] + de[e], gr[0];
}
function xt(r, e, ...t) {
  return pr(
    ar(r, e, ...fr(t))
  );
}
function It(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var We = { exports: {} };
function Tt(r, e, t) {
  const n = t && t.debug || !1;
  n && console.log("[xml-utils] getting " + e + " in " + r);
  const i = typeof r == "object" ? r.outer : r, s = i.slice(0, i.indexOf(">") + 1), a = ['"', "'"];
  for (let o = 0; o < a.length; o++) {
    const c = a[o], f = e + "\\=" + c + "([^" + c + "]*)" + c;
    n && console.log("[xml-utils] pattern:", f);
    const l = new RegExp(f).exec(s);
    if (n && console.log("[xml-utils] match:", l), l) return l[1];
  }
}
We.exports = Tt;
We.exports.default = Tt;
var mr = We.exports;
const ve = /* @__PURE__ */ It(mr);
var $e = { exports: {} }, Ye = { exports: {} }, Xe = { exports: {} };
function St(r, e, t) {
  const i = new RegExp(e).exec(r.slice(t));
  return i ? t + i.index : -1;
}
Xe.exports = St;
Xe.exports.default = St;
var yr = Xe.exports, Ze = { exports: {} };
function Ft(r, e, t) {
  const i = new RegExp(e).exec(r.slice(t));
  return i ? t + i.index + i[0].length - 1 : -1;
}
Ze.exports = Ft;
Ze.exports.default = Ft;
var wr = Ze.exports, Je = { exports: {} };
function Pt(r, e) {
  const t = new RegExp(e, "g"), n = r.match(t);
  return n ? n.length : 0;
}
Je.exports = Pt;
Je.exports.default = Pt;
var br = Je.exports;
const xr = yr, Ge = wr, it = br;
function At(r, e, t) {
  const n = t && t.debug || !1, i = !(t && typeof t.nested === !1), s = t && t.startIndex || 0;
  n && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const a = xr(r, `<${e}[ 
>/]`, s);
  if (n && console.log("[xml-utils] start:", a), a === -1) return;
  const o = r.slice(a + e.length);
  let c = Ge(o, "^[^<]*[ /]>", 0);
  const f = c !== -1 && o[c - 1] === "/";
  if (n && console.log("[xml-utils] selfClosing:", f), f === !1)
    if (i) {
      let d = 0, u = 1, y = 0;
      for (; (c = Ge(o, "[ /]" + e + ">", d)) !== -1; ) {
        const w = o.substring(d, c + 1);
        if (u += it(w, "<" + e + `[ 
	>]`), y += it(w, "</" + e + ">"), y >= u) break;
        d = c;
      }
    } else
      c = Ge(o, "[ /]" + e + ">", 0);
  const g = a + e.length + c + 1;
  if (n && console.log("[xml-utils] end:", g), g === -1) return;
  const l = r.slice(a, g);
  let h;
  return f ? h = null : h = l.slice(l.indexOf(">") + 1, l.lastIndexOf("<")), { inner: h, outer: l, start: a, end: g };
}
Ye.exports = At;
Ye.exports.default = At;
var Ir = Ye.exports;
const Tr = Ir;
function Dt(r, e, t) {
  const n = [], i = t && t.debug || !1, s = t && typeof t.nested == "boolean" ? t.nested : !0;
  let a = t && t.startIndex || 0, o;
  for (; o = Tr(r, e, { debug: i, startIndex: a }); )
    s ? a = o.start + 1 + e.length : a = o.end, n.push(o);
  return i && console.log("findTagsByName found", n.length, "tags"), n;
}
$e.exports = Dt;
$e.exports.default = Dt;
var Sr = $e.exports;
const Fr = /* @__PURE__ */ It(Sr), oe = {
  // TIFF Baseline
  315: "Artist",
  258: "BitsPerSample",
  265: "CellLength",
  264: "CellWidth",
  320: "ColorMap",
  259: "Compression",
  33432: "Copyright",
  306: "DateTime",
  338: "ExtraSamples",
  266: "FillOrder",
  289: "FreeByteCounts",
  288: "FreeOffsets",
  291: "GrayResponseCurve",
  290: "GrayResponseUnit",
  316: "HostComputer",
  270: "ImageDescription",
  257: "ImageLength",
  256: "ImageWidth",
  271: "Make",
  281: "MaxSampleValue",
  280: "MinSampleValue",
  272: "Model",
  254: "NewSubfileType",
  274: "Orientation",
  262: "PhotometricInterpretation",
  284: "PlanarConfiguration",
  296: "ResolutionUnit",
  278: "RowsPerStrip",
  277: "SamplesPerPixel",
  305: "Software",
  279: "StripByteCounts",
  273: "StripOffsets",
  255: "SubfileType",
  263: "Threshholding",
  282: "XResolution",
  283: "YResolution",
  // TIFF Extended
  326: "BadFaxLines",
  327: "CleanFaxData",
  343: "ClipPath",
  328: "ConsecutiveBadFaxLines",
  433: "Decode",
  434: "DefaultImageColor",
  269: "DocumentName",
  336: "DotRange",
  321: "HalftoneHints",
  346: "Indexed",
  347: "JPEGTables",
  285: "PageName",
  297: "PageNumber",
  317: "Predictor",
  319: "PrimaryChromaticities",
  532: "ReferenceBlackWhite",
  339: "SampleFormat",
  340: "SMinSampleValue",
  341: "SMaxSampleValue",
  559: "StripRowCounts",
  330: "SubIFDs",
  292: "T4Options",
  293: "T6Options",
  325: "TileByteCounts",
  323: "TileLength",
  324: "TileOffsets",
  322: "TileWidth",
  301: "TransferFunction",
  318: "WhitePoint",
  344: "XClipPathUnits",
  286: "XPosition",
  529: "YCbCrCoefficients",
  531: "YCbCrPositioning",
  530: "YCbCrSubSampling",
  345: "YClipPathUnits",
  287: "YPosition",
  // EXIF
  37378: "ApertureValue",
  40961: "ColorSpace",
  36868: "DateTimeDigitized",
  36867: "DateTimeOriginal",
  34665: "Exif IFD",
  36864: "ExifVersion",
  33434: "ExposureTime",
  41728: "FileSource",
  37385: "Flash",
  40960: "FlashpixVersion",
  33437: "FNumber",
  42016: "ImageUniqueID",
  37384: "LightSource",
  37500: "MakerNote",
  37377: "ShutterSpeedValue",
  37510: "UserComment",
  // IPTC
  33723: "IPTC",
  // ICC
  34675: "ICC Profile",
  // XMP
  700: "XMP",
  // GDAL
  42112: "GDAL_METADATA",
  42113: "GDAL_NODATA",
  // Photoshop
  34377: "Photoshop",
  // GeoTiff
  33550: "ModelPixelScale",
  33922: "ModelTiepoint",
  34264: "ModelTransformation",
  34735: "GeoKeyDirectory",
  34736: "GeoDoubleParams",
  34737: "GeoAsciiParams",
  // LERC
  50674: "LercParameters"
}, V = {};
for (const r in oe)
  oe.hasOwnProperty(r) && (V[oe[r]] = parseInt(r, 10));
const Pe = {
  256: "SHORT",
  257: "SHORT",
  258: "SHORT",
  259: "SHORT",
  262: "SHORT",
  273: "LONG",
  274: "SHORT",
  277: "SHORT",
  278: "LONG",
  279: "LONG",
  282: "RATIONAL",
  283: "RATIONAL",
  284: "SHORT",
  286: "SHORT",
  287: "RATIONAL",
  296: "SHORT",
  297: "SHORT",
  305: "ASCII",
  306: "ASCII",
  338: "SHORT",
  339: "SHORT",
  513: "LONG",
  514: "LONG",
  1024: "SHORT",
  1025: "SHORT",
  2048: "SHORT",
  2049: "ASCII",
  3072: "SHORT",
  3073: "ASCII",
  33550: "DOUBLE",
  33922: "DOUBLE",
  34264: "DOUBLE",
  34665: "LONG",
  34735: "SHORT",
  34736: "DOUBLE",
  34737: "ASCII",
  42113: "ASCII"
}, kt = [
  V.BitsPerSample,
  V.ExtraSamples,
  V.SampleFormat,
  V.StripByteCounts,
  V.StripOffsets,
  V.StripRowCounts,
  V.TileByteCounts,
  V.TileOffsets,
  V.SubIFDs
], ye = {
  1: "BYTE",
  2: "ASCII",
  3: "SHORT",
  4: "LONG",
  5: "RATIONAL",
  6: "SBYTE",
  7: "UNDEFINED",
  8: "SSHORT",
  9: "SLONG",
  10: "SRATIONAL",
  11: "FLOAT",
  12: "DOUBLE",
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  13: "IFD",
  // introduced by BigTIFF
  16: "LONG8",
  17: "SLONG8",
  18: "IFD8"
}, B = {};
for (const r in ye)
  ye.hasOwnProperty(r) && (B[ye[r]] = parseInt(r, 10));
const z = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
  ICCLab: 9
}, Ct = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, Pr = {
  Version: 0,
  AddCompression: 1
}, Ar = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, ce = {
  1024: "GTModelTypeGeoKey",
  1025: "GTRasterTypeGeoKey",
  1026: "GTCitationGeoKey",
  2048: "GeographicTypeGeoKey",
  2049: "GeogCitationGeoKey",
  2050: "GeogGeodeticDatumGeoKey",
  2051: "GeogPrimeMeridianGeoKey",
  2052: "GeogLinearUnitsGeoKey",
  2053: "GeogLinearUnitSizeGeoKey",
  2054: "GeogAngularUnitsGeoKey",
  2055: "GeogAngularUnitSizeGeoKey",
  2056: "GeogEllipsoidGeoKey",
  2057: "GeogSemiMajorAxisGeoKey",
  2058: "GeogSemiMinorAxisGeoKey",
  2059: "GeogInvFlatteningGeoKey",
  2060: "GeogAzimuthUnitsGeoKey",
  2061: "GeogPrimeMeridianLongGeoKey",
  2062: "GeogTOWGS84GeoKey",
  3072: "ProjectedCSTypeGeoKey",
  3073: "PCSCitationGeoKey",
  3074: "ProjectionGeoKey",
  3075: "ProjCoordTransGeoKey",
  3076: "ProjLinearUnitsGeoKey",
  3077: "ProjLinearUnitSizeGeoKey",
  3078: "ProjStdParallel1GeoKey",
  3079: "ProjStdParallel2GeoKey",
  3080: "ProjNatOriginLongGeoKey",
  3081: "ProjNatOriginLatGeoKey",
  3082: "ProjFalseEastingGeoKey",
  3083: "ProjFalseNorthingGeoKey",
  3084: "ProjFalseOriginLongGeoKey",
  3085: "ProjFalseOriginLatGeoKey",
  3086: "ProjFalseOriginEastingGeoKey",
  3087: "ProjFalseOriginNorthingGeoKey",
  3088: "ProjCenterLongGeoKey",
  3089: "ProjCenterLatGeoKey",
  3090: "ProjCenterEastingGeoKey",
  3091: "ProjCenterNorthingGeoKey",
  3092: "ProjScaleAtNatOriginGeoKey",
  3093: "ProjScaleAtCenterGeoKey",
  3094: "ProjAzimuthAngleGeoKey",
  3095: "ProjStraightVertPoleLongGeoKey",
  3096: "ProjRectifiedGridAngleGeoKey",
  4096: "VerticalCSTypeGeoKey",
  4097: "VerticalCitationGeoKey",
  4098: "VerticalDatumGeoKey",
  4099: "VerticalUnitsGeoKey"
}, Rt = {};
for (const r in ce)
  ce.hasOwnProperty(r) && (Rt[ce[r]] = parseInt(r, 10));
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExtraSamplesValues: Ct,
  LercAddCompression: Ar,
  LercParameters: Pr,
  arrayFields: kt,
  fieldTagNames: oe,
  fieldTagTypes: Pe,
  fieldTags: V,
  fieldTypeNames: ye,
  fieldTypes: B,
  geoKeyNames: ce,
  geoKeys: Rt,
  photometricInterpretations: z
}, Symbol.toStringTag, { value: "Module" }));
function Bt(r, e) {
  const { width: t, height: n } = r, i = new Uint8Array(t * n * 3);
  let s;
  for (let a = 0, o = 0; a < r.length; ++a, o += 3)
    s = 256 - r[a] / e * 256, i[o] = s, i[o + 1] = s, i[o + 2] = s;
  return i;
}
function vt(r, e) {
  const { width: t, height: n } = r, i = new Uint8Array(t * n * 3);
  let s;
  for (let a = 0, o = 0; a < r.length; ++a, o += 3)
    s = r[a] / e * 256, i[o] = s, i[o + 1] = s, i[o + 2] = s;
  return i;
}
function Gt(r, e) {
  const { width: t, height: n } = r, i = new Uint8Array(t * n * 3), s = e.length / 3, a = e.length / 3 * 2;
  for (let o = 0, c = 0; o < r.length; ++o, c += 3) {
    const f = r[o];
    i[c] = e[f] / 65536 * 256, i[c + 1] = e[f + s] / 65536 * 256, i[c + 2] = e[f + a] / 65536 * 256;
  }
  return i;
}
function Ot(r) {
  const { width: e, height: t } = r, n = new Uint8Array(e * t * 3);
  for (let i = 0, s = 0; i < r.length; i += 4, s += 3) {
    const a = r[i], o = r[i + 1], c = r[i + 2], f = r[i + 3];
    n[s] = 255 * ((255 - a) / 256) * ((255 - f) / 256), n[s + 1] = 255 * ((255 - o) / 256) * ((255 - f) / 256), n[s + 2] = 255 * ((255 - c) / 256) * ((255 - f) / 256);
  }
  return n;
}
function Et(r) {
  const { width: e, height: t } = r, n = new Uint8ClampedArray(e * t * 3);
  for (let i = 0, s = 0; i < r.length; i += 3, s += 3) {
    const a = r[i], o = r[i + 1], c = r[i + 2];
    n[s] = a + 1.402 * (c - 128), n[s + 1] = a - 0.34414 * (o - 128) - 0.71414 * (c - 128), n[s + 2] = a + 1.772 * (o - 128);
  }
  return n;
}
const kr = 0.95047, Cr = 1, Rr = 1.08883;
function _t(r) {
  const { width: e, height: t } = r, n = new Uint8Array(e * t * 3);
  for (let i = 0, s = 0; i < r.length; i += 3, s += 3) {
    const a = r[i + 0], o = r[i + 1] << 24 >> 24, c = r[i + 2] << 24 >> 24;
    let f = (a + 16) / 116, g = o / 500 + f, l = f - c / 200, h, d, u;
    g = kr * (g * g * g > 8856e-6 ? g * g * g : (g - 16 / 116) / 7.787), f = Cr * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), l = Rr * (l * l * l > 8856e-6 ? l * l * l : (l - 16 / 116) / 7.787), h = g * 3.2406 + f * -1.5372 + l * -0.4986, d = g * -0.9689 + f * 1.8758 + l * 0.0415, u = g * 0.0557 + f * -0.204 + l * 1.057, h = h > 31308e-7 ? 1.055 * h ** (1 / 2.4) - 0.055 : 12.92 * h, d = d > 31308e-7 ? 1.055 * d ** (1 / 2.4) - 0.055 : 12.92 * d, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : 12.92 * u, n[s] = Math.max(0, Math.min(1, h)) * 255, n[s + 1] = Math.max(0, Math.min(1, d)) * 255, n[s + 2] = Math.max(0, Math.min(1, u)) * 255;
  }
  return n;
}
const Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromBlackIsZero: vt,
  fromCIELab: _t,
  fromCMYK: Ot,
  fromPalette: Gt,
  fromWhiteIsZero: Bt,
  fromYCbCr: Et
}, Symbol.toStringTag, { value: "Module" })), Mt = /* @__PURE__ */ new Map();
function re(r, e) {
  Array.isArray(r) || (r = [r]), r.forEach((t) => Mt.set(t, e));
}
async function Qe(r) {
  const e = Mt.get(r.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${r.Compression}`);
  const t = await e();
  return new t(r);
}
re([void 0, 1], () => import("./raw-DfYrxiyN.js").then((r) => r.default));
re(5, () => import("./lzw-CGZnWqSt.js").then((r) => r.default));
re(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
re(7, () => import("./jpeg-DceQIJNk.js").then((r) => r.default));
re([8, 32946], () => import("./deflate-CFFtNK8q.js").then((r) => r.default));
re(32773, () => import("./packbits-DwwHHdtG.js").then((r) => r.default));
re(
  34887,
  () => import("./lerc-hMTJBmsF.js").then(async (r) => (await r.zstd.init(), r)).then((r) => r.default)
);
re(50001, () => import("./webimage-B_M95m8a.js").then((r) => r.default));
function Ae(r, e, t, n = 1) {
  return new (Object.getPrototypeOf(r)).constructor(e * t * n);
}
function vr(r, e, t, n, i) {
  const s = e / n, a = t / i;
  return r.map((o) => {
    const c = Ae(o, n, i);
    for (let f = 0; f < i; ++f) {
      const g = Math.min(Math.round(a * f), t - 1);
      for (let l = 0; l < n; ++l) {
        const h = Math.min(Math.round(s * l), e - 1), d = o[g * e + h];
        c[f * n + l] = d;
      }
    }
    return c;
  });
}
function fe(r, e, t) {
  return (1 - t) * r + t * e;
}
function Gr(r, e, t, n, i) {
  const s = e / n, a = t / i;
  return r.map((o) => {
    const c = Ae(o, n, i);
    for (let f = 0; f < i; ++f) {
      const g = a * f, l = Math.floor(g), h = Math.min(Math.ceil(g), t - 1);
      for (let d = 0; d < n; ++d) {
        const u = s * d, y = u % 1, w = Math.floor(u), b = Math.min(Math.ceil(u), e - 1), x = o[l * e + w], T = o[l * e + b], P = o[h * e + w], R = o[h * e + b], m = fe(
          fe(x, T, y),
          fe(P, R, y),
          g % 1
        );
        c[f * n + d] = m;
      }
    }
    return c;
  });
}
function Or(r, e, t, n, i, s = "nearest") {
  switch (s.toLowerCase()) {
    case "nearest":
      return vr(r, e, t, n, i);
    case "bilinear":
    case "linear":
      return Gr(r, e, t, n, i);
    default:
      throw new Error(`Unsupported resampling method: '${s}'`);
  }
}
function Er(r, e, t, n, i, s) {
  const a = e / n, o = t / i, c = Ae(r, n, i, s);
  for (let f = 0; f < i; ++f) {
    const g = Math.min(Math.round(o * f), t - 1);
    for (let l = 0; l < n; ++l) {
      const h = Math.min(Math.round(a * l), e - 1);
      for (let d = 0; d < s; ++d) {
        const u = r[g * e * s + h * s + d];
        c[f * n * s + l * s + d] = u;
      }
    }
  }
  return c;
}
function _r(r, e, t, n, i, s) {
  const a = e / n, o = t / i, c = Ae(r, n, i, s);
  for (let f = 0; f < i; ++f) {
    const g = o * f, l = Math.floor(g), h = Math.min(Math.ceil(g), t - 1);
    for (let d = 0; d < n; ++d) {
      const u = a * d, y = u % 1, w = Math.floor(u), b = Math.min(Math.ceil(u), e - 1);
      for (let x = 0; x < s; ++x) {
        const T = r[l * e * s + w * s + x], P = r[l * e * s + b * s + x], R = r[h * e * s + w * s + x], m = r[h * e * s + b * s + x], p = fe(
          fe(T, P, y),
          fe(R, m, y),
          g % 1
        );
        c[f * n * s + d * s + x] = p;
      }
    }
  }
  return c;
}
function Mr(r, e, t, n, i, s, a = "nearest") {
  switch (a.toLowerCase()) {
    case "nearest":
      return Er(
        r,
        e,
        t,
        n,
        i,
        s
      );
    case "bilinear":
    case "linear":
      return _r(
        r,
        e,
        t,
        n,
        i,
        s
      );
    default:
      throw new Error(`Unsupported resampling method: '${a}'`);
  }
}
function Ur(r, e, t) {
  let n = 0;
  for (let i = e; i < t; ++i)
    n += r[i];
  return n;
}
function Ee(r, e, t) {
  switch (r) {
    case 1:
      if (e <= 8)
        return new Uint8Array(t);
      if (e <= 16)
        return new Uint16Array(t);
      if (e <= 32)
        return new Uint32Array(t);
      break;
    case 2:
      if (e === 8)
        return new Int8Array(t);
      if (e === 16)
        return new Int16Array(t);
      if (e === 32)
        return new Int32Array(t);
      break;
    case 3:
      switch (e) {
        case 16:
        case 32:
          return new Float32Array(t);
        case 64:
          return new Float64Array(t);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function Lr(r, e) {
  return (r === 1 || r === 2) && e <= 32 && e % 8 === 0 ? !1 : !(r === 3 && (e === 16 || e === 32 || e === 64));
}
function Nr(r, e, t, n, i, s, a) {
  const o = new DataView(r), c = t === 2 ? a * s : a * s * n, f = t === 2 ? 1 : n, g = Ee(e, i, c), l = parseInt("1".repeat(i), 2);
  if (e === 1) {
    let h;
    t === 1 ? h = n * i : h = i;
    let d = s * h;
    d & 7 && (d = d + 7 & -8);
    for (let u = 0; u < a; ++u) {
      const y = u * d;
      for (let w = 0; w < s; ++w) {
        const b = y + w * f * i;
        for (let x = 0; x < f; ++x) {
          const T = b + x * i, P = (u * s + w) * f + x, R = Math.floor(T / 8), m = T % 8;
          if (m + i <= 8)
            g[P] = o.getUint8(R) >> 8 - i - m & l;
          else if (m + i <= 16)
            g[P] = o.getUint16(R) >> 16 - i - m & l;
          else if (m + i <= 24) {
            const p = o.getUint16(R) << 8 | o.getUint8(R + 2);
            g[P] = p >> 24 - i - m & l;
          } else
            g[P] = o.getUint32(R) >> 32 - i - m & l;
        }
      }
    }
  }
  return g.buffer;
}
class et {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, n, i, s, a) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = n, this.littleEndian = i, this.tiles = s ? {} : null, this.isTiled = !e.StripOffsets;
    const o = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof o > "u" ? 1 : o, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = a;
  }
  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }
  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }
  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }
  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }
  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return typeof this.fileDirectory.SamplesPerPixel < "u" ? this.fileDirectory.SamplesPerPixel : 1;
  }
  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }
  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    return this.isTiled ? this.fileDirectory.TileLength : typeof this.fileDirectory.RowsPerStrip < "u" ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
  }
  getBlockWidth() {
    return this.getTileWidth();
  }
  getBlockHeight(e) {
    return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let e = 0;
    for (let t = 0; t < this.fileDirectory.BitsPerSample.length; ++t)
      e += this.getSampleByteSize(t);
    return e;
  }
  getSampleByteSize(e) {
    if (e >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${e} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
  }
  getReaderForSample(e) {
    const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, n = this.fileDirectory.BitsPerSample[e];
    switch (t) {
      case 1:
        if (n <= 8)
          return DataView.prototype.getUint8;
        if (n <= 16)
          return DataView.prototype.getUint16;
        if (n <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (n <= 8)
          return DataView.prototype.getInt8;
        if (n <= 16)
          return DataView.prototype.getInt16;
        if (n <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (n) {
          case 16:
            return function(i, s) {
              return xt(this, i, s);
            };
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
        }
        break;
    }
    throw Error("Unsupported data format/bitsPerSample");
  }
  getSampleFormat(e = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1;
  }
  getBitsPerSample(e = 0) {
    return this.fileDirectory.BitsPerSample[e];
  }
  getArrayForSample(e, t) {
    const n = this.getSampleFormat(e), i = this.getBitsPerSample(e);
    return Ee(n, i, t);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(e, t, n, i, s) {
    const a = Math.ceil(this.getWidth() / this.getTileWidth()), o = Math.ceil(this.getHeight() / this.getTileHeight());
    let c;
    const { tiles: f } = this;
    this.planarConfiguration === 1 ? c = t * a + e : this.planarConfiguration === 2 && (c = n * a * o + t * a + e);
    let g, l;
    this.isTiled ? (g = this.fileDirectory.TileOffsets[c], l = this.fileDirectory.TileByteCounts[c]) : (g = this.fileDirectory.StripOffsets[c], l = this.fileDirectory.StripByteCounts[c]);
    const h = (await this.source.fetch([{ offset: g, length: l }], s))[0];
    let d;
    return f === null || !f[c] ? (d = (async () => {
      let u = await i.decode(this.fileDirectory, h);
      const y = this.getSampleFormat(), w = this.getBitsPerSample();
      return Lr(y, w) && (u = Nr(
        u,
        y,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        w,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), u;
    })(), f !== null && (f[c] = d)) : d = f[c], { x: e, y: t, sample: n, data: await d };
  }
  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {import("./geotiff").Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @param {number} width the width of window to be read into
   * @param {number} height the height of window to be read into
   * @param {number} resampleMethod the resampling method to be used when interpolating
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise<ReadRasterResult>}
   */
  async _readRaster(e, t, n, i, s, a, o, c, f) {
    const g = this.getTileWidth(), l = this.getTileHeight(), h = this.getWidth(), d = this.getHeight(), u = Math.max(Math.floor(e[0] / g), 0), y = Math.min(
      Math.ceil(e[2] / g),
      Math.ceil(h / g)
    ), w = Math.max(Math.floor(e[1] / l), 0), b = Math.min(
      Math.ceil(e[3] / l),
      Math.ceil(d / l)
    ), x = e[2] - e[0];
    let T = this.getBytesPerPixel();
    const P = [], R = [];
    for (let I = 0; I < t.length; ++I)
      this.planarConfiguration === 1 ? P.push(Ur(this.fileDirectory.BitsPerSample, 0, t[I]) / 8) : P.push(0), R.push(this.getReaderForSample(t[I]));
    const m = [], { littleEndian: p } = this;
    for (let I = w; I < b; ++I)
      for (let C = u; C < y; ++C) {
        let F;
        this.planarConfiguration === 1 && (F = this.getTileOrStrip(C, I, 0, s, f));
        for (let A = 0; A < t.length; ++A) {
          const D = A, k = t[A];
          this.planarConfiguration === 2 && (T = this.getSampleByteSize(k), F = this.getTileOrStrip(C, I, k, s, f));
          const N = F.then((v) => {
            const G = v.data, M = new DataView(G), O = this.getBlockHeight(v.y), L = v.y * l, S = v.x * g, _ = L + O, E = (v.x + 1) * g, U = R[D], Y = Math.min(O, O - (_ - e[3]), d - L), Q = Math.min(g, g - (E - e[2]), h - S);
            for (let ee = Math.max(0, e[1] - L); ee < Y; ++ee)
              for (let pe = Math.max(0, e[0] - S); pe < Q; ++pe) {
                const Ht = (ee * g + pe) * T, rt = U.call(
                  M,
                  Ht + P[D],
                  p
                );
                let Ie;
                i ? (Ie = (ee + L - e[1]) * x * t.length + (pe + S - e[0]) * t.length + D, n[Ie] = rt) : (Ie = (ee + L - e[1]) * x + pe + S - e[0], n[D][Ie] = rt);
              }
          });
          m.push(N);
        }
      }
    if (await Promise.all(m), a && e[2] - e[0] !== a || o && e[3] - e[1] !== o) {
      let I;
      return i ? I = Mr(
        n,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        t.length,
        c
      ) : I = Or(
        n,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        c
      ), I.width = a, I.height = o, I;
    }
    return n.width = a || e[2] - e[0], n.height = o || e[3] - e[1], n;
  }
  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
   */
  async readRasters({
    window: e,
    samples: t = [],
    interleave: n,
    pool: i = null,
    width: s,
    height: a,
    resampleMethod: o,
    fillValue: c,
    signal: f
  } = {}) {
    const g = e || [0, 0, this.getWidth(), this.getHeight()];
    if (g[0] > g[2] || g[1] > g[3])
      throw new Error("Invalid subsets");
    const l = g[2] - g[0], h = g[3] - g[1], d = l * h, u = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let x = 0; x < u; ++x)
        t.push(x);
    else
      for (let x = 0; x < t.length; ++x)
        if (t[x] >= u)
          return Promise.reject(new RangeError(`Invalid sample index '${t[x]}'.`));
    let y;
    if (n) {
      const x = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, T = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      y = Ee(x, T, d * t.length), c && y.fill(c);
    } else {
      y = [];
      for (let x = 0; x < t.length; ++x) {
        const T = this.getArrayForSample(t[x], d);
        Array.isArray(c) && x < c.length ? T.fill(c[x]) : c && !Array.isArray(c) && T.fill(c), y.push(T);
      }
    }
    const w = i || await Qe(this.fileDirectory);
    return await this._readRaster(
      g,
      t,
      y,
      n,
      w,
      s,
      a,
      o,
      f
    );
  }
  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * grayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array<number>} [options.window] the subset to read data from in pixels.
   * @param {boolean} [options.interleave=true] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {import("./geotiff").Pool} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is no the
   *                                 same as the images, resampling will be performed.
   * @param {number} [options.height] The desired height of the output. When the width is no the
   *                                  same as the images, resampling will be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {boolean} [options.enableAlpha=false] Enable reading alpha channel if present.
   * @param {AbortSignal} [options.signal] An AbortSignal that may be signalled if the request is
   *                                       to be aborted
   * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
   */
  async readRGB({
    window: e,
    interleave: t = !0,
    pool: n = null,
    width: i,
    height: s,
    resampleMethod: a,
    enableAlpha: o = !1,
    signal: c
  } = {}) {
    const f = e || [0, 0, this.getWidth(), this.getHeight()];
    if (f[0] > f[2] || f[1] > f[3])
      throw new Error("Invalid subsets");
    const g = this.fileDirectory.PhotometricInterpretation;
    if (g === z.RGB) {
      let b = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Ct.Unspecified && o) {
        b = [];
        for (let x = 0; x < this.fileDirectory.BitsPerSample.length; x += 1)
          b.push(x);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: b,
        pool: n,
        width: i,
        height: s,
        resampleMethod: a,
        signal: c
      });
    }
    let l;
    switch (g) {
      case z.WhiteIsZero:
      case z.BlackIsZero:
      case z.Palette:
        l = [0];
        break;
      case z.CMYK:
        l = [0, 1, 2, 3];
        break;
      case z.YCbCr:
      case z.CIELab:
        l = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const h = {
      window: f,
      interleave: !0,
      samples: l,
      pool: n,
      width: i,
      height: s,
      resampleMethod: a,
      signal: c
    }, { fileDirectory: d } = this, u = await this.readRasters(h), y = 2 ** this.fileDirectory.BitsPerSample[0];
    let w;
    switch (g) {
      case z.WhiteIsZero:
        w = Bt(u, y);
        break;
      case z.BlackIsZero:
        w = vt(u, y);
        break;
      case z.Palette:
        w = Gt(u, d.ColorMap);
        break;
      case z.CMYK:
        w = Ot(u);
        break;
      case z.YCbCr:
        w = Et(u);
        break;
      case z.CIELab:
        w = _t(u);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const b = new Uint8Array(w.length / 3), x = new Uint8Array(w.length / 3), T = new Uint8Array(w.length / 3);
      for (let P = 0, R = 0; P < w.length; P += 3, ++R)
        b[R] = w[P], x[R] = w[P + 1], T[R] = w[P + 2];
      w = [b, x, T];
    }
    return w.width = u.width, w.height = u.height, w;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const e = [];
    for (let t = 0; t < this.fileDirectory.ModelTiepoint.length; t += 6)
      e.push({
        i: this.fileDirectory.ModelTiepoint[t],
        j: this.fileDirectory.ModelTiepoint[t + 1],
        k: this.fileDirectory.ModelTiepoint[t + 2],
        x: this.fileDirectory.ModelTiepoint[t + 3],
        y: this.fileDirectory.ModelTiepoint[t + 4],
        z: this.fileDirectory.ModelTiepoint[t + 5]
      });
    return e;
  }
  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(e = null) {
    const t = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const n = this.fileDirectory.GDAL_METADATA;
    let i = Fr(n, "Item");
    e === null ? i = i.filter((s) => ve(s, "sample") === void 0) : i = i.filter((s) => Number(ve(s, "sample")) === e);
    for (let s = 0; s < i.length; ++s) {
      const a = i[s];
      t[ve(a, "name")] = a.inner;
    }
    return t;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA)
      return null;
    const e = this.fileDirectory.GDAL_NODATA;
    return Number(e.substring(0, e.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const e = this.fileDirectory.ModelTiepoint, t = this.fileDirectory.ModelTransformation;
    if (e && e.length === 6)
      return [
        e[3],
        e[4],
        e[5]
      ];
    if (t)
      return [
        t[3],
        t[7],
        t[11]
      ];
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array<number>} The resolution as a vector
   */
  getResolution(e = null) {
    const t = this.fileDirectory.ModelPixelScale, n = this.fileDirectory.ModelTransformation;
    if (t)
      return [
        t[0],
        -t[1],
        t[2]
      ];
    if (n)
      return n[1] === 0 && n[4] === 0 ? [
        n[0],
        -n[5],
        n[10]
      ] : [
        Math.sqrt(n[0] * n[0] + n[4] * n[4]),
        -Math.sqrt(n[1] * n[1] + n[5] * n[5]),
        n[10]
      ];
    if (e) {
      const [i, s, a] = e.getResolution();
      return [
        i * e.getWidth() / this.getWidth(),
        s * e.getHeight() / this.getHeight(),
        a * e.getWidth() / this.getWidth()
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }
  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @param {boolean} [tilegrid=false] If true return extent for a tilegrid
   *                                   without adjustment for ModelTransformation.
   * @returns {Array<number>} The bounding box
   */
  getBoundingBox(e = !1) {
    const t = this.getHeight(), n = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [i, s, a, o, c, f, g, l] = this.fileDirectory.ModelTransformation, d = [
        [0, 0],
        [0, t],
        [n, 0],
        [n, t]
      ].map(([w, b]) => [
        o + i * w + s * b,
        l + c * w + f * b
      ]), u = d.map((w) => w[0]), y = d.map((w) => w[1]);
      return [
        Math.min(...u),
        Math.min(...y),
        Math.max(...u),
        Math.max(...y)
      ];
    } else {
      const i = this.getOrigin(), s = this.getResolution(), a = i[0], o = i[1], c = a + s[0] * n, f = o + s[1] * t;
      return [
        Math.min(a, c),
        Math.min(o, f),
        Math.max(a, c),
        Math.max(o, f)
      ];
    }
  }
}
class jr {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const n = this.getUint32(e, t), i = this.getUint32(e + 4, t);
    let s;
    if (t) {
      if (s = n + 2 ** 32 * i, !Number.isSafeInteger(s))
        throw new Error(
          `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return s;
    }
    if (s = 2 ** 32 * n + i, !Number.isSafeInteger(s))
      throw new Error(
        `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return s;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let n = 0;
    const i = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let s = !0;
    for (let a = 0; a < 8; a++) {
      let o = this._dataView.getUint8(e + (t ? a : 7 - a));
      i && (s ? o !== 0 && (o = ~(o - 1) & 255, s = !1) : o = ~o & 255), n += o * 256 ** a;
    }
    return i && (n = -n), n;
  }
  getUint8(e, t) {
    return this._dataView.getUint8(e, t);
  }
  getInt8(e, t) {
    return this._dataView.getInt8(e, t);
  }
  getUint16(e, t) {
    return this._dataView.getUint16(e, t);
  }
  getInt16(e, t) {
    return this._dataView.getInt16(e, t);
  }
  getUint32(e, t) {
    return this._dataView.getUint32(e, t);
  }
  getInt32(e, t) {
    return this._dataView.getInt32(e, t);
  }
  getFloat16(e, t) {
    return xt(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class zr {
  constructor(e, t, n, i) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = n, this._bigTiff = i;
  }
  get sliceOffset() {
    return this._sliceOffset;
  }
  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }
  get littleEndian() {
    return this._littleEndian;
  }
  get bigTiff() {
    return this._bigTiff;
  }
  get buffer() {
    return this._dataView.buffer;
  }
  covers(e, t) {
    return this.sliceOffset <= e && this.sliceTop >= e + t;
  }
  readUint8(e) {
    return this._dataView.getUint8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(e) {
    return this._dataView.getInt8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(e) {
    return this._dataView.getUint16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(e) {
    return this._dataView.getInt16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(e) {
    return this._dataView.getUint32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(e) {
    return this._dataView.getInt32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(e) {
    return this._dataView.getFloat32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(e) {
    return this._dataView.getFloat64(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(e) {
    const t = this.readUint32(e), n = this.readUint32(e + 4);
    let i;
    if (this._littleEndian) {
      if (i = t + 2 ** 32 * n, !Number.isSafeInteger(i))
        throw new Error(
          `${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return i;
    }
    if (i = 2 ** 32 * t + n, !Number.isSafeInteger(i))
      throw new Error(
        `${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return i;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const n = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let i = !0;
    for (let s = 0; s < 8; s++) {
      let a = this._dataView.getUint8(
        e + (this._littleEndian ? s : 7 - s)
      );
      n && (i ? a !== 0 && (a = ~(a - 1) & 255, i = !1) : a = ~a & 255), t += a * 256 ** s;
    }
    return n && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
const Kr = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class Ut {
  /**
   * @constructor
   * @param {Number} [size] The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   * @param {function(): Worker} [createWorker] A function that creates the decoder worker.
   * Defaults to a worker with all decoders that ship with geotiff.js. The `createWorker()`
   * function is expected to return a `Worker` compatible with Web Workers. For code that
   * runs in Node, [web-worker](https://www.npmjs.com/package/web-worker) is a good choice.
   *
   * A worker that uses a custom lzw decoder would look like this `my-custom-worker.js` file:
   * ```js
   * import { addDecoder, getDecoder } from 'geotiff';
   * addDecoder(5, () => import ('./my-custom-lzw').then((m) => m.default));
   * self.addEventListener('message', async (e) => {
   *   const { id, fileDirectory, buffer } = e.data;
   *   const decoder = await getDecoder(fileDirectory);
   *   const decoded = await decoder.decode(fileDirectory, buffer);
   *   self.postMessage({ decoded, id }, [decoded]);
   * });
   * ```
   * The way the above code is built into a worker by the `createWorker()` function
   * depends on the used bundler. For most bundlers, something like this will work:
   * ```js
   * function createWorker() {
   *   return new Worker(new URL('./my-custom-worker.js', import.meta.url));
   * }
   * ```
   */
  constructor(e = Kr, t) {
    this.workers = null, this._awaitingDecoder = null, this.size = e, this.messageId = 0, e && (this._awaitingDecoder = t ? Promise.resolve(t) : new Promise((n) => {
      import("./decoder-DJlmx386.js").then((i) => {
        n(i.create);
      });
    }), this._awaitingDecoder.then((n) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let i = 0; i < e; i++)
        this.workers.push({ worker: n(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(e, t) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? Qe(e).then((n) => n.decode(e, t)) : new Promise((n) => {
      const i = this.workers.find((o) => o.idle) || this.workers[Math.floor(Math.random() * this.size)];
      i.idle = !1;
      const s = this.messageId++, a = (o) => {
        o.data.id === s && (i.idle = !0, n(o.data.decoded), i.worker.removeEventListener("message", a));
      };
      i.worker.addEventListener("message", a), i.worker.postMessage({ fileDirectory: e, buffer: t, id: s }, [t]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((e) => {
      e.worker.terminate();
    }), this.workers = null);
  }
}
const st = `\r
\r
`;
function Lt(r) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(r);
  const e = {};
  for (const [t, n] of r)
    e[t.toLowerCase()] = n;
  return e;
}
function Hr(r) {
  const e = r.split(`\r
`).map((t) => {
    const n = t.split(":").map((i) => i.trim());
    return n[0] = n[0].toLowerCase(), n;
  });
  return Lt(e);
}
function qr(r) {
  const [e, ...t] = r.split(";").map((i) => i.trim()), n = t.map((i) => i.split("="));
  return { type: e, params: Lt(n) };
}
function _e(r) {
  let e, t, n;
  return r && ([, e, t, n] = r.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), n = parseInt(n, 10)), { start: e, end: t, total: n };
}
function Vr(r, e) {
  let t = null;
  const n = new TextDecoder("ascii"), i = [], s = `--${e}`, a = `${s}--`;
  for (let o = 0; o < 10; ++o)
    n.decode(
      new Uint8Array(r, o, s.length)
    ) === s && (t = o);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < r.byteLength; ) {
    const o = n.decode(
      new Uint8Array(
        r,
        t,
        Math.min(s.length + 1024, r.byteLength - t)
      )
    );
    if (o.length === 0 || o.startsWith(a))
      break;
    if (!o.startsWith(s))
      throw new Error("Part does not start with boundary");
    const c = o.substr(s.length + 2);
    if (c.length === 0)
      break;
    const f = c.indexOf(st), g = Hr(c.substr(0, f)), { start: l, end: h, total: d } = _e(g["content-range"]), u = t + s.length + f + st.length, y = parseInt(h, 10) + 1 - parseInt(l, 10);
    i.push({
      headers: g,
      data: r.slice(u, u + y),
      offset: l,
      length: y,
      fileSize: d
    }), t = u + y + 4;
  }
  return i;
}
class xe {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, t = void 0) {
    return Promise.all(
      e.map((n) => this.fetchSlice(n, t))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(e) {
    throw new Error(`fetching of slice ${e} not possible, not implemented`);
  }
  /**
   * Returns the filesize if already determined and null otherwise
   */
  get fileSize() {
    return null;
  }
  async close() {
  }
}
class Wr extends Map {
  constructor(e = {}) {
    if (super(), !(e.maxSize && e.maxSize > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    if (typeof e.maxAge == "number" && e.maxAge === 0)
      throw new TypeError("`maxAge` must be a number greater than 0");
    this.maxSize = e.maxSize, this.maxAge = e.maxAge || Number.POSITIVE_INFINITY, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
  }
  // TODO: Use private class methods when targeting Node.js 16.
  _emitEvictions(e) {
    if (typeof this.onEviction == "function")
      for (const [t, n] of e)
        this.onEviction(t, n.value);
  }
  _deleteIfExpired(e, t) {
    return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : !1;
  }
  _getOrDeleteIfExpired(e, t) {
    if (this._deleteIfExpired(e, t) === !1)
      return t.value;
  }
  _getItemValue(e, t) {
    return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
  }
  _peek(e, t) {
    const n = t.get(e);
    return this._getItemValue(e, n);
  }
  _set(e, t) {
    this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
  _moveToRecent(e, t) {
    this.oldCache.delete(e), this._set(e, t);
  }
  *_entriesAscending() {
    for (const e of this.oldCache) {
      const [t, n] = e;
      this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield e);
    }
    for (const e of this.cache) {
      const [t, n] = e;
      this._deleteIfExpired(t, n) === !1 && (yield e);
    }
  }
  get(e) {
    if (this.cache.has(e)) {
      const t = this.cache.get(e);
      return this._getItemValue(e, t);
    }
    if (this.oldCache.has(e)) {
      const t = this.oldCache.get(e);
      if (this._deleteIfExpired(e, t) === !1)
        return this._moveToRecent(e, t), t.value;
    }
  }
  set(e, t, { maxAge: n = this.maxAge } = {}) {
    const i = typeof n == "number" && n !== Number.POSITIVE_INFINITY ? Date.now() + n : void 0;
    return this.cache.has(e) ? this.cache.set(e, {
      value: t,
      expiry: i
    }) : this._set(e, { value: t, expiry: i }), this;
  }
  has(e) {
    return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : !1;
  }
  peek(e) {
    if (this.cache.has(e))
      return this._peek(e, this.cache);
    if (this.oldCache.has(e))
      return this._peek(e, this.oldCache);
  }
  delete(e) {
    const t = this.cache.delete(e);
    return t && this._size--, this.oldCache.delete(e) || t;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), this._size = 0;
  }
  resize(e) {
    if (!(e && e > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    const t = [...this._entriesAscending()], n = t.length - e;
    n < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (n > 0 && this._emitEvictions(t.slice(0, n)), this.oldCache = new Map(t.slice(n)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
  }
  *keys() {
    for (const [e] of this)
      yield e;
  }
  *values() {
    for (const [, e] of this)
      yield e;
  }
  *[Symbol.iterator]() {
    for (const e of this.cache) {
      const [t, n] = e;
      this._deleteIfExpired(t, n) === !1 && (yield [t, n.value]);
    }
    for (const e of this.oldCache) {
      const [t, n] = e;
      this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield [t, n.value]);
    }
  }
  *entriesDescending() {
    let e = [...this.cache];
    for (let t = e.length - 1; t >= 0; --t) {
      const n = e[t], [i, s] = n;
      this._deleteIfExpired(i, s) === !1 && (yield [i, s.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const n = e[t], [i, s] = n;
      this.cache.has(i) || this._deleteIfExpired(i, s) === !1 && (yield [i, s.value]);
    }
  }
  *entriesAscending() {
    for (const [e, t] of this._entriesAscending())
      yield [e, t.value];
  }
  get size() {
    if (!this._size)
      return this.oldCache.size;
    let e = 0;
    for (const t of this.oldCache.keys())
      this.cache.has(t) || e++;
    return Math.min(this._size + e, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(e, t = this) {
    for (const [n, i] of this.entriesAscending())
      e.call(t, i, n, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
function Nt(r, e) {
  for (const t in e)
    e.hasOwnProperty(t) && (r[t] = e[t]);
}
function jt(r, e) {
  return r.length < e.length ? !1 : r.substr(r.length - e.length) === e;
}
function $r(r, e) {
  const { length: t } = r;
  for (let n = 0; n < t; n++)
    e(r[n], n);
}
function tt(r) {
  const e = {};
  for (const t in r)
    if (r.hasOwnProperty(t)) {
      const n = r[t];
      e[n] = t;
    }
  return e;
}
function q(r, e) {
  const t = [];
  for (let n = 0; n < r; n++)
    t.push(e(n));
  return t;
}
async function Yr(r) {
  return new Promise((e) => setTimeout(e, r));
}
function Xr(r, e) {
  const t = Array.isArray(r) ? r : Array.from(r), n = Array.isArray(e) ? e : Array.from(e);
  return t.map((i, s) => [i, n[s]]);
}
class ae extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, ae), this.name = "AbortError";
  }
}
class Zr extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Jr = Zr;
class Qr {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(e, t, n = null) {
    this.offset = e, this.length = t, this.data = n;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
}
class ot {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(e, t, n) {
    this.offset = e, this.length = t, this.blockIds = n;
  }
}
class en extends xe {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(e, { blockSize: t = 65536, cacheSize: n = 100 } = {}) {
    super(), this.source = e, this.blockSize = t, this.blockCache = new Wr({
      maxSize: n,
      onEviction: (i, s) => {
        this.evictedBlocks.set(i, s);
      }
    }), this.evictedBlocks = /* @__PURE__ */ new Map(), this.blockRequests = /* @__PURE__ */ new Map(), this.blockIdsToFetch = /* @__PURE__ */ new Set(), this.abortedBlockIds = /* @__PURE__ */ new Set();
  }
  get fileSize() {
    return this.source.fileSize;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   */
  async fetch(e, t) {
    const n = [], i = [], s = [];
    this.evictedBlocks.clear();
    for (const { offset: h, length: d } of e) {
      let u = h + d;
      const { fileSize: y } = this;
      y !== null && (u = Math.min(u, y));
      const w = Math.floor(h / this.blockSize) * this.blockSize;
      for (let b = w; b < u; b += this.blockSize) {
        const x = Math.floor(b / this.blockSize);
        !this.blockCache.has(x) && !this.blockRequests.has(x) && (this.blockIdsToFetch.add(x), i.push(x)), this.blockRequests.has(x) && n.push(this.blockRequests.get(x)), s.push(x);
      }
    }
    await Yr(), this.fetchBlocks(t);
    const a = [];
    for (const h of i)
      this.blockRequests.has(h) && a.push(this.blockRequests.get(h));
    await Promise.allSettled(n), await Promise.allSettled(a);
    const o = [], c = s.filter((h) => this.abortedBlockIds.has(h) || !this.blockCache.has(h));
    if (c.forEach((h) => this.blockIdsToFetch.add(h)), c.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const h of c) {
        const d = this.blockRequests.get(h);
        if (!d)
          throw new Error(`Block ${h} is not in the block requests`);
        o.push(d);
      }
      await Promise.allSettled(o);
    }
    if (t && t.aborted)
      throw new ae("Request was aborted");
    const f = s.map((h) => this.blockCache.get(h) || this.evictedBlocks.get(h)), g = f.filter((h) => !h);
    if (g.length)
      throw new Jr(g, "Request failed");
    const l = new Map(Xr(s, f));
    return this.readSliceData(e, l);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), n = this.source.fetch(t, e);
      for (let i = 0; i < t.length; ++i) {
        const s = t[i];
        for (const a of s.blockIds)
          this.blockRequests.set(a, (async () => {
            try {
              const o = (await n)[i], c = a * this.blockSize, f = c - o.offset, g = Math.min(f + this.blockSize, o.data.byteLength), l = o.data.slice(f, g), h = new Qr(
                c,
                l.byteLength,
                l,
                a
              );
              this.blockCache.set(a, h), this.abortedBlockIds.delete(a);
            } catch (o) {
              if (o.name === "AbortError")
                o.signal = e, this.blockCache.delete(a), this.abortedBlockIds.add(a);
              else
                throw o;
            } finally {
              this.blockRequests.delete(a);
            }
          })());
      }
      this.blockIdsToFetch.clear();
    }
  }
  /**
   *
   * @param {Set} blockIds
   * @returns {BlockGroup[]}
   */
  groupBlocks(e) {
    const t = Array.from(e).sort((a, o) => a - o);
    if (t.length === 0)
      return [];
    let n = [], i = null;
    const s = [];
    for (const a of t)
      i === null || i + 1 === a ? (n.push(a), i = a) : (s.push(new ot(
        n[0] * this.blockSize,
        n.length * this.blockSize,
        n
      )), n = [a], i = a);
    return s.push(new ot(
      n[0] * this.blockSize,
      n.length * this.blockSize,
      n
    )), s;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(e, t) {
    return e.map((n) => {
      let i = n.offset + n.length;
      this.fileSize !== null && (i = Math.min(this.fileSize, i));
      const s = Math.floor(n.offset / this.blockSize), a = Math.floor(i / this.blockSize), o = new ArrayBuffer(n.length), c = new Uint8Array(o);
      for (let f = s; f <= a; ++f) {
        const g = t.get(f), l = g.offset - n.offset, h = g.top - i;
        let d = 0, u = 0, y;
        l < 0 ? d = -l : l > 0 && (u = l), h < 0 ? y = g.length - d : y = i - g.offset - d;
        const w = new Uint8Array(g.data, d, y);
        c.set(w, u);
      }
      return o;
    });
  }
}
class De {
  /**
   * Returns whether the response has an ok'ish status code
   */
  get ok() {
    return this.status >= 200 && this.status <= 299;
  }
  /**
   * Returns the status code of the response
   */
  get status() {
    throw new Error("not implemented");
  }
  /**
   * Returns the value of the specified header
   * @param {string} headerName the header name
   * @returns {string} the header value
   */
  getHeader(e) {
    throw new Error("not implemented");
  }
  /**
   * @returns {ArrayBuffer} the response data of the request
   */
  async getData() {
    throw new Error("not implemented");
  }
}
class ke {
  constructor(e) {
    this.url = e;
  }
  /**
   * Send a request with the options
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<BaseResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    throw new Error("request is not implemented");
  }
}
class tn extends De {
  /**
   * BaseResponse facade for fetch API Response
   * @param {Response} response
   */
  constructor(e) {
    super(), this.response = e;
  }
  get status() {
    return this.response.status;
  }
  getHeader(e) {
    return this.response.headers.get(e);
  }
  async getData() {
    return this.response.arrayBuffer ? await this.response.arrayBuffer() : (await this.response.buffer()).buffer;
  }
}
class rn extends ke {
  constructor(e, t) {
    super(e), this.credentials = t;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    const n = await fetch(this.url, {
      headers: e,
      credentials: this.credentials,
      signal: t
    });
    return new tn(n);
  }
}
class nn extends De {
  /**
   * BaseResponse facade for XMLHttpRequest
   * @param {XMLHttpRequest} xhr
   * @param {ArrayBuffer} data
   */
  constructor(e, t) {
    super(), this.xhr = e, this.data = t;
  }
  get status() {
    return this.xhr.status;
  }
  getHeader(e) {
    return this.xhr.getResponseHeader(e);
  }
  async getData() {
    return this.data;
  }
}
class sn extends ke {
  constructRequest(e, t) {
    return new Promise((n, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", this.url), s.responseType = "arraybuffer";
      for (const [a, o] of Object.entries(e))
        s.setRequestHeader(a, o);
      s.onload = () => {
        const a = s.response;
        n(new nn(s, a));
      }, s.onerror = i, s.onabort = () => i(new ae("Request aborted")), s.send(), t && (t.aborted && s.abort(), t.addEventListener("abort", () => s.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const he = {};
class on extends De {
  /**
   * BaseResponse facade for node HTTP/HTTPS API Response
   * @param {http.ServerResponse} response
   */
  constructor(e, t) {
    super(), this.response = e, this.dataPromise = t;
  }
  get status() {
    return this.response.statusCode;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  async getData() {
    return await this.dataPromise;
  }
}
class an extends ke {
  constructor(e) {
    super(e), this.parsedUrl = he.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", he);
  }
  constructRequest(e, t) {
    return new Promise((n, i) => {
      const s = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (a) => {
          const o = new Promise((c) => {
            const f = [];
            a.on("data", (g) => {
              f.push(g);
            }), a.on("end", () => {
              const g = Buffer.concat(f).buffer;
              c(g);
            }), a.on("error", i);
          });
          n(new on(a, o));
        }
      );
      s.on("error", i), t && (t.aborted && s.destroy(new ae("Request aborted")), t.addEventListener("abort", () => s.destroy(new ae("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Ce extends xe {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(e, t, n, i) {
    super(), this.client = e, this.headers = t, this.maxRanges = n, this.allowFullFile = i, this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(e, t) {
    return this.maxRanges >= e.length ? this.fetchSlices(e, t) : (this.maxRanges > 0 && e.length > 1, Promise.all(
      e.map((n) => this.fetchSlice(n, t))
    ));
  }
  async fetchSlices(e, t) {
    const n = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${e.map(({ offset: i, length: s }) => `${i}-${i + s}`).join(",")}`
      },
      signal: t
    });
    if (n.ok)
      if (n.status === 206) {
        const { type: i, params: s } = qr(n.getHeader("content-type"));
        if (i === "multipart/byteranges") {
          const l = Vr(await n.getData(), s.boundary);
          return this._fileSize = l[0].fileSize || null, l;
        }
        const a = await n.getData(), { start: o, end: c, total: f } = _e(n.getHeader("content-range"));
        this._fileSize = f || null;
        const g = [{
          data: a,
          offset: o,
          length: c - o
        }];
        if (e.length > 1) {
          const l = await Promise.all(e.slice(1).map((h) => this.fetchSlice(h, t)));
          return g.concat(l);
        }
        return g;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const i = await n.getData();
        return this._fileSize = i.byteLength, [{
          data: i,
          offset: 0,
          length: i.byteLength
        }];
      }
    else throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: n, length: i } = e, s = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${n}-${n + i}`
      },
      signal: t
    });
    if (s.ok)
      if (s.status === 206) {
        const a = await s.getData(), { total: o } = _e(s.getHeader("content-range"));
        return this._fileSize = o || null, {
          data: a,
          offset: n,
          length: i
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const a = await s.getData();
        return this._fileSize = a.byteLength, {
          data: a,
          offset: 0,
          length: a.byteLength
        };
      }
    else throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function Re(r, { blockSize: e, cacheSize: t }) {
  return e === null ? r : new en(r, { blockSize: e, cacheSize: t });
}
function ln(r, { headers: e = {}, credentials: t, maxRanges: n = 0, allowFullFile: i = !1, ...s } = {}) {
  const a = new rn(r, t), o = new Ce(a, e, n, i);
  return Re(o, s);
}
function cn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new sn(r), a = new Ce(s, e, t, n);
  return Re(a, i);
}
function fn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new an(r), a = new Ce(s, e, t, n);
  return Re(a, i);
}
function hn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new Ce(r, e, t, n);
  return Re(s, i);
}
function Me(r, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? ln(r, t) : typeof XMLHttpRequest < "u" ? cn(r, t) : fn(r, t);
}
class un extends xe {
  constructor(e) {
    super(), this.arrayBuffer = e;
  }
  fetchSlice(e, t) {
    if (t && t.aborted)
      throw new ae("Request aborted");
    return this.arrayBuffer.slice(e.offset, e.offset + e.length);
  }
}
function gn(r) {
  return new un(r);
}
class dn extends xe {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((n, i) => {
      const s = this.file.slice(e.offset, e.offset + e.length), a = new FileReader();
      a.onload = (o) => n(o.target.result), a.onerror = i, a.onabort = i, a.readAsArrayBuffer(s), t && t.addEventListener("abort", () => a.abort());
    });
  }
}
function pn(r) {
  return new dn(r);
}
function mn(r) {
  return new Promise((e, t) => {
    he.close(r, (n) => {
      n ? t(n) : e();
    });
  });
}
function yn(r, e, t = void 0) {
  return new Promise((n, i) => {
    he.open(r, e, t, (s, a) => {
      s ? i(s) : n(a);
    });
  });
}
function wn(...r) {
  return new Promise((e, t) => {
    he.read(...r, (n, i, s) => {
      n ? t(n) : e({ bytesRead: i, buffer: s });
    });
  });
}
class bn extends xe {
  constructor(e) {
    super(), this.path = e, this.openRequest = yn(e, "r");
  }
  async fetchSlice(e) {
    const t = await this.openRequest, { buffer: n } = await wn(
      t,
      Buffer.alloc(e.length),
      0,
      e.length,
      e.offset
    );
    return n.buffer;
  }
  async close() {
    const e = await this.openRequest;
    await mn(e);
  }
}
function xn(r) {
  return new bn(r);
}
const In = tt(oe), Tn = tt(ce), J = {};
Nt(J, In);
Nt(J, Tn);
const Sn = tt(ye), Se = 1e3, K = {
  nextZero: (r, e) => {
    let t = e;
    for (; r[t] !== 0; )
      t++;
    return t;
  },
  readUshort: (r, e) => r[e] << 8 | r[e + 1],
  readShort: (r, e) => {
    const t = K.ui8;
    return t[0] = r[e + 1], t[1] = r[e + 0], K.i16[0];
  },
  readInt: (r, e) => {
    const t = K.ui8;
    return t[0] = r[e + 3], t[1] = r[e + 2], t[2] = r[e + 1], t[3] = r[e + 0], K.i32[0];
  },
  readUint: (r, e) => {
    const t = K.ui8;
    return t[0] = r[e + 3], t[1] = r[e + 2], t[2] = r[e + 1], t[3] = r[e + 0], K.ui32[0];
  },
  readASCII: (r, e, t) => t.map((n) => String.fromCharCode(r[e + n])).join(""),
  readFloat: (r, e) => {
    const t = K.ui8;
    return q(4, (n) => {
      t[n] = r[e + 3 - n];
    }), K.fl32[0];
  },
  readDouble: (r, e) => {
    const t = K.ui8;
    return q(8, (n) => {
      t[n] = r[e + 7 - n];
    }), K.fl64[0];
  },
  writeUshort: (r, e, t) => {
    r[e] = t >> 8 & 255, r[e + 1] = t & 255;
  },
  writeUint: (r, e, t) => {
    r[e] = t >> 24 & 255, r[e + 1] = t >> 16 & 255, r[e + 2] = t >> 8 & 255, r[e + 3] = t >> 0 & 255;
  },
  writeASCII: (r, e, t) => {
    q(t.length, (n) => {
      r[e + n] = t.charCodeAt(n);
    });
  },
  ui8: new Uint8Array(8)
};
K.fl64 = new Float64Array(K.ui8.buffer);
K.writeDouble = (r, e, t) => {
  K.fl64[0] = t, q(8, (n) => {
    r[e + n] = K.ui8[7 - n];
  });
};
const Fn = (r, e, t, n) => {
  let i = t;
  const s = Object.keys(n).filter((o) => o != null && o !== "undefined");
  r.writeUshort(e, i, s.length), i += 2;
  let a = i + 12 * s.length + 4;
  for (const o of s) {
    let c = null;
    typeof o == "number" ? c = o : typeof o == "string" && (c = parseInt(o, 10));
    const f = Pe[c], g = Sn[f];
    if (f == null || f === void 0 || typeof f > "u")
      throw new Error(`unknown type of tag: ${c}`);
    let l = n[o];
    if (l === void 0)
      throw new Error(`failed to get value for key ${o}`);
    f === "ASCII" && typeof l == "string" && jt(l, "\0") === !1 && (l += "\0");
    const h = l.length;
    r.writeUshort(e, i, c), i += 2, r.writeUshort(e, i, g), i += 2, r.writeUint(e, i, h), i += 4;
    let d = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][g] * h, u = i;
    d > 4 && (r.writeUint(e, i, a), u = a), f === "ASCII" ? r.writeASCII(e, u, l) : f === "SHORT" ? q(h, (y) => {
      r.writeUshort(e, u + 2 * y, l[y]);
    }) : f === "LONG" ? q(h, (y) => {
      r.writeUint(e, u + 4 * y, l[y]);
    }) : f === "RATIONAL" ? q(h, (y) => {
      r.writeUint(e, u + 8 * y, Math.round(l[y] * 1e4)), r.writeUint(e, u + 8 * y + 4, 1e4);
    }) : f === "DOUBLE" && q(h, (y) => {
      r.writeDouble(e, u + 8 * y, l[y]);
    }), d > 4 && (d += d & 1, a += d), i += 4;
  }
  return [i, a];
}, Pn = (r) => {
  const e = new Uint8Array(Se);
  let t = 4;
  const n = K;
  e[0] = 77, e[1] = 77, e[3] = 42;
  let i = 8;
  if (n.writeUint(e, t, i), t += 4, r.forEach((a, o) => {
    const c = Fn(n, e, i, a);
    i = c[1], o < r.length - 1 && n.writeUint(e, c[0], i);
  }), e.slice)
    return e.slice(0, i).buffer;
  const s = new Uint8Array(i);
  for (let a = 0; a < i; a++)
    s[a] = e[a];
  return s.buffer;
}, An = (r, e, t, n) => {
  if (t == null)
    throw new Error(`you passed into encodeImage a width of type ${t}`);
  if (e == null)
    throw new Error(`you passed into encodeImage a width of type ${e}`);
  const i = {
    256: [e],
    // ImageWidth
    257: [t],
    // ImageLength
    273: [Se],
    // strips offset
    278: [t],
    // RowsPerStrip
    305: "geotiff.js"
    // no array for ASCII(Z)
  };
  if (n)
    for (const f in n)
      n.hasOwnProperty(f) && (i[f] = n[f]);
  const s = new Uint8Array(Pn([i])), a = new Uint8Array(r), o = i[277], c = new Uint8Array(Se + e * t * o);
  return q(s.length, (f) => {
    c[f] = s[f];
  }), $r(a, (f, g) => {
    c[Se + g] = f;
  }), c.buffer;
}, Dn = (r) => {
  const e = {};
  for (const t in r)
    t !== "StripOffsets" && (J[t] || console.error(t, "not in name2code:", Object.keys(J)), e[J[t]] = r[t]);
  return e;
}, kn = (r) => Array.isArray(r) ? r : [r], Cn = [
  ["Compression", 1],
  // no compression
  ["PlanarConfiguration", 1],
  ["ExtraSamples", 0]
];
function Rn(r, e) {
  const t = typeof r[0] == "number";
  let n, i, s, a;
  t ? (n = e.height || e.ImageLength, s = e.width || e.ImageWidth, i = r.length / (n * s), a = r) : (i = r.length, n = r[0].length, s = r[0][0].length, a = [], q(n, (g) => {
    q(s, (l) => {
      q(i, (h) => {
        a.push(r[h][g][l]);
      });
    });
  })), e.ImageLength = n, delete e.height, e.ImageWidth = s, delete e.width, e.BitsPerSample || (e.BitsPerSample = q(i, () => 8)), Cn.forEach((g) => {
    const l = g[0];
    if (!e[l]) {
      const h = g[1];
      e[l] = h;
    }
  }), e.PhotometricInterpretation || (e.PhotometricInterpretation = e.BitsPerSample.length === 3 ? 2 : 1), e.SamplesPerPixel || (e.SamplesPerPixel = [i]), e.StripByteCounts || (e.StripByteCounts = [i * n * s]), e.ModelPixelScale || (e.ModelPixelScale = [360 / s, 180 / n, 0]), e.SampleFormat || (e.SampleFormat = q(i, () => 1)), !e.hasOwnProperty("GeographicTypeGeoKey") && !e.hasOwnProperty("ProjectedCSTypeGeoKey") && (e.GeographicTypeGeoKey = 4326, e.ModelTiepoint = [0, 0, 0, -180, 90, 0], e.GeogCitationGeoKey = "WGS 84", e.GTModelTypeGeoKey = 2);
  const o = Object.keys(e).filter((g) => jt(g, "GeoKey")).sort((g, l) => J[g] - J[l]);
  if (!e.GeoAsciiParams) {
    let g = "";
    o.forEach((l) => {
      const h = Number(J[l]);
      Pe[h] === "ASCII" && (g += `${e[l].toString()}\0`);
    }), g.length > 0 && (e.GeoAsciiParams = g);
  }
  if (!e.GeoKeyDirectory) {
    const l = [1, 1, 0, o.length];
    o.forEach((h) => {
      const d = Number(J[h]);
      l.push(d);
      let u, y, w;
      Pe[d] === "SHORT" ? (u = 1, y = 0, w = e[h]) : h === "GeogCitationGeoKey" ? (u = e.GeoAsciiParams.length, y = Number(J.GeoAsciiParams), w = 0) : console.log(`[geotiff.js] couldn't get TIFFTagLocation for ${h}`), l.push(y), l.push(u), l.push(w);
    }), e.GeoKeyDirectory = l;
  }
  for (const g of o)
    e.hasOwnProperty(g) && delete e[g];
  [
    "Compression",
    "ExtraSamples",
    "GeographicTypeGeoKey",
    "GTModelTypeGeoKey",
    "GTRasterTypeGeoKey",
    "ImageLength",
    // synonym of ImageHeight
    "ImageWidth",
    "Orientation",
    "PhotometricInterpretation",
    "ProjectedCSTypeGeoKey",
    "PlanarConfiguration",
    "ResolutionUnit",
    "SamplesPerPixel",
    "XPosition",
    "YPosition",
    "RowsPerStrip"
  ].forEach((g) => {
    e[g] && (e[g] = kn(e[g]));
  });
  const c = Dn(e);
  return An(a, s, n, c);
}
class Bn {
  log() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
  time() {
  }
  timeEnd() {
  }
}
function vn(r = new Bn()) {
}
function Gn(r, e) {
  let t = r.length - e, n = 0;
  do {
    for (let i = e; i > 0; i--)
      r[n + e] += r[n], n++;
    t -= e;
  } while (t > 0);
}
function On(r, e, t) {
  let n = 0, i = r.length;
  const s = i / t;
  for (; i > e; ) {
    for (let o = e; o > 0; --o)
      r[n + e] += r[n], ++n;
    i -= e;
  }
  const a = r.slice();
  for (let o = 0; o < s; ++o)
    for (let c = 0; c < t; ++c)
      r[t * o + c] = a[(t - c - 1) * s + o];
}
function En(r, e, t, n, i, s) {
  if (e === 1)
    return r;
  for (let c = 0; c < i.length; ++c) {
    if (i[c] % 8 !== 0)
      throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");
    if (i[c] !== i[0])
      throw new Error("When decoding with predictor, all samples must have the same size.");
  }
  const a = i[0] / 8, o = s === 2 ? 1 : i.length;
  for (let c = 0; c < n && !(c * o * t * a >= r.byteLength); ++c) {
    let f;
    if (e === 2) {
      switch (i[0]) {
        case 8:
          f = new Uint8Array(
            r,
            c * o * t * a,
            o * t * a
          );
          break;
        case 16:
          f = new Uint16Array(
            r,
            c * o * t * a,
            o * t * a / 2
          );
          break;
        case 32:
          f = new Uint32Array(
            r,
            c * o * t * a,
            o * t * a / 4
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`);
      }
      Gn(f, o);
    } else e === 3 && (f = new Uint8Array(
      r,
      c * o * t * a,
      o * t * a
    ), On(f, o, a));
  }
  return r;
}
class _n {
  async decode(e, t) {
    const n = await this.decodeBlock(t), i = e.Predictor || 1;
    if (i !== 1) {
      const s = !e.StripOffsets, a = s ? e.TileWidth : e.ImageWidth, o = s ? e.TileLength : e.RowsPerStrip || e.ImageLength;
      return En(
        n,
        i,
        a,
        o,
        e.BitsPerSample,
        e.PlanarConfiguration
      );
    }
    return n;
  }
}
function Ue(r) {
  switch (r) {
    case B.BYTE:
    case B.ASCII:
    case B.SBYTE:
    case B.UNDEFINED:
      return 1;
    case B.SHORT:
    case B.SSHORT:
      return 2;
    case B.LONG:
    case B.SLONG:
    case B.FLOAT:
    case B.IFD:
      return 4;
    case B.RATIONAL:
    case B.SRATIONAL:
    case B.DOUBLE:
    case B.LONG8:
    case B.SLONG8:
    case B.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${r}`);
  }
}
function Mn(r) {
  const e = r.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let n = 4; n <= e[3] * 4; n += 4) {
    const i = ce[e[n]], s = e[n + 1] ? oe[e[n + 1]] : null, a = e[n + 2], o = e[n + 3];
    let c = null;
    if (!s)
      c = o;
    else {
      if (c = r[s], typeof c > "u" || c === null)
        throw new Error(`Could not get value of geoKey '${i}'.`);
      typeof c == "string" ? c = c.substring(o, o + a - 1) : c.subarray && (c = c.subarray(o, o + a), a === 1 && (c = c[0]));
    }
    t[i] = c;
  }
  return t;
}
function le(r, e, t, n) {
  let i = null, s = null;
  const a = Ue(e);
  switch (e) {
    case B.BYTE:
    case B.ASCII:
    case B.UNDEFINED:
      i = new Uint8Array(t), s = r.readUint8;
      break;
    case B.SBYTE:
      i = new Int8Array(t), s = r.readInt8;
      break;
    case B.SHORT:
      i = new Uint16Array(t), s = r.readUint16;
      break;
    case B.SSHORT:
      i = new Int16Array(t), s = r.readInt16;
      break;
    case B.LONG:
    case B.IFD:
      i = new Uint32Array(t), s = r.readUint32;
      break;
    case B.SLONG:
      i = new Int32Array(t), s = r.readInt32;
      break;
    case B.LONG8:
    case B.IFD8:
      i = new Array(t), s = r.readUint64;
      break;
    case B.SLONG8:
      i = new Array(t), s = r.readInt64;
      break;
    case B.RATIONAL:
      i = new Uint32Array(t * 2), s = r.readUint32;
      break;
    case B.SRATIONAL:
      i = new Int32Array(t * 2), s = r.readInt32;
      break;
    case B.FLOAT:
      i = new Float32Array(t), s = r.readFloat32;
      break;
    case B.DOUBLE:
      i = new Float64Array(t), s = r.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === B.RATIONAL || e === B.SRATIONAL)
    for (let o = 0; o < t; o += 2)
      i[o] = s.call(
        r,
        n + o * a
      ), i[o + 1] = s.call(
        r,
        n + (o * a + 4)
      );
  else
    for (let o = 0; o < t; ++o)
      i[o] = s.call(
        r,
        n + o * a
      );
  return e === B.ASCII ? new TextDecoder("utf-8").decode(i) : i;
}
class Un {
  constructor(e, t, n) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = n;
  }
}
class Te extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class zt {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {import('./geotiffimage').ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
   */
  async readRasters(e = {}) {
    const { window: t, width: n, height: i } = e;
    let { resX: s, resY: a, bbox: o } = e;
    const c = await this.getImage();
    let f = c;
    const g = await this.getImageCount(), l = c.getBoundingBox();
    if (t && o)
      throw new Error('Both "bbox" and "window" passed.');
    if (n || i) {
      if (t) {
        const [u, y] = c.getOrigin(), [w, b] = c.getResolution();
        o = [
          u + t[0] * w,
          y + t[1] * b,
          u + t[2] * w,
          y + t[3] * b
        ];
      }
      const d = o || l;
      if (n) {
        if (s)
          throw new Error("Both width and resX passed");
        s = (d[2] - d[0]) / n;
      }
      if (i) {
        if (a)
          throw new Error("Both width and resY passed");
        a = (d[3] - d[1]) / i;
      }
    }
    if (s || a) {
      const d = [];
      for (let u = 0; u < g; ++u) {
        const y = await this.getImage(u), { SubfileType: w, NewSubfileType: b } = y.fileDirectory;
        (u === 0 || w === 2 || b & 1) && d.push(y);
      }
      d.sort((u, y) => u.getWidth() - y.getWidth());
      for (let u = 0; u < d.length; ++u) {
        const y = d[u], w = (l[2] - l[0]) / y.getWidth(), b = (l[3] - l[1]) / y.getHeight();
        if (f = y, s && s > w || a && a > b)
          break;
      }
    }
    let h = t;
    if (o) {
      const [d, u] = c.getOrigin(), [y, w] = f.getResolution(c);
      h = [
        Math.round((o[0] - d) / y),
        Math.round((o[1] - u) / w),
        Math.round((o[2] - d) / y),
        Math.round((o[3] - u) / w)
      ], h = [
        Math.min(h[0], h[2]),
        Math.min(h[1], h[3]),
        Math.max(h[0], h[2]),
        Math.max(h[1], h[3])
      ];
    }
    return f.readRasters({ ...e, window: h });
  }
}
class W extends zt {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, n, i, s = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = n, this.firstIFDOffset = i, this.cache = s.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const n = this.bigTiff ? 4048 : 1024;
    return new zr(
      (await this.source.fetch([{
        offset: e,
        length: typeof t < "u" ? t : n
      }]))[0],
      e,
      this.littleEndian,
      this.bigTiff
    );
  }
  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {Promise<ImageFileDirectory>} the parsed IFD
   */
  async parseFileDirectoryAt(e) {
    const t = this.bigTiff ? 20 : 12, n = this.bigTiff ? 8 : 2;
    let i = await this.getSlice(e);
    const s = this.bigTiff ? i.readUint64(e) : i.readUint16(e), a = s * t + (this.bigTiff ? 16 : 6);
    i.covers(e, a) || (i = await this.getSlice(e, a));
    const o = {};
    let c = e + (this.bigTiff ? 8 : 2);
    for (let l = 0; l < s; c += t, ++l) {
      const h = i.readUint16(c), d = i.readUint16(c + 2), u = this.bigTiff ? i.readUint64(c + 4) : i.readUint32(c + 4);
      let y, w;
      const b = Ue(d), x = c + (this.bigTiff ? 12 : 8);
      if (b * u <= (this.bigTiff ? 8 : 4))
        y = le(i, d, u, x);
      else {
        const T = i.readOffset(x), P = Ue(d) * u;
        if (i.covers(T, P))
          y = le(i, d, u, T);
        else {
          const R = await this.getSlice(T, P);
          y = le(R, d, u, T);
        }
      }
      u === 1 && kt.indexOf(h) === -1 && !(d === B.RATIONAL || d === B.SRATIONAL) ? w = y[0] : w = y, o[oe[h]] = w;
    }
    const f = Mn(o), g = i.readOffset(
      e + n + t * s
    );
    return new Un(
      o,
      f,
      g
    );
  }
  async requestIFD(e) {
    if (this.ifdRequests[e])
      return this.ifdRequests[e];
    if (e === 0)
      return this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
    if (!this.ifdRequests[e - 1])
      try {
        this.ifdRequests[e - 1] = this.requestIFD(e - 1);
      } catch (t) {
        throw t instanceof Te ? new Te(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new Te(e);
      return this.parseFileDirectoryAt(t.nextIFDByteOffset);
    })(), this.ifdRequests[e];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    const t = await this.requestIFD(e);
    return new et(
      t.fileDirectory,
      t.geoKeyDirectory,
      this.dataView,
      this.littleEndian,
      this.cache,
      this.source
    );
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    let e = 0, t = !0;
    for (; t; )
      try {
        await this.requestIFD(e), ++e;
      } catch (n) {
        if (n instanceof Te)
          t = !1;
        else
          throw n;
      }
    return e;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const e = this.bigTiff ? 16 : 8;
    if (this.ghostValues)
      return this.ghostValues;
    const t = "GDAL_STRUCTURAL_METADATA_SIZE=", n = t.length + 100;
    let i = await this.getSlice(e, n);
    if (t === le(i, B.ASCII, t.length, e)) {
      const a = le(i, B.ASCII, n, e).split(`
`)[0], o = Number(a.split("=")[1].split(" ")[0]) + a.length;
      o > n && (i = await this.getSlice(e, o));
      const c = le(i, B.ASCII, o, e);
      this.ghostValues = {}, c.split(`
`).filter((f) => f.length > 0).map((f) => f.split("=")).forEach(([f, g]) => {
        this.ghostValues[f] = g;
      });
    }
    return this.ghostValues;
  }
  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {*} source The source of data to parse from.
   * @param {GeoTIFFOptions} [options] Additional options.
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   */
  static async fromSource(e, t, n) {
    const i = (await e.fetch([{ offset: 0, length: 1024 }], n))[0], s = new jr(i), a = s.getUint16(0, 0);
    let o;
    if (a === 18761)
      o = !0;
    else if (a === 19789)
      o = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const c = s.getUint16(2, o);
    let f;
    if (c === 42)
      f = !1;
    else if (c === 43) {
      if (f = !0, s.getUint16(4, o) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const g = f ? s.getUint64(8, o) : s.getUint32(4, o);
    return new W(e, o, f, g, t);
  }
  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    return typeof this.source.close == "function" ? this.source.close() : !1;
  }
}
class Kt extends zt {
  /**
   * Construct a new MultiGeoTIFF from a main and several overview files.
   * @param {GeoTIFF} mainFile The main GeoTIFF file.
   * @param {GeoTIFF[]} overviewFiles An array of overview files.
   */
  constructor(e, t) {
    super(), this.mainFile = e, this.overviewFiles = t, this.imageFiles = [e].concat(t), this.fileDirectoriesPerFile = null, this.fileDirectoriesPerFileParsing = null, this.imageCount = null;
  }
  async parseFileDirectoriesPerFile() {
    const e = [this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(this.overviewFiles.map((t) => t.parseFileDirectoryAt(t.firstIFDOffset)));
    return this.fileDirectoriesPerFile = await Promise.all(e), this.fileDirectoriesPerFile;
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    await this.getImageCount(), await this.parseFileDirectoriesPerFile();
    let t = 0, n = 0;
    for (let i = 0; i < this.imageFiles.length; i++) {
      const s = this.imageFiles[i];
      for (let a = 0; a < this.imageCounts[i]; a++) {
        if (e === t) {
          const o = await s.requestIFD(n);
          return new et(
            o.fileDirectory,
            o.geoKeyDirectory,
            s.dataView,
            s.littleEndian,
            s.cache,
            s.source
          );
        }
        t++, n++;
      }
      n = 0;
    }
    throw new RangeError("Invalid image index");
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    if (this.imageCount !== null)
      return this.imageCount;
    const e = [this.mainFile.getImageCount()].concat(this.overviewFiles.map((t) => t.getImageCount()));
    return this.imageCounts = await Promise.all(e), this.imageCount = this.imageCounts.reduce((t, n) => t + n, 0), this.imageCount;
  }
}
async function Fe(r, e = {}, t) {
  return W.fromSource(Me(r, e), t);
}
async function Ln(r, e = {}, t) {
  return W.fromSource(hn(r, e), t);
}
async function Le(r, e) {
  return W.fromSource(gn(r), e);
}
async function Nn(r, e) {
  return W.fromSource(xn(r), e);
}
async function ue(r, e) {
  return W.fromSource(pn(r), e);
}
async function jn(r, e = [], t = {}, n) {
  const i = await W.fromSource(Me(r, t), n), s = await Promise.all(
    e.map((a) => W.fromSource(Me(a, t)))
  );
  return new Kt(i, s);
}
function zn(r, e) {
  return Rn(r, e);
}
const Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseClient: ke,
  BaseDecoder: _n,
  BaseResponse: De,
  GeoTIFF: W,
  GeoTIFFImage: et,
  MultiGeoTIFF: Kt,
  Pool: Ut,
  addDecoder: re,
  default: W,
  fromArrayBuffer: Le,
  fromBlob: ue,
  fromCustomClient: Ln,
  fromFile: Nn,
  fromUrl: Fe,
  fromUrls: jn,
  getDecoder: Qe,
  globals: Dr,
  rgb: Br,
  setLogger: vn,
  writeArrayBuffer: zn
}, Symbol.toStringTag, { value: "Module" }));
class Oe {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
}
const at = {};
function te(r, e, t = "warn") {
  at[r] || (at[r] = !0, console[t](e));
}
const Hn = (r) => {
  var t, n, i;
  const e = /* @__PURE__ */ new Map();
  for (const s of r) {
    const a = new DOMParser().parseFromString(
      (t = s.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), o = (n = a == null ? void 0 : a.querySelector("Name")) == null ? void 0 : n.textContent, c = (i = a == null ? void 0 : a.querySelector("Color")) == null ? void 0 : i.textContent;
    if (!o)
      continue;
    const f = c ? c.split(",").map((g) => parseInt(g)) : [255, 255, 255];
    e.has(o) || e.set(o, {
      name: o,
      color: f,
      images: []
    }), e.get(o).images.push(s);
  }
  return e;
};
class ne {
  static RGBAfromYCbCr(...e) {
    let t, n, i;
    if (e.length === 1) {
      const o = e[0], c = new Uint8ClampedArray(o.length * 4 / 3);
      for (let f = 0, g = 0; f < o.length; f += 3, g += 4)
        t = o[f], n = o[f + 1], i = o[f + 2], c[g] = t + 1.402 * (i - 128), c[g + 1] = t - 0.34414 * (n - 128) - 0.71414 * (i - 128), c[g + 2] = t + 1.772 * (n - 128), c[g + 3] = 255;
      return c;
    }
    [t, n, i] = e;
    const s = t.length, a = new Uint8ClampedArray(s * 4);
    for (let o = 0, c = 0; o < s; o++, c += 4) {
      const f = t[o], g = n[o], l = i[o];
      a[c] = f + 1.402 * (l - 128), a[c + 1] = f - 0.34414 * (g - 128) - 0.71414 * (l - 128), a[c + 2] = f + 1.772 * (g - 128), a[c + 3] = 255;
    }
    return a;
  }
  static RGBAfromRGB(...e) {
    if (e.length === 1) {
      const c = e[0], f = new Uint8ClampedArray(c.length * 4 / 3);
      for (let g = 0, l = 0; g < c.length; g += 3, l += 4)
        f[l] = c[g], f[l + 1] = c[g + 1], f[l + 2] = c[g + 2], f[l + 3] = 255;
      return f;
    }
    const t = e[0], n = e[1], i = e[2], s = e.length >= 4 ? e[3] : null, a = t.length, o = new Uint8ClampedArray(a * 4);
    for (let c = 0, f = 0; c < a; c++, f += 4)
      o[f] = t[c], o[f + 1] = n[c], o[f + 2] = i[c], o[f + 3] = s ? s[c] : 255;
    return o;
  }
  static RGBAfromWhiteIsZero(e, t) {
    const n = new Uint8ClampedArray(e.length * 4);
    let i;
    for (let s = 0, a = 0; s < e.length; ++s, a += 4)
      i = 256 - e[s] / t * 256, n[a] = i, n[a + 1] = i, n[a + 2] = i, n[a + 3] = 255;
    return n;
  }
  static RGBAfromBlackIsZero(e, t) {
    const n = new Uint8ClampedArray(e.length * 4);
    let i;
    for (let s = 0, a = 0; s < e.length; ++s, a += 4)
      i = e[s] / t * 256, n[a] = i, n[a + 1] = i, n[a + 2] = i, n[a + 3] = 255;
    return n;
  }
  static RGBAfromPalette(e, t) {
    const n = new Uint8ClampedArray(e.length * 4), i = t.length / 3, s = t.length / 3 * 2;
    for (let a = 0, o = 0; a < e.length; ++a, o += 4) {
      const c = e[a];
      n[o] = t[c] / 65536 * 256, n[o + 1] = t[c + i] / 65536 * 256, n[o + 2] = t[c + s] / 65536 * 256, n[o + 3] = 255;
    }
    return n;
  }
  static RGBAfromCMYK(...e) {
    if (e.length === 1) {
      const c = e[0], f = new Uint8ClampedArray(c.length);
      for (let g = 0, l = 0; g < c.length; g += 4, l += 4) {
        const h = c[g], d = c[g + 1], u = c[g + 2], y = c[g + 3];
        f[l] = 255 * ((255 - h) / 256) * ((255 - y) / 256), f[l + 1] = 255 * ((255 - d) / 256) * ((255 - y) / 256), f[l + 2] = 255 * ((255 - u) / 256) * ((255 - y) / 256), f[l + 3] = 255;
      }
      return f;
    }
    const t = e[0], n = e[1], i = e[2], s = e[3], a = t.length, o = new Uint8ClampedArray(a * 4);
    for (let c = 0, f = 0; c < a; c++, f += 4) {
      const g = t[c], l = n[c], h = i[c], d = s[c];
      o[f] = 255 * ((255 - g) / 256) * ((255 - d) / 256), o[f + 1] = 255 * ((255 - l) / 256) * ((255 - d) / 256), o[f + 2] = 255 * ((255 - h) / 256) * ((255 - d) / 256), o[f + 3] = 255;
    }
    return o;
  }
  static RGBAfromCIELab(...e) {
    const s = (l, h, d) => {
      const u = h << 24 >> 24, y = d << 24 >> 24;
      let w = (l + 16) / 116, b = u / 500 + w, x = w - y / 200;
      b = 0.95047 * (b * b * b > 8856e-6 ? b * b * b : (b - 0.13793103448275862) / 7.787), w = 1 * (w * w * w > 8856e-6 ? w * w * w : (w - 0.13793103448275862) / 7.787), x = 1.08883 * (x * x * x > 8856e-6 ? x * x * x : (x - 0.13793103448275862) / 7.787);
      let T = b * 3.2406 + w * -1.5372 + x * -0.4986, P = b * -0.9689 + w * 1.8758 + x * 0.0415, R = b * 0.0557 + w * -0.204 + x * 1.057;
      return T = T > 31308e-7 ? 1.055 * T ** 0.4166666666666667 - 0.055 : 12.92 * T, P = P > 31308e-7 ? 1.055 * P ** 0.4166666666666667 - 0.055 : 12.92 * P, R = R > 31308e-7 ? 1.055 * R ** 0.4166666666666667 - 0.055 : 12.92 * R, [
        Math.max(0, Math.min(1, T)) * 255,
        Math.max(0, Math.min(1, P)) * 255,
        Math.max(0, Math.min(1, R)) * 255
      ];
    };
    if (e.length === 1) {
      const l = e[0], h = new Uint8ClampedArray(l.length * 4 / 3);
      for (let d = 0, u = 0; d < l.length; d += 3, u += 4) {
        const [y, w, b] = s(l[d], l[d + 1], l[d + 2]);
        h[u] = y, h[u + 1] = w, h[u + 2] = b, h[u + 3] = 255;
      }
      return h;
    }
    const a = e[0], o = e[1], c = e[2], f = a.length, g = new Uint8ClampedArray(f * 4);
    for (let l = 0, h = 0; l < f; l++, h += 4) {
      const [d, u, y] = s(a[l], o[l], c[l]);
      g[h] = d, g[h + 1] = u, g[h + 2] = y, g[h + 3] = 255;
    }
    return g;
  }
}
const qn = {
  interpretation: "auto",
  channels: null,
  gpu: {
    preferRGBA8: !0,
    forceRGBA16F: !1,
    packMode: "packsOf4"
  },
  image: {
    rgbaChannels: null
  },
  hints: {
    layout: {
      pyramid: "auto",
      planeIndex: 0,
      prefer: "pyramid"
    }
  }
};
function Vn() {
  let r, e;
  return { promise: new Promise((n, i) => {
    r = n, e = i;
  }), resolve: r, reject: e };
}
function Wn(r) {
  try {
    return r ? typeof r == "string" ? r : r && typeof r.message == "string" ? r.message : JSON.stringify(r) : "Unknown error";
  } catch {
    return String(r);
  }
}
class Ne {
  constructor(e) {
    Object.assign(this, e);
  }
  getType() {
    return "gpuTextureSet";
  }
}
class $n {
  /**
   * @param {Object} params
   * @param {number} params.size
   * @param {() => Worker} params.createWorker
   */
  constructor({ size: e, createWorker: t }) {
    this.size = Math.max(1, e | 0), this.createWorker = t, this.workers = [], this._nextId = 1;
    for (let n = 0; n < this.size; n++) {
      const i = this.createWorker(), s = { worker: i, pending: 0, callbacks: /* @__PURE__ */ new Map() };
      i.onmessage = (a) => {
        const o = a.data || {};
        if (o.kind === "warn") {
          te(
            o.code || "RawTiffWorker_warn",
            o.message || "[RawTiffWorker] warning",
            "warn"
          );
          return;
        }
        const c = o.id, f = s.callbacks.get(c);
        f && (s.callbacks.delete(c), s.pending = Math.max(0, s.pending - 1), o.ok ? f.resolve(o.result) : f.reject(new Error(Wn(o.error))));
      }, i.onerror = (a) => {
        for (const o of s.callbacks.values())
          o.reject(a instanceof Error ? a : new Error(String(a)));
        s.callbacks.clear(), s.pending = 0;
      }, this.workers.push(s);
    }
  }
  /**
   * @param {string} op
   * @param {any} payload
   * @param {Transferable[]} [transfer]
   * @returns {Promise<any>}
   */
  request(e, t, n) {
    const i = this._nextId++, s = Vn();
    let a = this.workers[0];
    for (const o of this.workers)
      o.pending < a.pending && (a = o);
    a.pending++, a.callbacks.set(i, s);
    try {
      n && n.length ? a.worker.postMessage({ id: i, op: e, payload: t }, n) : a.worker.postMessage({ id: i, op: e, payload: t });
    } catch (o) {
      a.callbacks.delete(i), a.pending = Math.max(0, a.pending - 1), s.reject(o);
    }
    return s.promise;
  }
  terminate() {
    for (const e of this.workers) {
      try {
        e.worker.terminate();
      } catch {
      }
      e.callbacks.clear(), e.pending = 0;
    }
    this.workers.length = 0;
  }
}
function Yn() {
  return new Worker(new URL(
    /* @vite-ignore */
    "/assets/tiff.worker-CLseKfFU.js",
    import.meta.url
  ), { type: "module" });
}
class ie {
  /**
   * @param {ArrayBuffer|Uint8Array|Blob|{bytes?:any, blob?:Blob, arrayBuffer?:Function}} source
   * @param {Object} [opts]
   * @param {RawTiffHints} [opts.hints]
   * @param {*} [opts.meta]
   */
  constructor(e, t = {}) {
    this.source = e, this.hints = t.hints || {}, this.meta = t.meta;
  }
  getType() {
    return "rawTiff";
  }
}
class je {
  /**
   * @param {Object} params
   * @param {number} params.width
   * @param {number} params.height
   * @param {TypedArray[]} params.bands
   * @param {number} params.samplesPerPixel
   * @param {number[]} params.bitsPerSample
   * @param {number[]} [params.sampleFormat]
   * @param {number} [params.photometricInterpretation]
   * @param {any} [params.colorMap]
   * @param {any} [params.fileDirectory]
   * @param {RawTiffHints} [params.hints]
   */
  constructor(e) {
    Object.assign(this, e), this.hints = e.hints || {};
  }
  getType() {
    return "tiffRaster";
  }
}
function se(r, e) {
  const t = Array.isArray(r) ? r.slice() : Object.assign({}, r || {});
  if (!e || typeof e != "object") return t;
  for (const n of Object.keys(e)) {
    const i = e[n];
    i && typeof i == "object" && !Array.isArray(i) && t[n] && typeof t[n] == "object" && !Array.isArray(t[n]) ? t[n] = se(t[n], i) : t[n] = i;
  }
  return t;
}
function me(r, e) {
  const t = e && e.hints;
  if (t && t.formatResolved) return t.formatResolved;
  if (t && t.format) return t.format;
  if (e && e.meta && e.meta.format) return e.meta.format;
  if (r && r.format) return r.format;
  if (r && r.userData && r.userData.format) return r.userData.format;
  const n = r && (r.source || r.tileSource || r._tileSource);
  return n && n.format ? n.format : n && n.options && n.options.format ? n.options.format : null;
}
function Xn(r) {
  return Array.isArray(r) ? r.map((e) => {
    const t = typeof e.ctor == "string" && globalThis[e.ctor] ? globalThis[e.ctor] : Uint8Array;
    return new t(e.buffer, e.byteOffset || 0, e.length);
  }) : [];
}
function Zn(r, e) {
  const t = Xn(r.bands);
  return new je({
    width: r.width,
    height: r.height,
    bands: t,
    samplesPerPixel: r.samplesPerPixel,
    bitsPerSample: r.bitsPerSample,
    sampleFormat: r.sampleFormat,
    photometricInterpretation: r.photometricInterpretation,
    colorMap: r.colorMap,
    fileDirectory: r.fileDirectory,
    hints: e || {}
  });
}
function lt(r) {
  const e = (r.packs || []).map((t) => {
    const n = t.data, i = typeof n.ctor == "string" && globalThis[n.ctor] ? globalThis[n.ctor] : Uint8Array, s = new i(n.buffer, n.byteOffset || 0, n.length);
    return Object.assign({}, t, { data: s });
  });
  return new Ne({
    width: r.width,
    height: r.height,
    mode: r.mode,
    channelCount: r.channelCount,
    packs: e
  });
}
function Jn(r, e = {}) {
  const t = r;
  if (t.RawTiffPlugin && t.RawTiffPlugin.__installed) return t.RawTiffPlugin;
  const n = Object.assign({
    toneMap: null,
    format: se(qn, e.defaults && e.defaults.format || null)
  }, e.defaults || {}), i = Object.assign({
    enabled: !0,
    // Use up to (N-1) cores, capped at 8. Leaving one core for the main thread.
    // More workers = more concurrent raster→ImageBitmap conversions off-thread.
    size: typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(2, Math.min(navigator.hardwareConcurrency - 1, 8)) : 4,
    createWorker: null,
    transferInput: !1,
    enableRawTiffToImageBitmap: !0
  }, e.workerPool || {}), s = t.RawTiffPluginShared = t.RawTiffPluginShared || {};
  function a() {
    var p, I;
    if (!i.enabled || typeof Worker > "u") return null;
    if (s.__rawTiffWorkerPool) return s.__rawTiffWorkerPool;
    const m = i.createWorker || Yn;
    try {
      return s.__rawTiffWorkerPool = new $n({
        size: i.size,
        createWorker: m
      }), s.__rawTiffWorkerPool;
    } catch (C) {
      return (I = (p = t.console) == null ? void 0 : p.warn) == null || I.call(p, "[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", C), s.__rawTiffWorkerPool = null, null;
    }
  }
  async function o(m) {
    if (m == null) throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");
    if (m instanceof ie) return o(m.source);
    if (typeof m == "object") {
      if (typeof m.arrayBuffer == "function") {
        const p = await m.arrayBuffer();
        if (p instanceof ArrayBuffer) return p;
      }
      if (m.bytes != null) return o(m.bytes);
      if (m.blob != null) return o(m.blob);
    }
    if (typeof Blob < "u" && m instanceof Blob) return await m.arrayBuffer();
    if (m instanceof ArrayBuffer) return m;
    if (ArrayBuffer.isView(m)) {
      const { buffer: p, byteOffset: I, byteLength: C } = m;
      return p.slice(I, I + C);
    }
    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }
  async function c(m) {
    return typeof m.getImageCount == "function" ? await m.getImageCount() : typeof m.getImages == "function" ? (await m.getImages()).length : 1;
  }
  async function f(m, p) {
    if (typeof m.getImage == "function") return await m.getImage(p);
    if (typeof m.getImages == "function") return (await m.getImages())[p];
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }
  async function g(m, p) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const I = p && p.hints || (p instanceof ie ? p.hints : null) || {}, C = await o(p);
    let F;
    if (typeof Le == "function")
      F = await Le(C);
    else if (typeof ue == "function")
      F = await ue(new Blob([C], { type: "image/tiff" }));
    else
      throw new Error("[RawTiffPlugin] geotiff module does not provide fromArrayBuffer/fromBlob.");
    const A = await c(F);
    let D = I.imageIndex;
    if (A > 1) {
      if (typeof D != "number" || !Number.isFinite(D))
        throw new Error(`[RawTiffPlugin] TIFF contains ${A} images. Provide rawTiff.hints.imageIndex.`);
      if (D < 0 || D >= A)
        throw new Error(`[RawTiffPlugin] imageIndex ${D} out of range (0..${A - 1}).`);
    } else
      D = 0;
    const k = await f(F, D), N = typeof k.getWidth == "function" ? k.getWidth() : k.width, v = typeof k.getHeight == "function" ? k.getHeight() : k.height, G = typeof k.getSamplesPerPixel == "function" ? k.getSamplesPerPixel() : k.samplesPerPixel || 1, M = typeof k.getBitsPerSample == "function" ? k.getBitsPerSample() : k.bitsPerSample || [8], O = typeof k.getSampleFormat == "function" ? k.getSampleFormat() : k.sampleFormat || null, L = typeof k.getPhotometricInterpretation == "function" ? k.getPhotometricInterpretation() : k.fileDirectory ? k.fileDirectory.PhotometricInterpretation : void 0, S = k.fileDirectory || null, _ = S && S.ColorMap ? S.ColorMap : null, E = Object.assign({ interleave: !1 }, I.decode || {}), U = await k.readRasters(E), Y = Array.isArray(U) ? U : [U], Q = Math.max(G || 0, Y.length);
    return new je({
      width: N,
      height: v,
      bands: Y,
      samplesPerPixel: Q,
      bitsPerSample: Array.isArray(M) ? M : [M],
      sampleFormat: Array.isArray(O) ? O : O ? [O] : null,
      photometricInterpretation: L,
      colorMap: _,
      fileDirectory: S,
      hints: I
    });
  }
  async function l(m, p, I) {
    const C = p && p.hints || (p instanceof ie ? p.hints : null) || {}, F = await o(p), A = me(m, p), D = se(n.format, A || null), k = Object.assign({}, C, { formatResolved: D }), N = i && i.transferInput ? [F] : [], v = await I.request("decodeRaster", { buffer: F, hints: k }, N);
    return Zn(v, k);
  }
  async function h(m, p) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const I = a();
    return I ? await l(m, p, I) : await g(m, p);
  }
  async function d(m, p) {
    const I = p && p.hints || (p instanceof ie ? p.hints : null) || {}, C = a();
    if (C) {
      const A = await o(p), D = me(m, p), k = se(n.format, D || null), N = Object.assign({}, I, { formatResolved: k }), v = i && i.transferInput ? [A] : [], G = await C.request("decodeAndRenderImageBitmap", { buffer: A, hints: N }, v);
      if (G && G.kind === "imageBitmap") return G.imageBitmap;
      if (G && G.kind === "rgba8") {
        if (typeof createImageBitmap != "function")
          throw new Error("[RawTiffPlugin] createImageBitmap is not available to build ImageBitmap fallback.");
        const M = new Uint8ClampedArray(G.rgbaBuffer, G.rgbaByteOffset || 0, G.rgbaLength), O = new ImageData(M, G.width, G.height);
        return await createImageBitmap(O);
      }
      throw new Error("[RawTiffPlugin] Worker did not return a supported output.");
    }
    const F = await g(m, p);
    return await T(m, F);
  }
  async function u(m, p) {
    const I = a();
    if (!I) return T(m, p);
    const C = p && p.hints || {}, F = me(m, p), A = se(n.format, F || null), D = Object.assign({}, C, { formatResolved: A }), k = /* @__PURE__ */ new Set(), N = [], v = p.bands.map((O) => {
      var L;
      return k.has(O.buffer) || (k.add(O.buffer), N.push(O.buffer)), {
        ctor: ((L = O.constructor) == null ? void 0 : L.name) || "Uint8Array",
        buffer: O.buffer,
        byteOffset: O.byteOffset,
        length: O.length
      };
    }), G = {
      width: p.width,
      height: p.height,
      bands: v,
      samplesPerPixel: p.samplesPerPixel,
      bitsPerSample: p.bitsPerSample,
      sampleFormat: p.sampleFormat,
      photometricInterpretation: p.photometricInterpretation,
      colorMap: p.colorMap,
      fileDirectory: p.fileDirectory
    }, M = await I.request("rasterToImageBitmap", { raster: G, hints: D }, N);
    if (M.kind === "imageBitmap") return M.imageBitmap;
    if (M.kind === "rgba8") {
      if (typeof createImageBitmap != "function")
        throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
      const O = new Uint8ClampedArray(M.rgbaBuffer, M.rgbaByteOffset || 0, M.rgbaLength), L = new ImageData(O, M.width, M.height);
      return await createImageBitmap(L);
    }
    throw new Error("[RawTiffPlugin] Worker returned unsupported result kind for rasterToImageBitmap.");
  }
  async function y(m, p) {
    const I = p && p.hints || (p instanceof ie ? p.hints : null) || {}, C = a();
    if (!C) {
      const M = await g(m, p);
      return await w(m, M);
    }
    const F = await o(p), A = me(m, p), D = se(n.format, A || null), k = Object.assign({}, I, { formatResolved: D }), N = i && i.transferInput ? [F] : [], v = await C.request("decodeAndPackGpuTextureSet", { buffer: F, hints: k }, N), G = lt(v.texSet);
    return G.hints = k, G;
  }
  async function w(m, p) {
    const I = a();
    if (!I) {
      te("gpuTextureSet_no_worker", "[RawTiffPlugin] No worker pool available; gpuTextureSet packing will fall back to worker-less path (slower).", "warn");
      const O = p.width, L = p.height, S = O * L, _ = new Uint8Array(S * 4);
      for (let E = 0, U = 0; E < S; E++, U += 4)
        _[U] = p.bands[0] ? p.bands[0][E] : 0, _[U + 1] = p.bands[1] ? p.bands[1][E] : 0, _[U + 2] = p.bands[2] ? p.bands[2][E] : 0, _[U + 3] = p.bands[3] ? p.bands[3][E] : 255;
      return new Ne({
        width: O,
        height: L,
        mode: "data",
        channelCount: p.bands ? p.bands.length : 0,
        packs: [{ format: "RGBA8", data: _, channels: [0, 1, 2, 3], normalized: !1, scale: [1, 1, 1, 1], offset: [0, 0, 0, 0] }]
      });
    }
    const C = p.hints || {}, F = me(m, p), A = se(n.format, F || null), D = Object.assign({}, C, { formatResolved: A }), k = p.bands.map((O) => {
      var L;
      return {
        ctor: ((L = O.constructor) == null ? void 0 : L.name) || "Uint8Array",
        buffer: O.buffer,
        byteOffset: O.byteOffset,
        length: O.length
      };
    }), N = {
      width: p.width,
      height: p.height,
      bands: k,
      samplesPerPixel: p.samplesPerPixel,
      bitsPerSample: p.bitsPerSample,
      sampleFormat: p.sampleFormat,
      photometricInterpretation: p.photometricInterpretation,
      colorMap: p.colorMap,
      fileDirectory: p.fileDirectory
    }, v = k.map((O) => O.buffer), G = await I.request("rasterToGpuTextureSet", { raster: N, hints: D }, v), M = lt(G);
    return M.hints = D, M;
  }
  function b(m, p, I) {
    if (m == null || Number.isNaN(m)) return 0;
    const C = I.bands[p];
    if (C instanceof Float32Array || C instanceof Float64Array) {
      const k = Math.max(0, Math.min(1, m));
      return Math.round(k * 255);
    }
    const A = I.bitsPerSample && I.bitsPerSample[p] != null ? I.bitsPerSample[p] : I.bitsPerSample ? I.bitsPerSample[0] : 8, D = A <= 0 ? 255 : Math.pow(2, A) - 1;
    return D <= 255 ? Math.max(0, Math.min(255, m)) : Math.round(Math.max(0, Math.min(1, m / D)) * 255);
  }
  function x(m) {
    const p = n.toneMap || b, I = z || {}, C = m.width, F = m.height, A = C * F, D = m.hints.renderChannels || m.renderChannels || null, k = m.samplesPerPixel || m.bands.length || 1, N = (S, _) => p(m.bands[S][_], S, m), v = m.photometricInterpretation;
    if (v === I.Palette && m.colorMap) {
      const S = m.bands[0];
      return ne.RGBAfromPalette(S, m.colorMap);
    }
    if ((v === I.WhiteIsZero || v === I.BlackIsZero) && k >= 1) {
      const S = m.bands[0], _ = m.bitsPerSample && m.bitsPerSample[0] != null ? m.bitsPerSample[0] : 8, E = Math.pow(2, _) - 1;
      if (v === I.WhiteIsZero) return ne.RGBAfromWhiteIsZero(S, E);
      if (v === I.BlackIsZero) return ne.RGBAfromBlackIsZero(S, E);
      const U = new Uint8ClampedArray(A * 4);
      for (let Y = 0, Q = 0; Y < A; Y++, Q += 4) {
        let ee = p(S[Y], 0, m);
        v === I.WhiteIsZero && (ee = 255 - ee), U[Q] = U[Q + 1] = U[Q + 2] = ee, U[Q + 3] = 255;
      }
      return U;
    }
    const G = D || (v === I.RGB || v === I.YCbCr || v === I.CIELab ? [0, 1, 2] : k >= 3 ? [0, 1, 2] : [0]);
    if (G.length > 4 && (te(
      "renderChannels>4_to_RGBA",
      `[tiff] Requested ${G.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`,
      "warn"
    ), G.splice(4)), G.length === 1) {
      const S = G[0], _ = new Uint8ClampedArray(A * 4);
      for (let E = 0, U = 0; E < A; E++, U += 4) {
        const Y = N(S, E);
        _[U] = _[U + 1] = _[U + 2] = Y, _[U + 3] = 255;
      }
      return _;
    }
    const M = new Uint8ClampedArray(A * G.length);
    for (let S = 0; S < A; S++) {
      const _ = S * G.length;
      for (let E = 0; E < G.length; E++) {
        const U = G[E];
        M[_ + E] = U < m.bands.length ? N(U, S) : 0;
      }
    }
    if (v === I.YCbCr && G.length >= 3) return ne.RGBAfromYCbCr(M);
    if (v === I.CMYK && G.length >= 4) return ne.RGBAfromCMYK(M);
    if (v === I.CIELab && G.length >= 3) return ne.RGBAfromCIELab(M);
    if (G.length === 4) return M;
    if (G.length === 3) return ne.RGBAfromRGB(M);
    const O = new Uint8ClampedArray(A * 4), L = G.length >= 4;
    for (let S = 0, _ = 0; S < A; S++, _ += 4) {
      const E = S * G.length;
      O[_] = M[E], O[_ + 1] = M[E + 1] || 0, O[_ + 2] = M[E + 2] || 0, O[_ + 3] = L ? M[E + 3] : 255;
    }
    return O;
  }
  async function T(m, p) {
    if (typeof createImageBitmap != "function")
      throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
    const I = x(p), C = new ImageData(I, p.width, p.height);
    return await createImageBitmap(C);
  }
  async function P(m, p) {
    const I = await T(m, p), C = document.createElement("canvas");
    C.width = I.width, C.height = I.height;
    const F = C.getContext("2d", { willReadFrequently: !0 });
    return F.drawImage(I, 0, 0), F;
  }
  t.converter ? (t.converter.learn("rawTiff", "tiffRaster", (m, p) => h(m, p), 2, 10), i.enableRawTiffToImageBitmap && t.converter.learn("rawTiff", "imageBitmap", (m, p) => d(m, p), 1, 5), t.converter.learn("tiffRaster", "context2d", (m, p) => P(m, p), 2, 10), t.converter.learn("tiffRaster", "imageBitmap", (m, p) => u(m, p), 1, 10), t.converter.learn("rawTiff", "gpuTextureSet", (m, p) => y(m, p), 1, 8), t.converter.learn("tiffRaster", "gpuTextureSet", (m, p) => w(m, p), 1, 12)) : t.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+.");
  const R = {
    __installed: !0,
    RawTiff: ie,
    TiffRaster: je,
    GpuTextureSet: Ne,
    Converters: ne,
    decodeRawTiff: h,
    rasterToRGBA8: x,
    rasterToContext2d: P,
    rasterToImageBitmap: T,
    tiffRasterToImageBitmapViaWorker: u,
    getWorkerPool: a,
    terminateWorkerPool() {
      const m = t.RawTiffPluginShared;
      m && m.__rawTiffWorkerPool && (m.__rawTiffWorkerPool.terminate(), m.__rawTiffWorkerPool = null);
    },
    /**
     * Convert using OpenSeadragon.converter.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType]
     */
    convert(m, p, I, C) {
      if (!t.converter) throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing.");
      const F = C || t.converter.guessType(p);
      return t.converter.convert(m, p, F, I);
    },
    /**
     * Wrap binary as a RawTiff object.
     * @param {*} source
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(m, p) {
      return new ie(m, p);
    },
    /**
     * Expose defaults (merged).
     */
    defaults: n
  };
  return t.RawTiffPlugin = R, R;
}
window.GeoTIFF = Kn;
const Qn = (r, e = {}) => {
  if (r.version.major < 4 || r.version.major === 4 && r.version.minor < 1)
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  const {
    workerUrl: t,
    // optional: string or URL
    workerPool: n
    // optional: { createWorker: () => Worker }
  } = e, s = n || {
    createWorker: () => t ? new Worker(t, { type: "module" }) : new Worker(new URL(
      /* @vite-ignore */
      "/assets/tiff.worker-CLseKfFU.js",
      import.meta.url
    ), {
      type: "module"
    })
  }, a = r.RawTiffPlugin || Jn(r, {
    workerPool: s
  });
  let o = 0;
  const f = class f extends r.TileSource {
    constructor(l, h = { logLatency: !1 }) {
      super();
      let d = this;
      this.input = l, this.options = h, this.channel = (l == null ? void 0 : l.channel) ?? null, this._ready = !1, this._pool = f.sharedPool, this._tileSize = 256, this._tsCounter = o, o += 1, l.GeoTIFF && l.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(l.GeoTIFF),
        GeoTIFFImages: Promise.resolve(l.GeoTIFFImages),
        ready: new Oe()
      }, this.GeoTIFF = l.GeoTIFF, this.imageCount = l.GeoTIFFImages.length, this.GeoTIFFImages = l.GeoTIFFImages, this.GeoTIFFAllImages = l.GeoTIFFAllImages ?? l.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: l instanceof File ? ue(l, h.GeoTIFFOptions) : Fe(l, h.GeoTIFFOptions),
        GeoTIFFImages: new Oe(),
        ready: new Oe()
      }, this.promises.GeoTIFF.then((u) => (d.GeoTIFF = u, u.getImageCount())).then((u) => {
        d.imageCount = u;
        let y = [...Array(u).keys()].map((w) => d.GeoTIFF.getImage(w));
        return Promise.all(y);
      }).then((u) => {
        u = d.constructor.userDefinedImagesFilter(u, h), d.GeoTIFFImages = u, d.GeoTIFFAllImages = u, d.promises.GeoTIFFImages.resolve(u), this.setupLevels();
      }).catch((u) => {
        throw console.error("Re-throwing error with GeoTIFF:", u), u;
      }));
    }
    static async getAllTileSources(l, h) {
      const d = l instanceof File ? l.name.split(".").pop() : l.split(".").pop();
      let u = await (l instanceof File ? ue(l, h.GeoTIFFOptions) : Fe(l, h.GeoTIFFOptions)), y = await u.getImageCount();
      const w = await Promise.all(
        Array.from({ length: y }, (p, I) => u.getImage(I))
      );
      let b = l instanceof File ? ue(l) : Fe(l), x = this.userDefinedImagesFilter(w, h);
      x = x.filter(
        (p) => p.fileDirectory.photometricInterpretation !== z.TransparencyMask
      ), x.sort((p, I) => I.getWidth() - p.getWidth());
      const T = 0.015, R = x.reduce((p, I) => {
        const C = I.getWidth() / I.getHeight();
        let F = "";
        I.fileDirectory.ImageDescription && (F = I.fileDirectory.ImageDescription.split(`
`)[1] ?? "");
        const A = p.filter(
          (D) => Math.abs(1 - D.aspectRatio / C) < T && !(F != null && F.toLowerCase().includes("macro") || F != null && F.toLowerCase().includes("label"))
        );
        return A.length === 0 ? p.push({
          aspectRatio: C,
          images: [I]
        }) : A[0].images.push(I), p;
      }, []).map((p) => p.images), m = [];
      for (let p = 0; p < R.length; p++) {
        const I = R[p];
        if (p !== 0) {
          m.push(
            new r.GeoTIFFTileSource(
              {
                GeoTIFF: b,
                GeoTIFFImages: I,
                GeoTIFFAllImages: I
              },
              h
            )
          );
          continue;
        }
        if (d === "qptiff") {
          const A = Hn(I);
          for (const D of A.values())
            m.push(
              new r.GeoTIFFTileSource(
                {
                  GeoTIFF: b,
                  GeoTIFFImages: D.images,
                  GeoTIFFAllImages: D.images,
                  channel: {
                    name: D.name,
                    color: D.color
                  }
                },
                h
              )
            );
          continue;
        }
        const C = await this.resolveLayout(b, I, h.hints), F = await this.buildLevelImages(b, C, b);
        m.push(
          new r.GeoTIFFTileSource(
            {
              GeoTIFF: b,
              GeoTIFFImages: F,
              GeoTIFFAllImages: I
            },
            h
          )
        );
      }
      return m;
    }
    /**
     * Return the tileWidth for a given level.
     * @function
     * @param {Number} level
     */
    getTileWidth(l) {
      if (this.levels.length > l)
        return this.levels[l].tileWidth;
    }
    /**
     * Return the tileHeight for a given level.
     * @function
     * @param {Number} level
     */
    getTileHeight(l) {
      if (this.levels.length > l)
        return this.levels[l].tileHeight;
    }
    /**
     * @function
     * @param {Number} level
     */
    getLevelScale(l) {
      let h = NaN;
      return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (h = this.levels[l].width / this.levels[this.maxLevel].width), h;
    }
    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    getTileHashKey(l, h, d) {
      var u;
      return `geotiffTileSource${this._tsCounter}_${((u = this == null ? void 0 : this.channel) == null ? void 0 : u.name) ?? ""}_${l}_${h}_${d}`;
    }
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    getTileUrl(l, h, d) {
      return `${l}/${h}_${d}`;
    }
    downloadTileStart(l) {
      const h = !!r.converter && typeof l.fail == "function", d = "" + l.src, u = new AbortController();
      l.userData && (l.userData.abortController = u);
      const y = this.levels[l.tile.level];
      this.regionToTiffRaster(y, l.tile.x, l.tile.y, u.signal).then(async (w) => {
        if (h) {
          const x = await a.tiffRasterToImageBitmapViaWorker(l.tile, w);
          l.finish(x, d, "imageBitmap");
          return;
        }
        const b = await Promise.resolve(a.rasterToContext2d(l.tile, w));
        l.finish(b.canvas);
      }).catch((w) => {
        const b = w && w.message ? w.message : String(w);
        h ? l.fail(b) : l.finish(null, d, b);
      });
    }
    downloadTileAbort(l) {
      const h = l.userData && l.userData.abortController;
      h ? h.abort() : $.console.error("Could not abort download: controller not available.");
    }
    setupComplete() {
      this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
    }
    setupLevels() {
      if (this._ready)
        return;
      let l = this.GeoTIFFImages.sort((b, x) => x.getWidth() - b.getWidth()), h = this._tileSize, d = this._tileSize, u = l[0].getWidth();
      this.width = u;
      let y = l[0].getHeight();
      if (this.height = y, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new r.Point(this.width, this.height), l.reduce(
        (b, x) => (b.width !== -1 && (b.valid = b.valid && x.getWidth() < b.width), b.width = x.getWidth(), b),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = l.map((b) => {
          let x = b.getWidth(), T = b.getHeight();
          return {
            width: x,
            height: T,
            tileWidth: this.options.tileWidth || b.getTileWidth() || h,
            tileHeight: this.options.tileHeight || b.getTileHeight() || d,
            image: b,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let b = Math.ceil(
          Math.log2(Math.max(u / h, y / d))
        ), x = [...Array(b).keys()].filter((T) => T % 2 == 0);
        this.levels = x.map((T) => {
          let P = Math.pow(2, T);
          const R = l.filter((p) => {
            const I = Math.pow(2, T - 1);
            return I >= 0 ? p.getWidth() * I < u && p.getWidth() * P >= u : p.getWidth() * P >= u;
          });
          if (R.length === 0)
            return null;
          const m = R[0];
          return {
            width: u / P,
            height: y / P,
            tileWidth: this.options.tileWidth || m.getTileWidth() || h,
            tileHeight: this.options.tileHeight || m.getTileHeight() || d,
            image: m,
            scaleFactor: P * m.getWidth() / u
          };
        }).filter((T) => T !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((b, x) => b.width - x.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
    }
    static getGeoTiffFileDirectory(l) {
      var h;
      return ((h = l.getFileDirectory) == null ? void 0 : h.call(l)) ?? l.fileDirectory ?? {};
    }
    static getGeoTiffFileKey(l) {
      return [
        l.getWidth(),
        l.getHeight(),
        this.getGeoTiffFileDirectory(l).TileWidth ?? 0,
        this.getGeoTiffFileDirectory(l).TileLength ?? 0,
        (l.getWidth() / l.getHeight()).toFixed(6)
      ].join("|");
    }
    /**
     * Aperio-style companion pages (macro / label) use line 1 of ImageDescription; they must not
     * participate in IFD pyramid detection when mixed with the main slide.
     */
    static isSvsStyleCompanionPage(l) {
      var y;
      const h = (y = l.fileDirectory) == null ? void 0 : y.ImageDescription;
      if (typeof h != "string" || !h) return !1;
      const u = (h.split(`
`)[1] ?? "").toLowerCase();
      return u.includes("macro") || u.includes("label");
    }
    static _uniqueByDecreasingSize(l) {
      const h = l.map((y) => ({ im: y, w: y.getWidth(), h: y.getHeight() })).sort((y, w) => w.w - y.w), d = [], u = /* @__PURE__ */ new Set();
      for (const { im: y, w, h: b } of h) {
        const x = `${w}x${b}`;
        u.has(x) || (u.add(x), d.push(y));
      }
      return d;
    }
    static async resolveLayout(l, h, d = {}) {
      const u = d.layout || {}, y = u.pyramid || "auto", w = Number.isFinite(u.planeIndex) ? u.planeIndex : 0, b = u.prefer === "stack" ? "stack" : "pyramid", x = /* @__PURE__ */ new Map();
      for (const S of h) {
        const _ = this.getGeoTiffFileKey(S);
        S.__key = _;
        const E = x.get(_) || [];
        E.push(S), x.set(_, E);
      }
      const T = this._uniqueByDecreasingSize(h), P = h.filter((S) => !this.isSvsStyleCompanionPage(S)), R = this._uniqueByDecreasingSize(P), m = (S) => {
        if (S.length < 2) return !1;
        for (let E = 1; E < S.length; E++)
          if (S[E].getWidth() >= S[E - 1].getWidth() || S[E].getHeight() >= S[E - 1].getHeight()) return !1;
        const _ = S[0].getWidth() / S[0].getHeight();
        for (const E of S) {
          const U = E.getWidth() / E.getHeight();
          if (Math.abs(U - _) > 0.01) return !1;
        }
        return !0;
      }, p = m(T), I = m(R), C = h.some(
        (S) => this.isSvsStyleCompanionPage(S)
      );
      let F = p, A = !F && I;
      C && I && (A = !0, F = !1);
      const D = F || A, k = F ? T : A ? R : T, N = h.some((S) => {
        const _ = this.getGeoTiffFileDirectory(S).SubIFDs;
        return _ && _.length;
      });
      let v = "single";
      y === "ifd" ? v = D ? "ifd" : "single" : y === "subifd" ? v = N ? "subifd" : "single" : D ? v = "ifd" : N ? v = "subifd" : v = "single";
      const G = T[0], M = G.__key, O = x.get(M) || [G], L = O[Math.max(0, Math.min(O.length - 1, w))];
      return b === "stack" && O.length > 1 && v === "ifd" && (v = "single"), v === "subifd" && (te(`${L.__key}-subifd-warn`, `[GeoTIFFTileSource] File was detected to contain SubIFD pyramids, 
however, geotiff.js does not support reading SubIFD files and is unable to display the pyramid. Only the
high-resolution lowest level will be shown. Note that loading such data can crash your browser due to memory consumption.`, "warn"), v = "ifd"), { strategy: v, planes: O, chosenPlane: L, ifdLevelsLargestToSmallest: k };
    }
    static async buildLevelImages(l, h, d) {
      const { strategy: u, chosenPlane: y, ifdLevelsLargestToSmallest: w, planes: b } = h, x = (T) => {
        var P;
        return ((P = T.getFileDirectory) == null ? void 0 : P.call(T)) ?? T.fileDirectory ?? {};
      };
      if (u === "ifd") {
        const T = [...w].sort((P, R) => P.getWidth() - R.getWidth());
        return b.length > 1 && te(d, `[GeoTIFFTileSource] Detected a plane stack (${b.length} same-size IFDs) AND a top-level pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose a different plane.`, "warn"), T;
      }
      if (u === "subifd") {
        const P = x(y).SubIFDs;
        if (!P || !P.length)
          return te(d, "[GeoTIFFTileSource] SubIFD pyramid requested/detected but the chosen plane has no SubIFDs. Falling back to single level.", "warn"), [y];
        if (typeof y.getSubIFDs == "function") {
          const m = [...await y.getSubIFDs(), y].sort((p, I) => p.getWidth() - I.getWidth());
          return b.length > 1 && te(d, `[GeoTIFFTileSource] Detected a plane stack (${b.length} same-size IFDs) with SubIFD pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), m;
        }
        return te(d, "[GeoTIFFTileSource] SubIFDs are present but geotiff.js does not expose getSubIFDs() in this build. Using single level. (You can still render multi-plane data via your GPU pipeline.)", "warn"), [y];
      }
      return b.length > 1 && te(d, `[GeoTIFFTileSource] Detected ${b.length} same-size IFD pages (likely channels/planes). No pyramid detected. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), [y];
    }
    regionToTiffRaster(l, h, d, u) {
      var m, p, I, C;
      const y = this.options.logLatency && Date.now(), w = l.tileWidth, b = l.tileHeight, x = [h * w, d * b, (h + 1) * w, (d + 1) * b].map(
        (F) => F * l.scaleFactor
      ), T = l.image, P = (p = (m = T.fileDirectory) == null ? void 0 : m.Software) == null ? void 0 : p.startsWith("PerkinElmer-QPI");
      let R = null;
      if (P && ((I = T.fileDirectory) != null && I.ImageDescription))
        try {
          const A = (C = new DOMParser().parseFromString(T.fileDirectory.ImageDescription, "text/xml").querySelector("Color")) == null ? void 0 : C.textContent;
          R = A ? A.split(",").map((D) => parseInt(D, 10)) : null;
        } catch {
          R = null;
        }
      return T.readRasters({
        interleave: !1,
        window: x,
        pool: this._pool,
        width: w,
        height: b,
        signal: u
      }).then((F) => {
        const A = Array.isArray(F) ? F : [F], D = T.fileDirectory || {}, k = new a.TiffRaster({
          width: w,
          height: b,
          bands: A,
          samplesPerPixel: Math.max(D.SamplesPerPixel || 0, A.length),
          bitsPerSample: D.BitsPerSample || [8],
          sampleFormat: D.SampleFormat || null,
          photometricInterpretation: D.PhotometricInterpretation,
          colorMap: D.ColorMap || null,
          fileDirectory: D,
          hints: {
            ...this.channel ? { channel: this.channel } : {},
            ...R ? { tintRGB: R } : {}
          }
        });
        return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
          "Tile decode latency (ms):",
          Date.now() - y
        ), k;
      });
    }
  };
  /**
   * Create a shared GeoTIFF Pool for all GeoTIFFTileSources to use.
   *
   * If a shared pool is not created, every page of every GeoTIFF will create its own pool,
   * which can quickly lead to browser crashes.
   *
   * @static sharedPool
   * @type {Pool}
   */
  Be(f, "sharedPool", new Ut()), Be(f, "userDefinedImagesFilter", (l, h) => (typeof h.imagesFilter < "u" && h.imagesFilter && (Array.isArray(h.imagesFilter) ? l = l.filter((d, u) => h.imagesFilter.includes(u)) : typeof h.imagesFilter == "function" && (l = l.filter(h.imagesFilter)), h.imagesFilter = void 0), l));
  let c = f;
  r.GeoTIFFTileSource = c;
};
(function(r, e) {
  typeof exports > "u" || typeof r.OpenSeadragon < "u" && e(r.OpenSeadragon);
})(typeof window < "u" ? window : void 0, Qn);
export {
  _n as B,
  Pr as L,
  Ar as a,
  Qn as e,
  It as g
};
//# sourceMappingURL=main-B4lYUHQK.js.map

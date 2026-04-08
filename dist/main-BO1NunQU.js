var Ht = Object.defineProperty;
var qt = (r, e, t) => e in r ? Ht(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Re = (r, e, t) => qt(r, typeof e != "symbol" ? e + "" : e, t);
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
  getPrototypeOf: $e,
  ownKeys: Vt
} = Reflect, {
  iterator: be,
  toStringTag: Yt
} = Symbol, Xt = Object, {
  create: ze,
  defineProperty: Zt
} = Xt, Jt = Array, Qt = Jt.prototype, ft = Qt[be], er = j(ft), ht = ArrayBuffer, tr = ht.prototype;
ge(tr, "byteLength");
const nt = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
nt && ge(nt.prototype, "byteLength");
const ut = $e(Uint8Array);
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
const rr = Uint8Array, gt = Uint16Array, Ke = Uint32Array, nr = Float32Array, ye = $e([][be]()), dt = j(ye.next), ir = j(function* () {
}().next), sr = $e(ye), or = DataView.prototype, ar = j(
  or.getUint16
), He = WeakMap, pt = He.prototype, mt = j(pt.get), lr = j(pt.set), yt = new He(), cr = ze(null, {
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
  if (r[be] === ft && ye.next === dt)
    return r;
  const e = ze(cr);
  return lr(yt, e, er(r)), e;
}
const hr = new He(), ur = ze(sr, {
  next: {
    value: function() {
      const e = mt(hr, this);
      return ir(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const r of Vt(ye))
  r !== "next" && Zt(ur, r, ct(ye, r));
const wt = new ht(4), gr = new nr(wt), dr = new Ke(wt), J = new gt(512), Q = new rr(512);
for (let r = 0; r < 256; ++r) {
  const e = r - 127;
  e < -24 ? (J[r] = 0, J[r | 256] = 32768, Q[r] = 24, Q[r | 256] = 24) : e < -14 ? (J[r] = 1024 >> -e - 14, J[r | 256] = 1024 >> -e - 14 | 32768, Q[r] = -e - 1, Q[r | 256] = -e - 1) : e <= 15 ? (J[r] = e + 15 << 10, J[r | 256] = e + 15 << 10 | 32768, Q[r] = 13, Q[r | 256] = 13) : e < 128 ? (J[r] = 31744, J[r | 256] = 64512, Q[r] = 24, Q[r | 256] = 24) : (J[r] = 31744, J[r | 256] = 64512, Q[r] = 13, Q[r | 256] = 13);
}
const qe = new Ke(2048);
for (let r = 1; r < 1024; ++r) {
  let e = r << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, qe[r] = e | t;
}
for (let r = 1024; r < 2048; ++r)
  qe[r] = 939524096 + (r - 1024 << 13);
const de = new Ke(64);
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
  return dr[0] = qe[bt[e] + (r & 1023)] + de[e], gr[0];
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
    const d = new RegExp(f).exec(s);
    if (n && console.log("[xml-utils] match:", d), d) return d[1];
  }
}
We.exports = Tt;
We.exports.default = Tt;
var mr = We.exports;
const Be = /* @__PURE__ */ It(mr);
var Ve = { exports: {} }, Ye = { exports: {} }, Xe = { exports: {} };
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
const xr = yr, ve = wr, it = br;
function At(r, e, t) {
  const n = t && t.debug || !1, i = !(t && typeof t.nested === !1), s = t && t.startIndex || 0;
  n && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const a = xr(r, `<${e}[ 
>/]`, s);
  if (n && console.log("[xml-utils] start:", a), a === -1) return;
  const o = r.slice(a + e.length);
  let c = ve(o, "^[^<]*[ /]>", 0);
  const f = c !== -1 && o[c - 1] === "/";
  if (n && console.log("[xml-utils] selfClosing:", f), f === !1)
    if (i) {
      let h = 0, g = 1, p = 0;
      for (; (c = ve(o, "[ /]" + e + ">", h)) !== -1; ) {
        const w = o.substring(h, c + 1);
        if (g += it(w, "<" + e + `[ 
	>]`), p += it(w, "</" + e + ">"), p >= g) break;
        h = c;
      }
    } else
      c = ve(o, "[ /]" + e + ">", 0);
  const u = a + e.length + c + 1;
  if (n && console.log("[xml-utils] end:", u), u === -1) return;
  const d = r.slice(a, u);
  let l;
  return f ? l = null : l = d.slice(d.indexOf(">") + 1, d.lastIndexOf("<")), { inner: l, outer: d, start: a, end: u };
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
Ve.exports = Dt;
Ve.exports.default = Dt;
var Sr = Ve.exports;
const Fr = /* @__PURE__ */ It(Sr), ae = {
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
}, X = {};
for (const r in ae)
  ae.hasOwnProperty(r) && (X[ae[r]] = parseInt(r, 10));
const Fe = {
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
  X.BitsPerSample,
  X.ExtraSamples,
  X.SampleFormat,
  X.StripByteCounts,
  X.StripOffsets,
  X.StripRowCounts,
  X.TileByteCounts,
  X.TileOffsets,
  X.SubIFDs
], me = {
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
}, O = {};
for (const r in me)
  me.hasOwnProperty(r) && (O[me[r]] = parseInt(r, 10));
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
}, fe = {
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
for (const r in fe)
  fe.hasOwnProperty(r) && (Rt[fe[r]] = parseInt(r, 10));
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExtraSamplesValues: Ct,
  LercAddCompression: Ar,
  LercParameters: Pr,
  arrayFields: kt,
  fieldTagNames: ae,
  fieldTagTypes: Fe,
  fieldTags: X,
  fieldTypeNames: me,
  fieldTypes: O,
  geoKeyNames: fe,
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
    let f = (a + 16) / 116, u = o / 500 + f, d = f - c / 200, l, h, g;
    u = kr * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), f = Cr * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), d = Rr * (d * d * d > 8856e-6 ? d * d * d : (d - 16 / 116) / 7.787), l = u * 3.2406 + f * -1.5372 + d * -0.4986, h = u * -0.9689 + f * 1.8758 + d * 0.0415, g = u * 0.0557 + f * -0.204 + d * 1.057, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : 12.92 * l, h = h > 31308e-7 ? 1.055 * h ** (1 / 2.4) - 0.055 : 12.92 * h, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, n[s] = Math.max(0, Math.min(1, l)) * 255, n[s + 1] = Math.max(0, Math.min(1, h)) * 255, n[s + 2] = Math.max(0, Math.min(1, g)) * 255;
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
re([void 0, 1], () => import("./raw-BG06isCg.js").then((r) => r.default));
re(5, () => import("./lzw-CI7OwFRW.js").then((r) => r.default));
re(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
re(7, () => import("./jpeg-Bqm5hFZ3.js").then((r) => r.default));
re([8, 32946], () => import("./deflate-DzJutk3i.js").then((r) => r.default));
re(32773, () => import("./packbits-3wkdP8an.js").then((r) => r.default));
re(
  34887,
  () => import("./lerc-BqNtjnb8.js").then(async (r) => (await r.zstd.init(), r)).then((r) => r.default)
);
re(50001, () => import("./webimage-CQdjQ1lQ.js").then((r) => r.default));
function Pe(r, e, t, n = 1) {
  return new (Object.getPrototypeOf(r)).constructor(e * t * n);
}
function vr(r, e, t, n, i) {
  const s = e / n, a = t / i;
  return r.map((o) => {
    const c = Pe(o, n, i);
    for (let f = 0; f < i; ++f) {
      const u = Math.min(Math.round(a * f), t - 1);
      for (let d = 0; d < n; ++d) {
        const l = Math.min(Math.round(s * d), e - 1), h = o[u * e + l];
        c[f * n + d] = h;
      }
    }
    return c;
  });
}
function he(r, e, t) {
  return (1 - t) * r + t * e;
}
function Gr(r, e, t, n, i) {
  const s = e / n, a = t / i;
  return r.map((o) => {
    const c = Pe(o, n, i);
    for (let f = 0; f < i; ++f) {
      const u = a * f, d = Math.floor(u), l = Math.min(Math.ceil(u), t - 1);
      for (let h = 0; h < n; ++h) {
        const g = s * h, p = g % 1, w = Math.floor(g), T = Math.min(Math.ceil(g), e - 1), b = o[d * e + w], F = o[d * e + T], S = o[l * e + w], A = o[l * e + T], y = he(
          he(b, F, p),
          he(S, A, p),
          u % 1
        );
        c[f * n + h] = y;
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
  const a = e / n, o = t / i, c = Pe(r, n, i, s);
  for (let f = 0; f < i; ++f) {
    const u = Math.min(Math.round(o * f), t - 1);
    for (let d = 0; d < n; ++d) {
      const l = Math.min(Math.round(a * d), e - 1);
      for (let h = 0; h < s; ++h) {
        const g = r[u * e * s + l * s + h];
        c[f * n * s + d * s + h] = g;
      }
    }
  }
  return c;
}
function _r(r, e, t, n, i, s) {
  const a = e / n, o = t / i, c = Pe(r, n, i, s);
  for (let f = 0; f < i; ++f) {
    const u = o * f, d = Math.floor(u), l = Math.min(Math.ceil(u), t - 1);
    for (let h = 0; h < n; ++h) {
      const g = a * h, p = g % 1, w = Math.floor(g), T = Math.min(Math.ceil(g), e - 1);
      for (let b = 0; b < s; ++b) {
        const F = r[d * e * s + w * s + b], S = r[d * e * s + T * s + b], A = r[l * e * s + w * s + b], y = r[l * e * s + T * s + b], m = he(
          he(F, S, p),
          he(A, y, p),
          u % 1
        );
        c[f * n * s + h * s + b] = m;
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
function Oe(r, e, t) {
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
  const o = new DataView(r), c = t === 2 ? a * s : a * s * n, f = t === 2 ? 1 : n, u = Oe(e, i, c), d = parseInt("1".repeat(i), 2);
  if (e === 1) {
    let l;
    t === 1 ? l = n * i : l = i;
    let h = s * l;
    h & 7 && (h = h + 7 & -8);
    for (let g = 0; g < a; ++g) {
      const p = g * h;
      for (let w = 0; w < s; ++w) {
        const T = p + w * f * i;
        for (let b = 0; b < f; ++b) {
          const F = T + b * i, S = (g * s + w) * f + b, A = Math.floor(F / 8), y = F % 8;
          if (y + i <= 8)
            u[S] = o.getUint8(A) >> 8 - i - y & d;
          else if (y + i <= 16)
            u[S] = o.getUint16(A) >> 16 - i - y & d;
          else if (y + i <= 24) {
            const m = o.getUint16(A) << 8 | o.getUint8(A + 2);
            u[S] = m >> 24 - i - y & d;
          } else
            u[S] = o.getUint32(A) >> 32 - i - y & d;
        }
      }
    }
  }
  return u.buffer;
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
    return Oe(n, i, t);
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
    let u, d;
    this.isTiled ? (u = this.fileDirectory.TileOffsets[c], d = this.fileDirectory.TileByteCounts[c]) : (u = this.fileDirectory.StripOffsets[c], d = this.fileDirectory.StripByteCounts[c]);
    const l = (await this.source.fetch([{ offset: u, length: d }], s))[0];
    let h;
    return f === null || !f[c] ? (h = (async () => {
      let g = await i.decode(this.fileDirectory, l);
      const p = this.getSampleFormat(), w = this.getBitsPerSample();
      return Lr(p, w) && (g = Nr(
        g,
        p,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        w,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), g;
    })(), f !== null && (f[c] = h)) : h = f[c], { x: e, y: t, sample: n, data: await h };
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
    const u = this.getTileWidth(), d = this.getTileHeight(), l = this.getWidth(), h = this.getHeight(), g = Math.max(Math.floor(e[0] / u), 0), p = Math.min(
      Math.ceil(e[2] / u),
      Math.ceil(l / u)
    ), w = Math.max(Math.floor(e[1] / d), 0), T = Math.min(
      Math.ceil(e[3] / d),
      Math.ceil(h / d)
    ), b = e[2] - e[0];
    let F = this.getBytesPerPixel();
    const S = [], A = [];
    for (let x = 0; x < t.length; ++x)
      this.planarConfiguration === 1 ? S.push(Ur(this.fileDirectory.BitsPerSample, 0, t[x]) / 8) : S.push(0), A.push(this.getReaderForSample(t[x]));
    const y = [], { littleEndian: m } = this;
    for (let x = w; x < T; ++x)
      for (let k = g; k < p; ++k) {
        let U;
        this.planarConfiguration === 1 && (U = this.getTileOrStrip(k, x, 0, s, f));
        for (let C = 0; C < t.length; ++C) {
          const E = C, P = t[C];
          this.planarConfiguration === 2 && (F = this.getSampleByteSize(P), U = this.getTileOrStrip(k, x, P, s, f));
          const N = U.then((D) => {
            const I = D.data, v = new DataView(I), R = this.getBlockHeight(D.y), L = D.y * d, G = D.x * u, B = L + R, M = (D.x + 1) * u, _ = A[E], W = Math.min(R, R - (B - e[3]), h - L), Y = Math.min(u, u - (M - e[2]), l - G);
            for (let V = Math.max(0, e[1] - L); V < W; ++V)
              for (let ie = Math.max(0, e[0] - G); ie < Y; ++ie) {
                const Kt = (V * u + ie) * F, rt = _.call(
                  v,
                  Kt + S[E],
                  m
                );
                let Ie;
                i ? (Ie = (V + L - e[1]) * b * t.length + (ie + G - e[0]) * t.length + E, n[Ie] = rt) : (Ie = (V + L - e[1]) * b + ie + G - e[0], n[E][Ie] = rt);
              }
          });
          y.push(N);
        }
      }
    if (await Promise.all(y), a && e[2] - e[0] !== a || o && e[3] - e[1] !== o) {
      let x;
      return i ? x = Mr(
        n,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        t.length,
        c
      ) : x = Or(
        n,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        c
      ), x.width = a, x.height = o, x;
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
    const u = e || [0, 0, this.getWidth(), this.getHeight()];
    if (u[0] > u[2] || u[1] > u[3])
      throw new Error("Invalid subsets");
    const d = u[2] - u[0], l = u[3] - u[1], h = d * l, g = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let b = 0; b < g; ++b)
        t.push(b);
    else
      for (let b = 0; b < t.length; ++b)
        if (t[b] >= g)
          return Promise.reject(new RangeError(`Invalid sample index '${t[b]}'.`));
    let p;
    if (n) {
      const b = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, F = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      p = Oe(b, F, h * t.length), c && p.fill(c);
    } else {
      p = [];
      for (let b = 0; b < t.length; ++b) {
        const F = this.getArrayForSample(t[b], h);
        Array.isArray(c) && b < c.length ? F.fill(c[b]) : c && !Array.isArray(c) && F.fill(c), p.push(F);
      }
    }
    const w = i || await Qe(this.fileDirectory);
    return await this._readRaster(
      u,
      t,
      p,
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
    const u = this.fileDirectory.PhotometricInterpretation;
    if (u === z.RGB) {
      let T = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Ct.Unspecified && o) {
        T = [];
        for (let b = 0; b < this.fileDirectory.BitsPerSample.length; b += 1)
          T.push(b);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: T,
        pool: n,
        width: i,
        height: s,
        resampleMethod: a,
        signal: c
      });
    }
    let d;
    switch (u) {
      case z.WhiteIsZero:
      case z.BlackIsZero:
      case z.Palette:
        d = [0];
        break;
      case z.CMYK:
        d = [0, 1, 2, 3];
        break;
      case z.YCbCr:
      case z.CIELab:
        d = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const l = {
      window: f,
      interleave: !0,
      samples: d,
      pool: n,
      width: i,
      height: s,
      resampleMethod: a,
      signal: c
    }, { fileDirectory: h } = this, g = await this.readRasters(l), p = 2 ** this.fileDirectory.BitsPerSample[0];
    let w;
    switch (u) {
      case z.WhiteIsZero:
        w = Bt(g, p);
        break;
      case z.BlackIsZero:
        w = vt(g, p);
        break;
      case z.Palette:
        w = Gt(g, h.ColorMap);
        break;
      case z.CMYK:
        w = Ot(g);
        break;
      case z.YCbCr:
        w = Et(g);
        break;
      case z.CIELab:
        w = _t(g);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const T = new Uint8Array(w.length / 3), b = new Uint8Array(w.length / 3), F = new Uint8Array(w.length / 3);
      for (let S = 0, A = 0; S < w.length; S += 3, ++A)
        T[A] = w[S], b[A] = w[S + 1], F[A] = w[S + 2];
      w = [T, b, F];
    }
    return w.width = g.width, w.height = g.height, w;
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
    e === null ? i = i.filter((s) => Be(s, "sample") === void 0) : i = i.filter((s) => Number(Be(s, "sample")) === e);
    for (let s = 0; s < i.length; ++s) {
      const a = i[s];
      t[Be(a, "name")] = a.inner;
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
      const [i, s, a, o, c, f, u, d] = this.fileDirectory.ModelTransformation, h = [
        [0, 0],
        [0, t],
        [n, 0],
        [n, t]
      ].map(([w, T]) => [
        o + i * w + s * T,
        d + c * w + f * T
      ]), g = h.map((w) => w[0]), p = h.map((w) => w[1]);
      return [
        Math.min(...g),
        Math.min(...p),
        Math.max(...g),
        Math.max(...p)
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
class $r {
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
const zr = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
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
  constructor(e = zr, t) {
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
function Kr(r) {
  const e = r.split(`\r
`).map((t) => {
    const n = t.split(":").map((i) => i.trim());
    return n[0] = n[0].toLowerCase(), n;
  });
  return Lt(e);
}
function Hr(r) {
  const [e, ...t] = r.split(";").map((i) => i.trim()), n = t.map((i) => i.split("="));
  return { type: e, params: Lt(n) };
}
function Ee(r) {
  let e, t, n;
  return r && ([, e, t, n] = r.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), n = parseInt(n, 10)), { start: e, end: t, total: n };
}
function qr(r, e) {
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
    const f = c.indexOf(st), u = Kr(c.substr(0, f)), { start: d, end: l, total: h } = Ee(u["content-range"]), g = t + s.length + f + st.length, p = parseInt(l, 10) + 1 - parseInt(d, 10);
    i.push({
      headers: u,
      data: r.slice(g, g + p),
      offset: d,
      length: p,
      fileSize: h
    }), t = g + p + 4;
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
function Vr(r, e) {
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
class le extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, le), this.name = "AbortError";
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
    for (const { offset: l, length: h } of e) {
      let g = l + h;
      const { fileSize: p } = this;
      p !== null && (g = Math.min(g, p));
      const w = Math.floor(l / this.blockSize) * this.blockSize;
      for (let T = w; T < g; T += this.blockSize) {
        const b = Math.floor(T / this.blockSize);
        !this.blockCache.has(b) && !this.blockRequests.has(b) && (this.blockIdsToFetch.add(b), i.push(b)), this.blockRequests.has(b) && n.push(this.blockRequests.get(b)), s.push(b);
      }
    }
    await Yr(), this.fetchBlocks(t);
    const a = [];
    for (const l of i)
      this.blockRequests.has(l) && a.push(this.blockRequests.get(l));
    await Promise.allSettled(n), await Promise.allSettled(a);
    const o = [], c = s.filter((l) => this.abortedBlockIds.has(l) || !this.blockCache.has(l));
    if (c.forEach((l) => this.blockIdsToFetch.add(l)), c.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const l of c) {
        const h = this.blockRequests.get(l);
        if (!h)
          throw new Error(`Block ${l} is not in the block requests`);
        o.push(h);
      }
      await Promise.allSettled(o);
    }
    if (t && t.aborted)
      throw new le("Request was aborted");
    const f = s.map((l) => this.blockCache.get(l) || this.evictedBlocks.get(l)), u = f.filter((l) => !l);
    if (u.length)
      throw new Jr(u, "Request failed");
    const d = new Map(Xr(s, f));
    return this.readSliceData(e, d);
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
              const o = (await n)[i], c = a * this.blockSize, f = c - o.offset, u = Math.min(f + this.blockSize, o.data.byteLength), d = o.data.slice(f, u), l = new Qr(
                c,
                d.byteLength,
                d,
                a
              );
              this.blockCache.set(a, l), this.abortedBlockIds.delete(a);
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
        const u = t.get(f), d = u.offset - n.offset, l = u.top - i;
        let h = 0, g = 0, p;
        d < 0 ? h = -d : d > 0 && (g = d), l < 0 ? p = u.length - h : p = i - u.offset - h;
        const w = new Uint8Array(u.data, h, p);
        c.set(w, g);
      }
      return o;
    });
  }
}
class Ae {
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
class De {
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
class tn extends Ae {
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
class rn extends De {
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
class nn extends Ae {
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
class sn extends De {
  constructRequest(e, t) {
    return new Promise((n, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", this.url), s.responseType = "arraybuffer";
      for (const [a, o] of Object.entries(e))
        s.setRequestHeader(a, o);
      s.onload = () => {
        const a = s.response;
        n(new nn(s, a));
      }, s.onerror = i, s.onabort = () => i(new le("Request aborted")), s.send(), t && (t.aborted && s.abort(), t.addEventListener("abort", () => s.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const ue = {};
class on extends Ae {
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
class an extends De {
  constructor(e) {
    super(e), this.parsedUrl = ue.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", ue);
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
            a.on("data", (u) => {
              f.push(u);
            }), a.on("end", () => {
              const u = Buffer.concat(f).buffer;
              c(u);
            }), a.on("error", i);
          });
          n(new on(a, o));
        }
      );
      s.on("error", i), t && (t.aborted && s.destroy(new le("Request aborted")), t.addEventListener("abort", () => s.destroy(new le("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class ke extends xe {
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
        const { type: i, params: s } = Hr(n.getHeader("content-type"));
        if (i === "multipart/byteranges") {
          const d = qr(await n.getData(), s.boundary);
          return this._fileSize = d[0].fileSize || null, d;
        }
        const a = await n.getData(), { start: o, end: c, total: f } = Ee(n.getHeader("content-range"));
        this._fileSize = f || null;
        const u = [{
          data: a,
          offset: o,
          length: c - o
        }];
        if (e.length > 1) {
          const d = await Promise.all(e.slice(1).map((l) => this.fetchSlice(l, t)));
          return u.concat(d);
        }
        return u;
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
        const a = await s.getData(), { total: o } = Ee(s.getHeader("content-range"));
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
function Ce(r, { blockSize: e, cacheSize: t }) {
  return e === null ? r : new en(r, { blockSize: e, cacheSize: t });
}
function ln(r, { headers: e = {}, credentials: t, maxRanges: n = 0, allowFullFile: i = !1, ...s } = {}) {
  const a = new rn(r, t), o = new ke(a, e, n, i);
  return Ce(o, s);
}
function cn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new sn(r), a = new ke(s, e, t, n);
  return Ce(a, i);
}
function fn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new an(r), a = new ke(s, e, t, n);
  return Ce(a, i);
}
function hn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new ke(r, e, t, n);
  return Ce(s, i);
}
function _e(r, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? ln(r, t) : typeof XMLHttpRequest < "u" ? cn(r, t) : fn(r, t);
}
class un extends xe {
  constructor(e) {
    super(), this.arrayBuffer = e;
  }
  fetchSlice(e, t) {
    if (t && t.aborted)
      throw new le("Request aborted");
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
    ue.close(r, (n) => {
      n ? t(n) : e();
    });
  });
}
function yn(r, e, t = void 0) {
  return new Promise((n, i) => {
    ue.open(r, e, t, (s, a) => {
      s ? i(s) : n(a);
    });
  });
}
function wn(...r) {
  return new Promise((e, t) => {
    ue.read(...r, (n, i, s) => {
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
const In = tt(ae), Tn = tt(fe), ee = {};
Nt(ee, In);
Nt(ee, Tn);
const Sn = tt(me), Se = 1e3, K = {
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
    const f = Fe[c], u = Sn[f];
    if (f == null || f === void 0 || typeof f > "u")
      throw new Error(`unknown type of tag: ${c}`);
    let d = n[o];
    if (d === void 0)
      throw new Error(`failed to get value for key ${o}`);
    f === "ASCII" && typeof d == "string" && jt(d, "\0") === !1 && (d += "\0");
    const l = d.length;
    r.writeUshort(e, i, c), i += 2, r.writeUshort(e, i, u), i += 2, r.writeUint(e, i, l), i += 4;
    let h = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][u] * l, g = i;
    h > 4 && (r.writeUint(e, i, a), g = a), f === "ASCII" ? r.writeASCII(e, g, d) : f === "SHORT" ? q(l, (p) => {
      r.writeUshort(e, g + 2 * p, d[p]);
    }) : f === "LONG" ? q(l, (p) => {
      r.writeUint(e, g + 4 * p, d[p]);
    }) : f === "RATIONAL" ? q(l, (p) => {
      r.writeUint(e, g + 8 * p, Math.round(d[p] * 1e4)), r.writeUint(e, g + 8 * p + 4, 1e4);
    }) : f === "DOUBLE" && q(l, (p) => {
      r.writeDouble(e, g + 8 * p, d[p]);
    }), h > 4 && (h += h & 1, a += h), i += 4;
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
  }), Vr(a, (f, u) => {
    c[Se + u] = f;
  }), c.buffer;
}, Dn = (r) => {
  const e = {};
  for (const t in r)
    t !== "StripOffsets" && (ee[t] || console.error(t, "not in name2code:", Object.keys(ee)), e[ee[t]] = r[t]);
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
  t ? (n = e.height || e.ImageLength, s = e.width || e.ImageWidth, i = r.length / (n * s), a = r) : (i = r.length, n = r[0].length, s = r[0][0].length, a = [], q(n, (u) => {
    q(s, (d) => {
      q(i, (l) => {
        a.push(r[l][u][d]);
      });
    });
  })), e.ImageLength = n, delete e.height, e.ImageWidth = s, delete e.width, e.BitsPerSample || (e.BitsPerSample = q(i, () => 8)), Cn.forEach((u) => {
    const d = u[0];
    if (!e[d]) {
      const l = u[1];
      e[d] = l;
    }
  }), e.PhotometricInterpretation || (e.PhotometricInterpretation = e.BitsPerSample.length === 3 ? 2 : 1), e.SamplesPerPixel || (e.SamplesPerPixel = [i]), e.StripByteCounts || (e.StripByteCounts = [i * n * s]), e.ModelPixelScale || (e.ModelPixelScale = [360 / s, 180 / n, 0]), e.SampleFormat || (e.SampleFormat = q(i, () => 1)), !e.hasOwnProperty("GeographicTypeGeoKey") && !e.hasOwnProperty("ProjectedCSTypeGeoKey") && (e.GeographicTypeGeoKey = 4326, e.ModelTiepoint = [0, 0, 0, -180, 90, 0], e.GeogCitationGeoKey = "WGS 84", e.GTModelTypeGeoKey = 2);
  const o = Object.keys(e).filter((u) => jt(u, "GeoKey")).sort((u, d) => ee[u] - ee[d]);
  if (!e.GeoAsciiParams) {
    let u = "";
    o.forEach((d) => {
      const l = Number(ee[d]);
      Fe[l] === "ASCII" && (u += `${e[d].toString()}\0`);
    }), u.length > 0 && (e.GeoAsciiParams = u);
  }
  if (!e.GeoKeyDirectory) {
    const d = [1, 1, 0, o.length];
    o.forEach((l) => {
      const h = Number(ee[l]);
      d.push(h);
      let g, p, w;
      Fe[h] === "SHORT" ? (g = 1, p = 0, w = e[l]) : l === "GeogCitationGeoKey" ? (g = e.GeoAsciiParams.length, p = Number(ee.GeoAsciiParams), w = 0) : console.log(`[geotiff.js] couldn't get TIFFTagLocation for ${l}`), d.push(p), d.push(g), d.push(w);
    }), e.GeoKeyDirectory = d;
  }
  for (const u of o)
    e.hasOwnProperty(u) && delete e[u];
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
  ].forEach((u) => {
    e[u] && (e[u] = kn(e[u]));
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
function Me(r) {
  switch (r) {
    case O.BYTE:
    case O.ASCII:
    case O.SBYTE:
    case O.UNDEFINED:
      return 1;
    case O.SHORT:
    case O.SSHORT:
      return 2;
    case O.LONG:
    case O.SLONG:
    case O.FLOAT:
    case O.IFD:
      return 4;
    case O.RATIONAL:
    case O.SRATIONAL:
    case O.DOUBLE:
    case O.LONG8:
    case O.SLONG8:
    case O.IFD8:
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
    const i = fe[e[n]], s = e[n + 1] ? ae[e[n + 1]] : null, a = e[n + 2], o = e[n + 3];
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
function ce(r, e, t, n) {
  let i = null, s = null;
  const a = Me(e);
  switch (e) {
    case O.BYTE:
    case O.ASCII:
    case O.UNDEFINED:
      i = new Uint8Array(t), s = r.readUint8;
      break;
    case O.SBYTE:
      i = new Int8Array(t), s = r.readInt8;
      break;
    case O.SHORT:
      i = new Uint16Array(t), s = r.readUint16;
      break;
    case O.SSHORT:
      i = new Int16Array(t), s = r.readInt16;
      break;
    case O.LONG:
    case O.IFD:
      i = new Uint32Array(t), s = r.readUint32;
      break;
    case O.SLONG:
      i = new Int32Array(t), s = r.readInt32;
      break;
    case O.LONG8:
    case O.IFD8:
      i = new Array(t), s = r.readUint64;
      break;
    case O.SLONG8:
      i = new Array(t), s = r.readInt64;
      break;
    case O.RATIONAL:
      i = new Uint32Array(t * 2), s = r.readUint32;
      break;
    case O.SRATIONAL:
      i = new Int32Array(t * 2), s = r.readInt32;
      break;
    case O.FLOAT:
      i = new Float32Array(t), s = r.readFloat32;
      break;
    case O.DOUBLE:
      i = new Float64Array(t), s = r.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === O.RATIONAL || e === O.SRATIONAL)
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
  return e === O.ASCII ? new TextDecoder("utf-8").decode(i) : i;
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
class $t {
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
    const u = await this.getImageCount(), d = c.getBoundingBox();
    if (t && o)
      throw new Error('Both "bbox" and "window" passed.');
    if (n || i) {
      if (t) {
        const [g, p] = c.getOrigin(), [w, T] = c.getResolution();
        o = [
          g + t[0] * w,
          p + t[1] * T,
          g + t[2] * w,
          p + t[3] * T
        ];
      }
      const h = o || d;
      if (n) {
        if (s)
          throw new Error("Both width and resX passed");
        s = (h[2] - h[0]) / n;
      }
      if (i) {
        if (a)
          throw new Error("Both width and resY passed");
        a = (h[3] - h[1]) / i;
      }
    }
    if (s || a) {
      const h = [];
      for (let g = 0; g < u; ++g) {
        const p = await this.getImage(g), { SubfileType: w, NewSubfileType: T } = p.fileDirectory;
        (g === 0 || w === 2 || T & 1) && h.push(p);
      }
      h.sort((g, p) => g.getWidth() - p.getWidth());
      for (let g = 0; g < h.length; ++g) {
        const p = h[g], w = (d[2] - d[0]) / p.getWidth(), T = (d[3] - d[1]) / p.getHeight();
        if (f = p, s && s > w || a && a > T)
          break;
      }
    }
    let l = t;
    if (o) {
      const [h, g] = c.getOrigin(), [p, w] = f.getResolution(c);
      l = [
        Math.round((o[0] - h) / p),
        Math.round((o[1] - g) / w),
        Math.round((o[2] - h) / p),
        Math.round((o[3] - g) / w)
      ], l = [
        Math.min(l[0], l[2]),
        Math.min(l[1], l[3]),
        Math.max(l[0], l[2]),
        Math.max(l[1], l[3])
      ];
    }
    return f.readRasters({ ...e, window: l });
  }
}
class Z extends $t {
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
    return new $r(
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
    for (let d = 0; d < s; c += t, ++d) {
      const l = i.readUint16(c), h = i.readUint16(c + 2), g = this.bigTiff ? i.readUint64(c + 4) : i.readUint32(c + 4);
      let p, w;
      const T = Me(h), b = c + (this.bigTiff ? 12 : 8);
      if (T * g <= (this.bigTiff ? 8 : 4))
        p = ce(i, h, g, b);
      else {
        const F = i.readOffset(b), S = Me(h) * g;
        if (i.covers(F, S))
          p = ce(i, h, g, F);
        else {
          const A = await this.getSlice(F, S);
          p = ce(A, h, g, F);
        }
      }
      g === 1 && kt.indexOf(l) === -1 && !(h === O.RATIONAL || h === O.SRATIONAL) ? w = p[0] : w = p, o[ae[l]] = w;
    }
    const f = Mn(o), u = i.readOffset(
      e + n + t * s
    );
    return new Un(
      o,
      f,
      u
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
    if (t === ce(i, O.ASCII, t.length, e)) {
      const a = ce(i, O.ASCII, n, e).split(`
`)[0], o = Number(a.split("=")[1].split(" ")[0]) + a.length;
      o > n && (i = await this.getSlice(e, o));
      const c = ce(i, O.ASCII, o, e);
      this.ghostValues = {}, c.split(`
`).filter((f) => f.length > 0).map((f) => f.split("=")).forEach(([f, u]) => {
        this.ghostValues[f] = u;
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
    const u = f ? s.getUint64(8, o) : s.getUint32(4, o);
    return new Z(e, o, f, u, t);
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
class zt extends $t {
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
async function Ue(r, e = {}, t) {
  return Z.fromSource(_e(r, e), t);
}
async function Ln(r, e = {}, t) {
  return Z.fromSource(hn(r, e), t);
}
async function Le(r, e) {
  return Z.fromSource(gn(r), e);
}
async function Nn(r, e) {
  return Z.fromSource(xn(r), e);
}
async function we(r, e) {
  return Z.fromSource(pn(r), e);
}
async function jn(r, e = [], t = {}, n) {
  const i = await Z.fromSource(_e(r, t), n), s = await Promise.all(
    e.map((a) => Z.fromSource(_e(a, t)))
  );
  return new zt(i, s);
}
function $n(r, e) {
  return Rn(r, e);
}
const zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseClient: De,
  BaseDecoder: _n,
  BaseResponse: Ae,
  GeoTIFF: Z,
  GeoTIFFImage: et,
  MultiGeoTIFF: zt,
  Pool: Ut,
  addDecoder: re,
  default: Z,
  fromArrayBuffer: Le,
  fromBlob: we,
  fromCustomClient: Ln,
  fromFile: Nn,
  fromUrl: Ue,
  fromUrls: jn,
  getDecoder: Qe,
  globals: Dr,
  rgb: Br,
  setLogger: vn,
  writeArrayBuffer: $n
}, Symbol.toStringTag, { value: "Module" }));
class Ge {
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
const Kn = (r) => {
  var t, n, i;
  const e = /* @__PURE__ */ new Map();
  for (const s of r) {
    const a = new DOMParser().parseFromString(
      (t = s.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), o = (n = a == null ? void 0 : a.querySelector("Name")) == null ? void 0 : n.textContent, c = (i = a == null ? void 0 : a.querySelector("Color")) == null ? void 0 : i.textContent;
    if (!o)
      continue;
    const f = c ? c.split(",").map((u) => parseInt(u)) : [255, 255, 255];
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
      for (let f = 0, u = 0; f < o.length; f += 3, u += 4)
        t = o[f], n = o[f + 1], i = o[f + 2], c[u] = t + 1.402 * (i - 128), c[u + 1] = t - 0.34414 * (n - 128) - 0.71414 * (i - 128), c[u + 2] = t + 1.772 * (n - 128), c[u + 3] = 255;
      return c;
    }
    [t, n, i] = e;
    const s = t.length, a = new Uint8ClampedArray(s * 4);
    for (let o = 0, c = 0; o < s; o++, c += 4) {
      const f = t[o], u = n[o], d = i[o];
      a[c] = f + 1.402 * (d - 128), a[c + 1] = f - 0.34414 * (u - 128) - 0.71414 * (d - 128), a[c + 2] = f + 1.772 * (u - 128), a[c + 3] = 255;
    }
    return a;
  }
  static RGBAfromRGB(...e) {
    if (e.length === 1) {
      const c = e[0], f = new Uint8ClampedArray(c.length * 4 / 3);
      for (let u = 0, d = 0; u < c.length; u += 3, d += 4)
        f[d] = c[u], f[d + 1] = c[u + 1], f[d + 2] = c[u + 2], f[d + 3] = 255;
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
      for (let u = 0, d = 0; u < c.length; u += 4, d += 4) {
        const l = c[u], h = c[u + 1], g = c[u + 2], p = c[u + 3];
        f[d] = 255 * ((255 - l) / 256) * ((255 - p) / 256), f[d + 1] = 255 * ((255 - h) / 256) * ((255 - p) / 256), f[d + 2] = 255 * ((255 - g) / 256) * ((255 - p) / 256), f[d + 3] = 255;
      }
      return f;
    }
    const t = e[0], n = e[1], i = e[2], s = e[3], a = t.length, o = new Uint8ClampedArray(a * 4);
    for (let c = 0, f = 0; c < a; c++, f += 4) {
      const u = t[c], d = n[c], l = i[c], h = s[c];
      o[f] = 255 * ((255 - u) / 256) * ((255 - h) / 256), o[f + 1] = 255 * ((255 - d) / 256) * ((255 - h) / 256), o[f + 2] = 255 * ((255 - l) / 256) * ((255 - h) / 256), o[f + 3] = 255;
    }
    return o;
  }
  static RGBAfromCIELab(...e) {
    const s = (d, l, h) => {
      const g = l << 24 >> 24, p = h << 24 >> 24;
      let w = (d + 16) / 116, T = g / 500 + w, b = w - p / 200;
      T = 0.95047 * (T * T * T > 8856e-6 ? T * T * T : (T - 0.13793103448275862) / 7.787), w = 1 * (w * w * w > 8856e-6 ? w * w * w : (w - 0.13793103448275862) / 7.787), b = 1.08883 * (b * b * b > 8856e-6 ? b * b * b : (b - 0.13793103448275862) / 7.787);
      let F = T * 3.2406 + w * -1.5372 + b * -0.4986, S = T * -0.9689 + w * 1.8758 + b * 0.0415, A = T * 0.0557 + w * -0.204 + b * 1.057;
      return F = F > 31308e-7 ? 1.055 * F ** 0.4166666666666667 - 0.055 : 12.92 * F, S = S > 31308e-7 ? 1.055 * S ** 0.4166666666666667 - 0.055 : 12.92 * S, A = A > 31308e-7 ? 1.055 * A ** 0.4166666666666667 - 0.055 : 12.92 * A, [
        Math.max(0, Math.min(1, F)) * 255,
        Math.max(0, Math.min(1, S)) * 255,
        Math.max(0, Math.min(1, A)) * 255
      ];
    };
    if (e.length === 1) {
      const d = e[0], l = new Uint8ClampedArray(d.length * 4 / 3);
      for (let h = 0, g = 0; h < d.length; h += 3, g += 4) {
        const [p, w, T] = s(d[h], d[h + 1], d[h + 2]);
        l[g] = p, l[g + 1] = w, l[g + 2] = T, l[g + 3] = 255;
      }
      return l;
    }
    const a = e[0], o = e[1], c = e[2], f = a.length, u = new Uint8ClampedArray(f * 4);
    for (let d = 0, l = 0; d < f; d++, l += 4) {
      const [h, g, p] = s(a[d], o[d], c[d]);
      u[l] = h, u[l + 1] = g, u[l + 2] = p, u[l + 3] = 255;
    }
    return u;
  }
}
const Hn = {
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
function qn() {
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
class Vn {
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
    const i = this._nextId++, s = qn();
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
class se {
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
function oe(r, e) {
  const t = Array.isArray(r) ? r.slice() : Object.assign({}, r || {});
  if (!e || typeof e != "object") return t;
  for (const n of Object.keys(e)) {
    const i = e[n];
    i && typeof i == "object" && !Array.isArray(i) && t[n] && typeof t[n] == "object" && !Array.isArray(t[n]) ? t[n] = oe(t[n], i) : t[n] = i;
  }
  return t;
}
function pe(r, e) {
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
    format: oe(Hn, e.defaults && e.defaults.format || null)
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
    var m, x;
    if (!i.enabled || typeof Worker > "u") return null;
    if (s.__rawTiffWorkerPool) return s.__rawTiffWorkerPool;
    const y = i.createWorker || Yn;
    try {
      return s.__rawTiffWorkerPool = new Vn({
        size: i.size,
        createWorker: y
      }), s.__rawTiffWorkerPool;
    } catch (k) {
      return (x = (m = t.console) == null ? void 0 : m.warn) == null || x.call(m, "[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", k), s.__rawTiffWorkerPool = null, null;
    }
  }
  async function o(y) {
    if (y == null) throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");
    if (y instanceof se) return o(y.source);
    if (typeof y == "object") {
      if (typeof y.arrayBuffer == "function") {
        const m = await y.arrayBuffer();
        if (m instanceof ArrayBuffer) return m;
      }
      if (y.bytes != null) return o(y.bytes);
      if (y.blob != null) return o(y.blob);
    }
    if (typeof Blob < "u" && y instanceof Blob) return await y.arrayBuffer();
    if (y instanceof ArrayBuffer) return y;
    if (ArrayBuffer.isView(y)) {
      const { buffer: m, byteOffset: x, byteLength: k } = y;
      return m.slice(x, x + k);
    }
    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }
  async function c(y) {
    return typeof y.getImageCount == "function" ? await y.getImageCount() : typeof y.getImages == "function" ? (await y.getImages()).length : 1;
  }
  async function f(y, m) {
    if (typeof y.getImage == "function") return await y.getImage(m);
    if (typeof y.getImages == "function") return (await y.getImages())[m];
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }
  async function u(y, m) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const x = m && m.hints || (m instanceof se ? m.hints : null) || {}, k = await o(m);
    let U;
    if (typeof Le == "function")
      U = await Le(k);
    else if (typeof we == "function")
      U = await we(new Blob([k], { type: "image/tiff" }));
    else
      throw new Error("[RawTiffPlugin] geotiff module does not provide fromArrayBuffer/fromBlob.");
    const C = await c(U);
    let E = x.imageIndex;
    if (C > 1) {
      if (typeof E != "number" || !Number.isFinite(E))
        throw new Error(`[RawTiffPlugin] TIFF contains ${C} images. Provide rawTiff.hints.imageIndex.`);
      if (E < 0 || E >= C)
        throw new Error(`[RawTiffPlugin] imageIndex ${E} out of range (0..${C - 1}).`);
    } else
      E = 0;
    const P = await f(U, E), N = typeof P.getWidth == "function" ? P.getWidth() : P.width, D = typeof P.getHeight == "function" ? P.getHeight() : P.height, I = typeof P.getSamplesPerPixel == "function" ? P.getSamplesPerPixel() : P.samplesPerPixel || 1, v = typeof P.getBitsPerSample == "function" ? P.getBitsPerSample() : P.bitsPerSample || [8], R = typeof P.getSampleFormat == "function" ? P.getSampleFormat() : P.sampleFormat || null, L = typeof P.getPhotometricInterpretation == "function" ? P.getPhotometricInterpretation() : P.fileDirectory ? P.fileDirectory.PhotometricInterpretation : void 0, G = P.fileDirectory || null, B = G && G.ColorMap ? G.ColorMap : null, M = Object.assign({ interleave: !1 }, x.decode || {}), _ = await P.readRasters(M), W = Array.isArray(_) ? _ : [_], Y = Math.max(I || 0, W.length);
    return new je({
      width: N,
      height: D,
      bands: W,
      samplesPerPixel: Y,
      bitsPerSample: Array.isArray(v) ? v : [v],
      sampleFormat: Array.isArray(R) ? R : R ? [R] : null,
      photometricInterpretation: L,
      colorMap: B,
      fileDirectory: G,
      hints: x
    });
  }
  async function d(y, m, x) {
    const k = m && m.hints || (m instanceof se ? m.hints : null) || {}, U = await o(m), C = pe(y, m), E = oe(n.format, C || null), P = Object.assign({}, k, { formatResolved: E }), N = i && i.transferInput ? [U] : [], D = await x.request("decodeRaster", { buffer: U, hints: P }, N);
    return Zn(D, P);
  }
  async function l(y, m) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const x = a();
    return x ? await d(y, m, x) : await u(y, m);
  }
  async function h(y, m) {
    const x = m && m.hints || (m instanceof se ? m.hints : null) || {}, k = a();
    if (k) {
      const C = await o(m), E = pe(y, m), P = oe(n.format, E || null), N = Object.assign({}, x, { formatResolved: P }), D = i && i.transferInput ? [C] : [], I = await k.request("decodeAndRenderImageBitmap", { buffer: C, hints: N }, D);
      if (I && I.kind === "imageBitmap") return I.imageBitmap;
      if (I && I.kind === "rgba8") {
        if (typeof createImageBitmap != "function")
          throw new Error("[RawTiffPlugin] createImageBitmap is not available to build ImageBitmap fallback.");
        const v = new Uint8ClampedArray(I.rgbaBuffer, I.rgbaByteOffset || 0, I.rgbaLength), R = new ImageData(v, I.width, I.height);
        return await createImageBitmap(R);
      }
      throw new Error("[RawTiffPlugin] Worker did not return a supported output.");
    }
    const U = await u(y, m);
    return await F(y, U);
  }
  async function g(y, m) {
    const x = a();
    if (!x) return F(y, m);
    const k = m && m.hints || {}, U = pe(y, m), C = oe(n.format, U || null), E = Object.assign({}, k, { formatResolved: C }), P = /* @__PURE__ */ new Set(), N = [], D = m.bands.map((R) => {
      var L;
      return P.has(R.buffer) || (P.add(R.buffer), N.push(R.buffer)), {
        ctor: ((L = R.constructor) == null ? void 0 : L.name) || "Uint8Array",
        buffer: R.buffer,
        byteOffset: R.byteOffset,
        length: R.length
      };
    }), I = {
      width: m.width,
      height: m.height,
      bands: D,
      samplesPerPixel: m.samplesPerPixel,
      bitsPerSample: m.bitsPerSample,
      sampleFormat: m.sampleFormat,
      photometricInterpretation: m.photometricInterpretation,
      colorMap: m.colorMap,
      fileDirectory: m.fileDirectory
    }, v = await x.request("rasterToImageBitmap", { raster: I, hints: E }, N);
    if (v.kind === "imageBitmap") return v.imageBitmap;
    if (v.kind === "rgba8") {
      if (typeof createImageBitmap != "function")
        throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
      const R = new Uint8ClampedArray(v.rgbaBuffer, v.rgbaByteOffset || 0, v.rgbaLength), L = new ImageData(R, v.width, v.height);
      return await createImageBitmap(L);
    }
    throw new Error("[RawTiffPlugin] Worker returned unsupported result kind for rasterToImageBitmap.");
  }
  async function p(y, m) {
    const x = m && m.hints || (m instanceof se ? m.hints : null) || {}, k = a();
    if (!k) {
      const v = await u(y, m);
      return await w(y, v);
    }
    const U = await o(m), C = pe(y, m), E = oe(n.format, C || null), P = Object.assign({}, x, { formatResolved: E }), N = i && i.transferInput ? [U] : [], D = await k.request("decodeAndPackGpuTextureSet", { buffer: U, hints: P }, N), I = lt(D.texSet);
    return I.hints = P, I;
  }
  async function w(y, m) {
    const x = a();
    if (!x) {
      te("gpuTextureSet_no_worker", "[RawTiffPlugin] No worker pool available; gpuTextureSet packing will fall back to worker-less path (slower).", "warn");
      const R = m.width, L = m.height, G = R * L, B = new Uint8Array(G * 4);
      for (let M = 0, _ = 0; M < G; M++, _ += 4)
        B[_] = m.bands[0] ? m.bands[0][M] : 0, B[_ + 1] = m.bands[1] ? m.bands[1][M] : 0, B[_ + 2] = m.bands[2] ? m.bands[2][M] : 0, B[_ + 3] = m.bands[3] ? m.bands[3][M] : 255;
      return new Ne({
        width: R,
        height: L,
        mode: "data",
        channelCount: m.bands ? m.bands.length : 0,
        packs: [{ format: "RGBA8", data: B, channels: [0, 1, 2, 3], normalized: !1, scale: [1, 1, 1, 1], offset: [0, 0, 0, 0] }]
      });
    }
    const k = m.hints || {}, U = pe(y, m), C = oe(n.format, U || null), E = Object.assign({}, k, { formatResolved: C }), P = m.bands.map((R) => {
      var L;
      return {
        ctor: ((L = R.constructor) == null ? void 0 : L.name) || "Uint8Array",
        buffer: R.buffer,
        byteOffset: R.byteOffset,
        length: R.length
      };
    }), N = {
      width: m.width,
      height: m.height,
      bands: P,
      samplesPerPixel: m.samplesPerPixel,
      bitsPerSample: m.bitsPerSample,
      sampleFormat: m.sampleFormat,
      photometricInterpretation: m.photometricInterpretation,
      colorMap: m.colorMap,
      fileDirectory: m.fileDirectory
    }, D = P.map((R) => R.buffer), I = await x.request("rasterToGpuTextureSet", { raster: N, hints: E }, D), v = lt(I);
    return v.hints = E, v;
  }
  function T(y, m, x) {
    if (y == null || Number.isNaN(y)) return 0;
    const k = x.bands[m];
    if (k instanceof Float32Array || k instanceof Float64Array) {
      const P = Math.max(0, Math.min(1, y));
      return Math.round(P * 255);
    }
    const C = x.bitsPerSample && x.bitsPerSample[m] != null ? x.bitsPerSample[m] : x.bitsPerSample ? x.bitsPerSample[0] : 8, E = C <= 0 ? 255 : Math.pow(2, C) - 1;
    return E <= 255 ? Math.max(0, Math.min(255, y)) : Math.round(Math.max(0, Math.min(1, y / E)) * 255);
  }
  function b(y) {
    const m = n.toneMap || T, x = z || {}, k = y.width, U = y.height, C = k * U, E = y.hints.renderChannels || y.renderChannels || null, P = y.samplesPerPixel || y.bands.length || 1, N = (G, B) => m(y.bands[G][B], G, y), D = y.photometricInterpretation;
    if (D === x.Palette && y.colorMap) {
      const G = y.bands[0];
      return ne.RGBAfromPalette(G, y.colorMap);
    }
    if ((D === x.WhiteIsZero || D === x.BlackIsZero) && P >= 1) {
      const G = y.bands[0], B = y.bitsPerSample && y.bitsPerSample[0] != null ? y.bitsPerSample[0] : 8, M = Math.pow(2, B) - 1;
      if (D === x.WhiteIsZero) return ne.RGBAfromWhiteIsZero(G, M);
      if (D === x.BlackIsZero) return ne.RGBAfromBlackIsZero(G, M);
      const _ = new Uint8ClampedArray(C * 4);
      for (let W = 0, Y = 0; W < C; W++, Y += 4) {
        let V = m(G[W], 0, y);
        D === x.WhiteIsZero && (V = 255 - V), _[Y] = _[Y + 1] = _[Y + 2] = V, _[Y + 3] = 255;
      }
      return _;
    }
    const I = E || (D === x.RGB || D === x.YCbCr || D === x.CIELab ? [0, 1, 2] : P >= 3 ? [0, 1, 2] : [0]);
    if (I.length > 4 && (te(
      "renderChannels>4_to_RGBA",
      `[tiff] Requested ${I.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`,
      "warn"
    ), I.splice(4)), I.length === 1) {
      const G = I[0], B = new Uint8ClampedArray(C * 4);
      for (let M = 0, _ = 0; M < C; M++, _ += 4) {
        const W = N(G, M);
        B[_] = B[_ + 1] = B[_ + 2] = W, B[_ + 3] = 255;
      }
      return B;
    }
    const v = new Uint8ClampedArray(C * I.length);
    for (let G = 0; G < C; G++) {
      const B = G * I.length;
      for (let M = 0; M < I.length; M++) {
        const _ = I[M];
        v[B + M] = _ < y.bands.length ? N(_, G) : 0;
      }
    }
    if (D === x.YCbCr && I.length >= 3) return ne.RGBAfromYCbCr(v);
    if (D === x.CMYK && I.length >= 4) return ne.RGBAfromCMYK(v);
    if (D === x.CIELab && I.length >= 3) return ne.RGBAfromCIELab(v);
    if (I.length === 4) return v;
    if (I.length === 3) return ne.RGBAfromRGB(v);
    const R = new Uint8ClampedArray(C * 4), L = I.length >= 4;
    for (let G = 0, B = 0; G < C; G++, B += 4) {
      const M = G * I.length;
      R[B] = v[M], R[B + 1] = v[M + 1] || 0, R[B + 2] = v[M + 2] || 0, R[B + 3] = L ? v[M + 3] : 255;
    }
    return R;
  }
  async function F(y, m) {
    if (typeof createImageBitmap != "function")
      throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
    const x = b(m), k = new ImageData(x, m.width, m.height);
    return await createImageBitmap(k);
  }
  async function S(y, m) {
    const x = await F(y, m), k = document.createElement("canvas");
    k.width = x.width, k.height = x.height;
    const U = k.getContext("2d", { willReadFrequently: !0 });
    return U.drawImage(x, 0, 0), U;
  }
  t.converter ? (t.converter.learn("rawTiff", "tiffRaster", (y, m) => l(y, m), 2, 10), i.enableRawTiffToImageBitmap && t.converter.learn("rawTiff", "imageBitmap", (y, m) => h(y, m), 1, 5), t.converter.learn("tiffRaster", "context2d", (y, m) => S(y, m), 2, 10), t.converter.learn("tiffRaster", "imageBitmap", (y, m) => g(y, m), 1, 10), t.converter.learn("rawTiff", "gpuTextureSet", (y, m) => p(y, m), 1, 8), t.converter.learn("tiffRaster", "gpuTextureSet", (y, m) => w(y, m), 1, 12)) : t.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+.");
  const A = {
    __installed: !0,
    RawTiff: se,
    TiffRaster: je,
    GpuTextureSet: Ne,
    Converters: ne,
    decodeRawTiff: l,
    rasterToRGBA8: b,
    rasterToContext2d: S,
    rasterToImageBitmap: F,
    tiffRasterToImageBitmapViaWorker: g,
    getWorkerPool: a,
    terminateWorkerPool() {
      const y = t.RawTiffPluginShared;
      y && y.__rawTiffWorkerPool && (y.__rawTiffWorkerPool.terminate(), y.__rawTiffWorkerPool = null);
    },
    /**
     * Convert using OpenSeadragon.converter.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType]
     */
    convert(y, m, x, k) {
      if (!t.converter) throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing.");
      const U = k || t.converter.guessType(m);
      return t.converter.convert(y, m, U, x);
    },
    /**
     * Wrap binary as a RawTiff object.
     * @param {*} source
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(y, m) {
      return new se(y, m);
    },
    /**
     * Expose defaults (merged).
     */
    defaults: n
  };
  return t.RawTiffPlugin = A, A;
}
window.GeoTIFF = zn;
const Qn = (r, e = {}) => {
  if (r.version.major < 4 || r.version.major === 4 && r.version.minor < 1)
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  const {
    workerUrl: t,
    // optional: string or URL
    workerPool: n,
    // optional: { createWorker: () => Worker }
    debug: i = !1
    // optional: enable verbose timing logs
  } = e, a = n || {
    createWorker: () => t ? new Worker(t, { type: "module" }) : new Worker(new URL(
      /* @vite-ignore */
      "/assets/tiff.worker-CLseKfFU.js",
      import.meta.url
    ), {
      type: "module"
    })
  }, o = r.RawTiffPlugin || Jn(r, {
    workerPool: a
  });
  let c = 0;
  const u = class u extends r.TileSource {
    constructor(l, h = { logLatency: !1 }) {
      super();
      let g = this;
      this.input = l, this.options = h, this.channel = (l == null ? void 0 : l.channel) ?? null, this._ready = !1, this._pool = u.sharedPool, this._tileSize = 256, this._tsCounter = c, c += 1, l.GeoTIFF && l.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(l.GeoTIFF),
        GeoTIFFImages: Promise.resolve(l.GeoTIFFImages),
        ready: new Ge()
      }, this.GeoTIFF = l.GeoTIFF, this.imageCount = l.GeoTIFFImages.length, this.GeoTIFFImages = l.GeoTIFFImages, this.GeoTIFFAllImages = l.GeoTIFFAllImages ?? l.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: l instanceof File ? we(l, h.GeoTIFFOptions) : Ue(l, h.GeoTIFFOptions),
        GeoTIFFImages: new Ge(),
        ready: new Ge()
      }, this.promises.GeoTIFF.then((p) => (g.GeoTIFF = p, p.getImageCount())).then((p) => {
        g.imageCount = p;
        let w = [...Array(p).keys()].map((T) => g.GeoTIFF.getImage(T));
        return Promise.all(w);
      }).then((p) => {
        p = g.constructor.userDefinedImagesFilter(p, h), g.GeoTIFFImages = p, g.GeoTIFFAllImages = p, g.promises.GeoTIFFImages.resolve(p), this.setupLevels();
      }).catch((p) => {
        throw console.error("Re-throwing error with GeoTIFF:", p), p;
      }));
    }
    static async getAllTileSources(l, h) {
      var N;
      const g = l instanceof File ? l.name : typeof l == "string" ? l.split("/").pop() : "unknown", p = performance.now(), w = l instanceof File ? l.name.split(".").pop() : l.split(".").pop();
      let T = await (l instanceof File ? we(l, h.GeoTIFFOptions) : Ue(l, h.GeoTIFFOptions));
      const b = performance.now();
      i && console.log(`⏱️ [${g}] fromUrl: ${(b - p).toFixed(0)}ms`);
      let F = await T.getImageCount();
      const S = performance.now();
      i && console.log(`⏱️ [${g}] getImageCount(${F}): ${(S - b).toFixed(0)}ms`);
      const A = await Promise.all(
        Array.from({ length: F }, (D, I) => T.getImage(I))
      ), y = performance.now();
      i && console.log(`⏱️ [${g}] getImage×${F}: ${(y - S).toFixed(0)}ms`), console.log(`⏱️ [${g}] IFD dims: ${A.map((D, I) => `#${I}:${D.getWidth()}×${D.getHeight()}`).join(", ")}`);
      const m = A.some((D) => {
        const I = D.fileDirectory || {};
        return I.SubIFDs && I.SubIFDs.length > 0;
      });
      console.log(`⏱️ [${g}] hasSubIFDs: ${m}, hasGetSubIFDs: ${typeof ((N = A[0]) == null ? void 0 : N.getSubIFDs) == "function"}`);
      let x = Promise.resolve(T), k = this.userDefinedImagesFilter(A, h);
      k = k.filter(
        (D) => D.fileDirectory.PhotometricInterpretation !== z.TransparencyMask
      ), k.sort((D, I) => I.getWidth() - D.getWidth());
      const U = 0.015, C = k.reduce((D, I) => {
        const v = I.getWidth() / I.getHeight();
        let R = "";
        I.fileDirectory.ImageDescription && (R = I.fileDirectory.ImageDescription.split(`
`)[1] ?? "");
        const L = D.filter(
          (G) => Math.abs(1 - G.aspectRatio / v) < U && !(R != null && R.toLowerCase().includes("macro") || R != null && R.toLowerCase().includes("label"))
        );
        return L.length === 0 ? D.push({
          aspectRatio: v,
          images: [I]
        }) : L[0].images.push(I), D;
      }, []);
      if (C.length > 1) {
        const D = Math.min(...C[0].images.map((I) => I.getWidth()));
        for (let I = C.length - 1; I >= 1; I--) {
          const v = C[I];
          v.images.length === 1 && v.images[0].getWidth() < D && (C[0].images.push(v.images[0]), C.splice(I, 1));
        }
      }
      const E = C.map((D) => D.images), P = [];
      for (let D = 0; D < E.length; D++) {
        const I = E[D];
        if (D !== 0) {
          P.push(
            new r.GeoTIFFTileSource(
              {
                GeoTIFF: x,
                GeoTIFFImages: I,
                GeoTIFFAllImages: I
              },
              h
            )
          );
          continue;
        }
        if (w === "qptiff") {
          const L = Kn(I);
          for (const G of L.values())
            P.push(
              new r.GeoTIFFTileSource(
                {
                  GeoTIFF: x,
                  GeoTIFFImages: G.images,
                  GeoTIFFAllImages: G.images,
                  channel: {
                    name: G.name,
                    color: G.color
                  }
                },
                h
              )
            );
          continue;
        }
        const v = await this.resolveLayout(x, I, h.hints), R = await this.buildLevelImages(x, v, x);
        P.push(
          new r.GeoTIFFTileSource(
            {
              GeoTIFF: x,
              GeoTIFFImages: R,
              GeoTIFFAllImages: I
            },
            h
          )
        );
      }
      return P;
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
    getTileHashKey(l, h, g) {
      var p;
      return `geotiffTileSource${this._tsCounter}_${((p = this == null ? void 0 : this.channel) == null ? void 0 : p.name) ?? ""}_${l}_${h}_${g}`;
    }
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    getTileUrl(l, h, g) {
      return `${l}/${h}_${g}`;
    }
    downloadTileStart(l) {
      const h = !!r.converter && typeof l.fail == "function", g = "" + l.src, p = `${l.tile.level}/${l.tile.x}_${l.tile.y}`, w = new AbortController();
      l.userData && (l.userData.abortController = w);
      const T = this.levels[l.tile.level], b = performance.now();
      this.regionToTiffRaster(T, l.tile.x, l.tile.y, w.signal).then(async (F) => {
        const S = performance.now();
        if (h) {
          const m = await o.tiffRasterToImageBitmapViaWorker(l.tile, F), x = performance.now();
          this.options.debug && console.log(`🔲 Tile ${p} | fetch+decode: ${(S - b).toFixed(0)}ms | render: ${(x - S).toFixed(0)}ms | total: ${(x - b).toFixed(0)}ms`), l.finish(m, g, "imageBitmap");
          return;
        }
        const A = await Promise.resolve(o.rasterToContext2d(l.tile, F)), y = performance.now();
        this.options.debug && console.log(`🔲 Tile ${p} | fetch+decode: ${(S - b).toFixed(0)}ms | render: ${(y - S).toFixed(0)}ms | total: ${(y - b).toFixed(0)}ms`), l.finish(A.canvas);
      }).catch((F) => {
        const S = performance.now(), A = F && F.message ? F.message : String(F);
        console.warn(`❌ Tile ${p} FAILED after ${(S - b).toFixed(0)}ms: ${A}`), h ? l.fail(A) : l.finish(null, g, A);
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
      let l = this.GeoTIFFImages.sort((b, F) => F.getWidth() - b.getWidth()), h = this._tileSize, g = this._tileSize, p = l[0].getWidth();
      this.width = p;
      let w = l[0].getHeight();
      if (this.height = w, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new r.Point(this.width, this.height), l.reduce(
        (b, F) => (b.width !== -1 && (b.valid = b.valid && F.getWidth() < b.width), b.width = F.getWidth(), b),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = l.map((b) => {
          let F = b.getWidth(), S = b.getHeight();
          return {
            width: F,
            height: S,
            tileWidth: this.options.tileWidth || b.getTileWidth() || h,
            tileHeight: this.options.tileHeight || b.getTileHeight() || g,
            image: b,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let b = Math.ceil(
          Math.log2(Math.max(p / h, w / g))
        ), F = [...Array(b).keys()].filter((S) => S % 2 == 0);
        this.levels = F.map((S) => {
          let A = Math.pow(2, S);
          const y = l.filter((x) => {
            const k = Math.pow(2, S - 1);
            return k >= 0 ? x.getWidth() * k < p && x.getWidth() * A >= p : x.getWidth() * A >= p;
          });
          if (y.length === 0)
            return null;
          const m = y[0];
          return {
            width: p / A,
            height: w / A,
            tileWidth: this.options.tileWidth || m.getTileWidth() || h,
            tileHeight: this.options.tileHeight || m.getTileHeight() || g,
            image: m,
            scaleFactor: A * m.getWidth() / p
          };
        }).filter((S) => S !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((b, F) => b.width - F.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
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
      var w;
      const h = (w = l.fileDirectory) == null ? void 0 : w.ImageDescription;
      if (typeof h != "string" || !h) return !1;
      const p = (h.split(`
`)[1] ?? "").toLowerCase();
      return p.includes("macro") || p.includes("label");
    }
    static _uniqueByDecreasingSize(l) {
      const h = l.map((w) => ({ im: w, w: w.getWidth(), h: w.getHeight() })).sort((w, T) => T.w - w.w), g = [], p = /* @__PURE__ */ new Set();
      for (const { im: w, w: T, h: b } of h) {
        const F = `${T}x${b}`;
        p.has(F) || (p.add(F), g.push(w));
      }
      return g;
    }
    static async resolveLayout(l, h, g = {}) {
      const p = g.layout || {}, w = p.pyramid || "auto", T = Number.isFinite(p.planeIndex) ? p.planeIndex : 0, b = p.prefer === "stack" ? "stack" : "pyramid", F = /* @__PURE__ */ new Map();
      for (const B of h) {
        const M = this.getGeoTiffFileKey(B);
        B.__key = M;
        const _ = F.get(M) || [];
        _.push(B), F.set(M, _);
      }
      const S = this._uniqueByDecreasingSize(h), A = h.filter((B) => !this.isSvsStyleCompanionPage(B)), y = this._uniqueByDecreasingSize(A), m = (B) => {
        if (B.length < 2) return !1;
        for (let _ = 1; _ < B.length; _++)
          if (B[_].getWidth() >= B[_ - 1].getWidth() || B[_].getHeight() >= B[_ - 1].getHeight()) return !1;
        const M = B[0].getWidth() / B[0].getHeight();
        for (const _ of B) {
          const W = _.getWidth() / _.getHeight(), Y = Math.abs(W - M) / M, V = Math.min(_.getWidth(), _.getHeight()), ie = V < 64 ? 0.1 : V < 256 ? 0.05 : 0.01;
          if (Y > ie) return !1;
        }
        return !0;
      }, x = m(S), k = m(y), U = h.some(
        (B) => this.isSvsStyleCompanionPage(B)
      );
      let C = x, E = !C && k;
      U && k && (E = !0, C = !1);
      const P = C || E, N = C ? S : E ? y : S, D = h.some((B) => {
        const M = this.getGeoTiffFileDirectory(B).SubIFDs;
        return M && M.length;
      });
      let I = "single";
      w === "ifd" ? I = P ? "ifd" : "single" : w === "subifd" ? I = D ? "subifd" : "single" : P ? I = "ifd" : D ? I = "subifd" : I = "single";
      const v = S[0], R = v.__key, L = F.get(R) || [v], G = L[Math.max(0, Math.min(L.length - 1, T))];
      return b === "stack" && L.length > 1 && I === "ifd" && (I = "single"), I === "subifd" && typeof G.getSubIFDs != "function" && (te(`${G.__key}-subifd-warn`, "[GeoTIFFTileSource] SubIFD pyramids detected but geotiff.js doesn't expose getSubIFDs(). Falling back to single level.", "warn"), I = "single"), console.log(`⏱️ resolveLayout: strategy=${I}, effectiveIfdPyramid=${P}, anyHasSubIFD=${D}, uniqueCount=${S.length}, planes=${L.length}`), { strategy: I, planes: L, chosenPlane: G, ifdLevelsLargestToSmallest: N };
    }
    static async buildLevelImages(l, h, g) {
      const { strategy: p, chosenPlane: w, ifdLevelsLargestToSmallest: T, planes: b } = h, F = (S) => {
        var A;
        return ((A = S.getFileDirectory) == null ? void 0 : A.call(S)) ?? S.fileDirectory ?? {};
      };
      if (p === "ifd") {
        const S = [...T].sort((A, y) => A.getWidth() - y.getWidth());
        return b.length > 1 && te(g, `[GeoTIFFTileSource] Detected a plane stack (${b.length} same-size IFDs) AND a top-level pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose a different plane.`, "warn"), S;
      }
      if (p === "subifd") {
        const A = F(w).SubIFDs;
        if (!A || !A.length)
          return te(g, "[GeoTIFFTileSource] SubIFD pyramid requested/detected but the chosen plane has no SubIFDs. Falling back to single level.", "warn"), [w];
        if (typeof w.getSubIFDs == "function") {
          const m = [...await w.getSubIFDs(), w].sort((x, k) => x.getWidth() - k.getWidth());
          return b.length > 1 && te(g, `[GeoTIFFTileSource] Detected a plane stack (${b.length} same-size IFDs) with SubIFD pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), m;
        }
        return te(g, "[GeoTIFFTileSource] SubIFDs are present but geotiff.js does not expose getSubIFDs() in this build. Using single level. (You can still render multi-plane data via your GPU pipeline.)", "warn"), [w];
      }
      return b.length > 1 && te(g, `[GeoTIFFTileSource] Detected ${b.length} same-size IFD pages (likely channels/planes). No pyramid detected. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), [w];
    }
    regionToTiffRaster(l, h, g, p) {
      var m, x, k, U;
      const w = this.options.logLatency && Date.now(), T = l.tileWidth, b = l.tileHeight, F = [h * T, g * b, (h + 1) * T, (g + 1) * b].map(
        (C) => C * l.scaleFactor
      ), S = l.image, A = (x = (m = S.fileDirectory) == null ? void 0 : m.Software) == null ? void 0 : x.startsWith("PerkinElmer-QPI");
      let y = null;
      if (A && ((k = S.fileDirectory) != null && k.ImageDescription))
        try {
          const E = (U = new DOMParser().parseFromString(S.fileDirectory.ImageDescription, "text/xml").querySelector("Color")) == null ? void 0 : U.textContent;
          y = E ? E.split(",").map((P) => parseInt(P, 10)) : null;
        } catch {
          y = null;
        }
      return S.readRasters({
        interleave: !1,
        window: F,
        pool: this._pool,
        width: T,
        height: b,
        signal: p
      }).then((C) => {
        const E = Array.isArray(C) ? C : [C], P = S.fileDirectory || {}, N = new o.TiffRaster({
          width: T,
          height: b,
          bands: E,
          samplesPerPixel: Math.max(P.SamplesPerPixel || 0, E.length),
          bitsPerSample: P.BitsPerSample || [8],
          sampleFormat: P.SampleFormat || null,
          photometricInterpretation: P.PhotometricInterpretation,
          colorMap: P.ColorMap || null,
          fileDirectory: P,
          hints: {
            ...this.channel ? { channel: this.channel } : {},
            ...y ? { tintRGB: y } : {}
          }
        });
        return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
          "Tile decode latency (ms):",
          Date.now() - w
        ), N;
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
  Re(u, "sharedPool", new Ut()), Re(u, "userDefinedImagesFilter", (l, h) => (typeof h.imagesFilter < "u" && h.imagesFilter && (Array.isArray(h.imagesFilter) ? l = l.filter((g, p) => h.imagesFilter.includes(p)) : typeof h.imagesFilter == "function" && (l = l.filter(h.imagesFilter)), h.imagesFilter = void 0), l));
  let f = u;
  r.GeoTIFFTileSource = f;
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
//# sourceMappingURL=main-BO1NunQU.js.map

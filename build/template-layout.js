!(function(e) {
  var l = {};
  function o(t) {
    if (l[t]) return l[t].exports;
    var m = (l[t] = { i: t, l: !1, exports: {} });
    return e[t].call(m.exports, m, m.exports, o), (m.l = !0), m.exports;
  }
  (o.m = e),
    (o.c = l),
    (o.d = function(e, l, t) {
      o.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: t });
    }),
    (o.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, l) {
      if ((1 & l && (e = o(e)), 8 & l)) return e;
      if (4 & l && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & l && 'string' != typeof e)
      )
        for (var m in e)
          o.d(
            t,
            m,
            function(l) {
              return e[l];
            }.bind(null, m)
          );
      return t;
    }),
    (o.n = function(e) {
      var l =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(l, 'a', l), l;
    }),
    (o.o = function(e, l) {
      return Object.prototype.hasOwnProperty.call(e, l);
    }),
    (o.p = ''),
    o((o.s = 1));
})([
  function(e, l, o) {
    'use strict';
    o.r(l);
    var t,
      m,
      c,
      d,
      n =
        ((t = 'C:\\Users\\cweee\\WebstormProjects\\design-system-15\\src\\template-engine.js'),
        (m = new Function('return this')()),
        (d = m[(c = '__coverage__')] || (m[c] = {}))[t] &&
        '2a5a9a151130335b302cbbb9e8883a9ccdd55315' === d[t].hash
          ? d[t]
          : (d[t] = {
              path: 'C:\\Users\\cweee\\WebstormProjects\\design-system-15\\src\\template-engine.js',
              statementMap: {
                0: { start: { line: 8, column: 4 }, end: { line: 10, column: 5 } },
                1: { start: { line: 9, column: 6 }, end: { line: 9, column: 27 } },
                2: { start: { line: 12, column: 22 }, end: { line: 12, column: 64 } },
                3: { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } },
                4: { start: { line: 15, column: 6 }, end: { line: 15, column: 17 } },
                5: { start: { line: 17, column: 4 }, end: { line: 19, column: 5 } },
                6: { start: { line: 18, column: 6 }, end: { line: 18, column: 16 } },
                7: { start: { line: 20, column: 4 }, end: { line: 20, column: 42 } },
                8: { start: { line: 24, column: 18 }, end: { line: 24, column: 39 } },
                9: { start: { line: 25, column: 17 }, end: { line: 25, column: 58 } },
                10: { start: { line: 26, column: 17 }, end: { line: 26, column: 51 } },
                11: { start: { line: 28, column: 17 }, end: { line: 28, column: 46 } },
                12: { start: { line: 30, column: 4 }, end: { line: 34, column: 5 } },
                13: { start: { line: 31, column: 6 }, end: { line: 33, column: 7 } },
                14: { start: { line: 32, column: 8 }, end: { line: 32, column: 81 } },
                15: { start: { line: 36, column: 4 }, end: { line: 47, column: 5 } },
                16: { start: { line: 37, column: 6 }, end: { line: 39, column: 7 } },
                17: { start: { line: 38, column: 8 }, end: { line: 38, column: 28 } },
                18: { start: { line: 40, column: 6 }, end: { line: 46, column: 7 } },
                19: { start: { line: 40, column: 19 }, end: { line: 40, column: 20 } },
                20: { start: { line: 41, column: 18 }, end: { line: 41, column: 28 } },
                21: { start: { line: 42, column: 8 }, end: { line: 44, column: 9 } },
                22: { start: { line: 43, column: 10 }, end: { line: 43, column: 19 } },
                23: { start: { line: 45, column: 8 }, end: { line: 45, column: 45 } },
                24: { start: { line: 48, column: 4 }, end: { line: 48, column: 18 } },
                25: { start: { line: 52, column: 4 }, end: { line: 54, column: 5 } },
                26: { start: { line: 53, column: 6 }, end: { line: 53, column: 16 } },
                27: { start: { line: 55, column: 4 }, end: { line: 57, column: 5 } },
                28: { start: { line: 56, column: 6 }, end: { line: 56, column: 17 } },
                29: { start: { line: 58, column: 4 }, end: { line: 60, column: 5 } },
                30: { start: { line: 59, column: 6 }, end: { line: 59, column: 27 } },
                31: { start: { line: 61, column: 4 }, end: { line: 63, column: 5 } },
                32: { start: { line: 62, column: 6 }, end: { line: 62, column: 40 } },
                33: { start: { line: 65, column: 24 }, end: { line: 65, column: 29 } },
                34: { start: { line: 66, column: 4 }, end: { line: 66, column: 37 } },
                35: { start: { line: 68, column: 19 }, end: { line: 68, column: 63 } },
                36: { start: { line: 69, column: 4 }, end: { line: 69, column: 79 } },
                37: { start: { line: 73, column: 17 }, end: { line: 73, column: 19 } },
                38: { start: { line: 74, column: 4 }, end: { line: 78, column: 5 } },
                39: { start: { line: 74, column: 17 }, end: { line: 74, column: 18 } },
                40: { start: { line: 75, column: 6 }, end: { line: 77, column: 7 } },
                41: { start: { line: 76, column: 8 }, end: { line: 76, column: 45 } },
                42: { start: { line: 79, column: 4 }, end: { line: 79, column: 18 } },
                43: { start: { line: 82, column: 2 }, end: { line: 82, column: 21 } }
              },
              fnMap: {
                0: {
                  name: '(anonymous_0)',
                  decl: { start: { line: 6, column: 15 }, end: { line: 6, column: 16 } },
                  loc: { start: { line: 6, column: 29 }, end: { line: 83, column: 1 } },
                  line: 6
                },
                1: {
                  name: 'outputClasses',
                  decl: { start: { line: 7, column: 11 }, end: { line: 7, column: 24 } },
                  loc: { start: { line: 7, column: 40 }, end: { line: 21, column: 3 } },
                  line: 7
                },
                2: {
                  name: 'bemClass',
                  decl: { start: { line: 23, column: 11 }, end: { line: 23, column: 19 } },
                  loc: { start: { line: 23, column: 35 }, end: { line: 49, column: 3 } },
                  line: 23
                },
                3: {
                  name: 'toHTML',
                  decl: { start: { line: 51, column: 11 }, end: { line: 51, column: 17 } },
                  loc: { start: { line: 51, column: 33 }, end: { line: 70, column: 3 } },
                  line: 51
                },
                4: {
                  name: 'concatArray',
                  decl: { start: { line: 72, column: 11 }, end: { line: 72, column: 22 } },
                  loc: { start: { line: 72, column: 40 }, end: { line: 80, column: 3 } },
                  line: 72
                }
              },
              branchMap: {
                0: {
                  loc: { start: { line: 8, column: 4 }, end: { line: 10, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 8, column: 4 }, end: { line: 10, column: 5 } },
                    { start: { line: 8, column: 4 }, end: { line: 10, column: 5 } }
                  ],
                  line: 8
                },
                1: {
                  loc: { start: { line: 8, column: 8 }, end: { line: 8, column: 42 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 8, column: 8 }, end: { line: 8, column: 16 } },
                    { start: { line: 8, column: 20 }, end: { line: 8, column: 28 } },
                    { start: { line: 8, column: 32 }, end: { line: 8, column: 42 } }
                  ],
                  line: 8
                },
                2: {
                  loc: { start: { line: 12, column: 22 }, end: { line: 12, column: 64 } },
                  type: 'cond-expr',
                  locations: [
                    { start: { line: 12, column: 46 }, end: { line: 12, column: 59 } },
                    { start: { line: 12, column: 62 }, end: { line: 12, column: 64 } }
                  ],
                  line: 12
                },
                3: {
                  loc: { start: { line: 12, column: 22 }, end: { line: 12, column: 43 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 12, column: 22 }, end: { line: 12, column: 31 } },
                    { start: { line: 12, column: 35 }, end: { line: 12, column: 43 } }
                  ],
                  line: 12
                },
                4: {
                  loc: { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } },
                    { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }
                  ],
                  line: 14
                },
                5: {
                  loc: { start: { line: 17, column: 4 }, end: { line: 19, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 17, column: 4 }, end: { line: 19, column: 5 } },
                    { start: { line: 17, column: 4 }, end: { line: 19, column: 5 } }
                  ],
                  line: 17
                },
                6: {
                  loc: { start: { line: 17, column: 8 }, end: { line: 17, column: 58 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 17, column: 8 }, end: { line: 17, column: 25 } },
                    { start: { line: 17, column: 29 }, end: { line: 17, column: 41 } },
                    { start: { line: 17, column: 45 }, end: { line: 17, column: 58 } }
                  ],
                  line: 17
                },
                7: {
                  loc: { start: { line: 24, column: 18 }, end: { line: 24, column: 39 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 24, column: 18 }, end: { line: 24, column: 27 } },
                    { start: { line: 24, column: 31 }, end: { line: 24, column: 39 } }
                  ],
                  line: 24
                },
                8: {
                  loc: { start: { line: 25, column: 26 }, end: { line: 25, column: 57 } },
                  type: 'cond-expr',
                  locations: [
                    { start: { line: 25, column: 37 }, end: { line: 25, column: 52 } },
                    { start: { line: 25, column: 55 }, end: { line: 25, column: 57 } }
                  ],
                  line: 25
                },
                9: {
                  loc: { start: { line: 26, column: 17 }, end: { line: 26, column: 51 } },
                  type: 'cond-expr',
                  locations: [
                    { start: { line: 26, column: 28 }, end: { line: 26, column: 40 } },
                    { start: { line: 26, column: 43 }, end: { line: 26, column: 51 } }
                  ],
                  line: 26
                },
                10: {
                  loc: { start: { line: 28, column: 17 }, end: { line: 28, column: 46 } },
                  type: 'cond-expr',
                  locations: [
                    { start: { line: 28, column: 37 }, end: { line: 28, column: 39 } },
                    { start: { line: 28, column: 42 }, end: { line: 28, column: 46 } }
                  ],
                  line: 28
                },
                11: {
                  loc: { start: { line: 30, column: 4 }, end: { line: 34, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 30, column: 4 }, end: { line: 34, column: 5 } },
                    { start: { line: 30, column: 4 }, end: { line: 34, column: 5 } }
                  ],
                  line: 30
                },
                12: {
                  loc: { start: { line: 32, column: 42 }, end: { line: 32, column: 79 } },
                  type: 'cond-expr',
                  locations: [
                    { start: { line: 32, column: 61 }, end: { line: 32, column: 63 } },
                    { start: { line: 32, column: 66 }, end: { line: 32, column: 79 } }
                  ],
                  line: 32
                },
                13: {
                  loc: { start: { line: 36, column: 4 }, end: { line: 47, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 36, column: 4 }, end: { line: 47, column: 5 } },
                    { start: { line: 36, column: 4 }, end: { line: 47, column: 5 } }
                  ],
                  line: 36
                },
                14: {
                  loc: { start: { line: 37, column: 6 }, end: { line: 39, column: 7 } },
                  type: 'if',
                  locations: [
                    { start: { line: 37, column: 6 }, end: { line: 39, column: 7 } },
                    { start: { line: 37, column: 6 }, end: { line: 39, column: 7 } }
                  ],
                  line: 37
                },
                15: {
                  loc: { start: { line: 42, column: 8 }, end: { line: 44, column: 9 } },
                  type: 'if',
                  locations: [
                    { start: { line: 42, column: 8 }, end: { line: 44, column: 9 } },
                    { start: { line: 42, column: 8 }, end: { line: 44, column: 9 } }
                  ],
                  line: 42
                },
                16: {
                  loc: { start: { line: 52, column: 4 }, end: { line: 54, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 52, column: 4 }, end: { line: 54, column: 5 } },
                    { start: { line: 52, column: 4 }, end: { line: 54, column: 5 } }
                  ],
                  line: 52
                },
                17: {
                  loc: { start: { line: 52, column: 8 }, end: { line: 52, column: 58 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 52, column: 8 }, end: { line: 52, column: 25 } },
                    { start: { line: 52, column: 29 }, end: { line: 52, column: 42 } },
                    { start: { line: 52, column: 46 }, end: { line: 52, column: 58 } }
                  ],
                  line: 52
                },
                18: {
                  loc: { start: { line: 55, column: 4 }, end: { line: 57, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 55, column: 4 }, end: { line: 57, column: 5 } },
                    { start: { line: 55, column: 4 }, end: { line: 57, column: 5 } }
                  ],
                  line: 55
                },
                19: {
                  loc: { start: { line: 58, column: 4 }, end: { line: 60, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 58, column: 4 }, end: { line: 60, column: 5 } },
                    { start: { line: 58, column: 4 }, end: { line: 60, column: 5 } }
                  ],
                  line: 58
                },
                20: {
                  loc: { start: { line: 61, column: 4 }, end: { line: 63, column: 5 } },
                  type: 'if',
                  locations: [
                    { start: { line: 61, column: 4 }, end: { line: 63, column: 5 } },
                    { start: { line: 61, column: 4 }, end: { line: 63, column: 5 } }
                  ],
                  line: 61
                },
                21: {
                  loc: { start: { line: 66, column: 14 }, end: { line: 66, column: 36 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 66, column: 14 }, end: { line: 66, column: 21 } },
                    { start: { line: 66, column: 25 }, end: { line: 66, column: 36 } }
                  ],
                  line: 66
                },
                22: {
                  loc: { start: { line: 75, column: 6 }, end: { line: 77, column: 7 } },
                  type: 'if',
                  locations: [
                    { start: { line: 75, column: 6 }, end: { line: 77, column: 7 } },
                    { start: { line: 75, column: 6 }, end: { line: 77, column: 7 } }
                  ],
                  line: 75
                },
                23: {
                  loc: { start: { line: 75, column: 10 }, end: { line: 75, column: 75 } },
                  type: 'binary-expr',
                  locations: [
                    { start: { line: 75, column: 10 }, end: { line: 75, column: 32 } },
                    { start: { line: 75, column: 36 }, end: { line: 75, column: 54 } },
                    { start: { line: 75, column: 58 }, end: { line: 75, column: 75 } }
                  ],
                  line: 75
                }
              },
              s: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0,
                18: 0,
                19: 0,
                20: 0,
                21: 0,
                22: 0,
                23: 0,
                24: 0,
                25: 0,
                26: 0,
                27: 0,
                28: 0,
                29: 0,
                30: 0,
                31: 0,
                32: 0,
                33: 0,
                34: 0,
                35: 0,
                36: 0,
                37: 0,
                38: 0,
                39: 0,
                40: 0,
                41: 0,
                42: 0,
                43: 0
              },
              f: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
              b: {
                0: [0, 0],
                1: [0, 0, 0],
                2: [0, 0],
                3: [0, 0],
                4: [0, 0],
                5: [0, 0],
                6: [0, 0, 0],
                7: [0, 0],
                8: [0, 0],
                9: [0, 0],
                10: [0, 0],
                11: [0, 0],
                12: [0, 0],
                13: [0, 0],
                14: [0, 0],
                15: [0, 0],
                16: [0, 0],
                17: [0, 0, 0],
                18: [0, 0],
                19: [0, 0],
                20: [0, 0],
                21: [0, 0],
                22: [0, 0],
                23: [0, 0, 0]
              },
              _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
              hash: '2a5a9a151130335b302cbbb9e8883a9ccdd55315'
            }));
    function i(e) {
      return (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    l.default = function(e) {
      function l(e, l) {
        n.f[1]++,
          n.s[0]++,
          n.b[1][0]++,
          l && (n.b[1][1]++, e.elem) && (n.b[1][2]++, !e.block)
            ? (n.b[0][0]++, n.s[1]++, (e.block = l))
            : n.b[0][1]++;
        var o =
          (n.s[2]++,
          n.b[3][0]++,
          e.block || (n.b[3][1]++, l)
            ? (n.b[2][0]++,
              (function e(l, o) {
                n.f[2]++;
                var t = (n.s[8]++, n.b[7][0]++, l.block || (n.b[7][1]++, o));
                var m = (n.s[9]++, t + (l.elem ? (n.b[8][0]++, '__' + l.elem) : (n.b[8][1]++, '')));
                var c = (n.s[10]++, l.elem ? (n.b[9][0]++, l.elemMods) : (n.b[9][1]++, l.mods));
                var d = (n.s[11]++, m === o ? (n.b[10][0]++, '') : (n.b[10][1]++, m));
                n.s[12]++;
                if (c)
                  for (var i in (n.b[11][0]++, n.s[13]++, c))
                    n.s[14]++,
                      (d +=
                        ' ' +
                        m +
                        '_' +
                        i +
                        (!0 === c[i] ? (n.b[12][0]++, '') : (n.b[12][1]++, '_' + c[i])));
                else n.b[11][1]++;
                n.s[15]++;
                if (l.mix) {
                  n.b[13][0]++,
                    n.s[16]++,
                    Array.isArray(l.mix)
                      ? n.b[14][1]++
                      : (n.b[14][0]++, n.s[17]++, (l.mix = [l.mix])),
                    n.s[18]++;
                  for (var s = (n.s[19]++, 0); s < l.mix.length; s++) {
                    var r = (n.s[20]++, l.mix[s]);
                    n.s[21]++,
                      r
                        ? (n.b[15][1]++, n.s[23]++, (d += ' ' + e(r, t)))
                        : (n.b[15][0]++, n.s[22]++);
                  }
                } else n.b[13][1]++;
                n.s[24]++;
                return d;
              })(e))
            : (n.b[2][1]++, ''));
        return (
          n.s[3]++,
          'object' !== i(e)
            ? (n.b[4][0]++, n.s[4]++, e)
            : (n.b[4][1]++,
              n.s[5]++,
              n.b[6][0]++,
              void 0 === e || (n.b[6][1]++, null === e) || (n.b[6][2]++, !1 === e)
                ? (n.b[5][0]++, n.s[6]++, '')
                : (n.b[5][1]++, n.s[7]++, ' class="' + o + '"'))
        );
      }
      function o(e, t) {
        if (
          (n.f[3]++,
          n.s[25]++,
          n.b[17][0]++,
          void 0 === e || (n.b[17][1]++, !1 === e) || (n.b[17][2]++, null === e))
        )
          return n.b[16][0]++, n.s[26]++, '';
        if ((n.b[16][1]++, n.s[27]++, 'object' !== i(e))) return n.b[18][0]++, n.s[28]++, e;
        if (
          (n.b[18][1]++,
          n.s[29]++,
          e.block ? (n.b[19][0]++, n.s[30]++, (t = e.block)) : n.b[19][1]++,
          n.s[31]++,
          Array.isArray(e))
        )
          return (
            n.b[20][0]++,
            n.s[32]++,
            (function(e, l) {
              n.f[4]++;
              var t = (n.s[37]++, '');
              n.s[38]++;
              for (var m = (n.s[39]++, 0); m < e.length; m++)
                n.s[40]++,
                  n.b[23][0]++,
                  void 0 !== e[m] && (n.b[23][1]++, !1 !== e[m]) && (n.b[23][2]++, null !== e[m])
                    ? (n.b[22][0]++, n.s[41]++, (t += o(e[m], l)))
                    : n.b[22][1]++;
              return n.s[42]++, t;
            })(e, t)
          );
        n.b[20][1]++;
        var m = (n.s[33]++, 'div');
        n.s[34]++, (e.tag = (n.b[21][0]++, e.tag || (n.b[21][1]++, m)));
        var c = (n.s[35]++, '<' + e.tag + l(e, t));
        return n.s[36]++, c + '>' + o(e.content, t) + '</' + e.tag + '>';
      }
      return n.f[0]++, n.s[43]++, o(e);
    };
  },
  function(e, l, o) {
    'use strict';
    o.r(l);
    o(2);
    var t,
      m,
      c,
      d,
      n = o(0),
      i =
        ((t =
          'C:\\Users\\cweee\\WebstormProjects\\design-system-15\\src\\templates\\template-layout.js'),
        (m = new Function('return this')()),
        (d = m[(c = '__coverage__')] || (m[c] = {}))[t] &&
        '69d718671a053a3e7362ecb9bef575aa19578f36' === d[t].hash
          ? d[t]
          : (d[t] = {
              path:
                'C:\\Users\\cweee\\WebstormProjects\\design-system-15\\src\\templates\\template-layout.js',
              statementMap: {
                0: { start: { line: 4, column: 15 }, end: { line: 2946, column: 2 } },
                1: { start: { line: 2948, column: 14 }, end: { line: 5060, column: 2 } },
                2: { start: { line: 5062, column: 16 }, end: { line: 6386, column: 2 } },
                3: { start: { line: 6388, column: 16 }, end: { line: 8175, column: 2 } },
                4: { start: { line: 8177, column: 16 }, end: { line: 10123, column: 2 } },
                5: { start: { line: 10125, column: 22 }, end: { line: 10125, column: 63 } },
                6: { start: { line: 10126, column: 0 }, end: { line: 10128, column: 1 } },
                7: { start: { line: 10127, column: 2 }, end: { line: 10127, column: 36 } },
                8: { start: { line: 10130, column: 18 }, end: { line: 10130, column: 50 } },
                9: { start: { line: 10131, column: 0 }, end: { line: 10133, column: 1 } },
                10: { start: { line: 10132, column: 2 }, end: { line: 10132, column: 31 } },
                11: { start: { line: 10135, column: 20 }, end: { line: 10135, column: 54 } },
                12: { start: { line: 10136, column: 0 }, end: { line: 10138, column: 1 } },
                13: { start: { line: 10137, column: 2 }, end: { line: 10137, column: 35 } },
                14: { start: { line: 10140, column: 20 }, end: { line: 10140, column: 54 } },
                15: { start: { line: 10141, column: 0 }, end: { line: 10143, column: 1 } },
                16: { start: { line: 10142, column: 2 }, end: { line: 10142, column: 35 } },
                17: { start: { line: 10145, column: 20 }, end: { line: 10145, column: 54 } },
                18: { start: { line: 10146, column: 0 }, end: { line: 10148, column: 1 } },
                19: { start: { line: 10147, column: 2 }, end: { line: 10147, column: 35 } }
              },
              fnMap: {},
              branchMap: {
                0: {
                  loc: { start: { line: 10126, column: 0 }, end: { line: 10128, column: 1 } },
                  type: 'if',
                  locations: [
                    { start: { line: 10126, column: 0 }, end: { line: 10128, column: 1 } },
                    { start: { line: 10126, column: 0 }, end: { line: 10128, column: 1 } }
                  ],
                  line: 10126
                },
                1: {
                  loc: { start: { line: 10131, column: 0 }, end: { line: 10133, column: 1 } },
                  type: 'if',
                  locations: [
                    { start: { line: 10131, column: 0 }, end: { line: 10133, column: 1 } },
                    { start: { line: 10131, column: 0 }, end: { line: 10133, column: 1 } }
                  ],
                  line: 10131
                },
                2: {
                  loc: { start: { line: 10136, column: 0 }, end: { line: 10138, column: 1 } },
                  type: 'if',
                  locations: [
                    { start: { line: 10136, column: 0 }, end: { line: 10138, column: 1 } },
                    { start: { line: 10136, column: 0 }, end: { line: 10138, column: 1 } }
                  ],
                  line: 10136
                },
                3: {
                  loc: { start: { line: 10141, column: 0 }, end: { line: 10143, column: 1 } },
                  type: 'if',
                  locations: [
                    { start: { line: 10141, column: 0 }, end: { line: 10143, column: 1 } },
                    { start: { line: 10141, column: 0 }, end: { line: 10143, column: 1 } }
                  ],
                  line: 10141
                },
                4: {
                  loc: { start: { line: 10146, column: 0 }, end: { line: 10148, column: 1 } },
                  type: 'if',
                  locations: [
                    { start: { line: 10146, column: 0 }, end: { line: 10148, column: 1 } },
                    { start: { line: 10146, column: 0 }, end: { line: 10148, column: 1 } }
                  ],
                  line: 10146
                }
              },
              s: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0,
                18: 0,
                19: 0
              },
              f: {},
              b: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] },
              _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
              hash: '69d718671a053a3e7362ecb9bef575aa19578f36'
            })),
      s =
        (i.s[0]++,
        Object(n.default)({
          block: 'theme',
          mods: { color: 'project-default', size: 'default', space: 'default', gap: 'small' },
          content: {
            block: 'layout',
            content: {
              block: 'layout',
              elem: 'container',
              elemMods: { size: 'm', align: 'center' },
              content: {
                block: 'grid',
                mods: { 'm-columns': '10' },
                content: [
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '5' },
                    content: [
                      {
                        block: 'payment',
                        mix: [{ block: 'form', mods: { border: 'all', view: 'default' } }],
                        content: [
                          {
                            block: 'payment',
                            elem: 'header',
                            mix: [
                              {
                                block: 'form',
                                elem: 'item',
                                elemMods: { 'space-v': 's', 'space-h': 'xl', border: 'bottom' }
                              }
                            ],
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'xxl' },
                                content: { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                              }
                            ]
                          },
                          {
                            block: 'payment',
                            elem: 'content',
                            mix: [
                              {
                                block: 'form',
                                elem: 'item',
                                elemMods: { 'space-v': 'xxxl', 'space-h': 'xl', border: 'bottom' }
                              }
                            ],
                            content: [
                              {
                                block: 'form',
                                elem: 'item',
                                elemMods: {
                                  'indent-b': 'xl',
                                  distribute: 'between',
                                  'vertical-align': 'center'
                                },
                                content: [
                                  {
                                    block: 'form',
                                    elem: 'label',
                                    elemMods: { width: 'default' },
                                    content: [
                                      {
                                        block: 'text',
                                        mods: { view: 'primary', size: 'l' },
                                        content: {
                                          block: 'text',
                                          elem: 'word',
                                          elemMods: { width: 'l' }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    block: 'form',
                                    elem: 'control',
                                    content: {
                                      block: 'input',
                                      mix: [{ block: 'payment', elem: 'input' }],
                                      mods: { size: 'l' }
                                    }
                                  }
                                ]
                              },
                              {
                                block: 'form',
                                elem: 'item',
                                elemMods: {
                                  'indent-b': 'xl',
                                  distribute: 'between',
                                  'vertical-align': 'center'
                                },
                                content: [
                                  {
                                    block: 'form',
                                    elem: 'label',
                                    elemMods: { width: 'default' },
                                    content: [
                                      {
                                        block: 'text',
                                        mods: { view: 'primary', size: 'l' },
                                        content: {
                                          block: 'text',
                                          elem: 'word',
                                          elemMods: { width: 'l' }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    block: 'form',
                                    elem: 'control',
                                    content: {
                                      block: 'input',
                                      mix: [{ block: 'payment', elem: 'input' }],
                                      mods: { size: 'l' }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'payment',
                            elem: 'footer',
                            mix: [
                              {
                                block: 'form',
                                elem: 'item',
                                elemMods: {
                                  distribute: 'between',
                                  border: 'bottom',
                                  'vertical-align': 'center',
                                  'space-v': 'l',
                                  'space-h': 'xl'
                                }
                              }
                            ],
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                              },
                              { block: 'button', mods: { size: 'l', width: 'full' } }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': 5 },
                    content: [
                      {
                        block: 'warning',
                        mix: [
                          { block: 'informer' },
                          { block: 'theme', mods: { color: 'project-warning' } }
                        ],
                        content: [
                          {
                            block: 'warning',
                            elem: 'content',
                            mix: [
                              {
                                block: 'informer',
                                elem: 'content',
                                elemMods: { distribute: 'center', 'space-a': 'xxl' }
                              }
                            ],
                            content: [
                              {
                                block: 'placeholder',
                                mods: { size: 'm' },
                                mix: [{ block: 'warning', elem: 'placeholder' }]
                              },
                              {
                                block: 'text',
                                mods: { size: 'xl', view: 'primary' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'warning',
                            elem: 'button-wrapper',
                            mix: [
                              {
                                block: 'informer',
                                elem: 'action',
                                elemMods: { distribute: 'center', 'space-a': 'xl' }
                              }
                            ],
                            content: [{ block: 'button', mods: { size: 'l', width: 'full' } }]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '2' },
                    content: [
                      {
                        block: 'product',
                        mix: [{ block: 'card', mods: { view: 'default', border: 'all' } }],
                        content: [
                          {
                            block: 'product',
                            elem: 'content',
                            mix: [{ block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } }],
                            content: [{ block: 'image' }]
                          },
                          {
                            block: 'product',
                            elem: 'footer',
                            mix: [{ block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }],
                            content: [
                              {
                                block: 'text',
                                mods: { size: 'm', view: 'primary' },
                                content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                              },
                              {
                                block: 'text',
                                mods: { size: 's', view: 'primary' },
                                content: [{ block: 'text', elem: 'word', elemMods: { width: 'm' } }]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '5' },
                    content: [
                      {
                        block: 'history',
                        mix: [{ block: 'list', mods: { view: 'default', border: 'all' } }],
                        content: [
                          {
                            block: 'history',
                            elem: 'transaction',
                            mix: [
                              {
                                block: 'list',
                                elem: 'item',
                                elemMods: { border: 'bottom', 'space-a': 'l' }
                              }
                            ],
                            content: [
                              {
                                block: 'history',
                                elem: 'show',
                                mix: [
                                  { block: 'e-accordion', elem: 'short' },
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'vertical-align': 'center' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'history',
                                    elem: 'details',
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'time',
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'destination',
                                        mix: [
                                          {
                                            block: 'icon-plus',
                                            mods: { 'vertical-align': 'center' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'history',
                                            elem: 'pic',
                                            mix: [
                                              {
                                                block: 'icon-plus',
                                                elem: 'icon',
                                                elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                              }
                                            ],
                                            content: [
                                              {
                                                block: 'brand-logo',
                                                mods: { name: 'yota', size: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'history',
                                            elem: 'label',
                                            mix: [{ block: 'icon-plus', elem: 'block' }],
                                            content: [
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                }
                                              },
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'history',
                                elem: 'hide',
                                mix: [
                                  {
                                    block: 'e-accordion',
                                    elem: 'more',
                                    elemMods: { view: 'default' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'm' },
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'description',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { 'indent-b': 'm' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'actions',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { distribute: 'between', 'indent-b': 'l' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'history',
                            elem: 'transaction',
                            mix: [
                              {
                                block: 'list',
                                elem: 'item',
                                elemMods: { border: 'bottom', 'space-a': 'l' }
                              }
                            ],
                            content: [
                              {
                                block: 'history',
                                elem: 'show',
                                mix: [
                                  { block: 'e-accordion', elem: 'short' },
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'vertical-align': 'center' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'history',
                                    elem: 'details',
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'time',
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'destination',
                                        mix: [
                                          {
                                            block: 'icon-plus',
                                            mods: { 'vertical-align': 'center' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'history',
                                            elem: 'pic',
                                            mix: [
                                              {
                                                block: 'icon-plus',
                                                elem: 'icon',
                                                elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                              }
                                            ],
                                            content: [
                                              {
                                                block: 'brand-logo',
                                                mods: { name: 'kcell', size: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'history',
                                            elem: 'label',
                                            mix: [{ block: 'icon-plus', elem: 'block' }],
                                            content: [
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                }
                                              },
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'history',
                                elem: 'hide',
                                mix: [
                                  {
                                    block: 'e-accordion',
                                    elem: 'more',
                                    elemMods: { view: 'default' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'm' },
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'description',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { 'indent-b': 'm' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'actions',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { distribute: 'between', 'indent-b': 'l' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'history',
                            elem: 'transaction',
                            mix: [
                              {
                                block: 'list',
                                elem: 'item',
                                elemMods: { border: 'bottom', 'space-a': 'l' }
                              }
                            ],
                            content: [
                              {
                                block: 'history',
                                elem: 'show',
                                mix: [
                                  { block: 'e-accordion', elem: 'short' },
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'vertical-align': 'center' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'history',
                                    elem: 'details',
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'time',
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'destination',
                                        mix: [
                                          {
                                            block: 'icon-plus',
                                            mods: { 'vertical-align': 'center' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'history',
                                            elem: 'pic',
                                            mix: [
                                              {
                                                block: 'icon-plus',
                                                elem: 'icon',
                                                elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                              }
                                            ],
                                            content: [
                                              {
                                                block: 'brand-logo',
                                                mods: { name: 'megafon', size: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'history',
                                            elem: 'label',
                                            mix: [{ block: 'icon-plus', elem: 'block' }],
                                            content: [
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                }
                                              },
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'history',
                                elem: 'hide',
                                mix: [
                                  {
                                    block: 'e-accordion',
                                    elem: 'more',
                                    elemMods: { view: 'default' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'm' },
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'description',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { 'indent-b': 'm' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'actions',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { distribute: 'between', 'indent-b': 'l' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'history',
                            elem: 'transaction',
                            mix: [
                              {
                                block: 'list',
                                elem: 'item',
                                elemMods: { border: 'bottom', 'space-a': 'l' }
                              }
                            ],
                            content: [
                              {
                                block: 'history',
                                elem: 'show',
                                mix: [
                                  { block: 'e-accordion', elem: 'short' },
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'vertical-align': 'center' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'history',
                                    elem: 'details',
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'time',
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { view: 'ghost', size: 's' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'destination',
                                        mix: [
                                          {
                                            block: 'icon-plus',
                                            mods: { 'vertical-align': 'center' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'history',
                                            elem: 'pic',
                                            mix: [
                                              {
                                                block: 'icon-plus',
                                                elem: 'icon',
                                                elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                              }
                                            ],
                                            content: [
                                              {
                                                block: 'brand-logo',
                                                mods: { name: 'mts', size: 'm' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'history',
                                            elem: 'label',
                                            mix: [{ block: 'icon-plus', elem: 'block' }],
                                            content: [
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                }
                                              },
                                              {
                                                block: 'text',
                                                mods: { view: 'primary', size: 'l' },
                                                content: {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'history',
                                elem: 'hide',
                                mix: [
                                  {
                                    block: 'e-accordion',
                                    elem: 'more',
                                    elemMods: { view: 'default' }
                                  }
                                ],
                                content: [
                                  {
                                    block: 'list',
                                    elem: 'item',
                                    elemMods: { 'indent-t': 'm' },
                                    content: [
                                      {
                                        block: 'history',
                                        elem: 'description',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { 'indent-b': 'm' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              },
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        block: 'history',
                                        elem: 'actions',
                                        mix: [
                                          {
                                            block: 'list',
                                            elem: 'item',
                                            elemMods: { distribute: 'between', 'indent-b': 'l' }
                                          }
                                        ],
                                        content: [
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            ]
                                          },
                                          {
                                            block: 'text',
                                            mods: { size: 'l', view: 'primary' },
                                            content: [
                                              {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'm' }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                    content: [
                      {
                        block: 'commercial',
                        mix: [
                          { block: 'card', mods: { view: 'default' } },
                          { block: 'theme', mods: { color: 'project-brand' } }
                        ],
                        content: [
                          {
                            block: 'commercial',
                            elem: 'pic',
                            mix: [
                              { block: 'card', elem: 'content', elemMods: { 'space-a': 'xxl' } }
                            ],
                            content: [{ block: 'image' }]
                          },
                          {
                            block: 'commercial',
                            elem: 'info',
                            mix: [
                              { block: 'card', elem: 'footer', elemMods: { 'space-a': 'xxl' } }
                            ],
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 's' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                ]
                              },
                              {
                                block: 'navigation',
                                content: [
                                  { block: 'page-button' },
                                  { block: 'page-button' },
                                  { block: 'page-button' }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                    content: [
                      {
                        block: 'cover',
                        mix: [
                          { block: 'card', mods: { view: 'default' } },
                          { block: 'theme', mods: { color: 'project-brand' } }
                        ],
                        content: [
                          {
                            block: 'cover',
                            elem: 'info',
                            mix: [
                              { block: 'card', elem: 'content', elemMods: { 'space-a': 'xxl' } }
                            ],
                            content: [
                              { block: 'image' },
                              {
                                block: 'cover',
                                elem: 'preview',
                                mix: [{ block: 'theme', mods: { color: 'project-brand' } }],
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'xxl' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                    ]
                                  },
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'xxl' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'cover',
                                elem: 'footer',
                                mix: [
                                  { block: 'card', elem: 'footer', elemMods: { 'space-a': 'xxl' } }
                                ],
                                content: [{ block: 'button', mods: { size: 'l' } }]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '8' },
                    content: [
                      {
                        block: 'header',
                        content: [
                          {
                            block: 'header',
                            elem: 'content',
                            content: [{ block: 'header', elem: 'logo' }]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                    content: [
                      {
                        block: 'collect',
                        mix: [
                          { block: 'card', mods: { view: 'default', border: 'all' } },
                          { block: 'theme', mods: { color: 'project-inverse' } }
                        ],
                        content: [
                          {
                            block: 'collect',
                            elem: 'image',
                            mix: [{ block: 'card', elem: 'content' }],
                            content: [{ block: 'image' }]
                          },
                          {
                            block: 'collect',
                            elem: 'progress',
                            content: [{ block: 'collect', elem: 'done' }]
                          },
                          {
                            block: 'collect',
                            elem: 'footer',
                            mix: [{ block: 'card', elem: 'footer', elemMods: { 'space-a': 'l' } }],
                            content: [
                              {
                                block: 'text',
                                mods: { size: 'l', view: 'primary' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                ]
                              },
                              {
                                block: 'text',
                                mods: { size: 'm', view: 'secondary' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '4' },
                    content: [
                      {
                        block: 'articles',
                        mix: [{ block: 'list', mods: { view: 'default' } }],
                        content: [
                          {
                            block: 'articles',
                            elem: 'article',
                            mix: [{ block: 'list', elem: 'item', elemMods: { 'indent-b': 'xl' } }],
                            content: [
                              {
                                block: 'articles',
                                elem: 'unit',
                                mix: [{ block: 'icon-plus', mods: { 'vertical-align': 'center' } }],
                                content: [
                                  {
                                    block: 'articles',
                                    elem: 'pic',
                                    mix: [
                                      { block: 'theme', mods: { color: 'project-inverse' } },
                                      {
                                        block: 'icon-plus',
                                        elem: 'icon',
                                        elemMods: { 'indent-r': 'm' }
                                      }
                                    ],
                                    content: [{ block: 'image' }]
                                  },
                                  {
                                    block: 'articles',
                                    elem: 'content',
                                    mix: [{ block: 'icon-plus', elem: 'block' }],
                                    content: [
                                      {
                                        block: 'text',
                                        mods: { view: 'secondary', size: 'l' },
                                        content: [
                                          { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                          { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                          { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                          { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                        ]
                                      },
                                      {
                                        block: 'text',
                                        mods: { view: 'primary', size: 'l' },
                                        content: [
                                          { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                          { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                        ]
                                      },
                                      {
                                        block: 'text',
                                        mods: { view: 'link', size: 'm' },
                                        content: [
                                          { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                          { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                    content: [
                      {
                        block: 'offer',
                        mix: [
                          { block: 'theme', mods: { color: 'megafon-brand' } },
                          { block: 'card', mods: { view: 'default' } }
                        ],
                        content: [
                          {
                            block: 'offer',
                            elem: 'partner',
                            mix: [
                              { block: 'card', elem: 'content', elemMods: { 'space-a': 'xl' } }
                            ],
                            content: [
                              { block: 'brand-logo', mods: { name: 'megafon', size: 'm' } },
                              {
                                block: 'offer',
                                elem: 'name',
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'ghost', size: 's' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'offer',
                                elem: 'sale',
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'xxl' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'offer',
                            elem: 'footer',
                            mix: [{ block: 'card', elem: 'footer', elemMods: { 'space-a': 'xl' } }],
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'secondary', size: 'm' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '3' },
                    content: [
                      {
                        block: 'subscription',
                        mix: [
                          { block: 'card', mods: { view: 'default' } },
                          { block: 'theme', mods: { color: 'project-brand' } }
                        ],
                        content: [
                          {
                            block: 'subscription',
                            elem: 'info',
                            mix: [
                              { block: 'card', elem: 'content', elemMods: { 'space-a': 'xl' } }
                            ],
                            content: [
                              {
                                block: 'subscription',
                                elem: 'title',
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'xxl' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'subscription',
                            elem: 'advantages',
                            mix: [{ block: 'list' }],
                            content: [
                              {
                                block: 'subscription',
                                elem: 'advantage',
                                mix: [
                                  { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'subscription',
                                elem: 'advantage',
                                mix: [
                                  { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'subscription',
                                elem: 'advantage',
                                mix: [
                                  { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'subscription',
                                elem: 'advantage',
                                mix: [
                                  { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'subscription',
                                elem: 'advantage',
                                mix: [
                                  { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } }
                                ],
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'l' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'subscription',
                            elem: 'footer',
                            mix: [
                              { block: 'card', elem: 'footer', elemMods: { 'space-a': 'xl' } },
                              { block: 'list' }
                            ],
                            content: [
                              {
                                block: 'subscription',
                                elem: 'control',
                                mix: [
                                  { block: 'list', elem: 'item', elemMods: { 'space-b': 's' } }
                                ],
                                content: [{ block: 'input', mods: { size: 'l' } }]
                              },
                              { block: 'button', mods: { size: 'l', width: 'full' } }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '5' },
                    content: [
                      {
                        block: 'event',
                        mix: [
                          { block: 'card', mods: { view: 'default' } },
                          { block: 'theme', mods: { color: 'project-inverse' } }
                        ],
                        content: [
                          {
                            block: 'event',
                            elem: 'content',
                            mix: [
                              {
                                block: 'card',
                                elem: 'content',
                                elemMods: {
                                  'vertical-align': 'center',
                                  distribute: 'center',
                                  'space-a': 'xxl'
                                }
                              }
                            ],
                            content: [
                              {
                                block: 'event',
                                elem: 'preview',
                                content: [
                                  {
                                    block: 'event',
                                    elem: 'speaker',
                                    content: [{ block: 'avatar', mods: { size: 'm' } }]
                                  },
                                  { block: 'brand-logo', mods: { name: 'mts', size: 'm' } }
                                ]
                              },
                              {
                                block: 'event',
                                elem: 'title',
                                content: [
                                  {
                                    block: 'text',
                                    mods: { view: 'primary', size: 'xxl', align: 'center' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                    ]
                                  }
                                ]
                              },
                              {
                                block: 'event',
                                elem: 'description',
                                content: [
                                  {
                                    block: 'text',
                                    mods: { size: 'l', align: 'center', view: 'primary' },
                                    content: [
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                      { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            block: 'event',
                            elem: 'footer',
                            mix: [
                              {
                                block: 'card',
                                elem: 'footer',
                                elemMods: {
                                  'vertical-align': 'center',
                                  distribute: 'center',
                                  'space-a': 'xxl'
                                }
                              }
                            ],
                            content: [
                              {
                                block: 'text',
                                mods: { size: 'xl', view: 'link', align: 'center' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '1' },
                    content: [
                      { block: 'onoffswitch', content: [{ block: 'onoffswitch', elem: 'button' }] }
                    ]
                  },
                  {
                    block: 'grid',
                    elem: 'fraction',
                    elemMods: { 'm-col': '8' },
                    content: [
                      {
                        block: 'footer',
                        content: [
                          {
                            block: 'footer',
                            elem: 'content',
                            content: [
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: [
                                  { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                  { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                ]
                              },
                              {
                                block: 'text',
                                mods: { view: 'primary', size: 'l' },
                                content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        })),
      r =
        (i.s[1]++,
        Object(n.default)({
          block: 'theme',
          mods: { color: 'project-default', size: 'default', space: 'default' },
          content: [
            {
              block: 'layout',
              content: [
                {
                  block: 'header',
                  mix: [{ block: 'theme' }],
                  content: [
                    {
                      block: 'header',
                      elem: 'content',
                      content: [
                        { block: 'header', elem: 'logo' },
                        {
                          block: 'onoffswitch',
                          content: [{ block: 'onoffswitch', elem: 'button' }]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 'm', align: 'center', 'indent-b': 'xxl' },
                  content: [
                    {
                      block: 'grid',
                      mods: { 'm-columns': '10', 'col-gap': 'full' },
                      content: [
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '5' },
                          content: [
                            {
                              block: 'payment',
                              mix: [{ block: 'form', mods: { border: 'all' } }],
                              content: [
                                {
                                  block: 'payment',
                                  elem: 'header',
                                  mix: [
                                    {
                                      block: 'form',
                                      elem: 'item',
                                      elemMods: {
                                        'space-v': 'l',
                                        'space-h': 'xl',
                                        border: 'bottom'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { view: 'primary', size: 'xxl' },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: { width: 'l' }
                                      }
                                    }
                                  ]
                                },
                                {
                                  block: 'payment',
                                  elem: 'content',
                                  mix: [
                                    {
                                      block: 'form',
                                      elem: 'item',
                                      elemMods: {
                                        'space-v': 'xxxl',
                                        'space-h': 'xl',
                                        border: 'bottom'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'form',
                                      elem: 'item',
                                      elemMods: {
                                        'indent-b': 'xl',
                                        distribute: 'between',
                                        'vertical-align': 'center'
                                      },
                                      content: [
                                        {
                                          block: 'form',
                                          elem: 'label',
                                          elemMods: { width: 'default' },
                                          content: [
                                            {
                                              block: 'text',
                                              mods: { view: 'primary', size: 'l' },
                                              content: {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'form',
                                          elem: 'control',
                                          content: { block: 'input', mods: { size: 'l' } }
                                        }
                                      ]
                                    },
                                    {
                                      block: 'form',
                                      elem: 'item',
                                      elemMods: {
                                        'indent-b': 'xl',
                                        distribute: 'between',
                                        'vertical-align': 'center'
                                      },
                                      content: [
                                        {
                                          block: 'form',
                                          elem: 'label',
                                          elemMods: { width: 'default' },
                                          content: [
                                            {
                                              block: 'text',
                                              mods: { view: 'primary', size: 'l' },
                                              content: {
                                                block: 'text',
                                                elem: 'word',
                                                elemMods: { width: 'l' }
                                              }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'form',
                                          elem: 'control',
                                          content: { block: 'input', mods: { size: 'l' } }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'payment',
                                  elem: 'footer',
                                  mix: [
                                    {
                                      block: 'form',
                                      elem: 'item',
                                      elemMods: {
                                        distribute: 'between',
                                        border: 'bottom',
                                        'vertical-align': 'center',
                                        'space-v': 'l',
                                        'space-h': 'xl'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { view: 'primary', size: 'l' },
                                      content: {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: { width: 'l' }
                                      }
                                    },
                                    { block: 'button', mods: { size: 'l' } }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '5' },
                          content: [
                            {
                              block: 'warning',
                              mix: [
                                { block: 'informer', mods: { view: 'default', border: 'all' } }
                              ],
                              content: [
                                {
                                  block: 'warning',
                                  elem: 'content',
                                  mix: [
                                    {
                                      block: 'informer',
                                      elem: 'content',
                                      elemMods: { distribute: 'center', 'space-a': 'xxl' }
                                    }
                                  ],
                                  content: [
                                    { block: 'placeholder', mods: { view: 'primary', size: 'm' } },
                                    {
                                      block: 'text',
                                      mods: { size: 'xl', view: 'primary', align: 'center' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'warning',
                                  elem: 'button-wrapper',
                                  mix: [
                                    {
                                      block: 'informer',
                                      elem: 'action',
                                      elemMods: { distribute: 'center', 'space-a': 'xl' }
                                    }
                                  ],
                                  content: [{ block: 'button', mods: { size: 'l' } }]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 'm', align: 'center', 'indent-b': 'xxl' },
                  content: [
                    {
                      block: 'grid',
                      mods: { 'm-columns': '10', 'col-gap': 'half' },
                      content: [
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '2' },
                          content: [
                            {
                              block: 'product',
                              mix: [{ block: 'card', mods: { view: 'default', border: 'all' } }],
                              content: [
                                {
                                  block: 'product',
                                  elem: 'content',
                                  mix: [
                                    { block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [{ block: 'image' }]
                                },
                                {
                                  block: 'product',
                                  elem: 'footer',
                                  mix: [
                                    { block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: { size: 's', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '2' },
                          content: [
                            {
                              block: 'product',
                              mix: [{ block: 'card', mods: { view: 'default', border: 'all' } }],
                              content: [
                                {
                                  block: 'product',
                                  elem: 'content',
                                  mix: [
                                    { block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [{ block: 'image' }]
                                },
                                {
                                  block: 'product',
                                  elem: 'footer',
                                  mix: [
                                    { block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: { size: 's', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '2' },
                          content: [
                            {
                              block: 'product',
                              mix: [{ block: 'card', mods: { view: 'default', border: 'all' } }],
                              content: [
                                {
                                  block: 'product',
                                  elem: 'content',
                                  mix: [
                                    { block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [{ block: 'image' }]
                                },
                                {
                                  block: 'product',
                                  elem: 'footer',
                                  mix: [
                                    { block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: { size: 's', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '2' },
                          content: [
                            {
                              block: 'product',
                              mix: [{ block: 'card', mods: { view: 'default', border: 'all' } }],
                              content: [
                                {
                                  block: 'product',
                                  elem: 'content',
                                  mix: [
                                    { block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [{ block: 'image' }]
                                },
                                {
                                  block: 'product',
                                  elem: 'footer',
                                  mix: [
                                    { block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: { size: 's', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '2' },
                          content: [
                            {
                              block: 'product',
                              mix: [{ block: 'card', mods: { view: 'default', border: 'all' } }],
                              content: [
                                {
                                  block: 'product',
                                  elem: 'content',
                                  mix: [
                                    { block: 'card', elem: 'content', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [{ block: 'image' }]
                                },
                                {
                                  block: 'product',
                                  elem: 'footer',
                                  mix: [
                                    { block: 'card', elem: 'footer', elemMods: { 'space-a': 'm' } }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: { size: 's', view: 'primary' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 'm', align: 'center' },
                  content: [
                    {
                      block: 'grid',
                      mods: { 'm-columns': '12', 'col-gap': 'full' },
                      content: [
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '8' },
                          content: [
                            {
                              block: 'history',
                              mix: [{ block: 'list', mods: { view: 'default', border: 'all' } }],
                              content: [
                                {
                                  block: 'history',
                                  elem: 'transaction',
                                  mix: [
                                    {
                                      block: 'list',
                                      elem: 'item',
                                      elemMods: { border: 'bottom', 'space-a': 'l' }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'history',
                                      elem: 'show',
                                      mix: [
                                        { block: 'e-accordion', elem: 'short' },
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'vertical-align': 'center' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'history',
                                          elem: 'details',
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'time',
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'destination',
                                              mix: [
                                                {
                                                  block: 'icon-plus',
                                                  mods: { 'vertical-align': 'center' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'history',
                                                  elem: 'pic',
                                                  mix: [
                                                    {
                                                      block: 'icon-plus',
                                                      elem: 'icon',
                                                      elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                                    }
                                                  ],
                                                  content: [
                                                    {
                                                      block: 'brand-logo',
                                                      mods: { name: 'yota', size: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'history',
                                                  elem: 'label',
                                                  mix: [{ block: 'icon-plus', elem: 'block' }],
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'l' }
                                                      }
                                                    },
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'm' }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'history',
                                      elem: 'hide',
                                      mix: [
                                        {
                                          block: 'e-accordion',
                                          elem: 'more',
                                          elemMods: { view: 'default' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'indent-t': 'm' },
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'description',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: { 'indent-b': 'm' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'actions',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: {
                                                    distribute: 'between',
                                                    'indent-b': 'l'
                                                  }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'transaction',
                                  mix: [
                                    {
                                      block: 'list',
                                      elem: 'item',
                                      elemMods: { border: 'bottom', 'space-a': 'l' }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'history',
                                      elem: 'show',
                                      mix: [
                                        { block: 'e-accordion', elem: 'short' },
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'vertical-align': 'center' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'history',
                                          elem: 'details',
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'time',
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'destination',
                                              mix: [
                                                {
                                                  block: 'icon-plus',
                                                  mods: { 'vertical-align': 'center' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'history',
                                                  elem: 'pic',
                                                  mix: [
                                                    {
                                                      block: 'icon-plus',
                                                      elem: 'icon',
                                                      elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                                    }
                                                  ],
                                                  content: [
                                                    {
                                                      block: 'brand-logo',
                                                      mods: { name: 'kcell', size: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'history',
                                                  elem: 'label',
                                                  mix: [{ block: 'icon-plus', elem: 'block' }],
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'l' }
                                                      }
                                                    },
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'm' }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'history',
                                      elem: 'hide',
                                      mix: [
                                        {
                                          block: 'e-accordion',
                                          elem: 'more',
                                          elemMods: { view: 'default' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'indent-t': 'm' },
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'description',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: { 'indent-b': 'm' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'actions',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: {
                                                    distribute: 'between',
                                                    'indent-b': 'l'
                                                  }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'transaction',
                                  mix: [
                                    {
                                      block: 'list',
                                      elem: 'item',
                                      elemMods: { border: 'bottom', 'space-a': 'l' }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'history',
                                      elem: 'show',
                                      mix: [
                                        { block: 'e-accordion', elem: 'short' },
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'vertical-align': 'center' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'history',
                                          elem: 'details',
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'time',
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'destination',
                                              mix: [
                                                {
                                                  block: 'icon-plus',
                                                  mods: { 'vertical-align': 'center' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'history',
                                                  elem: 'pic',
                                                  mix: [
                                                    {
                                                      block: 'icon-plus',
                                                      elem: 'icon',
                                                      elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                                    }
                                                  ],
                                                  content: [
                                                    {
                                                      block: 'brand-logo',
                                                      mods: { name: 'megafon', size: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'history',
                                                  elem: 'label',
                                                  mix: [{ block: 'icon-plus', elem: 'block' }],
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'l' }
                                                      }
                                                    },
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'm' }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'history',
                                      elem: 'hide',
                                      mix: [
                                        {
                                          block: 'e-accordion',
                                          elem: 'more',
                                          elemMods: { view: 'default' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'indent-t': 'm' },
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'description',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: { 'indent-b': 'm' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'actions',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: {
                                                    distribute: 'between',
                                                    'indent-b': 'l'
                                                  }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'history',
                                  elem: 'transaction',
                                  mix: [
                                    {
                                      block: 'list',
                                      elem: 'item',
                                      elemMods: { border: 'bottom', 'space-a': 'l' }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'history',
                                      elem: 'show',
                                      mix: [
                                        { block: 'e-accordion', elem: 'short' },
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'vertical-align': 'center' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'history',
                                          elem: 'details',
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'time',
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { view: 'ghost', size: 's' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'destination',
                                              mix: [
                                                {
                                                  block: 'icon-plus',
                                                  mods: { 'vertical-align': 'center' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'history',
                                                  elem: 'pic',
                                                  mix: [
                                                    {
                                                      block: 'icon-plus',
                                                      elem: 'icon',
                                                      elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                                                    }
                                                  ],
                                                  content: [
                                                    {
                                                      block: 'brand-logo',
                                                      mods: { name: 'mts', size: 'm' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'history',
                                                  elem: 'label',
                                                  mix: [{ block: 'icon-plus', elem: 'block' }],
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'l' }
                                                      }
                                                    },
                                                    {
                                                      block: 'text',
                                                      mods: { view: 'primary', size: 'l' },
                                                      content: {
                                                        block: 'text',
                                                        elem: 'word',
                                                        elemMods: { width: 'm' }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'history',
                                      elem: 'hide',
                                      mix: [
                                        {
                                          block: 'e-accordion',
                                          elem: 'more',
                                          elemMods: { view: 'default' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'indent-t': 'm' },
                                          content: [
                                            {
                                              block: 'history',
                                              elem: 'description',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: { 'indent-b': 'm' }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    },
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              block: 'history',
                                              elem: 'actions',
                                              mix: [
                                                {
                                                  block: 'list',
                                                  elem: 'item',
                                                  elemMods: {
                                                    distribute: 'between',
                                                    'indent-b': 'l'
                                                  }
                                                }
                                              ],
                                              content: [
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'l' }
                                                    }
                                                  ]
                                                },
                                                {
                                                  block: 'text',
                                                  mods: { size: 'l', view: 'primary' },
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      elem: 'word',
                                                      elemMods: { width: 'm' }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '4' },
                          content: [
                            {
                              block: 'commercial',
                              mix: [
                                { block: 'card', mods: { view: 'default' } },
                                { block: 'theme', mods: { color: 'project-brand' } }
                              ],
                              content: [
                                {
                                  block: 'commercial',
                                  elem: 'pic',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'content',
                                      elemMods: { 'space-a': 'xxl' }
                                    }
                                  ],
                                  content: [{ block: 'image' }]
                                },
                                {
                                  block: 'commercial',
                                  elem: 'info',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'footer',
                                      elemMods: { 'space-a': 'xxl' }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { view: 'primary', size: 's' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                                      ]
                                    },
                                    {
                                      block: 'navigation',
                                      content: [
                                        { block: 'page-button' },
                                        { block: 'page-button' },
                                        { block: 'page-button' }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'footer',
                  mix: [{ block: 'theme' }],
                  content: [
                    {
                      block: 'footer',
                      elem: 'content',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [
                            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                            { block: 'text', elem: 'word', elemMods: { width: 's' } }
                          ]
                        },
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })),
      b =
        (i.s[2]++,
        Object(n.default)({
          block: 'theme',
          mods: { color: 'project-default', size: 'default', space: 'default' },
          content: [
            {
              block: 'layout',
              content: [
                {
                  block: 'header',
                  mix: [{ block: 'theme' }],
                  content: [
                    {
                      block: 'header',
                      elem: 'content',
                      content: [
                        { block: 'header', elem: 'logo' },
                        {
                          block: 'onoffswitch',
                          content: [{ block: 'onoffswitch', elem: 'button' }]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 'm', align: 'center', 'indent-b': 'xxxxl' },
                  content: [
                    {
                      block: 'grid',
                      mods: { 'm-columns': '12', 'col-gap': 'full' },
                      content: [
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '8' },
                          content: [
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'xxl', type: 'h1' },
                              content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              content: [
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                              ]
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'xxl', type: 'h2' },
                              content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                            },
                            {
                              block: 'text',
                              mods: { view: 'primary', size: 'm' },
                              content: [
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                { block: 'text', elem: 'word', elemMods: { width: 's' } }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '4' },
                          content: [
                            {
                              block: 'cover',
                              mix: [
                                { block: 'card', mods: { view: 'default' } },
                                { block: 'theme', mods: { color: 'project-brand' } }
                              ],
                              content: [
                                {
                                  block: 'cover',
                                  elem: 'info',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'content',
                                      elemMods: { 'space-a': 'xxl' }
                                    }
                                  ],
                                  content: [
                                    { block: 'image' },
                                    {
                                      block: 'cover',
                                      elem: 'preview',
                                      mix: [{ block: 'theme', mods: { color: 'project-brand' } }],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'xxl' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'xxl' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'cover',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'xxl' }
                                        }
                                      ],
                                      content: [{ block: 'button', mods: { size: 'l' } }]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'theme',
                  mods: { color: 'project-inverse', gap: 'small' },
                  content: [
                    {
                      block: 'layout',
                      elem: 'container',
                      elemMods: { size: 'm', align: 'center', 'indent-b': 'xxxxl' },
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary', type: 'h2' },
                          content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                        },
                        {
                          block: 'grid',
                          mods: { 'm-columns': '12', 'col-gap': 'full' },
                          content: [
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'product',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'product',
                                      elem: 'content',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'content',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'product',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 's', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'product',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'product',
                                      elem: 'content',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'content',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'product',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 's', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'product',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'product',
                                      elem: 'content',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'content',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'product',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 's', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'product',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'product',
                                      elem: 'content',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'content',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'product',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'm' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 's', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'footer',
                  mix: [{ block: 'theme' }],
                  content: [
                    {
                      block: 'footer',
                      elem: 'content',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [
                            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                            { block: 'text', elem: 'word', elemMods: { width: 's' } }
                          ]
                        },
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })),
      w =
        (i.s[3]++,
        Object(n.default)({
          block: 'theme',
          mods: { color: 'project-default', size: 'default', space: 'default' },
          content: [
            {
              block: 'layout',
              content: [
                {
                  block: 'header',
                  mix: [{ block: 'theme' }],
                  content: [
                    {
                      block: 'header',
                      elem: 'content',
                      content: [
                        { block: 'header', elem: 'logo' },
                        {
                          block: 'onoffswitch',
                          content: [{ block: 'onoffswitch', elem: 'button' }]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'theme',
                  mods: { color: 'project-inverse', size: 'default', space: 'default' },
                  content: [
                    {
                      block: 'layout',
                      elem: 'container',
                      elemMods: { size: 'm', align: 'center', 'space-v': 'xxxxxl' },
                      content: [
                        {
                          block: 'grid',
                          mods: { 'm-columns': '12', 'col-gap': 'full' },
                          content: [
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'collect',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'collect',
                                      elem: 'image',
                                      mix: [{ block: 'card', elem: 'content' }],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'progress',
                                      content: [
                                        {
                                          block: 'collect',
                                          elem: 'done',
                                          elemMods: { size: 'two-third' }
                                        }
                                      ]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'l' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'l', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'secondary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'collect',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'collect',
                                      elem: 'image',
                                      mix: [{ block: 'card', elem: 'content' }],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'progress',
                                      content: [
                                        {
                                          block: 'collect',
                                          elem: 'done',
                                          elemMods: { size: 'one-third' }
                                        }
                                      ]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'l' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'l', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'secondary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'collect',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'collect',
                                      elem: 'image',
                                      mix: [{ block: 'card', elem: 'content' }],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'progress',
                                      content: [
                                        {
                                          block: 'collect',
                                          elem: 'done',
                                          elemMods: { size: 'half' }
                                        }
                                      ]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'l' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'l', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'secondary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'grid',
                              elem: 'fraction',
                              elemMods: { 'm-col': '3' },
                              content: [
                                {
                                  block: 'collect',
                                  mix: [
                                    { block: 'card', mods: { view: 'default', border: 'all' } }
                                  ],
                                  content: [
                                    {
                                      block: 'collect',
                                      elem: 'image',
                                      mix: [{ block: 'card', elem: 'content' }],
                                      content: [{ block: 'image' }]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'progress',
                                      content: [
                                        {
                                          block: 'collect',
                                          elem: 'done',
                                          elemMods: { size: 'two-third' }
                                        }
                                      ]
                                    },
                                    {
                                      block: 'collect',
                                      elem: 'footer',
                                      mix: [
                                        {
                                          block: 'card',
                                          elem: 'footer',
                                          elemMods: { 'space-a': 'l' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'l', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        },
                                        {
                                          block: 'text',
                                          mods: { size: 'm', view: 'secondary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 'm', align: 'center', 'space-v': 'xxxxl' },
                  content: [
                    {
                      block: 'grid',
                      mods: { 'm-columns': '12', 'col-gap': 'full' },
                      content: [
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '5' },
                          content: [
                            {
                              block: 'articles',
                              mix: [{ block: 'list', mods: { view: 'default' } }],
                              content: [
                                {
                                  block: 'articles',
                                  elem: 'article',
                                  mix: [
                                    { block: 'list', elem: 'item', elemMods: { 'indent-b': 'xl' } }
                                  ],
                                  content: [
                                    {
                                      block: 'articles',
                                      elem: 'unit',
                                      mix: [
                                        { block: 'icon-plus', mods: { 'vertical-align': 'center' } }
                                      ],
                                      content: [
                                        {
                                          block: 'articles',
                                          elem: 'pic',
                                          mix: [
                                            { block: 'theme', mods: { color: 'project-inverse' } },
                                            {
                                              block: 'icon-plus',
                                              elem: 'icon',
                                              elemMods: { 'indent-r': 'm' }
                                            }
                                          ],
                                          content: [{ block: 'image' }]
                                        },
                                        {
                                          block: 'articles',
                                          elem: 'content',
                                          mix: [{ block: 'icon-plus', elem: 'block' }],
                                          content: [
                                            {
                                              block: 'text',
                                              mods: { view: 'secondary', size: 'l' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              ]
                                            },
                                            {
                                              block: 'text',
                                              mods: { view: 'primary', size: 'l' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              ]
                                            },
                                            {
                                              block: 'text',
                                              mods: { view: 'link', size: 'm' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'articles',
                                      elem: 'unit',
                                      mix: [
                                        { block: 'icon-plus', mods: { 'vertical-align': 'center' } }
                                      ],
                                      content: [
                                        {
                                          block: 'articles',
                                          elem: 'pic',
                                          mix: [
                                            { block: 'theme', mods: { color: 'project-inverse' } },
                                            {
                                              block: 'icon-plus',
                                              elem: 'icon',
                                              elemMods: { 'indent-r': 'm' }
                                            }
                                          ],
                                          content: [{ block: 'image' }]
                                        },
                                        {
                                          block: 'articles',
                                          elem: 'content',
                                          mix: [{ block: 'icon-plus', elem: 'block' }],
                                          content: [
                                            {
                                              block: 'text',
                                              mods: { view: 'secondary', size: 'l' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              ]
                                            },
                                            {
                                              block: 'text',
                                              mods: { view: 'primary', size: 'l' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              ]
                                            },
                                            {
                                              block: 'text',
                                              mods: { view: 'link', size: 'm' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'articles',
                                      elem: 'unit',
                                      mix: [
                                        { block: 'icon-plus', mods: { 'vertical-align': 'center' } }
                                      ],
                                      content: [
                                        {
                                          block: 'articles',
                                          elem: 'pic',
                                          mix: [
                                            { block: 'theme', mods: { color: 'project-inverse' } },
                                            {
                                              block: 'icon-plus',
                                              elem: 'icon',
                                              elemMods: { 'indent-r': 'm' }
                                            }
                                          ],
                                          content: [{ block: 'image' }]
                                        },
                                        {
                                          block: 'articles',
                                          elem: 'content',
                                          mix: [{ block: 'icon-plus', elem: 'block' }],
                                          content: [
                                            {
                                              block: 'text',
                                              mods: { view: 'secondary', size: 'l' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              ]
                                            },
                                            {
                                              block: 'text',
                                              mods: { view: 'primary', size: 'l' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'l' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                }
                                              ]
                                            },
                                            {
                                              block: 'text',
                                              mods: { view: 'link', size: 'm' },
                                              content: [
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 'm' }
                                                },
                                                {
                                                  block: 'text',
                                                  elem: 'word',
                                                  elemMods: { width: 's' }
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '3' },
                          content: [
                            {
                              block: 'offer',
                              mix: [
                                { block: 'theme', mods: { color: 'megafon-brand' } },
                                { block: 'card', mods: { view: 'default' } }
                              ],
                              content: [
                                {
                                  block: 'offer',
                                  elem: 'partner',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'content',
                                      elemMods: { 'space-a': 'xl' }
                                    }
                                  ],
                                  content: [
                                    { block: 'brand-logo', mods: { name: 'megafon', size: 'm' } }
                                  ]
                                },
                                {
                                  block: 'offer',
                                  elem: 'footer',
                                  mix: [
                                    { block: 'card', elem: 'footer', elemMods: { 'space-a': 'xl' } }
                                  ],
                                  content: [
                                    {
                                      block: 'offer',
                                      elem: 'name',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'ghost', size: 's' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'offer',
                                      elem: 'sale',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'xxl' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'text',
                                      mods: { view: 'secondary', size: 'm' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '4' },
                          content: [
                            {
                              block: 'subscription',
                              mix: [
                                { block: 'card', mods: { view: 'default' } },
                                { block: 'theme', mods: { color: 'project-brand' } }
                              ],
                              content: [
                                {
                                  block: 'subscription',
                                  elem: 'info',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'content',
                                      elemMods: { 'space-a': 'xl' }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'subscription',
                                      elem: 'title',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'xxl' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'subscription',
                                  elem: 'advantages',
                                  mix: [{ block: 'list' }],
                                  content: [
                                    {
                                      block: 'subscription',
                                      elem: 'advantage',
                                      mix: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'space-b': 's' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'l' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'subscription',
                                      elem: 'advantage',
                                      mix: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'space-b': 's' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'l' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'subscription',
                                      elem: 'advantage',
                                      mix: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'space-b': 's' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'l' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'subscription',
                                      elem: 'advantage',
                                      mix: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'space-b': 's' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'l' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'subscription',
                                      elem: 'advantage',
                                      mix: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'space-b': 's' }
                                        }
                                      ],
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'l' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'm' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 's' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'subscription',
                                  elem: 'footer',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'footer',
                                      elemMods: { 'space-a': 'xl' }
                                    },
                                    { block: 'list' }
                                  ],
                                  content: [
                                    {
                                      block: 'subscription',
                                      elem: 'control',
                                      mix: [
                                        {
                                          block: 'list',
                                          elem: 'item',
                                          elemMods: { 'space-b': 's' }
                                        }
                                      ],
                                      content: [{ block: 'input', mods: { size: 'l' } }]
                                    },
                                    { block: 'button', mods: { size: 'l', width: 'full' } }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'footer',
                  mix: [{ block: 'theme' }],
                  content: [
                    {
                      block: 'footer',
                      elem: 'content',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [
                            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                            { block: 'text', elem: 'word', elemMods: { width: 's' } }
                          ]
                        },
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })),
      k =
        (i.s[4]++,
        Object(n.default)({
          block: 'theme',
          mods: { color: 'project-default', size: 'default', space: 'default' },
          content: [
            {
              block: 'layout',
              content: [
                {
                  block: 'header',
                  content: [
                    {
                      block: 'header',
                      elem: 'content',
                      content: [
                        { block: 'header', elem: 'logo' },
                        {
                          block: 'onoffswitch',
                          content: [{ block: 'onoffswitch', elem: 'button' }]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 's', align: 'center', 'indent-b': 'xxxxl' },
                  content: [
                    {
                      block: 'text',
                      mods: { size: 'xxl', view: 'primary', type: 'h1' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { size: 'l', view: 'primary', type: 'p' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { size: 'l', view: 'primary', type: 'p' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 'm', align: 'center' },
                  content: [
                    {
                      block: 'grid',
                      mods: { 'm-columns': '10', 'col-gap': 'full' },
                      content: [
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '5' },
                          content: [
                            {
                              block: 'event',
                              mix: [
                                { block: 'card', mods: { view: 'default' } },
                                { block: 'theme', mods: { color: 'project-inverse' } }
                              ],
                              content: [
                                {
                                  block: 'event',
                                  elem: 'content',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'content',
                                      elemMods: {
                                        'vertical-align': 'center',
                                        distribute: 'center',
                                        'space-a': 'xxl'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'event',
                                      elem: 'preview',
                                      content: [
                                        {
                                          block: 'event',
                                          elem: 'speaker',
                                          content: [{ block: 'avatar', mods: { size: 'm' } }]
                                        },
                                        { block: 'brand-logo', mods: { name: 'mts', size: 'm' } }
                                      ]
                                    },
                                    {
                                      block: 'event',
                                      elem: 'title',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'xxl', align: 'center' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'event',
                                      elem: 'description',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'l', align: 'center', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'event',
                                  elem: 'footer',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'footer',
                                      elemMods: {
                                        'vertical-align': 'center',
                                        distribute: 'center',
                                        'space-a': 'xxl'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'xl', view: 'link', align: 'center' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          block: 'grid',
                          elem: 'fraction',
                          elemMods: { 'm-col': '5' },
                          content: [
                            {
                              block: 'event',
                              mix: [
                                { block: 'card', mods: { view: 'default' } },
                                { block: 'theme', mods: { color: 'project-inverse' } }
                              ],
                              content: [
                                {
                                  block: 'event',
                                  elem: 'content',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'content',
                                      elemMods: {
                                        'vertical-align': 'center',
                                        distribute: 'center',
                                        'space-a': 'xxl'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'event',
                                      elem: 'preview',
                                      content: [
                                        {
                                          block: 'event',
                                          elem: 'speaker',
                                          content: [{ block: 'avatar', mods: { size: 'm' } }]
                                        },
                                        { block: 'brand-logo', mods: { name: 'yota', size: 'm' } }
                                      ]
                                    },
                                    {
                                      block: 'event',
                                      elem: 'title',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { view: 'primary', size: 'xxl', align: 'center' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'event',
                                      elem: 'description',
                                      content: [
                                        {
                                          block: 'text',
                                          mods: { size: 'l', align: 'center', view: 'primary' },
                                          content: [
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            },
                                            {
                                              block: 'text',
                                              elem: 'word',
                                              elemMods: { width: 'l' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  block: 'event',
                                  elem: 'footer',
                                  mix: [
                                    {
                                      block: 'card',
                                      elem: 'footer',
                                      elemMods: {
                                        'vertical-align': 'center',
                                        distribute: 'center',
                                        'space-a': 'xxl'
                                      }
                                    }
                                  ],
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'xl', view: 'link', align: 'center' },
                                      content: [
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                                        { block: 'text', elem: 'word', elemMods: { width: 's' } }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'layout',
                  elem: 'container',
                  elemMods: { size: 's', align: 'center' },
                  content: [
                    {
                      block: 'text',
                      mods: { size: 'xxl', view: 'primary', type: 'h2' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { size: 'l', view: 'primary', type: 'p' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 's' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { size: 'xxl', view: 'primary', type: 'h3' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'm' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                      ]
                    },
                    {
                      block: 'text',
                      mods: { size: 'l', view: 'primary', type: 'p' },
                      content: [
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                        { block: 'text', elem: 'word', elemMods: { width: 'l' } }
                      ]
                    }
                  ]
                },
                {
                  block: 'footer',
                  content: [
                    {
                      block: 'footer',
                      elem: 'content',
                      content: [
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [
                            { block: 'text', elem: 'word', elemMods: { width: 'l' } },
                            { block: 'text', elem: 'word', elemMods: { width: 's' } }
                          ]
                        },
                        {
                          block: 'text',
                          mods: { view: 'primary', size: 'l' },
                          content: [{ block: 'text', elem: 'word', elemMods: { width: 'l' } }]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })),
      x = (i.s[5]++, document.getElementById('content-blocks'));
    i.s[6]++, x ? (i.b[0][0]++, i.s[7]++, (x.innerHTML += s)) : i.b[0][1]++;
    var a = (i.s[8]++, document.getElementById('index'));
    i.s[9]++, a ? (i.b[1][0]++, i.s[10]++, (a.innerHTML += r)) : i.b[1][1]++;
    var h = (i.s[11]++, document.getElementById('product'));
    i.s[12]++, h ? (i.b[2][0]++, i.s[13]++, (h.innerHTML += b)) : i.b[2][1]++;
    var M = (i.s[14]++, document.getElementById('collect'));
    i.s[15]++, M ? (i.b[3][0]++, i.s[16]++, (M.innerHTML += w)) : i.b[3][1]++;
    var u = (i.s[17]++, document.getElementById('content'));
    i.s[18]++, u ? (i.b[4][0]++, i.s[19]++, (u.innerHTML += k)) : i.b[4][1]++;
  },
  function(e, l, o) {}
]);
//# sourceMappingURL=template-layout.js.map

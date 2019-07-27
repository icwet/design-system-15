!(function(e) {
  var n = {};
  function t(o) {
    if (n[o]) return n[o].exports;
    var l = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(l.exports, l, l.exports, t), (l.l = !0), l.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
    }),
    (t.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function(e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (t.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var l in e)
          t.d(
            o,
            l,
            function(n) {
              return e[n];
            }.bind(null, l)
          );
      return o;
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ''),
    t((t.s = 3));
})({
  3: function(e, n) {
    var t,
      o,
      l,
      r,
      c =
        ((t = 'C:\\Users\\cweee\\WebstormProjects\\design-system-15\\src\\script.js'),
        (o = new Function('return this')()),
        (r = o[(l = '__coverage__')] || (o[l] = {}))[t] &&
        'f27f93d04f702704111e23d0f2deab97330a8d1b' === r[t].hash
          ? r[t]
          : (r[t] = {
              path: 'C:\\Users\\cweee\\WebstormProjects\\design-system-15\\src\\script.js',
              statementMap: {
                0: { start: { line: 1, column: 0 }, end: { line: 14, column: 3 } },
                1: { start: { line: 2, column: 2 }, end: { line: 13, column: 5 } },
                2: { start: { line: 3, column: 17 }, end: { line: 3, column: 29 } },
                3: { start: { line: 5, column: 4 }, end: { line: 12, column: 5 } },
                4: { start: { line: 6, column: 31 }, end: { line: 6, column: 50 } },
                5: { start: { line: 7, column: 6 }, end: { line: 10, column: 7 } },
                6: { start: { line: 8, column: 8 }, end: { line: 8, column: 67 } },
                7: { start: { line: 9, column: 8 }, end: { line: 9, column: 15 } },
                8: { start: { line: 11, column: 6 }, end: { line: 11, column: 33 } }
              },
              fnMap: {
                0: {
                  name: '(anonymous_0)',
                  decl: { start: { line: 1, column: 46 }, end: { line: 1, column: 47 } },
                  loc: { start: { line: 1, column: 57 }, end: { line: 14, column: 1 } },
                  line: 1
                },
                1: {
                  name: '(anonymous_1)',
                  decl: { start: { line: 2, column: 42 }, end: { line: 2, column: 43 } },
                  loc: { start: { line: 2, column: 58 }, end: { line: 13, column: 3 } },
                  line: 2
                }
              },
              branchMap: {
                0: {
                  loc: { start: { line: 7, column: 6 }, end: { line: 10, column: 7 } },
                  type: 'if',
                  locations: [
                    { start: { line: 7, column: 6 }, end: { line: 10, column: 7 } },
                    { start: { line: 7, column: 6 }, end: { line: 10, column: 7 } }
                  ],
                  line: 7
                }
              },
              s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
              f: { 0: 0, 1: 0 },
              b: { 0: [0, 0] },
              _coverageSchema: '43e27e138ebf9cfc5966b082cf9a028302ed4184',
              hash: 'f27f93d04f702704111e23d0f2deab97330a8d1b'
            }));
    c.s[0]++,
      document.addEventListener('DOMContentLoaded', function() {
        c.f[0]++,
          c.s[1]++,
          document.body.addEventListener('click', function(e) {
            c.f[1]++;
            var n = (c.s[2]++, e.target);
            for (c.s[3]++; n !== this; ) {
              var t = (c.s[4]++, n.classList[0]);
              if ((c.s[5]++, 'history__transaction' === t))
                return (
                  c.b[0][0]++,
                  c.s[6]++,
                  n.childNodes[1].classList.toggle('e-accordion__more'),
                  void c.s[7]++
                );
              c.b[0][1]++, c.s[8]++, (n = n.parentNode);
            }
          });
      });
  }
});
//# sourceMappingURL=script.js.map

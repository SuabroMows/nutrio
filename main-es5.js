function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _questons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./questons */
    "./src/app/questons.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! pdfmake/build/pdfmake */
    "./node_modules/pdfmake/build/pdfmake.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["pdfTable"];

    function AppComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.text, " ");
      }
    }

    function AppComponent_tr_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r5.group);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r5.score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r5.total);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, key_r5.score / key_r5.total * 100, "1.2-2"), "%");
      }
    }

    function AppComponent_tr_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var q_r6 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", q_r6.selectAnswer === ctx_r3.rigthAnswer(q_r6.answers) ? "r-answer" : "w-answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r6.group);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r6.question);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r6.selectAnswer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.rigthAnswer(q_r6.answers));
      }
    }

    var htmlToPdfmake = __webpack_require__(
    /*! html-to-pdfmake */
    "./node_modules/html-to-pdfmake/index.js");

    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__["pdfMake"].vfs;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.currentQuestion = 0;
        this.resultView = false;
        this.stat = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
          q: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_questons__WEBPACK_IMPORTED_MODULE_1__["questions"])
        });
      }

      _createClass(AppComponent, [{
        key: "nextQuestion",
        value: function nextQuestion() {
          if (this.form.value.q.length > this.currentQuestion + 1) {
            this.form.value.q[this.currentQuestion].selectAnswer = this.form.value.answer;
            this.currentQuestion++;
            this.form.patchValue({
              answer: null
            });
          } else {
            this.resultView = true;

            var _iterator = _createForOfIteratorHelper(this.form.value.q),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var index = -1;

                for (var i in this.stat) {
                  if (this.stat[i].group === item.group) {
                    index = Number(i);
                  }
                }

                if (index === -1) {
                  index = this.stat.length;
                  this.stat[index] = {
                    total: 0,
                    score: 0,
                    group: item.group
                  };
                }

                this.stat[index].total++;
                var a = 0;

                var _iterator2 = _createForOfIteratorHelper(item.answers),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var q = _step2.value;

                    if (item.selectAnswer && item.selectAnswer === q.text) {
                      a += q.val;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                this.stat[index].score += a;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }, {
        key: "rigthAnswer",
        value: function rigthAnswer(answers) {
          var _iterator3 = _createForOfIteratorHelper(answers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var a = _step3.value;

              if (a.val === 1) {
                return a.text;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "selectQuestionary",
        value: function selectQuestionary(val) {
          if (val === '1') {
            this.form.patchValue({
              q: _questons__WEBPACK_IMPORTED_MODULE_1__["questions"]
            });
          }

          if (val === '2') {
            this.form.patchValue({
              q: _questons__WEBPACK_IMPORTED_MODULE_1__["questions2"]
            });
          }

          if (val === '3') {
            this.form.patchValue({
              q: _questons__WEBPACK_IMPORTED_MODULE_1__["questions3"]
            });
          }
        }
      }, {
        key: "downloadAsPDF",
        value: function downloadAsPDF() {
          var pdfTable = this.pdfTable.nativeElement;
          var html = htmlToPdfmake(pdfTable.innerHTML);
          var documentDefinition = {
            content: html
          };
          pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__["createPdf"](documentDefinition).download();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfTable = _t.first);
        }
      },
      decls: 57,
      vars: 11,
      consts: [[1, "text-center"], [1, "form-select", 3, "change"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "main-box"], [3, "hidden"], [1, ""], [1, "decript-box"], [3, "formGroup"], ["class", "form-check text-question", 4, "ngFor", "ngForOf"], [1, "btn-answer"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "pdfTable", 3, "hidden"], ["pdfTable", ""], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"], [1, "form-check", "text-question"], ["type", "radio", "formControlName", "answer", 1, "form-check-input", 3, "value"], [1, "form-check-label"], ["scope", "row"], [2, "text-align", "right"], [2, "text-align", "center"], [3, "ngClass"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_1_listener($event) {
            return ctx.selectQuestionary($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\"\u041A\u043E\u043B\u0435\u0441\u043E \u0431\u0430\u043B\u0430\u043D\u0441\u0430\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\"\u041D\u0430\u0434\u043F\u043E\u0447\u0435\u0447\u043D\u0438\u043A\u0438\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\"\u041A\u0430\u043D\u0434\u0438\u0434\u043E\u0437\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_18_Template, 4, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() {
            return ctx.nextQuestion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0410\u0441\u043F\u0435\u043A\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0430\u043B\u043B\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AppComponent_tr_38_Template, 10, 7, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0412\u0430\u0448\u0438 \u043E\u0442\u0432\u0435\u0442\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0410\u0441\u043F\u0435\u043A\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0412\u043E\u043F\u0440\u043E\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0416\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AppComponent_tr_53_Template, 9, 5, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_55_listener() {
            return ctx.downloadAsPDF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432 PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.resultView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0412\u043E\u043F\u0440\u043E\u0441 ", ctx.currentQuestion + 1, " \u0438\u0437 ", ctx.form.value.q.length, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form.value.q[ctx.currentQuestion].question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form.value.q[ctx.currentQuestion].description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.value.q[ctx.currentQuestion].answers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.form.value.answer ? null : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.resultView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.value.q);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".main-box[_ngcontent-%COMP%] {\r\n  margin: 50px auto;\r\n  width: 60%;\r\n}\r\n\r\n.btn-answer[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.text-question[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n}\r\n\r\n.decript-box[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.r-answer[_ngcontent-%COMP%] {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.w-answer[_ngcontent-%COMP%] {\r\n  background-color: yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm94IHtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uYnRuLWFuc3dlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRleHQtcXVlc3Rpb257XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZGVjcmlwdC1ib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5yLWFuc3dlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxufVxyXG5cclxuLnctYW5zd2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, {
        pdfTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['pdfTable']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/questons.ts":
  /*!*****************************!*\
    !*** ./src/app/questons.ts ***!
    \*****************************/

  /*! exports provided: questions, questions2, questions3 */

  /***/
  function srcAppQuestonsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "questions", function () {
      return questions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "questions2", function () {
      return questions2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "questions3", function () {
      return questions3;
    });

    var questions = [{
      id: 1,
      question: 'В день вы пьете не менее 30 мл/кг чистой воды?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не измеряю',
        val: 0
      }],
      selectAnswer: null,
      group: 'Вода'
    }, {
      id: 2,
      question: 'Отличаете ли вы жажду от голода?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю как это делать',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 3,
      question: 'Вы пьете воду с ph 7,5-8?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не измеряю',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 4,
      question: 'Вы пьете воду с поверхностным натяжением близким к 43 дни/см?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не измеряю',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 5,
      question: 'Вы следите за ионизацией питьевой воды?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 6,
      question: 'Вы следите за минерализацией питьевой воды?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 7,
      question: 'Утро вы начинаете с потребления воды?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 8,
      question: 'Практикуете ли вы навык "тестового глотка" для определения голодны ли вы или испытываете жажду?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю как это делать',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 9,
      question: 'Вы регулярно пьете воду с лимоном или с натуральным яблочным уксусом?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Вода'
    }, {
      id: 10,
      question: 'У вас есть симптомы дефицита воды?',
      description: 'белый налет на языке, сильное чувство жажды, сухость во рту, сильный запах мочи и пота, яркий цвет мочи, отеки',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Вода'
    }, {
      id: 11,
      question: 'Ежедневно вы употребляете белок 1г/кг массы тела?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не считаю',
        val: 0
      }],
      group: 'Белок'
    }, {
      id: 12,
      question: 'Вы едите животный белок?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Белок'
    }, {
      id: 13,
      question: 'Используете ли вы разные виды животного белка?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Белок'
    }, {
      id: 14,
      question: 'У вас есть симптомы дефицита белка?',
      description: 'снижение работоспособности; частые ОРВИ; отеки; дряблость и сухость кожи; ломкость ногтей или волос; мышечная слабость; снижение физической выносливости; депрессия, раздражительность, тревожность, бессоница',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Белок'
    }, {
      id: 15,
      question: 'У вас есть сонливость после употребления белковой пищи?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Белок'
    }, {
      id: 16,
      question: 'У вас бывает тяжесть после употребления белковой пищи?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Белок'
    }, {
      id: 17,
      question: 'Раз в неделю вы устраиваете постные дни?',
      description: 'Отдых для ЖКТ, облегченное питание, интервальное голодание',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Белок'
    }, {
      id: 18,
      question: 'Вы подготавливаете растительный белок к употреблению с помощью замачивания, термообработки?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Белок'
    }, {
      id: 19,
      question: 'Проращиваете ли вы растительный белок?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю как это делать',
        val: 0
      }],
      group: 'Белок'
    }, {
      id: 20,
      question: 'Вы ферментируете растительный белок?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю как это делать',
        val: 0
      }],
      group: 'Белок'
    }, {
      id: 21,
      question: 'Вы употребляете жиров около 1г/кг массы тела ежедневно?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 22,
      question: 'Вы едите животные жиры?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Жиры'
    }, {
      id: 23,
      question: 'В вашем рационе преимущественно присутствуют ненасыщенные жиры?',
      description: 'масло орехов и семян',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 24,
      question: 'В ваше рационе присутствуют прогоркие масла и транс-жиры?',
      description: 'Транс-жиры присутсвуют в фаст-фуде, закусках, жареной пище, замороженной пицце, пирогах, печенье, маргаринах',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Жиры'
    }, {
      id: 25,
      question: 'Употребляете ли вы в достаточном количестве Омега 3?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 26,
      question: 'Вы готовите пищу на насыщеных жирах?',
      description: 'кокосовое масло, какао масло',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 27,
      question: 'Употребляете ли вы пищу свежие нерафенированые масла?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 28,
      question: 'Вы употребляете предварительно замоченные орехи и семена?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 29,
      question: 'После употребления жирной пищи у вас есть тяжесть и дискомфорт в животе?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Жиры'
    }, {
      id: 30,
      question: '"Стул" смывается, не оставляя следов на стенках унитаза?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Жиры'
    }, {
      id: 31,
      question: 'Исключили ли вы из рациона продукты изготовленные из рафинированой муки?',
      description: 'вермешель, макароны, блины, пицца, белый хлеб, сдобная выпечка, печенье, вафли, кондитерские изделия',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 32,
      question: 'В вашем рационе есть жидкие углеводы?',
      description: 'газировка, пакетированые соки, сахарные напитки',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Углеводы'
    }, {
      id: 33,
      question: 'В день вы едите не более 400 грамм фруктов?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 34,
      question: 'Вы контролируете количество цельных злаков в вашем рационе?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 35,
      question: 'В вашем рационе есть продукты с добавленными сахарами?',
      description: 'в том числе фруктозными, кукурузными сиропами и мёдом',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 36,
      question: 'В вашем рационе есть сахарозаменители(эритрол/эритрит, стевия)?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Углеводы'
    }, {
      id: 37,
      question: 'Вы готовите овощи и крупы до состояния al dente?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 38,
      question: 'Вы замачиваете или проращиваете цельные крупы и бобовые перед приготовлением?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 39,
      question: 'В вашем рационе присутствуют высококрахмалистые продукты не чаще 3 раза в неделю',
      description: 'картофель, макароны, белый рис',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Углеводы'
    }, {
      id: 40,
      question: 'В вашем рационет есть покупные соусы?',
      description: 'кетчуп, майонез и т.д.',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Углеводы'
    }, {
      id: 41,
      question: 'Вы ежедневно едите клетчатку в виде зелени, зерновых и овощей?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Клетчатка'
    }, {
      id: 42,
      question: 'В день вы едите не менее 25 грамм клетчатки?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не считаю',
        val: 0
      }],
      group: 'Клетчатка'
    }, {
      id: 43,
      question: 'Каждый день вы едите овощи с разными видами обработки?',
      description: 'сырые, тушеные, вареные, печеные',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Клетчатка'
    }, {
      id: 44,
      question: 'В вашем рационе присутствуют продукты стимулирующие образвание слизи?',
      description: 'лён, пектин, овсянка, семена чиа',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Клетчатка'
    }, {
      id: 45,
      question: 'В ваше рационе присутствуют резистентный крахмал?',
      description: 'холодный отварной картофель, фасоль, чечевица, зеленый горох, охлажденный рис после приготовления',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Клетчатка'
    }, {
      id: 46,
      question: 'После еды у вас есть вздутие живота и урчание в кишечники?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Клетчатка'
    }, {
      id: 47,
      question: 'У вас регулярные ежедневный стул?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Клетчатка'
    }, {
      id: 48,
      question: 'После основного приёма пищи вы долго не испытываете голод?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Клетчатка'
    }, {
      id: 49,
      question: 'У вас есть геморрой?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Клетчатка'
    }, {
      id: 50,
      question: 'У вас есть симптомы дефицита клетчатки?',
      description: 'Голод после еды, Повышенный уровень глюкозы в крови, Высокий уровень холестерина в крови, Высокое давление, Проблемы с потерей веса, Признаки интоксикации, Запор.',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Клетчатка'
    }, {
      id: 51,
      question: 'Вы включаете в каждый приём пищи продукты не менее трёх цветов?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 52,
      question: 'Вы используете фрукты и овощи в свежем виде?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 53,
      question: 'Вы регулярно употребляете ягоды в свежем или в замороженном виде?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 54,
      question: 'Вы пьёте зелный чай?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 55,
      question: 'Вы регулярно употребляете специи ярких цветов?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 56,
      question: 'Вы включаете сладкий, горький, вяжущий, острый, кислый, солёные вкусы в каждый приём пищи?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 57,
      question: 'Вы соблюдаете очерёдность вкусов во время приёмов пищи?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю как это делать',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 58,
      question: 'Используете ли вы вкусы для стимуляции пищеварения во время приёма пищи?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 59,
      question: 'Вы используете в рационе продукты всех цветов радуги?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 60,
      question: 'Вы придерживаетесь в рационе принципа ротации?',
      description: 'Один продукт не чаше 1 раза в день',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Цвет, вкус'
    }, {
      id: 61,
      question: 'У вас не более трёх основных приёмов пищи и одного перекуса в день?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 62,
      question: 'Последний приём пищи не позже, чем за 3 часа до сна?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 63,
      question: 'Есть ли чистые промежутки между приёмами пищи?',
      description: 'не менее 3-х часов между приёмами и не менее 12-ти в качестве ночного перерыва',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 64,
      question: 'Есть ли постные или голодные дни в недели?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 65,
      question: 'Есть ли изменение вкуса пищи во время жеваения?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 66,
      question: 'Пользуетесь ли вы "правилом тарелки" при составлении приёма пищи?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю это правило',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 67,
      question: 'Вы регулярно употребляете пробиотеческий ужин?',
      description: 'кокосовый йогурт, кешью йогурт, ферментированые овощи',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 68,
      question: 'У вас есть полноценные жиры и сложные углеводы на завтрак?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 69,
      question: 'У вас полноценные белки на обед?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }, {
      id: 70,
      question: 'Пользуетесь ли вы правилом ладони при выборе порции?',
      description: '',
      answers: [{
        text: 'Да',
        val: 1
      }, {
        text: 'Нет',
        val: 0
      }, {
        text: 'Не знаю это правило',
        val: 0
      }],
      group: 'Объём порции, приёмы пищи'
    }];
    var questions2 = [{
      id: 1,
      question: 'Вы наблюдаете у себя постоянную усталость?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      selectAnswer: null,
      group: 'Надпочечники'
    }, {
      id: 2,
      question: 'По утрам вам трудно вставать с постели?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 3,
      question: 'Можно сказать, что вы бываете рассеяны и невнимательны?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 4,
      question: 'Есть ли у вас набор веса, особенно появление лишнего веса в области талии?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 5,
      question: 'Есть ли у вас тяга к сладкой и солёной пище?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 6,
      question: 'Можно сказать про вас, что у вас есть безразличие ко всему?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 7,
      question: 'Есть ли у вас мышечная слабость?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 8,
      question: 'У вас есть проблемы со сном?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }, {
      id: 9,
      question: 'У вас выпадают волосы постоянно?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Надпочечники'
    }];
    var questions3 = [{
      id: 1,
      question: 'Вы наблюдаете у себя постоянную усталость?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      selectAnswer: null,
      group: 'Кандидоз'
    }, {
      id: 2,
      question: 'У вас бывает "туман" в голове?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 3,
      question: 'У вас есть проблемы с пищеварением?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 4,
      question: 'У вас часто бывают грибковые инфекции?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 5,
      question: 'У вас часто бывают простуды?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 6,
      question: 'Есть ли у вас пищевая аллергия и непереносимость?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 7,
      question: 'Вас беспокоют боли в суставах?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 8,
      question: 'У вас есть колебания настроения и раздражительность?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 9,
      question: 'У вас часто бывают головные боли?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 10,
      question: 'Если у вас ощущения онемелости или покалывания?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 11,
      question: 'У вас закладывает нос?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 12,
      question: 'Наблюдаете у себя боль в мышцах?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 13,
      question: 'Бывают ли у вас различного рода высыпания на теле?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 14,
      question: 'У вас есть грибки на ногтях?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }, {
      id: 15,
      question: 'У вас есть проблемы с кожей?',
      description: '',
      answers: [{
        text: 'Да',
        val: 0
      }, {
        text: 'Нет',
        val: 1
      }],
      group: 'Кандидоз'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\SubaroMows\Documents\projects\ddcp-git\Nutrio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
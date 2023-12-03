"use strict";
(self["webpackChunkFrontEnd"] = self["webpackChunkFrontEnd"] || []).push([["main"],{

/***/ 223:
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2468);


class FooterComponent {
  constructor(dataservices) {
    this.dataservices = dataservices;
    this.Modo = "";
  }
  ngOnInit() {
    this.dataservices.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      if (this.Modo == 'light') {
        const mode = document.getElementById("Footer");
        mode?.classList.toggle('mode');
      }
      if (this.Modo == 'dark') {
        const mode = document.getElementById("Footer");
        mode?.classList.toggle('mode');
      }
    });
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 62,
  vars: 0,
  consts: [["id", "Footer"], [1, "contenedor"], [1, "footer"], [1, "container"], [1, "row"], [1, "footer-col"], [1, "ul"], [1, "li"], ["href", "https://hq5.com.co/", "target", "_blank"], ["href", "https://hq5.com.co/oferta-laboral/", "target", "_blank"], ["href", "https://hq5.com.co/politica-integral-de-gestion/", "target", "_blank"], ["href", "https://hq5.com.co/politica-de-privacidad-y-tratamiento-de-datos-personales-hq5-s-a-s/", "target", "_blank"], [1, "social-links"], ["href", "https://www.facebook.com/hq5sas/", "target", "_blank"], [1, "bi", "bi-facebook"], ["href", "https://twitter.com/HQ5SAS1", "target", "_blank"], [1, "bi", "bi-twitter"], ["href", "https://www.instagram.com/hq5_sas/", "target", "_blank"], [1, "bi", "bi-instagram"], ["href", "https://www.linkedin.com/company/hq5-sas/", "target", "_blank"], [1, "bi", "bi-linkedin"], ["href", "https://www.tiktok.com/@hq5_sas", "target", "_blank"], [1, "bi", "bi-tiktok"], ["href", "https://web.whatsapp.com/send?phone=573009120781", "target", "_blank"], [1, "bi", "bi-whatsapp"], [1, "contact"], [1, "linea_divisora"], [1, "copyright"], [1, "texrt_copyright"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "footer", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Acerca de nosotros ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Oferta laboral ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "help");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " pol\u00EDtica integral de gesti\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " pol\u00EDtica de privacidad y ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " tratamiento de datos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " personales ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5)(30, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "follow us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12)(33, "div")(34, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div")(41, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5)(48, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Sede Principal: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Calle 52 A # 18 73, Bogot\u00E1 (Colombia) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " PBX: 601 241 5085 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " info@hq5.com.co ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27)(60, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Todos los derechos reservados | 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["[_nghost-%COMP%]{\r\n    \r\n    --color-inicial-footer-d: #000000;\r\n    --color-final-footer-d: #2c2c2c;\r\n    \r\n    --color-text-dark: #ffffff;\r\n    --color-text-dark-t: #bbbbbb;\r\n    --color-text-dark-t-h: #ffffff;\r\n    \r\n    --color-line-bottom-dark: #b81c1c;\r\n    \r\n    --background-icon-dark: rgba(255,255,255,0.2);\r\n    --color-icon-dark: #ffffff;\r\n    \r\n    --color-social-dark: #24262b;\r\n    --background-social-dark: #ffffff;\r\n    \r\n    --color-contact-dark: #bbbbbb;\r\n    \r\n    --background-line-dark: rgb(110, 108, 108);\r\n    \r\n    --color-copy-dark: #ffffff;\r\n    \r\n    --color-inicial-footer-l: #757575;\r\n    --color-final-footer-l: #686868;\r\n    \r\n    --color-text-light: #000000;\r\n    --color-text-light-t: #000000;\r\n    --color-text-light-t-h: #b81c1c;\r\n    \r\n    --color-line-bottom-light: #b81c1c;\r\n    \r\n    --background-icon-light: rgba(0, 0, 0, 0.2);\r\n    --color-icon-light: #ffffff;\r\n    \r\n    --color-social-light: #ffffff;\r\n    --background-social-light: #000000;\r\n    \r\n    --color-contact-light: #000000;\r\n    \r\n    --background-line-light: rgb(255, 255, 255);\r\n    \r\n    --color-copy-light: #000000;\r\n}\r\n.contenedor[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    background-image: linear-gradient(var(--color-inicial-footer-d) 0%, var(--color-final-footer-d) 100%);\r\n    padding: 5% 0;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    background-image: linear-gradient(var(--color-inicial-footer-l) 0%, var(--color-final-footer-l) 100%);\r\n    padding: 5% 0;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-height: 10vh;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 100;\r\n}\r\n.footer-col[_ngcontent-%COMP%]{\r\n    width: 25%;\r\n    padding: 0 15px;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n    color: var(--color-text-dark);\r\n    text-transform: capitalize;\r\n    margin-bottom: 35px;\r\n    font-weight: 500;\r\n    position: relative;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 0.8em;\r\n    color: var(--color-text-light);\r\n    text-transform: capitalize;\r\n    margin-bottom: 35px;\r\n    font-weight: 500;\r\n    position: relative;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    left:0;\r\n    bottom: -10px;\r\n    background-color: var(--color-line-bottom-dark);\r\n    height: 3px;\r\n    box-sizing: border-box;\r\n    width: 100px;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    left:0;\r\n    bottom: -10px;\r\n    background-color: var(--color-line-bottom-light);\r\n    height: 3px;\r\n    box-sizing: border-box;\r\n    width: 100px;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]:not(:last-child){\r\n    margin-bottom: 10px;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    color: var(--color-text-dark-t);\r\n    display: block;\r\n    transition: all 0.3s ease;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    color: var(--color-text-light-t);\r\n    display: block;\r\n    transition: all 0.3s ease;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-text-dark-t-h);\r\n    padding-left: 10px;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%]   .li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-text-light-t-h);\r\n    padding-left: 10px;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: var(--background-icon-dark);\r\n    margin:0 10px 10px 0;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    border-radius: 50%;                                         \r\n    color: var(--color-icon-dark);\r\n    transition: all 0.5s ease;\r\n    font-size: 20px;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: var(--background-icon-light);\r\n    margin:0 10px 10px 0;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    border-radius: 50%;                                         \r\n    color: var(--color-icon-light);\r\n    transition: all 0.5s ease;\r\n    font-size: 20px;\r\n}\r\n.footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-social-dark);\r\n    background-color: var(--background-social-dark);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-social-light);\r\n    background-color: var(--background-social-light);\r\n}\r\n.contact[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    color: var(--color-contact-dark);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    color: var(--color-contact-light);\r\n}\r\n.linea_divisora[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    height: 2px;\r\n    background-color: var(--background-line-dark);\r\n    opacity: 20%;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .linea_divisora[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    height: 2px;\r\n    background-color: var(--background-line-light);\r\n    opacity: 20%;\r\n}\r\n.copyright[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--color-copy-dark);\r\n    height: 50px;\r\n    font-size: 14px;\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--color-copy-light);\r\n    height: 50px;\r\n    font-size: 14px;\r\n}\r\n@media(max-width: 767px){\r\n    .footer-col[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-bottom: 30px;\r\n    }\r\n}\r\n@media(max-width: 574px){\r\n    .footer-col[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUdBQXFHO0lBQ3JHLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxR0FBcUc7SUFDckcsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLDZDQUE2QztJQUM3QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSTtJQUNBLFVBQVU7SUFDVixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0k7SUFDQSxXQUFXO0lBQ1g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgLyogR3JhZGllbnQgRm9vdGVyIERhcmsqL1xyXG4gICAgLS1jb2xvci1pbmljaWFsLWZvb3Rlci1kOiAjMDAwMDAwO1xyXG4gICAgLS1jb2xvci1maW5hbC1mb290ZXItZDogIzJjMmMyYztcclxuICAgIC8qIFRleHQgRm9vdGVyIERhcmsgKi9cclxuICAgIC0tY29sb3ItdGV4dC1kYXJrOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvci10ZXh0LWRhcmstdDogI2JiYmJiYjtcclxuICAgIC0tY29sb3ItdGV4dC1kYXJrLXQtaDogI2ZmZmZmZjtcclxuICAgIC8qIExpbmUgYm90dG9tIGNvbHVtbnMgRGFyayAqL1xyXG4gICAgLS1jb2xvci1saW5lLWJvdHRvbS1kYXJrOiAjYjgxYzFjO1xyXG4gICAgLyogSWNvbm9zIERhcmsgKi9cclxuICAgIC0tYmFja2dyb3VuZC1pY29uLWRhcms6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIC0tY29sb3ItaWNvbi1kYXJrOiAjZmZmZmZmO1xyXG4gICAgLyogTG9nb3Mgc29jaWFsIERhcmsgKi9cclxuICAgIC0tY29sb3Itc29jaWFsLWRhcms6ICMyNDI2MmI7XHJcbiAgICAtLWJhY2tncm91bmQtc29jaWFsLWRhcms6ICNmZmZmZmY7XHJcbiAgICAvKiBUZXh0IENvbnRhY3QgRGFyayAqL1xyXG4gICAgLS1jb2xvci1jb250YWN0LWRhcms6ICNiYmJiYmI7XHJcbiAgICAvKiBMaW5lIERpdiBEYXJrICovXHJcbiAgICAtLWJhY2tncm91bmQtbGluZS1kYXJrOiByZ2IoMTEwLCAxMDgsIDEwOCk7XHJcbiAgICAvKiBUZXh0IENvcHlyaWdodCBEYXJrKi9cclxuICAgIC0tY29sb3ItY29weS1kYXJrOiAjZmZmZmZmO1xyXG4gICAgLyogR3JhZGllbnQgTmF2YmFyIExpZ2h0Ki9cclxuICAgIC0tY29sb3ItaW5pY2lhbC1mb290ZXItbDogIzc1NzU3NTtcclxuICAgIC0tY29sb3ItZmluYWwtZm9vdGVyLWw6ICM2ODY4Njg7XHJcbiAgICAvKiBUZXh0IEZvb3RlciBMaWdodCAqL1xyXG4gICAgLS1jb2xvci10ZXh0LWxpZ2h0OiAjMDAwMDAwO1xyXG4gICAgLS1jb2xvci10ZXh0LWxpZ2h0LXQ6ICMwMDAwMDA7XHJcbiAgICAtLWNvbG9yLXRleHQtbGlnaHQtdC1oOiAjYjgxYzFjO1xyXG4gICAgLyogTGluZSBib3R0b20gY29sdW1ucyBMaWdodCAqL1xyXG4gICAgLS1jb2xvci1saW5lLWJvdHRvbS1saWdodDogI2I4MWMxYztcclxuICAgIC8qIEljb25vcyBMaWdodCAqL1xyXG4gICAgLS1iYWNrZ3JvdW5kLWljb24tbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC0tY29sb3ItaWNvbi1saWdodDogI2ZmZmZmZjtcclxuICAgIC8qIExvZ29zIHNvY2lhbCBMaWdodCAqL1xyXG4gICAgLS1jb2xvci1zb2NpYWwtbGlnaHQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtc29jaWFsLWxpZ2h0OiAjMDAwMDAwO1xyXG4gICAgLyogVGV4dCBDb250YWN0IExpZ2h0ICovXHJcbiAgICAtLWNvbG9yLWNvbnRhY3QtbGlnaHQ6ICMwMDAwMDA7XHJcbiAgICAvKiBMaW5lIERpdiBMaWdodCAqL1xyXG4gICAgLS1iYWNrZ3JvdW5kLWxpbmUtbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIC8qIFRleHQgQ29weXJpZ2h0IExpZ2h0ICovXHJcbiAgICAtLWNvbG9yLWNvcHktbGlnaHQ6ICMwMDAwMDA7XHJcbn1cclxuLmNvbnRlbmVkb3J7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2xvci1pbmljaWFsLWZvb3Rlci1kKSAwJSwgdmFyKC0tY29sb3ItZmluYWwtZm9vdGVyLWQpIDEwMCUpO1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxufVxyXG5kaXYubW9kZSAuZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2xvci1pbmljaWFsLWZvb3Rlci1sKSAwJSwgdmFyKC0tY29sb3ItZmluYWwtZm9vdGVyLWwpIDEwMCUpO1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG59XHJcbi5yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMTAwO1xyXG59XHJcbi5mb290ZXItY29se1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG4uZm9vdGVyLWNvbCBoNHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGFyayk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmRpdi5tb2RlIC5mb290ZXItY29sIGg0e1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvb3Rlci1jb2wgaDQ6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpbmUtYm90dG9tLWRhcmspO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbmRpdi5tb2RlIC5mb290ZXItY29sIGg0OjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saW5lLWJvdHRvbS1saWdodCk7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmZvb3Rlci1jb2wgLnVsIC5saTpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9vdGVyLWNvbCAudWwgLmxpIGF7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrLXQpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbmRpdi5tb2RlIC5mb290ZXItY29sIC51bCAubGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LXQpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5mb290ZXItY29sIC51bCAubGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRhcmstdC1oKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5kaXYubW9kZSAuZm9vdGVyLWNvbCAudWwgLmxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC10LWgpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5mb290ZXItY29sIC5zb2NpYWwtbGlua3MgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1pY29uLWRhcmspO1xyXG4gICAgbWFyZ2luOjAgMTBweCAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWljb24tZGFyayk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmRpdi5tb2RlIC5mb290ZXItY29sIC5zb2NpYWwtbGlua3MgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1pY29uLWxpZ2h0KTtcclxuICAgIG1hcmdpbjowIDEwcHggMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1pY29uLWxpZ2h0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmZvb3Rlci1jb2wgLnNvY2lhbC1saW5rcyBhOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNvY2lhbC1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc29jaWFsLWRhcmspO1xyXG59XHJcbmRpdi5tb2RlIC5mb290ZXItY29sIC5zb2NpYWwtbGlua3MgYTpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zb2NpYWwtbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zb2NpYWwtbGlnaHQpO1xyXG59XHJcbi5jb250YWN0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvbnRhY3QtZGFyayk7XHJcbn1cclxuZGl2Lm1vZGUgLmNvbnRhY3R7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItY29udGFjdC1saWdodCk7XHJcbn1cclxuLmxpbmVhX2Rpdmlzb3Jhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpbmUtZGFyayk7XHJcbiAgICBvcGFjaXR5OiAyMCU7XHJcbn1cclxuZGl2Lm1vZGUgLmxpbmVhX2Rpdmlzb3Jhe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saW5lLWxpZ2h0KTtcclxuICAgIG9wYWNpdHk6IDIwJTtcclxufVxyXG4uY29weXJpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jb3B5LWRhcmspO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmRpdi5tb2RlIC5jb3B5cmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWNvcHktbGlnaHQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgIC5mb290ZXItY29se1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNTc0cHgpe1xyXG4gICAgLmZvb3Rlci1jb2x7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4611:
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);






class HomeComponent {
  constructor(dataservices, dataservice, title, router) {
    this.dataservices = dataservices;
    this.dataservice = dataservice;
    this.title = title;
    this.router = router;
    this.Modo = "";
    title.setTitle('HQ5 S.A.S');
  }
  reporth() {
    this.router.navigate(['reportehorizontal']);
  }
  reportlq() {
    this.router.navigate(['reporteLiquidaciones']);
  }
  reportrelq() {
    this.router.navigate(['reporteReLiquidaciones']);
  }
  reportt() {
    this.router.navigate(['reportetxt']);
  }
  ObtenerLocalStorage() {
    let Mode = localStorage.getItem("Mode");
    const mode = document.getElementById("container_home");
    if (Mode == "dark") {
      mode?.classList.remove('mode');
    } else {
      mode?.classList.add('mode');
    }
  }
  ngOnInit() {
    this.ObtenerLocalStorage();
    this.dataservice.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      const mode = document.getElementById("container_home");
      if (this.Modo == 'light') {
        mode?.classList.add('mode');
      }
      if (this.Modo == 'dark') {
        mode?.classList.remove('mode');
      }
    });
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_0__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 42,
  vars: 0,
  consts: [["id", "container_home"], [1, "container_home"], [1, "seccion_1"], [1, "container_nomina"], [1, "containers-buttons"], [1, "container-button"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "click"], [1, "container_logo"], [1, "img_logo"], [1, "title_nota"], [1, "parrafo_nota"], [1, "title_nota_2"], [1, "parrafo_nota_2"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() {
        return ctx.reporth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Reporte Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() {
        return ctx.reportlq();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Reporte Liquidaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() {
        return ctx.reportrelq();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Reporte ReLiquidaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
        return ctx.reportt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Reporte TXTSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7)(18, "div", 8)(19, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Outsourcing N\u00F3minas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "La liquidaci\u00F3n de n\u00F3mina, es el proceso de calcular el valor bruto devengado por cada trabajador en un periodo de tiempo determinado, efectuar las deducciones, entre otros.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Novedades para liquidaci\u00F3n de n\u00F3mina");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Dentro del periodo de tiempo en el cual se calcula la n\u00F3mina, pueden ocurrir eventos que afectan directamente el valor de la liquidaci\u00F3n de los empleados, por ejemplo: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br")(28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " - N\u00FAmero de d\u00EDas efectivamente trabajados ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " - Horas extras trabajadas y recargos dominicales o festivos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " - Bonificaciones legales: primas, auxilios, subsidios ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " - Bonificaciones extralegales: incentivos, bonos de desempe\u00F1o ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " - Incapacidades m\u00E9dicas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " - Pr\u00E9stamos solicitados por el empleado ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " - Impuestos y retenciones, etc. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
  styles: [".container_home[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n    width: 100%;\r\n    padding: 1vw;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.seccion_1[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.container_nomina[_ngcontent-%COMP%]{\r\n    background-image: url('Fondo_2.svg');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    height: 80%;\r\n    width: 65%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n}\r\n.containers-buttons[_ngcontent-%COMP%]{\r\n    background-color: rgb(223, 223, 223);\r\n    width: 25%;\r\n    min-width: 220px;\r\n    height: 45%;\r\n    text-align: center;\r\n    padding: 0.5em;\r\n    border-radius: 1em;\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.15em;\r\n    border-style: solid;\r\n    margin-bottom: 1%;\r\n}\r\n.container-button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0.5em;\r\n    font-size: 7px;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    font-size: 1.5em;\r\n}\r\n.container_logo[_ngcontent-%COMP%]{\r\n    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 35%;\r\n    box-sizing: border-box;\r\n    padding: 1vw;\r\n}\r\n.img_logo[_ngcontent-%COMP%]\r\n{\r\n    height:90%;\r\n    width:90%;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('hq5.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: 100%;\r\n    background-position-y: 100%;\r\n    background-size: 10%;\r\n}\r\n.title_nota[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(rgb(206, 30, 30), rgb(168, 23, 23));\r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    padding: 2%;\r\n}\r\n.parrafo_nota[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    text-align: justify;\r\n    font-size: small;\r\n    padding-top: 2%;\r\n    padding-bottom: 5%;\r\n    word-wrap: break-word ;\r\n}\r\n.title_nota_2[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(rgb(206, 30, 30), rgb(168, 23, 23));\r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n    padding: 2%;\r\n}\r\n.parrafo_nota_2[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    text-align: justify;\r\n    font-size: small;\r\n    padding-top: 2%;\r\n    padding-bottom: 5%;\r\n    word-wrap: break-word ;\r\n}\r\n@media screen and (max-width: 1200px){\r\n    .container_nomina[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .container_logo[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .containers-buttons[_ngcontent-%COMP%]{\r\n        width: 25%;\r\n        min-width: 220px;\r\n    }\r\n}\r\n@media screen and (max-width: 450px){\r\n    .container_nomina[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .container_logo[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .containers-buttons[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQXlEO0lBQ3pELDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9DQUEyRDtJQUMzRCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtRUFBbUU7SUFDbkUsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLFVBQVU7SUFDVixTQUFTO0lBQ1QscUZBQTRHO0lBQzVHLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFFQUFxRTtJQUNyRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxRUFBcUU7SUFDckUseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9ob21le1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMXZ3O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvb25kYTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG59XHJcbi5zZWNjaW9uXzF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcl9ub21pbmF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvRm9uZG9fMi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5jb250YWluZXJzLWJ1dHRvbnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogNDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJvcmRlci13aWR0aDogMC4xNWVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcbi5jb250YWluZXItYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG59XHJcbi5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuLmNvbnRhaW5lcl9sb2dve1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDF2dztcclxufVxyXG4uaW1nX2xvZ29cclxue1xyXG4gICAgaGVpZ2h0OjkwJTtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL2hxNS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwJTtcclxufVxyXG4udGl0bGVfbm90YXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjA2LCAzMCwgMzApLCByZ2IoMTY4LCAyMywgMjMpKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxuLnBhcnJhZm9fbm90YXtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgO1xyXG59XHJcbi50aXRsZV9ub3RhXzJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDIwNiwgMzAsIDMwKSwgcmdiKDE2OCwgMjMsIDIzKSk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcbi5wYXJyYWZvX25vdGFfMntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAuY29udGFpbmVyX25vbWluYXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJfbG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcnMtYnV0dG9uc3tcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgLmNvbnRhaW5lcl9ub21pbmF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyX2xvZ297XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJzLWJ1dHRvbnN7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 160:
/*!*******************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2468);


class NavbarComponent {
  constructor(dataservice) {
    this.dataservice = dataservice;
    this.Mode = "dark";
    this.Mode_2 = "light";
  }
  Modedark() {
    const mode = document.getElementById("Navbar");
    const Light = document.getElementById('Icon_Mode');
    const Dark = document.getElementById('Icon_Mode_2');
    const Logo_2 = document.getElementById('Logo_2');
    const Logo_3 = document.getElementById('Logo_3');
    mode?.classList.toggle('mode');
    if (Light != undefined && Logo_3 != undefined) {
      Light.style.display = 'block';
      Logo_3.style.display = 'block';
    }
    if (Dark != undefined && Logo_2 != undefined) {
      Dark.style.display = 'none';
      Logo_2.style.display = 'none';
    }
    this.dataservice.DisparadorModo.emit({
      data: this.Mode
    });
    this.GrabarLocalStorage(this.Mode);
  }
  Modelight() {
    const mode = document.getElementById("Navbar");
    const Light = document.getElementById('Icon_Mode');
    const Dark = document.getElementById('Icon_Mode_2');
    const Logo_2 = document.getElementById('Logo_2');
    const Logo_3 = document.getElementById('Logo_3');
    mode?.classList.toggle('mode');
    if (Light != undefined && Logo_3 != undefined) {
      Light.style.display = 'none';
      Logo_3.style.display = 'none';
    }
    if (Dark != undefined && Logo_2 != undefined) {
      Dark.style.display = 'block';
      Logo_2.style.display = 'block';
    }
    this.dataservice.DisparadorModo.emit({
      data: this.Mode_2
    });
    this.GrabarLocalStorage(this.Mode_2);
  }
  GrabarLocalStorage(Modo) {
    localStorage.setItem("Mode", Modo);
  }
  ngOnInit() {}
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 46,
  vars: 0,
  consts: [["id", "Navbar"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "bg-custom-1"], [1, "container-fluid"], ["href", "https://hq5.com.co/", "target", "_blank", 1, "navbar-brand", "Color_Logo"], ["src", "assets\\Images\\hq5_logo_3.png", "width", "60", "height", "30", "alt", "HQ5SAS", "id", "Logo_3", 2, "display", "block"], ["src", "assets\\Images\\hq5_logo_2.png", "width", "60", "height", "30", "alt", "HQ5SAS", "id", "Logo_2", 2, "display", "none"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "/home", 1, "nav-link", "Color_Text_Navbar"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "Color_Text_Navbar"], [1, "dropdown-menu", "bg-dark-custom"], ["href", "/reportehorizontal", 1, "dropdown-item", "Color_Text_Navbar_Drop"], ["href", "/reporteLiquidaciones", 1, "dropdown-item", "Color_Text_Navbar_Drop"], ["href", "/reporteReLiquidaciones", 1, "dropdown-item", "Color_Text_Navbar_Drop"], ["href", "/reportetxt", 1, "dropdown-item", "Color_Text_Navbar_Drop"], [1, "navbar-nav", "d-flex", "flex-row", "me-1"], [1, "nav-item", "me-3", "me-lg-0"], ["href", "https://web.whatsapp.com/send?phone=573009120781", "target", "_blank", 1, "nav-link", "bg-icon-custom"], [1, "bi", "bi-whatsapp"], ["href", "https://hq5.com.co/oferta-laboral/", "target", "_blank", 1, "nav-link", "bg-icon-custom"], [1, "bi", "bi-person-circle"], ["id", "Icon_Mode", 1, "nav-item", "me-3", "me-lg-0", 2, "display", "block"], [1, "nav-link", "bg-icon-custom", 3, "click"], [1, "bi", "bi-sun-fill"], ["id", "Icon_Mode_2", 1, "nav-item", "me-3", "me-lg-0", 2, "display", "none"], [1, "bi", "bi-moon-stars-fill"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4)(5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "ul", 9)(10, "li", 10)(11, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 12)(14, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Reportes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 14)(17, "li")(18, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reporte N\u00F3mina");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Reporte Liquidaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Reporte Reliquidaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 12)(27, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Procesos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 14)(30, "li")(31, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "TxtSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul", 19)(34, "li", 20)(35, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 20)(38, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 25)(41, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_41_listener() {
        return ctx.Modelight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 28)(44, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_44_listener() {
        return ctx.Modedark();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["[_nghost-%COMP%]{\r\n    \r\n    --color-inicial-nav: #000000;\r\n    --color-final-nav: #4d4d4d;\r\n    \r\n    --color-text-dark: #ffffff;\r\n    --color-text-dark-h: rgb(131, 131, 131);\r\n    \r\n    --color-drop-dark: #ffffff;\r\n    --color-back-drop-dark: #4d4d4d;\r\n    --color-drop-dark-h: #000000;\r\n    --color-back-drop-dark-h: rgb(131, 131, 131);\r\n    \r\n    --color-back-drop-g: #4d4d4d;\r\n    \r\n    --color-icon-dark: #ffffff;\r\n    --color-icon-dark-h: #e22626;\r\n    \r\n    --color-inicial-nav-l: #757575;\r\n    --color-final-nav-l: #686868;\r\n    \r\n    --color-text-light: #000000;\r\n    --color-text-light-h: #b81c1c;\r\n    \r\n    --color-drop-light: #000000;\r\n    --color-back-drop-light: rgb(172, 172, 172);\r\n    --color-drop-light-h: #000000;\r\n    --color-back-drop-light-h: #d3d3d3;\r\n    \r\n    --color-back-drop-g-l: rgb(172, 172, 172);;\r\n    \r\n    --color-icon-light: #000000;\r\n    --color-icon-light-h: #b81c1c;\r\n}\r\n.bg-custom-1[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(var(--color-inicial-nav) 0%, var(--color-final-nav) 100%);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .bg-custom-1[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(var(--color-inicial-nav-l) 50%, var(--color-final-nav-l) 100%);\r\n}\r\n.Color_Text_Navbar[_ngcontent-%COMP%]{\r\n    color: var(--color-text-dark);\r\n}\r\n.Color_Text_Navbar[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-text-dark-h);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar[_ngcontent-%COMP%]{\r\n    color: var(--color-text-light);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-text-light-h);\r\n}\r\n.Color_Text_Navbar_Drop[_ngcontent-%COMP%]{\r\n    color: var(--color-drop-dark);\r\n    background-color: var(--color-back-drop-dark);\r\n}\r\n.Color_Text_Navbar_Drop[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-drop-dark-h);\r\n    background-color: var(--color-back-drop-dark-h);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar_Drop[_ngcontent-%COMP%]{\r\n    color: var(--color-drop-light);\r\n    background-color: var(--color-back-drop-light);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .Color_Text_Navbar_Drop[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-drop-light-h);\r\n    background-color: var(--color-back-drop-light-h);\r\n}\r\n.bg-dark-custom[_ngcontent-%COMP%]{\r\n    background-color: var(--color-back-drop-g);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .bg-dark-custom[_ngcontent-%COMP%]{\r\n    background-color: var(--color-back-drop-g-l);\r\n}\r\n.bg-icon-custom[_ngcontent-%COMP%]{\r\n    color: var(--color-icon-dark);\r\n}\r\n.bg-icon-custom[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-icon-dark-h);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .bg-icon-custom[_ngcontent-%COMP%]{\r\n    color: var(--color-icon-light);\r\n}\r\ndiv.mode[_ngcontent-%COMP%]   .bg-icon-custom[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-icon-light-h);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwyRkFBMkY7QUFDL0Y7QUFDQTtJQUNJLGdHQUFnRztBQUNwRztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICAvKiBHcmFkaWVudCBOYXZiYXIgRGFyayovXHJcbiAgICAtLWNvbG9yLWluaWNpYWwtbmF2OiAjMDAwMDAwO1xyXG4gICAgLS1jb2xvci1maW5hbC1uYXY6ICM0ZDRkNGQ7XHJcbiAgICAvKiBUZXh0IE5hdmJhciBEYXJrICovXHJcbiAgICAtLWNvbG9yLXRleHQtZGFyazogI2ZmZmZmZjtcclxuICAgIC0tY29sb3ItdGV4dC1kYXJrLWg6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxuICAgIC8qIFRleHQgRHJvcGRvd24gRGFyayAqL1xyXG4gICAgLS1jb2xvci1kcm9wLWRhcms6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yLWJhY2stZHJvcC1kYXJrOiAjNGQ0ZDRkO1xyXG4gICAgLS1jb2xvci1kcm9wLWRhcmstaDogIzAwMDAwMDtcclxuICAgIC0tY29sb3ItYmFjay1kcm9wLWRhcmstaDogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gICAgLyogQmFjayBEcm9wZG93biBEYXJrKi9cclxuICAgIC0tY29sb3ItYmFjay1kcm9wLWc6ICM0ZDRkNGQ7XHJcbiAgICAvKiBJY29ub3MgRGFyayAqL1xyXG4gICAgLS1jb2xvci1pY29uLWRhcms6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yLWljb24tZGFyay1oOiAjZTIyNjI2O1xyXG4gICAgLyogR3JhZGllbnQgTmF2YmFyIExpZ3RoICovXHJcbiAgICAtLWNvbG9yLWluaWNpYWwtbmF2LWw6ICM3NTc1NzU7XHJcbiAgICAtLWNvbG9yLWZpbmFsLW5hdi1sOiAjNjg2ODY4O1xyXG4gICAgLyogVGV4dCBOYXZiYXIgTGlnaHQgKi9cclxuICAgIC0tY29sb3ItdGV4dC1saWdodDogIzAwMDAwMDtcclxuICAgIC0tY29sb3ItdGV4dC1saWdodC1oOiAjYjgxYzFjO1xyXG4gICAgLyogVGV4dCBEcm9wZG93biBMaWdodCAqL1xyXG4gICAgLS1jb2xvci1kcm9wLWxpZ2h0OiAjMDAwMDAwO1xyXG4gICAgLS1jb2xvci1iYWNrLWRyb3AtbGlnaHQ6IHJnYigxNzIsIDE3MiwgMTcyKTtcclxuICAgIC0tY29sb3ItZHJvcC1saWdodC1oOiAjMDAwMDAwO1xyXG4gICAgLS1jb2xvci1iYWNrLWRyb3AtbGlnaHQtaDogI2QzZDNkMztcclxuICAgIC8qIEJhY2sgRHJvcGRvd24gTGlnaHQgKi9cclxuICAgIC0tY29sb3ItYmFjay1kcm9wLWctbDogcmdiKDE3MiwgMTcyLCAxNzIpOztcclxuICAgIC8qIEljb25vcyBMaWdodCAqL1xyXG4gICAgLS1jb2xvci1pY29uLWxpZ2h0OiAjMDAwMDAwO1xyXG4gICAgLS1jb2xvci1pY29uLWxpZ2h0LWg6ICNiODFjMWM7XHJcbn1cclxuLmJnLWN1c3RvbS0xe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWNvbG9yLWluaWNpYWwtbmF2KSAwJSwgdmFyKC0tY29sb3ItZmluYWwtbmF2KSAxMDAlKTtcclxufVxyXG5kaXYubW9kZSAuYmctY3VzdG9tLTF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sb3ItaW5pY2lhbC1uYXYtbCkgNTAlLCB2YXIoLS1jb2xvci1maW5hbC1uYXYtbCkgMTAwJSk7XHJcbn1cclxuLkNvbG9yX1RleHRfTmF2YmFye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGFyayk7XHJcbn1cclxuLkNvbG9yX1RleHRfTmF2YmFyOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtZGFyay1oKTtcclxufVxyXG5kaXYubW9kZSAuQ29sb3JfVGV4dF9OYXZiYXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodCk7XHJcbn1cclxuZGl2Lm1vZGUgLkNvbG9yX1RleHRfTmF2YmFyOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtaCk7XHJcbn1cclxuLkNvbG9yX1RleHRfTmF2YmFyX0Ryb3B7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZHJvcC1kYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2stZHJvcC1kYXJrKTtcclxufVxyXG4uQ29sb3JfVGV4dF9OYXZiYXJfRHJvcDpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kcm9wLWRhcmstaCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrLWRyb3AtZGFyay1oKTtcclxufVxyXG5kaXYubW9kZSAuQ29sb3JfVGV4dF9OYXZiYXJfRHJvcHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kcm9wLWxpZ2h0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2stZHJvcC1saWdodCk7XHJcbn1cclxuZGl2Lm1vZGUgLkNvbG9yX1RleHRfTmF2YmFyX0Ryb3A6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZHJvcC1saWdodC1oKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2stZHJvcC1saWdodC1oKTtcclxufVxyXG4uYmctZGFyay1jdXN0b217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrLWRyb3AtZyk7XHJcbn1cclxuZGl2Lm1vZGUgLmJnLWRhcmstY3VzdG9te1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFjay1kcm9wLWctbCk7XHJcbn1cclxuLmJnLWljb24tY3VzdG9te1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWljb24tZGFyayk7XHJcbn1cclxuLmJnLWljb24tY3VzdG9tOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWljb24tZGFyay1oKTtcclxufVxyXG5kaXYubW9kZSAuYmctaWNvbi1jdXN0b217XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaWNvbi1saWdodCk7XHJcbn1cclxuZGl2Lm1vZGUgLmJnLWljb24tY3VzdG9tOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWljb24tbGlnaHQtaCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5821:
/*!*************************************************************************************!*\
  !*** ./src/app/Components/reporte-liquidaciones/reporte-liquidaciones.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteLiquidacionesComponent": () => (/* binding */ ReporteLiquidacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var file_saver_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver-es */ 4559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);














function ReporteLiquidacionesComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const empresa_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", empresa_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", empresa_r2, " ");
  }
}
function ReporteLiquidacionesComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", estado_r3)("disabled", ctx_r1.isOpcionDeshabilitada(estado_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", estado_r3, " ");
  }
}
class ReporteLiquidacionesComponent {
  constructor(reportservice, formbuilder, dataservice, title, httpService, elementRef) {
    this.reportservice = reportservice;
    this.formbuilder = formbuilder;
    this.dataservice = dataservice;
    this.title = title;
    this.httpService = httpService;
    this.elementRef = elementRef;
    this.Modo = "";
    this.message = "";
    this.empresas = [];
    this.estadoslist = [];
    this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true);
    // url_5: string = 'http://localhost:4001/procesarlq';
    // url_6: string = 'http://localhost:4001/getEmpresas';
    this.url_5 = 'https://backcompensaciones.gestionhq5.com.co/procesarlq';
    this.url_6 = 'https://backcompensaciones.gestionhq5.com.co/getEmpresas';
    title.setTitle('Reporte Liquidaciones');
  }
  ngOnDestroy() {}
  isOpcionDeshabilitada(opcion) {
    const estadosControl = this.formreport.get('estados');
    const seleccionActual = estadosControl?.value || [];
    return (seleccionActual.includes('Pendiente') || seleccionActual.includes('Aprobada') || seleccionActual.includes('Enviada a Aprobación')) && (opcion === 'Pagada' || opcion === 'Enviada al banco' || opcion === 'Enviada a Pago' || opcion === 'Enviada a pago sin paz y salvo') || (seleccionActual.includes('Pagada') || seleccionActual.includes('Enviada al banco') || seleccionActual.includes('Enviada a Pago') || seleccionActual.includes('Enviada a pago sin paz y salvo')) && (opcion === 'Pendiente' || opcion === 'Aprobada' || opcion === 'Enviada a Aprobación');
  }
  updateEmpresas() {
    const login = document.getElementById('container_all');
    const loadinggif = document.getElementById('loading');
    const alert_message = document.getElementById('alert');
    if (login) {
      login.style.display = 'none';
    }
    if (loadinggif) {
      loadinggif.style.display = 'block';
    }
    this.reportservice.post_empresas(this.url_6, {
      Data: '0'
    }).subscribe(data => {
      this.handleUpdateEmpresasResponse(data, login, loadinggif, alert_message);
    }, error => {
      console.log(error.message);
    });
  }
  handleUpdateEmpresasResponse(data, login, loadinggif, alert_message) {
    this.RespuestaJson = data;
    if (this.RespuestaJson.process === '0') {
      this.message = 'El reporte se encuentra vacío, por favor valida la información ingresada.';
      this.hideLoadingAndShowAlert(loadinggif, alert_message);
    } else if (this.RespuestaJson.process === '1') {
      if (login) {
        login.style.display = 'block';
      }
      this.hideLoadingAndShowEmpresas(login, loadinggif, alert_message);
    }
  }
  hideLoadingAndShowAlert(loadinggif, alert_message) {
    if (loadinggif) {
      loadinggif.style.display = 'none';
    }
    if (alert_message) {
      alert_message.style.display = 'block';
    }
  }
  hideLoadingAndShowEmpresas(login, loadinggif, alert_message) {
    if (loadinggif) {
      loadinggif.style.display = 'none';
    }
    this.reportservice.get_empresas(this.url_6).subscribe({
      next: data => {
        this.RespuestaJson = data;
        this.estadoslist = this.RespuestaJson.Estados.sort();
        this.empresas = this.RespuestaJson.Empresas.sort();
      },
      error: error => {
        console.log(error.message);
      }
    });
  }
  post_reporte() {
    const login = document.getElementById('container_all');
    const loadinggif = document.getElementById('loading');
    const alert_message = document.getElementById('alert');
    if (login) {
      login.style.display = 'none';
    }
    if (loadinggif) {
      loadinggif.style.display = 'block';
    }
    const reportData = {
      Data: this.formreport.value
    };
    console.log(reportData);
    this.reportservice.post_lq(this.url_5, reportData).subscribe(data => {
      this.handlePostReporteResponse(data, login, loadinggif, alert_message);
    }, error => {
      console.log(error.message);
    });
  }
  handlePostReporteResponse(data, login, loadinggif, alert_message) {
    this.RespuestaJson = data;
    if (this.RespuestaJson.process === '1') {
      this.reportservice.get_lq(this.url_5).subscribe(data => {
        this.handleDownloadResponse(data, login, loadinggif);
      });
    } else {
      this.message = 'El reporte se encuentra vacío, por favor valida la información ingresada.';
      this.hideLoadingAndShowAlert(loadinggif, alert_message);
    }
  }
  handleDownloadResponse(data, login, loadinggif) {
    if (login) {
      login.style.display = 'block';
    }
    if (loadinggif) {
      loadinggif.style.display = 'none';
    }
    const downloadurl = window.URL.createObjectURL(data);
    (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result);
  }
  regresar() {
    const alertMessage = document.getElementById('alert');
    const login = document.getElementById('container_all');
    if (alertMessage) {
      alertMessage.style.display = 'none';
    }
    if (login) {
      login.style.display = 'block';
    }
  }
  ObtenerLocalStorage() {
    const mode = document.getElementById('login');
    const storedMode = localStorage.getItem('Mode');
    if (storedMode === 'dark' && mode) {
      mode.classList.remove('mode');
    } else if (mode) {
      mode.classList.add('mode');
    }
  }
  ngOnInit() {
    this.reportservice.get_empresas(this.url_6).subscribe({
      next: data => {
        this.handleGetEmpresasResponse(data);
      },
      error: error => {
        console.log(error.message);
      }
    });
    this.formreport = this.formbuilder.group({
      empresa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      estados: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      }),
      mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      })
    });
    this.ObtenerLocalStorage();
    this.dataservice.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      const mode = document.getElementById('login');
      if (this.Modo == 'light') {
        mode?.classList.add('mode');
      }
      if (this.Modo == 'dark') {
        mode?.classList.remove('mode');
      }
    });
  }
  handleGetEmpresasResponse(data) {
    this.RespuestaJson = data;
    this.estadoslist = this.RespuestaJson.Estados.filter(estado => estado !== 'nan').sort();
    this.empresas = this.RespuestaJson.Empresas.sort();
  }
  enable_input_2() {
    const selectedOptions = this.formreport.get('estados')?.value || [];
    const isNotEmpty = selectedOptions.length > 0;
    const shouldEnable = isNotEmpty && !selectedOptions.includes("Pendiente") && !selectedOptions.includes("Aprobada") && !selectedOptions.includes("Enviada a Aprobación");
    if (shouldEnable) {
      this.formreport.get('anio')?.enable();
      this.formreport.get('mes')?.enable();
    } else {
      this.formreport.get('anio')?.disable();
      this.formreport.get('mes')?.disable();
    }
  }
}
ReporteLiquidacionesComponent.ɵfac = function ReporteLiquidacionesComponent_Factory(t) {
  return new (t || ReporteLiquidacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
ReporteLiquidacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReporteLiquidacionesComponent,
  selectors: [["app-reporte-liquidaciones"]],
  decls: 56,
  vars: 5,
  consts: [["id", "login"], ["id", "container_all", 1, "container_all"], [1, "login_container"], [1, "login"], [1, "login_box"], [1, "container"], [1, "container-form"], [3, "formGroup", "submit"], [1, "titulo"], ["appearance", "fill", 1, "campo"], ["id", "empresa", "formControlName", "empresa"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "estados", "formControlName", "estados", "multiple", "", 3, "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "campo"], ["matInput", "", "placeholder", "Ingresa un a\u00F1o", "type", "text", "id", "anio", "formControlName", "anio"], ["matInput", "", "placeholder", "Ingresa un mes", "type", "text", "id", "mes", "formControlName", "mes"], [1, "container-button"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "button", 3, "click"], ["id", "loading", 1, "loading"], [1, "load"], [1, "containergif"], [1, "message_load"], ["src", "assets\\gif\\loading.gif", "alt", "", 1, "gif"], ["id", "alert", 1, "alert_div"], [1, "alerta"], [1, "image_back"], [1, "containeralert"], [1, "message_alert"], [1, "icon_alert"], [1, "bi", "bi-exclamation-circle"], [1, "message_alerta"], ["mat-raised-button", "", "color", "primary", 1, "boton_alert", 3, "click"], [3, "value"], [3, "value", "disabled"]],
  template: function ReporteLiquidacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ReporteLiquidacionesComponent_Template_form_submit_7_listener() {
        return ctx.post_reporte();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "REPORTE LIQUIDACIONES");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "mat-form-field", 9)(13, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReporteLiquidacionesComponent_mat_option_14_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Empresa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "mat-form-field", 9)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteLiquidacionesComponent_Template_mat_select_ngModelChange_21_listener() {
        return ctx.enable_input_2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ReporteLiquidacionesComponent_mat_option_22_Template, 2, 3, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div")(24, "mat-form-field", 14)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "A\u00F1o");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div")(29, "mat-form-field", 14)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Mes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17)(34, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Procesar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteLiquidacionesComponent_Template_button_click_36_listener() {
        return ctx.updateEmpresas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Actualizar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20)(39, "div", 21)(40, "div", 22)(41, "div", 23)(42, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Estamos procesando tu solicitud...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 25)(46, "div", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h2", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteLiquidacionesComponent_Template_button_click_54_listener() {
        return ctx.regresar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formreport);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.empresas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.estadoslist);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.formreport.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton],
  styles: ["[_nghost-%COMP%]{\r\n    \r\n    --tamano_contenedor: 550px;\r\n}\r\n.container_all[_ngcontent-%COMP%]{\r\n    background: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255));\r\n    height: var(--tamano_contenedor);\r\n    width: 100%;\r\n}\r\n.login_container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.login_box[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-image: url('Fondo_7.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    border-radius: 3%;\r\n    padding: 2%;\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container-form[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    padding: 3%;\r\n    height: 80%;\r\n    border-radius: 5%;\r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    color: black;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    word-break:break-all;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    letter-spacing: -.25px;\r\n    line-height: 150%;\r\n    font-weight: bolder;\r\n    font-size: x-large;\r\n    font-style: normal;\r\n    padding: 3%;\r\n}\r\n.campo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.container-button[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 3em;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    margin: 3px;\r\n}\r\n.loading[_ngcontent-%COMP%]{\r\n    display: none;\r\n    height: var(--tamano_contenedor);\r\n    width:100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.load[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\r\n}\r\n.containergif[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    height: 30%;\r\n    text-align: center;\r\n}\r\n.message_load[_ngcontent-%COMP%]{\r\n    padding-top: 1em;\r\n    color: #ffffff;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-weight: bold;\r\n    font-size: medium;\r\n}\r\n.gif[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n.alert_div[_ngcontent-%COMP%]{\r\n    display: none;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    height: var(--tamano_contenedor);\r\n}\r\n.alerta[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.image_back[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 40%;\r\n    border-radius: 1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n}\r\n.containeralert[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    border-radius: 1em;\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('hq5.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: 98%;\r\n    background-position-y: 98%;\r\n    background-size: 5%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    width: 100%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-size: large;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n.icon_alert[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    color: #ff0000;\r\n}\r\n.boton_alert[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: 10px;\r\n    height: 3em;\r\n}\r\n@media screen and (max-width: 450px){\r\n    .container-form[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        height: 85%;\r\n    }\r\n    .login_box[_ngcontent-%COMP%]{\r\n        height: 550px;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n    .gif[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: smaller;\r\n    }\r\n    .image_back[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 40%;\r\n    }\r\n    .message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: medium;\r\n    }\r\n    .containeralert[_ngcontent-%COMP%]{\r\n        background-size: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9yZXBvcnRlLWxpcXVpZGFjaW9uZXMvcmVwb3J0ZS1saXF1aWRhY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrRUFBa0U7SUFDbEUsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtDQUF5RDtJQUN6RCwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsb0NBQTJEO0lBQzNELDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkI7OztrREFHOEM7QUFDbEQ7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlGQUF5RjtJQUN6RixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtRUFBbUU7QUFDdkU7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUZBQXlGO0lBQ3pGLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25COzs7a0RBRzhDO0lBQzlDLHFGQUE0RztJQUM1Ryx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSx5RkFBeUY7SUFDekYsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgLyogVGFtYcODwrFvIGNvbnRlbmVkb3IgZ2VuZXJhbCovXHJcbiAgICAtLXRhbWFub19jb250ZW5lZG9yOiA1NTBweDtcclxufVxyXG4uY29udGFpbmVyX2FsbHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSkscmdiKDI1NSwgMjU1LCAyNTUpKTtcclxuICAgIGhlaWdodDogdmFyKC0tdGFtYW5vX2NvbnRlbmVkb3IpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvZ2luX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvb25kYTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG59XHJcbi5sb2dpbl9ib3h7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvRm9uZG9fNy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxufVxyXG4uY29udGFpbmVyLWZvcm17XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNhNWE1YTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAxcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMnB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLnRpdHVsb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnO1xyXG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuaDN7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4yNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuLmNhbXBve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5sb2FkaW5ne1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogdmFyKC0tdGFtYW5vX2NvbnRlbmVkb3IpO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL29uZGEyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxufVxyXG4ubG9hZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcclxufVxyXG4uY29udGFpbmVyZ2lme1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lc3NhZ2VfbG9hZHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5oMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4uZ2lme1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0X2RpdntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9vbmRhMi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXRhbWFub19jb250ZW5lZG9yKTtcclxufVxyXG4uYWxlcnRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1hZ2VfYmFja3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNhNWE1YTUpO1xyXG59XHJcbi5jb250YWluZXJhbGVydHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAxcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMnB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9ocTUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5OCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDk4JTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNSU7XHJcbn1cclxuLm1lc3NhZ2VfYWxlcnR7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tZXNzYWdlX2FsZXJ0IGgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZSc7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5pY29uX2FsZXJ0IC5iaSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcbi5ib3Rvbl9hbGVydHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAuY29udGFpbmVyLWZvcm17XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDg1JTtcclxuICAgIH1cclxuICAgIC5sb2dpbl9ib3h7XHJcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcbiAgICAuZ2lme1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VfYmFja3tcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VfYWxlcnQgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyYWxlcnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMCU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5473:
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/reporte-re-liquidaciones/reporte-re-liquidaciones.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteReLiquidacionesComponent": () => (/* binding */ ReporteReLiquidacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var file_saver_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver-es */ 4559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);














function ReporteReLiquidacionesComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const empresa_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", empresa_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", empresa_r2, " ");
  }
}
function ReporteReLiquidacionesComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", estado_r3)("disabled", ctx_r1.isOpcionDeshabilitada(estado_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", estado_r3, " ");
  }
}
class ReporteReLiquidacionesComponent {
  constructor(reportservice, formbuilder, dataservice, title, httpService, elementRef) {
    this.reportservice = reportservice;
    this.formbuilder = formbuilder;
    this.dataservice = dataservice;
    this.title = title;
    this.httpService = httpService;
    this.elementRef = elementRef;
    this.Modo = "";
    this.message = "";
    this.empresas = [];
    this.estadoslist = [];
    this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true);
    // url_7 : string = 'http://localhost:4001/getEmpresasrelq';
    // url_8 : string = 'http://localhost:4001/procesarrelq';
    this.url_7 = 'https://backcompensaciones.gestionhq5.com.co/getEmpresasrelq';
    this.url_8 = 'https://backcompensaciones.gestionhq5.com.co/procesarrelq';
    title.setTitle('Reporte Reliquidaciones');
  }
  ngOnDestroy() {}
  isOpcionDeshabilitada(opcion) {
    const estadosControl = this.formreport.get('estados');
    const seleccionActual = estadosControl?.value || [];
    return (seleccionActual.includes('Pendiente') || seleccionActual.includes('Aprobada') || seleccionActual.includes('Enviada a Aprobación')) && (opcion === 'Pagada' || opcion === 'Enviada al banco' || opcion === 'Enviada a Pago' || opcion === 'Enviada a pago sin paz y salvo') || (seleccionActual.includes('Pagada') || seleccionActual.includes('Enviada al banco') || seleccionActual.includes('Enviada a Pago') || seleccionActual.includes('Enviada a pago sin paz y salvo')) && (opcion === 'Pendiente' || opcion === 'Aprobada' || opcion === 'Enviada a Aprobación');
  }
  updateEmpresas() {
    const login = document.getElementById('container_all');
    const loadinggif = document.getElementById('loading');
    const alert_message = document.getElementById('alert');
    if (login) {
      login.style.display = 'none';
    }
    if (loadinggif) {
      loadinggif.style.display = 'block';
    }
    this.reportservice.post_empresas(this.url_7, {
      Data: '0'
    }).subscribe(data => {
      this.handleUpdateEmpresasResponse(data, login, loadinggif, alert_message);
    }, error => {
      console.log(error.message);
    });
  }
  handleUpdateEmpresasResponse(data, login, loadinggif, alert_message) {
    this.RespuestaJson = data;
    if (this.RespuestaJson.process === '0') {
      this.message = 'El reporte se encuentra vacío, por favor valida la información ingresada.';
      this.hideLoadingAndShowAlert(loadinggif, alert_message);
    } else if (this.RespuestaJson.process === '1') {
      if (login) {
        login.style.display = 'block';
      }
      this.hideLoadingAndShowEmpresas(login, loadinggif, alert_message);
    }
  }
  hideLoadingAndShowAlert(loadinggif, alert_message) {
    if (loadinggif) {
      loadinggif.style.display = 'none';
    }
    if (alert_message) {
      alert_message.style.display = 'block';
    }
  }
  hideLoadingAndShowEmpresas(login, loadinggif, alert_message) {
    if (loadinggif) {
      loadinggif.style.display = 'none';
    }
    this.reportservice.get_empresas(this.url_7).subscribe({
      next: data => {
        this.RespuestaJson = data;
        this.estadoslist = this.RespuestaJson.Estados.sort();
        this.empresas = this.RespuestaJson.Empresas.sort();
      },
      error: error => {
        console.log(error.message);
      }
    });
  }
  post_reporte() {
    const login = document.getElementById('container_all');
    const loadinggif = document.getElementById('loading');
    const alert_message = document.getElementById('alert');
    if (login) {
      login.style.display = 'none';
    }
    if (loadinggif) {
      loadinggif.style.display = 'block';
    }
    const reportData = {
      Data: this.formreport.value
    };
    console.log(reportData);
    this.reportservice.post_lq(this.url_8, reportData).subscribe(data => {
      this.handlePostReporteResponse(data, login, loadinggif, alert_message);
    }, error => {
      console.log(error.message);
    });
  }
  handlePostReporteResponse(data, login, loadinggif, alert_message) {
    this.RespuestaJson = data;
    if (this.RespuestaJson.process === '1') {
      this.reportservice.get_lq(this.url_8).subscribe(data => {
        this.handleDownloadResponse(data, login, loadinggif);
      });
    } else {
      this.message = 'El reporte se encuentra vacío, por favor valida la información ingresada.';
      this.hideLoadingAndShowAlert(loadinggif, alert_message);
    }
  }
  handleDownloadResponse(data, login, loadinggif) {
    if (login) {
      login.style.display = 'block';
    }
    if (loadinggif) {
      loadinggif.style.display = 'none';
    }
    const downloadurl = window.URL.createObjectURL(data);
    (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result);
  }
  regresar() {
    const alertMessage = document.getElementById('alert');
    const login = document.getElementById('container_all');
    if (alertMessage) {
      alertMessage.style.display = 'none';
    }
    if (login) {
      login.style.display = 'block';
    }
  }
  ObtenerLocalStorage() {
    const mode = document.getElementById('login');
    const storedMode = localStorage.getItem('Mode');
    if (storedMode === 'dark' && mode) {
      mode.classList.remove('mode');
    } else if (mode) {
      mode.classList.add('mode');
    }
  }
  ngOnInit() {
    this.reportservice.get_empresas(this.url_7).subscribe({
      next: data => {
        this.handleGetEmpresasResponse(data);
      },
      error: error => {
        console.log(error.message);
      }
    });
    this.formreport = this.formbuilder.group({
      empresa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      estados: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      anio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      }),
      mes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      })
    });
    this.ObtenerLocalStorage();
    this.dataservice.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      const mode = document.getElementById('login');
      if (this.Modo == 'light') {
        mode?.classList.add('mode');
      }
      if (this.Modo == 'dark') {
        mode?.classList.remove('mode');
      }
    });
  }
  handleGetEmpresasResponse(data) {
    this.RespuestaJson = data;
    this.estadoslist = this.RespuestaJson.Estados.filter(estado => estado !== 'nan').sort();
    this.empresas = this.RespuestaJson.Empresas.sort();
  }
  enable_input_2() {
    const selectedOptions = this.formreport.get('estados')?.value || [];
    const isNotEmpty = selectedOptions.length > 0;
    const shouldEnable = isNotEmpty && !selectedOptions.includes("Pendiente") && !selectedOptions.includes("Aprobada") && !selectedOptions.includes("Enviada a Aprobación");
    if (shouldEnable) {
      this.formreport.get('anio')?.enable();
      this.formreport.get('mes')?.enable();
    } else {
      this.formreport.get('anio')?.disable();
      this.formreport.get('mes')?.disable();
    }
  }
}
ReporteReLiquidacionesComponent.ɵfac = function ReporteReLiquidacionesComponent_Factory(t) {
  return new (t || ReporteReLiquidacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
ReporteReLiquidacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReporteReLiquidacionesComponent,
  selectors: [["app-reporte-re-liquidaciones"]],
  decls: 56,
  vars: 4,
  consts: [["id", "login"], ["id", "container_all", 1, "container_all"], [1, "login_container"], [1, "login"], [1, "login_box"], [1, "container"], [1, "container-form"], [3, "formGroup", "submit"], [1, "titulo"], ["appearance", "fill", 1, "campo"], ["id", "empresa", "formControlName", "empresa"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "estados", "formControlName", "estados", "multiple", "", 3, "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "campo"], ["matInput", "", "placeholder", "Ingresa un a\u00F1o", "type", "text", "id", "anio", "formControlName", "anio"], ["matInput", "", "placeholder", "Ingresa un mes", "type", "text", "id", "mes", "formControlName", "mes"], [1, "container-button"], ["mat-raised-button", "", "color", "primary", "ng-disabled", "formreport.invalid", 1, "button"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "button", 3, "click"], ["id", "loading", 1, "loading"], [1, "load"], [1, "containergif"], [1, "message_load"], ["src", "assets\\gif\\loading.gif", "alt", "", 1, "gif"], ["id", "alert", 1, "alert_div"], [1, "alerta"], [1, "image_back"], [1, "containeralert"], [1, "message_alert"], [1, "icon_alert"], [1, "bi", "bi-exclamation-circle"], [1, "message_alerta"], ["mat-raised-button", "", "color", "primary", 1, "boton_alert", 3, "click"], [3, "value"], [3, "value", "disabled"]],
  template: function ReporteReLiquidacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ReporteReLiquidacionesComponent_Template_form_submit_7_listener() {
        return ctx.post_reporte();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "REPORTE RELIQUIDACIONES");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "mat-form-field", 9)(13, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReporteReLiquidacionesComponent_mat_option_14_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Empresa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "mat-form-field", 9)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteReLiquidacionesComponent_Template_mat_select_ngModelChange_21_listener() {
        return ctx.enable_input_2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ReporteReLiquidacionesComponent_mat_option_22_Template, 2, 3, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div")(24, "mat-form-field", 14)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "A\u00F1o");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div")(29, "mat-form-field", 14)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Mes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17)(34, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Procesar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteReLiquidacionesComponent_Template_button_click_36_listener() {
        return ctx.updateEmpresas();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Actualizar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20)(39, "div", 21)(40, "div", 22)(41, "div", 23)(42, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Estamos procesando tu solicitud...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 25)(46, "div", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h2", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteReLiquidacionesComponent_Template_button_click_54_listener() {
        return ctx.regresar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formreport);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.empresas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.estadoslist);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton],
  styles: ["[_nghost-%COMP%]{\r\n    \r\n    --tamano_contenedor: 550px;\r\n}\r\n.container_all[_ngcontent-%COMP%]{\r\n    background: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255));\r\n    height: var(--tamano_contenedor);\r\n    width: 100%;\r\n}\r\n.login_container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.login_box[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-image: url('Fondo_7.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    border-radius: 3%;\r\n    padding: 2%;\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container-form[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    padding: 3%;\r\n    height: 80%;\r\n    border-radius: 5%;\r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    color: black;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    word-break:break-all;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    letter-spacing: -.25px;\r\n    line-height: 150%;\r\n    font-weight: bolder;\r\n    font-size: x-large;\r\n    font-style: normal;\r\n    padding: 3%;\r\n}\r\n.campo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.container-button[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 3em;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    margin: 3px;\r\n}\r\n.loading[_ngcontent-%COMP%]{\r\n    display: none;\r\n    height: var(--tamano_contenedor);\r\n    width:100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.load[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\r\n}\r\n.containergif[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    height: 30%;\r\n    text-align: center;\r\n}\r\n.message_load[_ngcontent-%COMP%]{\r\n    padding-top: 1em;\r\n    color: #ffffff;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-weight: bold;\r\n    font-size: medium;\r\n}\r\n.gif[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n.alert_div[_ngcontent-%COMP%]{\r\n    display: none;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    height: var(--tamano_contenedor);\r\n}\r\n.alerta[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.image_back[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 40%;\r\n    border-radius: 1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n}\r\n.containeralert[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    border-radius: 1em;\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('hq5.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: 98%;\r\n    background-position-y: 98%;\r\n    background-size: 5%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    width: 100%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-size: large;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n.icon_alert[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    color: #ff0000;\r\n}\r\n.boton_alert[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: 10px;\r\n    height: 3em;\r\n}\r\n@media screen and (max-width: 450px){\r\n    .container-form[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        height: 85%;\r\n    }\r\n    .login_box[_ngcontent-%COMP%]{\r\n        height: 550px;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n    .gif[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: smaller;\r\n    }\r\n    .image_back[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 40%;\r\n    }\r\n    .message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: medium;\r\n    }\r\n    .containeralert[_ngcontent-%COMP%]{\r\n        background-size: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9yZXBvcnRlLXJlLWxpcXVpZGFjaW9uZXMvcmVwb3J0ZS1yZS1saXF1aWRhY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrRUFBa0U7SUFDbEUsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtDQUF5RDtJQUN6RCwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsb0NBQTJEO0lBQzNELDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkI7OztrREFHOEM7QUFDbEQ7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlGQUF5RjtJQUN6RixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtRUFBbUU7QUFDdkU7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUZBQXlGO0lBQ3pGLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25COzs7a0RBRzhDO0lBQzlDLHFGQUE0RztJQUM1Ryx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSx5RkFBeUY7SUFDekYsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgLyogVGFtYcODwrFvIGNvbnRlbmVkb3IgZ2VuZXJhbCovXHJcbiAgICAtLXRhbWFub19jb250ZW5lZG9yOiA1NTBweDtcclxufVxyXG4uY29udGFpbmVyX2FsbHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSkscmdiKDI1NSwgMjU1LCAyNTUpKTtcclxuICAgIGhlaWdodDogdmFyKC0tdGFtYW5vX2NvbnRlbmVkb3IpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvZ2luX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvb25kYTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG59XHJcbi5sb2dpbl9ib3h7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvRm9uZG9fNy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxufVxyXG4uY29udGFpbmVyLWZvcm17XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNhNWE1YTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAxcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMnB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLnRpdHVsb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnO1xyXG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuaDN7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4yNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuLmNhbXBve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5sb2FkaW5ne1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogdmFyKC0tdGFtYW5vX2NvbnRlbmVkb3IpO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL29uZGEyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxufVxyXG4ubG9hZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcclxufVxyXG4uY29udGFpbmVyZ2lme1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lc3NhZ2VfbG9hZHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5oMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4uZ2lme1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0X2RpdntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9vbmRhMi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXRhbWFub19jb250ZW5lZG9yKTtcclxufVxyXG4uYWxlcnRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1hZ2VfYmFja3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNhNWE1YTUpO1xyXG59XHJcbi5jb250YWluZXJhbGVydHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAxcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMnB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9ocTUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5OCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDk4JTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNSU7XHJcbn1cclxuLm1lc3NhZ2VfYWxlcnR7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tZXNzYWdlX2FsZXJ0IGgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZSc7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5pY29uX2FsZXJ0IC5iaSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcbi5ib3Rvbl9hbGVydHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAuY29udGFpbmVyLWZvcm17XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDg1JTtcclxuICAgIH1cclxuICAgIC5sb2dpbl9ib3h7XHJcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcbiAgICAuZ2lme1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VfYmFja3tcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VfYWxlcnQgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyYWxlcnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMCU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8197:
/*!*****************************************************************************!*\
  !*** ./src/app/Components/reportehorizontal/reportehorizontal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportehorizontalComponent": () => (/* binding */ ReportehorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var file_saver_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver-es */ 4559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);













function ReportehorizontalComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idproceso_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", idproceso_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", idproceso_r1.viewValue, " ");
  }
}
class ReportehorizontalComponent {
  constructor(reportservice, formbuilder, dataservice, title) {
    this.reportservice = reportservice;
    this.formbuilder = formbuilder;
    this.dataservice = dataservice;
    this.title = title;
    this.Modo = "";
    this.message = "";
    this.idprocesos = [{
      value: "Agrupar ID proceso",
      viewValue: "Agrupar ID proceso"
    }, {
      value: "Clasificar ID proceso",
      viewValue: "Clasificar ID proceso"
    }];
    // url_1 : string = 'http://localhost:4001/procesar';
    // url_2 : string = 'http://localhost:4001/procesar2';
    // url_3 : string = 'http://localhost:4001/procesar3';
    // url_1 : string = 'http://164.92.109.128:4001/procesar';
    // url_2 : string = 'http://164.92.109.128:4001/procesar2';
    // url_3 : string = 'http://164.92.109.128:4001/procesar3';
    this.url_1 = 'https://backcompensaciones.gestionhq5.com.co/procesar';
    this.url_2 = 'https://backcompensaciones.gestionhq5.com.co/procesar2';
    this.url_3 = 'https://backcompensaciones.gestionhq5.com.co/procesar3';
    title.setTitle('Reporte Horizontal');
  }
  post_reporte() {
    const login = document.getElementById("container_all");
    const loadinggif = document.getElementById("loading");
    const alert_message = document.getElementById("alert");
    if (login != undefined) {
      login.style.display = "none";
    }
    if (loadinggif != undefined) {
      loadinggif.style.display = "block";
    }
    this.reportservice.post_reporte(this.url_1, {
      Data: this.formreport.value
    }).subscribe(data => {
      this.RespuestaJson = data;
      if (this.RespuestaJson.process === '0') {
        this.message = 'El reporte se encuentra vacío, por favor válida la información ingresada.';
        if (loadinggif != undefined) {
          loadinggif.style.display = "none";
        }
        if (alert_message != undefined) {
          alert_message.style.display = "block";
        }
      } else if (this.RespuestaJson.process === '1') {
        this.reportservice.get_report(this.url_1).subscribe(data => {
          if (login != undefined) {
            login.style.display = "block";
          }
          if (loadinggif != undefined) {
            loadinggif.style.display = "none";
          }
          const fileReader = new FileReader();
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result);
        });
      } else if (this.RespuestaJson.process === '2') {
        this.reportservice.get_report(this.url_1).subscribe(data => {
          if (login != undefined) {
            login.style.display = "block";
          }
          if (loadinggif != undefined) {
            loadinggif.style.display = "none";
          }
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result[0]);
        });
        this.reportservice.get_report(this.url_2).subscribe(data => {
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result[1]);
        });
      } else {
        this.reportservice.get_report(this.url_1).subscribe(data => {
          if (login != undefined) {
            login.style.display = "block";
          }
          if (loadinggif != undefined) {
            loadinggif.style.display = "none";
          }
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result[0]);
        });
        this.reportservice.get_report(this.url_2).subscribe(data => {
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result[1]);
        });
        this.reportservice.get_report(this.url_3).subscribe(data => {
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result[2]);
        });
      }
    });
    this.formreport.get('idperiodo')?.reset();
    this.formreport.get('idperiodo2')?.reset();
    this.formreport.get('idperiodo3')?.reset();
  }
  regresar() {
    const alert_message = document.getElementById("alert");
    const login = document.getElementById("container_all");
    if (alert_message != undefined) {
      alert_message.style.display = "none";
    }
    if (login != undefined) {
      login.style.display = "block";
    }
  }
  ObtenerLocalStorage() {
    let Mode = localStorage.getItem("Mode");
    const mode = document.getElementById("login");
    if (Mode == "dark") {
      mode?.classList.remove('mode');
    } else {
      mode?.classList.add('mode');
    }
  }
  ngOnInit() {
    this.formreport = this.formbuilder.group({
      idproceso: ['Agrupar ID proceso', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      idperiodo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(8)]],
      idperiodo2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      }),
      idperiodo3: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
        value: '',
        disabled: true
      })
    });
    this.ObtenerLocalStorage();
    this.dataservice.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      const mode = document.getElementById("login");
      if (this.Modo == 'light') {
        mode?.classList.add('mode');
      }
      if (this.Modo == 'dark') {
        mode?.classList.remove('mode');
      }
    });
  }
  enable_input_2() {
    let input_one = this.formreport.get('idperiodo')?.value;
    let tamano_one = 0;
    if (input_one != null) {
      tamano_one = input_one.length;
    }
    if (tamano_one >= 4 && tamano_one <= 8) {
      this.formreport.get('idperiodo2')?.enable();
    } else {
      this.formreport.get('idperiodo2')?.disable();
      this.formreport.get('idperiodo3')?.disable();
      this.formreport.get('idperiodo2')?.reset();
      this.formreport.get('idperiodo3')?.reset();
    }
  }
  enable_input_3() {
    let input_two = this.formreport.get('idperiodo2')?.value;
    let tamano_two = 0;
    if (input_two != null) {
      tamano_two = input_two.length;
    }
    if (Number(tamano_two) >= 4 && Number(tamano_two) <= 8) {
      this.formreport.get('idperiodo3')?.enable();
    } else {
      this.formreport.get('idperiodo3')?.disable();
      this.formreport.get('idperiodo3')?.reset();
    }
  }
}
ReportehorizontalComponent.ɵfac = function ReportehorizontalComponent_Factory(t) {
  return new (t || ReportehorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
ReportehorizontalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReportehorizontalComponent,
  selectors: [["app-reportehorizontal"]],
  decls: 53,
  vars: 4,
  consts: [["id", "login"], ["id", "container_all", 1, "container_all"], [1, "login_container"], [1, "login"], [1, "login_box"], [1, "container"], [1, "container-form"], [3, "formGroup", "submit"], [1, "titulo"], ["appearance", "fill", 1, "campo"], ["id", "idproceso", "formControlName", "idproceso"], [3, "value", 4, "ngFor", "ngForOf"], [1, "campo"], ["matInput", "", "placeholder", "Ingresa un ID Periodo", "type", "text", "id", "idperiodo", "formControlName", "idperiodo", 3, "ngModelChange"], ["matInput", "", "placeholder", "Ingresa un ID Periodo", "type", "text", "id", "idperiodo2", "formControlName", "idperiodo2", 3, "ngModelChange"], ["matInput", "", "placeholder", "Ingresa un ID Periodo", "type", "text", "id", "idperiodo3", "formControlName", "idperiodo3"], [1, "container-button"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "disabled"], ["id", "loading", 1, "loading"], [1, "load"], [1, "containergif"], [1, "message_load"], ["src", "assets\\gif\\loading.gif", "alt", "", 1, "gif"], ["id", "alert", 1, "alert_div"], [1, "alerta"], [1, "image_back"], [1, "containeralert"], [1, "message_alert"], [1, "icon_alert"], [1, "bi", "bi-exclamation-circle"], [1, "message_alerta"], ["mat-raised-button", "", "color", "primary", 1, "boton_alert", 3, "click"], [3, "value"]],
  template: function ReportehorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ReportehorizontalComponent_Template_form_submit_7_listener() {
        return ctx.post_reporte();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "REPORTE N\u00D3MINA");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "mat-form-field", 9)(13, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReportehorizontalComponent_mat_option_14_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "ID Proceso");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "mat-form-field", 12)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "ID Periodo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReportehorizontalComponent_Template_input_ngModelChange_21_listener() {
        return ctx.enable_input_2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div")(23, "mat-form-field", 12)(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "ID Periodo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReportehorizontalComponent_Template_input_ngModelChange_26_listener() {
        return ctx.enable_input_3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div")(28, "mat-form-field", 12)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "ID Periodo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16)(33, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Procesar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18)(36, "div", 19)(37, "div", 20)(38, "div", 21)(39, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Estamos procesando tu solicitud...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 23)(43, "div", 24)(44, "div", 25)(45, "div", 26)(46, "div", 27)(47, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportehorizontalComponent_Template_button_click_51_listener() {
        return ctx.regresar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formreport);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.idprocesos);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.formreport.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton],
  styles: ["[_nghost-%COMP%]{\r\n    \r\n    --tamano_contenedor: 550px;\r\n}\r\n.container_all[_ngcontent-%COMP%]{\r\n    background: linear-gradient(rgb(255, 255, 255),rgb(255, 255, 255));\r\n    height: var(--tamano_contenedor);\r\n    width: 100%;\r\n}\r\n.login_container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.login_box[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-image: url('Fondo_7.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    border-radius: 3%;\r\n    padding: 2%;\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container-form[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    padding: 3%;\r\n    height: 80%;\r\n    border-radius: 5%;\r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    color: black;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    word-break:break-all;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    letter-spacing: -.25px;\r\n    line-height: 150%;\r\n    font-weight: bolder;\r\n    font-size: x-large;\r\n    font-style: normal;\r\n    padding: 3%;\r\n}\r\n.campo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.container-button[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 3em;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n.loading[_ngcontent-%COMP%]{\r\n    display: none;\r\n    height: var(--tamano_contenedor);\r\n    width:100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.load[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\r\n}\r\n.containergif[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    height: 30%;\r\n    text-align: center;\r\n}\r\n.message_load[_ngcontent-%COMP%]{\r\n    padding-top: 1em;\r\n    color: #ffffff;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-weight: bold;\r\n    font-size: medium;\r\n}\r\n.gif[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n.alert_div[_ngcontent-%COMP%]{\r\n    display: none;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    height: var(--tamano_contenedor);\r\n}\r\n.alerta[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.image_back[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 40%;\r\n    border-radius: 1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n}\r\n.containeralert[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    border-radius: 1em;\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('hq5.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: 98%;\r\n    background-position-y: 98%;\r\n    background-size: 5%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    width: 100%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-size: large;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n.icon_alert[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    color: #ff0000;\r\n}\r\n.boton_alert[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: 10px;\r\n    height: 3em;\r\n}\r\n@media screen and (max-width: 450px){\r\n    .container-form[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        height: 85%;\r\n    }\r\n    .login_box[_ngcontent-%COMP%]{\r\n        height: 550px;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n    .gif[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: smaller;\r\n    }\r\n    .image_back[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 40%;\r\n    }\r\n    .message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: medium;\r\n    }\r\n    .containeralert[_ngcontent-%COMP%]{\r\n        background-size: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9yZXBvcnRlaG9yaXpvbnRhbC9yZXBvcnRlaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0VBQWtFO0lBQ2xFLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLG9DQUEyRDtJQUMzRCwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25COzs7a0RBRzhDO0FBQ2xEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5RkFBeUY7SUFDekYsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQXlEO0lBQ3pELDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUVBQW1FO0FBQ3ZFO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlGQUF5RjtJQUN6RixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQXlEO0lBQ3pELDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2Q0FBNkM7QUFDakQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQjs7O2tEQUc4QztJQUM5QyxxRkFBNEc7SUFDNUcsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUZBQXlGO0lBQ3pGLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC8qIFRhbWHDg8KxbyBjb250ZW5lZG9yIGdlbmVyYWwqL1xyXG4gICAgLS10YW1hbm9fY29udGVuZWRvcjogNTUwcHg7XHJcbn1cclxuLmNvbnRhaW5lcl9hbGx7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjU1LCAyNTUpLHJnYigyNTUsIDI1NSwgMjU1KSk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXRhbWFub19jb250ZW5lZG9yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dpbl9jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL29uZGEyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxufVxyXG4ubG9naW5fYm94e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0ZvbmRvXzcuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbn1cclxuLmNvbnRhaW5lci1mb3Jte1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmLCAjYTVhNWE1KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMXB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAycHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi50aXR1bG97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJztcclxuICAgIHdvcmQtYnJlYWs6YnJlYWstYWxsO1xyXG59XHJcbmgze1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcbi5jYW1wb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWluZXItYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxvYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS10YW1hbm9fY29udGVuZWRvcik7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvb25kYTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG59XHJcbi5sb2Fke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xyXG59XHJcbi5jb250YWluZXJnaWZ7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVzc2FnZV9sb2Fke1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZSc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcbi5naWZ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uYWxlcnRfZGl2e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL29uZGEyLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxuICAgIGhlaWdodDogdmFyKC0tdGFtYW5vX2NvbnRlbmVkb3IpO1xyXG59XHJcbi5hbGVydGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWFnZV9iYWNre1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2E1YTVhNSk7XHJcbn1cclxuLmNvbnRhaW5lcmFsZXJ0e1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDFweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAycHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMnB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL2hxNS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDk4JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOTglO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1JTtcclxufVxyXG4ubWVzc2FnZV9hbGVydHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1lc3NhZ2VfYWxlcnQgaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmljb25fYWxlcnQgLmJpIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuLmJvdG9uX2FsZXJ0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGhlaWdodDogM2VtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuICAgIC5jb250YWluZXItZm9ybXtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogODUlO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2JveHtcclxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICAgIC5naWZ7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIH1cclxuICAgIC5pbWFnZV9iYWNre1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZV9hbGVydCBoMntcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJhbGVydHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwJTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7470:
/*!***************************************************************!*\
  !*** ./src/app/Components/reportetxt/reportetxt.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportetxtComponent": () => (/* binding */ ReportetxtComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var file_saver_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver-es */ 4559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/report.service */ 2820);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);













function ReportetxtComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const empresa_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", empresa_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", empresa_r2.viewValue, " ");
  }
}
function ReportetxtComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.disableSelect.value)("value", group_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r3);
  }
}
class ReportetxtComponent {
  constructor(reportservices, formbuilder, dataservice, title) {
    this.reportservices = reportservices;
    this.formbuilder = formbuilder;
    this.dataservice = dataservice;
    this.title = title;
    this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true);
    this.Modo = "";
    this.groupslist = [];
    this.empresas = [{
      value: "HQ5 S.A.S",
      viewValue: "HQ5 S.A.S"
    }, {
      value: "TECNO GESTION FD S A S",
      viewValue: "TECNO GESTION FD S A S"
    }, {
      value: "TEMPOENLACE S.A.S",
      viewValue: "TEMPOENLACE S.A.S"
    }, {
      value: "COOMPHIA SERVICIOS",
      viewValue: "COOMPHIA SERVICIOS"
    }];
    //url_4 : string = 'http://localhost:4001/procesarTXTSS';
    this.url_4 = 'https://backcompensaciones.gestionhq5.com.co/procesarTXTSS';
    title.setTitle('Reporte TXTSS');
  }
  post_txtss() {
    const login = document.getElementById("login_box");
    const loadinggif = document.getElementById("loading");
    const alert_message = document.getElementById("alert");
    let a = {
      Data: this.formtxt.value
    };
    console.log(a);
    if (login != undefined) {
      login.style.display = "none";
    }
    if (loadinggif != undefined) {
      loadinggif.style.display = "block";
    }
    this.reportservices.post_txtss(this.url_4, {
      Data: this.formtxt.value
    }).subscribe(data => {
      this.RespuestaJson = data;
      if (this.RespuestaJson.process === '1') {
        this.reportservices.get_txtss(this.url_4).subscribe(data => {
          if (login != undefined) {
            login.style.display = "block";
          }
          if (loadinggif != undefined) {
            loadinggif.style.display = "none";
          }
          let downloadurl = window.URL.createObjectURL(data);
          (0,file_saver_es__WEBPACK_IMPORTED_MODULE_0__.saveAs)(downloadurl, this.RespuestaJson.result);
          this.formtxt.get('groups')?.reset();
        });
      } else if (this.RespuestaJson.process === '2') {
        if (login != undefined) {
          login.style.display = "block";
        }
        if (loadinggif != undefined) {
          loadinggif.style.display = "none";
        }
        this.disableSelect.setValue(false);
        this.RespuestaLista = this.RespuestaJson.result.replace('[', '');
        this.RespuestaLista = this.RespuestaLista.replace(']', '');
        this.Replaces = /'/g;
        this.RespuestaLista = this.RespuestaLista.replace(this.Replaces, "");
        this.RespuestaLista = this.RespuestaLista.split(',');
        this.groupslist = [];
        for (let Elemento of this.RespuestaLista) {
          this.groupslist.push(Elemento);
        }
      } else {
        if (loadinggif != undefined) {
          loadinggif.style.display = "none";
        }
        if (alert_message != undefined) {
          alert_message.style.display = "block";
        }
        this.groupslist = [];
        this.formtxt.get('anio')?.reset();
        this.formtxt.get('mes')?.reset();
        this.formtxt.get('empresa')?.reset();
        this.formtxt.get('groups')?.reset();
      }
    });
  }
  regresar() {
    const alert_message = document.getElementById("alert");
    const login = document.getElementById("login_box");
    if (alert_message != undefined) {
      alert_message.style.display = "none";
    }
    if (login != undefined) {
      login.style.display = "block";
    }
  }
  ObtenerLocalStorage() {
    let Mode = localStorage.getItem("Mode");
    const mode = document.getElementById("login_txt");
    if (Mode == "dark") {
      mode?.classList.remove('mode');
    } else {
      mode?.classList.add('mode');
    }
  }
  ngOnInit() {
    this.formtxt = this.formbuilder.group({
      empresa: ['HQ5 S.A.S', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      anio: ['2023', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(4)]],
      mes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(2)]],
      groups: []
    });
    this.ObtenerLocalStorage();
    this.dataservice.DisparadorModo.subscribe(data => {
      this.Modo = data.data;
      const mode = document.getElementById("login_txt");
      if (this.Modo == 'light') {
        mode?.classList.toggle('mode');
      }
      if (this.Modo == 'dark') {
        mode?.classList.toggle('mode');
      }
    });
  }
}
ReportetxtComponent.ɵfac = function ReportetxtComponent_Factory(t) {
  return new (t || ReportetxtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};
ReportetxtComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReportetxtComponent,
  selectors: [["app-reportetxt"]],
  decls: 56,
  vars: 6,
  consts: [["id", "login_txt"], ["id", "login_box", 1, "login_container"], [1, "login"], [1, "login_box"], [1, "container"], [1, "container-form"], [3, "formGroup", "submit"], [1, "titulo"], ["appearance", "fill", 1, "campo"], ["id", "empresa", "formControlName", "empresa"], [3, "value", 4, "ngFor", "ngForOf"], [1, "campo"], ["matInput", "", "placeholder", "Ingresa un a\u00F1o", "type", "text", "id", "anio", "formControlName", "anio"], ["matInput", "", "placeholder", "Ingresa un mes", "type", "text", "id", "mes", "formControlName", "mes"], ["id", "groups", "formControlName", "groups", "multiple", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "container-button", 3, "hidden"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "disabled"], ["mat-raised-button", "", "color", "primary", 1, "button"], ["id", "loading", 1, "loading"], [1, "load"], [1, "containergif"], [1, "message_load"], ["src", "assets\\gif\\loading.gif", "alt", "", 1, "gif"], ["id", "alert", 1, "alert_div"], [1, "alerta"], [1, "image_back"], [1, "containeralert"], [1, "message_alert"], [1, "icon_alert"], [1, "bi", "bi-exclamation-circle"], [1, "message_alerta"], ["mat-raised-button", "", "color", "primary", 1, "boton_alert", 3, "click"], [3, "value"], [3, "disabled", "value"]],
  template: function ReportetxtComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ReportetxtComponent_Template_form_submit_6_listener() {
        return ctx.post_txtss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "TXT SS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "mat-form-field", 8)(12, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ReportetxtComponent_mat_option_13_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Empresa");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div")(17, "mat-form-field", 11)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "A\u00F1o");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div")(22, "mat-form-field", 11)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Mes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div")(27, "mat-form-field", 8)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Grupos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ReportetxtComponent_mat_option_31_Template, 2, 3, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16)(33, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Obtener grupos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 16)(36, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Procesar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 19)(39, "div", 20)(40, "div", 21)(41, "div", 22)(42, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Estamos procesando tu solicitud...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 24)(46, "div", 25)(47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h2", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "El reporte se encuentra vac\u00EDo, por favor v\u00E1lida la informaci\u00F3n ingresada.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportetxtComponent_Template_button_click_54_listener() {
        return ctx.regresar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formtxt);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.empresas);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.groupslist);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.disableSelect.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.formtxt.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.disableSelect.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton],
  styles: ["[_nghost-%COMP%]{\r\n    \r\n    --tamano_contenedor: 550px;\r\n}\r\n.login_container[_ngcontent-%COMP%]{\r\n    height: var(--tamano_contenedor);\r\n    width: 100%;\r\n    background: linear-gradient(rgb(255, 255, 255),rgb(228, 228, 228));\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.login_box[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-image: url('Fondo_7.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    border-radius: 3%;\r\n    padding: 2%;\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.container-form[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    padding: 3%;\r\n    height: 80%;\r\n    border-radius: 5%;\r\n    background: linear-gradient(#ffffff, #c9c9c9);\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    color: black;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    word-break:break-all;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    letter-spacing: -.25px;\r\n    line-height: 150%;\r\n    font-weight: bolder;\r\n    font-size: x-large;\r\n    font-style: normal;\r\n    padding: 3%;\r\n}\r\n.campo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.container-button[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 3em;   \r\n}\r\n.button[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n.loading[_ngcontent-%COMP%]{\r\n    display: none;\r\n    height: var(--tamano_contenedor);\r\n    width:100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n}\r\n.load[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\r\n}\r\n.containergif[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    height: 30%;\r\n    text-align: center;\r\n}\r\n.message_load[_ngcontent-%COMP%]{\r\n    padding-top: 1em;\r\n    color: #ffffff;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-weight: bold;\r\n    font-size: medium;\r\n}\r\n.gif[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n.alert_div[_ngcontent-%COMP%]{\r\n    display: none;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-image: url('onda2.svg');\r\n    background-position-x: 50%;\r\n    background-position-y: 50%;\r\n    height: var(--tamano_contenedor);\r\n}\r\n.alerta[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.image_back[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 40%;\r\n    border-radius: 1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    background: linear-gradient(#ffffff, #a5a5a5);\r\n}\r\n.containeralert[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width:100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    border-radius: 1em;\r\n    border-color: rgb(0, 0, 0);\r\n    border-width: 0.5px;\r\n    border-style: solid;\r\n    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5),\r\n                1px 2px 4px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5),\r\n                2px 4px 8px 0px rgba(0, 0, 0, 0.5);\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('hq5.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position-x: 98%;\r\n    background-position-y: 98%;\r\n    background-size: 5%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    width: 100%;\r\n}\r\n.message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';\r\n    font-size: large;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n.icon_alert[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    color: #ff0000;\r\n}\r\n.boton_alert[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: 10px;\r\n    height: 3em;\r\n}\r\n@media screen and (max-width: 450px){\r\n    .container-form[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        height: 85%;\r\n    }\r\n    .login_box[_ngcontent-%COMP%]{\r\n        height: 550px;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n        font-size: large;\r\n    }\r\n    .gif[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n    h2[_ngcontent-%COMP%]{\r\n        font-size: smaller;\r\n    }\r\n    .image_back[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        height: 40%;\r\n    }\r\n    .message_alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: medium;\r\n    }\r\n    .containeralert[_ngcontent-%COMP%]{\r\n        background-size: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9yZXBvcnRldHh0L3JlcG9ydGV0eHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsa0VBQWtFO0lBQ2xFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQXlEO0lBQ3pELDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixvQ0FBMkQ7SUFDM0QsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3QywwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQjs7O2tEQUc4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUZBQXlGO0lBQ3pGLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtDQUF5RDtJQUN6RCwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1FQUFtRTtBQUN2RTtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5RkFBeUY7SUFDekYsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtDQUF5RDtJQUN6RCwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkI7OztrREFHOEM7SUFDOUMscUZBQTRHO0lBQzVHLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlGQUF5RjtJQUN6RixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICAvKiBUYW1hw4PCsW8gY29udGVuZWRvciBnZW5lcmFsKi9cclxuICAgIC0tdGFtYW5vX2NvbnRlbmVkb3I6IDU1MHB4O1xyXG59XHJcbi5sb2dpbl9jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXRhbWFub19jb250ZW5lZG9yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDI1NSwgMjU1KSxyZ2IoMjI4LCAyMjgsIDIyOCkpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvb25kYTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG59XHJcbi5sb2dpbl9ib3h7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvRm9uZG9fNy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcclxufVxyXG4uY29udGFpbmVyLWZvcm17XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNjOWM5YzkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAxcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMnB4IDRweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLnRpdHVsb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnO1xyXG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuaDN7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4yNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuLmNhbXBve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDNlbTsgICBcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9hZGluZ3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXRhbWFub19jb250ZW5lZG9yKTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9vbmRhMi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XHJcbn1cclxuLmxvYWR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XHJcbn1cclxuLmNvbnRhaW5lcmdpZntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZXNzYWdlX2xvYWR7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuLmdpZntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5hbGVydF9kaXZ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvb25kYTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS10YW1hbm9fY29udGVuZWRvcik7XHJcbn1cclxuLmFsZXJ0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltYWdlX2JhY2t7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmLCAjYTVhNWE1KTtcclxufVxyXG4uY29udGFpbmVyYWxlcnR7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgMXB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcclxuICAgICAgICAgICAgICAgIDJweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXHJcbiAgICAgICAgICAgICAgICAycHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMCkpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvaHE1LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOTglO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA5OCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUlO1xyXG59XHJcbi5tZXNzYWdlX2FsZXJ0e1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWVzc2FnZV9hbGVydCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uaWNvbl9hbGVydCAuYmkge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG4uYm90b25fYWxlcnR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1mb3Jte1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYm94e1xyXG4gICAgICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG4gICAgLmdpZntcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgfVxyXG4gICAgLmltYWdlX2JhY2t7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlX2FsZXJ0IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcmFsZXJ0e1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/home/home.component */ 4611);
/* harmony import */ var _Components_reportehorizontal_reportehorizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/reportehorizontal/reportehorizontal.component */ 8197);
/* harmony import */ var _Components_reportetxt_reportetxt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/reportetxt/reportetxt.component */ 7470);
/* harmony import */ var _Components_reporte_liquidaciones_reporte_liquidaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/reporte-liquidaciones/reporte-liquidaciones.component */ 5821);
/* harmony import */ var _Components_reporte_re_liquidaciones_reporte_re_liquidaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/reporte-re-liquidaciones/reporte-re-liquidaciones.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'reportehorizontal',
  component: _Components_reportehorizontal_reportehorizontal_component__WEBPACK_IMPORTED_MODULE_1__.ReportehorizontalComponent
}, {
  path: 'reporteLiquidaciones',
  component: _Components_reporte_liquidaciones_reporte_liquidaciones_component__WEBPACK_IMPORTED_MODULE_3__.ReporteLiquidacionesComponent
}, {
  path: 'reporteReLiquidaciones',
  component: _Components_reporte_re_liquidaciones_reporte_re_liquidaciones_component__WEBPACK_IMPORTED_MODULE_4__.ReporteReLiquidacionesComponent
}, {
  path: 'reportetxt',
  component: _Components_reportetxt_reportetxt_component__WEBPACK_IMPORTED_MODULE_2__.ReportetxtComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ 160);
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/footer/footer.component */ 223);




class AppComponent {
  constructor() {}
  ObtenerLocalStorage() {
    let Mode = localStorage.getItem("Mode");
    const mode = document.getElementById("Navbar");
    const mode_footer = document.getElementById("Footer");
    const Light = document.getElementById('Icon_Mode');
    const Dark = document.getElementById('Icon_Mode_2');
    const Logo_2 = document.getElementById('Logo_2');
    const Logo_3 = document.getElementById('Logo_3');
    if (Mode == "dark") {
      mode?.classList.remove('mode');
      mode_footer?.classList.remove('mode');
      if (Light != undefined && Logo_3 != undefined) {
        Light.style.display = 'block';
        Logo_3.style.display = 'block';
      }
      if (Dark != undefined && Logo_2 != undefined) {
        Dark.style.display = 'none';
        Logo_2.style.display = 'none';
      }
    } else {
      mode?.classList.add('mode');
      mode_footer?.classList.add('mode');
      if (Light != undefined && Logo_3 != undefined) {
        Light.style.display = 'none';
        Logo_3.style.display = 'none';
      }
      if (Dark != undefined && Logo_2 != undefined) {
        Dark.style.display = 'block';
        Logo_2.style.display = 'block';
      }
    }
  }
  ngOnInit() {
    this.ObtenerLocalStorage();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ 160);
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/footer/footer.component */ 223);
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/home/home.component */ 4611);
/* harmony import */ var _Components_reportehorizontal_reportehorizontal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/reportehorizontal/reportehorizontal.component */ 8197);
/* harmony import */ var _Components_reportetxt_reportetxt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/reportetxt/reportetxt.component */ 7470);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _Components_reporte_liquidaciones_reporte_liquidaciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/reporte-liquidaciones/reporte-liquidaciones.component */ 5821);
/* harmony import */ var _Components_reporte_re_liquidaciones_reporte_re_liquidaciones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/reporte-re-liquidaciones/reporte-re-liquidaciones.component */ 5473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _Components_reportehorizontal_reportehorizontal_component__WEBPACK_IMPORTED_MODULE_5__.ReportehorizontalComponent, _Components_reportetxt_reportetxt_component__WEBPACK_IMPORTED_MODULE_6__.ReportetxtComponent, _Components_reporte_liquidaciones_reporte_liquidaciones_component__WEBPACK_IMPORTED_MODULE_7__.ReporteLiquidacionesComponent, _Components_reporte_re_liquidaciones_reporte_re_liquidaciones_component__WEBPACK_IMPORTED_MODULE_8__.ReporteReLiquidacionesComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DataService {
  constructor() {
    this.DisparadorModo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)();
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2820:
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ReportService {
  // URL_API = 'http://localhost:4000/';
  constructor(http) {
    this.http = http;
  }
  post_reporte(url, body) {
    return this.http.post(url, body, {
      responseType: 'json'
    });
  }
  get_report(url) {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
  post_txtss(url, body) {
    return this.http.post(url, body, {
      responseType: 'json'
    });
  }
  get_txtss(url) {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
  post_empresas(url, body) {
    return this.http.post(url, body, {
      responseType: 'json'
    });
  }
  get_empresas(url) {
    return this.http.get(url, {
      responseType: 'json'
    });
  }
  post_lq(url, body) {
    return this.http.post(url, body, {
      responseType: 'json'
    });
  }
  get_lq(url) {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
}
ReportService.ɵfac = function ReportService_Factory(t) {
  return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ReportService,
  factory: ReportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
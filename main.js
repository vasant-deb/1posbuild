(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\1pos\src\main.ts */"zUnb");


/***/ }),

/***/ "1ubg":
/*!********************************************!*\
  !*** ./src/app/refund/refund.component.ts ***!
  \********************************************/
/*! exports provided: RefundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundComponent", function() { return RefundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");








function RefundComponent_mat_progress_bar_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 21);
} }
function RefundComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.searchError);
} }
function RefundComponent_div_19_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_div_19_tr_66_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const order_r5 = ctx.$implicit; return order_r5.item_quantity = $event; })("change", function RefundComponent_div_19_tr_66_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const order_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.mark(order_r5.item_id, order_r5.item_name, order_r5.item_price, order_r5.item_quantity, order_r5.item_subtotal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r5.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", order_r5.item_quantity)("ngModel", order_r5.item_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r5.item_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r5.item_subtotal);
} }
function RefundComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mode of Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Card Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Gift Card Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cash Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Points Redeemed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RefundComponent_div_19_tr_66_Template, 9, 6, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Total Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "SUBTOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "TAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.userid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.modeOfPayment[0].modeofpayment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.card, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.giftcard, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.cash, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.orderinfo.pointsRedeem, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.orderinfo.order_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderinfo.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderinfo.subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderinfo.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderinfo.total);
} }
function RefundComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r3.refundResponse));
} }
class RefundComponent {
    constructor(http) {
        this.http = http;
        this.refundData = {
            orderId: '',
            orderNumber: '',
            refundAmount: 0,
            refundReason: '',
            items: '',
            userid: localStorage.getItem('userid'),
            totalrefund: 0.00,
            refundtax: 0.00
            // Input field for refund reason
        };
        this.searchQuery = ''; // Input field for search query (order ID or order number)
        this.searchError = null; // To store search error messages
        this.tax = 0.00;
        this.loader = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.userid = localStorage.getItem('userid');
        this.orderview = false;
    }
    ngOnInit() {
        this.getsettings();
    }
    searchOrder() {
        this.loader = true;
        const data = {
            orderid: this.searchQuery
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(this.apiUrl + 'getorder', data, { headers }).subscribe((response) => {
            if (response.error === false) {
                try {
                    // Parse the order_items JSON string into an array
                    response.orderinfo.order_items = JSON.parse(response.orderinfo.order_items);
                }
                catch (error) {
                    console.error('Error parsing order_items:', error);
                }
                this.orderinfo = response.orderinfo;
                console.log(this.orderinfo.order_items);
                this.searchError = null; // Clear any previous search errors
            }
            else {
                this.orderinfo = null; // Clear previous order details on error
                this.searchError = 'Order not found. Please check your search query.';
            }
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        }, (error) => {
            console.error('Error during searchOrder:', error);
            // Handle errors and display an error message to the user.
            this.searchError = 'An error occurred while searching for the order.';
        });
    }
    getsettings() {
        this.http.get(`${this.apiUrl}get-general-settings`).subscribe((data) => {
            // Load general settings data from the server response
            this.settings = data;
            console.log(this.settings);
        });
    }
    mark(item_id, item_name, item_price, item_quantity, item_subtotal) {
        // Handle marking items for refund here
        // For example, you can set a property on the item to track if it's marked for refund.
        // Calculate the new refund amount based on changes in item quantities
        this.updateRefundAmount();
    }
    updateRefundAmount() {
        // Calculate the refund amount based on the updated order items
        this.refundData.refundAmount = 0;
        if (this.orderinfo && this.orderinfo.order_items) {
            for (const order of this.orderinfo.order_items) {
                this.refundData.refundAmount += order.item_subtotal - order.item_quantity * parseFloat(order.item_price);
            }
        }
        this.refundData.orderId = this.orderinfo.id;
        this.refundData.orderNumber = this.searchQuery;
        this.refundData.refundtax = this.refundData.refundAmount * 0.13;
        this.refundData.totalrefund = this.refundData.refundtax + this.refundData.refundAmount;
        if (this.orderinfo.total < this.refundData.totalrefund) {
            this.refundData.totalrefund = this.orderinfo.total;
        }
    }
    processRefund() {
        // Define the API endpoint for processing refunds
        this.loader = true;
        this.refundData.items = this.orderinfo.order_items;
        // Set the headers for the API request
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        // Make the API call to process the refund
        this.http.post(this.apiUrl + 'refund', this.refundData, { headers }).subscribe((response) => {
            this.refundResponse = response.message;
            //this.printdata=response.orderdata;
            this.print_html(response.orderdata);
            // You can handle the response here, e.g., display a success message to the user.
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        }, (error) => {
            console.error('Error processing refund:', error);
            // Handle errors and display an error message to the user.
        });
    }
    print_html(receiptData) {
        console.log(receiptData);
        // Construct the receipt HTML template using the provided receiptData
        const productsHtml = JSON.parse(receiptData.items).map((item) => `
      <tr>
        <td>${item.item_quantity}</td>
        <td>${item.item_name}</td>
        <td>${item.item_price}</td>
        <td></td>
        <td>${item.item_subtotal}</td>
      </tr>`).join('');
        const receiptHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Receipt</title>
    <style type="text/css" media="print">
      @page {
        size: 72mm;
        margin: 0;
        height: max-content;
      }
      table {
        width: 100%;
      }
      table tr td {
        text-align: center;
      
      }
      .table-header tr {
       border:5px solid black;
       }
      hr{
        line-height:2px;
      }
    </style>
  </head>
  <body>
    <h2>${receiptData.orderNumber}</h2>
    <p>${this.settings.storename}</p>
    <p>${this.settings.address} • ${this.settings.city} • ${this.settings.state} • ${this.settings.postalcode}</p>
    <p>${this.settings.phone}</p>
    <table class="table">
      <thead class="table-header">
        <tr>
          <th>QTY</th>
          <th>DESCRIPTION</th>
          <th>PRICE</th>
          <th>DISC.</th>
          <th>TOT</th>
        </tr>
      </thead>
      <tbody>
        ${productsHtml}
      </tbody>
    </table>
    <hr><hr>
    <table>
      <tbody>
        <tr>
          <td>${receiptData.created}</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td><b>Refund By</b></td>
          <td>${receiptData.userid}</td>
        </tr>
        <tr>
          <td><b>REMARK :</b></td>
          <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>${receiptData.note}</td>
          <td><b>TOTAL REFUND:</b></td>
          <td>${receiptData.amount}</td>
        </tr>
        
      </tbody>
    </table>
    <p>${this.settings.salefooter}</p>
  </body>
  </html>
`;
        // Open a new window for printing
        this.printHtml(receiptHtml);
    }
    printHtml(receiptHtml) {
        const url = 'http://127.0.0.1:5000/print_html';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const body = { htmlContent: receiptHtml, printername: this.settings.printername };
        this.http.post(url, body, { headers, observe: 'response' }).subscribe((response) => {
            if (response.status === 200) {
                console.log('Print request sent successfully.');
            }
            else {
                console.error('Failed to send print request.');
            }
        }, (error) => {
            console.error('Error while sending print request:', error);
        });
    }
}
RefundComponent.ɵfac = function RefundComponent_Factory(t) { return new (t || RefundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RefundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundComponent, selectors: [["app-refund"]], decls: 43, vars: 9, consts: [[1, "container"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "row"], ["mode", "indeterminate", "color", "warn", 4, "ngIf"], [1, "col-md-9"], [1, "form-group"], ["for", "searchQuery"], ["type", "text", "id", "searchQuery", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-md-3"], ["for", "refundAmount"], ["type", "number", "id", "refundAmount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "refundtax", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "totalrefund", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "refundReason"], ["type", "text", "id", "refundReason", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mode", "indeterminate", "color", "warn"], [1, "error"], [1, "col-md-6"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "form-control", 3, "min", "max", "ngModel", "ngModelChange", "change"]], template: function RefundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RefundComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order ID or Order Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_15_listener($event) { return ctx.searchQuery = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundComponent_Template_button_click_16_listener() { return ctx.searchOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Search Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RefundComponent_div_18_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RefundComponent_div_19_Template, 96, 16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Refund Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_26_listener($event) { return ctx.refundData.refundAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tax Refund:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_30_listener($event) { return ctx.refundData.refundtax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total Refund:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_35_listener($event) { return ctx.refundData.totalrefund = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Refund Reason:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_39_listener($event) { return ctx.refundData.refundReason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundComponent_Template_button_click_40_listener() { return ctx.processRefund(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Process Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RefundComponent_div_42_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refundData.refundAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refundData.refundtax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refundData.totalrefund);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refundData.refundReason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.refundResponse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmdW5kL3JlZnVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRzlCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUdaLGdCQUFnQjtJQUNoQiwwSkFBMEo7SUFDMUosMEJBQTBCO0VBQzVCO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UsYUFBYTtJQUNiLDBDQUEwQztFQUM1QztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlZnVuZC9yZWZ1bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRzIHtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDExMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1vcmRlcnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuICAub3JkZXItYnJlYWRjcnVtYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2JhZGE1NTtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYS5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtcm93IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAucGFnZS10aXRsZSBoMSB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyX3NvcnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgdWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgNTBweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpLmZpcnN0IHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JhZGE1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbiAgLmRvd25sb2FkLWFsbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsIGEuYWxsLWhpc3Rvcnkge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGw6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXNvcnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItc29ydGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzVweCA1cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ3dBTEFKRUFBQUFBQVAvLy94VVZGZi8vL3lINUJBRUFBQU1BTEFBQUFBQUxBQXNBQUFJVW5DMm5LTG5UNG9yMDBQdnlyUXdyUHpVWnNoUUFPdz09KSA5NiUvMTUlIG5vLXJlcGVhdCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENBVVRJT046IElFIGhhY2tlcnkgYWhlYWQgKi9cclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qIHJlbW92ZSBkZWZhdWx0IGFycm93IG9uIGllMTAgYW5kIGllMTEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLXN1bW1hcnkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDIzLjc1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2JhZGE1NTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBpbWc6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjODg4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5idG4tZGVmYXVsdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5lcnJvci10aXRsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzMzAwO1xyXG4gICAgY29sb3I6ICNmZjMzMDA7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5wcm9kdWN0LXRpdGxlIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggYS5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuICBpbnB1dCNzZWFyY2gtbWUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICBcclxufVxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24ub3JkZXItbnVtYmVyLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmEuYmFja3RvaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refund',
                templateUrl: './refund.component.html',
                styleUrls: ['./refund.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4yXv":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function CustomersComponent_div_12_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_div_12_tr_26_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.editCustomer(category_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_div_12_tr_26_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deleteCustomer(category_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.street + " " + category_r4.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.dob);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.total_purchases);
} }
function CustomersComponent_div_12_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CustomersComponent_div_12_div_28_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.updateCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.selectedCustomer.customerName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectedCustomer.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.selectedCustomer.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.selectedCustomer.street = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.selectedCustomer.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.selectedCustomer.dob = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_12_div_28_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.selectedCustomer.points = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_div_12_div_28_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.dob);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedCustomer.points);
} }
function CustomersComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total Purchases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CustomersComponent_div_12_tr_26_Template, 23, 8, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustomersComponent_div_12_div_28_Template, 36, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedCustomer);
} }
function CustomersComponent_div_13_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", customer_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r20.customerName);
} }
function CustomersComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomersComponent_div_13_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addRewards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_13_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.rewardData.customerid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomersComponent_div_13_option_11_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_13_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.rewardData.orderid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_13_Template_textarea_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.rewardData.reason = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomersComponent_div_13_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.rewardData.points = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Reward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.rewardData.customerid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.rewardData.orderid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.rewardData.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.rewardData.points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.rewardmessage);
} }
class CustomersComponent {
    constructor(http, router, cdr // Inject ChangeDetectorRef
    ) {
        this.http = http;
        this.router = router;
        this.cdr = cdr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.customerview = false;
        this.userid = localStorage.getItem('userid');
        this.rewardData = {
            userid: this.userid,
            customerid: '',
            orderid: '',
            reason: '',
            points: ''
        };
        this.rewardview = false;
        this.selectedCustomer = null; // This will hold the customer you're editing
        this.rewardmessage = '';
    }
    ngOnInit() {
        this.getcustomers();
    }
    getcustomers() {
        this.customerview = true;
        this.rewardview = false;
        this.http.get(this.apiUrl + 'getcustomers').subscribe((response) => {
            // Handle the response from the server
            if (response.error === false) {
                this.customers = response.customers;
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            // Handle any errors
            console.error('Error during login:', error);
        });
    }
    viewrewards() {
        this.customerview = false;
        this.rewardview = true;
    }
    addRewards() {
        this.http.post(this.apiUrl + 'addrewards', this.rewardData).subscribe((response) => {
            // Handle the response from the server
            if (response.error === false) {
                this.rewardmessage = response.message;
                this.rewardData = {
                    userid: this.userid,
                    customerid: '',
                    orderid: '',
                    reason: '',
                    points: ''
                };
                // Reward added successfully, do something here
            }
            else {
                // Handle errors if needed
            }
        }, (error) => {
            // Handle any errors
            console.error('Error adding reward:', error);
        });
    }
    editCustomer(customer) {
        this.selectedCustomer = Object.assign({}, customer);
    }
    updateCustomer() {
        console.log(this.selectedCustomer);
        this.http.post(this.apiUrl + 'editcustomer', this.selectedCustomer).subscribe((response) => {
            if (response.error === false) {
                // Handle success
                this.getcustomers();
                this.selectedCustomer = null;
            }
            else {
                // Handle error
                console.log('Error:', response.error);
            }
        }, (error) => {
            // Handle HTTP error
            console.error('HTTP Error:', error);
        });
    }
    cancelEdit() {
        this.selectedCustomer = null;
    }
    deleteCustomer(categoryId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeletecustomers/${categoryId}`, null, { headers }).subscribe(() => {
            this.getcustomers();
        });
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 14, vars: 2, consts: [[1, "reports", "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "inlinebutton"], [1, "btnx", 3, "click"], ["class", "row", "id", "order-history", 4, "ngIf"], ["id", "order-history", 1, "row"], [1, "col-md-8"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], [4, "ngIf"], [1, "btn", "btn-black", 3, "click"], [3, "submit"], [1, "form-group"], ["for", "customerName"], ["type", "text", "id", "customerName", "name", "customerName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "number", "id", "phone", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "street"], ["type", "text", "id", "street", "name", "street", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city"], ["type", "text", "id", "city", "name", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "dob"], ["type", "date", "id", "dob", "name", "dob", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "points"], ["type", "number", "id", "points", "name", "points", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-black"], ["type", "button", 1, "btn", "btn-black", 3, "click"], [3, "ngSubmit"], ["rewardForm", "ngForm"], ["for", "customerid"], ["id", "customerid", "name", "customerid", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "orderid"], ["type", "text", "id", "orderid", "name", "orderid", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "reason"], ["id", "reason", "name", "reason", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "points", "name", "points", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit"], [3, "value"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_8_listener() { return ctx.getcustomers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_10_listener() { return ctx.viewrewards(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomersComponent_div_12_Template, 29, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomersComponent_div_13_Template, 28, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rewardview);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: #fff;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\r\n.inlinebutton[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  float: right;\r\n  display: inline-flex;\r\n}\r\n.btnx[_ngcontent-%COMP%]{\r\n  background-color: #111;\r\n  margin: 15px;\r\n  color: white;\r\n  float: right;\r\n  font-size: 18px;\r\n  padding: 0px 10px;\r\n  line-height: 0px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRzlCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUdaLGdCQUFnQjtJQUNoQiwwSkFBMEo7SUFDMUosMEJBQTBCO0VBQzVCO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UsYUFBYTtJQUNiLDBDQUEwQztFQUM1QztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW9yZGVycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4gIC5vcmRlci1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1yb3cge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIGgxIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAub3JkZXJfc29ydGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmFkYTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICAuYnRuLWJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsIGEuYWxsLWhpc3Rvcnkge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGw6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXNvcnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItc29ydGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzVweCA1cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ3dBTEFKRUFBQUFBQVAvLy94VVZGZi8vL3lINUJBRUFBQU1BTEFBQUFBQUxBQXNBQUFJVW5DMm5LTG5UNG9yMDBQdnlyUXdyUHpVWnNoUUFPdz09KSA5NiUvMTUlIG5vLXJlcGVhdCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENBVVRJT046IElFIGhhY2tlcnkgYWhlYWQgKi9cclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qIHJlbW92ZSBkZWZhdWx0IGFycm93IG9uIGllMTAgYW5kIGllMTEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLXN1bW1hcnkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDIzLjc1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2JhZGE1NTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBpbWc6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjODg4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5idG4tZGVmYXVsdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5lcnJvci10aXRsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzMzAwO1xyXG4gICAgY29sb3I6ICNmZjMzMDA7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5wcm9kdWN0LXRpdGxlIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggYS5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuICBpbnB1dCNzZWFyY2gtbWUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICBcclxufVxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24ub3JkZXItbnVtYmVyLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmEuYmFja3RvaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5pbmxpbmVidXR0b257XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmJ0bnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './customers.component.html',
                styleUrls: ['./customers.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "70H3":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function SettingsComponent_mat_progress_bar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 11);
} }
function SettingsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_21_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateGeneralSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Store Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.generalSettings.storename = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Store Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.generalSettings.storenumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.generalSettings.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.generalSettings.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.generalSettings.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.generalSettings.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.generalSettings.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.generalSettings.postalcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Timing 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.generalSettings.timing1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Timing 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.generalSettings.timing2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Timing 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.generalSettings.timing3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Printer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.generalSettings.printername = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sales Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_textarea_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.generalSettings.salefooter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "<p [innerHTML]=\"generalSettings.salefooter\"></p>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Phone Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_textarea_ngModelChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.generalSettings.phonefooter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Repair Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_textarea_ngModelChange_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.generalSettings.repairfooter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Update Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.storename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.storenumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.postalcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.timing1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.timing2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.timing3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.printername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.salefooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.phonefooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.generalSettings.repairfooter);
} }
function SettingsComponent_div_22_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_tr_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const category_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.editCategory(category_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_tr_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const category_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.deleteCategory(category_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r23.name);
} }
function SettingsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SettingsComponent_div_22_tr_12_Template, 9, 1, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add/Edit Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.selectedCategory.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.addCategory(ctx_r29.selectedCategory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add/Edit Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedCategory.name);
} }
function SettingsComponent_div_23_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r33.name, " ");
} }
function SettingsComponent_div_23_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_tr_25_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const category_r34 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.editProduct(category_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_tr_25_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const category_r34 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.deleteProduct(category_r34.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r34 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r34.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r34.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r31.apiUrl + "uploads/" + category_r34.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r34.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r34.product_stock);
} }
function SettingsComponent_div_23_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r38.name);
} }
function SettingsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.searchProductKeyword = $event; })("ngModelChange", function SettingsComponent_div_23_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onSearchProductChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.selectedProductCategory = $event; })("change", function SettingsComponent_div_23_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onCategoryChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_23_option_6_Template, 2, 2, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SettingsComponent_div_23_tr_25_Template, 17, 5, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add/Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.selectedProduct.product_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_Template_select_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.selectedProduct.category_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SettingsComponent_div_23_option_38_Template, 2, 2, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Product Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_23_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onImageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.selectedProduct.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.selectedProduct.product_stock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.addProduct(ctx_r49.selectedProduct); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Add/Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Bulk Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "CSV file must have column name as : (id,category,name,price,product_stock,sku,upc)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_23_Template_input_change_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.onProductFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.onProductUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Upload CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.searchProductKeyword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedProductCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.filteredProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedProduct.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedProduct.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.apiUrl + "uploads/" + ctx_r3.selectedProduct.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedProduct.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedProduct.product_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.productuploadresponse);
} }
function SettingsComponent_div_24_table_4_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_24_table_4_tr_18_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const user_r55 = ctx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.editCustomer(user_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_24_table_4_tr_18_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const user_r55 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r58.deleteCustomer(user_r55.userid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.user_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r55.created);
} }
function SettingsComponent_div_24_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SettingsComponent_div_24_table_4_tr_18_Template, 17, 5, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.customers);
} }
function SettingsComponent_div_24_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SettingsComponent_div_24_div_6_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.updateCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_24_div_6_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.selectedCustomer.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_24_div_6_Template_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.selectedCustomer.role = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Associate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_24_div_6_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.selectedCustomer.user_password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add/Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.selectedCustomer.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.selectedCustomer.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.selectedCustomer.user_password);
} }
function SettingsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_24_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.adduser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingsComponent_div_24_table_4_Template, 19, 1, "table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_24_div_6_Template, 22, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selectedCustomer);
} }
class SettingsComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.categories = [];
        this.selectedCategory = {
            id: '',
            name: '',
            categoryOrder: 0 // Initialize with a default order
        };
        this.generalview = true;
        this.categoryview = false;
        this.userview = false;
        this.productview = false;
        this.activePage = 'general';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.selectedCustomer = null; // This will hold the customer you're editing
        this.generalSettings = {
            storename: '',
            storenumber: '',
            address: '',
            city: '',
            state: '',
            postalcode: '',
            phone: '',
            email: '',
            timing1: '',
            timing2: '',
            timing3: '',
            repairfooter: '',
            salefooter: '',
            phonefooter: '',
            printername: ''
        };
        this.loader = false;
        this.selectedProduct = {
            category_id: '',
            product_name: '',
            image: 'no-image.jpg',
            price: '',
            product_order: '',
            product_id: '',
            product_stock: ''
        };
        this.products = [];
        // Add these variables to your component
        this.searchProductKeyword = ''; // For product search
        this.selectedProductCategory = null; // For filtering by category_id
    }
    ngOnInit() {
        this.loadCategories();
        this.loadProducts();
        this.getcustomers();
        this.loadGeneralSettings();
    }
    loadGeneralSettings() {
        this.http.get(`${this.apiUrl}get-general-settings`).subscribe((data) => {
            // Load general settings data from the server response
            this.generalSettings = data;
        });
    }
    updateGeneralSettings() {
        this.loader = true;
        // Send an HTTP request to update the general settings
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}update-general-settings`, this.generalSettings, { headers }).subscribe(() => {
            // Handle success or display a message
            console.log('General settings updated successfully');
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        });
    }
    loadProducts() {
        this.http.get(`${this.apiUrl}superproducts`).subscribe((data) => {
            this.products = data;
            this.applyFilters(); // Call the filtering function here
        });
    }
    onSearchProductChange(newKeyword) {
        this.searchProductKeyword = newKeyword;
        this.applyFilters(); // Call the filtering function here
    }
    onCategoryChange(newCategory) {
        this.selectedProductCategory = newCategory;
        this.applyFilters(); // Call the filtering function here
    }
    applyFilters() {
        // Make a copy of the products to filter
        let filteredProducts = [...this.products];
        // Filter by search keyword
        if (this.searchProductKeyword) {
            filteredProducts = filteredProducts.filter(product => product.product_name.toLowerCase().includes(this.searchProductKeyword.toLowerCase()));
        }
        // Filter by category_id
        if (this.selectedProductCategory !== null) {
            filteredProducts = filteredProducts.filter(product => product.category_id === this.selectedProductCategory);
        }
        if (this.selectedProductCategory == 0) {
            this.selectedProductCategory = null;
            filteredProducts = [...this.products];
        }
        // Update the filtered products
        this.filteredProducts = filteredProducts;
    }
    viewpage(pagename) {
        if (pagename == "general") {
            this.generalview = true;
            this.categoryview = false;
            this.productview = false;
            this.userview = false;
        }
        if (pagename == "category") {
            this.generalview = false;
            this.categoryview = true;
            this.productview = false;
            this.userview = false;
        }
        if (pagename == "product") {
            this.generalview = false;
            this.categoryview = false;
            this.productview = true;
            this.userview = false;
        }
        if (pagename == "user") {
            this.userview = true;
            this.generalview = false;
            this.categoryview = false;
            this.productview = false;
        }
        this.activePage = pagename;
    }
    loadCategories() {
        this.http.get(`${this.apiUrl}supercategories`).subscribe((data) => {
            this.categories = data;
        });
    }
    onImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            // Assuming you want to upload the file to your server
            // You can use the FormData API to send the file to the server
            const formData = new FormData();
            formData.append('file', file);
            // Make an HTTP POST request to upload the file
            // You can specify your server's endpoint for handling file uploads
            this.http.post(`${this.apiUrl}upload-image`, formData).subscribe((response) => {
                // The response should contain the file name or URL
                this.selectedProduct.image = response.fileName; // Update the image property with the uploaded file name
            });
        }
    }
    addCategory(category) {
        this.loader = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}supercategories`, category, { headers }).subscribe(() => {
            this.loadCategories();
            this.selectedCategory.name = '';
            this.selectedCategory.categoryOrder = 0;
            this.selectedCategory.categoryOrder = 0;
            this.selectedCategory.name = '';
            this.selectedCategory.id = '';
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        });
    }
    addProduct(category) {
        this.loader = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        console.log(category);
        this.http.post(`${this.apiUrl}superproducts`, category, { headers }).subscribe(() => {
            this.loadProducts();
            this.selectedProduct.category_id = '';
            this.selectedProduct.product_order = 0;
            this.selectedProduct.image = 'no-image.jpg';
            this.selectedProduct.price = 0.00;
            this.selectedProduct.product_stock = 0;
            this.selectedProduct.product_id = '';
            this.selectedProduct.product_name = '';
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        });
    }
    onProductFileSelected(event) {
        const inputElement = event.target;
        if (inputElement.files.length > 0) {
            this.selectedProductFile = inputElement.files[0];
        }
    }
    onProductUpload() {
        this.loader = true;
        this.productuploadresponse = 'Uploading.....';
        if (this.selectedProductFile) {
            const formData = new FormData();
            formData.append('file', this.selectedProductFile);
            this.http.post(`${this.apiUrl}import-products`, formData).subscribe((response) => {
                console.log('File uploaded successfully:', response);
                this.productuploadresponse = response.message;
                setTimeout(() => {
                    this.loader = false; // Hide the loader
                }, 500);
            }, (error) => {
                console.error('Error uploading file:', error);
                this.productuploadresponse = error.message;
            });
        }
    }
    onCategoryFileSelected(event) {
        const inputElement = event.target;
        if (inputElement.files.length > 0) {
            this.selectedCategoryFile = inputElement.files[0];
        }
    }
    onCategoryUpload() {
        this.loader = true;
        this.categoryuploadresponse = 'Uploading.....';
        if (this.selectedCategoryFile) {
            const formData = new FormData();
            formData.append('file', this.selectedCategoryFile);
            this.http.post(`${this.apiUrl}import-categories`, formData).subscribe((response) => {
                console.log('File uploaded successfully:', response);
                this.categoryuploadresponse = response.message;
                setTimeout(() => {
                    this.loader = false; // Hide the loader
                }, 500);
            }, (error) => {
                console.error('Error uploading file:', error);
                this.categoryuploadresponse = error.message;
            });
        }
    }
    editCategory(category) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.selectedCategory.categoryOrder = category.categoryOrder;
        this.selectedCategory.name = category.name;
        this.selectedCategory.id = category.id;
    }
    editProduct(category) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.selectedProduct.product_order = category.product_order;
        this.selectedProduct.product_name = category.product_name;
        this.selectedProduct.product_id = category.product_id;
        this.selectedProduct.product_stock = category.product_stock;
        this.selectedProduct.price = category.price;
        this.selectedProduct.category_id = category.category_id;
        this.selectedProduct.image = category.image;
    }
    deleteCategory(categoryId) {
        this.loader = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeletecategories/${categoryId}`, null, { headers }).subscribe(() => {
            this.loadCategories();
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        });
    }
    deleteProduct(categoryId) {
        this.loader = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeleteproducts/${categoryId}`, null, { headers }).subscribe(() => {
            this.loadProducts();
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        });
    }
    getcustomers() {
        this.http.get(this.apiUrl + 'getsupercustomers').subscribe((response) => {
            // Handle the response from the server
            if (response.error === false) {
                this.customers = response.customers;
                console.log(this.customers);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            // Handle any errors
            console.error('Error during login:', error);
        });
    }
    editCustomer(customer) {
        this.selectedCustomer = Object.assign({}, customer);
    }
    updateCustomer() {
        this.loader = true;
        console.log(this.selectedCustomer);
        this.http.post(this.apiUrl + 'superedituser', this.selectedCustomer).subscribe((response) => {
            if (response.error === false) {
                // Handle success
                this.getcustomers();
                this.selectedCustomer = null;
                setTimeout(() => {
                    this.loader = false; // Hide the loader
                }, 500);
            }
            else {
                // Handle error
                console.log('Error:', response.error);
            }
        }, (error) => {
            // Handle HTTP error
            console.error('HTTP Error:', error);
        });
    }
    adduser() {
        this.selectedCustomer = {
            userid: 0,
            username: '',
            password: '',
            role: ''
        };
    }
    cancelEdit() {
        this.selectedCustomer = null;
    }
    deleteCustomer(categoryId) {
        this.loader = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeleteusers/${categoryId}`, null, { headers }).subscribe(() => {
            this.getcustomers();
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 25, vars: 13, consts: [[1, "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], ["mode", "indeterminate", "color", "warn", 4, "ngIf"], [1, "nav", "nav-tabs"], [1, "nav", "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "click"], ["class", "container-fluid generalview", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["mode", "indeterminate", "color", "warn"], [1, "container-fluid", "generalview"], [1, "scroll", "ht70", "row", 3, "ngSubmit"], [1, "col-md-3", "form-group"], ["for", "storename"], ["type", "text", "id", "storename", "name", "storename", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "storenumber"], ["type", "text", "id", "storenumber", "name", "storenumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "postal"], ["type", "text", "id", "phone", "name", "phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["type", "text", "id", "address", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "postalcode", "name", "postalcode", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timing1"], ["type", "text", "id", "timing1", "name", "timing1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timing2"], ["type", "text", "id", "timing2", "name", "timing2", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timing3"], ["type", "text", "id", "timing3", "name", "timing3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "printername", "name", "printername", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "form-group"], ["for", "salefooter"], ["id", "salefooter", "rows", "6", "name", "salefooter", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phonefooter"], ["id", "phonefooter", "rows", "6", "name", "phonefooter", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "repairfooter"], ["id", "repairfooter", "rows", "6", "name", "repairfooter", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-black", "mt30"], [1, "row"], [1, "col-md-6"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "text", "placeholder", "Category Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-black", 3, "click"], [1, "col-md-6", "scroll", "ht100"], ["type", "text", "placeholder", "Search Products", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table", "table-bordered", "table-responsive"], [1, "col-md-3"], ["type", "text", "placeholder", "Product Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "proimage", 3, "src"], ["type", "file", 1, "form-control", 3, "change"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-2"], ["type", "file", "accept", ".csv", 3, "change"], [3, "click"], [3, "value"], [1, "proimge", 3, "src"], [1, "col-md-9", "scroll", "ht100"], [1, "btn", "btn-primary", "float-right", 3, "click"], ["class", "table table-bordered table-responsive", 4, "ngIf"], [4, "ngIf"], [3, "submit"], ["type", "text", "id", "username", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "role", "name", "role", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "manager"], ["value", "associate"], ["type", "text", "id", "user_password", "name", "user_password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-black"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SettingsComponent_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_10_listener() { return ctx.viewpage("general"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_13_listener() { return ctx.viewpage("category"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_16_listener() { return ctx.viewpage("product"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_19_listener() { return ctx.viewpage("user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SettingsComponent_div_21_Template, 65, 15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SettingsComponent_div_22_Template, 23, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SettingsComponent_div_23_Template, 65, 11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SettingsComponent_div_24_Template, 7, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generalview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userview);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"]], styles: [".reports[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px;\r\n}\r\n\r\n.title-row[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n.page-title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 24px;\r\n}\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.nav.nav-tabs[_ngcontent-%COMP%] {\r\n\r\n  padding: 10px;\r\n}\r\n.nav.nav-item[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  display: inline;\r\n  margin-right: 10px;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.nav-link.active[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.generalview[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  margin-top: 10px;\r\n}\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\ntable.table.table-bordered[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background-color: #fff;\r\n}\r\ntable.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n#order-history[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background-color: #fff;\r\n}\r\n#order-history[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #order-history[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.scroll.ht100[_ngcontent-%COMP%] {\r\n  max-height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n.scroll.ht70[_ngcontent-%COMP%] {\r\n  max-height: 75vh;\r\n  overflow-y: auto;\r\n}\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 10px; \r\n}\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #000; \r\n}\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #333; \r\n  border-radius: 5px; \r\n}\r\n.container-row[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n\r\ntable.table.table-bordered.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background-color: #fff;\r\n}\r\ntable.table-bordered.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table-bordered.table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-black[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n.btn.btn-black[_ngcontent-%COMP%]:hover {\r\n  background-color: #000;\r\n}\r\n\r\n.proimage[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n.proimge[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n  max-height: 50px;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.page-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin-right:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBRUEsY0FBYztBQUNkO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUEsYUFBYTtBQUNiOztFQUVFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVyxFQUFFLGlDQUFpQztBQUNoRDtBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsa0NBQWtDO0FBQ3REO0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSx1QkFBdUI7RUFDekMsa0JBQWtCLEVBQUUsa0JBQWtCO0FBQ3hDO0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxnQ0FBZ0M7QUFDcEQ7QUFDQSwwQkFBMEI7QUFDMUI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQSxZQUFZO0FBQ1o7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3ZlcmFsbCBMYXlvdXQgKi9cclxuLnJlcG9ydHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLyogVGl0bGUgUm93ICovXHJcbi50aXRsZS1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi8qIE5hdiBUYWJzICovXHJcbi5uYXYubmF2LXRhYnMge1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2Lm5hdi1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi8qIEdlbmVyYWwgVmlldyAqL1xyXG4uZ2VuZXJhbHZpZXcge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIENhdGVnb3JpZXMgU2VjdGlvbiAqL1xyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG50YWJsZS50YWJsZS1ib3JkZXJlZCB0aCwgdGFibGUudGFibGUtYm9yZGVyZWQgdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFByb2R1Y3QgTWFuYWdlbWVudCBTZWN0aW9uICovXHJcbiNvcmRlci1oaXN0b3J5IHRhYmxlLnRhYmxlLWJvcmRlcmVkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNvcmRlci1oaXN0b3J5IHRhYmxlLnRhYmxlLWJvcmRlcmVkIHRoLFxyXG4jb3JkZXItaGlzdG9yeSB0YWJsZS50YWJsZS1ib3JkZXJlZCB0ZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogVXNlciBNYW5hZ2VtZW50IFNlY3Rpb24gKi9cclxuLnNjcm9sbC5odDEwMCB7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5zY3JvbGwuaHQ3MCB7XHJcbiAgbWF4LWhlaWdodDogNzV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7IC8qIEFkanVzdCB0byB5b3VyIGRlc2lyZWQgd2lkdGggKi9cclxufVxyXG5cclxuLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7IC8qIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRyYWNrICovXHJcbn1cclxuXHJcbi5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjMzMzOyAvKiBDb2xvciBvZiB0aGUgdGh1bWIgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZXIgdGh1bWIgKi9cclxufVxyXG5cclxuLmNvbnRhaW5lci1yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDb2xvciBvZiB0aGUgdGh1bWIgb24gaG92ZXIgKi9cclxufVxyXG4vKiBVc2VyIE1hbmFnZW1lbnQgVGFibGUgKi9cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG50YWJsZS50YWJsZS1ib3JkZXJlZC50YWJsZS1yZXNwb25zaXZlIHRoLFxyXG50YWJsZS50YWJsZS1ib3JkZXJlZC50YWJsZS1yZXNwb25zaXZlIHRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbi5idG4uYnRuLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJsYWNrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKiBJbWFnZXMgKi9cclxuLnByb2ltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucHJvaW1nZSB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnBhZ2UtdGl0bGUgaDEsLnBhZ2UtdGl0bGUgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSBhe1xyXG4gIG1hcmdpbi1yaWdodDozMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HomeComponent {
    constructor(http, router, cdr) {
        this.http = http;
        this.router = router;
        this.cdr = cdr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ngOnInit() {
        this.updateTime();
        this.checkauth();
        this.getsettings();
        this.startLogoutTimer();
    }
    getsettings() {
        this.http.get(`${this.apiUrl}get-general-settings`).subscribe((data) => {
            // Load general settings data from the server response
            this.settings = data;
            console.log(this.settings);
        });
    }
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                if (response.error === false) {
                    if (response.clockin === false) {
                        this.router.navigate(['clockin']);
                    }
                    else {
                        this.avg = parseFloat(response.avg).toFixed(2);
                        console.log(this.avg);
                        if (this.avg === "NaN") {
                            this.avg = 0.00;
                        }
                    }
                    //this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['']);
                }
            }, (error) => {
                console.error('Error during login:', error);
            });
        }
        else {
            this.router.navigate(['']);
        }
    }
    resetLogoutTimer(event) {
        clearTimeout(this.logoutTimeout); // Clear the existing timer
        // Start a new timer to logout after 10 minutes of inactivity
        this.startLogoutTimer();
    }
    // Function to start the logout timer
    startLogoutTimer() {
        this.logoutTimeout = setTimeout(() => {
            this.logout(); // Call the logout function after 10 minutes of inactivity
        }, 30 * 60 * 1000); // 10 minutes in milliseconds
    }
    logout() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            this.http.post(this.apiUrl + 'logout', data, { headers }).subscribe((response) => {
                if (response.error === false) {
                    localStorage.clear();
                    this.router.navigate(['']);
                    //this.router.navigate(['']);
                }
            }, (error) => {
                console.error('Error during login:', error);
            });
        }
        clearTimeout(this.logoutTimeout);
    }
    updateTime() {
        const updateClock = () => {
            const now = new Date();
            this.currentDate = now.toLocaleDateString();
            this.currentTime = now.toLocaleTimeString();
            this.cdr.detectChanges(); // Trigger change detection manually
        };
        // Call updateClock initially
        updateClock();
        // Set up a timer to update the time every second
        setInterval(updateClock, 1000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function HomeComponent_mousemove_HostBindingHandler($event) { return ctx.resetLogoutTimer($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function HomeComponent_keydown_HostBindingHandler($event) { return ctx.resetLogoutTimer($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 74, vars: 4, consts: [["id", "root", 1, "container-fluid", "homebgm"], ["id", "app", 1, "logged-in", "row"], ["id", "app-pin-wrapper"], ["id", "app-menu"], ["id", "app-menu-content-wrapper"], ["id", "app-menu-content"], ["id", "app-menu-content-header"], [1, "app-menu-content-header-section"], ["id", "app-menu-info", 1, "info"], ["id", "time", 1, "time"], ["id", "dailyavg", 1, "dailyavg"], [1, "reminder"], [1, "reminder-text"], ["id", "date", 1, "weather"], ["id", "fullscreen-button", 1, "user-status-button", "clear-button"], [1, "fa-solid", "fa-expand"], ["id", "install-button", 1, "user-status-button", "clear-button", 2, "display", "none"], [1, "fa-solid", "fa-download"], ["id", "weather-section", 1, "menu-section"], [1, "scrollable-component", "menu-section-content"], [1, "day-card"], ["href", "sales", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-cash-register", "cloudy"], [1, "day-name"], ["href", "receipts", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-receipt", "cloudy"], ["href", "customers", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-users", "cloudy"], ["href", "reports", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-file", "cloudy"], ["href", "settings", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-cog", "cloudy"], ["href", "users", 1, "day-card-content"], ["href", "refund", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-undo", "cloudy"], ["id", "logout", 1, "day-card-content", 3, "click"], [1, "day-weather-icon", "fa-duotone", "fa-arrow-right-from-arc", "cloudy"], ["id", "app-background"], ["id", "app-background-image", 1, "background-image"], ["id", "sign-in-button-wrapper"], ["id", "sign-in-button", "type", "button", 1, "user-status-button", "clear-button"], [1, "fa-solid", "fa-arrow-right-to-arc"], ["id", "app-loading-icon"], [1, "fa-solid", "fa-spinner-third"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " INSTALL APP NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Previous Receipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_63_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("AVG ", ctx.avg, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", ctx.settings == null ? null : ctx.settings.storename, "");
    } }, styles: ["a.day-card-content[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none !important;\r\n    cursor: pointer !important;\r\n}\r\nspan#dailyavg[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  float: right;\r\n  font-size: 6em;\r\n  position: absolute;\r\n  right: 0px;\r\n  height: 80px;\r\n  line-height: 80px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\r\n  display: block;\r\n}\r\n  #app-menu {\r\n  background-image: linear-gradient(-45deg, #cc6640, #c21766, #1a7a9d, #1aa784);\r\n  display: grid;\r\n  height: 100vh;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n  background-size: 400% 400%;\r\n  animation: gradient 30s ease infinite;\r\n  position: relative;\r\n  overflow:hidden;\r\n}\r\n@keyframes gradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJDQUEyQztFQUMzQyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw2RUFBNkU7RUFDN0UsYUFBYTtFQUNiLGFBQWE7RUFDYixrQ0FBa0M7O0VBRWxDLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBhLmRheS1jYXJkLWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5zcGFuI2RhaWx5YXZnIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiA2ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuOjpuZy1kZWVwICNhcHAtbWVudSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2NjNjY0MCwgI2MyMTc2NiwgIzFhN2E5ZCwgIzFhYTc4NCk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAzMHMgZWFzZSBpbmZpbml0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { resetLogoutTimer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost/posapi/public/' // Replace with your actual API URL
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JYil":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ConfirmationDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onConfirm(result) {
        this.dialogRef.close(result);
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 8, vars: 1, consts: [[3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmation Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_4_listener() { return ctx.onConfirm(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_6_listener() { return ctx.onConfirm(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                template: `
    <h2>Confirmation Dialog</h2>
    <p>{{ data }}</p>
    <button (click)="onConfirm(true)">Yes</button>
    <button (click)="onConfirm(false)">No</button>
  `,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "OexK":
/*!************************************************!*\
  !*** ./src/app/clockout/clockout.component.ts ***!
  \************************************************/
/*! exports provided: ClockoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockoutComponent", function() { return ClockoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClockoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClockoutComponent.ɵfac = function ClockoutComponent_Factory(t) { return new (t || ClockoutComponent)(); };
ClockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockoutComponent, selectors: [["app-clockout"]], decls: 2, vars: 0, template: function ClockoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clockout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb2Nrb3V0L2Nsb2Nrb3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clockout',
                templateUrl: './clockout.component.html',
                styleUrls: ['./clockout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RTsG":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "JYil");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");



 // Import HttpHeaders and HttpErrorResponse
 // Import the environment







function SalesComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", customer_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r15.customerName);
} }
function SalesComponent_mat_progress_bar_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 61);
} }
function SalesComponent_div_31_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_31_div_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const mod_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.productselect(mod_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r16.apiUrl + "uploads/" + mod_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mod_r17.name);
} }
function SalesComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_31_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clearsearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SalesComponent_div_31_div_6_Template, 5, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.search);
} }
function SalesComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_33_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const cat_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onCategorySelect(cat_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r22.name, " ");
} }
function SalesComponent_div_37_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_37_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const mod_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.productselect(mod_r27.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r27 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r25.apiUrl + "uploads/" + mod_r27.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mod_r27.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mod_r27.price);
} }
function SalesComponent_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_37_div_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.addphone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buy Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SalesComponent_div_37_div_4_Template, 7, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SalesComponent_div_37_div_5_Template, 5, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.categoryname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.categoryname == "Phone");
} }
function SalesComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_38_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.repaircheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Payout Repair");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_38_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addrepair(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Products Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_58_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.updatecart("dec", cart_r35.id, cart_r35.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_58_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.updatecart("inc", cart_r35.id, cart_r35.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_58_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.openEditPriceModal(cart_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_58_Template_i_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.updatecart("del", cart_r35.id, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cart_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r36 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cart_r35.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", cart_r35.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cart_r35.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 5, cart_r35.quantity * cart_r35.price, "1.2-2"));
} }
function SalesComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_93_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.close("general"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_93_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.submitGeneralForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.generalForm);
} }
function SalesComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_94_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.close("lookup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_94_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.submitlookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.lookup);
} }
function SalesComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_95_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.close("user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_95_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.submitUserForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.userForm);
} }
function SalesComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_96_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.close("service"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_96_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.submitServiceForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Service Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r11.addServiceForm);
} }
function SalesComponent_div_97_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 120);
} }
function SalesComponent_div_97_select_13_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phone_r63.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phone_r63.phone);
} }
function SalesComponent_div_97_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesComponent_div_97_select_13_option_1_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.availablephone);
} }
function SalesComponent_div_97_input_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 122);
} }
function SalesComponent_div_97_select_19_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phone_r65.imei);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", phone_r65.phone, " - ", phone_r65.imei, "");
} }
function SalesComponent_div_97_select_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesComponent_div_97_select_19_option_1_Template, 2, 3, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r57.availablephone);
} }
function SalesComponent_div_97_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOCUMENT TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Document Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PASSPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_97_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOCUMENT NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_97_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_97_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Final Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_97_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.close("phone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_97_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.submitPhoneForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SalesComponent_div_97_input_12_Template, 1, 0, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SalesComponent_div_97_select_13_Template, 2, 1, "select", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone IMEI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SalesComponent_div_97_input_18_Template, 1, 0, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SalesComponent_div_97_select_19_Template, 2, 1, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SalesComponent_div_97_div_20_Template, 11, 0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SalesComponent_div_97_div_21_Template, 5, 0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SalesComponent_div_97_Template_input_input_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.updateTaxAndTotal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SalesComponent_div_97_div_27_Template, 5, 0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SalesComponent_div_97_div_28_Template, 5, 0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_97_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.selectphonePaymentMethod("Cash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r12.phoneForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r12.phone_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r12.customerid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r12.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phone_type == "sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r12.selectedphonePaymentMethod === "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.classresponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r12.phoneresponse, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SalesComponent_div_98_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Due: $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.changeamount.toFixed(2));
} }
function SalesComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.close("manual"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_98_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.submitManualForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amount Left : $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SalesComponent_div_98_label_14_Template, 4, 1, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.updateAmount("manual", 7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.updateAmount("manual", 8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.updateAmount("manual", 9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.updateAmount("manual", "C"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.updateAmount("manual", 4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.updateAmount("manual", 5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.updateAmount("manual", 6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.updateAmount("manual", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.updateAmount("manual", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.updateAmount("manual", 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.updateAmount("manual", 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.updateAmount("manual", "AC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.updateAmount("manual", "."); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.updateAmount("manual", ctx_r88.xtotal.toFixed(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "textarea", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_div_98_Template_textarea_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.ordersnotes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.selectPaymentMethod("Credit/Debit Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.selectPaymentMethod("Cash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.selectPaymentMethod("Gift Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.selectPaymentMethod("Points Redeem"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Points Redeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.selectPaymentMethod("Pay Later"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pay Later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r13.manualForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.xtotal.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.changeamount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.xtotal.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.ordersnotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Points Redeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Pay Later");
} }
function SalesComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.close("cart"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_99_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.submitCartForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.updateAmount("cart", 7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.updateAmount("cart", 8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.updateAmount("cart", 9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.updateAmount("cart", "C"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.updateAmount("cart", 4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.updateAmount("cart", 5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.updateAmount("cart", 6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.updateAmount("cart", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.updateAmount("cart", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.updateAmount("cart", 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.updateAmount("cart", 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.updateAmount("cart", "AC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.updateAmount("cart", "."); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.submitCartForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r14.cartForm);
} }
// Define the Category type
class SalesComponent {
    constructor(dialog, http, router, fb) {
        this.dialog = dialog;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.availablepoints = 0.00;
        this.phoneresponse = '';
        this.loader = false;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.usernamex = localStorage.getItem('username');
        this.repairview = false;
        this.payments = [];
        this.phonepayments = [];
        this.xdiscount = 0.00;
        this.userid = localStorage.getItem('userid');
        this.customerid = 0;
        this.searchsview = false;
        this.xsubtotal = 0.00;
        this.xhst = 0.00;
        this.classresponse = ''; // Initialize it as an empty string
        this.ordernumber = '';
        this.xtotal = 0.00;
        this.categoryname = 'Tempered Glass';
        this.productsview = true;
        this.generalview = false;
        this.phoneview = false;
        this.phoneaddview = false;
        this.manualview = false;
        this.cartview = false;
        this.userview = false;
        this.serviceview = false;
        this.phone_type = '';
        this.lookupview = false;
        this.changeamount = 0.00;
        this.selectedPaymentMethod = '';
        this.selectedphonePaymentMethod = '';
        this.searchTerm = ''; // Holds the search term
        this.filteredCustomers = []; // Holds the filtered customers
        this.searchProductText = '';
        this.phonetype = '';
        this.phonetax = 0.00;
        this.ordersnotes = '';
        this.myfooter = '';
    }
    ngOnInit() {
        this.loader = true;
        this.updateTime();
        this.checkauth();
        this.fetchCategoriesAndProducts();
        this.getcustomers();
        this.initializeForm();
        this.getsettings();
        this.getavailablephones();
        setTimeout(() => {
            this.loader = false; // Hide the loader
        }, 500);
    }
    getavailablephones() {
        this.http.get(`${this.apiUrl}get-available-phones`).subscribe((data) => {
            // Load general settings data from the server response
            this.availablephone = data;
        });
    }
    syncupdate() {
        this.http.get(`${this.apiUrl}updateordersync`).subscribe();
        setTimeout(() => {
            this.loader = false; // Hide the loader
        }, 500);
    }
    updateserver() {
        this.http.get(`${this.apiUrl}updateserverx`).subscribe((data) => {
            // Add your authentication token here
            const authToken = this.settings.storenumber + ',' + this.settings.storename;
            // Define the headers for your HTTP requests
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': authToken // No need for 'Bearer' prefix
            });
            console.log(headers);
            if (data !== '') {
                this.http.post('https://book.yusyah.com/updateserver.php', data, { headers }).subscribe((response) => {
                    if (response.error === false) {
                        this.syncupdate();
                    }
                });
            }
            // Load general settings data from the server response
        });
    }
    getsettings() {
        this.http.get(`${this.apiUrl}get-general-settings`).subscribe((data) => {
            // Load general settings data from the server response
            this.settings = data;
        });
    }
    initializeForm() {
        this.userForm = this.fb.group({
            cname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            cdate: [''],
            cstreet: [''],
            ccity: ['']
        });
        this.generalForm = this.fb.group({
            finalprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]]
        });
        this.addServiceForm = this.fb.group({
            product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.lookup = this.fb.group({
            ordernumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.phoneForm = this.fb.group({
            phone_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_type: [this.phone_type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_imei: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_dt: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_dn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_customer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone_notes: [''],
            phone_total: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonetax: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonemethod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    //sound start
    playClickSound() {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            //    clickSound.play();
        }
    }
    playErrorSound() {
        const errorSound = document.getElementById('errorSound');
        if (errorSound) {
            // errorSound.play();
        }
    }
    playSuccessSound() {
        const successSound = document.getElementById('successSound');
        if (successSound) {
            //   successSound.play();
        }
    }
    getotalvalue() {
        this.manualForm = this.fb.group({
            amount: [this.xtotal.toFixed(2), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            modeofpayment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    //sound end 
    //price change
    openEditPriceModal(product) {
        this.cartview = true;
        this.cartForm = this.fb.group({
            cprice: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cid: [product.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        console.log(product);
    }
    submitCartForm() {
        if (this.cartForm.valid) {
            this.loader = true;
            const formData = this.cartForm.value;
            const data = {
                userid: this.userid,
                newprice: formData.cprice,
                cartid: formData.cid
            };
            this.http.post(this.apiUrl + 'updateprice', data).subscribe((response) => {
                if (response.error === false) {
                    // Handle success
                    this.playSuccessSound();
                    this.cartview = false;
                    this.carts = response.mydata;
                    // Assuming newupdatedata is an array of products
                    this.xsubtotal = this.carts.reduce((subtotal, cartItem) => subtotal + (parseFloat(cartItem.price) * parseInt(cartItem.quantity)), 0);
                    this.xhst = parseFloat((this.xsubtotal * 0.13).toFixed(2)); // Assuming HST is 13%, adjust as needed
                    this.xtotal = parseFloat((this.xsubtotal + this.xhst).toFixed(2));
                    this.getotalvalue();
                    setTimeout(() => {
                        this.loader = false; // Hide the loader
                    }, 500);
                }
                else {
                    // Handle error
                    console.log('Error:', response.error);
                }
            }, (error) => {
                // Handle HTTP error
                console.error('HTTP Error:', error);
            });
        }
    }
    //end price change
    //phone 
    phoneselect() {
        this.productsview = false;
        this.repairview = false;
        this.phoneview = true;
    }
    sellphone() {
        this.phoneaddview = true;
        this.phone_type = 'sell'; // Use "=" for assignment
    }
    addphone() {
        this.phoneaddview = true;
        this.phone_type = 'buy'; // Use "=" for assignment
    }
    selectphonePaymentMethod(paymentMethod) {
        this.selectedphonePaymentMethod = paymentMethod;
        this.phoneForm.patchValue({ phonemethod: paymentMethod });
    }
    submitPhoneForm() {
        let total = 0.00;
        this.loader = true;
        this.classresponse = 'phoneerror';
        // Get the form values
        const formData = this.phoneForm.value;
        console.log(formData.phone_total);
        if (formData.phone_notes == "") {
            formData.phone_notes = 'NA';
        }
        formData.phone_type = this.phone_type;
        formData.phone_customer = this.customerid;
        formData.phone_userid = this.userid;
        if (this.customerid == 0 && this.phone_type == 'buy') {
            formData.phone_customer = '';
            this.phoneresponse = 'Please Select Customer';
        }
        if (formData.phone_dt == 0 && this.phone_type == 'buy') {
            formData.phone_dt = '';
            this.phoneresponse += "<br>" + 'Please Select Document Type';
        }
        // Initialize an array to store the names of empty fields
        const emptyFields = [];
        // Check if any value is empty and store the names of empty fields
        Object.entries(formData).forEach(([key, value]) => {
            if (value === '') {
                emptyFields.push(key);
            }
        });
        if (emptyFields.length > 0 && this.phone_type == 'buy') {
            // Build a message with the names of empty fields
            const emptyFieldsMessage = `Please fill in the following fields: ${emptyFields.join(', ')}`;
            this.phoneresponse += "<br>" + emptyFieldsMessage;
        }
        else {
            let paymentdata = {
                amount: formData.phone_total,
                modeofpayment: formData.phonemethod
            };
            this.phonepayments.push(paymentdata);
            for (const payment of this.phonepayments) {
                total += payment.amount;
            }
            let currenttotal = formData.phone_price + formData.phonetax;
            if (total >= currenttotal) {
                const data = {
                    phone_name: formData.phone_name,
                    phone_type: formData.phone_type,
                    phone_imei: formData.phone_imei,
                    phone_dt: formData.phone_dt,
                    phone_dn: formData.phone_dn,
                    phone_price: formData.phone_price,
                    phone_customer: formData.phone_customer,
                    phone_userid: formData.phone_userid,
                    phone_notes: formData.phone_notes,
                    phone_total: formData.phone_total,
                    phonetax: formData.phonetax,
                    phonemethod: JSON.stringify(this.phonepayments),
                };
                this.http.post(this.apiUrl + 'addphone', data).subscribe((response) => {
                    if (response.error === false) {
                        this.classresponse = 'phonesuccess';
                        this.phoneresponse = 'Form submitted successfully';
                        this.playSuccessSound();
                        this.printReceipt(response.receipt, response.type);
                        // Perform your form submission logic here
                        console.log('Form submitted successfully');
                        this.initializeForm();
                        this.updateserver();
                        setTimeout(() => {
                            this.loader = false; // Hide the loader
                        }, 500);
                    }
                    else {
                        // Handle error
                        console.log('Error:', response.error);
                    }
                }, (error) => {
                    // Handle HTTP error
                    console.error('HTTP Error:', error);
                });
            }
            else {
                this.classresponse = '';
                this.phoneresponse = '';
                let phone_total = currenttotal - total;
                this.phoneForm.patchValue({ phone_total });
            }
            // If all fields are filled, proceed with form submission
        }
    }
    calculatePhoneTaxAndTotal(price, phone_type) {
        let phonetax = 0;
        let phone_total = price;
        if (phone_type === 'sell') {
            // Calculate tax as 13% of the price
            const taxRate = 0.13; // 13%
            phonetax = price * taxRate;
            phone_total += phonetax;
        }
        this.phoneForm.patchValue({ phonetax, phone_total });
    }
    updateTaxAndTotal() {
        const phone_type = this.phone_type;
        const phone_price = this.phoneForm.get('phone_price').value;
        // Call the calculatePhoneTaxAndTotal function
        this.calculatePhoneTaxAndTotal(phone_price, phone_type);
    }
    //end phone
    //lookup
    repaircheckout() {
        this.lookupview = true;
    }
    submitlookup() {
        if (this.lookup.valid) {
            this.loader = true;
            const formData = this.lookup.value;
            const data = {
                ordernumber: formData.ordernumber
            };
            this.http.post(this.apiUrl + 'lookup', data).subscribe((response) => {
                if (response.error === false) {
                    // Handle success
                    this.playSuccessSound();
                    this.cartview = false;
                    this.carts = response.mydata;
                    // Assuming newupdatedata is an array of products
                    this.xsubtotal = this.carts.reduce((subtotal, cartItem) => subtotal + (parseFloat(cartItem.price) * parseInt(cartItem.quantity)), 0);
                    this.xhst = parseFloat((this.xsubtotal * 0.13).toFixed(2)); // Assuming HST is 13%, adjust as needed
                    this.xtotal = parseFloat(this.carts[0].due);
                    this.ordernumber = this.carts[0].order_number;
                    console.log(this.ordernumber);
                    this.getotalvalue();
                    this.lookupview = false;
                    setTimeout(() => {
                        this.loader = false; // Hide the loader
                    }, 500);
                }
                else {
                    // Handle error
                    console.log('Error:', response.error);
                }
            }, (error) => {
                // Handle HTTP error
                console.error('HTTP Error:', error);
            });
        }
    }
    //end lookup
    //customers
    getcustomers() {
        this.http.get(this.apiUrl + 'getcustomers').subscribe((response) => {
            // Handle the response from the server
            if (response.error === false) {
                this.customers = response.customers;
                this.filteredCustomers = this.customers;
                console.log(this.filteredCustomers);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            // Handle any errors
            console.error('Error during login:', error);
        });
    }
    // Function to filter customers based on the search term
    filterCustomers() {
        if (this.searchTerm) {
            this.filteredCustomers = this.customers.filter(customer => customer.customerName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                customer.phone.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        else {
            // When the searchTerm is empty, display all customers
            this.filteredCustomers = this.customers;
        }
    }
    // Call the filterCustomers function whenever the search term changes
    onSearchTermChange() {
        this.filterCustomers();
    }
    onOptionSelect(event) {
        this.playClickSound();
        const selectedCustomerId = event.target.value;
        // Find the selected customer from this.customers array
        const selectedCustomer = this.customers.find(customer => customer.id === selectedCustomerId);
        if (selectedCustomerId !== '0') {
            if (selectedCustomer) {
                this.availablepoints = selectedCustomer.points;
            }
            console.log('Selected Customer ID:', selectedCustomerId);
            this.customerid = selectedCustomerId;
        }
        console.log(this.availablepoints);
    }
    //end customers
    //general form
    generalSelect() {
        this.generalview = true;
    }
    submitGeneralForm() {
        if (this.generalForm.valid) {
            const formData = this.generalForm.value;
            var oldtotal = this.xtotal;
            var totalnew = formData.finalprice.toFixed(2);
            this.xtotal = parseFloat(totalnew);
            const taxRate = 0.13; // 13% tax rate
            this.xsubtotal = this.xtotal / (1 + taxRate);
            this.xhst = this.xtotal - this.xsubtotal;
            //  this.xdiscount = oldtotal - totalnew;
            this.xdiscount = 0.00;
            this.generalview = false;
            this.manualForm = this.fb.group({
                amount: [this.xtotal.toFixed(2), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                modeofpayment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    }
    //end general form
    //service section
    repairselect() {
        this.productsview = false;
        this.repairview = true;
        this.phoneview = false;
    }
    addrepair() {
        this.serviceview = true;
    }
    submitServiceForm() {
        if (this.addServiceForm.valid) {
            this.loader = true;
            const formData = this.addServiceForm.value;
            const name = formData.product_name;
            const price = formData.product_price;
            const type = "product";
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json' // Adjust the content type as needed
            });
            const data = {
                type: type,
                userid: this.userid,
                id: 0,
                name: name,
                price: price
            };
            this.http.post(this.apiUrl + 'getdata', data, { headers }).subscribe((response) => {
                // Handle the response from the server
                if (response.error === false) {
                    //this.router.navigate(['']);
                    this.carts = response.mydata;
                    console.log(this.carts);
                    // Calculate subtotal, HST, and total
                    this.xsubtotal = this.carts.reduce((subtotal, cartItem) => subtotal + (parseFloat(cartItem.price) * parseInt(cartItem.quantity)), 0);
                    this.xhst = parseFloat((this.xsubtotal * 0.13).toFixed(2)); // Assuming HST is 13%, adjust as needed
                    this.xtotal = parseFloat((this.xsubtotal + this.xhst).toFixed(2));
                    this.getotalvalue();
                    this.serviceview = false;
                    setTimeout(() => {
                        this.loader = false; // Hide the loader
                    }, 500);
                }
                else {
                }
            }, (error) => {
                // Handle any errors
                console.error('Error during login:', error);
            });
        }
    }
    //service end section
    //user section
    userSelect() {
        this.userview = true;
    }
    submitUserForm() {
        this.loader = true;
        if (this.userForm.valid) {
            const formData = this.userForm.value;
            const data = {
                customerName: formData.cname,
                street: formData.cstreet,
                city: formData.ccity,
                dob: formData.cdate,
                email: formData.cemail,
                phone: formData.cphone
            };
            this.http.post(this.apiUrl + 'addcustomer', data).subscribe((response) => {
                if (response.error === false) {
                    // Handle success
                    this.playSuccessSound();
                    this.userview = false;
                    this.getcustomers();
                    setTimeout(() => {
                        this.loader = false; // Hide the loader
                    }, 500);
                }
                else {
                    // Handle error
                    console.log('Error:', response.error);
                }
            }, (error) => {
                // Handle HTTP error
                console.error('HTTP Error:', error);
            });
        }
    }
    //end user section
    //search
    onSearch(event) {
        const searchText = event.target.value;
        if (searchText.trim() === '') {
            // Handle empty search
            this.search = [];
            return;
        }
        this.loader = true;
        // Call your API with the search text
        this.http.get(`${this.apiUrl}products/search?searchTerm=${searchText}`).subscribe((response) => {
            this.searchsview = true;
            this.search = response;
            console.log(this.search);
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        }, (error) => {
            console.error('Error:', error);
        });
    }
    clearsearch() {
        this.search = [];
        this.searchProductText = '';
    }
    //end search
    // checkout
    manualSelect() {
        if (this.xtotal > 0) {
            this.manualview = true;
        }
    }
    selectPaymentMethod(paymentMethod) {
        if (paymentMethod === "Points Redeem") {
            const formData = this.manualForm.value;
            const amount = parseFloat(formData.amount);
            if (this.availablepoints >= amount) {
                this.selectedPaymentMethod = paymentMethod;
                this.manualForm.patchValue({ modeofpayment: paymentMethod });
            }
        }
        else {
            this.selectedPaymentMethod = paymentMethod;
            this.manualForm.patchValue({ modeofpayment: paymentMethod });
        }
        this.submitManualForm();
    }
    submitManualForm() {
        this.loader = true;
        if (this.manualForm.valid) {
            const formData = this.manualForm.value;
            console.log("check:" + this.xtotal);
            this.dmount = parseFloat(formData.amount).toFixed(2);
            const tamount = (this.xsubtotal + this.xhst).toFixed(2);
            if (this.dmount <= 0 || isNaN(this.dmount)) {
                // Amount entered is not valid, handle this as needed
                return;
            }
            if (this.dmount > this.xtotal) {
                // Amount entered is greater than the remaining total, set it to the total
                this.changeamount = parseFloat((formData.amount - this.xtotal).toFixed(2));
                formData.amount = this.xtotal.toFixed(2);
            }
            // Subtract the entered amount from the total
            this.dmount = parseFloat(this.dmount).toFixed(2);
            this.xtotal = parseFloat(this.xtotal.toFixed(2)); // Round to 2 decimal places
            this.xtotal -= parseFloat(this.dmount);
            // Add the payment data to the payments array
            this.payments.push(formData);
            // Update the displayed total and amount left
            this.manualForm.reset();
            // Log the payments array (you can use it as needed)
            console.log(this.ordernumber);
            if (this.xtotal <= 0.00) {
                const finaltotalx = (parseFloat(tamount) - this.xdiscount).toFixed(2);
                //  Update other variables as needed
                // const finaltotalx = (parseFloat(tamount)).toFixed(2);
                const data = {
                    userid: this.userid,
                    finaltotal: finaltotalx,
                    finalsub: this.xsubtotal,
                    finalhst: this.xhst,
                    finaldiscount: this.xdiscount,
                    customerid: this.customerid,
                    payments: JSON.stringify(this.payments),
                    ordernumber: this.ordernumber,
                    changeamount: this.changeamount,
                    notes: this.ordersnotes
                };
                this.http.post(this.apiUrl + 'manualcheckout', data).subscribe((response) => {
                    if (response.error === false) {
                        // Handle success
                        console.log('Order Checked out Successfully');
                        this.playSuccessSound();
                        this.printReceipt(response.receipt, response.type);
                        this.updateserver();
                        // window.location.reload();
                    }
                    else {
                        // Handle error
                        console.log('Error:', response.error);
                    }
                }, (error) => {
                    // Handle HTTP error
                    console.error('HTTP Error:', error);
                });
            }
        }
    }
    discountupdate() {
        this.xtotal = this.xtotal - this.xdiscount;
    }
    resetphoneState() {
        this.initializeForm();
        this.phonepayments = [];
        this.selectedphonePaymentMethod = '';
        this.customerid = 0;
        this.ordernumber = '';
    }
    resetState() {
        // Reset relevant variables to their initial values
        if (this.changeamount > 0.00) {
            this.manualview = true;
        }
        else {
            this.manualview = false;
            this.changeamount = 0.00;
        }
        this.generalview = false;
        this.cartview = false;
        this.userview = false;
        this.serviceview = false;
        this.lookupview = false;
        this.selectedPaymentMethod = '';
        // Reset your form controls to their initial state
        this.manualForm.reset({
            amount: 0.00,
            modeofpayment: '',
        });
        this.generalForm.reset({
            finalprice: '',
        });
        // Clear the payments array
        this.payments = [];
        // Clear other variables as needed
        this.xdiscount = 0.00;
        this.customerid = 0;
        this.ordernumber = '';
        this.xtotal = 0.00;
        this.xsubtotal = 0.00;
        this.xdiscount = 0.00;
        this.xhst = 0.00;
        this.carts = [];
    }
    printHtml(receiptHtml) {
        const dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            data: 'Print Receipt?',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const url = 'http://127.0.0.1:5000/print_html';
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                const body = { htmlContent: receiptHtml, printername: this.settings.printername };
                this.http.post(url, body, { headers, observe: 'response' }).subscribe((response) => {
                    if (response.status === 200) {
                        console.log('Print request sent successfully.');
                    }
                    else {
                        console.error('Failed to send print request.');
                    }
                }, (error) => {
                    console.error('Error while sending print request:', error);
                });
            }
            else {
                // User clicked "No" or closed the dialog
            }
        });
    }
    printReceipt(receiptData, type) {
        this.manualview = true;
        if (type == "Product") {
            this.myfooter = this.settings.salefooter;
        }
        if (type == "Service") {
            this.myfooter = this.settings.repairfooter;
        }
        if (type == "Phone") {
            this.myfooter = this.settings.phonefooter;
        }
        // Construct the receipt HTML template using the provided receiptData
        const productsHtml = receiptData.items.map((item) => `
      <tr>
        <td>${item.quantity}</td>
        <td>${item.product_name}</td>
        <td>${item.unit_price}</td>
        <td></td>
        <td>${item.line_total}</td>
      </tr>`).join('');
        const receiptHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt</title>
        <style type="text/css" media="print">
          @page {
            size: 72mm;
            margin: 0;
            height: max-content;
          }
          table {
            width: 100%;
          }
          table tr td {
            text-align: center;
          
          }
          .table-header tr {
           border:5px solid black;
           }
          hr{
            line-height:2px;
          }
        </style>
      </head>
      <body>
        <h2>${receiptData.order_id}</h2>
        <p>${this.settings.storename}</p>
        <p>${this.settings.address} • ${this.settings.city} • ${this.settings.state} • ${this.settings.postalcode}</p>
        <p>${this.settings.phone}</p>
        <table class="table">
          <thead class="table-header">
            <tr>
              <th>QTY</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>DISC.</th>
              <th>TOT</th>
            </tr>
          </thead>
          <tbody>
            ${productsHtml}
          </tbody>
        </table>
        <hr><hr>
        <table>
          <tbody>
            <tr>
              <td>${receiptData.order_date}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>SUB-TOT:</b></td>
              <td>${receiptData.subtotal_amount}</td>
            </tr>
            <tr>
              <td><b>REMARK :</b></td>
              <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td><b>HST:</b></td>
              <td>${receiptData.tax_amount}</td>
            </tr>
            <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td></td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td><b>TOTAL :</b></td>
            <td>${receiptData.total_amount}</td>
          </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>TOTAL DUE :</b></td>
              <td>${receiptData.due_amount}</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>CASH :</b></td>
              <td>${receiptData.cash_payment}</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>Debit :</b></td>
              <td>${receiptData.card_payment}</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>CHANGE :</b></td>
              <td>${receiptData.change_amount}</td>
            </tr>
          </tbody>
        </table>
        <hr><hr>
        <table>
          <tr><p>${receiptData.order_status}</p></tr>
          <tr><p>${this.myfooter}</p></tr>
        </table>
      </body>
      </html>
    `;
        // Open a new window for printing
        // this.printHtml(receiptHtml);
        if (this.phoneaddview === true) {
            this.resetphoneState();
        }
        else {
            this.resetState();
        }
    }
    // checkout end
    reset() {
        this.loader = true;
        this.http.post(this.apiUrl + 'clearcart', { userid: this.userid }).subscribe((response) => {
            this.playSuccessSound();
            window.location.reload();
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        }, (error) => {
            // Handle error here
            console.error('An error occurred while making the request:', error);
        });
    }
    //select product
    productselect(product) {
        this.loader = true;
        this.playClickSound();
        var type = 'product'; // Remove numbers from the end
        const userid = localStorage.getItem('userid');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json' // Adjust the content type as needed
        });
        const data = {
            type: type,
            userid: userid,
            id: product
        };
        // Make the HTTP POST request
        this.http.post(this.apiUrl + 'getdata', data, { headers }).subscribe((response) => {
            // Handle the response from the server
            if (response.error === false) {
                //this.router.navigate(['']);
                this.carts = response.mydata;
                console.log(this.carts);
                // Calculate subtotal, HST, and total
                this.xsubtotal = this.carts.reduce((subtotal, cartItem) => subtotal + (parseFloat(cartItem.price) * parseInt(cartItem.quantity)), 0);
                this.xhst = parseFloat((this.xsubtotal * 0.13).toFixed(2)); // Assuming HST is 13%, adjust as needed
                this.xtotal = parseFloat((this.xsubtotal + this.xhst).toFixed(2));
                this.getotalvalue();
                setTimeout(() => {
                    this.loader = false; // Hide the loader
                }, 500);
            }
            else {
            }
        }, (error) => {
            // Handle any errors
            console.error('Error during login:', error);
        });
    }
    //end select product
    //updatecart
    updatecart(action, pid, currentQuantity) {
        this.loader = true;
        this.playClickSound();
        // Play the click sound
        if (action === 'inc') {
            currentQuantity++;
        }
        else if (action === 'dec' && currentQuantity >= 0) { // Ensure quantity doesn't go negative
            currentQuantity--;
        }
        const userid = localStorage.getItem('userid');
        if (action === 'del') {
            currentQuantity = 0;
        }
        // Send the updated quantity to the server using HttpClient
        this.http.post(this.apiUrl + 'updatecart', {
            pid: pid,
            quantity: currentQuantity,
            userid: userid
        }).subscribe((response) => {
            this.carts = response.mydata;
            // Assuming newupdatedata is an array of products
            this.xsubtotal = this.carts.reduce((subtotal, cartItem) => subtotal + (parseFloat(cartItem.price) * parseInt(cartItem.quantity)), 0);
            this.xhst = parseFloat((this.xsubtotal * 0.13).toFixed(2)); // Assuming HST is 13%, adjust as needed
            this.xtotal = parseFloat((this.xsubtotal + this.xhst).toFixed(2));
            this.getotalvalue();
            setTimeout(() => {
                this.loader = false; // Hide the loader
            }, 500);
        }, (error) => {
            // Handle error
        });
    }
    //end update cart
    //default view
    onCategorySelect(category) {
        this.repairview = false;
        this.phoneview = false;
        this.productsview = true;
        this.selectedCategory = category;
        this.categoryname = category.name;
        // Filter products by the selected category
        this.products = this.allProducts.filter(product => product.category_id === category.id);
    }
    fetchCategoriesAndProducts() {
        this.playClickSound();
        this.http.get(`${this.apiUrl}categories-and-products?userid=${this.userid}`).subscribe((response) => {
            if (response.error === false) {
                // Assign categories directly
                this.categories = response.data.categories;
                // Assign products directl
                this.allProducts = response.data.products; // Keep a reference to all products
                // Select the first category by default
                if (this.categories.length > 0) {
                    this.selectedCategory = this.categories[0];
                    this.onCategorySelect(this.selectedCategory);
                    this.categoryname = this.selectedCategory.name;
                }
                // Handle carts and other data as needed
                this.carts = response.carts;
                if (this.carts.length > 0) {
                    this.xsubtotal = this.carts.reduce((subtotal, cartItem) => subtotal + (parseFloat(cartItem.price) * parseInt(cartItem.quantity)), 0);
                    this.xhst = parseFloat((this.xsubtotal * 0.13).toFixed(2)); // Assuming HST is 13%, adjust as needed
                    this.xtotal = parseFloat((this.xsubtotal + this.xhst).toFixed(2));
                    this.getotalvalue();
                }
                // Handle your data as needed, e.g., calculating totals, etc.
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error fetching categories and products:', error);
        });
    }
    //end default view
    //keypad
    updateAmount(action, value) {
        let currentAmount;
        if (action === 'manual') {
            currentAmount = this.manualForm.get('amount').value || ''; // Get the current amount or default to '0.00'
        }
        else if (action === 'cart') {
            currentAmount = this.cartForm.get('cprice').value || ''; // Get the current amount or default to '0.00'
        }
        if (value === 'C') {
            // Clear the amount field
            currentAmount = '';
        }
        else if (value === 'AC') {
            // Clear the amount field and reset to xtotal
            currentAmount = this.xtotal.toFixed(2);
        }
        else if (value === '.') {
            // Append a decimal point to the current amount if it doesn't already contain one
            if (typeof currentAmount === 'string' && !currentAmount.includes('.')) {
                currentAmount += '.';
            }
        }
        else {
            // Append the clicked value to the current amount
            currentAmount += value.toString();
        }
        if (action === 'manual') {
            // Update the amount field in the manualForm
            this.manualForm.get('amount').setValue(currentAmount);
        }
        else if (action === 'cart') {
            // Update the amount field in the cartForm
            this.cartForm.get('cprice').setValue(currentAmount);
        }
    }
    //end keypad
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json' // Adjust the content type as needed
            });
            // Make the HTTP POST request
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                // Handle the response from the server
                if (response.error === false) {
                    //this.router.navigate(['']);
                    if (response.clockin === false) {
                        this.router.navigate(['clockin']);
                    }
                }
                else {
                    this.router.navigate(['']);
                }
            }, (error) => {
                // Handle any errors
                console.error('Error during login:', error);
            });
        }
        else {
            this.router.navigate(['']);
        }
    }
    close(action) {
        if (action == 'user') {
            this.userview = false;
        }
        if (action == 'manual') {
            this.manualview = false;
            this.changeamount = 0.00;
        }
        if (action == 'general') {
            this.generalview = false;
        }
        if (action == 'cart') {
            this.cartview = false;
        }
        if (action == 'service') {
            this.serviceview = false;
        }
        if (action == 'lookup') {
            this.lookupview = false;
        }
        if (action == 'phone') {
            this.phoneaddview = false;
        }
    }
    updateTime() {
        const now = new Date();
        this.currentDate = now.toLocaleDateString();
        this.currentTime = now.toLocaleTimeString();
        // Use a timer if you want to update the date and time continuously.
        /*
        setInterval(() => {
          this.updateTime();
        }, 60000); */
    }
}
SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], decls: 100, vars: 25, consts: [[1, "video-bg"], ["width", "320", "height", "240", "autoplay", "", "loop", "", "muted", ""], ["src", "https://assets.codepen.io/3364143/7btrrd.mp4", "type", "video/mp4"], [1, "appx"], [1, "headerx"], ["href", "home", 1, "backtohome"], [1, "fa", "fa-arrow-left"], [1, "search-bar"], ["type", "text", "placeholder", "Scan / Search Product By Code Name", 3, "ngModel", "ngModelChange", "input"], [1, "projects-section-header", "add-user", "textbox"], [1, "select_component"], ["id", "openuseradd", 1, "btn", "imageadduser", 3, "click"], [1, "fa", "fa-user-plus"], ["type", "text", "placeholder", "Search by Customer Name or Phone", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["name", "option", "id", "option", 1, "form-control", 3, "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "header-profile"], [1, "datetime"], [1, "username"], [1, "date"], [1, "time"], ["mode", "indeterminate", "color", "warn", 4, "ngIf"], [1, "wrapper"], [1, "main-container"], [1, "content-wrapper"], ["class", "", 4, "ngIf"], [1, "apps-card", "newcatsection"], ["class", "app-card", 4, "ngFor", "ngForOf"], [1, "app-card", 3, "click"], ["class", "content-section", 4, "ngIf"], [1, "left-side"], [1, "side-wrapper"], ["id", "invoice-table", 1, "table-striped", 2, "width", "100%"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "footer_panel"], ["id", "", 1, "text-center"], ["type", "number", "disabled", "", "id", "putsubtotal", 1, "form-control", 3, "value"], ["type", "number", "disabled", "", "id", "puthst", 1, "form-control", 3, "value"], [1, "oneline"], ["type", "number", "id", "putdiscount", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-refresh", 3, "click"], [1, "row"], [1, "col-md-12"], [1, "grandtotal"], ["id", "totalpayable"], [1, "col-sm-12", "col-md-4"], ["type", "button", "id", "reset", 1, "btn", "btn-danger", "ripple", "btn-rounded", "btn-block", "mt-1", 3, "click"], [1, "i-Power-2"], ["type", "button", "id", "general", 1, "btn", "btn-black", "ripple", "btn-rounded", "btn-block", "mt-1", 3, "click"], ["type", "button", "id", "manual", 1, "btn", "btn-primary", "ripple", "btn-rounded", "btn-block", "mt-1", 3, "click"], [1, "overlay-app"], ["class", "popup", "id", "generalform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "lookupform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "userform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "serviceform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "phoneform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "manualform", "role", "alert", 4, "ngIf"], [3, "value"], ["mode", "indeterminate", "color", "warn"], [1, ""], [1, "content-section-title"], [1, "iconleft", "mg10", 3, "click"], [1, "fa", "fa-times"], [1, "apps-card"], [1, "app-card"], [3, "click"], ["width", "100px", "height", "100px", 1, "text-center", 3, "src"], [1, "content-section"], ["class", "app-card", 4, "ngIf"], [1, "proimage", 3, "src"], [1, "pricetag"], ["src", "/assets/images/products/buy-phone.png", 1, "proimage"], ["src", "/assets/images/products/checkout.png", 1, "proimage"], ["src", "/assets/images/products/add-service.png", 1, "proimage"], [1, "qty-input"], ["data-action", "minus", "type", "button", 1, "qty-count", "qty-count--minus", 3, "click"], ["type", "number", "name", "product-qty", "min", "0", "max", "10", 1, "product-qty", 3, "value"], ["data-action", "add", "type", "buottn", 1, "qty-count", "qty-count--add", 3, "click"], [1, "fa", "fa-pencil", 3, "click"], [1, "fa", "fa-close", "text-danger", 3, "click"], ["id", "generalform", "role", "alert", 1, "popup"], [1, "popup-container"], [1, "popup-close", "img-replace", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "text-left"], [1, "form-group"], ["formControlName", "finalprice", "id", "finalprice", "type", "number", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "lookupform", "role", "alert", 1, "popup"], ["formControlName", "ordernumber", "id", "ordernumber", "type", "number", 1, "form-control"], ["id", "userform", "role", "alert", 1, "popup"], ["id", "userclose", 1, "popup-close", "img-replace", 3, "click"], ["formControlName", "cname", "type", "text", 1, "form-control"], ["formControlName", "cphone", "id", "cphone", "type", "tel", 1, "form-control"], ["formControlName", "cemail", "id", "cemail", "type", "email", 1, "form-control"], ["formControlName", "cdate", "id", "cdate", "type", "date", 1, "form-control"], ["formControlName", "cstreet", "id", "cstreet", "type", "text", 1, "form-control"], ["formControlName", "ccity", "id", "ccity", "type", "text", 1, "form-control"], ["id", "serviceform", "role", "alert", 1, "popup"], ["id", "serviceclose", 1, "popup-close", "img-replace", 3, "click"], ["formControlName", "product_name", "type", "text", 1, "form-control"], ["formControlName", "product_price", "type", "number", 1, "form-control"], ["id", "phoneform", "role", "alert", 1, "popup"], ["id", "phoneclose", 1, "popup-close", "img-replace", 3, "click"], [1, "row", 3, "formGroup", "ngSubmit"], ["formControlName", "phone_type", "type", "hidden", 1, "form-control", 3, "value"], ["formControlName", "phone_customer", "type", "hidden", 1, "form-control", 3, "value"], ["formControlName", "phone_userid", "type", "hidden", 1, "form-control", 3, "value"], ["class", "form-control", "formControlName", "phone_name", "type", "text", 4, "ngIf"], ["class", "form-control", "formControlName", "phone_name", 4, "ngIf"], ["class", "form-control", "formControlName", "phone_imei", "type", "text", 4, "ngIf"], ["class", "form-control", "formControlName", "phone_imei", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["formControlName", "phone_price", "type", "number", 1, "form-control", 3, "input"], ["formControlName", "phone_notes", 1, "form-control"], [1, "text-left", "mgt30"], [3, "innerHTML"], ["formControlName", "phone_name", "type", "text", 1, "form-control"], ["formControlName", "phone_name", 1, "form-control"], ["formControlName", "phone_imei", "type", "text", 1, "form-control"], ["formControlName", "phone_imei", 1, "form-control"], ["formControlName", "phone_dt", 1, "form-control"], ["value", "0", "selected", ""], ["value", "dl"], ["value", "passport"], ["formControlName", "phone_dn", "type", "text", 1, "form-control"], ["formControlName", "phonetax", "type", "number", "readonly", "", 1, "form-control"], ["formControlName", "phone_total", "type", "number", 1, "form-control"], ["id", "manualform", "role", "alert", 1, "popup"], ["id", "manualclose", 1, "popup-close", "img-replace", 3, "click"], ["formControlName", "amount", "type", "number", 1, "form-control"], [1, "inline-flex"], ["id", "amountleft"], ["class", "text-left changedue", 4, "ngIf"], [1, "container", "numpad"], [1, "calc"], [1, "calc-key"], [1, "numpad", 3, "click"], ["data-action", "equate", 1, "key-eq", 3, "click"], ["rows", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "paymethod"], [1, "btn", 3, "click"], [1, "text-left", "changedue"], ["formControlName", "cprice", "type", "number", 1, "form-control"], ["type", "button", 1, "key-eq", 3, "click"]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchProductText = $event; })("input", function SalesComponent_Template_input_input_9_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_12_listener() { return ctx.userSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchTerm = $event; })("input", function SalesComponent_Template_input_input_14_listener() { return ctx.onSearchTermChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SalesComponent_Template_select_change_15_listener($event) { return ctx.onOptionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select a Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SalesComponent_option_18_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SalesComponent_mat_progress_bar_27_Template, 1, 0, "mat-progress-bar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SalesComponent_div_31_Template, 7, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SalesComponent_div_33_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_div_click_34_listener() { return ctx.repairselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Repair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SalesComponent_div_37_Template, 6, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SalesComponent_div_38_Template, 14, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "QTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "S.P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SalesComponent_tr_57_Template, 3, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SalesComponent_tr_58_Template, 21, 8, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "HST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Discount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_Template_input_ngModelChange_71_listener($event) { return ctx.xdiscount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_i_click_72_listener() { return ctx.discountupdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Total Due : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_81_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_85_listener() { return ctx.generalSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Round Off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_89_listener() { return ctx.manualSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SalesComponent_div_93_Template, 12, 1, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SalesComponent_div_94_Template, 12, 1, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, SalesComponent_div_95_Template, 32, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, SalesComponent_div_96_Template, 16, 1, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SalesComponent_div_97_Template, 40, 18, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, SalesComponent_div_98_Template, 61, 15, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SalesComponent_div_99_Template, 40, 1, "div", 59);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchProductText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome! ", ctx.usernamex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchsview && ctx.search.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productsview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repairview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.carts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.xsubtotal.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.xhst.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.xdiscount)("value", ctx.xdiscount.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.xtotal.toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generalview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lookupview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serviceview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneaddview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manualview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartview);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".appx[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{max-width:100%}.appx[_ngcontent-%COMP%], .headerx[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{display:flex}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.appx[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;font-size:15px;font-weight:500}.appx[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{overflow:hidden}.content-button[_ngcontent-%COMP%], .headerx[_ngcontent-%COMP%], .side-menu[_ngcontent-%COMP%]{white-space:nowrap}.hm-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left}*[_ngcontent-%COMP%], .searchresults[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{box-sizing:border-box}*[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]:focus, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:focus{outline:0}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%], .quantity[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{text-align:center;-moz-appearance:textfield}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .menu-link-main[_ngcontent-%COMP%], .popup-trigger[_ngcontent-%COMP%], .side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], a#back-button[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}#trigger[_ngcontent-%COMP%], .app-card[_ngcontent-%COMP%], .content-button[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dark-light[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%], li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:root{--theme-bg-color:rgba(16 18 27 / 40%);--border-color:rgba(113 119 144 / 25%);--theme-color:#f9fafb;--inactive-color:rgb(113 119 144 / 78%);--body-font:\"Poppins\",sans-serif;--hover-menu-bg:rgba(12 15 25 / 30%);--content-title-color:#999ba5;--content-bg:rgb(146 151 179 / 13%);--button-inactive:rgb(249 250 251 / 55%);--dropdown-bg:#21242d;--dropdown-hover:rgb(42 46 60);--popup-bg:rgb(22 25 37);--search-bg:#14162b;--overlay-bg:rgba(36, 39, 59, 0.3);--scrollbar-bg:rgb(1 2 3 / 40%)}.light-mode[_ngcontent-%COMP%]{--theme-bg-color:rgb(255 255 255 / 31%);--theme-color:#3c3a3a;--inactive-color:#333333;--button-inactive:#3c3a3a;--search-bg:rgb(255 255 255 / 31%);--dropdown-bg:#f7f7f7;--overlay-bg:rgb(255 255 255 / 30%);--dropdown-hover:rgb(236 236 236);--border-color:rgb(255 255 255 / 35%);--popup-bg:rgb(255 255 255);--hover-menu-bg:rgba(255 255 255 / 35%);--scrollbar-bg:rgb(255 253 253 / 57%);--content-title-color:--theme-color}html[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}body[_ngcontent-%COMP%]{background-image:url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);background-size:cover;background-position:center;justify-content:center;align-items:center;flex-direction:column;padding:2em;width:100%;height:100vh}.video-bg[_ngcontent-%COMP%]{position:fixed;right:0;top:0;width:100%;height:100%}.video-bg[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.dark-light[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:30px;background-color:#21242d;box-shadow:-1px 3px 8px -1px rgba(0,0,0,.2);padding:8px;border-radius:50%;z-index:3}#drop_down_with_links[_ngcontent-%COMP%], .appx[_ngcontent-%COMP%], .notification[_ngcontent-%COMP%], .notify[_ngcontent-%COMP%]{position:relative}.appx[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .light-mode[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:rgba(16 18 27 / 40%)}.dark-light[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;flex-shrink:0;fill:#ffce45;stroke:#ffce45;transition:.5s}.light-mode[_ngcontent-%COMP%]   .dark-light[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:transparent;stroke:#f9fafb}.light-mode[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{border:2px solid rgba(16 18 27 / 40%)}.light-mode[_ngcontent-%COMP%]   .pop-up__title[_ngcontent-%COMP%]{border-color:#f9fafb}.light-mode[_ngcontent-%COMP%]   .dropdown.is-active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.94)}body.light-mode[_ngcontent-%COMP%]   .video-bg[_ngcontent-%COMP%]:before, body.light-mode[_ngcontent-%COMP%]:before{content:\"\";position:absolute;left:0;top:0;width:100%;height:100vh;background:linear-gradient(180deg,rgba(255,255,255,.72) 0,rgba(255,255,255,.45) 100%);-webkit-backdrop-filter:saturate(3);backdrop-filter:saturate(3)}.appx[_ngcontent-%COMP%]{flex-direction:column;width:100%;border-radius:14px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);margin:0 auto}.headerx[_ngcontent-%COMP%]{align-items:center;flex-shrink:0;height:58px;width:100%;border-bottom:1px solid rgba(113 119 144 / 25%);padding:0 30px}.checkbox[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]{display:flex;align-items:center}.header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 30px;color:rgb(113 119 144 / 78%);border-bottom:2px solid transparent;transition:.3s}@media screen and (max-width:610px){.header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.main-header-link){display:none}}.header-menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f9fafb;border-bottom:2px solid #f9fafb}.notify[_ngcontent-%COMP%]:before{content:\"\";position:absolute;background-color:#3a6df0;width:6px;height:6px;border-radius:50%;right:20px;top:16px}.menu-circle[_ngcontent-%COMP%]{width:15px;height:15px;background-color:#f96057;border-radius:50%;box-shadow:24px 0 0 0 #f8ce52,48px 0 0 0 #5fcf65;margin-right:195px;flex-shrink:0}.search-bar[_ngcontent-%COMP%]{height:40px;display:flex;width:100%;max-width:400px;padding-left:16px;border-radius:4px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;background-color:#14162b;border-radius:4px;padding:0 20px 0 40px;box-shadow:0 0 0 2px rgba(134,140,160,.02);background-image:url(\"data:image/svg+xml ;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e\");background-size:14px;background-repeat:no-repeat;background-position:16px 48%;color:#f9fafb}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-family:Poppins,sans-serif;color:rgb(113 119 144 / 78%);font-size:15px;font-weight:500}.header-profile[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 16px 0 40px;margin-left:auto;flex-shrink:0}.notification[_ngcontent-%COMP%] + svg[_ngcontent-%COMP%], .profile-img[_ngcontent-%COMP%]{margin-left:22px}.header-profile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:22px;color:#f9fafb;flex-shrink:0}.notification-number[_ngcontent-%COMP%]{position:absolute;background-color:#3a6df0;width:16px;height:16px;border-radius:50%;font-size:10px;display:flex;align-items:center;justify-content:center;color:#fff;right:-6px;top:-6px}.profile-img[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid #f9fafb}#menu.closed[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%], .wide[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%], .wide[_ngcontent-%COMP%]   .header-profile[_ngcontent-%COMP%]{display:none}.wide[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{max-width:600px;margin:auto;transition:.4s;box-shadow:0 0 0 1px rgba(113 119 144 / 25%);padding-left:0}.wide[_ngcontent-%COMP%]   .menu-circle[_ngcontent-%COMP%]{margin-right:0}.wrapper[_ngcontent-%COMP%]{display:flex;flex-grow:1}.appx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%]{color:#fff}.left-side[_ngcontent-%COMP%]{flex-basis:35%;border-right:1px solid rgba(113 119 144 / 25%);padding:0 10px;overflow:auto;height:100vh!important;flex-shrink:0}@media screen and (max-width:945px){.left-side[_ngcontent-%COMP%], .menu-circle[_ngcontent-%COMP%], .notification[_ngcontent-%COMP%] + svg[_ngcontent-%COMP%]{display:none}}.side-wrapper[_ngcontent-%COMP%] + .side-wrapper[_ngcontent-%COMP%]{margin-top:20px}.side-title[_ngcontent-%COMP%]{color:rgb(113 119 144 / 78%);margin-bottom:14px}.side-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column}.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f9fafb;display:flex;align-items:center;font-weight:400;padding:10px;font-size:14px;border-radius:6px;transition:.3s}.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:rgba(12 15 25 / 30%)}.side-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;margin-right:8px}.updates[_ngcontent-%COMP%]{position:relative;top:0;right:0;margin-left:auto;width:18px;height:18px;font-size:11px}.main-header[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid rgba(113 119 144 / 25%);height:58px;flex-shrink:0}.main-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{margin-left:150px}.main-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 24px}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.menu-link-main[_ngcontent-%COMP%]{color:#f9fafb;padding:0 30px}@media screen and (max-width:1055px){.menu-link-main[_ngcontent-%COMP%], .notify[_ngcontent-%COMP%]{display:none}.main-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{margin:auto}}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:#f9fafb;padding:0 10px;height:100%;overflow:auto;background-color:rgba(16 18 27 / 40%)}@media screen and (max-width:510px){.content-wrapper[_ngcontent-%COMP%]{padding:20px}}.content-wrapper-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:space-between;background-image:url(\"https://www.transparenttextures.com/patterns/cubes.png\"),linear-gradient(to right top,#cf4af3,#e73bd7,#f631bc,#fd31a2,#ff3a8b,#ff4b78,#ff5e68,#ff705c,#ff8c51,#ffaa49,#ffc848,#ffe652);border-radius:14px;padding:20px 40px}.content-wrapper.overlay[_ngcontent-%COMP%]{pointer-events:none;transition:.3s;background-color:rgba(36,39,59,.3)}.overlay-app[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;pointer-events:all;background-color:rgba(36,39,59,.8);opacity:0;visibility:hidden;transition:.3s}.overlay-app.is-active[_ngcontent-%COMP%], .pop-up.visible[_ngcontent-%COMP%]{visibility:visible;opacity:1}.img-content[_ngcontent-%COMP%]{font-weight:500;font-size:17px;display:flex;align-items:center;margin:0}.img-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;margin-right:14px}.content-text[_ngcontent-%COMP%]{font-weight:400;font-size:14px;margin-top:16px;line-height:1.7em;color:#ebecec;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.content-wrapper-context[_ngcontent-%COMP%]{max-width:350px}.content-button[_ngcontent-%COMP%]{background-color:#3a6df0;border:none;padding:8px 26px;color:#fff;border-radius:20px;margin-top:16px;transition:.3s}.content-wrapper-img[_ngcontent-%COMP%]{width:186px;object-fit:cover;margin-top:-25px;object-position:center}.content-section[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:column}..content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;justify-content:space-around;background-color:rgb(146 151 179 / 13%);padding-left:0;margin:0;border-radius:14px;border:1px solid rgba(16 18 27 / 40%)}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:10px 18px;display:flex;align-items:center;font-size:16px;width:100%;height:100%;white-space:nowrap;transition:.3s}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:first-child{border-radius:13px 13px 0 0}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:last-child{border-radius:0 0 13px 13px}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{border-top:1px solid rgba(113 119 144 / 25%)}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;border-radius:6px;margin-right:16px;flex-shrink:0}.products[_ngcontent-%COMP%]{display:flex;align-items:center;width:150px}.status[_ngcontent-%COMP%]{margin-left:auto;width:140px;font-size:15px;position:relative}@media screen and (max-width:700px){.status[_ngcontent-%COMP%]{display:none}}.status-circle[_ngcontent-%COMP%]{width:6px;height:6px;background-color:#396df0;position:absolute;border-radius:50%;top:4px;left:-20px}.status-circle.green[_ngcontent-%COMP%]{background-color:#3bf083}.status-button[_ngcontent-%COMP%]{font-size:15px;margin-top:0;padding:6px 24px}@media screen and (max-width:390px){.status-button[_ngcontent-%COMP%]{padding:6px 14px}}.status-button.open[_ngcontent-%COMP%]{background:0 0;color:rgb(249 250 251 / 55%);border:1px solid}.status-button[_ngcontent-%COMP%]:not(.open):hover{color:#fff;border-color:#fff}.content-button[_ngcontent-%COMP%]:not(.open):hover{background:#1e59f1}.menu[_ngcontent-%COMP%]{width:5px;height:5px;background-color:rgb(249 250 251 / 55%);border-radius:50%;box-shadow:7px 0 0 0 rgb(249 250 251 / 55%),14px 0 0 0 rgb(249 250 251 / 55%);margin:0 12px}@media screen and (max-width:415px){.content-wrapper-header[_ngcontent-%COMP%]{padding:20px}.adobe-product[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:none}}.dropdown[_ngcontent-%COMP%]{position:relative;height:53px;width:40px;top:-24px;display:flex;left:-5px;background:0 0;border:none}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .pop-up[_ngcontent-%COMP%]{position:absolute;opacity:0}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#21242d;height:110px;width:120px;right:0;top:20px;pointer-events:none;transform:translatey(10px);transition:.4s}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f9fafb;font-size:12px}.dropdown.is-active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{opacity:1;pointer-events:all;transform:translatey(25px)}.dropdown.is-active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:rgb(42 46 60)}.button-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;width:187px;margin-left:auto}@media screen and (max-width:480px){body[_ngcontent-%COMP%]{padding:.8em}.headerx[_ngcontent-%COMP%]{padding:0 16px}.products[_ngcontent-%COMP%]{width:120px}.button-wrapper[_ngcontent-%COMP%]{width:auto}}.pop-up[_ngcontent-%COMP%]{padding:30px 40px;top:50%;left:50%;transform:translate(-50%,-50%);overflow-y:auto;box-shadow:0 6px 30px rgba(0,0,0,.4);transition:.3s;z-index:10;background-color:rgb(22 25 37);width:500px;visibility:hidden;border-radius:6px;display:flex;flex-direction:column;white-space:normal}@media screen and (max-width:570px){.content-wrapper-img[_ngcontent-%COMP%]{width:110px}.pop-up[_ngcontent-%COMP%]{width:100%}}.pop-up__title[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:1px solid rgba(113 119 144 / 25%);display:flex;justify-content:space-between;align-items:center}.pop-up__subtitle[_ngcontent-%COMP%]{white-space:normal;margin:20px 0;font-size:14px;font-weight:400;line-height:1.8em}.pop-up__subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f9fafb}.content-button-wrapper[_ngcontent-%COMP%]   .content-button.status-button.open.close[_ngcontent-%COMP%]{width:auto}.content-section[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{margin-right:0;width:24px}.checkbox-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px;font-weight:400}.app-card[_ngcontent-%COMP%], .footer_panel[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%], span.date[_ngcontent-%COMP%], span.time[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:16px}.checkbox-wrapper[_ngcontent-%COMP%] + .checkbox-wrapper[_ngcontent-%COMP%]{margin:20px 0 40px}.content-button-wrapper[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{margin-right:8px}.checkbox[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{content:\"\";margin-right:10px;width:15px;height:15px;border:1px solid #f9fafb;border-radius:4px;cursor:pointer;flex-shrink:0}.checkbox[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{background-color:#3a6df0;border-color:#3a6df0;background-image:url(\"data:image/svg+xml ;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e\");background-position:50%;background-size:12px;background-repeat:no-repeat}.content-button-wrapper[_ngcontent-%COMP%]{margin-top:auto;margin-left:auto}.apps-card[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;width:calc(100% + 50px)}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(20% - 20px);margin-right: 10px !important;background-color:rgb(146 151 179 / 13%);border-radius:14px;border:1px solid rgba(16 18 27 / 40%);padding:20px;transition:.3s}.app-card[_ngcontent-%COMP%]:hover{transform:scale(1.02);background-color:rgba(16 18 27 / 40%)}.app-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;border-radius:6px;margin-right:12px;flex-shrink:0}span.date[_ngcontent-%COMP%], span.username[_ngcontent-%COMP%]{margin-right:30px}.app-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;align-items:center;width:100%;height:auto}.app-card__subtext[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:1.6em;margin-top:20px;border-bottom:1px solid rgba(113 119 144 / 25%);padding-bottom:20px}.app-card-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:auto;margin-top:16px}@media screen and (max-width:1110px){.app-card[_ngcontent-%COMP%]{width:calc(50% - 20px)}.app-card[_ngcontent-%COMP%]:last-child{margin-top:20px;margin-left:0}}@media screen and (max-width:565px){.app-card[_ngcontent-%COMP%]{width:calc(100% - 20px);margin-top:20px}.app-card[_ngcontent-%COMP%] + .app-card[_ngcontent-%COMP%]{margin-left:0}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgb(1 2 3 / 40%);border-radius:10px}button#reset-button[_ngcontent-%COMP%]{margin-right:30px;background:#3a6df0;color:#fff;padding:10px 15px;font-size:16px;border-radius:5px;border:none;letter-spacing:1px}button#reset-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], i.fa.fa-arrow-left.link-icon[_ngcontent-%COMP%]{margin-right:10px}.grandtotal[_ngcontent-%COMP%]{background:#000;text-align:center;margin:5px 0;padding:10px;font-size:26px}.col-sm-12.col-md-4[_ngcontent-%COMP%]{display:inline-flex;width:33.33%}.footer_panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;font-size:18px;padding:5px 0;font-weight:600}.form-group[_ngcontent-%COMP%], .oneline[_ngcontent-%COMP%], .projects-section-header.add-user.textbox[_ngcontent-%COMP%]{display:inline-flex}span.col-md-3.text-center[_ngcontent-%COMP%]{width:25%;display:block}button#updatefinal[_ngcontent-%COMP%]{padding:2px 15px;line-height:30px}.h4-14[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px;margin-top:0;margin-bottom:5px}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;width:100%;border-collapse:collapse;padding:1px 5px}.hm-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px 4px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:8px 6px}.table-b[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-b[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd}.hm-p[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .hm-p[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:3px 0}.cropped[_ngcontent-%COMP%]{float:right;margin-bottom:20px;height:100px;overflow:hidden}.cropped[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;margin:8px 0 0 80px}.main-pd-wrapper[_ngcontent-%COMP%]{box-shadow:0 0 10px #ddd;background-color:#fff;border-radius:10px;padding:15px}#carousel-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .btn-black[_ngcontent-%COMP%], div#carousel-container[_ngcontent-%COMP%]{background:#000}.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{word-break:break-all;border:1px solid #ddd;padding:10px;font-size:14px}.invoice-items[_ngcontent-%COMP%]{font-size:14px;border-top:1px dashed #ddd}.iconleft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .popup-trigger[_ngcontent-%COMP%]{font-size:18px}.invoice-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:14px 0}.btn-black[_ngcontent-%COMP%]{color:#fff}.quantity[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{line-height:20px;margin:0 5px;background-color:#000;color:#fff}#menu[_ngcontent-%COMP%], #trigger[_ngcontent-%COMP%], .searchresults[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#fff}.quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.app-sidebar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before{font-size:24px!important}#carousel-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px;margin:0;font-weight:600;background:#000;color:#fff;padding:5px 10px}img.proimage[_ngcontent-%COMP%]{margin: 0px auto !important;display: block !important;width:100%;height: auto;}.swiper-container[_ngcontent-%COMP%]{width:85%;overflow:hidden}.categoryarrow.controls-slide[_ngcontent-%COMP%]{display:inline-flex;position:relative;right:0;top:90%}.modelarrow.controls-slide[_ngcontent-%COMP%]{display:inline-flex;position:relative;right:0;top:125%;width:100%}#carousel-productsx[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{width:25%!important;height:150px!important;margin:5px 0}.footer_panel[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], .footer_panel[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{padding:0 2px}.input-group-prepend[_ngcontent-%COMP%]{position:relative;left:20%;z-index:99}.input-group-append[_ngcontent-%COMP%]{position:relative;right:20%;z-index:99}.swiper-container.xmodels.swiper-initialized.swiper-horizontal[_ngcontent-%COMP%]{width:85%;margin:0 auto}.swiper-button-prev.prevxm[_ngcontent-%COMP%]{left:-75%!important;position:relative!important}.swiper-button-next.nextxm[_ngcontent-%COMP%]{left:80%!important}.footer_panel[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:5px}span#buttonupdate[_ngcontent-%COMP%]{bottom:-15px;position:relative}.projects-section-header.add-user.textbox[_ngcontent-%COMP%]{z-index:9999;background:0 0;width:100%;position:relative;margin-top:0}.header-right[_ngcontent-%COMP%]{position:fixed;border:1px solid #f2f2f2;background:#fff;z-index:9999}table#invoice-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table#invoice-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-left:10px!important;color:#fff!important}.mr5[_ngcontent-%COMP%]{margin-right:5px}span#date[_ngcontent-%COMP%]{margin-right:20px}.popup-trigger[_ngcontent-%COMP%]{display:block;width:170px;right:2rem;margin:3em auto;text-align:center;color:#fff;padding:1rem 2rem;font-weight:700;text-transform:uppercase;border-radius:50em;background:#35a785;box-shadow:0 3px 0 rgba(0,0,0,.07);transition:.3s}.qty-input[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.popup-trigger[_ngcontent-%COMP%]:hover{opacity:.8}.popup[_ngcontent-%COMP%]{position:fixed;left:0;top:40%;height:100%;z-index:1000;width:100%;transition:.5s}.popup.is-visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transition:1s}.popup-container[_ngcontent-%COMP%]{transform:translateY(-50%);transition:.5s;position:relative;width:max-content;margin:2em auto;top:5%;padding:2rem;background:#fff;border-radius:.25em .25em .4em .4em;box-shadow:0 0 20px rgba(0,0,0,.2)}.is-visible[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%]{transform:translateY(0);transition:.5s}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]{position:absolute;top:8px;font-size:0;right:8px;width:30px;height:30px}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::after, .popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::before{content:'';position:absolute;top:12px;width:14px;height:3px;background-color:#8f9cb5}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::before{transform:rotate(45deg);left:8px}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::after{transform:rotate(-45deg);right:8px}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]:hover:after, .popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]:hover:before{background-color:#35a785;transition:.3s}.text-left[_ngcontent-%COMP%]{text-align:left}a#fullscreen-button[_ngcontent-%COMP%]:hover, a#opencalculator[_ngcontent-%COMP%]:hover{background:#000;color:#fff}div#searchResultsContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px}.searchresults[_ngcontent-%COMP%]{margin-top:5%;display:block!important;width:100%!important;position:absolute;top:10%}div#searchResultsContainer[_ngcontent-%COMP%]{width:60%!important;margin:0 auto;text-align:center}div#paginationx[_ngcontent-%COMP%]{position:absolute;bottom:0;right:60%}.searchresults[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:5px 10px;text-align:center;margin:10px 0;height:180px}a#back-button[_ngcontent-%COMP%]{width:max-content;background:#000;border-radius:10px;color:#fff;padding:0 20px;position:relative;right:-10%;top:100%;margin:0 auto;display:none}a#back-button[_ngcontent-%COMP%]:hover{font-size:16px}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]{background:0 0;color:inherit;font-weight:700;font-size:inherit;border:none;display:inline-block;min-width:0;height:2.5rem;line-height:1}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]{width:50px;min-width:0;display:inline-block;appearance:textfield}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]::-webkit-inner-spin-button, .qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]::-webkit-outer-spin-button{appearance:none;margin:0}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]{padding:0;width:2.5rem;font-size:1.25em;text-indent:-100px;overflow:hidden;position:relative}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:after, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:before{content:\"\";height:2px;width:10px;position:absolute;display:block;background:#000;top:0;bottom:0;left:0;right:0;margin:auto}.qty-input[_ngcontent-%COMP%]   .qty-count--minus[_ngcontent-%COMP%]{border-right:1px solid #e2e2e2}.qty-input[_ngcontent-%COMP%]   .qty-count--add[_ngcontent-%COMP%]{border-left:1px solid #e2e2e2}.qty-input[_ngcontent-%COMP%]   .qty-count--add[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled{color:#ccc;background:#f2f2f2;cursor:not-allowed;border-color:transparent}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled:after, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled:before{background:#ccc}.qty-input[_ngcontent-%COMP%]{background:#fff;display:inline-flex;align-items:center;overflow:hidden;border-radius:4px;box-shadow:0 1em 2em -.9em rgba(0,0,0,.7)}.bx[_ngcontent-%COMP%], li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#333}.components_container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;gap:16px}#trigger[_ngcontent-%COMP%], .select_component[_ngcontent-%COMP%]{align-items:center;display:flex}.select_component[_ngcontent-%COMP%]{height:40px;justify-content:space-between;border-radius:8px;border:2px solid #e9e9e9;margin:0 auto;background:#fff;padding:0 10px}select[_ngcontent-%COMP%]{background-color:transparent;border:none;padding:10px}.bx[_ngcontent-%COMP%]{font-size:20px}#trigger[_ngcontent-%COMP%]{border:2px solid #e9e9e9;padding:10px 14px;gap:8px;border-radius:8px}#menu[_ngcontent-%COMP%]{position:absolute;top:46px;left:0;width:180px;border:1px solid #e9e9e9;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,.15);padding:8px;transition:.5s ease-in}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px}.select_component[_ngcontent-%COMP%]:focus-visible, select[_ngcontent-%COMP%]:focus-visible{border-radius:8px;background-color:rgba(0,0,0,.05)}#trigger[_ngcontent-%COMP%]:focus-visible, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus-visible{border-radius:8px;background-color:rgba(0,0,0,.05)}#trigger[_ngcontent-%COMP%]:hover, .select_component[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05);border-radius:4px}tfoot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top: 5px;padding:10px;width:100%}i.fa.fa-refresh[_ngcontent-%COMP%]{background:#fff;padding:10px}.apps-card.categorysection[_ngcontent-%COMP%]{position:fixed;bottom:0;background:#000}.categorysection[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%]{padding: 15px;width:max-content!important;color:#fff!important;margin:5px!important;text-align:center!important}.categorysection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 20px;text-align:center!important;margin:0 auto;color:#fff}.app-card[_ngcontent-%COMP%] + .app-card[_ngcontent-%COMP%]{margin:5px 0}.content-section[_ngcontent-%COMP%]{height:80vh!important;overflow-y:scroll;overflow-x:hidden!important}.content-section-title[_ngcontent-%COMP%]{padding: 5px 0px;color:#fff!important;font-size:28px;text-transform:uppercase;font-weight:600}.footer_panel[_ngcontent-%COMP%]{bottom:0%;position:fixed;height: 40%;}button#openuseradd[_ngcontent-%COMP%]{background:#000;border:none;line-height:30px;color:#fff;padding:0 15px;border-radius:5px}.select_component[_ngcontent-%COMP%]:hover{background:#f0f8ff!important}#invoice-table[_ngcontent-%COMP%]   i.fa.fa-close.text-danger[_ngcontent-%COMP%]{margin-left:15px}.iconleft[_ngcontent-%COMP%]{display:inline-flex;float:left;background:#000;padding:5px 20px;margin-right:10px;border-radius:5px}.popup[_ngcontent-%COMP%]   label.text-left[_ngcontent-%COMP%]{width:100%;display:block}.popup[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{line-height:35px;height:35px;margin:5px 0}.popup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-radius:8px;background-color:rgba(0,0,0,.05)}#manualform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], form#userpost[_ngcontent-%COMP%]{width:100%}#generalform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%], #manualform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{width:100%;background:#000;color:#fff;border-radius:5px}#userform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{width:100%!important}#userform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px 0;line-height:35px;font-size:18px}#userform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{background:#000;color:#fff;width:100%;border-radius:5px}span.pricetag[_ngcontent-%COMP%]{text-align: center;display: block !IMPORTANT;margin-top: 10px;}.app-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size: 18px;margin: 0px !important;color:white;text-align: center;}tfoot[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%] {text-transform: uppercase;font-size: 26px !important;}tfoot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {font-size: 26px !important;border-radius:5px;border:none;}i.fa.fa-refresh[_ngcontent-%COMP%] {background: black !important;color: white !important;border-radius: 5px;}.side-wrapper[_ngcontent-%COMP%] {overflow-x: hidden;display: block;overflow-y: scroll;height: 60vh;}.newcatsection[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%] {width: max-content;font-size: 20px;padding: 10px;}.small-text[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n    font-size: 1.5em;\r\n  }.mini-text[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n    margin-top: 1em;\r\n  }.calc[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    margin: auto;\r\n    position: relative;\r\n    height: auto;\r\n    width: 40em;\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n    overflow: hidden;\r\n   \r\n    box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.3);\r\n  }.calc-display[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    color: #000;\r\n    font-size: 2.5em;\r\n    padding: 0.5em 0.75em;\r\n    text-align: right;\r\n  }.calc-key[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-gap: 0px;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }.calc-key[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1.25em 1.25em;\r\n    position: relative;\r\n    text-align: center;\r\n  }.calc-key[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:active::before, .calc-key[_ngcontent-%COMP%]    > .is-depressed[_ngcontent-%COMP%]::before {\r\n    background: #8EC5FC;\r\n    content: \"\";\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    opacity: 0.3;\r\n    position: absolute;\r\n    z-index: 1;\r\n  }.numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 0;\r\n    background: transparent;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n    font-weight: inherit;\r\n    outline: none;\r\n    appearance: none;\r\n    text-align: left;\r\n  }.numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }.numpad[_ngcontent-%COMP%]   .key-op[_ngcontent-%COMP%] {\r\n    background: #eee;\r\n    font-size: 1.25em;\r\n    padding: 0.8em;\r\n  }.numpad[_ngcontent-%COMP%]   .key-eq[_ngcontent-%COMP%] {\r\n    background: #333;\r\n    color: #ffffff;\r\n    grid-column: -2;\r\n    grid-row: 2/span 4;\r\n    font-size: 1.25em;\r\n    font-size: 40px !important;\r\n    padding: 0px 15px !important;\r\n  }.inline-flex[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    width: 100%;\r\n}.changedue[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  color: rgb(11, 77, 11);\r\n}.numpad[_ngcontent-%COMP%]   .themer[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 10em;\r\n  }.numpad[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\r\n    padding: 1.1em;\r\n    border-radius: 50%;\r\n  }.opt1[_ngcontent-%COMP%] {\r\n    background: #2196f3;\r\n  }.opt2[_ngcontent-%COMP%] {\r\n    background: #9c27b0;\r\n  }.opt3[_ngcontent-%COMP%] {\r\n    background: #e91e63;\r\n  }.numpad[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: black !IMPORTANT;\r\n    font-size: 24px !IMPORTANT;\r\n    margin: 0px 5px;\r\n    color: white;\r\n    padding: 10px;\r\n    border-radius: 5px !important;\r\n}.popup[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin: 10px 0px !important;\r\n}.popup[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin: 0px !important;\r\n}#manualform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #manualform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n    font-size: 30px !important;\r\n}#manualform[_ngcontent-%COMP%]   label.text-left[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    font-weight: 600;\r\n}#manualform[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    background: black;\r\n    color: white;\r\n    border-radius: 5px;\r\n}#manualform[_ngcontent-%COMP%]   button.numpad[_ngcontent-%COMP%] {\r\n  font-size: 50px !important;\r\n  padding: 10px !important;\r\n  line-height: 60px;\r\n  text-align: center !important;\r\n  border: 1px solid black !important;\r\n  border-radius: 0px !important;\r\n}#manualform[_ngcontent-%COMP%]   button.btn.selected[_ngcontent-%COMP%] {\r\n    background: #ff0e00 !important;\r\n    border: none;\r\n}table[_ngcontent-%COMP%]   i.fa.fa-pencil[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}table[_ngcontent-%COMP%]   i.fa.fa-close.text-danger[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}a.backtohome[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: black;\r\n  padding: 5px 30px;\r\n  border-radius: 5px;\r\n}a.backtohome[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n font-size:28px;\r\n}#lookupform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%] {\r\n  background: black;\r\n  color: white;\r\n  font-size: 18px;\r\n  display: block;\r\n  width: 100%;\r\n  line-height:35px;\r\n}#lookupform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height:auto;\r\n  line-height:35px;\r\n  width:100%;\r\n}#lookupform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-size:24px;\r\n  font-weight:500;\r\n}#lookupform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  width: 100% !important;\r\n}#lookupform[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%] {\r\n  width:30%;\r\n}#phoneform[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n}img.text-center[_ngcontent-%COMP%] {\r\n  margin: 0px auto;\r\n  display: block;\r\n}.iconleft.mg10[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  float: right;\r\n  background: #a90101;\r\n}.phonesuccess[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n  color: black;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  font-weight: 500;\r\n  margin-top: 30px;\r\n}.phoneerror[_ngcontent-%COMP%] {\r\n  background-color: #c0030333;\r\n  color: black;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  font-weight: 500;\r\n  margin-top: 30px;\r\n}.mgt30[_ngcontent-%COMP%]{\r\n  margin-top:30px !important;\r\n}span.pricetag[_ngcontent-%COMP%] {\r\n  margin-top: 5px !important;\r\n  font-size: 18px;\r\n}#phoneform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  margin:10px 0px;\r\n}@media screen and (min-width: 1537px) and (max-width: 1800px) {\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 33%;\r\n  }\r\n\r\n}@media screen and (min-width: 1400px) and (max-width: 1536px) {\r\n  .left-side[_ngcontent-%COMP%]{\r\n    flex-basis:35%;\r\n  }\r\n  .content-wrapper[_ngcontent-%COMP%]{\r\n    padding:0 20px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n   .app-card[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 35%;\r\n  }\r\n  \r\n}@media screen and (min-width: 1199px) and (max-width: 1399px) {\r\n  .left-side[_ngcontent-%COMP%]{\r\n    flex-basis:40%;\r\n  }\r\n  .content-wrapper[_ngcontent-%COMP%]{\r\n    padding:0 20px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n  .app-card[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 35%;\r\n  }\r\n  \r\n}@media screen and (max-width: 799px) {\r\n  .left-side[_ngcontent-%COMP%]{\r\n    flex-basis:40%;\r\n  }\r\n  .content-wrapper[_ngcontent-%COMP%]{\r\n    padding:0 20px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n  .app-card[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 35%;\r\n  }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGNBQWMsQ0FBQyxvQkFBb0IsWUFBWSxDQUFDLHVCQUF1Qiw4QkFBOEIsQ0FBQyx3QkFBd0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsb0NBQW9DLGtCQUFrQixDQUFDLGNBQWMsZUFBZSxDQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyw0REFBNEQsU0FBUyxDQUFDLHFEQUFxRCxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxzR0FBc0csb0JBQW9CLENBQUMsK0dBQStHLGNBQWMsQ0FBQyxNQUFNLHFDQUFxQyxDQUFDLHNDQUFzQyxDQUFDLHFCQUFxQixDQUFDLHVDQUF1QyxDQUFDLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLHdDQUF3QyxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLCtCQUErQixDQUFDLFlBQVksdUNBQXVDLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMseUJBQXlCLENBQUMsa0NBQWtDLENBQUMscUJBQXFCLENBQUMsbUNBQW1DLENBQUMsaUNBQWlDLENBQUMscUNBQXFDLENBQUMsMkJBQTJCLENBQUMsdUNBQXVDLENBQUMscUNBQXFDLENBQUMsbUNBQW1DLENBQUMsS0FBSyxrQ0FBa0MsQ0FBQyxLQUFLLGtIQUFrSCxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDLFdBQVcsQ0FBcUIsZ0JBQWdCLENBQUMsWUFBWSxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQywyQ0FBMkMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGtEQUFrRCxpQkFBaUIsQ0FBQyxtRUFBbUUscUNBQXFDLENBQUMsZ0JBQWdCLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyx5QkFBeUIscUNBQXFDLENBQUMsMkJBQTJCLG9CQUFvQixDQUFDLG1DQUFtQyxzQ0FBc0MsQ0FBQyx3REFBd0QsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxxRkFBcUYsQ0FBQyxtQ0FBbUMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxhQUFhLENBQUMsU0FBUyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLG1DQUFtQyxDQUFDLGNBQWMsQ0FBQyxvQ0FBb0Msc0NBQXNDLFlBQVksQ0FBQyxDQUFDLDhDQUE4QyxhQUFhLENBQUMsK0JBQStCLENBQUMsZUFBZSxVQUFVLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsVUFBVSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxnREFBZ0QsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLFVBQVUsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsMENBQTBDLENBQUMsa2ZBQWtmLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFtUSwrQkFBK0IsOEJBQThCLENBQUMsNEJBQTRCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQywrQkFBK0IsZ0JBQWdCLENBQUMsb0JBQW9CLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFxQixnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxnRUFBZ0UsWUFBWSxDQUFDLGtCQUFrQixlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyw0Q0FBNEMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLGNBQWMsQ0FBQyxTQUFTLFlBQVksQ0FBQyxXQUFXLENBQUMsZ0NBQWdDLFVBQVUsQ0FBQyxXQUFXLGNBQWMsQ0FBQyw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxvQ0FBb0MsMENBQTBDLFlBQVksQ0FBQyxDQUFDLDRCQUE0QixlQUFlLENBQUMsWUFBWSw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLGFBQWEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixxQ0FBcUMsQ0FBQyxlQUFlLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsYUFBYSxZQUFZLENBQUMsa0JBQWtCLENBQUMsK0NBQStDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsaUJBQWlCLENBQUMsNEJBQTRCLGlCQUFpQixDQUFDLGdCQUFnQixZQUFZLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixhQUFhLENBQUMsY0FBYyxDQUFDLHFDQUFxQyx3QkFBd0IsWUFBWSxDQUFDLDBCQUEwQixXQUFXLENBQUMsQ0FBQyxpQkFBaUIsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxvQ0FBb0MsaUJBQWlCLFlBQVksQ0FBQyxDQUFDLHdCQUF3QixZQUFZLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLDRNQUE0TSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsa0NBQWtDLENBQUMsYUFBYSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsdUNBQXVDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxhQUFhLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGdCQUFnQix3QkFBd0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLFdBQVcsQ0FBcUIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQTJCLHNCQUFzQixDQUFDLGlCQUFpQixlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixZQUFZLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyx1Q0FBdUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLHFDQUFxQyxDQUFDLHVCQUF1QixlQUFlLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyx5Q0FBeUMsMkJBQTJCLENBQUMsd0NBQXdDLDJCQUEyQixDQUFDLDBCQUEwQiw0Q0FBNEMsQ0FBQyx3QkFBd0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxVQUFVLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLG9DQUFvQyxRQUFRLFlBQVksQ0FBQyxDQUFDLGVBQWUsU0FBUyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHFCQUFxQix3QkFBd0IsQ0FBQyxlQUFlLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsb0NBQW9DLGVBQWUsZ0JBQWdCLENBQUMsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsaUNBQWlDLGtCQUFrQixDQUFDLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyx1Q0FBdUMsQ0FBQyxpQkFBaUIsQ0FBQyw2RUFBNkUsQ0FBQyxhQUFhLENBQUMsb0NBQW9DLHdCQUF3QixZQUFZLENBQUMscUJBQXFCLFlBQVksQ0FBQyxDQUFDLFVBQVUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLHFCQUFxQixpQkFBaUIsQ0FBQyxTQUFTLENBQUMsYUFBYSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDLGtCQUFrQixhQUFhLENBQUMsY0FBYyxDQUFDLHVCQUF1QixTQUFTLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsZ0NBQWdDLDhCQUE4QixDQUFDLGdCQUFnQixZQUFZLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLG9DQUFvQyxLQUFLLFlBQVksQ0FBQyxTQUFTLGNBQWMsQ0FBQyxVQUFVLFdBQVcsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDLENBQUMsUUFBUSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLGVBQWUsQ0FBQyxvQ0FBb0MsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsb0NBQW9DLHFCQUFxQixXQUFXLENBQUMsUUFBUSxVQUFVLENBQUMsQ0FBQyxlQUFlLG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLFlBQVksQ0FBQyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0Isa0JBQWtCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLGFBQWEsQ0FBQyxpRUFBaUUsVUFBVSxDQUFDLHdCQUF3QixjQUFjLENBQUMsVUFBVSxDQUFDLGtCQUFrQixZQUFZLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyw4REFBOEQsY0FBYyxDQUFDLG9DQUFvQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsZ0JBQWdCLENBQUMsdUJBQXVCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsK0JBQStCLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLG9UQUFvVCxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLHdCQUF3QixlQUFlLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxZQUFZLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLFVBQVUsWUFBWSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLHVDQUF1QyxDQUFDLGtCQUFrQixDQUFDLHFDQUFxQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLHFCQUFxQixDQUFDLHFDQUFxQyxDQUFDLGNBQWMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsZUFBZSxhQUFhLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsK0NBQStDLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMscUNBQXFDLFVBQVUsc0JBQXNCLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxvQ0FBb0MsVUFBVSx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsb0JBQW9CLGFBQWEsQ0FBQyxDQUFDLG9CQUFvQixTQUFTLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxtREFBbUQsaUJBQWlCLENBQUMsWUFBWSxlQUFlLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxxQkFBcUIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLCtEQUErRCxtQkFBbUIsQ0FBQywwQkFBMEIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxjQUFjLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sNEJBQTRCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxRQUFRLGVBQWUsQ0FBQyxNQUFNLGVBQWUsQ0FBQyx3QkFBd0IscUJBQXFCLENBQUMsa0JBQWtCLGFBQWEsQ0FBQyxTQUFTLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGFBQWEsV0FBVyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsb0VBQW9FLGVBQWUsQ0FBQyxzQ0FBc0Msb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxlQUFlLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQywyQkFBMkIsY0FBYyxDQUFDLGtCQUFrQixjQUFjLENBQUMsV0FBVyxVQUFVLENBQUMsZUFBZSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxxQkFBcUIsQ0FBQyxzRkFBc0YsdUJBQXVCLENBQUMsUUFBUSxDQUFDLHNCQUFzQix3QkFBd0IsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLDJCQUEyQixDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxrQkFBa0IsU0FBUyxDQUFDLGVBQWUsQ0FBQyw4QkFBOEIsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsa0NBQWtDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxnREFBZ0QsYUFBYSxDQUFDLHFCQUFxQixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLCtEQUErRCxTQUFTLENBQUMsYUFBYSxDQUFDLDJCQUEyQixtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQywyQkFBMkIsa0JBQWtCLENBQUMsZ0NBQWdDLGlCQUFpQixDQUFDLGtCQUFrQixZQUFZLENBQUMsaUJBQWlCLENBQUMsMENBQTBDLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxjQUFjLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLDhDQUE4QywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFVBQVUsaUJBQWlCLENBQUMsZUFBZSxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQ0FBa0MsQ0FBQyxjQUFjLENBQUMsa0NBQWtDLFVBQVUsQ0FBQyxxQkFBcUIsVUFBVSxDQUFDLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGtCQUFrQixTQUFTLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGlCQUFpQiwwQkFBMEIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLG1DQUFtQyxDQUFDLGtDQUFrQyxDQUFDLDZCQUE2Qix1QkFBdUIsQ0FBQyxjQUFjLENBQUMsOEJBQThCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsMkVBQTJFLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxzQ0FBMEosdUJBQXVCLENBQUMsUUFBUSxDQUFDLHFDQUE2Six3QkFBd0IsQ0FBQyxTQUFTLENBQUMscUZBQXFGLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxXQUFXLGVBQWUsQ0FBQyxpREFBaUQsZUFBZSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsY0FBYyxDQUFDLGVBQWUsYUFBYSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQywyQkFBMkIsbUJBQW1CLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQWMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLG9CQUFvQixjQUFjLENBQUMsOENBQThDLGNBQWMsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBOEIsb0JBQW9CLENBQUMsc0dBQThILGVBQWUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLFNBQVMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLHlEQUF5RCxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsNkJBQTZCLDhCQUE4QixDQUFDLDJCQUEyQiw2QkFBNkIsQ0FBQyxpQ0FBaUMsdUJBQXVCLENBQUMsK0JBQStCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQywyRUFBMkUsZUFBZSxDQUFDLFdBQVcsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyx5Q0FBeUMsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxzQkFBc0IsVUFBVSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLDJCQUEyQixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxjQUFjLENBQUMsU0FBUyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxZQUFZLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLENBQUMsWUFBWSxDQUFDLHFEQUFxRCxpQkFBaUIsQ0FBQyxnQ0FBZ0MsQ0FBQywwQ0FBMEMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUMsa0RBQWtELGdDQUFnQyxDQUFDLGlCQUFpQixDQUFDLFlBQVksZUFBZSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLDJCQUEyQixhQUFhLENBQUMsMkJBQTJCLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsc0JBQXNCLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLG9CQUFvQixZQUFZLENBQUMsaUJBQWlCLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLGNBQWMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHdCQUF3Qiw0QkFBNEIsQ0FBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsVUFBVSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUMsc0NBQXNDLFVBQVUsQ0FBQyx1RUFBdUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLGdCQUFnQixVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxpQ0FBaUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsY0FBYyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixlQUFlLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsc0JBQXNCLHlCQUF5QixDQUFDLDBCQUEwQixDQUFDLENBQUMsYUFBYSwwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxpQkFBaUIsNEJBQTRCLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQywwQkFBMEIsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUd0cHVCO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtFQUNsQixDQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakIsQ0FFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLDJDQUEyQztFQUM3QyxDQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQixDQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixxQ0FBcUM7RUFDdkMsQ0FFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCLENBRUE7O0lBRUUsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1osQ0FFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCLENBRUE7OztJQUdFLGFBQWE7RUFDZixDQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCLENBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUIsQ0FDQTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YsQ0FDQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEIsQ0FDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7RUFDakIsQ0FFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEIsQ0FFQTtJQUNFLG1CQUFtQjtFQUNyQixDQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCLENBRUE7SUFDRSxtQkFBbUI7RUFDckIsQ0FDQTtJQUNFLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDLENBRUE7SUFDSSwyQkFBMkI7QUFDL0IsQ0FDQTtJQUNJLHNCQUFzQjtBQUMxQixDQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5QixDQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQixDQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIsQ0FDQTtFQUNFLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsNkJBQTZCO0FBQy9CLENBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQixDQUNBO0lBQ0ksZUFBZTtBQUNuQixDQUVBO0lBQ0ksZUFBZTtBQUNuQixDQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCLENBQ0E7Q0FDQyxjQUFjO0FBQ2YsQ0FDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCLENBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWixDQUNBO0lBQ0ksY0FBYztFQUNoQixlQUFlO0FBQ2pCLENBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCLENBRUE7RUFDRSxTQUFTO0FBQ1gsQ0FDQTtFQUNFLFVBQVU7QUFDWixDQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIsQ0FDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCLENBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQixDQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIsQ0FDQTtFQUNFLDBCQUEwQjtBQUM1QixDQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakIsQ0FDQTtFQUNFLGVBQWU7QUFDakIsQ0FDQSxvRUFBb0UsQ0FFcEU7RUFDRTtJQUNFLFdBQVc7RUFDYjs7QUFFRixDQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7R0FDQztJQUNDLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0Esa0NBQWtDO0FBQ3BDLENBR0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQSxrQ0FBa0M7QUFDcEMsQ0FDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBweCxpbWd7bWF4LXdpZHRoOjEwMCV9LmFwcHgsLmhlYWRlcngsYm9keXtkaXNwbGF5OmZsZXh9LnNlYXJjaC1iYXIgaW5wdXQsYm9keXtmb250LWZhbWlseTpQb3BwaW5zLHNhbnMtc2VyaWZ9LmFwcHgsLnNlYXJjaC1iYXIgaW5wdXR7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NTAwfS5hcHB4LC53cmFwcGVye292ZXJmbG93OmhpZGRlbn0uY29udGVudC1idXR0b24sLmhlYWRlcngsLnNpZGUtbWVudXt3aGl0ZS1zcGFjZTpub3dyYXB9LmhtLXAgcCx0ZCx0aHt0ZXh0LWFsaWduOmxlZnR9Kiwuc2VhcmNocmVzdWx0cyAuY2FyZCxodG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLC5xdHktaW5wdXQgLnByb2R1Y3QtcXR5OmZvY3VzLC5xdHktaW5wdXQgLnF0eS1jb3VudDpmb2N1c3tvdXRsaW5lOjB9LnF0eS1pbnB1dCAucHJvZHVjdC1xdHksLnF1YW50aXR5IGlucHV0W3R5cGU9bnVtYmVyXXt0ZXh0LWFsaWduOmNlbnRlcjstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkfS5kcm9wZG93biB1bCBsaSBhLC5oZWFkZXItbWVudSBhLC5tZW51LWxpbmstbWFpbiwucG9wdXAtdHJpZ2dlciwuc2lkZS1tZW51IGEsYSNiYWNrLWJ1dHRvbjpob3ZlcixsaT5he3RleHQtZGVjb3JhdGlvbjpub25lfSN0cmlnZ2VyLC5hcHAtY2FyZCwuY29udGVudC1idXR0b24sLmNvbnRlbnQtc2VjdGlvbiB1bCwuZGFyay1saWdodCwuZHJvcGRvd24sLnF0eS1pbnB1dCAucXR5LWNvdW50LGxpPmEsc2VsZWN0e2N1cnNvcjpwb2ludGVyfTpyb290ey0tdGhlbWUtYmctY29sb3I6cmdiYSgxNiAxOCAyNyAvIDQwJSk7LS1ib3JkZXItY29sb3I6cmdiYSgxMTMgMTE5IDE0NCAvIDI1JSk7LS10aGVtZS1jb2xvcjojZjlmYWZiOy0taW5hY3RpdmUtY29sb3I6cmdiKDExMyAxMTkgMTQ0IC8gNzglKTstLWJvZHktZm9udDpcIlBvcHBpbnNcIixzYW5zLXNlcmlmOy0taG92ZXItbWVudS1iZzpyZ2JhKDEyIDE1IDI1IC8gMzAlKTstLWNvbnRlbnQtdGl0bGUtY29sb3I6Izk5OWJhNTstLWNvbnRlbnQtYmc6cmdiKDE0NiAxNTEgMTc5IC8gMTMlKTstLWJ1dHRvbi1pbmFjdGl2ZTpyZ2IoMjQ5IDI1MCAyNTEgLyA1NSUpOy0tZHJvcGRvd24tYmc6IzIxMjQyZDstLWRyb3Bkb3duLWhvdmVyOnJnYig0MiA0NiA2MCk7LS1wb3B1cC1iZzpyZ2IoMjIgMjUgMzcpOy0tc2VhcmNoLWJnOiMxNDE2MmI7LS1vdmVybGF5LWJnOnJnYmEoMzYsIDM5LCA1OSwgMC4zKTstLXNjcm9sbGJhci1iZzpyZ2IoMSAyIDMgLyA0MCUpfS5saWdodC1tb2Rley0tdGhlbWUtYmctY29sb3I6cmdiKDI1NSAyNTUgMjU1IC8gMzElKTstLXRoZW1lLWNvbG9yOiMzYzNhM2E7LS1pbmFjdGl2ZS1jb2xvcjojMzMzMzMzOy0tYnV0dG9uLWluYWN0aXZlOiMzYzNhM2E7LS1zZWFyY2gtYmc6cmdiKDI1NSAyNTUgMjU1IC8gMzElKTstLWRyb3Bkb3duLWJnOiNmN2Y3Zjc7LS1vdmVybGF5LWJnOnJnYigyNTUgMjU1IDI1NSAvIDMwJSk7LS1kcm9wZG93bi1ob3ZlcjpyZ2IoMjM2IDIzNiAyMzYpOy0tYm9yZGVyLWNvbG9yOnJnYigyNTUgMjU1IDI1NSAvIDM1JSk7LS1wb3B1cC1iZzpyZ2IoMjU1IDI1NSAyNTUpOy0taG92ZXItbWVudS1iZzpyZ2JhKDI1NSAyNTUgMjU1IC8gMzUlKTstLXNjcm9sbGJhci1iZzpyZ2IoMjU1IDI1MyAyNTMgLyA1NyUpOy0tY29udGVudC10aXRsZS1jb2xvcjotLXRoZW1lLWNvbG9yfWh0bWx7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZH1ib2R5e2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd2FsbHBhcGVyc2hvbWUuY29tL2ltYWdlcy93YWxscGFwZXJzL21hY29zLWJpZy1zdXItMTI4MHg3MjAtZGFyay13d2RjLTIwMjAtMjI2NTUuanBnKTtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MmVtO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHZofS52aWRlby1iZ3twb3NpdGlvbjpmaXhlZDtyaWdodDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnZpZGVvLWJnIHZpZGVve3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDpjb3ZlcjtvYmplY3QtZml0OmNvdmVyfS5kYXJrLWxpZ2h0e3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTo1MHB4O3JpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojMjEyNDJkO2JveC1zaGFkb3c6LTFweCAzcHggOHB4IC0xcHggcmdiYSgwLDAsMCwuMik7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czo1MCU7ei1pbmRleDozfSNkcm9wX2Rvd25fd2l0aF9saW5rcywuYXBweCwubm90aWZpY2F0aW9uLC5ub3RpZnl7cG9zaXRpb246cmVsYXRpdmV9LmFwcHgsLmNvbnRlbnQtc2VjdGlvbiB1bCBsaTpob3ZlciwubGlnaHQtbW9kZSAuY29udGVudC1zZWN0aW9uIHVse2JhY2tncm91bmQtY29sb3I6cmdiYSgxNiAxOCAyNyAvIDQwJSl9LmRhcmstbGlnaHQgc3Zne3dpZHRoOjI0cHg7ZmxleC1zaHJpbms6MDtmaWxsOiNmZmNlNDU7c3Ryb2tlOiNmZmNlNDU7dHJhbnNpdGlvbjouNXN9LmxpZ2h0LW1vZGUgLmRhcmstbGlnaHQgc3Zne2ZpbGw6dHJhbnNwYXJlbnQ7c3Ryb2tlOiNmOWZhZmJ9LmxpZ2h0LW1vZGUgLnByb2ZpbGUtaW1ne2JvcmRlcjoycHggc29saWQgcmdiYSgxNiAxOCAyNyAvIDQwJSl9LmxpZ2h0LW1vZGUgLnBvcC11cF9fdGl0bGV7Ym9yZGVyLWNvbG9yOiNmOWZhZmJ9LmxpZ2h0LW1vZGUgLmRyb3Bkb3duLmlzLWFjdGl2ZSB1bHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjk0KX1ib2R5LmxpZ2h0LW1vZGUgLnZpZGVvLWJnOmJlZm9yZSxib2R5LmxpZ2h0LW1vZGU6YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjcyKSAwLHJnYmEoMjU1LDI1NSwyNTUsLjQ1KSAxMDAlKTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgzKTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMyl9LmFwcHh7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7Ym9yZGVyLXJhZGl1czoxNHB4O2JhY2tkcm9wLWZpbHRlcjpibHVyKDIwcHgpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMjBweCk7bWFyZ2luOjAgYXV0b30uaGVhZGVyeHthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1zaHJpbms6MDtoZWlnaHQ6NThweDt3aWR0aDoxMDAlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMTEzIDExOSAxNDQgLyAyNSUpO3BhZGRpbmc6MCAzMHB4fS5jaGVja2JveCtsYWJlbCwuaGVhZGVyLW1lbnV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uaGVhZGVyLW1lbnUgYXtwYWRkaW5nOjIwcHggMzBweDtjb2xvcjpyZ2IoMTEzIDExOSAxNDQgLyA3OCUpO2JvcmRlci1ib3R0b206MnB4IHNvbGlkIHRyYW5zcGFyZW50O3RyYW5zaXRpb246LjNzfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpey5oZWFkZXItbWVudSBhOm5vdCgubWFpbi1oZWFkZXItbGluayl7ZGlzcGxheTpub25lfX0uaGVhZGVyLW1lbnUgYS5pcy1hY3RpdmUsLmhlYWRlci1tZW51IGE6aG92ZXJ7Y29sb3I6I2Y5ZmFmYjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjlmYWZifS5ub3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiMzYTZkZjA7d2lkdGg6NnB4O2hlaWdodDo2cHg7Ym9yZGVyLXJhZGl1czo1MCU7cmlnaHQ6MjBweDt0b3A6MTZweH0ubWVudS1jaXJjbGV7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmOTYwNTc7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzoyNHB4IDAgMCAwICNmOGNlNTIsNDhweCAwIDAgMCAjNWZjZjY1O21hcmdpbi1yaWdodDoxOTVweDtmbGV4LXNocmluazowfS5zZWFyY2gtYmFye2hlaWdodDo0MHB4O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO21heC13aWR0aDo0MDBweDtwYWRkaW5nLWxlZnQ6MTZweDtib3JkZXItcmFkaXVzOjRweH0uc2VhcmNoLWJhciBpbnB1dHt3aWR0aDoxMDAlO2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6IzE0MTYyYjtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjAgMjBweCAwIDQwcHg7Ym94LXNoYWRvdzowIDAgMCAycHggcmdiYSgxMzQsMTQwLDE2MCwuMDIpO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sIDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1Ni45NjYgNTYuOTY2JyBmaWxsPSclMjM3MTc3OTBjNyclM2UlM2NwYXRoIGQ9J001NS4xNDYgNTEuODg3TDQxLjU4OCAzNy43ODZBMjIuOTI2IDIyLjkyNiAwIDAwNDYuOTg0IDIzYzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMgMTAuMzE4LTIzIDIzIDEwLjMxOCAyMyAyMyAyM2M0Ljc2MSAwIDkuMjk4LTEuNDM2IDEzLjE3Ny00LjE2MmwxMy42NjEgMTQuMjA4Yy41NzEuNTkzIDEuMzM5LjkyIDIuMTYyLjkyLjc3OSAwIDEuNTE4LS4yOTcgMi4wNzktLjgzN2EzLjAwNCAzLjAwNCAwIDAwLjA4My00LjI0MnpNMjMuOTg0IDZjOS4zNzQgMCAxNyA3LjYyNiAxNyAxN3MtNy42MjYgMTctMTcgMTctMTctNy42MjYtMTctMTcgNy42MjYtMTcgMTctMTd6Jy8lM2UlM2Mvc3ZnJTNlXCIpO2JhY2tncm91bmQtc2l6ZToxNHB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjE2cHggNDglO2NvbG9yOiNmOWZhZmJ9LnNlYXJjaC1iYXIgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXJ7Zm9udC1mYW1pbHk6UG9wcGlucyxzYW5zLXNlcmlmO2NvbG9yOnJnYigxMTMgMTE5IDE0NCAvIDc4JSk7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NTAwfS5zZWFyY2gtYmFyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntmb250LWZhbWlseTpQb3BwaW5zLHNhbnMtc2VyaWY7Y29sb3I6cmdiKDExMyAxMTkgMTQ0IC8gNzglKTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo1MDB9LnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVye2ZvbnQtZmFtaWx5OlBvcHBpbnMsc2Fucy1zZXJpZjtjb2xvcjpyZ2IoMTEzIDExOSAxNDQgLyA3OCUpO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjUwMH0uaGVhZGVyLXByb2ZpbGV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjAgMTZweCAwIDQwcHg7bWFyZ2luLWxlZnQ6YXV0bztmbGV4LXNocmluazowfS5ub3RpZmljYXRpb24rc3ZnLC5wcm9maWxlLWltZ3ttYXJnaW4tbGVmdDoyMnB4fS5oZWFkZXItcHJvZmlsZSBzdmd7d2lkdGg6MjJweDtjb2xvcjojZjlmYWZiO2ZsZXgtc2hyaW5rOjB9Lm5vdGlmaWNhdGlvbi1udW1iZXJ7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjojM2E2ZGYwO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Zm9udC1zaXplOjEwcHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOiNmZmY7cmlnaHQ6LTZweDt0b3A6LTZweH0ucHJvZmlsZS1pbWd7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtib3JkZXItcmFkaXVzOjUwJTstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXI7Ym9yZGVyOjJweCBzb2xpZCAjZjlmYWZifSNtZW51LmNsb3NlZCwuY2hlY2tib3gsLndpZGUgLmhlYWRlci1tZW51LC53aWRlIC5oZWFkZXItcHJvZmlsZXtkaXNwbGF5Om5vbmV9LndpZGUgLnNlYXJjaC1iYXJ7bWF4LXdpZHRoOjYwMHB4O21hcmdpbjphdXRvO3RyYW5zaXRpb246LjRzO2JveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMTEzIDExOSAxNDQgLyAyNSUpO3BhZGRpbmctbGVmdDowfS53aWRlIC5tZW51LWNpcmNsZXttYXJnaW4tcmlnaHQ6MH0ud3JhcHBlcntkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjF9LmFwcHggc3Bhbix0Zm9vdCB0ZC50ZXh0LWNlbnRlcntjb2xvcjojZmZmfS5sZWZ0LXNpZGV7ZmxleC1iYXNpczozNSU7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDExMyAxMTkgMTQ0IC8gMjUlKTtwYWRkaW5nOjAgMTBweDtvdmVyZmxvdzphdXRvO2hlaWdodDoxMDB2aCFpbXBvcnRhbnQ7ZmxleC1zaHJpbms6MH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk0NXB4KXsubGVmdC1zaWRlLC5tZW51LWNpcmNsZSwubm90aWZpY2F0aW9uK3N2Z3tkaXNwbGF5Om5vbmV9fS5zaWRlLXdyYXBwZXIrLnNpZGUtd3JhcHBlcnttYXJnaW4tdG9wOjIwcHh9LnNpZGUtdGl0bGV7Y29sb3I6cmdiKDExMyAxMTkgMTQ0IC8gNzglKTttYXJnaW4tYm90dG9tOjE0cHh9LnNpZGUtbWVudXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zaWRlLW1lbnUgYXtjb2xvcjojZjlmYWZiO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MTBweDtmb250LXNpemU6MTRweDtib3JkZXItcmFkaXVzOjZweDt0cmFuc2l0aW9uOi4zc30uc2lkZS1tZW51IGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEyIDE1IDI1IC8gMzAlKX0uc2lkZS1tZW51IHN2Z3t3aWR0aDoxNnB4O21hcmdpbi1yaWdodDo4cHh9LnVwZGF0ZXN7cG9zaXRpb246cmVsYXRpdmU7dG9wOjA7cmlnaHQ6MDttYXJnaW4tbGVmdDphdXRvO3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7Zm9udC1zaXplOjExcHh9Lm1haW4taGVhZGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgxMTMgMTE5IDE0NCAvIDI1JSk7aGVpZ2h0OjU4cHg7ZmxleC1zaHJpbms6MH0ubWFpbi1oZWFkZXIgLmhlYWRlci1tZW51e21hcmdpbi1sZWZ0OjE1MHB4fS5tYWluLWhlYWRlciAuaGVhZGVyLW1lbnUgYXtwYWRkaW5nOjIwcHggMjRweH0ubWFpbi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MX0ubWVudS1saW5rLW1haW57Y29sb3I6I2Y5ZmFmYjtwYWRkaW5nOjAgMzBweH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwNTVweCl7Lm1lbnUtbGluay1tYWluLC5ub3RpZnl7ZGlzcGxheTpub25lfS5tYWluLWhlYWRlciAuaGVhZGVyLW1lbnV7bWFyZ2luOmF1dG99fS5jb250ZW50LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtjb2xvcjojZjlmYWZiO3BhZGRpbmc6MCAxMHB4O2hlaWdodDoxMDAlO292ZXJmbG93OmF1dG87YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2IDE4IDI3IC8gNDAlKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUxMHB4KXsuY29udGVudC13cmFwcGVye3BhZGRpbmc6MjBweH19LmNvbnRlbnQtd3JhcHBlci1oZWFkZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiaHR0cHM6Ly93d3cudHJhbnNwYXJlbnR0ZXh0dXJlcy5jb20vcGF0dGVybnMvY3ViZXMucG5nXCIpLGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsI2NmNGFmMywjZTczYmQ3LCNmNjMxYmMsI2ZkMzFhMiwjZmYzYThiLCNmZjRiNzgsI2ZmNWU2OCwjZmY3MDVjLCNmZjhjNTEsI2ZmYWE0OSwjZmZjODQ4LCNmZmU2NTIpO2JvcmRlci1yYWRpdXM6MTRweDtwYWRkaW5nOjIwcHggNDBweH0uY29udGVudC13cmFwcGVyLm92ZXJsYXl7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOi4zcztiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzYsMzksNTksLjMpfS5vdmVybGF5LWFwcHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDt0b3A6MDtwb2ludGVyLWV2ZW50czphbGw7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDM2LDM5LDU5LC44KTtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNpdGlvbjouM3N9Lm92ZXJsYXktYXBwLmlzLWFjdGl2ZSwucG9wLXVwLnZpc2libGV7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MX0uaW1nLWNvbnRlbnR7Zm9udC13ZWlnaHQ6NTAwO2ZvbnQtc2l6ZToxN3B4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjB9LmltZy1jb250ZW50IHN2Z3t3aWR0aDoyOHB4O21hcmdpbi1yaWdodDoxNHB4fS5jb250ZW50LXRleHR7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4O21hcmdpbi10b3A6MTZweDtsaW5lLWhlaWdodDoxLjdlbTtjb2xvcjojZWJlY2VjO2Rpc3BsYXk6LXdlYmtpdC1ib3g7LXdlYmtpdC1saW5lLWNsYW1wOjQ7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5jb250ZW50LXdyYXBwZXItY29udGV4dHttYXgtd2lkdGg6MzUwcHh9LmNvbnRlbnQtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzNhNmRmMDtib3JkZXI6bm9uZTtwYWRkaW5nOjhweCAyNnB4O2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoyMHB4O21hcmdpbi10b3A6MTZweDt0cmFuc2l0aW9uOi4zc30uY29udGVudC13cmFwcGVyLWltZ3t3aWR0aDoxODZweDstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXI7bWFyZ2luLXRvcDotMjVweDstby1vYmplY3QtcG9zaXRpb246Y2VudGVyO29iamVjdC1wb3NpdGlvbjpjZW50ZXJ9LmNvbnRlbnQtc2VjdGlvbnttYXJnaW4tdG9wOjMwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uLmNvbnRlbnQtc2VjdGlvbiB1bHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDYgMTUxIDE3OSAvIDEzJSk7cGFkZGluZy1sZWZ0OjA7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czoxNHB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgxNiAxOCAyNyAvIDQwJSl9LmNvbnRlbnQtc2VjdGlvbiB1bCBsaXtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzoxMHB4IDE4cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MTZweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3doaXRlLXNwYWNlOm5vd3JhcDt0cmFuc2l0aW9uOi4zc30uY29udGVudC1zZWN0aW9uIHVsIGxpOmhvdmVyOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6MTNweCAxM3B4IDAgMH0uY29udGVudC1zZWN0aW9uIHVsIGxpOmhvdmVyOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czowIDAgMTNweCAxM3B4fS5jb250ZW50LXNlY3Rpb24gdWwgbGkrbGl7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgxMTMgMTE5IDE0NCAvIDI1JSl9LmNvbnRlbnQtc2VjdGlvbiB1bCBzdmd7d2lkdGg6MjhweDtib3JkZXItcmFkaXVzOjZweDttYXJnaW4tcmlnaHQ6MTZweDtmbGV4LXNocmluazowfS5wcm9kdWN0c3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjE1MHB4fS5zdGF0dXN7bWFyZ2luLWxlZnQ6YXV0bzt3aWR0aDoxNDBweDtmb250LXNpemU6MTVweDtwb3NpdGlvbjpyZWxhdGl2ZX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KXsuc3RhdHVze2Rpc3BsYXk6bm9uZX19LnN0YXR1cy1jaXJjbGV7d2lkdGg6NnB4O2hlaWdodDo2cHg7YmFja2dyb3VuZC1jb2xvcjojMzk2ZGYwO3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3RvcDo0cHg7bGVmdDotMjBweH0uc3RhdHVzLWNpcmNsZS5ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiMzYmYwODN9LnN0YXR1cy1idXR0b257Zm9udC1zaXplOjE1cHg7bWFyZ2luLXRvcDowO3BhZGRpbmc6NnB4IDI0cHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozOTBweCl7LnN0YXR1cy1idXR0b257cGFkZGluZzo2cHggMTRweH19LnN0YXR1cy1idXR0b24ub3BlbntiYWNrZ3JvdW5kOjAgMDtjb2xvcjpyZ2IoMjQ5IDI1MCAyNTEgLyA1NSUpO2JvcmRlcjoxcHggc29saWR9LnN0YXR1cy1idXR0b246bm90KC5vcGVuKTpob3Zlcntjb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmfS5jb250ZW50LWJ1dHRvbjpub3QoLm9wZW4pOmhvdmVye2JhY2tncm91bmQ6IzFlNTlmMX0ubWVudXt3aWR0aDo1cHg7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDkgMjUwIDI1MSAvIDU1JSk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzo3cHggMCAwIDAgcmdiKDI0OSAyNTAgMjUxIC8gNTUlKSwxNHB4IDAgMCAwIHJnYigyNDkgMjUwIDI1MSAvIDU1JSk7bWFyZ2luOjAgMTJweH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxNXB4KXsuY29udGVudC13cmFwcGVyLWhlYWRlcntwYWRkaW5nOjIwcHh9LmFkb2JlLXByb2R1Y3QgLm1lbnV7ZGlzcGxheTpub25lfX0uZHJvcGRvd257cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjUzcHg7d2lkdGg6NDBweDt0b3A6LTI0cHg7ZGlzcGxheTpmbGV4O2xlZnQ6LTVweDtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6bm9uZX0uZHJvcGRvd24gdWwsLnBvcC11cHtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjB9LmRyb3Bkb3duIHVse2JhY2tncm91bmQ6IzIxMjQyZDtoZWlnaHQ6MTEwcHg7d2lkdGg6MTIwcHg7cmlnaHQ6MDt0b3A6MjBweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGV5KDEwcHgpO3RyYW5zaXRpb246LjRzfS5kcm9wZG93biB1bCBsaSBhe2NvbG9yOiNmOWZhZmI7Zm9udC1zaXplOjEycHh9LmRyb3Bkb3duLmlzLWFjdGl2ZSB1bHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YWxsO3RyYW5zZm9ybTp0cmFuc2xhdGV5KDI1cHgpfS5kcm9wZG93bi5pcy1hY3RpdmUgdWwgbGk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2IoNDIgNDYgNjApfS5idXR0b24td3JhcHBlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDt3aWR0aDoxODdweDttYXJnaW4tbGVmdDphdXRvfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpe2JvZHl7cGFkZGluZzouOGVtfS5oZWFkZXJ4e3BhZGRpbmc6MCAxNnB4fS5wcm9kdWN0c3t3aWR0aDoxMjBweH0uYnV0dG9uLXdyYXBwZXJ7d2lkdGg6YXV0b319LnBvcC11cHtwYWRkaW5nOjMwcHggNDBweDt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtvdmVyZmxvdy15OmF1dG87Ym94LXNoYWRvdzowIDZweCAzMHB4IHJnYmEoMCwwLDAsLjQpO3RyYW5zaXRpb246LjNzO3otaW5kZXg6MTA7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjIgMjUgMzcpO3dpZHRoOjUwMHB4O3Zpc2liaWxpdHk6aGlkZGVuO2JvcmRlci1yYWRpdXM6NnB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2hpdGUtc3BhY2U6bm9ybWFsfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTcwcHgpey5jb250ZW50LXdyYXBwZXItaW1ne3dpZHRoOjExMHB4fS5wb3AtdXB7d2lkdGg6MTAwJX19LnBvcC11cF9fdGl0bGV7cGFkZGluZy1ib3R0b206MjBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDExMyAxMTkgMTQ0IC8gMjUlKTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyfS5wb3AtdXBfX3N1YnRpdGxle3doaXRlLXNwYWNlOm5vcm1hbDttYXJnaW46MjBweCAwO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjhlbX0ucG9wLXVwX19zdWJ0aXRsZSBhe2NvbG9yOiNmOWZhZmJ9LmNvbnRlbnQtYnV0dG9uLXdyYXBwZXIgLmNvbnRlbnQtYnV0dG9uLnN0YXR1cy1idXR0b24ub3Blbi5jbG9zZXt3aWR0aDphdXRvfS5jb250ZW50LXNlY3Rpb24gLmNsb3Nle21hcmdpbi1yaWdodDowO3dpZHRoOjI0cHh9LmNoZWNrYm94LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9LmFwcC1jYXJkLC5mb290ZXJfcGFuZWwgdGQudGV4dC1jZW50ZXIsc3Bhbi5kYXRlLHNwYW4udGltZSx0aHtmb250LXNpemU6MTZweH0uY2hlY2tib3gtd3JhcHBlcisuY2hlY2tib3gtd3JhcHBlcnttYXJnaW46MjBweCAwIDQwcHh9LmNvbnRlbnQtYnV0dG9uLXdyYXBwZXIgLm9wZW4sc2VsZWN0e21hcmdpbi1yaWdodDo4cHh9LmNoZWNrYm94K2xhYmVsOmJlZm9yZXtjb250ZW50OlwiXCI7bWFyZ2luLXJpZ2h0OjEwcHg7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDtib3JkZXI6MXB4IHNvbGlkICNmOWZhZmI7Ym9yZGVyLXJhZGl1czo0cHg7Y3Vyc29yOnBvaW50ZXI7ZmxleC1zaHJpbms6MH0uY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojM2E2ZGYwO2JvcmRlci1jb2xvcjojM2E2ZGYwO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sIDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPSczJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNlJTNjcGF0aCBkPSdNMjAgNkw5IDE3bC01LTUnLyUzZSUzYy9zdmclM2VcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1zaXplOjEycHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5jb250ZW50LWJ1dHRvbi13cmFwcGVye21hcmdpbi10b3A6YXV0bzttYXJnaW4tbGVmdDphdXRvfS5hcHBzLWNhcmR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXdyYXA6d3JhcDt3aWR0aDpjYWxjKDEwMCUgKyA1MHB4KX0uYXBwLWNhcmR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDpjYWxjKDIwJSAtIDIwcHgpO21hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6cmdiKDE0NiAxNTEgMTc5IC8gMTMlKTtib3JkZXItcmFkaXVzOjE0cHg7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDE2IDE4IDI3IC8gNDAlKTtwYWRkaW5nOjIwcHg7dHJhbnNpdGlvbjouM3N9LmFwcC1jYXJkOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjAyKTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYgMTggMjcgLyA0MCUpfS5hcHAtY2FyZCBzdmd7d2lkdGg6MjhweDtib3JkZXItcmFkaXVzOjZweDttYXJnaW4tcmlnaHQ6MTJweDtmbGV4LXNocmluazowfXNwYW4uZGF0ZSxzcGFuLnVzZXJuYW1le21hcmdpbi1yaWdodDozMHB4fS5hcHAtY2FyZCBzcGFue2Rpc3BsYXk6YmxvY2s7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG99LmFwcC1jYXJkX19zdWJ0ZXh0e2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjZlbTttYXJnaW4tdG9wOjIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgxMTMgMTE5IDE0NCAvIDI1JSk7cGFkZGluZy1ib3R0b206MjBweH0uYXBwLWNhcmQtYnV0dG9uc3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXRvcDoxNnB4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTExMHB4KXsuYXBwLWNhcmR7d2lkdGg6Y2FsYyg1MCUgLSAyMHB4KX0uYXBwLWNhcmQ6bGFzdC1jaGlsZHttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWxlZnQ6MH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NjVweCl7LmFwcC1jYXJke3dpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO21hcmdpbi10b3A6MjBweH0uYXBwLWNhcmQrLmFwcC1jYXJke21hcmdpbi1sZWZ0OjB9fTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NnB4O2JvcmRlci1yYWRpdXM6MTBweH06Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQ6cmdiKDEgMiAzIC8gNDAlKTtib3JkZXItcmFkaXVzOjEwcHh9YnV0dG9uI3Jlc2V0LWJ1dHRvbnttYXJnaW4tcmlnaHQ6MzBweDtiYWNrZ3JvdW5kOiMzYTZkZjA7Y29sb3I6I2ZmZjtwYWRkaW5nOjEwcHggMTVweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6bm9uZTtsZXR0ZXItc3BhY2luZzoxcHh9YnV0dG9uI3Jlc2V0LWJ1dHRvbiBpLGkuZmEuZmEtYXJyb3ctbGVmdC5saW5rLWljb257bWFyZ2luLXJpZ2h0OjEwcHh9LmdyYW5kdG90YWx7YmFja2dyb3VuZDojMDAwO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjo1cHggMDtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjI2cHh9LmNvbC1zbS0xMi5jb2wtbWQtNHtkaXNwbGF5OmlubGluZS1mbGV4O3dpZHRoOjMzLjMzJX0uZm9vdGVyX3BhbmVsIGJ1dHRvbnt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxOHB4O3BhZGRpbmc6NXB4IDA7Zm9udC13ZWlnaHQ6NjAwfS5mb3JtLWdyb3VwLC5vbmVsaW5lLC5wcm9qZWN0cy1zZWN0aW9uLWhlYWRlci5hZGQtdXNlci50ZXh0Ym94e2Rpc3BsYXk6aW5saW5lLWZsZXh9c3Bhbi5jb2wtbWQtMy50ZXh0LWNlbnRlcnt3aWR0aDoyNSU7ZGlzcGxheTpibG9ja31idXR0b24jdXBkYXRlZmluYWx7cGFkZGluZzoycHggMTVweDtsaW5lLWhlaWdodDozMHB4fS5oNC0xNCBoNHtmb250LXNpemU6MTJweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo1cHh9dGFibGV7Zm9udC1mYW1pbHk6YXJpYWwsc2Fucy1zZXJpZjt3aWR0aDoxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtwYWRkaW5nOjFweCA1cHh9LmhtLXAgcHtwYWRkaW5nOjVweCA0cHh9dGQsdGh7cGFkZGluZzo4cHggNnB4fS50YWJsZS1iIHRkLC50YWJsZS1iIHRoe2JvcmRlcjoxcHggc29saWQgI2RkZH0uaG0tcCB0ZCwuaG0tcCB0aHtwYWRkaW5nOjNweCAwfS5jcm9wcGVke2Zsb2F0OnJpZ2h0O21hcmdpbi1ib3R0b206MjBweDtoZWlnaHQ6MTAwcHg7b3ZlcmZsb3c6aGlkZGVufS5jcm9wcGVkIGltZ3t3aWR0aDo0MDBweDttYXJnaW46OHB4IDAgMCA4MHB4fS5tYWluLXBkLXdyYXBwZXJ7Ym94LXNoYWRvdzowIDAgMTBweCAjZGRkO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzoxNXB4fSNjYXJvdXNlbC1jb250YWluZXIgLnN3aXBlci1zbGlkZSwuYnRuLWJsYWNrLGRpdiNjYXJvdXNlbC1jb250YWluZXJ7YmFja2dyb3VuZDojMDAwfS50YWJsZS1ib3JkZXJlZCB0ZCwudGFibGUtYm9yZGVyZWQgdGh7d29yZC1icmVhazpicmVhay1hbGw7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6MTBweDtmb250LXNpemU6MTRweH0uaW52b2ljZS1pdGVtc3tmb250LXNpemU6MTRweDtib3JkZXItdG9wOjFweCBkYXNoZWQgI2RkZH0uaWNvbmxlZnQgaSwucG9wdXAtdHJpZ2dlcntmb250LXNpemU6MThweH0uaW52b2ljZS1pdGVtcyB0ZHtwYWRkaW5nOjE0cHggMH0uYnRuLWJsYWNre2NvbG9yOiNmZmZ9LnF1YW50aXR5IC5idG57bGluZS1oZWlnaHQ6MjBweDttYXJnaW46MCA1cHg7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9I21lbnUsI3RyaWdnZXIsLnNlYXJjaHJlc3VsdHMgLmNhcmR7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5xdWFudGl0eSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwucXVhbnRpdHkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9LmFwcC1zaWRlYmFyIDo6YmVmb3Jle2ZvbnQtc2l6ZToyNHB4IWltcG9ydGFudH0jY2Fyb3VzZWwtY29udGFpbmVyIC5zd2lwZXItc2xpZGUgaDJ7Zm9udC1zaXplOjE0cHg7bWFyZ2luOjA7Zm9udC13ZWlnaHQ6NjAwO2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZmZmO3BhZGRpbmc6NXB4IDEwcHh9aW1nLnByb2ltYWdle21hcmdpbjogMHB4IGF1dG8gIWltcG9ydGFudDtkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O3dpZHRoOjEwMCU7aGVpZ2h0OiBhdXRvO30uc3dpcGVyLWNvbnRhaW5lcnt3aWR0aDo4NSU7b3ZlcmZsb3c6aGlkZGVufS5jYXRlZ29yeWFycm93LmNvbnRyb2xzLXNsaWRle2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MDt0b3A6OTAlfS5tb2RlbGFycm93LmNvbnRyb2xzLXNsaWRle2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MDt0b3A6MTI1JTt3aWR0aDoxMDAlfSNjYXJvdXNlbC1wcm9kdWN0c3ggLnN3aXBlci1zbGlkZXt3aWR0aDoyNSUhaW1wb3J0YW50O2hlaWdodDoxNTBweCFpbXBvcnRhbnQ7bWFyZ2luOjVweCAwfS5mb290ZXJfcGFuZWwgLmNvbC1tZC0zLC5mb290ZXJfcGFuZWwgLmNvbC1tZC00e3BhZGRpbmc6MCAycHh9LmlucHV0LWdyb3VwLXByZXBlbmR7cG9zaXRpb246cmVsYXRpdmU7bGVmdDoyMCU7ei1pbmRleDo5OX0uaW5wdXQtZ3JvdXAtYXBwZW5ke3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjIwJTt6LWluZGV4Ojk5fS5zd2lwZXItY29udGFpbmVyLnhtb2RlbHMuc3dpcGVyLWluaXRpYWxpemVkLnN3aXBlci1ob3Jpem9udGFse3dpZHRoOjg1JTttYXJnaW46MCBhdXRvfS5zd2lwZXItYnV0dG9uLXByZXYucHJldnhte2xlZnQ6LTc1JSFpbXBvcnRhbnQ7cG9zaXRpb246cmVsYXRpdmUhaW1wb3J0YW50fS5zd2lwZXItYnV0dG9uLW5leHQubmV4dHhte2xlZnQ6ODAlIWltcG9ydGFudH0uZm9vdGVyX3BhbmVsIC5mb3JtLWdyb3VwIGlucHV0e21hcmdpbi1ib3R0b206NXB4fXNwYW4jYnV0dG9udXBkYXRle2JvdHRvbTotMTVweDtwb3NpdGlvbjpyZWxhdGl2ZX0ucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIuYWRkLXVzZXIudGV4dGJveHt6LWluZGV4Ojk5OTk7YmFja2dyb3VuZDowIDA7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tdG9wOjB9LmhlYWRlci1yaWdodHtwb3NpdGlvbjpmaXhlZDtib3JkZXI6MXB4IHNvbGlkICNmMmYyZjI7YmFja2dyb3VuZDojZmZmO3otaW5kZXg6OTk5OX10YWJsZSNpbnZvaWNlLXRhYmxlIHRkLHRhYmxlI2ludm9pY2UtdGFibGUgdGh7cGFkZGluZy1sZWZ0OjEwcHghaW1wb3J0YW50O2NvbG9yOiNmZmYhaW1wb3J0YW50fS5tcjV7bWFyZ2luLXJpZ2h0OjVweH1zcGFuI2RhdGV7bWFyZ2luLXJpZ2h0OjIwcHh9LnBvcHVwLXRyaWdnZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxNzBweDtyaWdodDoycmVtO21hcmdpbjozZW0gYXV0bzt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO3BhZGRpbmc6MXJlbSAycmVtO2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLXJhZGl1czo1MGVtO2JhY2tncm91bmQ6IzM1YTc4NTtib3gtc2hhZG93OjAgM3B4IDAgcmdiYSgwLDAsMCwuMDcpO3RyYW5zaXRpb246LjNzfS5xdHktaW5wdXQsdGZvb3QgdGQudGV4dC1jZW50ZXIgaXtjb2xvcjojMDAwfS5wb3B1cC10cmlnZ2VyOmhvdmVye29wYWNpdHk6Ljh9LnBvcHVwe3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDt0b3A6NDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTAwMDt3aWR0aDoxMDAlO3RyYW5zaXRpb246LjVzfS5wb3B1cC5pcy12aXNpYmxle29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7dHJhbnNpdGlvbjoxc30ucG9wdXAtY29udGFpbmVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zaXRpb246LjVzO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOm1heC1jb250ZW50O21hcmdpbjoyZW0gYXV0bzt0b3A6NSU7cGFkZGluZzoycmVtO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOi4yNWVtIC4yNWVtIC40ZW0gLjRlbTtib3gtc2hhZG93OjAgMCAyMHB4IHJnYmEoMCwwLDAsLjIpfS5pcy12aXNpYmxlIC5wb3B1cC1jb250YWluZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNpdGlvbjouNXN9LnBvcHVwLWNvbnRhaW5lciAucG9wdXAtY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7dG9wOjhweDtmb250LXNpemU6MDtyaWdodDo4cHg7d2lkdGg6MzBweDtoZWlnaHQ6MzBweH0ucG9wdXAtY29udGFpbmVyIC5wb3B1cC1jbG9zZTo6YWZ0ZXIsLnBvcHVwLWNvbnRhaW5lciAucG9wdXAtY2xvc2U6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMnB4O3dpZHRoOjE0cHg7aGVpZ2h0OjNweDtiYWNrZ3JvdW5kLWNvbG9yOiM4ZjljYjV9LnBvcHVwLWNvbnRhaW5lciAucG9wdXAtY2xvc2U6OmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2xlZnQ6OHB4fS5wb3B1cC1jb250YWluZXIgLnBvcHVwLWNsb3NlOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstbW96LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7cmlnaHQ6OHB4fS5wb3B1cC1jb250YWluZXIgLnBvcHVwLWNsb3NlOmhvdmVyOmFmdGVyLC5wb3B1cC1jb250YWluZXIgLnBvcHVwLWNsb3NlOmhvdmVyOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMzNWE3ODU7dHJhbnNpdGlvbjouM3N9LnRleHQtbGVmdHt0ZXh0LWFsaWduOmxlZnR9YSNmdWxsc2NyZWVuLWJ1dHRvbjpob3ZlcixhI29wZW5jYWxjdWxhdG9yOmhvdmVye2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZmZmfWRpdiNzZWFyY2hSZXN1bHRzQ29udGFpbmVyIGgye2ZvbnQtc2l6ZToxNHB4fS5zZWFyY2hyZXN1bHRze21hcmdpbi10b3A6NSU7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwJX1kaXYjc2VhcmNoUmVzdWx0c0NvbnRhaW5lcnt3aWR0aDo2MCUhaW1wb3J0YW50O21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2I3BhZ2luYXRpb254e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjYwJX0uc2VhcmNocmVzdWx0cyAuY2FyZHtib3JkZXI6MXB4IHNvbGlkICNjY2M7cGFkZGluZzo1cHggMTBweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MTBweCAwO2hlaWdodDoxODBweH1hI2JhY2stYnV0dG9ue3dpZHRoOm1heC1jb250ZW50O2JhY2tncm91bmQ6IzAwMDtib3JkZXItcmFkaXVzOjEwcHg7Y29sb3I6I2ZmZjtwYWRkaW5nOjAgMjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDotMTAlO3RvcDoxMDAlO21hcmdpbjowIGF1dG87ZGlzcGxheTpub25lfWEjYmFjay1idXR0b246aG92ZXJ7Zm9udC1zaXplOjE2cHh9LnF0eS1pbnB1dCAucHJvZHVjdC1xdHksLnF0eS1pbnB1dCAucXR5LWNvdW50e2JhY2tncm91bmQ6MCAwO2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZTppbmhlcml0O2JvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDowO2hlaWdodDoyLjVyZW07bGluZS1oZWlnaHQ6MX0ucXR5LWlucHV0IC5wcm9kdWN0LXF0eXt3aWR0aDo1MHB4O21pbi13aWR0aDowO2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7YXBwZWFyYW5jZTp0ZXh0ZmllbGR9LnF0eS1pbnB1dCAucHJvZHVjdC1xdHk6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sLnF0eS1pbnB1dCAucHJvZHVjdC1xdHk6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO21hcmdpbjowfS5xdHktaW5wdXQgLnF0eS1jb3VudHtwYWRkaW5nOjA7d2lkdGg6Mi41cmVtO2ZvbnQtc2l6ZToxLjI1ZW07dGV4dC1pbmRlbnQ6LTEwMHB4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ucXR5LWlucHV0IC5xdHktY291bnQ6YWZ0ZXIsLnF0eS1pbnB1dCAucXR5LWNvdW50OmJlZm9yZXtjb250ZW50OlwiXCI7aGVpZ2h0OjJweDt3aWR0aDoxMHB4O3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDojMDAwO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO21hcmdpbjphdXRvfS5xdHktaW5wdXQgLnF0eS1jb3VudC0tbWludXN7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZTJlMmUyfS5xdHktaW5wdXQgLnF0eS1jb3VudC0tYWRke2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZTJlMmUyfS5xdHktaW5wdXQgLnF0eS1jb3VudC0tYWRkOmFmdGVye3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5xdHktaW5wdXQgLnF0eS1jb3VudDpkaXNhYmxlZHtjb2xvcjojY2NjO2JhY2tncm91bmQ6I2YyZjJmMjtjdXJzb3I6bm90LWFsbG93ZWQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5xdHktaW5wdXQgLnF0eS1jb3VudDpkaXNhYmxlZDphZnRlciwucXR5LWlucHV0IC5xdHktY291bnQ6ZGlzYWJsZWQ6YmVmb3Jle2JhY2tncm91bmQ6I2NjY30ucXR5LWlucHV0e2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDFlbSAyZW0gLS45ZW0gcmdiYSgwLDAsMCwuNyl9LmJ4LGxpPmF7Y29sb3I6IzMzM30uY29tcG9uZW50c19jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoxNnB4fSN0cmlnZ2VyLC5zZWxlY3RfY29tcG9uZW50e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXh9LnNlbGVjdF9jb21wb25lbnR7aGVpZ2h0OjQwcHg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLXJhZGl1czo4cHg7Ym9yZGVyOjJweCBzb2xpZCAjZTllOWU5O21hcmdpbjowIGF1dG87YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MCAxMHB4fXNlbGVjdHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO3BhZGRpbmc6MTBweH0uYnh7Zm9udC1zaXplOjIwcHh9I3RyaWdnZXJ7Ym9yZGVyOjJweCBzb2xpZCAjZTllOWU5O3BhZGRpbmc6MTBweCAxNHB4O2dhcDo4cHg7Ym9yZGVyLXJhZGl1czo4cHh9I21lbnV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjQ2cHg7bGVmdDowO3dpZHRoOjE4MHB4O2JvcmRlcjoxcHggc29saWQgI2U5ZTllOTtib3JkZXItcmFkaXVzOjhweDtib3gtc2hhZG93OjAgNXB4IDE1cHggcmdiYSgwLDAsMCwuMTUpO3BhZGRpbmc6OHB4O3RyYW5zaXRpb246LjVzIGVhc2UtaW59bGk+YXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MTBweH0uc2VsZWN0X2NvbXBvbmVudDpmb2N1cy12aXNpYmxlLHNlbGVjdDpmb2N1cy12aXNpYmxle2JvcmRlci1yYWRpdXM6OHB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpfSN0cmlnZ2VyOmZvY3VzLXZpc2libGUsbGk+YTpmb2N1cy12aXNpYmxle2JvcmRlci1yYWRpdXM6OHB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpfSN0cmlnZ2VyOmhvdmVyLC5zZWxlY3RfY29tcG9uZW50OmhvdmVyLGxpPmE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSk7Ym9yZGVyLXJhZGl1czo0cHh9dGZvb3QgaW5wdXR7bWFyZ2luLXRvcDogNXB4O3BhZGRpbmc6MTBweDt3aWR0aDoxMDAlfWkuZmEuZmEtcmVmcmVzaHtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzoxMHB4fS5hcHBzLWNhcmQuY2F0ZWdvcnlzZWN0aW9ue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTowO2JhY2tncm91bmQ6IzAwMH0uY2F0ZWdvcnlzZWN0aW9uIC5hcHAtY2FyZHtwYWRkaW5nOiAxNXB4O3dpZHRoOm1heC1jb250ZW50IWltcG9ydGFudDtjb2xvcjojZmZmIWltcG9ydGFudDttYXJnaW46NXB4IWltcG9ydGFudDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9LmNhdGVnb3J5c2VjdGlvbiBzcGFue2ZvbnQtc2l6ZTogMjBweDt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7bWFyZ2luOjAgYXV0bztjb2xvcjojZmZmfS5hcHAtY2FyZCsuYXBwLWNhcmR7bWFyZ2luOjVweCAwfS5jb250ZW50LXNlY3Rpb257aGVpZ2h0OjgwdmghaW1wb3J0YW50O292ZXJmbG93LXk6c2Nyb2xsO292ZXJmbG93LXg6aGlkZGVuIWltcG9ydGFudH0uY29udGVudC1zZWN0aW9uLXRpdGxle3BhZGRpbmc6IDVweCAwcHg7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7Zm9udC1zaXplOjI4cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtd2VpZ2h0OjYwMH0uZm9vdGVyX3BhbmVse2JvdHRvbTowJTtwb3NpdGlvbjpmaXhlZDtoZWlnaHQ6IDQwJTt9YnV0dG9uI29wZW51c2VyYWRke2JhY2tncm91bmQ6IzAwMDtib3JkZXI6bm9uZTtsaW5lLWhlaWdodDozMHB4O2NvbG9yOiNmZmY7cGFkZGluZzowIDE1cHg7Ym9yZGVyLXJhZGl1czo1cHh9LnNlbGVjdF9jb21wb25lbnQ6aG92ZXJ7YmFja2dyb3VuZDojZjBmOGZmIWltcG9ydGFudH0jaW52b2ljZS10YWJsZSBpLmZhLmZhLWNsb3NlLnRleHQtZGFuZ2Vye21hcmdpbi1sZWZ0OjE1cHh9Lmljb25sZWZ0e2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kOiMwMDA7cGFkZGluZzo1cHggMjBweDttYXJnaW4tcmlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjVweH0ucG9wdXAgbGFiZWwudGV4dC1sZWZ0e3dpZHRoOjEwMCU7ZGlzcGxheTpibG9ja30ucG9wdXAgLmZvcm0tZ3JvdXB7bGluZS1oZWlnaHQ6MzVweDtoZWlnaHQ6MzVweDttYXJnaW46NXB4IDB9LnBvcHVwIHNlbGVjdHtib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KX0jbWFudWFsZm9ybSAuZm9ybS1ncm91cCxmb3JtI3VzZXJwb3N0e3dpZHRoOjEwMCV9I2dlbmVyYWxmb3JtIGJ1dHRvbi5idG4uYnRuLXByaW1hcnksI21hbnVhbGZvcm0gYnV0dG9uLmJ0bi5idG4tcHJpbWFyeXt3aWR0aDoxMDAlO2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NXB4fSN1c2VyZm9ybSAuZm9ybS1ncm91cHt3aWR0aDoxMDAlIWltcG9ydGFudH0jdXNlcmZvcm0gaW5wdXR7d2lkdGg6MTAwJTtwYWRkaW5nOjEwcHggMDtsaW5lLWhlaWdodDozNXB4O2ZvbnQtc2l6ZToxOHB4fSN1c2VyZm9ybSBidXR0b24uYnRuLmJ0bi1wcmltYXJ5e2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZmZmO3dpZHRoOjEwMCU7Ym9yZGVyLXJhZGl1czo1cHh9c3Bhbi5wcmljZXRhZ3t0ZXh0LWFsaWduOiBjZW50ZXI7ZGlzcGxheTogYmxvY2sgIUlNUE9SVEFOVDttYXJnaW4tdG9wOiAxMHB4O30uYXBwLWNhcmQgc3BhbiBoM3tmb250LXNpemU6IDE4cHg7bWFyZ2luOiAwcHggIWltcG9ydGFudDtjb2xvcjp3aGl0ZTt0ZXh0LWFsaWduOiBjZW50ZXI7fXRmb290IHRkLnRleHQtY2VudGVyIHt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2ZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O310Zm9vdCBpbnB1dCB7Zm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOm5vbmU7fWkuZmEuZmEtcmVmcmVzaCB7YmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtjb2xvcjogd2hpdGUgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA1cHg7fS5zaWRlLXdyYXBwZXIge292ZXJmbG93LXg6IGhpZGRlbjtkaXNwbGF5OiBibG9jaztvdmVyZmxvdy15OiBzY3JvbGw7aGVpZ2h0OiA2MHZoO30ubmV3Y2F0c2VjdGlvbiAuYXBwLWNhcmQge3dpZHRoOiBtYXgtY29udGVudDtmb250LXNpemU6IDIwcHg7cGFkZGluZzogMTBweDt9XHJcblxyXG5cclxuLnNtYWxsLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1pbmktdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICBcclxuICAuY2FsYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxjLWRpc3BsYXkge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuY2FsYy1rZXkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIH1cclxuICBcclxuICAuY2FsYy1rZXkgPiAqIHtcclxuICAgIHBhZGRpbmc6IDEuMjVlbSAxLjI1ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxjLWtleSA+ICo6YWN0aXZlOjpiZWZvcmUsXHJcbiAgLmNhbGMta2V5ID4gLmlzLWRlcHJlc3NlZDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICM4RUM1RkM7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLm51bXBhZCBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLm51bXBhZCBidXR0b246aG92ZXIsXHJcbiAgLm51bXBhZCBidXR0b246YWN0aXZlLFxyXG4gIC5udW1wYWQgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1wYWQgLmtleS1vcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICB9XHJcbiAgXHJcbiAgLm51bXBhZCAua2V5LWVxIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGdyaWQtY29sdW1uOiAtMjtcclxuICAgIGdyaWQtcm93OiAyL3NwYW4gNDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW5saW5lLWZsZXgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hhbmdlZHVle1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiByZ2IoMTEsIDc3LCAxMSk7XHJcbn1cclxuICAubnVtcGFkIC50aGVtZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1heC13aWR0aDogMTBlbTtcclxuICB9XHJcbiAgXHJcbiAgLm51bXBhZCAuc3dpdGNoIHtcclxuICAgIHBhZGRpbmc6IDEuMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAub3B0MSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xyXG4gIH1cclxuICBcclxuICAub3B0MiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWMyN2IwO1xyXG4gIH1cclxuICBcclxuICAub3B0MyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gIH1cclxuICAubnVtcGFkIGJ1dHRvbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2sgIUlNUE9SVEFOVDtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhSU1QT1JUQU5UO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9wdXAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3B1cCBmb3JtIHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI21hbnVhbGZvcm0gaW5wdXQsI21hbnVhbGZvcm0gc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNtYW51YWxmb3JtIGxhYmVsLnRleHQtbGVmdCB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiNtYW51YWxmb3JtIGJ1dHRvbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiNtYW51YWxmb3JtIGJ1dHRvbi5udW1wYWQge1xyXG4gIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNtYW51YWxmb3JtIGJ1dHRvbi5idG4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMGUwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbnRhYmxlIGkuZmEuZmEtcGVuY2lsIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxudGFibGUgaS5mYS5mYS1jbG9zZS50ZXh0LWRhbmdlciB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuYS5iYWNrdG9ob21lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmEuYmFja3RvaG9tZSBpe1xyXG4gZm9udC1zaXplOjI4cHg7XHJcbn1cclxuI2xvb2t1cGZvcm0gYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSwjc2VydmljZWZvcm0gYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSwjcGhvbmVmb3JtIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6MzVweDtcclxufVxyXG4jbG9va3VwZm9ybSBpbnB1dCwjc2VydmljZWZvcm0gaW5wdXQsI3Bob25lZm9ybSBpbnB1dHtcclxuICBoZWlnaHQ6YXV0bztcclxuICBsaW5lLWhlaWdodDozNXB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuI2xvb2t1cGZvcm0gbGFiZWwsI3NlcnZpY2Vmb3JtIGxhYmVsLCNwaG9uZWZvcm0gbGFiZWx7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICBmb250LXdlaWdodDo1MDA7XHJcbn1cclxuI2xvb2t1cGZvcm0gLmZvcm0tZ3JvdXAsI3NlcnZpY2Vmb3JtIC5mb3JtLWdyb3VwLCNwaG9uZWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2xvb2t1cGZvcm0gLnBvcHVwLWNvbnRhaW5lciwjc2VydmljZWZvcm0gLnBvcHVwLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6MzAlO1xyXG59XHJcbiNwaG9uZWZvcm0gLnBvcHVwLWNvbnRhaW5lcntcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbmltZy50ZXh0LWNlbnRlciB7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaWNvbmxlZnQubWcxMCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjYTkwMTAxO1xyXG59XHJcbi5waG9uZXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5waG9uZWVycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAwMzAzMzM7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ubWd0MzB7XHJcbiAgbWFyZ2luLXRvcDozMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3Bhbi5wcmljZXRhZyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiNwaG9uZWZvcm0gbGFiZWx7XHJcbiAgbWFyZ2luOjEwcHggMHB4O1xyXG59XHJcbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIGJldHdlZW4gNDgxcHggYW5kIDc2OHB4IChlLmcuLCB0YWJsZXRzKSAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUzN3B4KSBhbmQgKG1heC13aWR0aDogMTgwMHB4KSB7XHJcbiAgLmZvb3Rlcl9wYW5lbCB7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkgYW5kIChtYXgtd2lkdGg6IDE1MzZweCkge1xyXG4gIC5sZWZ0LXNpZGV7XHJcbiAgICBmbGV4LWJhc2lzOjM1JTtcclxuICB9XHJcbiAgLmNvbnRlbnQtd3JhcHBlcntcclxuICAgIHBhZGRpbmc6MCAyMHB4O1xyXG4gIH1cclxuICAuY29udGVudC1zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgIC5hcHAtY2FyZHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5mb290ZXJfcGFuZWwge1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgfVxyXG4gIC8qIEFkanVzdCBvdGhlciBzdHlsZXMgYXMgbmVlZGVkICovXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTk5cHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHtcclxuICAubGVmdC1zaWRle1xyXG4gICAgZmxleC1iYXNpczo0MCU7XHJcbiAgfVxyXG4gIC5jb250ZW50LXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjAgMjBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQtc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5hcHAtY2FyZHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5mb290ZXJfcGFuZWwge1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgfVxyXG4gIC8qIEFkanVzdCBvdGhlciBzdHlsZXMgYXMgbmVlZGVkICovXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcclxuICAubGVmdC1zaWRle1xyXG4gICAgZmxleC1iYXNpczo0MCU7XHJcbiAgfVxyXG4gIC5jb250ZW50LXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjAgMjBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQtc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5hcHAtY2FyZHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5mb290ZXJfcGFuZWwge1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgfVxyXG4gIC8qIEFkanVzdCBvdGhlciBzdHlsZXMgYXMgbmVlZGVkICovXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales',
                templateUrl: './sales.component.html',
                styleUrls: ['./sales.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = '1POS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [["id", "clickSound"], ["src", "assets/music/click.mp3", "type", "audio/mpeg"], ["id", "successSound"], ["src", "assets/music/success.mp3", "type", "audio/mpeg"], ["id", "errorSound"], ["src", "assets/music/error.mp3", "type", "audio/mpeg"], [1, "bgmain"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "audio", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your browser does not support the audio element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "audio", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your browser does not support the audio element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "audio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Your browser does not support the audio element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAGK":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function ReportsComponent_div_8_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r5.stats.total_due, "");
} }
function ReportsComponent_div_8_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_8_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r7.stats.total_refund, "");
} }
function ReportsComponent_div_8_h2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_8_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r9.stats.today_total, "");
} }
function ReportsComponent_div_8_h2_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_8_h2_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.stats.total_orders);
} }
function ReportsComponent_div_8_h2_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_8_h2_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.stats.new_customers_today);
} }
function ReportsComponent_div_8_h2_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_8_h2_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.stats.total_customers);
} }
function ReportsComponent_div_8_h2_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportsComponent_div_8_h2_3_Template, 2, 1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_8_h2_4_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReportsComponent_div_8_h2_8_Template, 2, 1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReportsComponent_div_8_h2_9_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Refunded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportsComponent_div_8_h2_13_Template, 2, 1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReportsComponent_div_8_h2_14_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Today's Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReportsComponent_div_8_h2_18_Template, 2, 1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReportsComponent_div_8_h2_19_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Total Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportsComponent_div_8_h2_23_Template, 2, 1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReportsComponent_div_8_h2_24_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ReportsComponent_div_8_h2_28_Template, 2, 1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReportsComponent_div_8_h2_29_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_due != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_due == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_refund != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_refund == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.today_total != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.today_total == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_orders != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_orders === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.new_customers_today != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.new_customers_today == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_customers != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_customers == null);
} }
function ReportsComponent_div_21_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.apiResponse["5c"]);
} }
function ReportsComponent_div_21_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](0.05 * ctx_r18.apiResponse["5c"]);
} }
function ReportsComponent_div_21_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.apiResponse["10c"]);
} }
function ReportsComponent_div_21_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](0.1 * ctx_r20.apiResponse["10c"]);
} }
function ReportsComponent_div_21_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.apiResponse["25c"]);
} }
function ReportsComponent_div_21_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](0.25 * ctx_r22.apiResponse["25c"]);
} }
function ReportsComponent_div_21_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.apiResponse["1d"]);
} }
function ReportsComponent_div_21_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](1 * ctx_r24.apiResponse["1d"]);
} }
function ReportsComponent_div_21_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.apiResponse["2d"]);
} }
function ReportsComponent_div_21_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2 * ctx_r26.apiResponse["2d"]);
} }
function ReportsComponent_div_21_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.apiResponse["5d"]);
} }
function ReportsComponent_div_21_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](5 * ctx_r28.apiResponse["5d"]);
} }
function ReportsComponent_div_21_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.apiResponse["10d"]);
} }
function ReportsComponent_div_21_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](10 * ctx_r30.apiResponse["10d"]);
} }
function ReportsComponent_div_21_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.apiResponse["20d"]);
} }
function ReportsComponent_div_21_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](20 * ctx_r32.apiResponse["20d"]);
} }
function ReportsComponent_div_21_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.apiResponse["50d"]);
} }
function ReportsComponent_div_21_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](50 * ctx_r34.apiResponse["50d"]);
} }
function ReportsComponent_div_21_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.apiResponse["100d"]);
} }
function ReportsComponent_div_21_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](100 * ctx_r36.apiResponse["100d"]);
} }
function ReportsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "5c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReportsComponent_div_21_td_14_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReportsComponent_div_21_td_15_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "10c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReportsComponent_div_21_td_19_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReportsComponent_div_21_td_20_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "25c");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReportsComponent_div_21_td_24_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReportsComponent_div_21_td_25_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReportsComponent_div_21_td_29_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReportsComponent_div_21_td_30_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ReportsComponent_div_21_td_34_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReportsComponent_div_21_td_35_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "5$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReportsComponent_div_21_td_39_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReportsComponent_div_21_td_40_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ReportsComponent_div_21_td_44_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReportsComponent_div_21_td_45_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "20$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ReportsComponent_div_21_td_49_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ReportsComponent_div_21_td_50_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "50$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ReportsComponent_div_21_td_54_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ReportsComponent_div_21_td_55_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "100$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ReportsComponent_div_21_td_59_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ReportsComponent_div_21_td_60_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.apiResponse);
} }
function ReportsComponent_div_22_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User ID: ", ctx_r37.clockin.user_id, "");
} }
function ReportsComponent_div_22_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User Name: ", ctx_r38.clockin.username, "");
} }
function ReportsComponent_div_22_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx_r39.clockin.total, "");
} }
function ReportsComponent_div_22_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created At: ", ctx_r40.clockin.created_at, "");
} }
function ReportsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportsComponent_div_22_p_1_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportsComponent_div_22_p_2_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportsComponent_div_22_p_3_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_22_p_4_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clockin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clockin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clockin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clockin);
} }
function ReportsComponent_div_23_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start : ", ctx_r41.clockin.created_at, " ");
} }
function ReportsComponent_div_23_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.stats.total_refund);
} }
function ReportsComponent_div_23_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_23_div_115_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r49.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r49.total_sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r49.total);
} }
function ReportsComponent_div_23_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportsComponent_div_23_div_115_tr_11_Template, 7, 3, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r47 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r47.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r47.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 3, ctx_r44.getCategoryTotal(group_r47.products), "1.2-2"));
} }
function ReportsComponent_div_23_div_116_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r51.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r51.total_sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r51.total);
} }
function ReportsComponent_div_23_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportsComponent_div_23_div_116_tr_11_Template, 7, 3, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 2, ctx_r45.servicetotal, "1.2-2"));
} }
function ReportsComponent_div_23_div_117_tr_11_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", product_r53.total, "");
} }
function ReportsComponent_div_23_div_117_tr_11_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r53.total);
} }
function ReportsComponent_div_23_div_117_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportsComponent_div_23_div_117_tr_11_td_5_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportsComponent_div_23_div_117_tr_11_td_6_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r53.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r53.product_type == "phonebuy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r53.product_type == "phonesell");
} }
function ReportsComponent_div_23_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportsComponent_div_23_div_117_tr_11_Template, 7, 3, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 2, ctx_r46.phonetotal, "1.2-2"));
} }
function ReportsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Closing Sale Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReportsComponent_div_23_p_12_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No. Of Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "HST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "NET TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "REFUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ReportsComponent_div_23_span_56_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ReportsComponent_div_23_span_57_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "CREDIT NOTE ISSUED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "BREAKDOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "CARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Giftcard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "PointsRedeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "NET CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "TOTAL CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "PAYOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "NET CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Printed on 09/30/2023 @ 20:20:44 by Sohaib");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ReportsComponent_div_23_div_115_Template, 19, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ReportsComponent_div_23_div_116_Template, 19, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ReportsComponent_div_23_div_117_Template, 19, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.settings.storename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx_r3.settings.address, " * ", ctx_r3.settings.city, " * ", ctx_r3.settings.state, " * ", ctx_r3.settings.postalcode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.settings.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clockin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("End : ", ctx_r3.currentDate, " ", ctx_r3.currentTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.today_total - ctx_r3.buytotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.today_total - ctx_r3.buytotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.stats.total_refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.stats.total_refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_cash - ctx_r3.buytotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_card);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_giftcard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_cash - ctx_r3.buytotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](-ctx_r3.buytotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.clockin.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.groupedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.servicetotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.phones && ctx_r3.phonetotal != 0);
} }
function ReportsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "100$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.selectors("100d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r60.inputValues["100d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "50$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.selectors("50d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r62.inputValues["50d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "20$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.selectors("20d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r64.inputValues["20d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "10$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.selectors("10d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r66.inputValues["10d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "5$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.selectors("5d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r68.inputValues["5d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.selectors("2d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r70.inputValues["2d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.selectors("1d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r72.inputValues["1d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "25C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.selectors("25c"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r74.inputValues["25c"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "10C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.selectors("10c"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r76.inputValues["10c"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportsComponent_div_24_Template_input_change_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.selectors("5c"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_88_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r78.inputValues["5c"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.onNumberClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.onNumberClicked(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.onNumberClicked(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.onNumberClicked(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.onNumberClicked(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.onNumberClicked(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.onNumberClicked(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.onNumberClicked(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.onNumberClicked(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.onNumberClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_118_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.onDeleteClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "DEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.onClearClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](130, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_131_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.updatevalues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "UPDATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["100d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 21, ctx_r4.calculateTotalFor("100d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["50d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 24, ctx_r4.calculateTotalFor("50d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["20d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 27, ctx_r4.calculateTotalFor("20d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["10d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 30, ctx_r4.calculateTotalFor("10d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["5d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 33, ctx_r4.calculateTotalFor("5d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["2d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 36, ctx_r4.calculateTotalFor("2d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["1d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 39, ctx_r4.calculateTotalFor("1d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["25c"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 42, ctx_r4.calculateTotalFor("25c"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["10c"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 45, ctx_r4.calculateTotalFor("10c"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["5c"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](91, 48, ctx_r4.calculateTotalFor("5c"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](130, 51, ctx_r4.totalSum, "1.2-2"), "");
} }
class ReportsComponent {
    constructor(http, router, cdr // Inject ChangeDetectorRef
    ) {
        this.http = http;
        this.router = router;
        this.cdr = cdr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.userid = localStorage.getItem('userid');
        this.selector = '5c';
        this.groupedProducts = [];
        this.clockinview = true;
        this.summaryview = false;
        this.phonetotal = 0.00;
        this.activePage = 'clockin'; // Set the default active page
        this.servicetotal = 0.00;
        this.closedayview = false;
        this.buytotal = 0.00;
        this.inputValues = {
            '5c': '',
            '10c': '',
            '25c': '',
            '50c': '',
            '1d': '',
            '2d': '',
            '5d': '',
            '10d': '',
            '20d': '',
            '50d': '',
            '100d': ''
        };
        this.totalSum = 0;
    }
    ngOnInit() {
        this.updateTime();
        this.checkauth();
        this.getreports();
        this.getsettings();
    }
    getsettings() {
        this.http.get(`${this.apiUrl}get-general-settings`).subscribe((data) => {
            // Load general settings data from the server response
            this.settings = data;
        });
    }
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                if (response.error === false) {
                    if (response.clockin === false) {
                        this.router.navigate(['clockin']);
                    }
                    //this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['']);
                }
            }, (error) => {
                console.error('Error during login:', error);
            });
        }
        else {
            this.router.navigate(['']);
        }
    }
    viewpage(pagename) {
        if (pagename == "clockin") {
            this.clockinview = true;
            this.summaryview = false;
            this.closedayview = false;
        }
        if (pagename == "current") {
            this.clockinview = false;
            this.summaryview = true;
            this.closedayview = false;
        }
        if (pagename == "closedayview") {
            this.clockinview = false;
            this.summaryview = false;
            this.closedayview = true;
        }
        this.activePage = pagename;
    }
    groupProductsByCategory() {
        // Create a Map to group products by category
        const groupedProducts = new Map();
        for (const item of this.summary) {
            const category = item.category_name;
            if (!groupedProducts.has(category)) {
                groupedProducts.set(category, []);
            }
            groupedProducts.get(category).push(item);
        }
        // Convert the Map to an array
        this.groupedProducts = Array.from(groupedProducts, ([category, products]) => ({ category, products }));
    }
    getreports() {
        this.http.get(this.apiUrl + 'getreport').subscribe((response) => {
            if (response.error === false) {
                this.clockin = response.mydata;
                this.apiResponse = JSON.parse(response.mydata.bills);
                this.stats = response.stats;
                this.summary = response.summary;
                this.groupProductsByCategory();
                this.services = response.service;
                for (const service of this.services) {
                    this.servicetotal += parseFloat(service.osubtotal);
                }
                this.phones = response.phone;
                for (const phone of this.phones) {
                    if (phone.product_type === 'phonesell') {
                        // If the product type is 'phonesell', add the subtotal to phonetotal
                        this.phonetotal += parseFloat(phone.osubtotal);
                    }
                    else if (phone.product_type === 'phonebuy') {
                        this.buytotal += parseFloat(phone.osubtotal);
                        // If the product type is 'phonebuy', subtract the subtotal from phonetotal
                        this.phonetotal -= parseFloat(phone.osubtotal);
                    }
                }
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    getCategoryTotal(products) {
        return products.reduce((total, product) => total + parseFloat(product.total), 0);
    }
    updateTime() {
        const updateClock = () => {
            const now = new Date();
            this.currentDate = now.toLocaleDateString();
            this.currentTime = now.toLocaleTimeString();
            this.cdr.detectChanges(); // Trigger change detection manually
        };
        // Call updateClock initially
        updateClock();
        // Set up a timer to update the time every second
        setInterval(updateClock, 1000);
    }
    selectors(s) {
        this.selector = s;
        this.calculateTotalSum();
    }
    onNumberClicked(value) {
        if (this.selector && this.inputValues[this.selector] !== undefined) {
            this.inputValues[this.selector] += value.toString();
        }
        this.calculateTotalSum();
    }
    // Function to handle delete button click
    onDeleteClicked() {
        if (this.selector && this.inputValues[this.selector] !== undefined) {
            this.inputValues[this.selector] = this.inputValues[this.selector].slice(0, -1);
        }
        this.calculateTotalSum();
    }
    // Function to handle clear button click
    onClearClicked() {
        if (this.selector && this.inputValues[this.selector] !== undefined) {
            this.inputValues[this.selector] = '';
        }
        this.calculateTotalSum();
    }
    calculateTotalSum() {
        this.totalSum = 0;
        for (const key in this.inputValues) {
            if (this.inputValues.hasOwnProperty(key)) {
                this.totalSum += this.calculateTotalFor(key); // Use the previously defined function
            }
        }
    }
    updatevalues() {
        this.calculateTotalSum();
        const data = {
            userid: this.userid,
            bills: this.inputValues,
            type: 'clock-out',
            total: this.totalSum
        };
        this.http.post(this.apiUrl + 'updatebills', data).subscribe((response) => {
            if (response.success === true) {
                //this.printclockoutreport();
                this.printbillcount(response.report);
                // Handle success
                this.router.navigate(['home']);
            }
            else {
                // Handle error
                console.log('Error:', response.error);
            }
        }, (error) => {
            // Handle HTTP error
            console.error('HTTP Error:', error);
        });
    }
    printbillcount(billcount) {
        const bills = JSON.parse(billcount.bills);
        const printDocument = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>TILL COUNT</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>
  <body>
    <div class="container">
    <div class="row">
    <div class="col-md-12 text-center">
      <h1>TILL COUNT</h1>
      <h3>STATION #: MAIN-PC</h3>
      <h4>DATE : ${billcount.created_at}</h4>
      <h4>REPORT BY : ${billcount.user_id}</h4>
      <hr><hr>
    
      <table class="table table-bordered">
          <tr>
              <td>BILLS</td>
              <td>QTY</td>
              <td>TOTAL</td>
          </tr>
          <tr>
              <td>$100</td>
              <td>${bills['100d']}</td>
              <td>${100 * bills['100d']}</td>
          </tr>
          <tr>
          <td>$50</td>
          <td>${bills['50d']}</td>
          <td>${50 * bills['50d']}</td>
          </tr>
          <tr>
          <td>$20</td>
          <td>${bills['20d']}</td>
          <td>${20 * bills['20d']}</td>
          </tr>
          <tr>
          <td>$10</td>
          <td>${bills['10d']}</td>
          <td>${10 * bills['10d']}</td>
          </tr>
          <tr>
          <td>$5</td>
          <td>${bills['5d']}</td>
          <td>${5 * bills['5d']}</td>
          </tr>
          <tr>
          <td>$2</td>
          <td>${bills['2d']}</td>
          <td>${2 * bills['2d']}</td>
          </tr>
          <tr>
          <td>$1</td>
          <td>${bills['1d']}</td>
          <td>${1 * bills['1d']}</td>
          </tr>
          <tr>
          <td>25c</td>
          <td>${bills['25c']}</td>
          <td>${0.25 * bills['25c']}</td>
          </tr>
          <tr>
          <td>10c</td>
          <td>${bills['10c']}</td>
          <td>${0.10 * bills['10c']}</td>
          </tr>
          <tr>
          <td>5c</td>
          <td>${bills['5c']}</td>
          <td>${0.05 * bills['5c']}</td>
          </tr>
          <tr>
          <td>TOTAL ROLLS</td>
          <td></td>
          <td>0.00</td>
          </tr>
          <tr>
          <td>TOTAL Till</td>
          <td></td>
          <td>${billcount.total}</td>
          </tr>
          <tr>
          <td>START TILL FLOAT</td>
          <td></td>
          <td>0.00</td>
          </tr>
          <tr>
          <td>TOTALCASH SALE</td>
          <td></td>
          <td>${billcount.total}</td>
          </tr>
          <tr>
          <td>END FLOAT</td>
          <td></td>
          <td>0.00</td>
          </tr>
          <tr>
          <td>CASH SUBMITTED</td>
          <td></td>
          <td>${billcount.total}</td>
          </tr>
      </table>
      </div>
  </div>
  </div>
</body>
</html>
`;
        fetch('http://127.0.0.1:5000/print_html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ htmlContent: printDocument }),
        })
            .then(response => {
            if (response.status === 200) {
                console.log('Print request sent successfully.');
            }
            else {
                console.error('Failed to send print request.');
            }
        })
            .catch(error => {
            console.error('Error while sending print request:', error);
        });
        this.printDayClose();
    }
    printDayClose() {
        const printDocument = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Day Close Report</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container">
        <div class="row">
        <div class="col-md-12 text-center">
          <h1>${this.settings.storename} </h1>
          <p>${this.settings.address} * ${this.settings.city} * ${this.settings.state} * ${this.settings.postalcode}<br>
         </p>
          <h4>${this.settings.phone}</h4>
          <hr><hr>
          <h2>Closing Sale Report</h2>
          <p>Start : ${this.clockin.created_at} </p>
          <p>End : ${this.currentDate} ${this.currentTime}</p>
          <h3 class="titleprint">Total Sale</h3>
          <table class="table table-bordered">
              <tr>
                  <td>No. Of Order</td>
                  <td><span> ${this.stats.total_orders}</span></td>
              </tr>
              <tr>
                  <td>Subtotal</td>
                  <td><span>${this.stats.total_subtotal}</span></td>
              </tr>
              <tr>
                  <td>HST</td>
                  <td><span>${this.stats.total_tax}</span></td>
              </tr>
          </table>
         
          <hr> <hr>
          <table class="table table-bordered">
              <tr>
                  <td><b>TOTAL</b></td>
                  <td><span class="titleprint">${this.stats.today_total}</span></td>
              </tr>
              <tr>
                  <td><b>FORWARD</b></td>
                  <td><span class="titleprint">0.00</span></td>
              </tr>
              <tr>
                  <td><b>PREPAID</b></td>
                  <td><span class="titleprint">0.00</span></td>
              </tr>
              <hr>
              <tr>
                  <td><b>NET TOTAL</b></td>
                  <td><span class="titleprint">${this.stats.today_total}</span></td>
              </tr>
              <tr>
                  <td><b>REFUND</b></td>
                  <td><span class="titleprint" *ngIf="this.stats.total_refund">${this.stats.total_refund}</span>
                  <span class="titleprint" *ngIf="!this.stats.total_refund">0.00</span></td>
                  
              </tr>
          </table>
          <h3 class="titleprint">CREDIT NOTE ISSUED</h3>
          <table  class="table table-bordered">
              <tr>
                  <td>0.00</td>
              </tr>
          </table>
          <h3 class="titleprint">BREAKDOWN</h3>
          <table  class="table table-bordered">
              <tr>
                  <td><b>CASH</b></td>
                  <td><span>${this.stats.total_cash}</span></td>
              </tr>
              <tr>
                  <td><b>CARD</b></td>
                  <td><span>${this.stats.total_card}</span></td>
              </tr>
              <tr>
                  <td><b>Giftcard</b></td>
                  <td><span>${this.stats.total_giftcard}</span></td>
              </tr>
              <tr>
                  <td><b>PointsRedeem</b></td>
                  <td><span>${this.stats.total_points}</span></td>
              </tr>
          </table>
          <h3 class="titleprint">NET CASH</h3>
          <table  class="table table-bordered">
              <tr>
                  <td>TOTAL CASH</td>
                  <td>PAYOUT</td>
                  <td>NET CASH</td>
              </tr>
              <tr>
                  <td>${this.stats.total_cash}</td>
                  <td>0.00</td>
                  <td>${this.clockin.total}</td>
              </tr>
          </table>
         
          <p>Printed on 09/30/2023 @ 20:20:44 by Sohaib</p>
      </div>
      
     
      </div>
    </body>
    </html>
  `;
        fetch('http://127.0.0.1:5000/print_html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ htmlContent: printDocument }),
        })
            .then(response => {
            if (response.status === 200) {
                console.log('Print request sent successfully.');
                const productsHtml = this.groupedProducts.map((group) => `
        <h3 class="titleprint">${group.category}</h3>
        <table class="table table-bordered">
          <tr>
            <th>Product Name</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
          ${group.products.map((product) => `
            <tr>
              <td>${product.product_name}</td>
              <td>${product.total_sold}</td>
              <td>${product.total}</td>
            </tr>
          `).join('')}
          <tr>
            <td></td><td>TOTAL</td><td>${this.getCategoryTotal(group.products).toFixed(2)}</td>
          </tr>
        </table>
    `).join('');
                // Define the second page content (productsHtml)
                const secondPageDocument = `
          <!DOCTYPE html>
          <html>
          <head>
            <title>Day Close Report (Page 2)</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          </head>
          <body>
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  ${productsHtml}
                </div>
              </div>
            </div>
          </body>
          </html>
        `;
                fetch('http://127.0.0.1:5000/print_html', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ htmlContent: printDocument }),
                })
                    .then(response => {
                    if (response.status === 200) {
                        console.log('Print request sent successfully.');
                    }
                    else {
                        console.error('Failed to send print request.');
                    }
                })
                    .catch(error => {
                    console.error('Error while sending print request:', error);
                });
            }
            else {
                console.error('Failed to send print request.');
            }
        })
            .catch(error => {
            console.error('Error while sending print request:', error);
        });
    }
    calculateTotalFor(coinOrBill) {
        const inputValue = parseFloat(this.inputValues[coinOrBill]);
        if (!isNaN(inputValue)) {
            if (coinOrBill.endsWith('c')) {
                // Cents
                let coinOrBillx = parseFloat(coinOrBill.replace('c', ''));
                coinOrBillx = coinOrBillx / 100;
                return coinOrBillx * inputValue;
            }
            else if (coinOrBill.endsWith('d')) {
                // Dollars
                let coinOrBillx = parseFloat(coinOrBill.replace('d', ''));
                return coinOrBillx * inputValue;
            }
        }
        return 0; // Default value if the input is not a valid number
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 25, vars: 11, consts: [[1, "reports"], [1, "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], ["class", "row", "id", "order-history", 4, "ngIf"], [1, "container", "ht100"], [1, "row"], [1, "nav", "nav-tabs"], [1, "nav", "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "click"], ["class", "col-md-8", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "order-history", 1, "row"], [1, "row", "order-summary"], [1, "totalspent-orders"], [4, "ngIf"], [1, "printqty-orders"], [1, "mtd-orders"], [1, "ytd-orders"], [1, "col-md-8"], [1, "table", "table-bordered"], [1, "col-md-4"], [1, "col-md-4", "text-center"], [1, "titleprint"], [1, "myclosing", "table", "table-bordered"], ["class", "titleprint", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "value", "5", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "value", "12", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "value", "2", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "value", "1", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["type", "number", "value", "0", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "x"], [1, "pane"], [1, "input-box"], [1, "numeric-keypad-box"], [1, "number-box", "row"], [1, "btn", "num-btn", "col-md-3", 3, "click"], [1, "btn", "num-btn", "num-btn-delete", "col-md-3", 3, "click"], [1, "btn", "num-btn", "num-btn-clear", "col-md-3", 3, "click"], [1, "btn", "btn-primary", "black", 3, "click"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReportsComponent_div_8_Template, 32, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_a_click_13_listener() { return ctx.viewpage("clockin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Clock In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_a_click_16_listener() { return ctx.viewpage("current"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_a_click_19_listener() { return ctx.viewpage("closedayview"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Day Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReportsComponent_div_21_Template, 61, 20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReportsComponent_div_22_Template, 5, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportsComponent_div_23_Template, 118, 26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReportsComponent_div_24_Template, 133, 54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "clockin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePage === "closedayview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clockinview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clockinview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closedayview);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active:focus, .btn.active.focus[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active.focus {\r\n  outline: 0;\r\n}\r\n\r\n\r\n\r\n.input-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: auto;\r\n  padding: 0px;\r\n}\r\n\r\n\r\n\r\n.number-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 12px 10px 10px 10px;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border: 1px transparent solid;\r\n  border-radius: 4px;\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n\r\n.btn.black[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  font-size: 32px;\r\n}\r\n\r\n\r\n\r\n.num-btn[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  border-radius: 0;\r\n  border-color: transparent;\r\n  background-color: white;\r\n  color: black;\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  margin-bottom: 4px;\r\n  font-size: 50px;\r\n}\r\n\r\n\r\n\r\n.num-btn-clear[_ngcontent-%COMP%] {\r\n  background-color: #fc5185;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.num-btn-delete[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  background-color: #1bd1a5;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.num-btn-back[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  background-color: #44cef6;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.ht100[_ngcontent-%COMP%]{\r\n  height: 70vh;\r\n}\r\n\r\n\r\n\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n\r\n\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n\r\n\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n\r\n\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n\r\n\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n\r\n\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n\r\n\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n\r\n\r\n\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n\r\n\r\n\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n\r\n\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n\r\n\r\n\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n\r\n\r\n\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n\r\n\r\n\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n\r\n\r\n\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n\r\n\r\n\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n\r\n\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\n\r\n\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n\r\n\r\n\r\n.titleprint[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: #fff;\r\n    margin:10px 0px;\r\n  }\r\n\r\n\r\n\r\n.myclosing[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 10px 0px;\r\n}\r\n\r\n\r\n\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 15%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin: 0px auto;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n\r\n\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n\r\n\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\n\r\n\r\n\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\n\r\n\r\n\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\n\r\n\r\n\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\n\r\n\r\n\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\n\r\n\r\n\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7RUFNRSxVQUFVO0FBQ1o7Ozs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7OztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7Ozs7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOzs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7Ozs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7OztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7O0FBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7OztBQUNBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7Ozs7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCOzs7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7OztBQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7Ozs7QUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOzs7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7Ozs7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7OztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUc5QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjs7OztBQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCOzs7O0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7Ozs7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7Ozs7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7Ozs7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOzs7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COzs7O0FBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7Ozs7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7Ozs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFHWixnQkFBZ0I7SUFDaEIsMEpBQTBKO0lBQzFKLDBCQUEwQjtFQUM1Qjs7OztBQUVBLDhCQUE4Qjs7OztBQUM5QjtJQUNFLGFBQWE7SUFDYiwwQ0FBMEM7RUFDNUM7Ozs7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7OztBQUNEO0lBQ0csaUJBQWlCO0FBQ3JCOzs7O0FBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOzs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjs7OztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOzs7O0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7OztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7OztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7OztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCOzs7O0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7Ozs7QUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtFQUNkOzs7O0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7Ozs7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7OztBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0VBQ2Q7Ozs7QUFDQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7Ozs7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOzs7O0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7Ozs7QUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7Ozs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCOzs7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9COzs7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOzs7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bjpmb2N1cyxcclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjphY3RpdmU6Zm9jdXMsXHJcbi5idG4uYWN0aXZlLmZvY3VzLFxyXG4uYnRuLmFjdGl2ZTpmb2N1cyxcclxuLmJ0bjphY3RpdmUuZm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmlucHV0LWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5cclxuLm51bWJlci1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMnB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uYnRuLmJsYWNre1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4ubnVtLWJ0biB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLm51bS1idG4tY2xlYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYzUxODU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubnVtLWJ0bi1kZWxldGUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYmQxYTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubnVtLWJ0bi1iYWNrIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRjZWY2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmh0MTAwe1xyXG4gIGhlaWdodDogNzB2aDtcclxufVxyXG4uc2VhcmNoLW9yZGVycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4gIC5vcmRlci1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gXHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyX3NvcnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgdWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgNTBweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpLmZpcnN0IHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JhZGE1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbiAgLmRvd25sb2FkLWFsbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsIGEuYWxsLWhpc3Rvcnkge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGw6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXNvcnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItc29ydGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzVweCA1cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ3dBTEFKRUFBQUFBQVAvLy94VVZGZi8vL3lINUJBRUFBQU1BTEFBQUFBQUxBQXNBQUFJVW5DMm5LTG5UNG9yMDBQdnlyUXdyUHpVWnNoUUFPdz09KSA5NiUvMTUlIG5vLXJlcGVhdCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENBVVRJT046IElFIGhhY2tlcnkgYWhlYWQgKi9cclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qIHJlbW92ZSBkZWZhdWx0IGFycm93IG9uIGllMTAgYW5kIGllMTEgKi9cclxuICB9XHJcbiAgLnRpdGxlcHJpbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIH1cclxuIC5teWNsb3NpbmcgdGQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuICAub3JkZXItc3VtbWFyeSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2JhZGE1NTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBpbWc6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjODg4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5idG4tZGVmYXVsdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5lcnJvci10aXRsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzMzAwO1xyXG4gICAgY29sb3I6ICNmZjMzMDA7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5wcm9kdWN0LXRpdGxlIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggYS5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuICBpbnB1dCNzZWFyY2gtbWUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICBcclxufVxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24ub3JkZXItbnVtYmVyLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmEuYmFja3RvaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales/sales.component */ "RTsG");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reports.component */ "ZAGK");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "70H3");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customers/customers.component */ "4yXv");
/* harmony import */ var _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./receipts/receipts.component */ "nOX8");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _refund_refund_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refund/refund.component */ "1ubg");
/* harmony import */ var _clockin_clockin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clockin/clockin.component */ "x+K7");
/* harmony import */ var _clockout_clockout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clockout/clockout.component */ "OexK");
/* harmony import */ var _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./globalsettings/globalsettings.component */ "msXc");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "JYil");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
























 // Import MatDialogModule



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _sales_sales_component__WEBPACK_IMPORTED_MODULE_8__["SalesComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
        _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__["CustomersComponent"],
        _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptsComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"],
        _refund_refund_component__WEBPACK_IMPORTED_MODULE_17__["RefundComponent"],
        _clockin_clockin_component__WEBPACK_IMPORTED_MODULE_18__["ClockinComponent"],
        _clockout_clockout_component__WEBPACK_IMPORTED_MODULE_19__["ClockoutComponent"],
        _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_20__["GlobalsettingsComponent"],
        _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _sales_sales_component__WEBPACK_IMPORTED_MODULE_8__["SalesComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                    _customers_customers_component__WEBPACK_IMPORTED_MODULE_14__["CustomersComponent"],
                    _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptsComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"],
                    _refund_refund_component__WEBPACK_IMPORTED_MODULE_17__["RefundComponent"],
                    _clockin_clockin_component__WEBPACK_IMPORTED_MODULE_18__["ClockinComponent"],
                    _clockout_clockout_component__WEBPACK_IMPORTED_MODULE_19__["ClockoutComponent"],
                    _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_20__["GlobalsettingsComponent"],
                    _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "msXc":
/*!************************************************************!*\
  !*** ./src/app/globalsettings/globalsettings.component.ts ***!
  \************************************************************/
/*! exports provided: GlobalsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalsettingsComponent", function() { return GlobalsettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalsettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GlobalsettingsComponent.ɵfac = function GlobalsettingsComponent_Factory(t) { return new (t || GlobalsettingsComponent)(); };
GlobalsettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalsettingsComponent, selectors: [["app-globalsettings"]], decls: 2, vars: 0, template: function GlobalsettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "globalsettings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbHNldHRpbmdzL2dsb2JhbHNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalsettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-globalsettings',
                templateUrl: './globalsettings.component.html',
                styleUrls: ['./globalsettings.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nOX8":
/*!************************************************!*\
  !*** ./src/app/receipts/receipts.component.ts ***!
  \************************************************/
/*! exports provided: ReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsComponent", function() { return ReceiptsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ReceiptsComponent_div_10_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r4.stats.total_due, "");
} }
function ReceiptsComponent_div_10_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReceiptsComponent_div_10_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r6.stats.total_refund, "");
} }
function ReceiptsComponent_div_10_h2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReceiptsComponent_div_10_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r8.stats.today_total, "");
} }
function ReceiptsComponent_div_10_h2_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReceiptsComponent_div_10_h2_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.stats.total_orders);
} }
function ReceiptsComponent_div_10_h2_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReceiptsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReceiptsComponent_div_10_h2_3_Template, 2, 1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReceiptsComponent_div_10_h2_4_Template, 2, 0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReceiptsComponent_div_10_h2_8_Template, 2, 1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReceiptsComponent_div_10_h2_9_Template, 2, 0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Refunded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReceiptsComponent_div_10_h2_13_Template, 2, 1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReceiptsComponent_div_10_h2_14_Template, 2, 0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Today's Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReceiptsComponent_div_10_h2_18_Template, 2, 1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReceiptsComponent_div_10_h2_19_Template, 2, 0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Total Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_due != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_due == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_refund != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_refund == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.today_total != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.today_total == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_orders != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stats.total_orders === null);
} }
function ReceiptsComponent_div_18_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_div_18_tr_38_Template_i_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const order_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.printReceipt(order_r13.orderId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r13.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r13.imei, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r13.created_at);
} }
function ReceiptsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_div_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.getAvailablePhones(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Available Phones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_div_18_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.getphonereceipts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Phones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S.no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "IMEI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Emp Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReceiptsComponent_div_18_tr_38_Template, 29, 13, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.phones);
} }
function ReceiptsComponent_div_19_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_div_19_tr_22_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const order_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.viewpage(order_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_div_19_tr_22_Template_i_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const order_r21 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.getonereceipt(order_r21.orderId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r21.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r21.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.calculateTotal(order_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r21.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r21.created_at);
} }
function ReceiptsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReceiptsComponent_div_19_tr_22_Template, 18, 6, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.orders);
} }
function ReceiptsComponent_div_20_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
} if (rf & 2) {
    const order_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r27.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r27.item_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r27.item_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r27.item_subtotal);
} }
function ReceiptsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Order Notes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mode of Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Card Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Gift Card Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cash Payment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Discount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Points Redeemed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Change Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ReceiptsComponent_div_20_tr_74_Template, 9, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Total Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "SUBTOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "TAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.userid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.notes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.modeOfPayment[0].modeofpayment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.card, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.giftcard, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getcashtotal(ctx_r3.orderinfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.pointsRedeem, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.changeamount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.orderinfo.order_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderinfo.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderinfo.subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderinfo.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderinfo.total);
} }
class ReceiptsComponent {
    constructor(http, router, cdr // Inject ChangeDetectorRef
    ) {
        this.http = http;
        this.router = router;
        this.cdr = cdr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.userid = localStorage.getItem('userid');
        this.selector = '5c';
        this.ordertable = true;
        this.groupedProducts = [];
        this.clockinview = true;
        this.summaryview = false;
        this.orderview = false;
        this.phonetable = false;
        this.activePage = 'clockin'; // Set the default active page
        this.servicetotal = 0.00;
        this.closedayview = false;
        this.myfooter = '';
    }
    ngOnInit() {
        this.updateTime();
        this.checkauth();
        this.getreceipts();
        this.getreports();
        this.getsettings();
    }
    getreports() {
        this.http.get(this.apiUrl + 'getreport').subscribe((response) => {
            if (response.error === false) {
                this.stats = response.stats;
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    getsettings() {
        this.http.get(`${this.apiUrl}get-general-settings`).subscribe((data) => {
            // Load general settings data from the server response
            this.settings = data;
        });
    }
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                if (response.error === false) {
                    if (response.clockin === false) {
                        this.router.navigate(['clockin']);
                    }
                    //this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['']);
                }
            }, (error) => {
                console.error('Error during login:', error);
            });
        }
        else {
            this.router.navigate(['']);
        }
    }
    viewpage(orderid) {
        this.ordertable = false;
        this.orderview = true;
        this.phonetable = false;
        const data = {
            orderid: orderid
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(this.apiUrl + 'getorder', data, { headers }).subscribe((response) => {
            if (response.error === false) {
                try {
                    // Parse the order_items JSON string into an array
                    response.orderinfo.order_items = JSON.parse(response.orderinfo.order_items);
                }
                catch (error) {
                    console.error('Error parsing order_items:', error);
                }
                this.orderinfo = response.orderinfo;
                console.log(this.orderinfo.order_items);
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    getcashtotal(orderinfo) {
        return parseFloat(orderinfo.cash) + parseFloat(orderinfo.changeamount);
    }
    getreceipts() {
        this.orderinfo = false;
        this.ordertable = true;
        this.phonetable = false;
        this.http.get(this.apiUrl + 'getreceipt').subscribe((response) => {
            if (response.error === false) {
                this.orders = response.orders;
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    getphonereceipts() {
        this.orderinfo = false;
        this.ordertable = false;
        this.phonetable = true;
        this.http.get(this.apiUrl + 'getphonereceipt').subscribe((response) => {
            if (response.error === false) {
                this.phones = response.orders;
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    getAvailablePhones() {
        this.orderinfo = false;
        this.ordertable = false;
        this.phonetable = true;
        // Make an HTTP request to get all phone receipts
        this.http.get(`${this.apiUrl}get-available-phones`).subscribe((data) => {
            // Load general settings data from the server response
            this.phones = data;
        });
    }
    calculateTotal(order) {
        return parseFloat(order.card) + parseFloat(order.cash) + parseFloat(order.giftcard) + parseFloat(order.pointsRedeem);
    }
    getservicereceipts() {
        this.orderinfo = false;
        this.ordertable = true;
        this.phonetable = false;
        this.http.get(this.apiUrl + 'getservicereceipt').subscribe((response) => {
            if (response.error === false) {
                this.orders = response.orders;
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    getonereceipt(orderId) {
        const data = {
            id: orderId
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(this.apiUrl + 'getonereceipt', data, { headers }).subscribe((response) => {
            if (response.error === false) {
                console.log(response.receipt);
                //c Parse the order_items JSON string into an array
                this.printReceipt(response.receipt, response.type);
                //this.router.navigate(['']);
            }
            else {
                alert("Invalid Id");
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    printHtml(receiptHtml) {
        const url = 'http://127.0.0.1:5000/print_html';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const body = { htmlContent: receiptHtml, printername: this.settings.printername };
        this.http.post(url, body, { headers, observe: 'response' }).subscribe((response) => {
            if (response.status === 200) {
                console.log('Print request sent successfully.');
            }
            else {
                console.error('Failed to send print request.');
            }
        }, (error) => {
            console.error('Error while sending print request:', error);
        });
    }
    printReceipt(receiptData, type) {
        if (type == "Product") {
            this.myfooter = this.settings.salefooter;
        }
        if (type == "Service") {
            this.myfooter = this.settings.repairfooter;
        }
        if (type == "Phone") {
            this.myfooter = this.settings.phonefooter;
        }
        // Construct the receipt HTML template using the provided receiptData
        const productsHtml = receiptData.items.map((item) => `
      <tr>
        <td>${item.quantity}</td>
        <td>${item.product_name}</td>
        <td>${item.unit_price}</td>
        <td></td>
        <td>${item.line_total}</td>
      </tr>`).join('');
        const receiptHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt</title>
        <style type="text/css" media="print">
          @page {
            size: 72mm;
            margin: 0;
            height: max-content;
          }
          table {
            width: 100%;
          }
          table tr td {
            text-align: center;
          
          }
          .table-header tr {
           border:5px solid black;
           }
          hr{
            line-height:2px;
          }
        </style>
      </head>
      <body>
        <h2>${receiptData.order_id}</h2>
        <p>${this.settings.storename}</p>
        <p>${this.settings.address} • ${this.settings.city} • ${this.settings.state} • ${this.settings.postalcode}</p>
        <p>${this.settings.phone}</p>
        <table class="table">
          <thead class="table-header">
            <tr>
              <th>QTY</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>DISC.</th>
              <th>TOT</th>
            </tr>
          </thead>
          <tbody>
            ${productsHtml}
          </tbody>
        </table>
        <hr><hr>
        <table>
          <tbody>
            <tr>
              <td>${receiptData.order_date}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>SUB-TOT:</b></td>
              <td>${receiptData.subtotal_amount}</td>
            </tr>
            <tr>
              <td><b>REMARK :</b></td>
              <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td><b>HST:</b></td>
              <td>${receiptData.tax_amount}</td>
            </tr>
            <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td></td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td><b>TOTAL :</b></td>
            <td>${receiptData.total_amount}</td>
          </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>TOTAL DUE :</b></td>
              <td>${receiptData.due_amount}</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>CASH :</b></td>
              <td>${receiptData.cash_payment}</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>Debit :</b></td>
              <td>${receiptData.card_payment}</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td><b>CHANGE :</b></td>
              <td>${receiptData.change_amount}</td>
            </tr>
          </tbody>
        </table>
        <hr><hr>
        <p>${receiptData.order_status}</p>
        <p>${this.settings.salefooter}</p>
      </body>
      </html>
    `;
        this.printHtml(receiptHtml);
    }
    updateTime() {
        const updateClock = () => {
            const now = new Date();
            this.currentDate = now.toLocaleDateString();
            this.currentTime = now.toLocaleTimeString();
            this.cdr.detectChanges(); // Trigger change detection manually
        };
        // Call updateClock initially
        updateClock();
        // Set up a timer to update the time every second
        setInterval(updateClock, 1000);
    }
}
ReceiptsComponent.ɵfac = function ReceiptsComponent_Factory(t) { return new (t || ReceiptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ReceiptsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceiptsComponent, selectors: [["app-receipts"]], decls: 21, vars: 4, consts: [[1, "reports", "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "search-orders"], ["type", "text", "id", "search-me", "placeholder", "Search all orders"], ["type", "submit", "value", "Search Orders"], ["class", "row", "id", "order-history", 4, "ngIf"], [1, "row", "download-all"], [1, "all-history", 3, "click"], ["class", "row ht100", 4, "ngIf"], ["class", "row order-details", 4, "ngIf"], ["id", "order-history", 1, "row"], [1, "row", "order-summary"], [1, "totalspent-orders"], [4, "ngIf"], [1, "printqty-orders"], [1, "row", "ht100"], [1, "col-md-12"], [3, "click"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-print", 3, "click"], [1, "fa", "fa-eye"], [1, "row", "order-details"], [1, "col-md-3"], [1, "col-md-6", "ht100"]], template: function ReceiptsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your Receipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReceiptsComponent_div_10_Template, 22, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_Template_a_click_12_listener() { return ctx.getreceipts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_Template_a_click_14_listener() { return ctx.getservicereceipts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Service Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptsComponent_Template_a_click_16_listener() { return ctx.getAvailablePhones(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Phone Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReceiptsComponent_div_18_Template, 39, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReceiptsComponent_div_19_Template, 23, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReceiptsComponent_div_20_Template, 104, 18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phonetable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordertable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderview && ctx.orderinfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\n.ht100[_ngcontent-%COMP%] {\r\n  overflow-y: scroll !important;\r\n  height: 90vh !important;\r\n}\r\na.all-history[_ngcontent-%COMP%] {\r\n  color: white !IMPORTANT;\r\n  background: black;\r\n  margin: 0px 10px 10px 10px;\r\n  width: max-content;\r\n  font-size: 26px !important;\r\n  border-radius: 5px;\r\n  cursor: pointer !important;  \r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUc5QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFHWixnQkFBZ0I7SUFDaEIsMEpBQTBKO0lBQzFKLDBCQUEwQjtFQUM1QjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNFLGFBQWE7SUFDYiwwQ0FBMEM7RUFDNUM7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlY2VpcHRzL3JlY2VpcHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0cyB7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMTB2aCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2gtb3JkZXJzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEuYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2JhZGE1NTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLXJvdyB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUgaDEge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlcl9zb3J0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIHVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDUwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5maXJzdCB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiYWRhNTU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3dubG9hZC1hbGwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbCBhLmFsbC1oaXN0b3J5IHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAucG9zdC1zb3J0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucG9zdC1zb3J0ZXIgLm9yZGVyLW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAucG9zdC1zb3J0ZXIgLm9yZGVyLXNvcnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzExMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDM1cHggNXB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEN3QUxBSkVBQUFBQUFQLy8veFVWRmYvLy95SDVCQUVBQUFNQUxBQUFBQUFMQUFzQUFBSVVuQzJuS0xuVDRvcjAwUHZ5clF3clB6VVpzaFFBT3c9PSkgOTYlLzE1JSBuby1yZXBlYXQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTFweCAxMXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDQVVUSU9OOiBJRSBoYWNrZXJ5IGFoZWFkICovXHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKiByZW1vdmUgZGVmYXVsdCBhcnJvdyBvbiBpZTEwIGFuZCBpZTExICovXHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1zdW1tYXJ5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHdpZHRoOiAyMy43NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNiYWRhNTU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLWNvbnRhaW5lciB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC00IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggaW1nOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggIzg4ODtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjIlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAuYnRuLWRlZmF1bHQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAuZXJyb3ItdGl0bGUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzMwMDtcclxuICAgIGNvbG9yOiAjZmYzMzAwO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAucHJvZHVjdC10aXRsZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggYS5idG4tZGVmYXVsdCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGEuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICB9XHJcbiAgaW5wdXQjc2VhcmNoLW1lIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxudWwjdG9nZ2xlLW9yZGVycyBsaSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgXHJcbn1cclxudWwjdG9nZ2xlLW9yZGVycyBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmh0MTAwIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcclxufVxyXG5hLmFsbC1oaXN0b3J5IHtcclxuICBjb2xvcjogd2hpdGUgIUlNUE9SVEFOVDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OyAgXHJcbn1cclxuYnV0dG9uLm9yZGVyLW51bWJlci5idG4ge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5hLmJhY2t0b2hvbWUge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceiptsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-receipts',
                templateUrl: './receipts.component.html',
                styleUrls: ['./receipts.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "oYre":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UsersComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.hrs);
} }
function UsersComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.hrs);
} }
class UsersComponent {
    constructor(http, router, cdr // Inject ChangeDetectorRef
    ) {
        this.http = http;
        this.router = router;
        this.cdr = cdr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.userid = localStorage.getItem('userid');
        this.selector = '5c';
        this.groupedProducts = [];
        this.clockinview = true;
        this.summaryview = false;
        this.activePage = 'clockin'; // Set the default active page
        this.servicetotal = 0.00;
        this.closedayview = false;
    }
    ngOnInit() {
        this.updateTime();
        this.checkauth();
        this.getreceipts();
    }
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                if (response.error === false) {
                    if (response.clockin === false) {
                        this.router.navigate(['clockin']);
                    }
                    //this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['']);
                }
            }, (error) => {
                console.error('Error during login:', error);
            });
        }
        else {
            this.router.navigate(['']);
        }
    }
    getreceipts() {
        this.http.get(this.apiUrl + 'getuser').subscribe((response) => {
            if (response.error === false) {
                this.orders = response.today;
                this.daily = response.daily;
                //this.router.navigate(['']);
            }
            else {
                this.router.navigate(['']);
            }
        }, (error) => {
            console.error('Error during login:', error);
        });
    }
    updateTime() {
        const updateClock = () => {
            const now = new Date();
            this.currentDate = now.toLocaleDateString();
            this.currentTime = now.toLocaleTimeString();
            this.cdr.detectChanges(); // Trigger change detection manually
        };
        // Call updateClock initially
        updateClock();
        // Set up a timer to update the time every second
        setInterval(updateClock, 1000);
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 54, vars: 2, consts: [[1, "reports", "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "search-orders"], ["type", "text", "id", "search-me", "placeholder", "Search all users"], ["type", "submit", "value", "Search"], [1, "row"], [1, "col-md-12"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "S.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UsersComponent_tr_32_Template, 15, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "S.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UsersComponent_tr_53_Template, 15, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.daily);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUc5QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFHWixnQkFBZ0I7SUFDaEIsMEpBQTBKO0lBQzFKLDBCQUEwQjtFQUM1QjtBQUVBLDhCQUE4QjtBQUM5QjtJQUNFLGFBQWE7SUFDYiwwQ0FBMEM7RUFDNUM7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW9yZGVycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4gIC5vcmRlci1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1yb3cge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIGgxIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAub3JkZXJfc29ydGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmFkYTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAuZG93bmxvYWQtYWxsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGwgYS5hbGwtaGlzdG9yeSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3Qtc29ydGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnBvc3Qtc29ydGVyIC5vcmRlci1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLnBvc3Qtc29ydGVyIC5vcmRlci1zb3J0ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAzNXB4IDVweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhDd0FMQUpFQUFBQUFBUC8vL3hVVkZmLy8veUg1QkFFQUFBTUFMQUFBQUFBTEFBc0FBQUlVbkMybktMblQ0b3IwMFB2eXJRd3JQelVac2hRQU93PT0pIDk2JS8xNSUgbm8tcmVwZWF0ICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExcHggMTFweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ0FVVElPTjogSUUgaGFja2VyeSBhaGVhZCAqL1xyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLyogcmVtb3ZlIGRlZmF1bHQgYXJyb3cgb24gaWUxMCBhbmQgaWUxMSAqL1xyXG4gIH1cclxuICBcclxuICAub3JkZXItc3VtbWFyeSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMjMuNzUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYmFkYTU1O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0zIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtNCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggaW1nIHtcclxuICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICM4ODg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYyJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmJ0bi1kZWZhdWx0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmVycm9yLXRpdGxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjMzMDA7XHJcbiAgICBjb2xvcjogI2ZmMzMwMDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUgaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGEuYnRuLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgfVxyXG4gIGlucHV0I3NlYXJjaC1tZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgIFxyXG59XHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbi5vcmRlci1udW1iZXIuYnRuIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuYS5iYWNrdG9ob21lIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales/sales.component */ "RTsG");
/* harmony import */ var _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globalsettings/globalsettings.component */ "msXc");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports.component */ "ZAGK");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "70H3");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.component */ "4yXv");
/* harmony import */ var _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receipts/receipts.component */ "nOX8");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _refund_refund_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refund/refund.component */ "1ubg");
/* harmony import */ var _clockin_clockin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clockin/clockin.component */ "x+K7");
/* harmony import */ var _clockout_clockout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clockout/clockout.component */ "OexK");



 // Import your HomeComponent
 // Import your sales











const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'sales', component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_4__["SalesComponent"] },
    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"] },
    { path: 'receipts', component: _receipts_receipts_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptsComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"] },
    { path: 'refund', component: _refund_refund_component__WEBPACK_IMPORTED_MODULE_11__["RefundComponent"] },
    { path: 'clockin', component: _clockin_clockin_component__WEBPACK_IMPORTED_MODULE_12__["ClockinComponent"] },
    { path: 'clockout', component: _clockout_clockout_component__WEBPACK_IMPORTED_MODULE_13__["ClockoutComponent"] },
    { path: 'global', component: _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_5__["GlobalsettingsComponent"] }
    // Define other routes as needed
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");

 // Adjust the path as needed
 // Import HttpHeaders and HttpErrorResponse
 // Import the environment





function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const card_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onUserSelect(card_r1.userid, card_r1.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", card_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.username);
} }
const _c0 = function (a0) { return { "filled": a0 }; };
class LoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.pass = '1234';
        this.enteredDigits = [];
        this.timerduration = 300;
        this.shake = 10;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ngOnInit() {
        this.getusers();
        this.checkauth();
    }
    getusers() {
        this.http.get(this.apiUrl + 'getusers').subscribe((data) => {
            this.users = data.users;
            console.log('Users:', this.users);
            const username = localStorage.getItem('username');
            const usernamex = document.getElementById('username');
            if (usernamex && username) {
                usernamex.innerHTML = username;
            }
        }, (error) => {
            console.error('Error:', error);
        });
    }
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json' // Adjust the content type as needed
            });
            // Make the HTTP POST request
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                // Handle the response from the server
                if (response.error === false) {
                    this.router.navigate(['home']);
                }
                else {
                }
            }, (error) => {
                // Handle any errors
                console.error('Error during login:', error);
            });
        }
    }
    onCheckboxClick() {
        return false;
    }
    handleKeyboardEvent(event) {
        const key = event.key;
        // Check if the pressed key is a number
        if (/^\d$/.test(key)) {
            this.enteredDigits.push(key);
            // Limit the entered digits to 4
            if (this.enteredDigits.length > 4) {
                this.enteredDigits.shift();
            }
            this.updateConfirmationCircles();
        }
        else if (key === 'Enter') {
            // Handle Enter key press (e.g., submit the password)
            this.onEButtonClick();
        }
        else if (key === 'Backspace' || key === 'Delete') {
            // Handle Backspace or Delete key press to remove the last entered digit
            if (this.enteredDigits.length > 0) {
                this.enteredDigits.pop();
                this.updateConfirmationCircles();
            }
        }
    }
    onUserSelect(id, name) {
        if (name) {
            const greeting = `Welcome ${name}. Please Enter Your Password`;
            //const utterance = new SpeechSynthesisUtterance(greeting);
            // Try to set the voice to Indian English (en-IN)
            //  const indianVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'en-IN');
            //   if (indianVoice) {
            //     utterance.voice = indianVoice;
            //   } else {
            //     console.warn('Indian English voice not available. Using default voice.');
            //  }
            localStorage.setItem('userid', id);
            localStorage.setItem('username', name);
            //  window.speechSynthesis.speak(utterance);
            const usernamex = document.getElementById('username');
            if (usernamex && name) {
                usernamex.innerHTML = name;
            }
        }
    }
    playClickSound() {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.play();
        }
    }
    playErrorSound() {
        const errorSound = document.getElementById('errorSound');
        if (errorSound) {
            errorSound.play();
        }
    }
    onButtonClick(event) {
        this.playClickSound();
        const buttonValue = event.target.getAttribute('data-value');
        if (buttonValue !== null) {
            this.enteredDigits.push(buttonValue);
            // Limit the entered digits to 4
            if (this.enteredDigits.length > 4) {
                this.enteredDigits.shift();
            }
            this.updateConfirmationCircles();
        }
    }
    onEButtonClick() {
        const enteredPIN = this.enteredDigits.join('');
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        // Define the data you want to send in the request body
        const data = {
            enteredPIN: enteredPIN,
            userid: userid,
            username: username
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json' // Adjust the content type as needed
        });
        // Make the HTTP POST request
        this.http.post(this.apiUrl + 'login', data, { headers, observe: 'response' }).subscribe((response) => {
            // Handle the response from the server
            if (response.status === 200) {
                // Successful response (HTTP 200)
                const responseBody = response.body;
                if (responseBody.error === false) {
                    localStorage.setItem('token', responseBody.token);
                    clearTimeout(this.timer);
                    this.timer = setTimeout(() => {
                        const completeElement = document.getElementById('complete');
                        const numpadElement = document.getElementById('numpad');
                        if (completeElement && numpadElement) {
                            completeElement.style.transform = 'rotateY(180deg)';
                            numpadElement.style.transform = 'rotateY(0)';
                        }
                    }, this.timerduration * 10);
                    const noticeElement = document.getElementById('status');
                    if (noticeElement) {
                        noticeElement.innerHTML = 'Correct Password';
                    }
                    this.enteredDigits = [];
                    this.updateConfirmationCircles();
                    this.checkauth();
                }
                else if (responseBody.error === true) {
                    this.animateShake();
                    const noticeElement = document.getElementById('status');
                    if (noticeElement) {
                        noticeElement.innerHTML = 'Wrong Passcode!';
                    }
                }
            }
            else if (response.status === 401) {
                // Unauthorized (HTTP 401) - Handle this error case
                console.error('Unauthorized error during login');
                // You can display an error message or redirect the user to a login page, for example.
            }
        }, (error) => {
            // Handle any other errors
            this.playErrorSound();
            console.error('Error during login:', error);
            this.animateShake();
            const noticeElement = document.getElementById('status');
            if (noticeElement) {
                noticeElement.innerHTML = 'Wrong Passcode!';
            }
            this.onCButtonClick();
            this.onCButtonClick();
            this.onCButtonClick();
            this.onCButtonClick();
            // You can handle other HTTP errors here.
        });
    }
    onCButtonClick() {
        if (this.enteredDigits.length > 0) {
            this.enteredDigits.pop();
            this.updateConfirmationCircles();
        }
    }
    updateConfirmationCircles() {
        const confirmationCircles = document.querySelectorAll('.pin-circle');
        confirmationCircles.forEach((circle, index) => {
            if (index < this.enteredDigits.length) {
                circle.classList.add('filled');
            }
            else {
                circle.classList.remove('filled');
            }
        });
    }
    animateShake() {
        const numpadElement = document.getElementById('numpad');
        if (numpadElement) {
            numpadElement
                .animate([
                { transform: `translateX(${this.shake}px)` },
                { transform: `translateX(-${this.shake}px)` },
                { transform: `translateX(${this.shake}px)` },
                { transform: `translateX(-${this.shake}px)` },
                { transform: `translateX(0)` },
            ], {
                duration: this.timerduration / 5,
            })
                .addEventListener('finish', () => {
                numpadElement.style.transform = 'translateX(0)';
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appComponent = _t.first);
    } }, hostBindings: function LoginComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function LoginComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 66, vars: 13, consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", "rel", "stylesheet"], [1, "bgm"], [1, "leftbar"], [1, "card"], [1, "card-content"], [1, "user-icon"], [1, "bgt"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "device"], [1, "device-bezel"], [1, "device-viewport"], [1, "content"], ["src", "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=426&w=640"], [1, "body-content"], ["id", "status"], ["id", "username"], ["id", "reset-button"], [1, "fa", "fa-solid", "fa-download"], [1, "container"], [1, "pin-info"], [1, "page-title"], [1, "pin-display"], [1, "confirmation-dots"], ["cx", "10", "cy", "10", "r", "8", 1, "pin-circle", 3, "ngClass"], ["cx", "50", "cy", "10", "r", "8", 1, "pin-circle", 3, "ngClass"], ["cx", "90", "cy", "10", "r", "8", 1, "pin-circle", 3, "ngClass"], ["cx", "130", "cy", "10", "r", "8", 1, "pin-circle", 3, "ngClass"], [1, "keypad"], [1, "keypad--row"], ["data-value", "1", 1, "keypad--button", 3, "click"], ["data-value", "2", 1, "keypad--button", 3, "click"], ["data-value", "3", 1, "keypad--button", 3, "click"], ["data-value", "4", 1, "keypad--button", 3, "click"], ["data-value", "5", 1, "keypad--button", 3, "click"], ["data-value", "6", 1, "keypad--button", 3, "click"], ["data-value", "7", 1, "keypad--button", 3, "click"], ["data-value", "8", 1, "keypad--button", 3, "click"], ["data-value", "9", 1, "keypad--button", 3, "click"], [1, "keypad--button", "keyboard--button__back-arrow", 3, "click"], [1, "material-icons"], ["data-value", "0", 1, "keypad--button"], [1, "keypad--button", "keyboard--button__x", 3, "click"], [1, "fa", "fa-external-link-square"], [1, "card-content", 3, "click"], [1, "fas", "fa-user"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SELECT A USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 6, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User ! Please Select Your Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "INSTALL APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enter Your PIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_38_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_40_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_42_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_45_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_47_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_49_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_52_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_54_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_56_listener($event) { return ctx.onButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_59_listener() { return ctx.onCButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_64_listener() { return ctx.onEButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.enteredDigits.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.enteredDigits.length > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.enteredDigits.length > 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.enteredDigits.length > 3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: linear-gradient(to right top, #78009c, #663eba, #4d5ed0, #2f79e1, #1291eb);\r\n  }\r\n  \r\n  .device[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 16px;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    transform: scale(1);\r\n  }\r\n  \r\n  .device[_ngcontent-%COMP%]   .device-bezel[_ngcontent-%COMP%] {\r\n    border-radius: inherit;\r\n    padding: 36px 10px 24px 10px;\r\n    overflow: hidden;\r\n   \r\n    position: relative;\r\n    box-sizing: content-box;\r\n  }\r\n  \r\n  .device[_ngcontent-%COMP%]   .device-viewport[_ngcontent-%COMP%] {\r\n    contain: strict;\r\n    width: 350px;\r\n    height: 622.2222222222px;\r\n    background: white;\r\n    border-radius: inherit;\r\n    transform: scale(1);\r\n  }\r\n  \r\n  *[_ngcontent-%COMP%] {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: 100%;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    background: white;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 16px;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.5em;\r\n    margin-bottom: 8px;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    width: max-content;\r\n    height: auto;\r\n    border-radius: 5px;\r\n    background: #080e09;\r\n    border: none;\r\n    outline: none;\r\n    margin-top: 10px;\r\n    cursor: pointer;\r\n    color: white;\r\n    padding: 10px 30px;\r\n    text-align: center;\r\n    margin: 0px auto;\r\n    display: block;\r\n  }\r\n  \r\n  .pin-info[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: white;\r\n    background: #EAEAEA;\r\n  }\r\n  \r\n  .pin-display[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: white;\r\n  }\r\n  \r\n  .keypad[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    background: white;\r\n  }\r\n  \r\n  .keypad--row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .keypad--button[_ngcontent-%COMP%] {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    height: 48px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 100ms ease-out;\r\n  }\r\n  \r\n  .keypad--button[_ngcontent-%COMP%]:active {\r\n    background: #EAEAEA;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .confirmation-dots.error[_ngcontent-%COMP%] {\r\n    animation-name: shake;\r\n    animation-duration: 300ms;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    max-height: 24px;\r\n    width: 139px;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle[_ngcontent-%COMP%] {\r\n    transition: all 100ms ease-out;\r\n    fill: white;\r\n    stroke-width: 2px;\r\n    stroke: black;\r\n    outline-offset: -2px;\r\n    outline-width: 2px;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle.entered[_ngcontent-%COMP%] {\r\n    fill: black;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle.success[_ngcontent-%COMP%] {\r\n    fill: green;\r\n    stroke: green;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle.error[_ngcontent-%COMP%] {\r\n    fill: red;\r\n    stroke: red;\r\n  }\r\n  \r\n  .circle-lock--container[_ngcontent-%COMP%] {\r\n    height: 72px;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .circle-lock[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: white;\r\n    border-radius: 1000px;\r\n    position: relative;\r\n    top: -40px;\r\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.12);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .circle-lock[_ngcontent-%COMP%]   .lock-icon[_ngcontent-%COMP%] {\r\n    color: #333;\r\n  }\r\n  \r\n  .page-title[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    line-height: 35px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    margin: 10px;\r\n  }\r\n  \r\n  .pin-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  @keyframes shake {\r\n    10%, 90% {\r\n      transform: translate3d(-1px, 0, 0);\r\n    }\r\n    20%, 80% {\r\n      transform: translate3d(2px, 0, 0);\r\n    }\r\n    30%, 50%, 70% {\r\n      transform: translate3d(-4px, 0, 0);\r\n    }\r\n    40%, 60% {\r\n      transform: translate3d(4px, 0, 0);\r\n    }\r\n  }\r\n  \r\n  .rotate[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n    transition: transform 0.3s ease-in-out;\r\n  }\r\n  \r\n  circle.pin-circle.filled[_ngcontent-%COMP%] {\r\n    fill: black !important;\r\n}\r\n  \r\n  .device[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    left: 40%; \r\n}\r\n  \r\n  .bgm[_ngcontent-%COMP%]{\r\n   \r\n   background:black;\r\n    height: 100%;\r\n    transition: filter 250ms, transform 250ms;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    background-image: linear-gradient(-45deg, #cc6640, #c21766, #1a7a9d, #1aa784);\r\n   \r\n  height: 100vh;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n  background-size: 400% 400%;\r\n  animation: gradient 30s ease infinite;\r\n  position: relative;\r\n  overflow:hidden;\r\n}\r\n  \r\n  @keyframes gradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n  \r\n  .bgm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n  \r\n  .leftbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 30px;\r\n    \r\n    padding: 10px;\r\n    top: 5%;\r\n}\r\n  \r\n  .user-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n  \r\n  .leftbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    margin-left: 10px;\r\n}\r\n  \r\n  i.fa-user.fas[_ngcontent-%COMP%] {\r\n    line-height: 35px;\r\n}\r\n  \r\n  .card-content[_ngcontent-%COMP%] {\r\n    padding: 5px 20px !important;\r\n}\r\n  \r\n  h3.bgt[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: 700 !important;\r\n    font-size: 30px !important;\r\n    text-align: center;\r\n}\r\n  \r\n  button#reset-button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    letter-spacing:5px;\r\n}\r\n  \r\n  #reset-button[_ngcontent-%COMP%]   i.fa.fa-solid.fa-download[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n  \r\n  .leftbar[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n  \r\n  .device-bezel[_ngcontent-%COMP%] {\r\n  padding: 10px !important;\r\n  background: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0ZBQXNGO0VBQ3hGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDhCQUE4QjtFQUNoQzs7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0U7TUFDRSxrQ0FBa0M7SUFDcEM7SUFDQTtNQUNFLGlDQUFpQztJQUNuQztJQUNBO01BQ0Usa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxpQ0FBaUM7SUFDbkM7RUFDRjs7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixzQ0FBc0M7RUFDeEM7O0VBQ0E7SUFDRSxzQkFBc0I7QUFDMUI7O0VBQ0E7SUFDSSxPQUFPO0lBQ1AsU0FBUztBQUNiOztFQUVBO0dBQ0csbURBQW1EO0dBQ25ELGdCQUFnQjtJQUNmLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkVBQTZFOztFQUUvRSxhQUFhO0VBQ2Isa0NBQWtDOztFQUVsQywwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztFQUlBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0VBQ0E7SUFDSSxlQUFlO0FBQ25COztFQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7O0lBRVYsYUFBYTtJQUNiLE9BQU87QUFDWDs7RUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7RUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0VBRUU7SUFDRSxpQkFBaUI7QUFDckI7O0VBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0VBQ0E7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0VBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksV0FBVztBQUNmOztFQUNBO0lBQ0ksZUFBZTtBQUNuQjs7RUFDQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjNzgwMDljLCAjNjYzZWJhLCAjNGQ1ZWQwLCAjMmY3OWUxLCAjMTI5MWViKTtcclxuICB9XHJcbiAgXHJcbiAgLmRldmljZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAuZGV2aWNlIC5kZXZpY2UtYmV6ZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDM2cHggMTBweCAyNHB4IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxuICAuZGV2aWNlIC5kZXZpY2Utdmlld3BvcnQge1xyXG4gICAgY29udGFpbjogc3RyaWN0O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA2MjIuMjIyMjIyMjIyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIC5jb250ZW50IGltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgLmJvZHktY29udGVudCBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAuYm9keS1jb250ZW50IHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICAuYm9keS1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDgwZTA5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5waW4taW5mbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNFQUVBRUE7XHJcbiAgfVxyXG4gIFxyXG4gIC5waW4tZGlzcGxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmtleXBhZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5rZXlwYWQtLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5rZXlwYWQtLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmtleXBhZC0tYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUFFQUVBO1xyXG4gIH1cclxuICBcclxuICAuY29uZmlybWF0aW9uLWRvdHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jb25maXJtYXRpb24tZG90cy5lcnJvciB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2hha2U7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gIH1cclxuICAuY29uZmlybWF0aW9uLWRvdHMgc3ZnIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1heC1oZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMTM5cHg7XHJcbiAgfVxyXG4gIC5jb25maXJtYXRpb24tZG90cyAucGluLWNpcmNsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1vdXQ7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlOiBibGFjaztcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gICAgb3V0bGluZS13aWR0aDogMnB4O1xyXG4gIH1cclxuICAuY29uZmlybWF0aW9uLWRvdHMgLnBpbi1jaXJjbGUuZW50ZXJlZCB7XHJcbiAgICBmaWxsOiBibGFjaztcclxuICB9XHJcbiAgLmNvbmZpcm1hdGlvbi1kb3RzIC5waW4tY2lyY2xlLnN1Y2Nlc3Mge1xyXG4gICAgZmlsbDogZ3JlZW47XHJcbiAgICBzdHJva2U6IGdyZWVuO1xyXG4gIH1cclxuICAuY29uZmlybWF0aW9uLWRvdHMgLnBpbi1jaXJjbGUuZXJyb3Ige1xyXG4gICAgZmlsbDogcmVkO1xyXG4gICAgc3Ryb2tlOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUtbG9jay0tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUtbG9jayB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jaXJjbGUtbG9jayAubG9jay1pY29uIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5waW4taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgICAxMCUsIDkwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAyMCUsIDgwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcclxuICAgIH1cclxuICAgIDMwJSwgNTAlLCA3MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgNDAlLCA2MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgY2lyY2xlLnBpbi1jaXJjbGUuZmlsbGVkIHtcclxuICAgIGZpbGw6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldmljZSB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogNDAlOyBcclxufVxyXG5cclxuLmJnbXtcclxuICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLndlYnApOyAqL1xyXG4gICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDI1MG1zLCB0cmFuc2Zvcm0gMjUwbXM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjY2M2NjQwLCAjYzIxNzY2LCAjMWE3YTlkLCAjMWFhNzg0KTtcclxuICAgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMzBzIGVhc2UgaW5maW5pdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG59XHJcbi5iZ20gcHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubGVmdGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdG9wOiA1JTtcclxufVxyXG4udXNlci1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5sZWZ0YmFyIGgze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuICBpLmZhLXVzZXIuZmFzIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5oMy5iZ3Qge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uI3Jlc2V0LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOjVweDtcclxufVxyXG5cclxuI3Jlc2V0LWJ1dHRvbiBpLmZhLmZhLXNvbGlkLmZhLWRvd25sb2FkIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5sZWZ0YmFyIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kZXZpY2UtYmV6ZWwge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { appComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "x+K7":
/*!**********************************************!*\
  !*** ./src/app/clockin/clockin.component.ts ***!
  \**********************************************/
/*! exports provided: ClockinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockinComponent", function() { return ClockinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








class ClockinComponent {
    constructor(http, router, cdr // Inject ChangeDetectorRef
    ) {
        this.http = http;
        this.router = router;
        this.cdr = cdr;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.userid = localStorage.getItem('userid');
        this.selector = '5c';
        this.username = localStorage.getItem('username');
        this.inputValues = {
            '5c': '',
            '10c': '',
            '25c': '',
            '1d': '',
            '2d': '',
            '5d': '',
            '10d': '',
            '20d': '',
            '50d': '',
            '100d': ''
        };
        this.totalSum = 0;
    }
    ngOnInit() {
        this.updateTime();
        this.checkauth();
    }
    checkauth() {
        const userid = localStorage.getItem('userid');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (userid && username && token) {
            const data = {
                token: token,
                userid: userid,
                username: username
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                if (response.error === false) {
                    if (response.clockin === true) {
                        this.router.navigate(['home']);
                    }
                    //this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['']);
                }
            }, (error) => {
                console.error('Error during login:', error);
            });
        }
        else {
            this.router.navigate(['']);
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
    updateTime() {
        const updateClock = () => {
            const now = new Date();
            this.currentDate = now.toLocaleDateString();
            this.currentTime = now.toLocaleTimeString();
            this.cdr.detectChanges(); // Trigger change detection manually
        };
        // Call updateClock initially
        updateClock();
        // Set up a timer to update the time every second
        setInterval(updateClock, 1000);
    }
    selectors(s) {
        this.selector = s;
        this.calculateTotalSum();
    }
    onNumberClicked(value) {
        if (this.selector && this.inputValues[this.selector] !== undefined) {
            this.inputValues[this.selector] += value.toString();
        }
        this.calculateTotalSum();
    }
    // Function to handle delete button click
    onDeleteClicked() {
        if (this.selector && this.inputValues[this.selector] !== undefined) {
            this.inputValues[this.selector] = this.inputValues[this.selector].slice(0, -1);
        }
        this.calculateTotalSum();
    }
    // Function to handle clear button click
    onClearClicked() {
        if (this.selector && this.inputValues[this.selector] !== undefined) {
            this.inputValues[this.selector] = '';
        }
        this.calculateTotalSum();
    }
    calculateTotalSum() {
        this.totalSum = 0;
        for (const key in this.inputValues) {
            if (this.inputValues.hasOwnProperty(key)) {
                this.totalSum += this.calculateTotalFor(key); // Use the previously defined function
            }
        }
    }
    updatevalues() {
        const data = {
            userid: this.userid,
            bills: this.inputValues,
            type: 'clock-in',
            total: this.totalSum
        };
        this.http.post(this.apiUrl + 'updatebills', data).subscribe((response) => {
            if (response.success === true) {
                // Handle success
                this.router.navigate(['home']);
            }
            else {
                // Handle error
                console.log('Error:', response.error);
            }
        }, (error) => {
            // Handle HTTP error
            console.error('HTTP Error:', error);
        });
    }
    calculateTotalFor(coinOrBill) {
        const inputValue = parseFloat(this.inputValues[coinOrBill]);
        if (!isNaN(inputValue)) {
            if (coinOrBill.endsWith('c')) {
                // Cents
                let coinOrBillx = parseFloat(coinOrBill.replace('c', ''));
                coinOrBillx = coinOrBillx / 100;
                return coinOrBillx * inputValue;
            }
            else if (coinOrBill.endsWith('d')) {
                // Dollars
                let coinOrBillx = parseFloat(coinOrBill.replace('d', ''));
                return coinOrBillx * inputValue;
            }
        }
        return 0; // Default value if the input is not a valid number
    }
}
ClockinComponent.ɵfac = function ClockinComponent_Factory(t) { return new (t || ClockinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ClockinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockinComponent, selectors: [["app-clockin"]], decls: 114, vars: 57, consts: [[1, "reports", "container-fluid"], [1, "row", "title-row", "header"], [1, "page-title"], [1, "text-right"], ["id", "order-history", 1, "row"], [1, "col-md-12"], [1, "table", "table-bordered"], ["type", "number", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "btn", "btn-primary", "black", 3, "click"]], template: function ClockinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CLOCK IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "100$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_25_listener() { return ctx.selectors("100d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_25_listener($event) { return (ctx.inputValues["100d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "50$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_33_listener() { return ctx.selectors("50d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_33_listener($event) { return (ctx.inputValues["50d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "20$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_41_listener() { return ctx.selectors("20d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_41_listener($event) { return (ctx.inputValues["20d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "10$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_49_listener() { return ctx.selectors("10d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_49_listener($event) { return (ctx.inputValues["10d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "5$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_57_listener() { return ctx.selectors("5d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_57_listener($event) { return (ctx.inputValues["5d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_65_listener() { return ctx.selectors("2d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_65_listener($event) { return (ctx.inputValues["2d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "1$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_73_listener() { return ctx.selectors("1d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_73_listener($event) { return (ctx.inputValues["1d"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "25C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_81_listener() { return ctx.selectors("25c"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_81_listener($event) { return (ctx.inputValues["25c"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "10C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_89_listener() { return ctx.selectors("10c"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_89_listener($event) { return (ctx.inputValues["10c"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClockinComponent_Template_input_change_97_listener() { return ctx.selectors("5c"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_97_listener($event) { return (ctx.inputValues["5c"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_button_click_112_listener() { return ctx.updatevalues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentDate, " | ", ctx.currentTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome : ", ctx.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["100d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 24, ctx.calculateTotalFor("100d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["50d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 27, ctx.calculateTotalFor("50d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["20d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 30, ctx.calculateTotalFor("20d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["10d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 33, ctx.calculateTotalFor("10d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["5d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 36, ctx.calculateTotalFor("5d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["2d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](68, 39, ctx.calculateTotalFor("2d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["1d"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](76, 42, ctx.calculateTotalFor("1d"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["25c"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 45, ctx.calculateTotalFor("25c"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["10c"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](92, 48, ctx.calculateTotalFor("10c"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValues["5c"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](100, 51, ctx.calculateTotalFor("5c"), "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](107, 54, ctx.totalSum, "1.2-2"), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["a.backtohome[_ngcontent-%COMP%] {\r\n    margin-right: 30px;\r\n}\r\nspan.text-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 24px;\r\n    margin: 0px 15px;\r\n}\r\n.reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 130vh !important;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 20px !important;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n  }\r\n.btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active:focus, .btn.active.focus[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active.focus {\r\n    outline: 0;\r\n  }\r\n.pane[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 400px;\r\n   \r\n  }\r\n.input-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: auto;\r\n    padding: 0px;\r\n  }\r\n.number-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 12px 10px 10px 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border: 1px transparent solid;\r\n    border-radius: 4px;\r\n    color: white;\r\n\r\n  }\r\n.btn.black[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 32px;\r\n  }\r\n.num-btn[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    border-radius: 0;\r\n    border-color: transparent;\r\n    background-color: white;\r\n    color: black;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    margin-bottom: 4px;\r\n    font-size: 50px;\r\n  }\r\n.num-btn-clear[_ngcontent-%COMP%] {\r\n    background-color: #fc5185;\r\n    color: white;\r\n  }\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n  }\r\n.num-btn-delete[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    background-color: #1bd1a5;\r\n    color: white;\r\n  }\r\n.num-btn-back[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    background-color: #44cef6;\r\n    color: white;\r\n  }\r\ntable.table.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    text-align: center;\r\n    padding: 2px;\r\n  }\r\nbutton.btn.btn-primary.black[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n.row.title-row.header[_ngcontent-%COMP%] {\r\n  padding: 5px 0px;\r\n  border-bottom: 2px solid #808080bf;\r\n}\r\ntable.table.table-bordered[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  margin: 10px auto;\r\n}\r\ntable.table.table-bordered[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding: 2px;\r\n  width:500px;\r\n  height: auto;\r\n}\r\n.reports[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f0f0f0;\r\n  \r\n}\r\n.title-row[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-collapse: collapse;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n}\r\ninput.form-control[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\nbutton.btn[_ngcontent-%COMP%] {\r\n  background-color: #007BFF;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\nbutton.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color:white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2tpbi9jbG9ja2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFVBQVU7RUFDWjtBQUVGOzs7Ozs7SUFNSSxVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhOztFQUVmO0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFJRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFlBQVk7O0VBRWQ7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVEO0lBQ0csZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5Qjs7QUFFM0I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jbG9ja2luL2Nsb2NraW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuYmFja3RvaG9tZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuc3Bhbi50ZXh0LXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbn1cclxuLnJlcG9ydHMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTMwdmggIWltcG9ydGFudDtcclxufVxyXG4ucGFnZS10aXRsZSBoMSB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuICBcclxuLmJ0bjpmb2N1cyxcclxuLmJ0bi5mb2N1cyxcclxuLmJ0bjphY3RpdmU6Zm9jdXMsXHJcbi5idG4uYWN0aXZlLmZvY3VzLFxyXG4uYnRuLmFjdGl2ZTpmb2N1cyxcclxuLmJ0bjphY3RpdmUuZm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbi5pbnB1dC1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbi5udW1iZXItYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICB9XHJcbiAgLmJ0bi5ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuLm51bS1idG4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4ubnVtLWJ0bi1jbGVhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM1MTg1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICB0YWJsZSB0ZHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbi5udW0tYnRuLWRlbGV0ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiZDFhNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAubnVtLWJ0bi1iYWNrIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRjZWY2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICB0YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZCB0ZCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkuYmxhY2sge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5yb3cudGl0bGUtcm93LmhlYWRlciB7XHJcbiAgcGFkZGluZzogNXB4IDBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgwODA4MGJmO1xyXG59XHJcbnRhYmxlLnRhYmxlLnRhYmxlLWJvcmRlcmVkIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHdpZHRoOjUwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnJlcG9ydHMge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIFxyXG59XHJcblxyXG4udGl0bGUtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSBoMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcbi5wYWdlLXRpdGxlIGgxe1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnBhZ2UtdGl0bGUgaDEsLnBhZ2UtdGl0bGUgc3BhbntcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clockin',
                templateUrl: './clockin.component.html',
                styleUrls: ['./clockin.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
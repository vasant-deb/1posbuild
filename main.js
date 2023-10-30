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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RefundComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.searchError);
} }
function RefundComponent_div_18_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_div_18_tr_66_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r4 = ctx.$implicit; return order_r4.item_quantity = $event; })("change", function RefundComponent_div_18_tr_66_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.mark(order_r4.item_id, order_r4.item_name, order_r4.item_price, order_r4.item_quantity, order_r4.item_subtotal); });
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
    const order_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", order_r4.item_quantity)("ngModel", order_r4.item_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.item_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.item_subtotal);
} }
function RefundComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 22);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RefundComponent_div_18_tr_66_Template, 9, 6, "tr", 23);
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.userid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.modeOfPayment[0].modeofpayment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.card, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.giftcard, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.cash, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderinfo.pointsRedeem, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.orderinfo.order_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderinfo.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderinfo.subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderinfo.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderinfo.total);
} }
function RefundComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.refundResponse));
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
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.userid = localStorage.getItem('userid');
        this.orderview = false;
    }
    searchOrder() {
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
        }, (error) => {
            console.error('Error during searchOrder:', error);
            // Handle errors and display an error message to the user.
            this.searchError = 'An error occurred while searching for the order.';
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
        this.refundData.items = this.orderinfo.order_items;
        // Set the headers for the API request
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        // Make the API call to process the refund
        this.http.post(this.apiUrl + 'refund', this.refundData, { headers }).subscribe((response) => {
            this.refundResponse = response.message;
            // You can handle the response here, e.g., display a success message to the user.
        }, (error) => {
            console.error('Error processing refund:', error);
            // Handle errors and display an error message to the user.
        });
    }
}
RefundComponent.ɵfac = function RefundComponent_Factory(t) { return new (t || RefundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RefundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundComponent, selectors: [["app-refund"]], decls: 42, vars: 8, consts: [[1, "container"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "row"], [1, "col-md-9"], [1, "form-group"], ["for", "searchQuery"], ["type", "text", "id", "searchQuery", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-md-3"], ["for", "refundAmount"], ["type", "number", "id", "refundAmount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "refundtax", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "totalrefund", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "refundReason"], ["type", "text", "id", "refundReason", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "error"], [1, "col-md-6"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "form-control", 3, "min", "max", "ngModel", "ngModelChange", "change"]], template: function RefundComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Order ID or Order Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchQuery = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundComponent_Template_button_click_15_listener() { return ctx.searchOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RefundComponent_div_17_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RefundComponent_div_18_Template, 96, 16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Refund Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_25_listener($event) { return ctx.refundData.refundAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tax Refund:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_29_listener($event) { return ctx.refundData.refundtax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Refund:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_34_listener($event) { return ctx.refundData.totalrefund = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Refund Reason:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefundComponent_Template_input_ngModelChange_38_listener($event) { return ctx.refundData.refundReason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundComponent_Template_button_click_39_listener() { return ctx.processRefund(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Process Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RefundComponent_div_41_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmdW5kL3JlZnVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRzlCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDBKQUEwSjtJQUMxSiwwQkFBMEI7RUFDNUI7QUFFQSw4QkFBOEI7QUFDOUI7SUFDRSxhQUFhO0lBQ2IsMENBQTBDO0VBQzVDO0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjtBQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCO0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlZnVuZC9yZWZ1bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRzIHtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDExMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1vcmRlcnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuICAub3JkZXItYnJlYWRjcnVtYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2JhZGE1NTtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYS5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtcm93IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAucGFnZS10aXRsZSBoMSB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyX3NvcnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgdWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgNTBweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpLmZpcnN0IHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JhZGE1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbiAgLmRvd25sb2FkLWFsbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsIGEuYWxsLWhpc3Rvcnkge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGw6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXNvcnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItc29ydGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzVweCA1cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ3dBTEFKRUFBQUFBQVAvLy94VVZGZi8vL3lINUJBRUFBQU1BTEFBQUFBQUxBQXNBQUFJVW5DMm5LTG5UNG9yMDBQdnlyUXdyUHpVWnNoUUFPdz09KSA5NiUvMTUlIG5vLXJlcGVhdCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENBVVRJT046IElFIGhhY2tlcnkgYWhlYWQgKi9cclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qIHJlbW92ZSBkZWZhdWx0IGFycm93IG9uIGllMTAgYW5kIGllMTEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLXN1bW1hcnkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDIzLjc1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2JhZGE1NTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBpbWc6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjODg4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5idG4tZGVmYXVsdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5lcnJvci10aXRsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzMzAwO1xyXG4gICAgY29sb3I6ICNmZjMzMDA7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5wcm9kdWN0LXRpdGxlIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggYS5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuICBpbnB1dCNzZWFyY2gtbWUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICBcclxufVxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24ub3JkZXItbnVtYmVyLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmEuYmFja3RvaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.btn-black[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: #fff;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\r\n.inlinebutton[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  float: right;\r\n  display: inline-flex;\r\n}\r\n.btnx[_ngcontent-%COMP%]{\r\n  background-color: #111;\r\n  margin: 15px;\r\n  color: white;\r\n  float: right;\r\n  font-size: 18px;\r\n  padding: 0px 10px;\r\n  line-height: 0px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRzlCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDBKQUEwSjtJQUMxSiwwQkFBMEI7RUFDNUI7QUFFQSw4QkFBOEI7QUFDOUI7SUFDRSxhQUFhO0lBQ2IsMENBQTBDO0VBQzVDO0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjtBQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCO0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW9yZGVycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4gIC5vcmRlci1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1yb3cge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIGgxIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAub3JkZXJfc29ydGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmFkYTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICAuYnRuLWJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbCB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsIGEuYWxsLWhpc3Rvcnkge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGw6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LXNvcnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5wb3N0LXNvcnRlciAub3JkZXItc29ydGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzVweCA1cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ3dBTEFKRUFBQUFBQVAvLy94VVZGZi8vL3lINUJBRUFBQU1BTEFBQUFBQUxBQXNBQUFJVW5DMm5LTG5UNG9yMDBQdnlyUXdyUHpVWnNoUUFPdz09KSA5NiUvMTUlIG5vLXJlcGVhdCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENBVVRJT046IElFIGhhY2tlcnkgYWhlYWQgKi9cclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qIHJlbW92ZSBkZWZhdWx0IGFycm93IG9uIGllMTAgYW5kIGllMTEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLXN1bW1hcnkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDIzLjc1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2JhZGE1NTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5vcmRlci1zdW1tYXJ5IGRpdiBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBpbWc6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjODg4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0xIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5idG4tZGVmYXVsdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5lcnJvci10aXRsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYzMzAwO1xyXG4gICAgY29sb3I6ICNmZjMzMDA7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIC5wcm9kdWN0LXRpdGxlIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0zIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggYS5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIH1cclxuICBpbnB1dCNzZWFyY2gtbWUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICBcclxufVxyXG51bCN0b2dnbGUtb3JkZXJzIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5idXR0b24ub3JkZXItbnVtYmVyLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmEuYmFja3RvaG9tZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5pbmxpbmVidXR0b257XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmJ0bnh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function SettingsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_20_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateGeneralSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Store Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.generalSettings.storename = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Store Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.generalSettings.storenumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.generalSettings.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.generalSettings.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.generalSettings.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.generalSettings.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.generalSettings.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.generalSettings.postalcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Timing 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.generalSettings.timing1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Timing 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.generalSettings.timing2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Timing 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.generalSettings.timing3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Printer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.generalSettings.printername = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sales Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_textarea_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.generalSettings.salefooter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Phone Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_textarea_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.generalSettings.phonefooter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Repair Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_20_Template_textarea_ngModelChange_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.generalSettings.repairfooter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Update Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.storename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.storenumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.postalcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.timing1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.timing2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.timing3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.printername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.salefooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.phonefooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.generalSettings.repairfooter);
} }
function SettingsComponent_div_21_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_21_tr_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const category_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.editCategory(category_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_21_tr_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const category_r22 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.deleteCategory(category_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r22.name);
} }
function SettingsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 44);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SettingsComponent_div_21_tr_12_Template, 9, 1, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add/Edit Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.selectedCategory.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_21_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.addCategory(ctx_r28.selectedCategory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add/Edit Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedCategory.name);
} }
function SettingsComponent_div_22_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r32.name, " ");
} }
function SettingsComponent_div_22_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_tr_25_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const category_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.editProduct(category_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_tr_25_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const category_r33 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.deleteProduct(category_r33.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r33 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r33.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r33.category_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r30.apiUrl + "uploads/" + category_r33.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r33.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r33.product_stock);
} }
function SettingsComponent_div_22_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r37.name);
} }
function SettingsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.searchProductKeyword = $event; })("ngModelChange", function SettingsComponent_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onSearchProductChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.selectedProductCategory = $event; })("change", function SettingsComponent_div_22_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onCategoryChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_22_option_6_Template, 2, 2, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 54);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SettingsComponent_div_22_tr_25_Template, 17, 5, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add/Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.selectedProduct.product_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_select_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.selectedProduct.category_id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SettingsComponent_div_22_option_38_Template, 2, 2, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Product Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_22_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onImageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.selectedProduct.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_22_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.selectedProduct.product_stock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.addProduct(ctx_r48.selectedProduct); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Add/Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Bulk Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "CSV file must have column name as : (id,category,name,price,product_stock,sku,upc)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_div_22_Template_input_change_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onProductFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_22_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.onProductUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Upload CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchProductKeyword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedProductCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.filteredProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedProduct.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedProduct.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.apiUrl + "uploads/" + ctx_r2.selectedProduct.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedProduct.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedProduct.product_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.productuploadresponse);
} }
function SettingsComponent_div_23_table_4_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_table_4_tr_18_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const user_r54 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.editCustomer(user_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_table_4_tr_18_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const user_r54 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r57.deleteCustomer(user_r54.userid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r54.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r54.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r54.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r54.user_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r54.created);
} }
function SettingsComponent_div_23_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 54);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SettingsComponent_div_23_table_4_tr_18_Template, 17, 5, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.customers);
} }
function SettingsComponent_div_23_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SettingsComponent_div_23_div_6_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.updateCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_div_6_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.selectedCustomer.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_div_6_Template_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.selectedCustomer.role = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Associate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_23_div_6_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.selectedCustomer.user_password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add/Edit Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.selectedCustomer.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.selectedCustomer.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.selectedCustomer.user_password);
} }
function SettingsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.adduser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingsComponent_div_23_table_4_Template, 19, 1, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_23_div_6_Template, 22, 3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedCustomer);
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
        // Send an HTTP request to update the general settings
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}update-general-settings`, this.generalSettings, { headers }).subscribe(() => {
            // Handle success or display a message
            console.log('General settings updated successfully');
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
        });
    }
    addProduct(category) {
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
        });
    }
    onProductFileSelected(event) {
        const inputElement = event.target;
        if (inputElement.files.length > 0) {
            this.selectedProductFile = inputElement.files[0];
        }
    }
    onProductUpload() {
        this.productuploadresponse = 'Uploading.....';
        if (this.selectedProductFile) {
            const formData = new FormData();
            formData.append('file', this.selectedProductFile);
            this.http.post(`${this.apiUrl}import-products`, formData).subscribe((response) => {
                console.log('File uploaded successfully:', response);
                this.productuploadresponse = response.message;
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
        this.categoryuploadresponse = 'Uploading.....';
        if (this.selectedCategoryFile) {
            const formData = new FormData();
            formData.append('file', this.selectedCategoryFile);
            this.http.post(`${this.apiUrl}import-categories`, formData).subscribe((response) => {
                console.log('File uploaded successfully:', response);
                this.categoryuploadresponse = response.message;
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
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeletecategories/${categoryId}`, null, { headers }).subscribe(() => {
            this.loadCategories();
        });
    }
    deleteProduct(categoryId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeleteproducts/${categoryId}`, null, { headers }).subscribe(() => {
            this.loadProducts();
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
        console.log(this.selectedCustomer);
        this.http.post(this.apiUrl + 'superedituser', this.selectedCustomer).subscribe((response) => {
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
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.http.post(`${this.apiUrl}superdeleteusers/${categoryId}`, null, { headers }).subscribe(() => {
            this.getcustomers();
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 24, vars: 12, consts: [[1, "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "nav", "nav-tabs"], [1, "nav", "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "click"], ["class", "container-fluid generalview", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "container-fluid", "generalview"], [1, "scroll", "ht70", "row", 3, "ngSubmit"], [1, "col-md-3", "form-group"], ["for", "storename"], ["type", "text", "id", "storename", "name", "storename", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "storenumber"], ["type", "text", "id", "storenumber", "name", "storenumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "postal"], ["type", "text", "id", "phone", "name", "phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["type", "text", "id", "address", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "postalcode", "name", "postalcode", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timing1"], ["type", "text", "id", "timing1", "name", "timing1", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timing2"], ["type", "text", "id", "timing2", "name", "timing2", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "timing3"], ["type", "text", "id", "timing3", "name", "timing3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "printername", "name", "printername", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "form-group"], ["for", "salefooter"], ["id", "salefooter", "rows", "6", "name", "salefooter", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phonefooter"], ["id", "phonefooter", "rows", "6", "name", "phonefooter", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "repairfooter"], ["id", "repairfooter", "rows", "6", "name", "repairfooter", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-black", "mt30"], [1, "row"], [1, "col-md-6"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "text", "placeholder", "Category Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-black", 3, "click"], [1, "col-md-6", "scroll", "ht100"], ["type", "text", "placeholder", "Search Products", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table", "table-bordered", "table-responsive"], [1, "col-md-3"], ["type", "text", "placeholder", "Product Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "proimage", 3, "src"], ["type", "file", 1, "form-control", 3, "change"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-2"], ["type", "file", "accept", ".csv", 3, "change"], [3, "click"], [3, "value"], [1, "proimge", 3, "src"], [1, "col-md-9", "scroll", "ht100"], [1, "btn", "btn-primary", "float-right", 3, "click"], ["class", "table table-bordered table-responsive", 4, "ngIf"], [4, "ngIf"], [3, "submit"], ["type", "text", "id", "username", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "role", "name", "role", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "manager"], ["value", "associate"], ["type", "text", "id", "user_password", "name", "user_password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-black"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_9_listener() { return ctx.viewpage("general"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_12_listener() { return ctx.viewpage("category"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_15_listener() { return ctx.viewpage("product"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_18_listener() { return ctx.viewpage("user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SettingsComponent_div_20_Template, 64, 15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SettingsComponent_div_21_Template, 23, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SettingsComponent_div_22_Template, 65, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SettingsComponent_div_23_Template, 7, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: [".reports[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px;\r\n}\r\n\r\n.title-row[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n.page-title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 24px;\r\n}\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.nav.nav-tabs[_ngcontent-%COMP%] {\r\n\r\n  padding: 10px;\r\n}\r\n.nav.nav-item[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  display: inline;\r\n  margin-right: 10px;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.nav-link.active[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.generalview[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  margin-top: 10px;\r\n}\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\ntable.table.table-bordered[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background-color: #fff;\r\n}\r\ntable.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n#order-history[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background-color: #fff;\r\n}\r\n#order-history[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #order-history[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.scroll.ht100[_ngcontent-%COMP%] {\r\n  max-height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n.scroll.ht70[_ngcontent-%COMP%] {\r\n  max-height: 75vh;\r\n  overflow-y: auto;\r\n}\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 10px; \r\n}\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #000; \r\n}\r\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #333; \r\n  border-radius: 5px; \r\n}\r\n.container-row[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n\r\ntable.table.table-bordered.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  background-color: #fff;\r\n}\r\ntable.table-bordered.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table-bordered.table-responsive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-black[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n.btn.btn-black[_ngcontent-%COMP%]:hover {\r\n  background-color: #000;\r\n}\r\n\r\n.proimage[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n.proimge[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n  max-height: 50px;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.page-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin-right:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBRUEsY0FBYztBQUNkO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUEsYUFBYTtBQUNiOztFQUVFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVyxFQUFFLGlDQUFpQztBQUNoRDtBQUVBO0VBQ0UsZ0JBQWdCLEVBQUUsa0NBQWtDO0FBQ3REO0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSx1QkFBdUI7RUFDekMsa0JBQWtCLEVBQUUsa0JBQWtCO0FBQ3hDO0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxnQ0FBZ0M7QUFDcEQ7QUFDQSwwQkFBMEI7QUFDMUI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQSxZQUFZO0FBQ1o7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3ZlcmFsbCBMYXlvdXQgKi9cclxuLnJlcG9ydHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLyogVGl0bGUgUm93ICovXHJcbi50aXRsZS1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi8qIE5hdiBUYWJzICovXHJcbi5uYXYubmF2LXRhYnMge1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2Lm5hdi1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi8qIEdlbmVyYWwgVmlldyAqL1xyXG4uZ2VuZXJhbHZpZXcge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIENhdGVnb3JpZXMgU2VjdGlvbiAqL1xyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG50YWJsZS50YWJsZS1ib3JkZXJlZCB0aCwgdGFibGUudGFibGUtYm9yZGVyZWQgdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFByb2R1Y3QgTWFuYWdlbWVudCBTZWN0aW9uICovXHJcbiNvcmRlci1oaXN0b3J5IHRhYmxlLnRhYmxlLWJvcmRlcmVkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNvcmRlci1oaXN0b3J5IHRhYmxlLnRhYmxlLWJvcmRlcmVkIHRoLFxyXG4jb3JkZXItaGlzdG9yeSB0YWJsZS50YWJsZS1ib3JkZXJlZCB0ZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogVXNlciBNYW5hZ2VtZW50IFNlY3Rpb24gKi9cclxuLnNjcm9sbC5odDEwMCB7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5zY3JvbGwuaHQ3MCB7XHJcbiAgbWF4LWhlaWdodDogNzV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7IC8qIEFkanVzdCB0byB5b3VyIGRlc2lyZWQgd2lkdGggKi9cclxufVxyXG5cclxuLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7IC8qIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRyYWNrICovXHJcbn1cclxuXHJcbi5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjMzMzOyAvKiBDb2xvciBvZiB0aGUgdGh1bWIgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZXIgdGh1bWIgKi9cclxufVxyXG5cclxuLmNvbnRhaW5lci1yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDb2xvciBvZiB0aGUgdGh1bWIgb24gaG92ZXIgKi9cclxufVxyXG4vKiBVc2VyIE1hbmFnZW1lbnQgVGFibGUgKi9cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG50YWJsZS50YWJsZS1ib3JkZXJlZC50YWJsZS1yZXNwb25zaXZlIHRoLFxyXG50YWJsZS50YWJsZS1ib3JkZXJlZC50YWJsZS1yZXNwb25zaXZlIHRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbi5idG4uYnRuLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJsYWNrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKiBJbWFnZXMgKi9cclxuLnByb2ltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucHJvaW1nZSB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnBhZ2UtdGl0bGUgaDEsLnBhZ2UtdGl0bGUgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSBhe1xyXG4gIG1hcmdpbi1yaWdodDozMHB4O1xyXG59Il19 */"] });
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
        }, 5 * 60 * 1000); // 10 minutes in milliseconds
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
    } }, decls: 81, vars: 3, consts: [["id", "root", 1, "container-fluid"], ["id", "app", 1, "logged-in", "row"], ["id", "app-pin-wrapper"], ["id", "app-info", 1, "info"], [1, "time"], [1, "weather"], [1, "fa-duotone", "fa-sun"], [1, "weather-temperature-value"], [1, "weather-temperature-unit"], ["id", "app-menu"], ["id", "app-menu-content-wrapper"], ["id", "app-menu-content"], ["id", "app-menu-content-header"], [1, "app-menu-content-header-section"], ["id", "app-menu-info", 1, "info"], ["id", "time", 1, "time"], [1, "reminder"], [1, "reminder-text"], ["id", "date", 1, "weather"], ["id", "fullscreen-button", 1, "user-status-button", "clear-button"], [1, "fa-solid", "fa-expand"], ["id", "install-button", 1, "user-status-button", "clear-button", 2, "display", "none"], [1, "fa-solid", "fa-download"], ["id", "weather-section", 1, "menu-section"], [1, "scrollable-component", "menu-section-content"], [1, "day-card"], ["href", "sales", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-cash-register", "cloudy"], [1, "day-name"], ["href", "receipts", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-receipt", "cloudy"], ["href", "customers", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-users", "cloudy"], ["href", "reports", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-file", "cloudy"], ["href", "settings", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-cog", "cloudy"], ["href", "users", 1, "day-card-content"], ["href", "refund", 1, "day-card-content"], [1, "day-weather-icon", "fa-duotone", "fa-undo", "cloudy"], ["id", "logout", 1, "day-card-content", 3, "click"], [1, "day-weather-icon", "fa-duotone", "fa-arrow-right-from-arc", "cloudy"], ["id", "app-background"], ["id", "app-background-image", 1, "background-image"], ["id", "sign-in-button-wrapper"], ["id", "sign-in-button", "type", "button", 1, "user-status-button", "clear-button"], [1, "fa-solid", "fa-arrow-right-to-arc"], ["id", "app-loading-icon"], [1, "fa-solid", "fa-spinner-third"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2:39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " INSTALL APP NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Previous Receipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Refund");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_70_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", ctx.settings == null ? null : ctx.settings.storename, "");
    } }, styles: ["a.day-card-content[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none !important;\r\n    cursor: pointer !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgYS5kYXktY2FyZC1jb250ZW50OmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");


 // Import HttpHeaders and HttpErrorResponse
 // Import the environment





function SalesComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", customer_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r15.customerName);
} }
function SalesComponent_div_30_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_30_div_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const mod_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.productselect(mod_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 67);
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
function SalesComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Result ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_30_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.clearsearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SalesComponent_div_30_div_6_Template, 5, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.search);
} }
function SalesComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_32_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const cat_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onCategorySelect(cat_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r22.name, " ");
} }
function SalesComponent_div_39_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_39_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const mod_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.productselect(mod_r26.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r25.apiUrl + "uploads/" + mod_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mod_r26.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mod_r26.price);
} }
function SalesComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SalesComponent_div_39_div_4_Template, 7, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.categoryname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.products);
} }
function SalesComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_40_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.repaircheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Payout Repair");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_40_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.addrepair(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_41_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.sellphone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sell Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_41_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addphone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buy Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Products Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_61_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.updatecart("dec", cart_r35.id, cart_r35.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_61_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.updatecart("inc", cart_r35.id, cart_r35.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_61_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.openEditPriceModal(cart_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_tr_61_Template_i_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const cart_r35 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.updatecart("del", cart_r35.id, 0); });
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
function SalesComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_96_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.close("general"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_96_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.submitGeneralForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 88);
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
function SalesComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_97_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.close("lookup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_97_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.submitlookup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 88);
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
function SalesComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_98_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.close("user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_98_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.submitUserForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 88);
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
function SalesComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_99_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.close("service"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_99_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.submitServiceForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Service Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 88);
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
function SalesComponent_div_100_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 120);
} }
function SalesComponent_div_100_select_13_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phone_r63.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phone_r63.phone);
} }
function SalesComponent_div_100_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesComponent_div_100_select_13_option_1_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.availablephone);
} }
function SalesComponent_div_100_input_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 122);
} }
function SalesComponent_div_100_select_19_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const phone_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phone_r65.imei);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", phone_r65.phone, " - ", phone_r65.imei, "");
} }
function SalesComponent_div_100_select_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesComponent_div_100_select_19_option_1_Template, 2, 3, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r57.availablephone);
} }
function SalesComponent_div_100_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOCUMENT TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 86);
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
function SalesComponent_div_100_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DOCUMENT NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_100_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_100_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Final Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_100_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.close("phone"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_100_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.submitPhoneForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SalesComponent_div_100_input_12_Template, 1, 0, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SalesComponent_div_100_select_13_Template, 2, 1, "select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone IMEI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SalesComponent_div_100_input_18_Template, 1, 0, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SalesComponent_div_100_select_19_Template, 2, 1, "select", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SalesComponent_div_100_div_20_Template, 11, 0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SalesComponent_div_100_div_21_Template, 5, 0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SalesComponent_div_100_Template_input_input_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.updateTaxAndTotal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SalesComponent_div_100_div_27_Template, 5, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SalesComponent_div_100_div_28_Template, 5, 0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_100_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.selectphonePaymentMethod("Cash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_100_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.selectphonePaymentMethod("Credit/Debit Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_100_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.selectphonePaymentMethod("Gift Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "p", 119);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r12.selectedphonePaymentMethod === "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r12.selectedphonePaymentMethod === "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.classresponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r12.phoneresponse, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SalesComponent_div_101_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Due: $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.changeamount.toFixed(2));
} }
function SalesComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.close("manual"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_101_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.submitManualForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mode of Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.selectPaymentMethod("Credit/Debit Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.selectPaymentMethod("Cash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.selectPaymentMethod("Gift Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.selectPaymentMethod("Points Redeem"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Points Redeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.selectPaymentMethod("Pay Later"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pay Later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Amount Left : $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SalesComponent_div_101_label_26_Template, 4, 1, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.updateAmount("manual", 7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.updateAmount("manual", 8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.updateAmount("manual", 9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.updateAmount("manual", "C"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.updateAmount("manual", 4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.updateAmount("manual", 5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.updateAmount("manual", 6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.updateAmount("manual", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.updateAmount("manual", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.updateAmount("manual", 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.updateAmount("manual", 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.updateAmount("manual", "AC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.updateAmount("manual", "."); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.updateAmount("manual", ctx_r95.xtotal.toFixed(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.updateAmount("manual", 10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.updateAmount("manual", 20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "20.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.updateAmount("manual", 5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "5.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_101_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.updateAmount("manual", 50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "50.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r13.manualForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Gift Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Points Redeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r13.selectedPaymentMethod === "Pay Later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.xtotal.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.changeamount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.xtotal.toFixed(2));
} }
function SalesComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.close("cart"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesComponent_div_102_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.submitCartForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.updateAmount("cart", 7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.updateAmount("cart", 8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.updateAmount("cart", 9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.updateAmount("cart", "C"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.updateAmount("cart", 4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.updateAmount("cart", 5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.updateAmount("cart", 6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.updateAmount("cart", 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.updateAmount("cart", 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.updateAmount("cart", 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.updateAmount("cart", 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.updateAmount("cart", "AC"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.updateAmount("cart", "."); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_div_102_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.submitCartForm(); });
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
    constructor(http, router, fb) {
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.availablepoints = 0.00;
        this.phoneresponse = '';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
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
        this.myfooter = '';
    }
    ngOnInit() {
        this.updateTime();
        this.checkauth();
        this.fetchCategoriesAndProducts();
        this.getcustomers();
        this.initializeForm();
        this.getsettings();
        this.getavailablephones();
    }
    getavailablephones() {
        this.http.get(`${this.apiUrl}get-available-phones`).subscribe((data) => {
            // Load general settings data from the server response
            this.availablephone = data;
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
            cname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            cdate: [''],
            cstreet: [''],
            ccity: ['']
        });
        this.generalForm = this.fb.group({
            finalprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]]
        });
        this.addServiceForm = this.fb.group({
            product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            product_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.lookup = this.fb.group({
            ordernumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.phoneForm = this.fb.group({
            phone_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_type: [this.phone_type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_imei: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_dt: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_dn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_customer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_notes: [''],
            phone_total: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonetax: [0.00, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonemethod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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
            amount: [0.00, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            modeofpayment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    //sound end 
    //price change
    openEditPriceModal(product) {
        this.cartview = true;
        this.cartForm = this.fb.group({
            cprice: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cid: [product.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        console.log(product);
    }
    submitCartForm() {
        if (this.cartForm.valid) {
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
            const formData = this.addServiceForm.value;
            const name = formData.product_name;
            const price = formData.product_price;
            const type = "product";
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
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
        // Call your API with the search text
        this.http.get(`${this.apiUrl}products/search?searchTerm=${searchText}`).subscribe((response) => {
            this.searchsview = true;
            this.search = response;
            console.log(this.search);
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
    }
    submitManualForm() {
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
            if (this.xtotal.toFixed(2) === '0.00') {
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
                    changeamount: this.changeamount
                };
                this.http.post(this.apiUrl + 'manualcheckout', data).subscribe((response) => {
                    if (response.error === false) {
                        // Handle success
                        console.log('Order Checked out Successfully');
                        this.playSuccessSound();
                        this.printReceipt(response.receipt, response.type);
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
        this.manualview = false;
        this.generalview = false;
        this.cartview = false;
        this.userview = false;
        this.serviceview = false;
        this.lookupview = false;
        this.selectedPaymentMethod = '';
        this.changeamount = 0.00;
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
        const url = 'http://127.0.0.1:5000/print_html';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const body = { htmlContent: receiptHtml };
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
        <p>${this.myfooter}</p>
      </body>
      </html>
    `;
        // Open a new window for printing
        this.printHtml(receiptHtml);
        if (this.phoneaddview === true) {
            this.resetphoneState();
        }
        else {
            this.resetState();
        }
    }
    // checkout end
    reset() {
        this.http.post(this.apiUrl + 'clearcart', { userid: this.userid }).subscribe((response) => {
            this.playSuccessSound();
            window.location.reload();
        }, (error) => {
            // Handle error here
            console.error('An error occurred while making the request:', error);
        });
    }
    //select product
    productselect(product) {
        this.playClickSound();
        var type = 'product'; // Remove numbers from the end
        const userid = localStorage.getItem('userid');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
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
                // Assign products directly
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
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json' // Adjust the content type as needed
            });
            // Make the HTTP POST request
            this.http.post(this.apiUrl + 'checkauth', data, { headers }).subscribe((response) => {
                // Handle the response from the server
                if (response.error === false) {
                    //this.router.navigate(['']);
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
SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], decls: 103, vars: 25, consts: [[1, "video-bg"], ["width", "320", "height", "240", "autoplay", "", "loop", "", "muted", ""], ["src", "https://assets.codepen.io/3364143/7btrrd.mp4", "type", "video/mp4"], [1, "appx"], [1, "headerx"], ["href", "home", 1, "backtohome"], [1, "fa", "fa-arrow-left"], [1, "search-bar"], ["type", "text", "placeholder", "Scan / Search Product By Code Name", 3, "ngModel", "ngModelChange", "input"], [1, "projects-section-header", "add-user", "textbox"], [1, "select_component"], ["id", "openuseradd", 1, "btn", "imageadduser", 3, "click"], [1, "fa", "fa-user-plus"], ["type", "text", "placeholder", "Search by Customer Name or Phone", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["name", "option", "id", "option", 1, "form-control", 3, "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "header-profile"], [1, "datetime"], [1, "username"], [1, "date"], [1, "time"], [1, "wrapper"], [1, "main-container"], [1, "content-wrapper"], ["class", "", 4, "ngIf"], [1, "apps-card", "newcatsection"], ["class", "app-card", 4, "ngFor", "ngForOf"], [1, "app-card", 3, "click"], ["class", "content-section", 4, "ngIf"], [1, "left-side"], [1, "side-wrapper"], ["id", "invoice-table", 1, "table-striped", 2, "width", "100%"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "footer_panel"], ["id", "", 1, "text-center"], ["type", "number", "disabled", "", "id", "putsubtotal", 1, "form-control", 3, "value"], ["type", "number", "disabled", "", "id", "puthst", 1, "form-control", 3, "value"], [1, "oneline"], ["type", "number", "id", "putdiscount", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-refresh", 3, "click"], [1, "row"], [1, "col-md-12"], [1, "grandtotal"], ["id", "totalpayable"], [1, "col-sm-12", "col-md-4"], ["type", "button", "id", "reset", 1, "btn", "btn-danger", "ripple", "btn-rounded", "btn-block", "mt-1", 3, "click"], [1, "i-Power-2"], ["type", "button", "id", "general", 1, "btn", "btn-black", "ripple", "btn-rounded", "btn-block", "mt-1", 3, "click"], ["type", "button", "id", "manual", 1, "btn", "btn-primary", "ripple", "btn-rounded", "btn-block", "mt-1", 3, "click"], [1, "overlay-app"], ["class", "popup", "id", "generalform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "lookupform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "userform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "serviceform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "phoneform", "role", "alert", 4, "ngIf"], ["class", "popup", "id", "manualform", "role", "alert", 4, "ngIf"], [3, "value"], [1, ""], [1, "content-section-title"], [1, "iconleft", "mg10", 3, "click"], [1, "fa", "fa-times"], [1, "apps-card"], [1, "app-card"], [3, "click"], ["width", "100px", "height", "100px", 1, "text-center", 3, "src"], [1, "content-section"], [1, "proimage", 3, "src"], [1, "pricetag"], ["src", "/assets/images/products/checkout.png", 1, "proimage"], ["src", "/assets/images/products/add-service.png", 1, "proimage"], ["src", "/assets/images/products/sell-phone.png", 1, "proimage"], ["src", "/assets/images/products/buy-phone.png", 1, "proimage"], [1, "qty-input"], ["data-action", "minus", "type", "button", 1, "qty-count", "qty-count--minus", 3, "click"], ["type", "number", "name", "product-qty", "min", "0", "max", "10", 1, "product-qty", 3, "value"], ["data-action", "add", "type", "buottn", 1, "qty-count", "qty-count--add", 3, "click"], [1, "fa", "fa-pencil", 3, "click"], [1, "fa", "fa-close", "text-danger", 3, "click"], ["id", "generalform", "role", "alert", 1, "popup"], [1, "popup-container"], [1, "popup-close", "img-replace", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "text-left"], [1, "form-group"], ["formControlName", "finalprice", "id", "finalprice", "type", "number", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "lookupform", "role", "alert", 1, "popup"], ["formControlName", "ordernumber", "id", "ordernumber", "type", "number", 1, "form-control"], ["id", "userform", "role", "alert", 1, "popup"], ["id", "userclose", 1, "popup-close", "img-replace", 3, "click"], ["formControlName", "cname", "type", "text", 1, "form-control"], ["formControlName", "cphone", "id", "cphone", "type", "tel", 1, "form-control"], ["formControlName", "cemail", "id", "cemail", "type", "email", 1, "form-control"], ["formControlName", "cdate", "id", "cdate", "type", "date", 1, "form-control"], ["formControlName", "cstreet", "id", "cstreet", "type", "text", 1, "form-control"], ["formControlName", "ccity", "id", "ccity", "type", "text", 1, "form-control"], ["id", "serviceform", "role", "alert", 1, "popup"], ["id", "serviceclose", 1, "popup-close", "img-replace", 3, "click"], ["formControlName", "product_name", "type", "text", 1, "form-control"], ["formControlName", "product_price", "type", "number", 1, "form-control"], ["id", "phoneform", "role", "alert", 1, "popup"], ["id", "phoneclose", 1, "popup-close", "img-replace", 3, "click"], [1, "row", 3, "formGroup", "ngSubmit"], ["formControlName", "phone_type", "type", "hidden", 1, "form-control", 3, "value"], ["formControlName", "phone_customer", "type", "hidden", 1, "form-control", 3, "value"], ["formControlName", "phone_userid", "type", "hidden", 1, "form-control", 3, "value"], [1, "col-md-3"], ["class", "form-control", "formControlName", "phone_name", "type", "text", 4, "ngIf"], ["class", "form-control", "formControlName", "phone_name", 4, "ngIf"], ["class", "form-control", "formControlName", "phone_imei", "type", "text", 4, "ngIf"], ["class", "form-control", "formControlName", "phone_imei", 4, "ngIf"], ["class", "col-md-3", 4, "ngIf"], [1, "col-md-4"], ["formControlName", "phone_price", "type", "number", 1, "form-control", 3, "input"], ["class", "col-md-4", 4, "ngIf"], ["formControlName", "phone_notes", 1, "form-control"], [3, "innerHTML"], ["formControlName", "phone_name", "type", "text", 1, "form-control"], ["formControlName", "phone_name", 1, "form-control"], ["formControlName", "phone_imei", "type", "text", 1, "form-control"], ["formControlName", "phone_imei", 1, "form-control"], ["formControlName", "phone_dt", 1, "form-control"], ["value", "0", "selected", ""], ["value", "dl"], ["value", "passport"], ["formControlName", "phone_dn", "type", "text", 1, "form-control"], ["formControlName", "phonetax", "type", "number", "readonly", "", 1, "form-control"], ["formControlName", "phone_total", "type", "number", 1, "form-control"], ["id", "manualform", "role", "alert", 1, "popup"], ["id", "manualclose", 1, "popup-close", "img-replace", 3, "click"], ["formControlName", "amount", "type", "number", 1, "form-control"], [1, "paymethod"], [1, "btn", 3, "click"], ["id", "amountleft"], ["class", "text-left", 4, "ngIf"], [1, "container", "numpad"], [1, "calc"], [1, "calc-key"], [1, "numpad", 3, "click"], ["data-action", "equate", 1, "key-eq", 3, "click"], ["formControlName", "cprice", "type", "number", 1, "form-control"], ["type", "button", 1, "key-eq", 3, "click"]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SalesComponent_div_30_Template, 7, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SalesComponent_div_32_Template, 3, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_div_click_33_listener() { return ctx.repairselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Repair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_div_click_36_listener() { return ctx.phoneselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SalesComponent_div_39_Template, 5, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SalesComponent_div_40_Template, 14, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SalesComponent_div_41_Template, 14, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "QTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "S.P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SalesComponent_tr_60_Template, 3, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SalesComponent_tr_61_Template, 21, 8, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "HST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Discount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_Template_input_ngModelChange_74_listener($event) { return ctx.xdiscount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_i_click_75_listener() { return ctx.discountupdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Total Due : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_84_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_88_listener() { return ctx.generalSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Round Off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_92_listener() { return ctx.manualSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, SalesComponent_div_96_Template, 12, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SalesComponent_div_97_Template, 12, 1, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, SalesComponent_div_98_Template, 32, 1, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SalesComponent_div_99_Template, 16, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, SalesComponent_div_100_Template, 44, 22, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, SalesComponent_div_101_Template, 66, 14, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, SalesComponent_div_102_Template, 40, 1, "div", 58);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchsview && ctx.search.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productsview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repairview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneview);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".appx[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{max-width:100%}.appx[_ngcontent-%COMP%], .headerx[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{display:flex}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.appx[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;font-size:15px;font-weight:500}.appx[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{overflow:hidden}.content-button[_ngcontent-%COMP%], .headerx[_ngcontent-%COMP%], .side-menu[_ngcontent-%COMP%]{white-space:nowrap}.hm-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:left}*[_ngcontent-%COMP%], .searchresults[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{box-sizing:border-box}*[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]:focus, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:focus{outline:0}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%], .quantity[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{text-align:center;-moz-appearance:textfield}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .menu-link-main[_ngcontent-%COMP%], .popup-trigger[_ngcontent-%COMP%], .side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], a#back-button[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}#trigger[_ngcontent-%COMP%], .app-card[_ngcontent-%COMP%], .content-button[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dark-light[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%], li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:root{--theme-bg-color:rgba(16 18 27 / 40%);--border-color:rgba(113 119 144 / 25%);--theme-color:#f9fafb;--inactive-color:rgb(113 119 144 / 78%);--body-font:\"Poppins\",sans-serif;--hover-menu-bg:rgba(12 15 25 / 30%);--content-title-color:#999ba5;--content-bg:rgb(146 151 179 / 13%);--button-inactive:rgb(249 250 251 / 55%);--dropdown-bg:#21242d;--dropdown-hover:rgb(42 46 60);--popup-bg:rgb(22 25 37);--search-bg:#14162b;--overlay-bg:rgba(36, 39, 59, 0.3);--scrollbar-bg:rgb(1 2 3 / 40%)}.light-mode[_ngcontent-%COMP%]{--theme-bg-color:rgb(255 255 255 / 31%);--theme-color:#3c3a3a;--inactive-color:#333333;--button-inactive:#3c3a3a;--search-bg:rgb(255 255 255 / 31%);--dropdown-bg:#f7f7f7;--overlay-bg:rgb(255 255 255 / 30%);--dropdown-hover:rgb(236 236 236);--border-color:rgb(255 255 255 / 35%);--popup-bg:rgb(255 255 255);--hover-menu-bg:rgba(255 255 255 / 35%);--scrollbar-bg:rgb(255 253 253 / 57%);--content-title-color:--theme-color}html[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased}body[_ngcontent-%COMP%]{background-image:url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);background-size:cover;background-position:center;justify-content:center;align-items:center;flex-direction:column;padding:2em;width:100%;height:100vh}.video-bg[_ngcontent-%COMP%]{position:fixed;right:0;top:0;width:100%;height:100%}.video-bg[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.dark-light[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:30px;background-color:#21242d;box-shadow:-1px 3px 8px -1px rgba(0,0,0,.2);padding:8px;border-radius:50%;z-index:3}#drop_down_with_links[_ngcontent-%COMP%], .appx[_ngcontent-%COMP%], .notification[_ngcontent-%COMP%], .notify[_ngcontent-%COMP%]{position:relative}.appx[_ngcontent-%COMP%], .content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .light-mode[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:rgba(16 18 27 / 40%)}.dark-light[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;flex-shrink:0;fill:#ffce45;stroke:#ffce45;transition:.5s}.light-mode[_ngcontent-%COMP%]   .dark-light[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:transparent;stroke:#f9fafb}.light-mode[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{border:2px solid rgba(16 18 27 / 40%)}.light-mode[_ngcontent-%COMP%]   .pop-up__title[_ngcontent-%COMP%]{border-color:#f9fafb}.light-mode[_ngcontent-%COMP%]   .dropdown.is-active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.94)}body.light-mode[_ngcontent-%COMP%]   .video-bg[_ngcontent-%COMP%]:before, body.light-mode[_ngcontent-%COMP%]:before{content:\"\";position:absolute;left:0;top:0;width:100%;height:100vh;background:linear-gradient(180deg,rgba(255,255,255,.72) 0,rgba(255,255,255,.45) 100%);-webkit-backdrop-filter:saturate(3);backdrop-filter:saturate(3)}.appx[_ngcontent-%COMP%]{flex-direction:column;width:100%;border-radius:14px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);margin:0 auto}.headerx[_ngcontent-%COMP%]{align-items:center;flex-shrink:0;height:58px;width:100%;border-bottom:1px solid rgba(113 119 144 / 25%);padding:0 30px}.checkbox[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]{display:flex;align-items:center}.header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 30px;color:rgb(113 119 144 / 78%);border-bottom:2px solid transparent;transition:.3s}@media screen and (max-width:610px){.header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.main-header-link){display:none}}.header-menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f9fafb;border-bottom:2px solid #f9fafb}.notify[_ngcontent-%COMP%]:before{content:\"\";position:absolute;background-color:#3a6df0;width:6px;height:6px;border-radius:50%;right:20px;top:16px}.menu-circle[_ngcontent-%COMP%]{width:15px;height:15px;background-color:#f96057;border-radius:50%;box-shadow:24px 0 0 0 #f8ce52,48px 0 0 0 #5fcf65;margin-right:195px;flex-shrink:0}.search-bar[_ngcontent-%COMP%]{height:40px;display:flex;width:100%;max-width:400px;padding-left:16px;border-radius:4px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;background-color:#14162b;border-radius:4px;padding:0 20px 0 40px;box-shadow:0 0 0 2px rgba(134,140,160,.02);background-image:url(\"data:image/svg+xml ;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e\");background-size:14px;background-repeat:no-repeat;background-position:16px 48%;color:#f9fafb}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-family:Poppins,sans-serif;color:rgb(113 119 144 / 78%);font-size:15px;font-weight:500}.header-profile[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 16px 0 40px;margin-left:auto;flex-shrink:0}.notification[_ngcontent-%COMP%] + svg[_ngcontent-%COMP%], .profile-img[_ngcontent-%COMP%]{margin-left:22px}.header-profile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:22px;color:#f9fafb;flex-shrink:0}.notification-number[_ngcontent-%COMP%]{position:absolute;background-color:#3a6df0;width:16px;height:16px;border-radius:50%;font-size:10px;display:flex;align-items:center;justify-content:center;color:#fff;right:-6px;top:-6px}.profile-img[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid #f9fafb}#menu.closed[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%], .wide[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%], .wide[_ngcontent-%COMP%]   .header-profile[_ngcontent-%COMP%]{display:none}.wide[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{max-width:600px;margin:auto;transition:.4s;box-shadow:0 0 0 1px rgba(113 119 144 / 25%);padding-left:0}.wide[_ngcontent-%COMP%]   .menu-circle[_ngcontent-%COMP%]{margin-right:0}.wrapper[_ngcontent-%COMP%]{display:flex;flex-grow:1}.appx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%]{color:#fff}.left-side[_ngcontent-%COMP%]{flex-basis:35%;border-right:1px solid rgba(113 119 144 / 25%);padding:0 10px;overflow:auto;height:100vh!important;flex-shrink:0}@media screen and (max-width:945px){.left-side[_ngcontent-%COMP%], .menu-circle[_ngcontent-%COMP%], .notification[_ngcontent-%COMP%] + svg[_ngcontent-%COMP%]{display:none}}.side-wrapper[_ngcontent-%COMP%] + .side-wrapper[_ngcontent-%COMP%]{margin-top:20px}.side-title[_ngcontent-%COMP%]{color:rgb(113 119 144 / 78%);margin-bottom:14px}.side-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column}.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f9fafb;display:flex;align-items:center;font-weight:400;padding:10px;font-size:14px;border-radius:6px;transition:.3s}.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:rgba(12 15 25 / 30%)}.side-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;margin-right:8px}.updates[_ngcontent-%COMP%]{position:relative;top:0;right:0;margin-left:auto;width:18px;height:18px;font-size:11px}.main-header[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid rgba(113 119 144 / 25%);height:58px;flex-shrink:0}.main-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{margin-left:150px}.main-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px 24px}.main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.menu-link-main[_ngcontent-%COMP%]{color:#f9fafb;padding:0 30px}@media screen and (max-width:1055px){.menu-link-main[_ngcontent-%COMP%], .notify[_ngcontent-%COMP%]{display:none}.main-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]{margin:auto}}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;color:#f9fafb;padding:0 40px;height:100%;overflow:auto;background-color:rgba(16 18 27 / 40%)}@media screen and (max-width:510px){.content-wrapper[_ngcontent-%COMP%]{padding:20px}}.content-wrapper-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:space-between;background-image:url(\"https://www.transparenttextures.com/patterns/cubes.png\"),linear-gradient(to right top,#cf4af3,#e73bd7,#f631bc,#fd31a2,#ff3a8b,#ff4b78,#ff5e68,#ff705c,#ff8c51,#ffaa49,#ffc848,#ffe652);border-radius:14px;padding:20px 40px}.content-wrapper.overlay[_ngcontent-%COMP%]{pointer-events:none;transition:.3s;background-color:rgba(36,39,59,.3)}.overlay-app[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;pointer-events:all;background-color:rgba(36,39,59,.8);opacity:0;visibility:hidden;transition:.3s}.overlay-app.is-active[_ngcontent-%COMP%], .pop-up.visible[_ngcontent-%COMP%]{visibility:visible;opacity:1}.img-content[_ngcontent-%COMP%]{font-weight:500;font-size:17px;display:flex;align-items:center;margin:0}.img-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;margin-right:14px}.content-text[_ngcontent-%COMP%]{font-weight:400;font-size:14px;margin-top:16px;line-height:1.7em;color:#ebecec;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.content-wrapper-context[_ngcontent-%COMP%]{max-width:350px}.content-button[_ngcontent-%COMP%]{background-color:#3a6df0;border:none;padding:8px 26px;color:#fff;border-radius:20px;margin-top:16px;transition:.3s}.content-wrapper-img[_ngcontent-%COMP%]{width:186px;object-fit:cover;margin-top:-25px;object-position:center}.content-section[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:column}.content-section-title[_ngcontent-%COMP%]{margin-bottom:14px}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;justify-content:space-around;background-color:rgb(146 151 179 / 13%);padding-left:0;margin:0;border-radius:14px;border:1px solid rgba(16 18 27 / 40%)}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:10px 18px;display:flex;align-items:center;font-size:16px;width:100%;height:100%;white-space:nowrap;transition:.3s}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:first-child{border-radius:13px 13px 0 0}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:last-child{border-radius:0 0 13px 13px}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{border-top:1px solid rgba(113 119 144 / 25%)}.content-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;border-radius:6px;margin-right:16px;flex-shrink:0}.products[_ngcontent-%COMP%]{display:flex;align-items:center;width:150px}.status[_ngcontent-%COMP%]{margin-left:auto;width:140px;font-size:15px;position:relative}@media screen and (max-width:700px){.status[_ngcontent-%COMP%]{display:none}}.status-circle[_ngcontent-%COMP%]{width:6px;height:6px;background-color:#396df0;position:absolute;border-radius:50%;top:4px;left:-20px}.status-circle.green[_ngcontent-%COMP%]{background-color:#3bf083}.status-button[_ngcontent-%COMP%]{font-size:15px;margin-top:0;padding:6px 24px}@media screen and (max-width:390px){.status-button[_ngcontent-%COMP%]{padding:6px 14px}}.status-button.open[_ngcontent-%COMP%]{background:0 0;color:rgb(249 250 251 / 55%);border:1px solid}.status-button[_ngcontent-%COMP%]:not(.open):hover{color:#fff;border-color:#fff}.content-button[_ngcontent-%COMP%]:not(.open):hover{background:#1e59f1}.menu[_ngcontent-%COMP%]{width:5px;height:5px;background-color:rgb(249 250 251 / 55%);border-radius:50%;box-shadow:7px 0 0 0 rgb(249 250 251 / 55%),14px 0 0 0 rgb(249 250 251 / 55%);margin:0 12px}@media screen and (max-width:415px){.content-wrapper-header[_ngcontent-%COMP%]{padding:20px}.adobe-product[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:none}}.dropdown[_ngcontent-%COMP%]{position:relative;height:53px;width:40px;top:-24px;display:flex;left:-5px;background:0 0;border:none}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .pop-up[_ngcontent-%COMP%]{position:absolute;opacity:0}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#21242d;height:110px;width:120px;right:0;top:20px;pointer-events:none;transform:translatey(10px);transition:.4s}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f9fafb;font-size:12px}.dropdown.is-active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{opacity:1;pointer-events:all;transform:translatey(25px)}.dropdown.is-active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:rgb(42 46 60)}.button-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;width:187px;margin-left:auto}@media screen and (max-width:480px){body[_ngcontent-%COMP%]{padding:.8em}.headerx[_ngcontent-%COMP%]{padding:0 16px}.products[_ngcontent-%COMP%]{width:120px}.button-wrapper[_ngcontent-%COMP%]{width:auto}}.pop-up[_ngcontent-%COMP%]{padding:30px 40px;top:50%;left:50%;transform:translate(-50%,-50%);overflow-y:auto;box-shadow:0 6px 30px rgba(0,0,0,.4);transition:.3s;z-index:10;background-color:rgb(22 25 37);width:500px;visibility:hidden;border-radius:6px;display:flex;flex-direction:column;white-space:normal}@media screen and (max-width:570px){.content-wrapper-img[_ngcontent-%COMP%]{width:110px}.pop-up[_ngcontent-%COMP%]{width:100%}}.pop-up__title[_ngcontent-%COMP%]{padding-bottom:20px;border-bottom:1px solid rgba(113 119 144 / 25%);display:flex;justify-content:space-between;align-items:center}.pop-up__subtitle[_ngcontent-%COMP%]{white-space:normal;margin:20px 0;font-size:14px;font-weight:400;line-height:1.8em}.pop-up__subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f9fafb}.content-button-wrapper[_ngcontent-%COMP%]   .content-button.status-button.open.close[_ngcontent-%COMP%]{width:auto}.content-section[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{margin-right:0;width:24px}.checkbox-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px;font-weight:400}.app-card[_ngcontent-%COMP%], .footer_panel[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%], span.date[_ngcontent-%COMP%], span.time[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:16px}.checkbox-wrapper[_ngcontent-%COMP%] + .checkbox-wrapper[_ngcontent-%COMP%]{margin:20px 0 40px}.content-button-wrapper[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{margin-right:8px}.checkbox[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{content:\"\";margin-right:10px;width:15px;height:15px;border:1px solid #f9fafb;border-radius:4px;cursor:pointer;flex-shrink:0}.checkbox[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{background-color:#3a6df0;border-color:#3a6df0;background-image:url(\"data:image/svg+xml ;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e\");background-position:50%;background-size:12px;background-repeat:no-repeat}.content-button-wrapper[_ngcontent-%COMP%]{margin-top:auto;margin-left:auto}.apps-card[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;width:calc(100% + 50px)}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:calc(20% - 20px);margin-right: 10px !important;background-color:rgb(146 151 179 / 13%);border-radius:14px;border:1px solid rgba(16 18 27 / 40%);padding:20px;transition:.3s}.app-card[_ngcontent-%COMP%]:hover{transform:scale(1.02);background-color:rgba(16 18 27 / 40%)}.app-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;border-radius:6px;margin-right:12px;flex-shrink:0}span.date[_ngcontent-%COMP%], span.username[_ngcontent-%COMP%]{margin-right:30px}.app-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;align-items:center;width:100%;height:auto}.app-card__subtext[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:1.6em;margin-top:20px;border-bottom:1px solid rgba(113 119 144 / 25%);padding-bottom:20px}.app-card-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:auto;margin-top:16px}@media screen and (max-width:1110px){.app-card[_ngcontent-%COMP%]{width:calc(50% - 20px)}.app-card[_ngcontent-%COMP%]:last-child{margin-top:20px;margin-left:0}}@media screen and (max-width:565px){.app-card[_ngcontent-%COMP%]{width:calc(100% - 20px);margin-top:20px}.app-card[_ngcontent-%COMP%] + .app-card[_ngcontent-%COMP%]{margin-left:0}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgb(1 2 3 / 40%);border-radius:10px}button#reset-button[_ngcontent-%COMP%]{margin-right:30px;background:#3a6df0;color:#fff;padding:10px 15px;font-size:16px;border-radius:5px;border:none;letter-spacing:1px}button#reset-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], i.fa.fa-arrow-left.link-icon[_ngcontent-%COMP%]{margin-right:10px}.grandtotal[_ngcontent-%COMP%]{background:#000;text-align:center;margin:5px 0;padding:10px;font-size:26px}.col-sm-12.col-md-4[_ngcontent-%COMP%]{display:inline-flex;width:33.33%}.footer_panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;font-size:18px;padding:5px 0;font-weight:600}.form-group[_ngcontent-%COMP%], .oneline[_ngcontent-%COMP%], .projects-section-header.add-user.textbox[_ngcontent-%COMP%]{display:inline-flex}span.col-md-3.text-center[_ngcontent-%COMP%]{width:25%;display:block}button#updatefinal[_ngcontent-%COMP%]{padding:2px 15px;line-height:30px}.h4-14[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:12px;margin-top:0;margin-bottom:5px}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;width:100%;border-collapse:collapse;padding:1px 5px}.hm-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px 4px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:8px 6px}.table-b[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-b[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd}.hm-p[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .hm-p[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:3px 0}.cropped[_ngcontent-%COMP%]{float:right;margin-bottom:20px;height:100px;overflow:hidden}.cropped[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;margin:8px 0 0 80px}.main-pd-wrapper[_ngcontent-%COMP%]{box-shadow:0 0 10px #ddd;background-color:#fff;border-radius:10px;padding:15px}#carousel-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .btn-black[_ngcontent-%COMP%], div#carousel-container[_ngcontent-%COMP%]{background:#000}.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{word-break:break-all;border:1px solid #ddd;padding:10px;font-size:14px}.invoice-items[_ngcontent-%COMP%]{font-size:14px;border-top:1px dashed #ddd}.iconleft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .popup-trigger[_ngcontent-%COMP%]{font-size:18px}.invoice-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:14px 0}.btn-black[_ngcontent-%COMP%]{color:#fff}.quantity[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{line-height:20px;margin:0 5px;background-color:#000;color:#fff}#menu[_ngcontent-%COMP%], #trigger[_ngcontent-%COMP%], .searchresults[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#fff}.quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.app-sidebar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before{font-size:24px!important}#carousel-container[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px;margin:0;font-weight:600;background:#000;color:#fff;padding:5px 10px}img.proimage[_ngcontent-%COMP%]{width:100%;height: auto;}.swiper-container[_ngcontent-%COMP%]{width:85%;overflow:hidden}.categoryarrow.controls-slide[_ngcontent-%COMP%]{display:inline-flex;position:relative;right:0;top:90%}.modelarrow.controls-slide[_ngcontent-%COMP%]{display:inline-flex;position:relative;right:0;top:125%;width:100%}#carousel-productsx[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{width:25%!important;height:150px!important;margin:5px 0}.footer_panel[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], .footer_panel[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{padding:0 2px}.input-group-prepend[_ngcontent-%COMP%]{position:relative;left:20%;z-index:99}.input-group-append[_ngcontent-%COMP%]{position:relative;right:20%;z-index:99}.swiper-container.xmodels.swiper-initialized.swiper-horizontal[_ngcontent-%COMP%]{width:85%;margin:0 auto}.swiper-button-prev.prevxm[_ngcontent-%COMP%]{left:-75%!important;position:relative!important}.swiper-button-next.nextxm[_ngcontent-%COMP%]{left:80%!important}.footer_panel[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:5px}span#buttonupdate[_ngcontent-%COMP%]{bottom:-15px;position:relative}.projects-section-header.add-user.textbox[_ngcontent-%COMP%]{z-index:9999;background:0 0;width:100%;position:relative;margin-top:0}.header-right[_ngcontent-%COMP%]{position:fixed;border:1px solid #f2f2f2;background:#fff;z-index:9999}table#invoice-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table#invoice-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-left:10px!important;color:#fff!important}.mr5[_ngcontent-%COMP%]{margin-right:5px}span#date[_ngcontent-%COMP%]{margin-right:20px}.popup-trigger[_ngcontent-%COMP%]{display:block;width:170px;right:2rem;margin:3em auto;text-align:center;color:#fff;padding:1rem 2rem;font-weight:700;text-transform:uppercase;border-radius:50em;background:#35a785;box-shadow:0 3px 0 rgba(0,0,0,.07);transition:.3s}.qty-input[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.popup-trigger[_ngcontent-%COMP%]:hover{opacity:.8}.popup[_ngcontent-%COMP%]{position:fixed;left:0;top:40%;height:100%;z-index:1000;width:100%;transition:.5s}.popup.is-visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transition:1s}.popup-container[_ngcontent-%COMP%]{transform:translateY(-50%);transition:.5s;position:relative;width:-webkit-max-content;width:max-content;margin:2em auto;top:5%;padding:2rem;background:#fff;border-radius:.25em .25em .4em .4em;box-shadow:0 0 20px rgba(0,0,0,.2)}.is-visible[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%]{transform:translateY(0);transition:.5s}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]{position:absolute;top:8px;font-size:0;right:8px;width:30px;height:30px}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::after, .popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::before{content:'';position:absolute;top:12px;width:14px;height:3px;background-color:#8f9cb5}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::before{transform:rotate(45deg);left:8px}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]::after{transform:rotate(-45deg);right:8px}.popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]:hover:after, .popup-container[_ngcontent-%COMP%]   .popup-close[_ngcontent-%COMP%]:hover:before{background-color:#35a785;transition:.3s}.text-left[_ngcontent-%COMP%]{text-align:left}a#fullscreen-button[_ngcontent-%COMP%]:hover, a#opencalculator[_ngcontent-%COMP%]:hover{background:#000;color:#fff}div#searchResultsContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px}.searchresults[_ngcontent-%COMP%]{margin-top:5%;display:block!important;width:100%!important;position:absolute;top:10%}div#searchResultsContainer[_ngcontent-%COMP%]{width:60%!important;margin:0 auto;text-align:center}div#paginationx[_ngcontent-%COMP%]{position:absolute;bottom:0;right:60%}.searchresults[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:5px 10px;text-align:center;margin:10px 0;height:180px}a#back-button[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;background:#000;border-radius:10px;color:#fff;padding:0 20px;position:relative;right:-10%;top:100%;margin:0 auto;display:none}a#back-button[_ngcontent-%COMP%]:hover{font-size:16px}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%], .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]{background:0 0;color:inherit;font-weight:700;font-size:inherit;border:none;display:inline-block;min-width:0;height:2.5rem;line-height:1}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]{width:50px;min-width:0;display:inline-block;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]::-webkit-inner-spin-button, .qty-input[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]{padding:0;width:2.5rem;font-size:1.25em;text-indent:-100px;overflow:hidden;position:relative}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:after, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:before{content:\"\";height:2px;width:10px;position:absolute;display:block;background:#000;top:0;bottom:0;left:0;right:0;margin:auto}.qty-input[_ngcontent-%COMP%]   .qty-count--minus[_ngcontent-%COMP%]{border-right:1px solid #e2e2e2}.qty-input[_ngcontent-%COMP%]   .qty-count--add[_ngcontent-%COMP%]{border-left:1px solid #e2e2e2}.qty-input[_ngcontent-%COMP%]   .qty-count--add[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled{color:#ccc;background:#f2f2f2;cursor:not-allowed;border-color:transparent}.qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled:after, .qty-input[_ngcontent-%COMP%]   .qty-count[_ngcontent-%COMP%]:disabled:before{background:#ccc}.qty-input[_ngcontent-%COMP%]{background:#fff;display:inline-flex;align-items:center;overflow:hidden;border-radius:4px;box-shadow:0 1em 2em -.9em rgba(0,0,0,.7)}.bx[_ngcontent-%COMP%], li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#333}.components_container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;gap:16px}#trigger[_ngcontent-%COMP%], .select_component[_ngcontent-%COMP%]{align-items:center;display:flex}.select_component[_ngcontent-%COMP%]{height:40px;justify-content:space-between;border-radius:8px;border:2px solid #e9e9e9;margin:0 auto;background:#fff;padding:0 10px}select[_ngcontent-%COMP%]{background-color:transparent;border:none;padding:10px}.bx[_ngcontent-%COMP%]{font-size:20px}#trigger[_ngcontent-%COMP%]{border:2px solid #e9e9e9;padding:10px 14px;gap:8px;border-radius:8px}#menu[_ngcontent-%COMP%]{position:absolute;top:46px;left:0;width:180px;border:1px solid #e9e9e9;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,.15);padding:8px;transition:.5s ease-in}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px}.select_component[_ngcontent-%COMP%]:focus-visible, select[_ngcontent-%COMP%]:focus-visible{border-radius:8px;background-color:rgba(0,0,0,.05)}#trigger[_ngcontent-%COMP%]:focus-visible, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus-visible{border-radius:8px;background-color:rgba(0,0,0,.05)}#trigger[_ngcontent-%COMP%]:hover, .select_component[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05);border-radius:4px}tfoot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px;width:150px}i.fa.fa-refresh[_ngcontent-%COMP%]{background:#fff;padding:10px}.apps-card.categorysection[_ngcontent-%COMP%]{position:fixed;bottom:0;background:#000}.categorysection[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%]{padding: 15px;width:-webkit-max-content!important;width:max-content!important;color:#fff!important;margin:5px!important;text-align:center!important}.categorysection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size: 20px;text-align:center!important;margin:0 auto;color:#fff}.app-card[_ngcontent-%COMP%] + .app-card[_ngcontent-%COMP%]{margin:5px 0}.content-section[_ngcontent-%COMP%]{height:80vh!important;overflow-y:scroll;overflow-x:hidden!important}.content-section-title[_ngcontent-%COMP%]{color:#fff!important;font-size:28px;text-transform:uppercase;font-weight:600}.footer_panel[_ngcontent-%COMP%]{bottom:0%;position:fixed;height: 40%;}button#openuseradd[_ngcontent-%COMP%]{background:#000;border:none;line-height:30px;color:#fff;padding:0 15px;border-radius:5px}.select_component[_ngcontent-%COMP%]:hover{background:#f0f8ff!important}#invoice-table[_ngcontent-%COMP%]   i.fa.fa-close.text-danger[_ngcontent-%COMP%]{margin-left:15px}.iconleft[_ngcontent-%COMP%]{display:inline-flex;float:left;background:#000;padding:5px 20px;margin-right:10px;border-radius:5px}.popup[_ngcontent-%COMP%]   label.text-left[_ngcontent-%COMP%]{width:100%;display:block}.popup[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{line-height:35px;height:35px;margin:5px 0}.popup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-radius:8px;background-color:rgba(0,0,0,.05)}#manualform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], form#userpost[_ngcontent-%COMP%]{width:100%}#generalform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%], #manualform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{width:100%;background:#000;color:#fff;border-radius:5px}#userform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{width:100%!important}#userform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:10px 0;line-height:35px;font-size:18px}#userform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%]{background:#000;color:#fff;width:100%;border-radius:5px}span.pricetag[_ngcontent-%COMP%]{text-align: center;display: block !IMPORTANT;margin-top: 10px;}.app-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:white;text-align: center;}tfoot[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%] {text-transform: uppercase;font-size: 26px !important;}tfoot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {font-size: 26px !important;border-radius:5px;border:none;}i.fa.fa-refresh[_ngcontent-%COMP%] {background: black !important;color: white !important;border-radius: 5px;}.side-wrapper[_ngcontent-%COMP%] {overflow-x: hidden;display: block;overflow-y: scroll;height: 60vh;}.newcatsection[_ngcontent-%COMP%]   .app-card[_ngcontent-%COMP%] {width: -webkit-max-content;width: max-content;font-size: 18px;padding: 15px 20px;}.small-text[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n    font-size: 1.5em;\r\n  }.mini-text[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n    margin-top: 1em;\r\n  }.calc[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    margin: auto;\r\n    position: relative;\r\n    height: auto;\r\n    width: 40em;\r\n    margin-top: 1em;\r\n    margin-bottom: 1em;\r\n    overflow: hidden;\r\n   \r\n    box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.3);\r\n  }.calc-display[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    color: #000;\r\n    font-size: 2.5em;\r\n    padding: 0.5em 0.75em;\r\n    text-align: right;\r\n  }.calc-key[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-gap: 0px;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }.calc-key[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding: 1.25em 1.25em;\r\n    position: relative;\r\n    text-align: center;\r\n  }.calc-key[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:active::before, .calc-key[_ngcontent-%COMP%]    > .is-depressed[_ngcontent-%COMP%]::before {\r\n    background: #8EC5FC;\r\n    content: \"\";\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    opacity: 0.3;\r\n    position: absolute;\r\n    z-index: 1;\r\n  }.numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 0;\r\n    background: transparent;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n    font-weight: inherit;\r\n    outline: none;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    text-align: left;\r\n  }.numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .numpad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }.numpad[_ngcontent-%COMP%]   .key-op[_ngcontent-%COMP%] {\r\n    background: #eee;\r\n    font-size: 1.25em;\r\n    padding: 0.8em;\r\n  }.numpad[_ngcontent-%COMP%]   .key-eq[_ngcontent-%COMP%] {\r\n    background: #333;\r\n    color: #ffffff;\r\n    grid-column: -2;\r\n    grid-row: 2/span 4;\r\n    font-size: 1.25em;\r\n  }.numpad[_ngcontent-%COMP%]   .themer[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 10em;\r\n  }.numpad[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\r\n    padding: 1.1em;\r\n    border-radius: 50%;\r\n  }.opt1[_ngcontent-%COMP%] {\r\n    background: #2196f3;\r\n  }.opt2[_ngcontent-%COMP%] {\r\n    background: #9c27b0;\r\n  }.opt3[_ngcontent-%COMP%] {\r\n    background: #e91e63;\r\n  }.numpad[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: black !IMPORTANT;\r\n    font-size: 24px !IMPORTANT;\r\n    margin: 0px 5px;\r\n    color: white;\r\n    padding: 10px;\r\n    border-radius: 5px !important;\r\n}.popup[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin: 10px 0px !important;\r\n}.popup[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin: 0px !important;\r\n}#manualform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #manualform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n    font-size: 30px !important;\r\n}#manualform[_ngcontent-%COMP%]   label.text-left[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    font-weight: 600;\r\n}#manualform[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    background: black;\r\n    color: white;\r\n    border-radius: 5px;\r\n}#manualform[_ngcontent-%COMP%]   button.numpad[_ngcontent-%COMP%] {\r\n    font-size: 24px !important;\r\n    padding: 10px !important;\r\n    text-align: center !important;\r\n    border: 1px solid black !important;\r\n    border-radius: 0px !important;\r\n}#manualform[_ngcontent-%COMP%]   button.btn.selected[_ngcontent-%COMP%] {\r\n    background: #ff0e00 !important;\r\n    border: none;\r\n}table[_ngcontent-%COMP%]   i.fa.fa-pencil[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}table[_ngcontent-%COMP%]   i.fa.fa-close.text-danger[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}a.backtohome[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: black;\r\n  padding: 5px 30px;\r\n  border-radius: 5px;\r\n}a.backtohome[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n font-size:28px;\r\n}#lookupform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%] {\r\n  background: black;\r\n  color: white;\r\n  font-size: 18px;\r\n  display: block;\r\n  width: 100%;\r\n  line-height:35px;\r\n}#lookupform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height:auto;\r\n  line-height:35px;\r\n  width:100%;\r\n}#lookupform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-size:24px;\r\n  font-weight:500;\r\n}#lookupform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], #phoneform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  width: 100% !important;\r\n}#lookupform[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%], #serviceform[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%] {\r\n  width:30%;\r\n}#phoneform[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%]{\r\n  width:100%;\r\n}img.text-center[_ngcontent-%COMP%] {\r\n  margin: 0px auto;\r\n  display: block;\r\n}.iconleft.mg10[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  float: right;\r\n  background: #a90101;\r\n}.phonesuccess[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n  color: black;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  font-weight: 500;\r\n  margin-top: 30px;\r\n}.phoneerror[_ngcontent-%COMP%] {\r\n  background-color: #c0030333;\r\n  color: black;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  font-weight: 500;\r\n  margin-top: 30px;\r\n}.app-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}span.pricetag[_ngcontent-%COMP%] {\r\n  margin-top: 5px !important;\r\n  font-size: 18px;\r\n}@media screen and (min-width: 1537px) and (max-width: 1800px) {\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 33%;\r\n  }\r\n\r\n}@media screen and (min-width: 1400px) and (max-width: 1536px) {\r\n  .left-side[_ngcontent-%COMP%]{\r\n    flex-basis:35%;\r\n  }\r\n  .content-wrapper[_ngcontent-%COMP%]{\r\n    padding:0 20px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n   .app-card[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 35%;\r\n  }\r\n  \r\n}@media screen and (min-width: 1199px) and (max-width: 1399px) {\r\n  .left-side[_ngcontent-%COMP%]{\r\n    flex-basis:40%;\r\n  }\r\n  .content-wrapper[_ngcontent-%COMP%]{\r\n    padding:0 20px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n  .app-card[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 35%;\r\n  }\r\n  \r\n}@media screen and (max-width: 799px) {\r\n  .left-side[_ngcontent-%COMP%]{\r\n    flex-basis:40%;\r\n  }\r\n  .content-wrapper[_ngcontent-%COMP%]{\r\n    padding:0 20px;\r\n  }\r\n  .content-section[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n  .app-card[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n  .footer_panel[_ngcontent-%COMP%] {\r\n    height: 35%;\r\n  }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGNBQWMsQ0FBQyxvQkFBb0IsWUFBWSxDQUFDLHVCQUF1Qiw4QkFBOEIsQ0FBQyx3QkFBd0IsV0FBVyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSxlQUFlLENBQUMsb0NBQW9DLGtCQUFrQixDQUFDLGNBQWMsZUFBZSxDQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyw0REFBNEQsU0FBUyxDQUFDLHFEQUFxRCxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxzR0FBc0csb0JBQW9CLENBQUMsK0dBQStHLGNBQWMsQ0FBQyxNQUFNLHFDQUFxQyxDQUFDLHNDQUFzQyxDQUFDLHFCQUFxQixDQUFDLHVDQUF1QyxDQUFDLGdDQUFnQyxDQUFDLG9DQUFvQyxDQUFDLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLHdDQUF3QyxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixDQUFDLHdCQUF3QixDQUFDLG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLCtCQUErQixDQUFDLFlBQVksdUNBQXVDLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMseUJBQXlCLENBQUMsa0NBQWtDLENBQUMscUJBQXFCLENBQUMsbUNBQW1DLENBQUMsaUNBQWlDLENBQUMscUNBQXFDLENBQUMsMkJBQTJCLENBQUMsdUNBQXVDLENBQUMscUNBQXFDLENBQUMsbUNBQW1DLENBQUMsS0FBSyxrQ0FBa0MsQ0FBQyxLQUFLLGtIQUFrSCxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDLFdBQVcsQ0FBcUIsZ0JBQWdCLENBQUMsWUFBWSxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQywyQ0FBMkMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGtEQUFrRCxpQkFBaUIsQ0FBQyxtRUFBbUUscUNBQXFDLENBQUMsZ0JBQWdCLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyx5QkFBeUIscUNBQXFDLENBQUMsMkJBQTJCLG9CQUFvQixDQUFDLG1DQUFtQyxzQ0FBc0MsQ0FBQyx3REFBd0QsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxxRkFBcUYsQ0FBQyxtQ0FBbUMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxhQUFhLENBQUMsU0FBUyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLG1DQUFtQyxDQUFDLGNBQWMsQ0FBQyxvQ0FBb0Msc0NBQXNDLFlBQVksQ0FBQyxDQUFDLDhDQUE4QyxhQUFhLENBQUMsK0JBQStCLENBQUMsZUFBZSxVQUFVLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsVUFBVSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxnREFBZ0QsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLFVBQVUsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsMENBQTBDLENBQUMsa2ZBQWtmLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFtUSwrQkFBK0IsOEJBQThCLENBQUMsNEJBQTRCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQywrQkFBK0IsZ0JBQWdCLENBQUMsb0JBQW9CLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFxQixnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxnRUFBZ0UsWUFBWSxDQUFDLGtCQUFrQixlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyw0Q0FBNEMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLGNBQWMsQ0FBQyxTQUFTLFlBQVksQ0FBQyxXQUFXLENBQUMsZ0NBQWdDLFVBQVUsQ0FBQyxXQUFXLGNBQWMsQ0FBQyw4Q0FBOEMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxvQ0FBb0MsMENBQTBDLFlBQVksQ0FBQyxDQUFDLDRCQUE0QixlQUFlLENBQUMsWUFBWSw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLGFBQWEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLG1CQUFtQixxQ0FBcUMsQ0FBQyxlQUFlLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsYUFBYSxZQUFZLENBQUMsa0JBQWtCLENBQUMsK0NBQStDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsaUJBQWlCLENBQUMsNEJBQTRCLGlCQUFpQixDQUFDLGdCQUFnQixZQUFZLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixhQUFhLENBQUMsY0FBYyxDQUFDLHFDQUFxQyx3QkFBd0IsWUFBWSxDQUFDLDBCQUEwQixXQUFXLENBQUMsQ0FBQyxpQkFBaUIsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxvQ0FBb0MsaUJBQWlCLFlBQVksQ0FBQyxDQUFDLHdCQUF3QixZQUFZLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLDRNQUE0TSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixtQkFBbUIsQ0FBQyxjQUFjLENBQUMsa0NBQWtDLENBQUMsYUFBYSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsdUNBQXVDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxhQUFhLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLGdCQUFnQix3QkFBd0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLFdBQVcsQ0FBcUIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQTJCLHNCQUFzQixDQUFDLGlCQUFpQixlQUFlLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixrQkFBa0IsQ0FBQyxvQkFBb0IsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsdUNBQXVDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMseUNBQXlDLDJCQUEyQixDQUFDLHdDQUF3QywyQkFBMkIsQ0FBQywwQkFBMEIsNENBQTRDLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxZQUFZLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFFBQVEsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsUUFBUSxZQUFZLENBQUMsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsd0JBQXdCLENBQUMsZUFBZSxjQUFjLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLG9DQUFvQyxlQUFlLGdCQUFnQixDQUFDLENBQUMsb0JBQW9CLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGlDQUFpQyxrQkFBa0IsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxVQUFVLENBQUMsdUNBQXVDLENBQUMsaUJBQWlCLENBQUMsNkVBQTZFLENBQUMsYUFBYSxDQUFDLG9DQUFvQyx3QkFBd0IsWUFBWSxDQUFDLHFCQUFxQixZQUFZLENBQUMsQ0FBQyxVQUFVLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsYUFBYSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsU0FBUyxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLGdDQUFnQyw4QkFBOEIsQ0FBQyxnQkFBZ0IsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQ0FBb0MsS0FBSyxZQUFZLENBQUMsU0FBUyxjQUFjLENBQUMsVUFBVSxXQUFXLENBQUMsZ0JBQWdCLFVBQVUsQ0FBQyxDQUFDLFFBQVEsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxlQUFlLENBQUMsb0NBQW9DLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLG9DQUFvQyxxQkFBcUIsV0FBVyxDQUFDLFFBQVEsVUFBVSxDQUFDLENBQUMsZUFBZSxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixhQUFhLENBQUMsaUVBQWlFLFVBQVUsQ0FBQyx3QkFBd0IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsOERBQThELGNBQWMsQ0FBQyxvQ0FBb0Msa0JBQWtCLENBQUMscUNBQXFDLGdCQUFnQixDQUFDLHVCQUF1QixVQUFVLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLCtCQUErQix3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxvVEFBb1QsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyw2QkFBNkIsQ0FBQyx1Q0FBdUMsQ0FBQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGdCQUFnQixxQkFBcUIsQ0FBQyxxQ0FBcUMsQ0FBQyxjQUFjLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLGlCQUFpQixDQUFDLGVBQWUsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLGNBQWMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLCtDQUErQyxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixZQUFZLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLHFDQUFxQyxVQUFVLHNCQUFzQixDQUFDLHFCQUFxQixlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsb0NBQW9DLFVBQVUsdUJBQXVCLENBQUMsZUFBZSxDQUFDLG9CQUFvQixhQUFhLENBQUMsQ0FBQyxvQkFBb0IsU0FBUyxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQiwyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsbURBQW1ELGlCQUFpQixDQUFDLFlBQVksZUFBZSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLG9CQUFvQixtQkFBbUIsQ0FBQyxZQUFZLENBQUMscUJBQXFCLFVBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywrREFBK0QsbUJBQW1CLENBQUMsMEJBQTBCLFNBQVMsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsY0FBYyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLDRCQUE0QixDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxlQUFlLENBQUMsTUFBTSxlQUFlLENBQUMsd0JBQXdCLHFCQUFxQixDQUFDLGtCQUFrQixhQUFhLENBQUMsU0FBUyxXQUFXLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxhQUFhLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLG9FQUFvRSxlQUFlLENBQUMsc0NBQXNDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZUFBZSxjQUFjLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLGNBQWMsQ0FBQyxrQkFBa0IsY0FBYyxDQUFDLFdBQVcsVUFBVSxDQUFDLGVBQWUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxvQ0FBb0MscUJBQXFCLENBQUMsc0ZBQXNGLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxzQkFBc0Isd0JBQXdCLENBQUMscUNBQXFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsa0JBQWtCLFNBQVMsQ0FBQyxlQUFlLENBQUMsOEJBQThCLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsMkJBQTJCLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGtDQUFrQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsZ0RBQWdELGFBQWEsQ0FBQyxxQkFBcUIsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQywrREFBK0QsU0FBUyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsMkJBQTJCLGtCQUFrQixDQUFDLGdDQUFnQyxpQkFBaUIsQ0FBQyxrQkFBa0IsWUFBWSxDQUFDLGlCQUFpQixDQUFDLDBDQUEwQyxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsY0FBYyxjQUFjLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyw4Q0FBOEMsMkJBQTJCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxVQUFVLGlCQUFpQixDQUFDLGVBQWUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsa0NBQWtDLENBQUMsY0FBYyxDQUFDLGtDQUFrQyxVQUFVLENBQUMscUJBQXFCLFVBQVUsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsMEJBQTBCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHlCQUFpQixDQUFqQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsbUNBQW1DLENBQUMsa0NBQWtDLENBQUMsNkJBQTZCLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyw4QkFBOEIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQywyRUFBMkUsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLHNDQUEwSix1QkFBdUIsQ0FBQyxRQUFRLENBQUMscUNBQTZKLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxxRkFBcUYsd0JBQXdCLENBQUMsY0FBYyxDQUFDLFdBQVcsZUFBZSxDQUFDLGlEQUFpRCxlQUFlLENBQUMsVUFBVSxDQUFDLDhCQUE4QixjQUFjLENBQUMsZUFBZSxhQUFhLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLDJCQUEyQixtQkFBbUIsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsY0FBYyx5QkFBaUIsQ0FBakIsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLG9CQUFvQixjQUFjLENBQUMsOENBQThDLGNBQWMsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyx5QkFBbUIsQ0FBbkIsb0JBQW9CLENBQUMsc0dBQXNHLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLFNBQVMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLHlEQUF5RCxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsNkJBQTZCLDhCQUE4QixDQUFDLDJCQUEyQiw2QkFBNkIsQ0FBQyxpQ0FBaUMsdUJBQXVCLENBQUMsK0JBQStCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQywyRUFBMkUsZUFBZSxDQUFDLFdBQVcsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyx5Q0FBeUMsQ0FBQyxTQUFTLFVBQVUsQ0FBQyxzQkFBc0IsVUFBVSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLDJCQUEyQixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxPQUFPLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxjQUFjLENBQUMsU0FBUyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxZQUFZLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLENBQUMsWUFBWSxDQUFDLHFEQUFxRCxpQkFBaUIsQ0FBQyxnQ0FBZ0MsQ0FBQywwQ0FBMEMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUMsa0RBQWtELGdDQUFnQyxDQUFDLGlCQUFpQixDQUFDLFlBQVksWUFBWSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLGFBQWEsQ0FBQyxtQ0FBMkIsQ0FBM0IsMkJBQTJCLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsc0JBQXNCLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLG9CQUFvQixZQUFZLENBQUMsaUJBQWlCLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLGNBQWMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHdCQUF3Qiw0QkFBNEIsQ0FBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsVUFBVSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUMsc0NBQXNDLFVBQVUsQ0FBQyx1RUFBdUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLG9CQUFvQixDQUFDLGdCQUFnQixVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxpQ0FBaUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsY0FBYyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxzQkFBc0IseUJBQXlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxhQUFhLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLGlCQUFpQiw0QkFBNEIsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLDBCQUEwQiwwQkFBa0IsQ0FBbEIsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBR3ZrdUI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCLENBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQixDQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsMkNBQTJDO0VBQzdDLENBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CLENBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHFDQUFxQztFQUN2QyxDQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEIsQ0FFQTs7SUFFRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWixDQUVBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQixDQUVBOzs7SUFHRSxhQUFhO0VBQ2YsQ0FFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQixDQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQixDQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtFQUNqQixDQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQixDQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCLENBRUE7SUFDRSxtQkFBbUI7RUFDckIsQ0FFQTtJQUNFLG1CQUFtQjtFQUNyQixDQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMsQ0FFQTtJQUNJLDJCQUEyQjtBQUMvQixDQUNBO0lBQ0ksc0JBQXNCO0FBQzFCLENBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCLENBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCLENBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QixDQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDZCQUE2QjtBQUNqQyxDQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEIsQ0FDQTtJQUNJLGVBQWU7QUFDbkIsQ0FFQTtJQUNJLGVBQWU7QUFDbkIsQ0FDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQixDQUNBO0NBQ0MsY0FBYztBQUNmLENBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQixDQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1osQ0FDQTtJQUNJLGNBQWM7RUFDaEIsZUFBZTtBQUNqQixDQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QixDQUVBO0VBQ0UsU0FBUztBQUNYLENBQ0E7RUFDRSxVQUFVO0FBQ1osQ0FDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCLENBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQixDQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIsQ0FFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCLENBQ0E7RUFDRSxlQUFlO0FBQ2pCLENBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQixDQUNBLG9FQUFvRSxDQUVwRTtFQUNFO0lBQ0UsV0FBVztFQUNiOztBQUVGLENBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtHQUNDO0lBQ0MsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQSxrQ0FBa0M7QUFDcEMsQ0FHQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBLGtDQUFrQztBQUNwQyxDQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0Esa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB4LGltZ3ttYXgtd2lkdGg6MTAwJX0uYXBweCwuaGVhZGVyeCxib2R5e2Rpc3BsYXk6ZmxleH0uc2VhcmNoLWJhciBpbnB1dCxib2R5e2ZvbnQtZmFtaWx5OlBvcHBpbnMsc2Fucy1zZXJpZn0uYXBweCwuc2VhcmNoLWJhciBpbnB1dHtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo1MDB9LmFwcHgsLndyYXBwZXJ7b3ZlcmZsb3c6aGlkZGVufS5jb250ZW50LWJ1dHRvbiwuaGVhZGVyeCwuc2lkZS1tZW51e3doaXRlLXNwYWNlOm5vd3JhcH0uaG0tcCBwLHRkLHRoe3RleHQtYWxpZ246bGVmdH0qLC5zZWFyY2hyZXN1bHRzIC5jYXJkLGh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosLnF0eS1pbnB1dCAucHJvZHVjdC1xdHk6Zm9jdXMsLnF0eS1pbnB1dCAucXR5LWNvdW50OmZvY3Vze291dGxpbmU6MH0ucXR5LWlucHV0IC5wcm9kdWN0LXF0eSwucXVhbnRpdHkgaW5wdXRbdHlwZT1udW1iZXJde3RleHQtYWxpZ246Y2VudGVyOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LmRyb3Bkb3duIHVsIGxpIGEsLmhlYWRlci1tZW51IGEsLm1lbnUtbGluay1tYWluLC5wb3B1cC10cmlnZ2VyLC5zaWRlLW1lbnUgYSxhI2JhY2stYnV0dG9uOmhvdmVyLGxpPmF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9I3RyaWdnZXIsLmFwcC1jYXJkLC5jb250ZW50LWJ1dHRvbiwuY29udGVudC1zZWN0aW9uIHVsLC5kYXJrLWxpZ2h0LC5kcm9wZG93biwucXR5LWlucHV0IC5xdHktY291bnQsbGk+YSxzZWxlY3R7Y3Vyc29yOnBvaW50ZXJ9OnJvb3R7LS10aGVtZS1iZy1jb2xvcjpyZ2JhKDE2IDE4IDI3IC8gNDAlKTstLWJvcmRlci1jb2xvcjpyZ2JhKDExMyAxMTkgMTQ0IC8gMjUlKTstLXRoZW1lLWNvbG9yOiNmOWZhZmI7LS1pbmFjdGl2ZS1jb2xvcjpyZ2IoMTEzIDExOSAxNDQgLyA3OCUpOy0tYm9keS1mb250OlwiUG9wcGluc1wiLHNhbnMtc2VyaWY7LS1ob3Zlci1tZW51LWJnOnJnYmEoMTIgMTUgMjUgLyAzMCUpOy0tY29udGVudC10aXRsZS1jb2xvcjojOTk5YmE1Oy0tY29udGVudC1iZzpyZ2IoMTQ2IDE1MSAxNzkgLyAxMyUpOy0tYnV0dG9uLWluYWN0aXZlOnJnYigyNDkgMjUwIDI1MSAvIDU1JSk7LS1kcm9wZG93bi1iZzojMjEyNDJkOy0tZHJvcGRvd24taG92ZXI6cmdiKDQyIDQ2IDYwKTstLXBvcHVwLWJnOnJnYigyMiAyNSAzNyk7LS1zZWFyY2gtYmc6IzE0MTYyYjstLW92ZXJsYXktYmc6cmdiYSgzNiwgMzksIDU5LCAwLjMpOy0tc2Nyb2xsYmFyLWJnOnJnYigxIDIgMyAvIDQwJSl9LmxpZ2h0LW1vZGV7LS10aGVtZS1iZy1jb2xvcjpyZ2IoMjU1IDI1NSAyNTUgLyAzMSUpOy0tdGhlbWUtY29sb3I6IzNjM2EzYTstLWluYWN0aXZlLWNvbG9yOiMzMzMzMzM7LS1idXR0b24taW5hY3RpdmU6IzNjM2EzYTstLXNlYXJjaC1iZzpyZ2IoMjU1IDI1NSAyNTUgLyAzMSUpOy0tZHJvcGRvd24tYmc6I2Y3ZjdmNzstLW92ZXJsYXktYmc6cmdiKDI1NSAyNTUgMjU1IC8gMzAlKTstLWRyb3Bkb3duLWhvdmVyOnJnYigyMzYgMjM2IDIzNik7LS1ib3JkZXItY29sb3I6cmdiKDI1NSAyNTUgMjU1IC8gMzUlKTstLXBvcHVwLWJnOnJnYigyNTUgMjU1IDI1NSk7LS1ob3Zlci1tZW51LWJnOnJnYmEoMjU1IDI1NSAyNTUgLyAzNSUpOy0tc2Nyb2xsYmFyLWJnOnJnYigyNTUgMjUzIDI1MyAvIDU3JSk7LS1jb250ZW50LXRpdGxlLWNvbG9yOi0tdGhlbWUtY29sb3J9aHRtbHstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkfWJvZHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly93YWxscGFwZXJzaG9tZS5jb20vaW1hZ2VzL3dhbGxwYXBlcnMvbWFjb3MtYmlnLXN1ci0xMjgweDcyMC1kYXJrLXd3ZGMtMjAyMC0yMjY1NS5qcGcpO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzoyZW07d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmh9LnZpZGVvLWJne3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0udmlkZW8tYmcgdmlkZW97d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXJ9LmRhcmstbGlnaHR7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjUwcHg7cmlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiMyMTI0MmQ7Ym94LXNoYWRvdzotMXB4IDNweCA4cHggLTFweCByZ2JhKDAsMCwwLC4yKTtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjUwJTt6LWluZGV4OjN9I2Ryb3BfZG93bl93aXRoX2xpbmtzLC5hcHB4LC5ub3RpZmljYXRpb24sLm5vdGlmeXtwb3NpdGlvbjpyZWxhdGl2ZX0uYXBweCwuY29udGVudC1zZWN0aW9uIHVsIGxpOmhvdmVyLC5saWdodC1tb2RlIC5jb250ZW50LXNlY3Rpb24gdWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2IDE4IDI3IC8gNDAlKX0uZGFyay1saWdodCBzdmd7d2lkdGg6MjRweDtmbGV4LXNocmluazowO2ZpbGw6I2ZmY2U0NTtzdHJva2U6I2ZmY2U0NTt0cmFuc2l0aW9uOi41c30ubGlnaHQtbW9kZSAuZGFyay1saWdodCBzdmd7ZmlsbDp0cmFuc3BhcmVudDtzdHJva2U6I2Y5ZmFmYn0ubGlnaHQtbW9kZSAucHJvZmlsZS1pbWd7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDE2IDE4IDI3IC8gNDAlKX0ubGlnaHQtbW9kZSAucG9wLXVwX190aXRsZXtib3JkZXItY29sb3I6I2Y5ZmFmYn0ubGlnaHQtbW9kZSAuZHJvcGRvd24uaXMtYWN0aXZlIHVse2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuOTQpfWJvZHkubGlnaHQtbW9kZSAudmlkZW8tYmc6YmVmb3JlLGJvZHkubGlnaHQtbW9kZTpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDB2aDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgyNTUsMjU1LDI1NSwuNzIpIDAscmdiYSgyNTUsMjU1LDI1NSwuNDUpIDEwMCUpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDMpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgzKX0uYXBweHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjE0cHg7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMjBweCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KTttYXJnaW46MCBhdXRvfS5oZWFkZXJ4e2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LXNocmluazowO2hlaWdodDo1OHB4O3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgxMTMgMTE5IDE0NCAvIDI1JSk7cGFkZGluZzowIDMwcHh9LmNoZWNrYm94K2xhYmVsLC5oZWFkZXItbWVudXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5oZWFkZXItbWVudSBhe3BhZGRpbmc6MjBweCAzMHB4O2NvbG9yOnJnYigxMTMgMTE5IDE0NCAvIDc4JSk7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjouM3N9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7LmhlYWRlci1tZW51IGE6bm90KC5tYWluLWhlYWRlci1saW5rKXtkaXNwbGF5Om5vbmV9fS5oZWFkZXItbWVudSBhLmlzLWFjdGl2ZSwuaGVhZGVyLW1lbnUgYTpob3Zlcntjb2xvcjojZjlmYWZiO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmOWZhZmJ9Lm5vdGlmeTpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6IzNhNmRmMDt3aWR0aDo2cHg7aGVpZ2h0OjZweDtib3JkZXItcmFkaXVzOjUwJTtyaWdodDoyMHB4O3RvcDoxNnB4fS5tZW51LWNpcmNsZXt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2JhY2tncm91bmQtY29sb3I6I2Y5NjA1Nztib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjI0cHggMCAwIDAgI2Y4Y2U1Miw0OHB4IDAgMCAwICM1ZmNmNjU7bWFyZ2luLXJpZ2h0OjE5NXB4O2ZsZXgtc2hyaW5rOjB9LnNlYXJjaC1iYXJ7aGVpZ2h0OjQwcHg7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7bWF4LXdpZHRoOjQwMHB4O3BhZGRpbmctbGVmdDoxNnB4O2JvcmRlci1yYWRpdXM6NHB4fS5zZWFyY2gtYmFyIGlucHV0e3dpZHRoOjEwMCU7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojMTQxNjJiO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MCAyMHB4IDAgNDBweDtib3gtc2hhZG93OjAgMCAwIDJweCByZ2JhKDEzNCwxNDAsMTYwLC4wMik7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwgO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU2Ljk2NiA1Ni45NjYnIGZpbGw9JyUyMzcxNzc5MGM3JyUzZSUzY3BhdGggZD0nTTU1LjE0NiA1MS44ODdMNDEuNTg4IDM3Ljc4NkEyMi45MjYgMjIuOTI2IDAgMDA0Ni45ODQgMjNjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMyAxMC4zMTgtMjMgMjMgMTAuMzE4IDIzIDIzIDIzYzQuNzYxIDAgOS4yOTgtMS40MzYgMTMuMTc3LTQuMTYybDEzLjY2MSAxNC4yMDhjLjU3MS41OTMgMS4zMzkuOTIgMi4xNjIuOTIuNzc5IDAgMS41MTgtLjI5NyAyLjA3OS0uODM3YTMuMDA0IDMuMDA0IDAgMDAuMDgzLTQuMjQyek0yMy45ODQgNmM5LjM3NCAwIDE3IDcuNjI2IDE3IDE3cy03LjYyNiAxNy0xNyAxNy0xNy03LjYyNi0xNy0xNyA3LjYyNi0xNyAxNy0xN3onLyUzZSUzYy9zdmclM2VcIik7YmFja2dyb3VuZC1zaXplOjE0cHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246MTZweCA0OCU7Y29sb3I6I2Y5ZmFmYn0uc2VhcmNoLWJhciBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcntmb250LWZhbWlseTpQb3BwaW5zLHNhbnMtc2VyaWY7Y29sb3I6cmdiKDExMyAxMTkgMTQ0IC8gNzglKTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo1MDB9LnNlYXJjaC1iYXIgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2ZvbnQtZmFtaWx5OlBvcHBpbnMsc2Fucy1zZXJpZjtjb2xvcjpyZ2IoMTEzIDExOSAxNDQgLyA3OCUpO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjUwMH0uc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXJ7Zm9udC1mYW1pbHk6UG9wcGlucyxzYW5zLXNlcmlmO2NvbG9yOnJnYigxMTMgMTE5IDE0NCAvIDc4JSk7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NTAwfS5oZWFkZXItcHJvZmlsZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MCAxNnB4IDAgNDBweDttYXJnaW4tbGVmdDphdXRvO2ZsZXgtc2hyaW5rOjB9Lm5vdGlmaWNhdGlvbitzdmcsLnByb2ZpbGUtaW1ne21hcmdpbi1sZWZ0OjIycHh9LmhlYWRlci1wcm9maWxlIHN2Z3t3aWR0aDoyMnB4O2NvbG9yOiNmOWZhZmI7ZmxleC1zaHJpbms6MH0ubm90aWZpY2F0aW9uLW51bWJlcntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiMzYTZkZjA7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItcmFkaXVzOjUwJTtmb250LXNpemU6MTBweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y29sb3I6I2ZmZjtyaWdodDotNnB4O3RvcDotNnB4fS5wcm9maWxlLWltZ3t3aWR0aDozMnB4O2hlaWdodDozMnB4O2JvcmRlci1yYWRpdXM6NTAlOy1vLW9iamVjdC1maXQ6Y292ZXI7b2JqZWN0LWZpdDpjb3Zlcjtib3JkZXI6MnB4IHNvbGlkICNmOWZhZmJ9I21lbnUuY2xvc2VkLC5jaGVja2JveCwud2lkZSAuaGVhZGVyLW1lbnUsLndpZGUgLmhlYWRlci1wcm9maWxle2Rpc3BsYXk6bm9uZX0ud2lkZSAuc2VhcmNoLWJhcnttYXgtd2lkdGg6NjAwcHg7bWFyZ2luOmF1dG87dHJhbnNpdGlvbjouNHM7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgxMTMgMTE5IDE0NCAvIDI1JSk7cGFkZGluZy1sZWZ0OjB9LndpZGUgLm1lbnUtY2lyY2xle21hcmdpbi1yaWdodDowfS53cmFwcGVye2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MX0uYXBweCBzcGFuLHRmb290IHRkLnRleHQtY2VudGVye2NvbG9yOiNmZmZ9LmxlZnQtc2lkZXtmbGV4LWJhc2lzOjM1JTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHJnYmEoMTEzIDExOSAxNDQgLyAyNSUpO3BhZGRpbmc6MCAxMHB4O292ZXJmbG93OmF1dG87aGVpZ2h0OjEwMHZoIWltcG9ydGFudDtmbGV4LXNocmluazowfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTQ1cHgpey5sZWZ0LXNpZGUsLm1lbnUtY2lyY2xlLC5ub3RpZmljYXRpb24rc3Zne2Rpc3BsYXk6bm9uZX19LnNpZGUtd3JhcHBlcisuc2lkZS13cmFwcGVye21hcmdpbi10b3A6MjBweH0uc2lkZS10aXRsZXtjb2xvcjpyZ2IoMTEzIDExOSAxNDQgLyA3OCUpO21hcmdpbi1ib3R0b206MTRweH0uc2lkZS1tZW51e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnNpZGUtbWVudSBhe2NvbG9yOiNmOWZhZmI7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXdlaWdodDo0MDA7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxNHB4O2JvcmRlci1yYWRpdXM6NnB4O3RyYW5zaXRpb246LjNzfS5zaWRlLW1lbnUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTIgMTUgMjUgLyAzMCUpfS5zaWRlLW1lbnUgc3Zne3dpZHRoOjE2cHg7bWFyZ2luLXJpZ2h0OjhweH0udXBkYXRlc3twb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtyaWdodDowO21hcmdpbi1sZWZ0OmF1dG87d2lkdGg6MThweDtoZWlnaHQ6MThweDtmb250LXNpemU6MTFweH0ubWFpbi1oZWFkZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDExMyAxMTkgMTQ0IC8gMjUlKTtoZWlnaHQ6NThweDtmbGV4LXNocmluazowfS5tYWluLWhlYWRlciAuaGVhZGVyLW1lbnV7bWFyZ2luLWxlZnQ6MTUwcHh9Lm1haW4taGVhZGVyIC5oZWFkZXItbWVudSBhe3BhZGRpbmc6MjBweCAyNHB4fS5tYWluLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZ3JvdzoxfS5tZW51LWxpbmstbWFpbntjb2xvcjojZjlmYWZiO3BhZGRpbmc6MCAzMHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTA1NXB4KXsubWVudS1saW5rLW1haW4sLm5vdGlmeXtkaXNwbGF5Om5vbmV9Lm1haW4taGVhZGVyIC5oZWFkZXItbWVudXttYXJnaW46YXV0b319LmNvbnRlbnQtd3JhcHBlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2NvbG9yOiNmOWZhZmI7cGFkZGluZzowIDQwcHg7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYgMTggMjcgLyA0MCUpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTEwcHgpey5jb250ZW50LXdyYXBwZXJ7cGFkZGluZzoyMHB4fX0uY29udGVudC13cmFwcGVyLWhlYWRlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJodHRwczovL3d3dy50cmFuc3BhcmVudHRleHR1cmVzLmNvbS9wYXR0ZXJucy9jdWJlcy5wbmdcIiksbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjY2Y0YWYzLCNlNzNiZDcsI2Y2MzFiYywjZmQzMWEyLCNmZjNhOGIsI2ZmNGI3OCwjZmY1ZTY4LCNmZjcwNWMsI2ZmOGM1MSwjZmZhYTQ5LCNmZmM4NDgsI2ZmZTY1Mik7Ym9yZGVyLXJhZGl1czoxNHB4O3BhZGRpbmc6MjBweCA0MHB4fS5jb250ZW50LXdyYXBwZXIub3ZlcmxheXtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246LjNzO2JhY2tncm91bmQtY29sb3I6cmdiYSgzNiwzOSw1OSwuMyl9Lm92ZXJsYXktYXBwe3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3BvaW50ZXItZXZlbnRzOmFsbDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzYsMzksNTksLjgpO29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2l0aW9uOi4zc30ub3ZlcmxheS1hcHAuaXMtYWN0aXZlLC5wb3AtdXAudmlzaWJsZXt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfS5pbWctY29udGVudHtmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOjE3cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MH0uaW1nLWNvbnRlbnQgc3Zne3dpZHRoOjI4cHg7bWFyZ2luLXJpZ2h0OjE0cHh9LmNvbnRlbnQtdGV4dHtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjE0cHg7bWFyZ2luLXRvcDoxNnB4O2xpbmUtaGVpZ2h0OjEuN2VtO2NvbG9yOiNlYmVjZWM7ZGlzcGxheTotd2Via2l0LWJveDstd2Via2l0LWxpbmUtY2xhbXA6NDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LmNvbnRlbnQtd3JhcHBlci1jb250ZXh0e21heC13aWR0aDozNTBweH0uY29udGVudC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojM2E2ZGYwO2JvcmRlcjpub25lO3BhZGRpbmc6OHB4IDI2cHg7Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjIwcHg7bWFyZ2luLXRvcDoxNnB4O3RyYW5zaXRpb246LjNzfS5jb250ZW50LXdyYXBwZXItaW1ne3dpZHRoOjE4NnB4Oy1vLW9iamVjdC1maXQ6Y292ZXI7b2JqZWN0LWZpdDpjb3ZlcjttYXJnaW4tdG9wOi0yNXB4Oy1vLW9iamVjdC1wb3NpdGlvbjpjZW50ZXI7b2JqZWN0LXBvc2l0aW9uOmNlbnRlcn0uY29udGVudC1zZWN0aW9ue21hcmdpbi10b3A6MzBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jb250ZW50LXNlY3Rpb24tdGl0bGV7bWFyZ2luLWJvdHRvbToxNHB4fS5jb250ZW50LXNlY3Rpb24gdWx7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ2IDE1MSAxNzkgLyAxMyUpO3BhZGRpbmctbGVmdDowO21hcmdpbjowO2JvcmRlci1yYWRpdXM6MTRweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTYgMTggMjcgLyA0MCUpfS5jb250ZW50LXNlY3Rpb24gdWwgbGl7bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MTBweCAxOHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjE2cHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt3aGl0ZS1zcGFjZTpub3dyYXA7dHJhbnNpdGlvbjouM3N9LmNvbnRlbnQtc2VjdGlvbiB1bCBsaTpob3ZlcjpmaXJzdC1jaGlsZHtib3JkZXItcmFkaXVzOjEzcHggMTNweCAwIDB9LmNvbnRlbnQtc2VjdGlvbiB1bCBsaTpob3ZlcjpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6MCAwIDEzcHggMTNweH0uY29udGVudC1zZWN0aW9uIHVsIGxpK2xpe2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMTEzIDExOSAxNDQgLyAyNSUpfS5jb250ZW50LXNlY3Rpb24gdWwgc3Zne3dpZHRoOjI4cHg7Ym9yZGVyLXJhZGl1czo2cHg7bWFyZ2luLXJpZ2h0OjE2cHg7ZmxleC1zaHJpbms6MH0ucHJvZHVjdHN7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxNTBweH0uc3RhdHVze21hcmdpbi1sZWZ0OmF1dG87d2lkdGg6MTQwcHg7Zm9udC1zaXplOjE1cHg7cG9zaXRpb246cmVsYXRpdmV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7LnN0YXR1c3tkaXNwbGF5Om5vbmV9fS5zdGF0dXMtY2lyY2xle3dpZHRoOjZweDtoZWlnaHQ6NnB4O2JhY2tncm91bmQtY29sb3I6IzM5NmRmMDtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTt0b3A6NHB4O2xlZnQ6LTIwcHh9LnN0YXR1cy1jaXJjbGUuZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojM2JmMDgzfS5zdGF0dXMtYnV0dG9ue2ZvbnQtc2l6ZToxNXB4O21hcmdpbi10b3A6MDtwYWRkaW5nOjZweCAyNHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzkwcHgpey5zdGF0dXMtYnV0dG9ue3BhZGRpbmc6NnB4IDE0cHh9fS5zdGF0dXMtYnV0dG9uLm9wZW57YmFja2dyb3VuZDowIDA7Y29sb3I6cmdiKDI0OSAyNTAgMjUxIC8gNTUlKTtib3JkZXI6MXB4IHNvbGlkfS5zdGF0dXMtYnV0dG9uOm5vdCgub3Blbik6aG92ZXJ7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZn0uY29udGVudC1idXR0b246bm90KC5vcGVuKTpob3ZlcntiYWNrZ3JvdW5kOiMxZTU5ZjF9Lm1lbnV7d2lkdGg6NXB4O2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQ5IDI1MCAyNTEgLyA1NSUpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6N3B4IDAgMCAwIHJnYigyNDkgMjUwIDI1MSAvIDU1JSksMTRweCAwIDAgMCByZ2IoMjQ5IDI1MCAyNTEgLyA1NSUpO21hcmdpbjowIDEycHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTVweCl7LmNvbnRlbnQtd3JhcHBlci1oZWFkZXJ7cGFkZGluZzoyMHB4fS5hZG9iZS1wcm9kdWN0IC5tZW51e2Rpc3BsYXk6bm9uZX19LmRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo1M3B4O3dpZHRoOjQwcHg7dG9wOi0yNHB4O2Rpc3BsYXk6ZmxleDtsZWZ0Oi01cHg7YmFja2dyb3VuZDowIDA7Ym9yZGVyOm5vbmV9LmRyb3Bkb3duIHVsLC5wb3AtdXB7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowfS5kcm9wZG93biB1bHtiYWNrZ3JvdW5kOiMyMTI0MmQ7aGVpZ2h0OjExMHB4O3dpZHRoOjEyMHB4O3JpZ2h0OjA7dG9wOjIwcHg7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRleSgxMHB4KTt0cmFuc2l0aW9uOi40c30uZHJvcGRvd24gdWwgbGkgYXtjb2xvcjojZjlmYWZiO2ZvbnQtc2l6ZToxMnB4fS5kcm9wZG93bi5pcy1hY3RpdmUgdWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmFsbDt0cmFuc2Zvcm06dHJhbnNsYXRleSgyNXB4KX0uZHJvcGRvd24uaXMtYWN0aXZlIHVsIGxpOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiKDQyIDQ2IDYwKX0uYnV0dG9uLXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7d2lkdGg6MTg3cHg7bWFyZ2luLWxlZnQ6YXV0b31AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KXtib2R5e3BhZGRpbmc6LjhlbX0uaGVhZGVyeHtwYWRkaW5nOjAgMTZweH0ucHJvZHVjdHN7d2lkdGg6MTIwcHh9LmJ1dHRvbi13cmFwcGVye3dpZHRoOmF1dG99fS5wb3AtdXB7cGFkZGluZzozMHB4IDQwcHg7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7b3ZlcmZsb3cteTphdXRvO2JveC1zaGFkb3c6MCA2cHggMzBweCByZ2JhKDAsMCwwLC40KTt0cmFuc2l0aW9uOi4zczt6LWluZGV4OjEwO2JhY2tncm91bmQtY29sb3I6cmdiKDIyIDI1IDM3KTt3aWR0aDo1MDBweDt2aXNpYmlsaXR5OmhpZGRlbjtib3JkZXItcmFkaXVzOjZweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3doaXRlLXNwYWNlOm5vcm1hbH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3MHB4KXsuY29udGVudC13cmFwcGVyLWltZ3t3aWR0aDoxMTBweH0ucG9wLXVwe3dpZHRoOjEwMCV9fS5wb3AtdXBfX3RpdGxle3BhZGRpbmctYm90dG9tOjIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgxMTMgMTE5IDE0NCAvIDI1JSk7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcn0ucG9wLXVwX19zdWJ0aXRsZXt3aGl0ZS1zcGFjZTpub3JtYWw7bWFyZ2luOjIwcHggMDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS44ZW19LnBvcC11cF9fc3VidGl0bGUgYXtjb2xvcjojZjlmYWZifS5jb250ZW50LWJ1dHRvbi13cmFwcGVyIC5jb250ZW50LWJ1dHRvbi5zdGF0dXMtYnV0dG9uLm9wZW4uY2xvc2V7d2lkdGg6YXV0b30uY29udGVudC1zZWN0aW9uIC5jbG9zZXttYXJnaW4tcmlnaHQ6MDt3aWR0aDoyNHB4fS5jaGVja2JveC13cmFwcGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5hcHAtY2FyZCwuZm9vdGVyX3BhbmVsIHRkLnRleHQtY2VudGVyLHNwYW4uZGF0ZSxzcGFuLnRpbWUsdGh7Zm9udC1zaXplOjE2cHh9LmNoZWNrYm94LXdyYXBwZXIrLmNoZWNrYm94LXdyYXBwZXJ7bWFyZ2luOjIwcHggMCA0MHB4fS5jb250ZW50LWJ1dHRvbi13cmFwcGVyIC5vcGVuLHNlbGVjdHttYXJnaW4tcmlnaHQ6OHB4fS5jaGVja2JveCtsYWJlbDpiZWZvcmV7Y29udGVudDpcIlwiO21hcmdpbi1yaWdodDoxMHB4O3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZjlmYWZiO2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjpwb2ludGVyO2ZsZXgtc2hyaW5rOjB9LmNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzNhNmRmMDtib3JkZXItY29sb3I6IzNhNmRmMDtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCA7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMycgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzZSUzY3BhdGggZD0nTTIwIDZMOSAxN2wtNS01Jy8lM2UlM2Mvc3ZnJTNlXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtc2l6ZToxMnB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uY29udGVudC1idXR0b24td3JhcHBlcnttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWxlZnQ6YXV0b30uYXBwcy1jYXJke2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC13cmFwOndyYXA7d2lkdGg6Y2FsYygxMDAlICsgNTBweCl9LmFwcC1jYXJke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6Y2FsYygyMCUgLSAyMHB4KTttYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDYgMTUxIDE3OSAvIDEzJSk7Ym9yZGVyLXJhZGl1czoxNHB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgxNiAxOCAyNyAvIDQwJSk7cGFkZGluZzoyMHB4O3RyYW5zaXRpb246LjNzfS5hcHAtY2FyZDpob3Zlcnt0cmFuc2Zvcm06c2NhbGUoMS4wMik7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2IDE4IDI3IC8gNDAlKX0uYXBwLWNhcmQgc3Zne3dpZHRoOjI4cHg7Ym9yZGVyLXJhZGl1czo2cHg7bWFyZ2luLXJpZ2h0OjEycHg7ZmxleC1zaHJpbms6MH1zcGFuLmRhdGUsc3Bhbi51c2VybmFtZXttYXJnaW4tcmlnaHQ6MzBweH0uYXBwLWNhcmQgc3BhbntkaXNwbGF5OmJsb2NrO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDphdXRvfS5hcHAtY2FyZF9fc3VidGV4dHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS42ZW07bWFyZ2luLXRvcDoyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMTEzIDExOSAxNDQgLyAyNSUpO3BhZGRpbmctYm90dG9tOjIwcHh9LmFwcC1jYXJkLWJ1dHRvbnN7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tbGVmdDphdXRvO21hcmdpbi10b3A6MTZweH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMTBweCl7LmFwcC1jYXJke3dpZHRoOmNhbGMoNTAlIC0gMjBweCl9LmFwcC1jYXJkOmxhc3QtY2hpbGR7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1sZWZ0OjB9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTY1cHgpey5hcHAtY2FyZHt3aWR0aDpjYWxjKDEwMCUgLSAyMHB4KTttYXJnaW4tdG9wOjIwcHh9LmFwcC1jYXJkKy5hcHAtY2FyZHttYXJnaW4tbGVmdDowfX06Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjZweDtib3JkZXItcmFkaXVzOjEwcHh9Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnJnYigxIDIgMyAvIDQwJSk7Ym9yZGVyLXJhZGl1czoxMHB4fWJ1dHRvbiNyZXNldC1idXR0b257bWFyZ2luLXJpZ2h0OjMwcHg7YmFja2dyb3VuZDojM2E2ZGYwO2NvbG9yOiNmZmY7cGFkZGluZzoxMHB4IDE1cHg7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOm5vbmU7bGV0dGVyLXNwYWNpbmc6MXB4fWJ1dHRvbiNyZXNldC1idXR0b24gaSxpLmZhLmZhLWFycm93LWxlZnQubGluay1pY29ue21hcmdpbi1yaWdodDoxMHB4fS5ncmFuZHRvdGFse2JhY2tncm91bmQ6IzAwMDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46NXB4IDA7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToyNnB4fS5jb2wtc20tMTIuY29sLW1kLTR7ZGlzcGxheTppbmxpbmUtZmxleDt3aWR0aDozMy4zMyV9LmZvb3Rlcl9wYW5lbCBidXR0b257d2lkdGg6MTAwJTtmb250LXNpemU6MThweDtwYWRkaW5nOjVweCAwO2ZvbnQtd2VpZ2h0OjYwMH0uZm9ybS1ncm91cCwub25lbGluZSwucHJvamVjdHMtc2VjdGlvbi1oZWFkZXIuYWRkLXVzZXIudGV4dGJveHtkaXNwbGF5OmlubGluZS1mbGV4fXNwYW4uY29sLW1kLTMudGV4dC1jZW50ZXJ7d2lkdGg6MjUlO2Rpc3BsYXk6YmxvY2t9YnV0dG9uI3VwZGF0ZWZpbmFse3BhZGRpbmc6MnB4IDE1cHg7bGluZS1oZWlnaHQ6MzBweH0uaDQtMTQgaDR7Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fXRhYmxle2ZvbnQtZmFtaWx5OmFyaWFsLHNhbnMtc2VyaWY7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7cGFkZGluZzoxcHggNXB4fS5obS1wIHB7cGFkZGluZzo1cHggNHB4fXRkLHRoe3BhZGRpbmc6OHB4IDZweH0udGFibGUtYiB0ZCwudGFibGUtYiB0aHtib3JkZXI6MXB4IHNvbGlkICNkZGR9LmhtLXAgdGQsLmhtLXAgdGh7cGFkZGluZzozcHggMH0uY3JvcHBlZHtmbG9hdDpyaWdodDttYXJnaW4tYm90dG9tOjIwcHg7aGVpZ2h0OjEwMHB4O292ZXJmbG93OmhpZGRlbn0uY3JvcHBlZCBpbWd7d2lkdGg6NDAwcHg7bWFyZ2luOjhweCAwIDAgODBweH0ubWFpbi1wZC13cmFwcGVye2JveC1zaGFkb3c6MCAwIDEwcHggI2RkZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6MTVweH0jY2Fyb3VzZWwtY29udGFpbmVyIC5zd2lwZXItc2xpZGUsLmJ0bi1ibGFjayxkaXYjY2Fyb3VzZWwtY29udGFpbmVye2JhY2tncm91bmQ6IzAwMH0udGFibGUtYm9yZGVyZWQgdGQsLnRhYmxlLWJvcmRlcmVkIHRoe3dvcmQtYnJlYWs6YnJlYWstYWxsO2JvcmRlcjoxcHggc29saWQgI2RkZDtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjE0cHh9Lmludm9pY2UtaXRlbXN7Zm9udC1zaXplOjE0cHg7Ym9yZGVyLXRvcDoxcHggZGFzaGVkICNkZGR9Lmljb25sZWZ0IGksLnBvcHVwLXRyaWdnZXJ7Zm9udC1zaXplOjE4cHh9Lmludm9pY2UtaXRlbXMgdGR7cGFkZGluZzoxNHB4IDB9LmJ0bi1ibGFja3tjb2xvcjojZmZmfS5xdWFudGl0eSAuYnRue2xpbmUtaGVpZ2h0OjIwcHg7bWFyZ2luOjAgNXB4O2JhY2tncm91bmQtY29sb3I6IzAwMDtjb2xvcjojZmZmfSNtZW51LCN0cmlnZ2VyLC5zZWFyY2hyZXN1bHRzIC5jYXJke2JhY2tncm91bmQtY29sb3I6I2ZmZn0ucXVhbnRpdHkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sLnF1YW50aXR5IGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfS5hcHAtc2lkZWJhciA6OmJlZm9yZXtmb250LXNpemU6MjRweCFpbXBvcnRhbnR9I2Nhcm91c2VsLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIGgye2ZvbnQtc2l6ZToxNHB4O21hcmdpbjowO2ZvbnQtd2VpZ2h0OjYwMDtiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2ZmZjtwYWRkaW5nOjVweCAxMHB4fWltZy5wcm9pbWFnZXt3aWR0aDoxMDAlO2hlaWdodDogYXV0bzt9LnN3aXBlci1jb250YWluZXJ7d2lkdGg6ODUlO292ZXJmbG93OmhpZGRlbn0uY2F0ZWdvcnlhcnJvdy5jb250cm9scy1zbGlkZXtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjA7dG9wOjkwJX0ubW9kZWxhcnJvdy5jb250cm9scy1zbGlkZXtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjA7dG9wOjEyNSU7d2lkdGg6MTAwJX0jY2Fyb3VzZWwtcHJvZHVjdHN4IC5zd2lwZXItc2xpZGV7d2lkdGg6MjUlIWltcG9ydGFudDtoZWlnaHQ6MTUwcHghaW1wb3J0YW50O21hcmdpbjo1cHggMH0uZm9vdGVyX3BhbmVsIC5jb2wtbWQtMywuZm9vdGVyX3BhbmVsIC5jb2wtbWQtNHtwYWRkaW5nOjAgMnB4fS5pbnB1dC1ncm91cC1wcmVwZW5ke3Bvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6MjAlO3otaW5kZXg6OTl9LmlucHV0LWdyb3VwLWFwcGVuZHtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDoyMCU7ei1pbmRleDo5OX0uc3dpcGVyLWNvbnRhaW5lci54bW9kZWxzLnN3aXBlci1pbml0aWFsaXplZC5zd2lwZXItaG9yaXpvbnRhbHt3aWR0aDo4NSU7bWFyZ2luOjAgYXV0b30uc3dpcGVyLWJ1dHRvbi1wcmV2LnByZXZ4bXtsZWZ0Oi03NSUhaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudH0uc3dpcGVyLWJ1dHRvbi1uZXh0Lm5leHR4bXtsZWZ0OjgwJSFpbXBvcnRhbnR9LmZvb3Rlcl9wYW5lbCAuZm9ybS1ncm91cCBpbnB1dHttYXJnaW4tYm90dG9tOjVweH1zcGFuI2J1dHRvbnVwZGF0ZXtib3R0b206LTE1cHg7cG9zaXRpb246cmVsYXRpdmV9LnByb2plY3RzLXNlY3Rpb24taGVhZGVyLmFkZC11c2VyLnRleHRib3h7ei1pbmRleDo5OTk5O2JhY2tncm91bmQ6MCAwO3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDowfS5oZWFkZXItcmlnaHR7cG9zaXRpb246Zml4ZWQ7Ym9yZGVyOjFweCBzb2xpZCAjZjJmMmYyO2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4Ojk5OTl9dGFibGUjaW52b2ljZS10YWJsZSB0ZCx0YWJsZSNpbnZvaWNlLXRhYmxlIHRoe3BhZGRpbmctbGVmdDoxMHB4IWltcG9ydGFudDtjb2xvcjojZmZmIWltcG9ydGFudH0ubXI1e21hcmdpbi1yaWdodDo1cHh9c3BhbiNkYXRle21hcmdpbi1yaWdodDoyMHB4fS5wb3B1cC10cmlnZ2Vye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTcwcHg7cmlnaHQ6MnJlbTttYXJnaW46M2VtIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjtwYWRkaW5nOjFyZW0gMnJlbTtmb250LXdlaWdodDo3MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1yYWRpdXM6NTBlbTtiYWNrZ3JvdW5kOiMzNWE3ODU7Ym94LXNoYWRvdzowIDNweCAwIHJnYmEoMCwwLDAsLjA3KTt0cmFuc2l0aW9uOi4zc30ucXR5LWlucHV0LHRmb290IHRkLnRleHQtY2VudGVyIGl7Y29sb3I6IzAwMH0ucG9wdXAtdHJpZ2dlcjpob3ZlcntvcGFjaXR5Oi44fS5wb3B1cHtwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7dG9wOjQwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMDA7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOi41c30ucG9wdXAuaXMtdmlzaWJsZXtvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlO3RyYW5zaXRpb246MXN9LnBvcHVwLWNvbnRhaW5lcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2l0aW9uOi41cztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDptYXgtY29udGVudDttYXJnaW46MmVtIGF1dG87dG9wOjUlO3BhZGRpbmc6MnJlbTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czouMjVlbSAuMjVlbSAuNGVtIC40ZW07Ym94LXNoYWRvdzowIDAgMjBweCByZ2JhKDAsMCwwLC4yKX0uaXMtdmlzaWJsZSAucG9wdXAtY29udGFpbmVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zaXRpb246LjVzfS5wb3B1cC1jb250YWluZXIgLnBvcHVwLWNsb3Nle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo4cHg7Zm9udC1zaXplOjA7cmlnaHQ6OHB4O3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHh9LnBvcHVwLWNvbnRhaW5lciAucG9wdXAtY2xvc2U6OmFmdGVyLC5wb3B1cC1jb250YWluZXIgLnBvcHVwLWNsb3NlOjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTJweDt3aWR0aDoxNHB4O2hlaWdodDozcHg7YmFja2dyb3VuZC1jb2xvcjojOGY5Y2I1fS5wb3B1cC1jb250YWluZXIgLnBvcHVwLWNsb3NlOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstbW96LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtsZWZ0OjhweH0ucG9wdXAtY29udGFpbmVyIC5wb3B1cC1jbG9zZTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LW1vei10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstby10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3JpZ2h0OjhweH0ucG9wdXAtY29udGFpbmVyIC5wb3B1cC1jbG9zZTpob3ZlcjphZnRlciwucG9wdXAtY29udGFpbmVyIC5wb3B1cC1jbG9zZTpob3ZlcjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojMzVhNzg1O3RyYW5zaXRpb246LjNzfS50ZXh0LWxlZnR7dGV4dC1hbGlnbjpsZWZ0fWEjZnVsbHNjcmVlbi1idXR0b246aG92ZXIsYSNvcGVuY2FsY3VsYXRvcjpob3ZlcntiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2ZmZn1kaXYjc2VhcmNoUmVzdWx0c0NvbnRhaW5lciBoMntmb250LXNpemU6MTRweH0uc2VhcmNocmVzdWx0c3ttYXJnaW4tdG9wOjUlO2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3dpZHRoOjEwMCUhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMCV9ZGl2I3NlYXJjaFJlc3VsdHNDb250YWluZXJ7d2lkdGg6NjAlIWltcG9ydGFudDttYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyfWRpdiNwYWdpbmF0aW9ueHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtyaWdodDo2MCV9LnNlYXJjaHJlc3VsdHMgLmNhcmR7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjEwcHggMDtoZWlnaHQ6MTgwcHh9YSNiYWNrLWJ1dHRvbnt3aWR0aDptYXgtY29udGVudDtiYWNrZ3JvdW5kOiMwMDA7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOiNmZmY7cGFkZGluZzowIDIwcHg7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6LTEwJTt0b3A6MTAwJTttYXJnaW46MCBhdXRvO2Rpc3BsYXk6bm9uZX1hI2JhY2stYnV0dG9uOmhvdmVye2ZvbnQtc2l6ZToxNnB4fS5xdHktaW5wdXQgLnByb2R1Y3QtcXR5LC5xdHktaW5wdXQgLnF0eS1jb3VudHtiYWNrZ3JvdW5kOjAgMDtjb2xvcjppbmhlcml0O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6aW5oZXJpdDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MDtoZWlnaHQ6Mi41cmVtO2xpbmUtaGVpZ2h0OjF9LnF0eS1pbnB1dCAucHJvZHVjdC1xdHl7d2lkdGg6NTBweDttaW4td2lkdGg6MDtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO2FwcGVhcmFuY2U6dGV4dGZpZWxkfS5xdHktaW5wdXQgLnByb2R1Y3QtcXR5Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLC5xdHktaW5wdXQgLnByb2R1Y3QtcXR5Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTttYXJnaW46MH0ucXR5LWlucHV0IC5xdHktY291bnR7cGFkZGluZzowO3dpZHRoOjIuNXJlbTtmb250LXNpemU6MS4yNWVtO3RleHQtaW5kZW50Oi0xMDBweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LnF0eS1pbnB1dCAucXR5LWNvdW50OmFmdGVyLC5xdHktaW5wdXQgLnF0eS1jb3VudDpiZWZvcmV7Y29udGVudDpcIlwiO2hlaWdodDoycHg7d2lkdGg6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6IzAwMDt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46YXV0b30ucXR5LWlucHV0IC5xdHktY291bnQtLW1pbnVze2JvcmRlci1yaWdodDoxcHggc29saWQgI2UyZTJlMn0ucXR5LWlucHV0IC5xdHktY291bnQtLWFkZHtib3JkZXItbGVmdDoxcHggc29saWQgI2UyZTJlMn0ucXR5LWlucHV0IC5xdHktY291bnQtLWFkZDphZnRlcnt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ucXR5LWlucHV0IC5xdHktY291bnQ6ZGlzYWJsZWR7Y29sb3I6I2NjYztiYWNrZ3JvdW5kOiNmMmYyZjI7Y3Vyc29yOm5vdC1hbGxvd2VkO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0ucXR5LWlucHV0IC5xdHktY291bnQ6ZGlzYWJsZWQ6YWZ0ZXIsLnF0eS1pbnB1dCAucXR5LWNvdW50OmRpc2FibGVkOmJlZm9yZXtiYWNrZ3JvdW5kOiNjY2N9LnF0eS1pbnB1dHtiYWNrZ3JvdW5kOiNmZmY7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAxZW0gMmVtIC0uOWVtIHJnYmEoMCwwLDAsLjcpfS5ieCxsaT5he2NvbG9yOiMzMzN9LmNvbXBvbmVudHNfY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHZoO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtnYXA6MTZweH0jdHJpZ2dlciwuc2VsZWN0X2NvbXBvbmVudHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4fS5zZWxlY3RfY29tcG9uZW50e2hlaWdodDo0MHB4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci1yYWRpdXM6OHB4O2JvcmRlcjoycHggc29saWQgI2U5ZTllOTttYXJnaW46MCBhdXRvO2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjAgMTBweH1zZWxlY3R7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtwYWRkaW5nOjEwcHh9LmJ4e2ZvbnQtc2l6ZToyMHB4fSN0cmlnZ2Vye2JvcmRlcjoycHggc29saWQgI2U5ZTllOTtwYWRkaW5nOjEwcHggMTRweDtnYXA6OHB4O2JvcmRlci1yYWRpdXM6OHB4fSNtZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo0NnB4O2xlZnQ6MDt3aWR0aDoxODBweDtib3JkZXI6MXB4IHNvbGlkICNlOWU5ZTk7Ym9yZGVyLXJhZGl1czo4cHg7Ym94LXNoYWRvdzowIDVweCAxNXB4IHJnYmEoMCwwLDAsLjE1KTtwYWRkaW5nOjhweDt0cmFuc2l0aW9uOi41cyBlYXNlLWlufWxpPmF7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjEwcHh9LnNlbGVjdF9jb21wb25lbnQ6Zm9jdXMtdmlzaWJsZSxzZWxlY3Q6Zm9jdXMtdmlzaWJsZXtib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KX0jdHJpZ2dlcjpmb2N1cy12aXNpYmxlLGxpPmE6Zm9jdXMtdmlzaWJsZXtib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KX0jdHJpZ2dlcjpob3Zlciwuc2VsZWN0X2NvbXBvbmVudDpob3ZlcixsaT5hOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpO2JvcmRlci1yYWRpdXM6NHB4fXRmb290IGlucHV0e3BhZGRpbmc6MTBweDt3aWR0aDoxNTBweH1pLmZhLmZhLXJlZnJlc2h7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MTBweH0uYXBwcy1jYXJkLmNhdGVnb3J5c2VjdGlvbntwb3NpdGlvbjpmaXhlZDtib3R0b206MDtiYWNrZ3JvdW5kOiMwMDB9LmNhdGVnb3J5c2VjdGlvbiAuYXBwLWNhcmR7cGFkZGluZzogMTVweDt3aWR0aDptYXgtY29udGVudCFpbXBvcnRhbnQ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7bWFyZ2luOjVweCFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fS5jYXRlZ29yeXNlY3Rpb24gc3Bhbntmb250LXNpemU6IDIwcHg7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50O21hcmdpbjowIGF1dG87Y29sb3I6I2ZmZn0uYXBwLWNhcmQrLmFwcC1jYXJke21hcmdpbjo1cHggMH0uY29udGVudC1zZWN0aW9ue2hlaWdodDo4MHZoIWltcG9ydGFudDtvdmVyZmxvdy15OnNjcm9sbDtvdmVyZmxvdy14OmhpZGRlbiFpbXBvcnRhbnR9LmNvbnRlbnQtc2VjdGlvbi10aXRsZXtjb2xvcjojZmZmIWltcG9ydGFudDtmb250LXNpemU6MjhweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC13ZWlnaHQ6NjAwfS5mb290ZXJfcGFuZWx7Ym90dG9tOjAlO3Bvc2l0aW9uOmZpeGVkO2hlaWdodDogNDAlO31idXR0b24jb3BlbnVzZXJhZGR7YmFja2dyb3VuZDojMDAwO2JvcmRlcjpub25lO2xpbmUtaGVpZ2h0OjMwcHg7Y29sb3I6I2ZmZjtwYWRkaW5nOjAgMTVweDtib3JkZXItcmFkaXVzOjVweH0uc2VsZWN0X2NvbXBvbmVudDpob3ZlcntiYWNrZ3JvdW5kOiNmMGY4ZmYhaW1wb3J0YW50fSNpbnZvaWNlLXRhYmxlIGkuZmEuZmEtY2xvc2UudGV4dC1kYW5nZXJ7bWFyZ2luLWxlZnQ6MTVweH0uaWNvbmxlZnR7ZGlzcGxheTppbmxpbmUtZmxleDtmbG9hdDpsZWZ0O2JhY2tncm91bmQ6IzAwMDtwYWRkaW5nOjVweCAyMHB4O21hcmdpbi1yaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6NXB4fS5wb3B1cCBsYWJlbC50ZXh0LWxlZnR7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrfS5wb3B1cCAuZm9ybS1ncm91cHtsaW5lLWhlaWdodDozNXB4O2hlaWdodDozNXB4O21hcmdpbjo1cHggMH0ucG9wdXAgc2VsZWN0e2JvcmRlci1yYWRpdXM6OHB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpfSNtYW51YWxmb3JtIC5mb3JtLWdyb3VwLGZvcm0jdXNlcnBvc3R7d2lkdGg6MTAwJX0jZ2VuZXJhbGZvcm0gYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSwjbWFudWFsZm9ybSBidXR0b24uYnRuLmJ0bi1wcmltYXJ5e3dpZHRoOjEwMCU7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1cHh9I3VzZXJmb3JtIC5mb3JtLWdyb3Vwe3dpZHRoOjEwMCUhaW1wb3J0YW50fSN1c2VyZm9ybSBpbnB1dHt3aWR0aDoxMDAlO3BhZGRpbmc6MTBweCAwO2xpbmUtaGVpZ2h0OjM1cHg7Zm9udC1zaXplOjE4cHh9I3VzZXJmb3JtIGJ1dHRvbi5idG4uYnRuLXByaW1hcnl7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmZmY7d2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjVweH1zcGFuLnByaWNldGFne3RleHQtYWxpZ246IGNlbnRlcjtkaXNwbGF5OiBibG9jayAhSU1QT1JUQU5UO21hcmdpbi10b3A6IDEwcHg7fS5hcHAtY2FyZCBzcGFuIGgze2NvbG9yOndoaXRlO3RleHQtYWxpZ246IGNlbnRlcjt9dGZvb3QgdGQudGV4dC1jZW50ZXIge3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Zm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7fXRmb290IGlucHV0IHtmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6bm9uZTt9aS5mYS5mYS1yZWZyZXNoIHtiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDVweDt9LnNpZGUtd3JhcHBlciB7b3ZlcmZsb3cteDogaGlkZGVuO2Rpc3BsYXk6IGJsb2NrO292ZXJmbG93LXk6IHNjcm9sbDtoZWlnaHQ6IDYwdmg7fS5uZXdjYXRzZWN0aW9uIC5hcHAtY2FyZCB7d2lkdGg6IG1heC1jb250ZW50O2ZvbnQtc2l6ZTogMThweDtwYWRkaW5nOiAxNXB4IDIwcHg7fVxyXG5cclxuXHJcbi5zbWFsbC10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5taW5pLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhbGMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA0MGVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgXHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICAuY2FsYy1kaXNwbGF5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmNhbGMta2V5IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNhbGMta2V5ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxLjI1ZW0gMS4yNWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FsYy1rZXkgPiAqOmFjdGl2ZTo6YmVmb3JlLFxyXG4gIC5jYWxjLWtleSA+IC5pcy1kZXByZXNzZWQ6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEVDNUZDO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1wYWQgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1wYWQgYnV0dG9uOmhvdmVyLFxyXG4gIC5udW1wYWQgYnV0dG9uOmFjdGl2ZSxcclxuICAubnVtcGFkIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubnVtcGFkIC5rZXktb3Age1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1wYWQgLmtleS1lcSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBncmlkLWNvbHVtbjogLTI7XHJcbiAgICBncmlkLXJvdzogMi9zcGFuIDQ7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLm51bXBhZCAudGhlbWVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXgtd2lkdGg6IDEwZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1wYWQgLnN3aXRjaCB7XHJcbiAgICBwYWRkaW5nOiAxLjFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLm9wdDEge1xyXG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcclxuICB9XHJcbiAgXHJcbiAgLm9wdDIge1xyXG4gICAgYmFja2dyb3VuZDogIzljMjdiMDtcclxuICB9XHJcbiAgXHJcbiAgLm9wdDMge1xyXG4gICAgYmFja2dyb3VuZDogI2U5MWU2MztcclxuICB9XHJcbiAgLm51bXBhZCBidXR0b24uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrICFJTVBPUlRBTlQ7XHJcbiAgICBmb250LXNpemU6IDI0cHggIUlNUE9SVEFOVDtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvcHVwIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4ucG9wdXAgZm9ybSB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNtYW51YWxmb3JtIGlucHV0LCNtYW51YWxmb3JtIHNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4jbWFudWFsZm9ybSBsYWJlbC50ZXh0LWxlZnQge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4jbWFudWFsZm9ybSBidXR0b24uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4jbWFudWFsZm9ybSBidXR0b24ubnVtcGFkIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI21hbnVhbGZvcm0gYnV0dG9uLmJ0bi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwZTAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxudGFibGUgaS5mYS5mYS1wZW5jaWwge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG50YWJsZSBpLmZhLmZhLWNsb3NlLnRleHQtZGFuZ2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5hLmJhY2t0b2hvbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBwYWRkaW5nOiA1cHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuYS5iYWNrdG9ob21lIGl7XHJcbiBmb250LXNpemU6MjhweDtcclxufVxyXG4jbG9va3VwZm9ybSBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LCNzZXJ2aWNlZm9ybSBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LCNwaG9uZWZvcm0gYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDozNXB4O1xyXG59XHJcbiNsb29rdXBmb3JtIGlucHV0LCNzZXJ2aWNlZm9ybSBpbnB1dCwjcGhvbmVmb3JtIGlucHV0e1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OjM1cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4jbG9va3VwZm9ybSBsYWJlbCwjc2VydmljZWZvcm0gbGFiZWwsI3Bob25lZm9ybSBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG4jbG9va3VwZm9ybSAuZm9ybS1ncm91cCwjc2VydmljZWZvcm0gLmZvcm0tZ3JvdXAsI3Bob25lZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbG9va3VwZm9ybSAucG9wdXAtY29udGFpbmVyLCNzZXJ2aWNlZm9ybSAucG9wdXAtY29udGFpbmVyIHtcclxuICB3aWR0aDozMCU7XHJcbn1cclxuI3Bob25lZm9ybSAucG9wdXAtY29udGFpbmVye1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuaW1nLnRleHQtY2VudGVyIHtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pY29ubGVmdC5tZzEwIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQ6ICNhOTAxMDE7XHJcbn1cclxuLnBob25lc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnBob25lZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDAzMDMzMztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5hcHAtY2FyZCBzcGFuIGgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnNwYW4ucHJpY2V0YWcge1xyXG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4vKiBNZWRpYSBxdWVyeSBmb3Igc2NyZWVucyBiZXR3ZWVuIDQ4MXB4IGFuZCA3NjhweCAoZS5nLiwgdGFibGV0cykgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MzdweCkgYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xyXG4gIC5mb290ZXJfcGFuZWwge1xyXG4gICAgaGVpZ2h0OiAzMyU7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcclxuICAubGVmdC1zaWRle1xyXG4gICAgZmxleC1iYXNpczozNSU7XHJcbiAgfVxyXG4gIC5jb250ZW50LXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjAgMjBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQtc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gICAuYXBwLWNhcmR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyX3BhbmVsIHtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gIH1cclxuICAvKiBBZGp1c3Qgb3RoZXIgc3R5bGVzIGFzIG5lZWRlZCAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE5OXB4KSBhbmQgKG1heC13aWR0aDogMTM5OXB4KSB7XHJcbiAgLmxlZnQtc2lkZXtcclxuICAgIGZsZXgtYmFzaXM6NDAlO1xyXG4gIH1cclxuICAuY29udGVudC13cmFwcGVye1xyXG4gICAgcGFkZGluZzowIDIwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50LXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuYXBwLWNhcmR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyX3BhbmVsIHtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gIH1cclxuICAvKiBBZGp1c3Qgb3RoZXIgc3R5bGVzIGFzIG5lZWRlZCAqL1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgLmxlZnQtc2lkZXtcclxuICAgIGZsZXgtYmFzaXM6NDAlO1xyXG4gIH1cclxuICAuY29udGVudC13cmFwcGVye1xyXG4gICAgcGFkZGluZzowIDIwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50LXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuYXBwLWNhcmR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyX3BhbmVsIHtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gIH1cclxuICAvKiBBZGp1c3Qgb3RoZXIgc3R5bGVzIGFzIG5lZWRlZCAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales',
                templateUrl: './sales.component.html',
                styleUrls: ['./sales.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


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
function ReportsComponent_div_23_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start : ", ctx_r41.clockin.created_at, " ");
} }
function ReportsComponent_div_23_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.stats.total_refund);
} }
function ReportsComponent_div_23_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_div_23_div_119_tr_11_Template(rf, ctx) { if (rf & 1) {
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
function ReportsComponent_div_23_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportsComponent_div_23_div_119_tr_11_Template, 7, 3, "tr", 28);
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
function ReportsComponent_div_23_div_120_tr_11_Template(rf, ctx) { if (rf & 1) {
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
function ReportsComponent_div_23_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportsComponent_div_23_div_120_tr_11_Template, 7, 3, "tr", 28);
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
function ReportsComponent_div_23_div_121_tr_11_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", product_r53.total, "");
} }
function ReportsComponent_div_23_div_121_tr_11_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r53.total);
} }
function ReportsComponent_div_23_div_121_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportsComponent_div_23_div_121_tr_11_td_5_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportsComponent_div_23_div_121_tr_11_td_6_Template, 2, 1, "td", 18);
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
function ReportsComponent_div_23_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportsComponent_div_23_div_121_tr_11_Template, 7, 3, "tr", 28);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Closing Sale Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportsComponent_div_23_p_13_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "No. Of Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "HST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NET TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "REFUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ReportsComponent_div_23_span_60_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ReportsComponent_div_23_span_61_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "CREDIT NOTE ISSUED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "BREAKDOWN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "CARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Giftcard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "PointsRedeem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "NET CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "TOTAL CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "PAYOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "NET CASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Printed on 09/30/2023 @ 20:20:44 by Sohaib");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, ReportsComponent_div_23_div_119_Template, 19, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ReportsComponent_div_23_div_120_Template, 19, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ReportsComponent_div_23_div_121_Template, 19, 5, "div", 18);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clockin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("End : ", ctx_r3.currentDate, " ", ctx_r3.currentTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.total_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.stats.today_total - ctx_r3.buytotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.selectors("5c"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r60.inputValues["5c"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.selectors("10c"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r62.inputValues["10c"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "25C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.selectors("25c"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r64.inputValues["25c"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.selectors("1d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r66.inputValues["1d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.selectors("2d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r68.inputValues["2d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.selectors("5d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r70.inputValues["5d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "10$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.selectors("10d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r72.inputValues["10d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "20$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.selectors("20d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_90_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r74.inputValues["20d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "50$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.selectors("50d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_100_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r76.inputValues["50d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "100$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_input_click_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.selectors("100d"); })("ngModelChange", function ReportsComponent_div_24_Template_input_ngModelChange_110_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r78.inputValues["100d"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.onNumberClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.onNumberClicked(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.onNumberClicked(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_126_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.onNumberClicked(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.onNumberClicked(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.onNumberClicked(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_132_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.onNumberClicked(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_134_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.onNumberClicked(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_136_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.onNumberClicked(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_138_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.onNumberClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_140_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.onDeleteClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "DEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_142_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.onClearClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](152, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_24_Template_button_click_153_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.updatevalues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "UPDATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["5c"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 21, ctx_r4.calculateTotalFor("5c"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["10c"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 24, ctx_r4.calculateTotalFor("10c"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["25c"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 27, ctx_r4.calculateTotalFor("25c"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["1d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 30, ctx_r4.calculateTotalFor("1d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["2d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](63, 33, ctx_r4.calculateTotalFor("2d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["5d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](73, 36, ctx_r4.calculateTotalFor("5d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["10d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 39, ctx_r4.calculateTotalFor("10d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["20d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](93, 42, ctx_r4.calculateTotalFor("20d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["50d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](103, 45, ctx_r4.calculateTotalFor("50d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.inputValues["100d"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](113, 48, ctx_r4.calculateTotalFor("100d"), "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](152, 51, ctx_r4.totalSum, "1.2-2"), "");
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
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 25, vars: 11, consts: [[1, "reports"], [1, "container-fluid"], [1, "row", "title-row"], [1, "page-title"], ["href", "home", 1, "backtohome"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], ["class", "row", "id", "order-history", 4, "ngIf"], [1, "container", "ht100"], [1, "row"], [1, "nav", "nav-tabs"], [1, "nav", "nav-item"], ["aria-current", "page", 1, "nav-link", 3, "click"], ["class", "col-md-8", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "order-history", 1, "row"], [1, "row", "order-summary"], [1, "totalspent-orders"], [4, "ngIf"], [1, "printqty-orders"], [1, "mtd-orders"], [1, "ytd-orders"], [1, "col-md-8"], [1, "table", "table-bordered"], [1, "col-md-4"], [1, "col-md-4", "text-center"], [1, "titleprint"], ["class", "titleprint", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["type", "number", "value", "5", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["type", "number", "value", "12", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["type", "number", "value", "2", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["type", "number", "value", "1", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], ["type", "number", "value", "0", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], [1, "x"], [1, "pane"], [1, "input-box"], [1, "numeric-keypad-box"], [1, "number-box", "row"], [1, "btn", "num-btn", "col-md-3", 3, "click"], [1, "btn", "num-btn", "num-btn-delete", "col-md-3", 3, "click"], [1, "btn", "num-btn", "num-btn-clear", "col-md-3", 3, "click"], [1, "btn", "btn-primary", "black", 3, "click"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportsComponent_div_23_Template, 122, 26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReportsComponent_div_24_Template, 155, 54, "div", 6);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active:focus, .btn.active.focus[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active.focus {\r\n  outline: 0;\r\n}\r\n\r\n.pane[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 400px;\r\n \r\n}\r\n\r\n.input-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: auto;\r\n  padding: 0px;\r\n}\r\n\r\n.number-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 12px 10px 10px 10px;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border: 1px transparent solid;\r\n  border-radius: 4px;\r\n  color: white;\r\n\r\n}\r\n\r\n.btn.black[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  font-size: 32px;\r\n}\r\n\r\n.num-btn[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  border-radius: 0;\r\n  border-color: transparent;\r\n  background-color: white;\r\n  color: black;\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  margin-bottom: 4px;\r\n  font-size: 50px;\r\n}\r\n\r\n.num-btn-clear[_ngcontent-%COMP%] {\r\n  background-color: #fc5185;\r\n  color: white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n  font-size: 24px;\r\n}\r\n\r\n.num-btn-delete[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  background-color: #1bd1a5;\r\n  color: white;\r\n}\r\n\r\n.num-btn-back[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  background-color: #44cef6;\r\n  color: white;\r\n}\r\n\r\n.ht100[_ngcontent-%COMP%]{\r\n  height: 70vh;\r\n}\r\n\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\n\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n\r\n.titleprint[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: #fff;\r\n  }\r\n\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 15%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin: 0px auto;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\n\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\n\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\n\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\n\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\n\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7RUFNRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUNBO0lBQ0UsY0FBYztFQUNoQjs7QUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBRzlCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2Qjs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiOztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDBKQUEwSjtJQUMxSiwwQkFBMEI7RUFDNUI7O0FBRUEsOEJBQThCOztBQUM5QjtJQUNFLGFBQWE7SUFDYiwwQ0FBMEM7RUFDNUM7O0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmOztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7QUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7O0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztBQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7RUFDZDs7QUFDQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkOztBQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLDBCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idG46Zm9jdXMsXHJcbi5idG4uZm9jdXMsXHJcbi5idG46YWN0aXZlOmZvY3VzLFxyXG4uYnRuLmFjdGl2ZS5mb2N1cyxcclxuLmJ0bi5hY3RpdmU6Zm9jdXMsXHJcbi5idG46YWN0aXZlLmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4ucGFuZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuIFxyXG59XHJcblxyXG4uaW5wdXQtYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcblxyXG4ubnVtYmVyLWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi5idG4uYmxhY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbi5udW0tYnRuIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4ubnVtLWJ0bi1jbGVhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNTE4NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxudGFibGUgdGR7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5udW0tYnRuLWRlbGV0ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiZDFhNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5udW0tYnRuLWJhY2sge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGNlZjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaHQxMDB7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcbi5zZWFyY2gtb3JkZXJzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEuYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2JhZGE1NTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLXJvdyB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUgaDEge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLnRpdGxlLXJvdyAuc2VhcmNoLW9yZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlcl9zb3J0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIHVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDUwcHggMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5maXJzdCB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGxpLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiYWRhNTU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAub3JkZXJfc29ydGVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3dubG9hZC1hbGwge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbCBhLmFsbC1oaXN0b3J5IHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gIH1cclxuICAuZG93bmxvYWQtYWxsOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAucG9zdC1zb3J0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucG9zdC1zb3J0ZXIgLm9yZGVyLW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAucG9zdC1zb3J0ZXIgLm9yZGVyLXNvcnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzExMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDM1cHggNXB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEN3QUxBSkVBQUFBQUFQLy8veFVWRmYvLy95SDVCQUVBQUFNQUxBQUFBQUFMQUFzQUFBSVVuQzJuS0xuVDRvcjAwUHZ5clF3clB6VVpzaFFBT3c9PSkgOTYlLzE1JSBuby1yZXBlYXQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTFweCAxMXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDQVVUSU9OOiBJRSBoYWNrZXJ5IGFoZWFkICovXHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKiByZW1vdmUgZGVmYXVsdCBhcnJvdyBvbiBpZTEwIGFuZCBpZTExICovXHJcbiAgfVxyXG4gIC50aXRsZXByaW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zdW1tYXJ5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYmFkYTU1O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0zIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtNCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggaW1nIHtcclxuICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICM4ODg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYyJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmJ0bi1kZWZhdWx0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmVycm9yLXRpdGxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjMzMDA7XHJcbiAgICBjb2xvcjogI2ZmMzMwMDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUgaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGEuYnRuLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgfVxyXG4gIGlucHV0I3NlYXJjaC1tZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgIFxyXG59XHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbi5vcmRlci1udW1iZXIuYnRuIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuYS5iYWNrdG9ob21lIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn0iXX0= */"] });
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
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
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
        _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_20__["GlobalsettingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"]] }); })();
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
                    _globalsettings_globalsettings_component__WEBPACK_IMPORTED_MODULE_20__["GlobalsettingsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
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
function ReceiptsComponent_div_20_tr_66_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ReceiptsComponent_div_20_tr_66_Template, 9, 4, "tr", 22);
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
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.userid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.modeOfPayment[0].modeofpayment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.card, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.giftcard, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.cash, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.orderinfo.pointsRedeem, "");
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
        const body = { htmlContent: receiptHtml };
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReceiptsComponent_div_20_Template, 96, 16, "div", 12);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\n.ht100[_ngcontent-%COMP%] {\r\n  overflow-y: scroll !important;\r\n  height: 90vh !important;\r\n}\r\na.all-history[_ngcontent-%COMP%] {\r\n  color: white !IMPORTANT;\r\n  background: black;\r\n  margin: 0px 10px 10px 10px;\r\n  width: -webkit-max-content;\r\n  width: max-content;\r\n  font-size: 26px !important;\r\n  border-radius: 5px;\r\n  cursor: pointer !important;  \r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUc5QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiwwSkFBMEo7SUFDMUosMEJBQTBCO0VBQzVCO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UsYUFBYTtJQUNiLDBDQUEwQztFQUM1QztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW9yZGVycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4gIC5vcmRlci1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1yb3cge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIGgxIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAub3JkZXJfc29ydGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmFkYTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAuZG93bmxvYWQtYWxsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGwgYS5hbGwtaGlzdG9yeSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3Qtc29ydGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnBvc3Qtc29ydGVyIC5vcmRlci1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLnBvc3Qtc29ydGVyIC5vcmRlci1zb3J0ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAzNXB4IDVweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhDd0FMQUpFQUFBQUFBUC8vL3hVVkZmLy8veUg1QkFFQUFBTUFMQUFBQUFBTEFBc0FBQUlVbkMybktMblQ0b3IwMFB2eXJRd3JQelVac2hRQU93PT0pIDk2JS8xNSUgbm8tcmVwZWF0ICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExcHggMTFweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ0FVVElPTjogSUUgaGFja2VyeSBhaGVhZCAqL1xyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLyogcmVtb3ZlIGRlZmF1bHQgYXJyb3cgb24gaWUxMCBhbmQgaWUxMSAqL1xyXG4gIH1cclxuICBcclxuICAub3JkZXItc3VtbWFyeSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMjMuNzUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYmFkYTU1O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0zIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtNCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggaW1nIHtcclxuICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICM4ODg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYyJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmJ0bi1kZWZhdWx0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmVycm9yLXRpdGxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjMzMDA7XHJcbiAgICBjb2xvcjogI2ZmMzMwMDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUgaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGEuYnRuLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgfVxyXG4gIGlucHV0I3NlYXJjaC1tZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgIFxyXG59XHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5odDEwMCB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuYS5hbGwtaGlzdG9yeSB7XHJcbiAgY29sb3I6IHdoaXRlICFJTVBPUlRBTlQ7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgIFxyXG59XHJcbmJ1dHRvbi5vcmRlci1udW1iZXIuYnRuIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuYS5iYWNrdG9ob21lIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn0iXX0= */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 110vh !important;\r\n}\r\n.search-orders[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n.order-breadcrumb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-decoration: none;\r\n    margin-right: 4px;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #bada55;\r\n  }\r\n.order-breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #bada55;\r\n  }\r\n.title-row[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    margin-bottom: 15px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 15px 0;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    height: 24px;\r\n    padding-left: 10px;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    padding: 8px 10px;\r\n    cursor: pointer;\r\n  }\r\n.title-row[_ngcontent-%COMP%]   .search-orders[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 18px !important;\r\n    box-sizing: border-box;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    color: #111;\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin: 0 50px 0 0;\r\n    position: relative;\r\n    bottom: -1px;\r\n    border-bottom-width: 2px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: transparent;\r\n    word-wrap: break-word;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    border-bottom-color: #bada55;\r\n    font-weight: 700;\r\n  }\r\n.order_sorter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #555;\r\n  }\r\n.download-all[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n.download-all[_ngcontent-%COMP%]   a.all-history[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    text-decoration: none;\r\n    padding: 6px 15px;\r\n  }\r\n.download-all[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n  }\r\n.post-sorter[_ngcontent-%COMP%]   .order-sorter[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    margin: 0 5px;\r\n    border-radius: 2px;\r\n  }\r\nselect[_ngcontent-%COMP%] {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 12px;\r\n    border: 1px solid #ccc;\r\n    height: 30px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIUnC2nKLnT4or00PvyrQwrPzUZshQAOw==) 96%/15% no-repeat #eee;\r\n    background-size: 11px 11px;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]::-ms-expand {\r\n    display: none;\r\n    \r\n  }\r\n.order-summary[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    box-sizing: border-box;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 2px;\r\n    width: 23.75%;\r\n    float: left;\r\n    box-sizing: border-box;\r\n    margin-right: 15px;\r\n    text-align: center;\r\n    border-left: 4px solid #bada55;\r\n    padding: 10px;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n  }\r\n.order-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-top: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%] {\r\n    font-family: \"Lato\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    padding: 14px 18px;\r\n    background: #fafafa;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display: block;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 18px 18px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 140px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0;\r\n    transition: box-shadow 0.5s;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 3px #888;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 18%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 62%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.4em;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n    padding: 8px;\r\n    border: 1px solid #ff3300;\r\n    color: #ff3300;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 20%;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%] {\r\n    padding: 8px 0;\r\n    background: #f3f3f3;\r\n    border: 1px solid #ddd;\r\n    color: #555;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n  }\r\n.order-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   a.btn-default[_ngcontent-%COMP%]:hover {\r\n    background: #eee;\r\n  }\r\ninput#search-me[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n   \r\n}\r\nul#toggle-orders[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 24px !important;\r\n    font-weight: 600 !important;\r\n}\r\nbutton.order-number.btn[_ngcontent-%COMP%] {\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    border: 1px solid;\r\n    display: block;\r\n    right: 5%;\r\n    position: absolute;\r\n}\r\na.backtohome[_ngcontent-%COMP%] {\r\n    background: black;\r\n    color: white;\r\n    padding: 0px 30px;\r\n    border-radius: 5px;\r\n    margin-right: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUc5QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiwwSkFBMEo7SUFDMUosMEJBQTBCO0VBQzVCO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UsYUFBYTtJQUNiLDBDQUEwQztFQUM1QztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTEwdmggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW9yZGVycyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4gIC5vcmRlci1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1icmVhZGNydW1iIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLm9yZGVyLWJyZWFkY3J1bWIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYmFkYTU1O1xyXG4gIH1cclxuICAub3JkZXItYnJlYWRjcnVtYiBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNiYWRhNTU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1yb3cge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnBhZ2UtdGl0bGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5wYWdlLXRpdGxlIGgxIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC50aXRsZS1yb3cgLnNlYXJjaC1vcmRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudGl0bGUtcm93IC5zZWFyY2gtb3JkZXJzIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAub3JkZXJfc29ydGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC5vcmRlcl9zb3J0ZXIgbGkuZmlyc3Qge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBsaS5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmFkYTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLm9yZGVyX3NvcnRlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAuZG93bmxvYWQtYWxsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kb3dubG9hZC1hbGwgYS5hbGwtaGlzdG9yeSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICB9XHJcbiAgLmRvd25sb2FkLWFsbDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3Qtc29ydGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnBvc3Qtc29ydGVyIC5vcmRlci1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLnBvc3Qtc29ydGVyIC5vcmRlci1zb3J0ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAzNXB4IDVweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhDd0FMQUpFQUFBQUFBUC8vL3hVVkZmLy8veUg1QkFFQUFBTUFMQUFBQUFBTEFBc0FBQUlVbkMybktMblQ0b3IwMFB2eXJRd3JQelVac2hRQU93PT0pIDk2JS8xNSUgbm8tcmVwZWF0ICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExcHggMTFweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ0FVVElPTjogSUUgaGFja2VyeSBhaGVhZCAqL1xyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLyogcmVtb3ZlIGRlZmF1bHQgYXJyb3cgb24gaWUxMCBhbmQgaWUxMSAqL1xyXG4gIH1cclxuICBcclxuICAub3JkZXItc3VtbWFyeSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMjMuNzUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYmFkYTU1O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAub3JkZXItc3VtbWFyeSBkaXYgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLm9yZGVyLXN1bW1hcnkgZGl2IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlci1jb250YWluZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtMSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciAuY29sLTIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5oZWFkZXIgLmNvbC0zIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5jb2wtNCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmhlYWRlciBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggaW1nIHtcclxuICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGltZzpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICM4ODg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuICAub3JkZXItY29udGFpbmVyIC5ib3ggLmNvbC0yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYyJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmJ0bi1kZWZhdWx0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLmVycm9yLXRpdGxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjMzMDA7XHJcbiAgICBjb2xvcjogI2ZmMzMwMDtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IC5jb2wtMiAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTIgLnByb2R1Y3QtdGl0bGUgaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCAuY29sLTMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLm9yZGVyLWNvbnRhaW5lciAuYm94IGEuYnRuLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5vcmRlci1jb250YWluZXIgLmJveCBhLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgfVxyXG4gIGlucHV0I3NlYXJjaC1tZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgIFxyXG59XHJcbnVsI3RvZ2dsZS1vcmRlcnMgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbi5vcmRlci1udW1iZXIuYnRuIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuYS5iYWNrdG9ob21lIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn0iXX0= */"] });
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
            const utterance = new SpeechSynthesisUtterance(greeting);
            // Try to set the voice to Indian English (en-IN)
            const indianVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'en-IN');
            if (indianVoice) {
                utterance.voice = indianVoice;
            }
            else {
                console.warn('Indian English voice not available. Using default voice.');
            }
            localStorage.setItem('userid', id);
            localStorage.setItem('username', name);
            window.speechSynthesis.speak(utterance);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: linear-gradient(to right top, #78009c, #663eba, #4d5ed0, #2f79e1, #1291eb);\r\n  }\r\n  \r\n  .device[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 16px;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    transform: scale(1);\r\n  }\r\n  \r\n  .device[_ngcontent-%COMP%]   .device-bezel[_ngcontent-%COMP%] {\r\n    border-radius: inherit;\r\n    padding: 36px 10px 24px 10px;\r\n    overflow: hidden;\r\n   \r\n    position: relative;\r\n    box-sizing: content-box;\r\n  }\r\n  \r\n  .device[_ngcontent-%COMP%]   .device-viewport[_ngcontent-%COMP%] {\r\n    contain: strict;\r\n    width: 350px;\r\n    height: 622.2222222222px;\r\n    background: white;\r\n    border-radius: inherit;\r\n    transform: scale(1);\r\n  }\r\n  \r\n  *[_ngcontent-%COMP%] {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: 100%;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    background: white;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 16px;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.5em;\r\n    margin-bottom: 8px;\r\n  }\r\n  \r\n  .body-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    height: auto;\r\n    border-radius: 5px;\r\n    background: #080e09;\r\n    border: none;\r\n    outline: none;\r\n    margin-top: 10px;\r\n    cursor: pointer;\r\n    color: white;\r\n    padding: 10px 30px;\r\n    text-align: center;\r\n    margin: 0px auto;\r\n    display: block;\r\n  }\r\n  \r\n  .pin-info[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: white;\r\n    background: #EAEAEA;\r\n  }\r\n  \r\n  .pin-display[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: white;\r\n  }\r\n  \r\n  .keypad[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    background: white;\r\n  }\r\n  \r\n  .keypad--row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .keypad--button[_ngcontent-%COMP%] {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    height: 48px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    transition: all 100ms ease-out;\r\n  }\r\n  \r\n  .keypad--button[_ngcontent-%COMP%]:active {\r\n    background: #EAEAEA;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .confirmation-dots.error[_ngcontent-%COMP%] {\r\n    animation-name: shake;\r\n    animation-duration: 300ms;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    max-height: 24px;\r\n    width: 139px;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle[_ngcontent-%COMP%] {\r\n    transition: all 100ms ease-out;\r\n    fill: white;\r\n    stroke-width: 2px;\r\n    stroke: black;\r\n    outline-offset: -2px;\r\n    outline-width: 2px;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle.entered[_ngcontent-%COMP%] {\r\n    fill: black;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle.success[_ngcontent-%COMP%] {\r\n    fill: green;\r\n    stroke: green;\r\n  }\r\n  \r\n  .confirmation-dots[_ngcontent-%COMP%]   .pin-circle.error[_ngcontent-%COMP%] {\r\n    fill: red;\r\n    stroke: red;\r\n  }\r\n  \r\n  .circle-lock--container[_ngcontent-%COMP%] {\r\n    height: 72px;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .circle-lock[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: white;\r\n    border-radius: 1000px;\r\n    position: relative;\r\n    top: -40px;\r\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.12);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .circle-lock[_ngcontent-%COMP%]   .lock-icon[_ngcontent-%COMP%] {\r\n    color: #333;\r\n  }\r\n  \r\n  .page-title[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    line-height: 35px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    margin: 10px;\r\n  }\r\n  \r\n  .pin-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  @keyframes shake {\r\n    10%, 90% {\r\n      transform: translate3d(-1px, 0, 0);\r\n    }\r\n    20%, 80% {\r\n      transform: translate3d(2px, 0, 0);\r\n    }\r\n    30%, 50%, 70% {\r\n      transform: translate3d(-4px, 0, 0);\r\n    }\r\n    40%, 60% {\r\n      transform: translate3d(4px, 0, 0);\r\n    }\r\n  }\r\n  \r\n  .rotate[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n    transition: transform 0.3s ease-in-out;\r\n  }\r\n  \r\n  circle.pin-circle.filled[_ngcontent-%COMP%] {\r\n    fill: black !important;\r\n}\r\n  \r\n  .device[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    left: 40%; \r\n}\r\n  \r\n  .bgm[_ngcontent-%COMP%]{\r\n   \r\n   background:black;\r\n    height: 100%;\r\n    transition: filter 250ms, transform 250ms;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: fixed;\r\n}\r\n  \r\n  .bgm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n  \r\n  .leftbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 30px;\r\n    \r\n    padding: 10px;\r\n    top: 5%;\r\n}\r\n  \r\n  .user-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n  \r\n  .leftbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    margin-left: 10px;\r\n}\r\n  \r\n  i.fa-user.fas[_ngcontent-%COMP%] {\r\n    line-height: 35px;\r\n}\r\n  \r\n  .card-content[_ngcontent-%COMP%] {\r\n    padding: 5px 20px !important;\r\n}\r\n  \r\n  h3.bgt[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: 700 !important;\r\n    font-size: 30px !important;\r\n    text-align: center;\r\n}\r\n  \r\n  button#reset-button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    letter-spacing:5px;\r\n}\r\n  \r\n  #reset-button[_ngcontent-%COMP%]   i.fa.fa-solid.fa-download[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n  \r\n  .leftbar[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n  \r\n  .device-bezel[_ngcontent-%COMP%] {\r\n  padding: 10px !important;\r\n  background: white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0ZBQXNGO0VBQ3hGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLDBCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4QkFBOEI7RUFDaEM7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0Usa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxpQ0FBaUM7SUFDbkM7SUFDQTtNQUNFLGtDQUFrQztJQUNwQztJQUNBO01BQ0UsaUNBQWlDO0lBQ25DO0VBQ0Y7O0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsc0NBQXNDO0VBQ3hDOztFQUNBO0lBQ0Usc0JBQXNCO0FBQzFCOztFQUNBO0lBQ0ksT0FBTztJQUNQLFNBQVM7QUFDYjs7RUFFQTtHQUNHLG1EQUFtRDtHQUNuRCxnQkFBZ0I7SUFDZixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7RUFDQTtJQUNJLGVBQWU7QUFDbkI7O0VBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTs7SUFFVixhQUFhO0lBQ2IsT0FBTztBQUNYOztFQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztFQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7RUFFRTtJQUNFLGlCQUFpQjtBQUNyQjs7RUFDQTtJQUNJLDRCQUE0QjtBQUNoQzs7RUFDQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7RUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxXQUFXO0FBQ2Y7O0VBQ0E7SUFDSSxlQUFlO0FBQ25COztFQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICM3ODAwOWMsICM2NjNlYmEsICM0ZDVlZDAsICMyZjc5ZTEsICMxMjkxZWIpO1xyXG4gIH1cclxuICBcclxuICAuZGV2aWNlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIC5kZXZpY2UgLmRldmljZS1iZXplbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMzZweCAxMHB4IDI0cHggMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgfVxyXG4gIC5kZXZpY2UgLmRldmljZS12aWV3cG9ydCB7XHJcbiAgICBjb250YWluOiBzdHJpY3Q7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDYyMi4yMjIyMjIyMjIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNvbnRlbnQgaW1nIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuICAuYm9keS1jb250ZW50IGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5ib2R5LWNvbnRlbnQgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIC5ib2R5LWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwODBlMDk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnBpbi1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0VBRUFFQTtcclxuICB9XHJcbiAgXHJcbiAgLnBpbi1kaXNwbGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAua2V5cGFkIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmtleXBhZC0tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmtleXBhZC0tYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICAua2V5cGFkLS1idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQUVBRUE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb25maXJtYXRpb24tZG90cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbmZpcm1hdGlvbi1kb3RzLmVycm9yIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgfVxyXG4gIC5jb25maXJtYXRpb24tZG90cyBzdmcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAxMzlweDtcclxuICB9XHJcbiAgLmNvbmZpcm1hdGlvbi1kb3RzIC5waW4tY2lyY2xlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2U6IGJsYWNrO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAycHg7XHJcbiAgfVxyXG4gIC5jb25maXJtYXRpb24tZG90cyAucGluLWNpcmNsZS5lbnRlcmVkIHtcclxuICAgIGZpbGw6IGJsYWNrO1xyXG4gIH1cclxuICAuY29uZmlybWF0aW9uLWRvdHMgLnBpbi1jaXJjbGUuc3VjY2VzcyB7XHJcbiAgICBmaWxsOiBncmVlbjtcclxuICAgIHN0cm9rZTogZ3JlZW47XHJcbiAgfVxyXG4gIC5jb25maXJtYXRpb24tZG90cyAucGluLWNpcmNsZS5lcnJvciB7XHJcbiAgICBmaWxsOiByZWQ7XHJcbiAgICBzdHJva2U6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmNsZS1sb2NrLS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgXHJcbiAgLmNpcmNsZS1sb2NrIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNpcmNsZS1sb2NrIC5sb2NrLWljb24ge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBpbi1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDEwJSwgOTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcclxuICAgIH1cclxuICAgIDIwJSwgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgMzAlLCA1MCUsIDcwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICA0MCUsIDYwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdGF0ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBjaXJjbGUucGluLWNpcmNsZS5maWxsZWQge1xyXG4gICAgZmlsbDogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4uZGV2aWNlIHtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA0MCU7IFxyXG59XHJcblxyXG4uYmdte1xyXG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmcud2VicCk7ICovXHJcbiAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjUwbXMsIHRyYW5zZm9ybSAyNTBtcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uYmdtIHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxlZnRiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRvcDogNSU7XHJcbn1cclxuLnVzZXItaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4ubGVmdGJhciBoM3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiAgaS5mYS11c2VyLmZhcyB7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaDMuYmd0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiNyZXNldC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzo1cHg7XHJcbn1cclxuXHJcbiNyZXNldC1idXR0b24gaS5mYS5mYS1zb2xpZC5mYS1kb3dubG9hZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ubGVmdGJhciAuY2FyZC1jb250ZW50IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGV2aWNlLWJlemVsIHtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
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
        this.calculateTotalSum();
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
ClockinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockinComponent, selectors: [["app-clockin"]], decls: 114, vars: 57, consts: [[1, "reports", "container-fluid"], [1, "row", "title-row", "header"], [1, "page-title"], [1, "text-right"], ["id", "order-history", 1, "row"], [1, "col-md-12"], [1, "table", "table-bordered"], ["type", "number", 1, "form-control", 3, "ngModel", "click", "ngModelChange"], [1, "btn", "btn-primary", "black", 3, "click"]], template: function ClockinComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_25_listener() { return ctx.selectors("100d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_25_listener($event) { return (ctx.inputValues["100d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_33_listener() { return ctx.selectors("50d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_33_listener($event) { return (ctx.inputValues["50d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_41_listener() { return ctx.selectors("20d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_41_listener($event) { return (ctx.inputValues["20d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_49_listener() { return ctx.selectors("10d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_49_listener($event) { return (ctx.inputValues["10d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_57_listener() { return ctx.selectors("5d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_57_listener($event) { return (ctx.inputValues["5d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_65_listener() { return ctx.selectors("2d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_65_listener($event) { return (ctx.inputValues["2d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_73_listener() { return ctx.selectors("1d"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_73_listener($event) { return (ctx.inputValues["1d"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_81_listener() { return ctx.selectors("25c"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_81_listener($event) { return (ctx.inputValues["25c"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_89_listener() { return ctx.selectors("10c"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_89_listener($event) { return (ctx.inputValues["10c"] = $event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClockinComponent_Template_input_click_97_listener() { return ctx.selectors("5c"); })("ngModelChange", function ClockinComponent_Template_input_ngModelChange_97_listener($event) { return (ctx.inputValues["5c"] = $event); });
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["a.backtohome[_ngcontent-%COMP%] {\r\n    margin-right: 30px;\r\n}\r\nspan.text-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 24px;\r\n    margin: 0px 15px;\r\n}\r\n.reports[_ngcontent-%COMP%] {\r\n    overflow: auto !important;\r\n    height: 130vh !important;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 20px !important;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n  }\r\n.btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active:focus, .btn.active.focus[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active.focus {\r\n    outline: 0;\r\n  }\r\n.pane[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 400px;\r\n   \r\n  }\r\n.input-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: auto;\r\n    padding: 0px;\r\n  }\r\n.number-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 12px 10px 10px 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border: 1px transparent solid;\r\n    border-radius: 4px;\r\n    color: white;\r\n\r\n  }\r\n.btn.black[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 32px;\r\n  }\r\n.num-btn[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    border-radius: 0;\r\n    border-color: transparent;\r\n    background-color: white;\r\n    color: black;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    margin-bottom: 4px;\r\n    font-size: 50px;\r\n  }\r\n.num-btn-clear[_ngcontent-%COMP%] {\r\n    background-color: #fc5185;\r\n    color: white;\r\n  }\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n  }\r\n.num-btn-delete[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    background-color: #1bd1a5;\r\n    color: white;\r\n  }\r\n.num-btn-back[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    background-color: #44cef6;\r\n    color: white;\r\n  }\r\ntable.table.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    text-align: center;\r\n    padding: 2px;\r\n  }\r\nbutton.btn.btn-primary.black[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n.row.title-row.header[_ngcontent-%COMP%] {\r\n  padding: 5px 0px;\r\n  border-bottom: 2px solid #808080bf;\r\n}\r\ntable.table.table-bordered[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  margin: 10px auto;\r\n}\r\ntable.table.table-bordered[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding: 2px;\r\n  width:500px;\r\n  height: auto;\r\n}\r\n.reports[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f0f0f0;\r\n  padding: 20px;\r\n}\r\n.title-row[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n#order-history[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-collapse: collapse;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #333;\r\n  color: #fff;\r\n}\r\ninput.form-control[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\nbutton.btn[_ngcontent-%COMP%] {\r\n  background-color: #007BFF;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\nbutton.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #0056b3;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n}\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  color:white !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2tpbi9jbG9ja2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFVBQVU7RUFDWjtBQUVGOzs7Ozs7SUFNSSxVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhOztFQUVmO0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFJRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFlBQVk7O0VBRWQ7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVEO0lBQ0csZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Nsb2NraW4vY2xvY2tpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5iYWNrdG9ob21lIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5zcGFuLnRleHQtcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxufVxyXG4ucmVwb3J0cyB7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMzB2aCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWdlLXRpdGxlIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4uYnRuOmZvY3VzLFxyXG4uYnRuLmZvY3VzLFxyXG4uYnRuOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi5hY3RpdmUuZm9jdXMsXHJcbi5idG4uYWN0aXZlOmZvY3VzLFxyXG4uYnRuOmFjdGl2ZS5mb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuICBcclxuICAucGFuZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuLmlucHV0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuLm51bWJlci1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIH1cclxuICAuYnRuLmJsYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4ubnVtLWJ0biB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgXHJcbi5udW0tYnRuLWNsZWFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzUxODU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIHRhYmxlIHRke1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuLm51bS1idG4tZGVsZXRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJkMWE1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuIC5udW0tYnRuLWJhY2sge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGNlZjY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIHRhYmxlLnRhYmxlLnRhYmxlLWJvcmRlcmVkIHRkIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbiAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5ibGFjayB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnJvdy50aXRsZS1yb3cuaGVhZGVyIHtcclxuICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODA4MDgwYmY7XHJcbn1cclxudGFibGUudGFibGUudGFibGUtYm9yZGVyZWQge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG50YWJsZS50YWJsZS50YWJsZS1ib3JkZXJlZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgd2lkdGg6NTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVwb3J0cyB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRpdGxlLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4jb3JkZXItaGlzdG9yeSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcbi5wYWdlLXRpdGxlIGgxe1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnBhZ2UtdGl0bGUgaDEsLnBhZ2UtdGl0bGUgc3BhbntcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
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
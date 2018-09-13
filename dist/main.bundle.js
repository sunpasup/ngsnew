webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" *ngIf=\"i18nReady\">\n\t<!--<cui-header [options]=\"headerOptions\"></cui-header>-->\n  <header class=\"header\">\n    <div class=\"header-bar container\">\n      <a href=\"/customer\" class=\"btn btn--small btn--icon toggle-menu\">\n        <span class=\"icon-list-menu\"></span>\n      </a>\n      <a href=\"javascript:;\" class=\"header-bar__logo\">\n        <span class=\"icon-cisco\"></span>\n      </a>\n      <div class=\"header-bar__main\">\n        <!--<div class=\"header-breadcrumbs\">-->\n          <!--<ul class=\"breadcrumb\">-->\n            <!--<li><a href=\"javascript:;\">Operate</a></li>-->\n            <!--<li><a href=\"javascript:;\">Devices</a></li>-->\n            <!--<li><span>Discovery</span></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n        <div class=\"header-heading\">\n          <h1 class=\"page-title\">NextGen Sales</h1>\n          <div class=\"header-utilities\">\n\n            <ng-autocomplete  [classes]=\"['']\" [group]=\"timeGroup\"></ng-autocomplete>\n\n            <ng-autocomplete (selected)=\"Selected($event)\" [classes]=\"['']\" [group]=\"group\"></ng-autocomplete>\n\n          </div>\n        </div>\n\n        <!--<div class=\"header-menus\">-->\n          <!--<ul class=\"nav nav-tabs\">-->\n            <!--<li class=\"tab active\" id=\"firstTab\" (click)=\"tabone()\">-->\n              <!--<a href=\"javascript:;\"><div class=\"tab__heading\" title=\"Tab 1\">Tab 1</div></a>-->\n            <!--</li>-->\n            <!--<li class=\"tab\" id=\"secondTab\" (click)=\"tabtwo()\">-->\n              <!--<a href=\"javascript:;\"><div class=\"tab__heading\" title=\"Tab 2\">Tab 2</div></a>-->\n            <!--</li>-->\n            <!--<li class=\"tab\" id=\"thirdTab\" (click)=\"tabthree()\">-->\n              <!--<a href=\"javascript:;\"><div class=\"tab__heading\" title=\"Tab 3\">Tab 3</div></a>-->\n            <!--</li>-->\n          <!--</ul>-->\n        <!--</div>-->\n      </div>\n      <div class=\"header-toolbar\">\n        <a href=\"javascript:;\" class=\"avatar\">John Doe</a>\n\n        <button class=\"btn btn--icon btn--negative\">\n          <span class=\"icon-alert\"></span>\n          <span class=\"btn__subtext\">999+</span>\n        </button>\n        <button class=\"btn btn--icon\">\n          <span class=\"icon-mail\"></span>\n          <span class=\"btn__subtext\">34</span>\n        </button>\n        <button class=\"btn btn--icon\" (click)=\"enableEditMode()\">\n          <span class=\"icon-cog\"></span>\n        </button>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"row\" style=\"background:#049fd9; padding: 20px\" *ngIf=\"!customer1\">\n    <div class=\"col-md-2\">\n      <div class=\"panel panel--blue\">\n        <font style=\"font-size: 30px\">ARR Growth (Y/Y)</font>\n      </div>\n    </div>\n    <div class=\"col-md-2\" (click)=\"clickonCust1()\">\n      <div class=\"panel panel--raised-medium\">\n        <div>\n        <div style=\"font-size: 25px; font-weight: 700; color: #444444;\">Amazon</div>\n        <div style=\"float: right; margin-top:-32px\" class=\"smallChart\">\n\n           <font style=\"color: #049fd9;font-size: 20px;\n    font-weight: bold;\">5 %</font> <i class=\"fas fa-arrow-down\" style=\"padding-left: 10px; padding-right: 5px\"></i>\n          <!--<kendo-chart style=\"height: 100px!important;\">-->\n\n            <!--<kendo-chart-series>-->\n              <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" color=\"#e9691e\" [data]=\"[1, 2, 2, 0]\">-->\n              <!--</kendo-chart-series-item>-->\n            <!--</kendo-chart-series>-->\n          <!--</kendo-chart>-->\n        </div></div>\n\n      </div>\n    </div>\n    <div class=\"col-md-2\" (click)=\"clickonCust2()\">\n      <div class=\"panel panel--raised-medium\">\n        <div>\n          <div style=\"font-size: 25px; font-weight: 700; color: #444444;\">Apple</div>\n          <div style=\"float: right; margin-top:-32px\"  class=\"smallChart\">\n\n            <font style=\"color: #049fd9;font-size: 20px;\n    font-weight: bold;\">2%</font> <i class=\"fas fa-arrow-down\" style=\"padding-left: 10px;  padding-right: 5px\"></i>\n            <!--<kendo-chart style=\"height: 100px!important;\">-->\n\n            <!--<kendo-chart-series>-->\n            <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" color=\"#e9691e\" [data]=\"[1, 2, 2, 0]\">-->\n            <!--</kendo-chart-series-item>-->\n            <!--</kendo-chart-series>-->\n            <!--</kendo-chart>-->\n          </div></div>\n\n      </div>\n    </div>\n    <div class=\"col-md-2\" (click)=\"clickonCust3()\">\n      <div class=\"panel panel--raised-medium\">\n        <div>\n          <div style=\"font-size: 25px; font-weight: 700; color: #444444\">Paypal</div>\n          <div style=\"float: right; margin-top:-32px\"  class=\"smallChart\">\n\n            <font style=\"color: #049fd9;font-size: 20px;\n    font-weight: bold;\">15 %</font> <i class=\"fas fa-arrow-up\" style=\"padding-left: 10px;  padding-right: 5px\"></i>\n            <!--<kendo-chart style=\"height: 100px!important;\">-->\n\n            <!--<kendo-chart-series>-->\n            <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" color=\"#e9691e\" [data]=\"[1, 2, 2, 0]\">-->\n            <!--</kendo-chart-series-item>-->\n            <!--</kendo-chart-series>-->\n            <!--</kendo-chart>-->\n          </div></div>\n\n\n      </div>\n    </div>\n    <div class=\"col-md-2\" (click)=\"clickonCust4()\">\n      <div class=\"panel panel--raised-medium\">\n        <div>\n          <div style=\"font-size: 25px; font-weight: 700; color: #444444\">Microsoft</div>\n          <div style=\"float: right; margin-top:-32px\"  class=\"smallChart\">\n\n            <font style=\"color: #049fd9;font-size: 20px;\n    font-weight: bold;\">2.5 %</font> <i class=\"fas fa-arrow-up\" style=\"padding-left: 10px;  padding-right: 5px\"></i>\n            <!--<kendo-chart style=\"height: 100px!important;\">-->\n\n            <!--<kendo-chart-series>-->\n            <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" color=\"#e9691e\" [data]=\"[1, 2, 2, 0]\">-->\n            <!--</kendo-chart-series-item>-->\n            <!--</kendo-chart-series>-->\n            <!--</kendo-chart>-->\n          </div></div>\n\n\n      </div>\n    </div>\n    <div class=\"col-md-2\" (click)=\"clickonCust5()\">\n      <div class=\"panel panel--raised-medium\">\n        <div>\n          <div style=\"font-size: 25px; font-weight: 700; color: #444444\">TATA</div>\n          <div style=\"float: right; margin-top:-32px\"  class=\"smallChart\">\n\n            <font style=\"color: #049fd9;font-size: 20px;\n    font-weight: bold;\">10 %</font> <i class=\"fas fa-arrow-up\" style=\"padding-left: 10px;  padding-right: 5px\"></i>\n            <!--<kendo-chart style=\"height: 100px!important;\">-->\n\n            <!--<kendo-chart-series>-->\n            <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" color=\"#e9691e\" [data]=\"[1, 2, 2, 0]\">-->\n            <!--</kendo-chart-series-item>-->\n            <!--</kendo-chart-series>-->\n            <!--</kendo-chart>-->\n          </div></div>\n\n\n      </div>\n    </div>\n    <!--<div class=\"col-md-1\">-->\n      <!--<div class=\"panel panel&#45;&#45;blue\">-->\n\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n<div class=\"row\" style=\"background: white; padding: 20px\" *ngIf=\"!customer1\">\n  <div style=\"padding: 10px 25px 0 25px; font-size: 25px; font-weight: 700\">My View</div>\n  <div style=\"padding: 16px 25px 0 0px; font-size: 20px; font-weight: 400\">Silicon Valley Select</div>\n\n</div>\n\n  <div class=\"row\" style=\"background: white; padding: 20px\" *ngIf=\"!customer1\">\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n\n\n        <div style=\"color:black; font-size: 18px; text-align: center\">Actuals</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> $ 30.2 M</div>\n      <div style=\"color:black; font-size: 18px; text-align: center\"> QTD <font style=\"color: #049fd9\">3%</font> <i class=\"fas fa-arrow-up\"></i></div>\n        <div style=\"color:black; font-size: 18px; display: inline-flex; text-align: center; margin-left: 17%\">  <div>NCB <font style=\"color: #049fd9\"> $ 5 M</font></div> <div style=\"color:black; font-size: 18px; text-align: center; margin-left: 10px\"> Total Potential  <font style=\"color: #049fd9\">$ 35.2 M</font> </div> </div>\n\n\n\n\n\n        <!--<div style=\"color:black; font-size: 18px; text-align: center\">TCV - $ 60 M 3%</div>-->\n        <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n        <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n        <div style=\"color:black; font-size: 18px; text-align: center\">ARR</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> $ 16.2 M</div>\n        <div style=\"color:black; font-size: 18px; text-align: center\"> QTD <font style=\"color: #049fd9\"> 2.5%  </font><i class=\"fas fa-arrow-up\"></i>  </div>\n        <div style=\"color:black; font-size: 18px; display: inline-flex; text-align: center; margin-left: 25%\"><div> ATR  <font style=\"color: #049fd9\">$ 9.0 M  </font> </div>  <div style=\"color:black; font-size: 18px; text-align: center; margin-left: 10px\"> Churn <font style=\"color: #d11c2a\">$ 2 M</font> </div> </div>\n\n\n\n\n\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n        <div style=\"color:black; font-size: 18px; text-align: center\">Forecast Attainment</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> 30% of $ 100 M</div>\n        <div style=\"color: #049fd9; font-size: 20px; text-align: center\"> (40 Days to go)</div>\n\n        <div style=\"color:black; font-size: 18px; text-align: center\"> &nbsp;<font style=\"color: #049fd9\"></font> </div>\n\n\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n        <div style=\"color:black; font-size: 18px; text-align: center\">Commit Coverage</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> 51 %</div>\n        <div style=\"color:black; font-size: 18px; text-align: center\"> Past Due <font style=\"color: #d11c2a\">2 M</font> </div>\n        <div style=\"color:black; font-size: 18px; text-align: center\"> &nbsp; <font style=\"color: #049fd9\"></font> </div>\n\n\n\n\n      </div>\n    </div>\n    <!--<div class=\"col-md-2\" (click)=\"clickonCust4()\">-->\n      <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n        <!--<div style=\"color:black; font-size: 18px; text-align: center\">ATR</div>-->\n        <!--<div style=\"color: #049fd9; font-size: 50px; text-align: center\"> $ 10.2 M</div>-->\n        <!--<div style=\"color:black; font-size: 18px; text-align: center\"> QTD -<font style=\"color: #049fd9\">3%</font> </div>-->\n\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-2\" (click)=\"clickonCust4()\">-->\n      <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n        <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n        <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n\n\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n\n\n  <div class=\"row\" style=\"background:#049fd9;\" *ngIf=\"customer1\">\n    <div class=\"col-md-9\">\n      <div class=\"panel panel--blue\" style=\"font-size: 40px;\n    font-weight: bold; text-align: center\">\n{{selectedCustName}}\n      </div>\n    </div>\n    <!--<div class=\"col-md-3\">-->\n      <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n        <!--<div style=\"display: inline-flex\">-->\n        <!--<div style=\"padding:0px 52px 0 83px\">-->\n          <!--<div style=\"font-size: 25px; color: #049fd9; float: right;\">$ 250 M </div>-->\n          <!--<div style=\"font-size: 20px; color: #444444;\">Bookings</div>-->\n\n        <!--</div>-->\n        <!--<div style=\"padding: 0 10px 0 70px; float: right; border-left: 1px solid lightgray\">-->\n          <!--<div style=\"font-size: 25px; color: #049fd9; float: right;\">$ 250 M </div>-->\n          <!--<div style=\"font-size: 20px; color: #444444;\">CSAT</div>-->\n\n        <!--</div>-->\n        <!--</div>-->\n\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-3\">-->\n      <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n        <!--<div style=\"display: inline-flex\">-->\n          <!--<div style=\"padding:0px 52px 0 83px\">-->\n            <!--<div style=\"font-size: 25px; color: #049fd9; float: right;\">$ 250 M </div>-->\n            <!--<div style=\"font-size: 20px; color: #444444;\">ARR Growth</div>-->\n\n          <!--</div>-->\n          <!--<div style=\"padding: 0 10px 0 70px; float: right; border-left: 1px solid lightgray\">-->\n            <!--<div style=\"font-size: 25px; color: #049fd9; float: right;\">$ 250 M </div>-->\n            <!--<div style=\"font-size: 20px; color: #444444;\">Renewals</div>-->\n\n          <!--</div>-->\n        <!--</div>-->\n\n      <!--</div>-->\n    <!--</div>-->\n    <div class=\"col-md-3\" style=\"padding-top:22px; text-align:center;\">\n\n      <button class=\"btn btn--secondary\" (click)=\"clickonBack()\" style=\"background: white!important;\">Back</button>\n\n      <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n        <!--<div style=\"display: inline-flex\">-->\n          <!--<div style=\"padding:0px 52px 0 83px\">-->\n            <!--<div style=\"font-size: 25px; color: #049fd9; float: right;\">$ 250 M </div>-->\n            <!--<div style=\"font-size: 20px; color: #444444;\">Bookings</div>-->\n\n          <!--</div>-->\n          <!--<div style=\"padding: 0 10px 0 70px; float: right; border-left: 1px solid lightgray\">-->\n            <!--<div style=\"font-size: 25px; color: #049fd9; float: right;\">$ 250 M </div>-->\n            <!--<div style=\"font-size: 20px; color: #444444;\">Bookings</div>-->\n\n          <!--</div>-->\n        <!--</div>-->\n\n      <!--</div>-->\n    </div>\n  </div>\n\n\n  <div class=\"row\" style=\"background: white; padding: 20px\" *ngIf=\"customer1\">\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n\n\n        <div style=\"color:black; font-size: 18px; text-align: center\">Actuals</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> $ 13 M</div>\n        <div style=\"color:black; font-size: 18px; text-align: center\"> QTD <font style=\"color: #049fd9\"> 8 %</font> <i class=\"fas fa-arrow-up\"></i>  </div>\n        <div style=\"color:black; font-size: 18px; display: inline-flex; text-align: center; margin-left: 30%\"><div> <font style=\"color: #049fd9\"> </font></div> <div style=\"color:black; font-size: 18px; text-align: center; margin-left: 10px\"> &nbsp;<font style=\"color: #049fd9\"></font> </div> </div>\n\n\n\n        <!--<div style=\"color:black; font-size: 18px; text-align: center\">TCV - $ 60 M 3%</div>-->\n        <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n        <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n        <div style=\"color:black; font-size: 18px; text-align: center\">ATR</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> $ 8 M</div>\n        <div style=\"color:black; font-size: 18px; display: inline-flex; text-align: center; margin-left: 23%\"><div> ARR <font style=\"color: #049fd9\"> $ 5 M  </font> </div>  <div style=\"color:black; font-size: 18px; text-align: center; margin-left: 10px\"> Churn <font style=\"color: #D11c2a\">$ 2 M</font> </div> </div>\n        <div style=\"color:black; font-size: 18px; text-align: center\"> Avg Renewal <font style=\"color: #049fd9\"> 88 %</font> </div>\n\n\n\n\n\n\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n        <div style=\"color:black; font-size: 18px; text-align: center\">Pipeline</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> 6 M</div>\n\n        <div style=\"color:black; font-size: 18px; text-align: center\"> New Oppty <font style=\"color: #049fd9\"> 5.3 M</font> </div>\n        <div style=\"color:black; font-size: 18px; display: inline-flex; text-align: center; margin-left: 23%\"><div> Renewals Oppty<font style=\"color: #049fd9\"> $ 0.7 M  </font></div> </div>\n\n        <!--<div style=\"color:black; font-size: 18px; text-align: center\"> Renewals -<font style=\"color: #049fd9\">0.7 M</font> </div>-->\n        <!--<div style=\"color:black; font-size: 18px; text-align: center\"> Churn -<font style=\"color: #049fd9\">0.2 M</font> </div>-->\n\n\n\n\n\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"panel panel--raised-medium\">\n        <div style=\"color:black; font-size: 18px; text-align: center\">NPS</div>\n        <div style=\"color: #049fd9; font-size: 50px; text-align: center\"> 8  <i class=\"fas fa-arrow-up\" style=\"font-size: 25px\"> 1</i> </div>\n        <div style=\"color:black; font-size: 18px; text-align: center\"> Promotor<font style=\"color: #049fd9\"> 3 %</font><i class=\"fas fa-arrow-up\"></i>  </div>\n        <div style=\"color:black; font-size: 18px; text-align: center\">  <font style=\"color: #049fd9\"> &nbsp;</font> </div>\n\n\n\n\n      </div>\n    </div>\n    <!--<div class=\"col-md-2\" (click)=\"clickonCust4()\">-->\n    <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n    <!--<div style=\"color:black; font-size: 18px; text-align: center\">ATR</div>-->\n    <!--<div style=\"color: #049fd9; font-size: 50px; text-align: center\"> $ 10.2 M</div>-->\n    <!--<div style=\"color:black; font-size: 18px; text-align: center\"> QTD -<font style=\"color: #049fd9\">3%</font> </div>-->\n\n    <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-2\" (click)=\"clickonCust4()\">-->\n    <!--<div class=\"panel panel&#45;&#45;raised-medium\">-->\n    <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n    <!--<div style=\"font-size: 25px; font-weight: bold; color: #049fd9;\">Amazon</div>-->\n\n\n    <!--</div>-->\n    <!--</div>-->\n  </div>\n\t<div class=\"content content-background--alt\" id=\"tab1\" *ngIf=\"!customer1\">\n\t\t<div class=\"flex-fill half-margin-top\">\n\t\t\t<div class=\"container-fluid\">\n        <div style=\"display: flex\">\n        <div class=\"\" style=\"width:33%\">\n          <div class=\"panel\">\n            <div class=\"\">\n\n              <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px;\" id=\"card7\">\n                <div class=\"panel panel--loose panel--raised panel--fluid\">\n                  <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Pipeline Waterfall <sub>In Millions</sub></h6>\n                  <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                  <!--<span  data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                  <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check7()\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"checkbox__input\"></span>\n                  </label>\n                  <div class=\"chart\">\n                    <kendo-chart [title]=\"{ text: '' }\">\n                      <kendo-chart-series>\n                        <kendo-chart-axis-defaults\n\n                          [majorGridLines]=\"false\"\n                          [minorGridLines]=\"false\"\n\n                        ></kendo-chart-axis-defaults>\n                        <kendo-chart-series-item type=\"waterfall\"\n                                                 [data]=\"cashFlowData\" [color]=\"pointColor\"\n                                                 field=\"amount\" categoryField=\"period\" summaryField=\"summary\">\n                          <kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">\n                          </kendo-chart-series-item-labels>\n                        </kendo-chart-series-item>\n                      </kendo-chart-series>\n                      <kendo-chart-value-axis>\n                        <kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">\n                        </kendo-chart-value-axis-item>\n                      </kendo-chart-value-axis>\n                    </kendo-chart>\n                  </div>\n                </div>\n              </div>\n              <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card3\">\n                <div class=\"panel panel--loose panel--raised panel--fluid\">\n                  <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">IB - Attach, Renew</h6>\n                  <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                  <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n                  <!--background: #049fd9;-->\n                  <!--color: white;-->\n                  <!--padding: 5px 10px 0px 10px;-->\n                  <!--margin-top: -30px;-->\n                  <!--margin-right: 10px;-->\n                  <!--border-radius: 31px;-->\n                  <!--height: 30px;-->\n                  <!--width: 30px;-->\n                  <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                  <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\"  (click)=\"check3()\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"checkbox__input\"></span>\n                  </label>\n                  <div class=\"iBchart\">\n                    <!--<div>Propensity to Renew - 80 %</div>-->\n\n                    <kendo-chart>\n                    <ng-template kendoChartDonutCenterTemplate>\n                    <h6>16M</h6>\n                    </ng-template>\n                    <kendo-chart-series>\n                    <kendo-chart-series-item\n                    type=\"donut\" [data]=\"iBdata\"\n                    categoryField=\"kind\" field=\"share\">\n                    <kendo-chart-series-item-labels\n                    [content]=\"IBlabelContent\" position=\"outsideEnd\"\n                    color=\"gray\" background=\"none\">\n                    </kendo-chart-series-item-labels>\n                    </kendo-chart-series-item>\n                    </kendo-chart-series>\n                    <kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>\n                      <kendo-chart-title text=\"Propensity to Renew - 80 %\"></kendo-chart-title>\n\n                    </kendo-chart>\n\n\n\n                    <!--<img src=\"../assets/ibChart.png\" height=\"240\" width=\"400\" />-->\n                  </div>\n\n                  <!--<div class=\"iBChartNew\">-->\n                  <!--<kendo-chart style=\"height: 120px;\">-->\n                  <!--<kendo-chart-title>Install Base - 208 M</kendo-chart-title>-->\n                  <!--<kendo-chart-series>-->\n                  <!--<kendo-chart-series-item type=\"bullet\" [data]=\"attach\" color=\"#6EC9BC\">-->\n                  <!--</kendo-chart-series-item>-->\n                  <!--<kendo-chart-category-axis>-->\n                  <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                  <!--</kendo-chart-category-axis-item>-->\n                  <!--</kendo-chart-category-axis>-->\n                  <!--<kendo-chart-value-axis>-->\n                  <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                  <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"AttachPlotBands\">-->\n                  <!--</kendo-chart-value-axis-item>-->\n                  <!--</kendo-chart-value-axis>-->\n                  <!--</kendo-chart-series>-->\n\n                  <!--</kendo-chart>-->\n\n                  <!--<kendo-chart style=\"height: 120px;\">-->\n                  <!--<kendo-chart-series>-->\n                  <!--<kendo-chart-series-item type=\"bullet\" [data]=\"Refresh\" color=\"#6EC9BC\">-->\n                  <!--</kendo-chart-series-item>-->\n                  <!--<kendo-chart-category-axis>-->\n                  <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                  <!--</kendo-chart-category-axis-item>-->\n                  <!--</kendo-chart-category-axis>-->\n                  <!--<kendo-chart-value-axis>-->\n                  <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                  <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"RefreshPlotBands\">-->\n                  <!--</kendo-chart-value-axis-item>-->\n                  <!--</kendo-chart-value-axis>-->\n                  <!--</kendo-chart-series>-->\n                  <!--</kendo-chart>-->\n                  <!--<kendo-chart style=\"height: 120px;\">-->\n                  <!--<kendo-chart-series>-->\n                  <!--<kendo-chart-series-item type=\"bullet\" [data]=\"Renew\" color=\"#6EC9BC\">-->\n                  <!--</kendo-chart-series-item>-->\n                  <!--<kendo-chart-category-axis>-->\n                  <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                  <!--</kendo-chart-category-axis-item>-->\n                  <!--</kendo-chart-category-axis>-->\n                  <!--<kendo-chart-value-axis>-->\n                  <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                  <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"ReNewPlotBands\">-->\n                  <!--</kendo-chart-value-axis-item>-->\n                  <!--</kendo-chart-value-axis>-->\n                  <!--</kendo-chart-series>-->\n\n                  <!--</kendo-chart>-->\n\n                  <!--<div>-->\n                  <!--<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px; color: #D4ECD4\">   <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Attach - 120 M</span></i>-->\n                  <!--<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px;  color: #118E7C\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Refresh - 30 M</span></i>-->\n                  <!--<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px;  color: #B37000\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Renew - 30 M</span></i>-->\n\n                  <!--<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px;  color: #6EC9BC\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Propensity to Renew - 30 M</span></i>-->\n\n\n                  <!--</div>-->\n\n                  <!--</div>-->\n                </div>\n              </div>\n\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card8\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Top 5 Deals <sub>In Millions</sub></h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n              <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check8()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-grid [data]=\"custGridData2\" [height]=\"222\">-->\n                      <!--<kendo-grid-column field=\"ProductID\" title=\" Deal ID\" width=\"70\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"ProductName\" title=\"Oppty Name\" width=\"150\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"Category.CategoryName\" title=\" Expected Book date\" width=\"150\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"UnitPrice\" title=\"Expected $\" width=\"100\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"QuantityPerUnit\" title=\"Competetior\" width=\"100\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--&lt;!&ndash;<kendo-grid-column field=\"UnitsInStock\" title=\"Opty Status\" width=\"100\">&ndash;&gt;-->\n                      <!--&lt;!&ndash;</kendo-grid-column>&ndash;&gt;-->\n                    <!--</kendo-grid>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">SAAS</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart [title]=\"{ text: '' }\">-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"waterfall\"-->\n                                                 <!--[data]=\"saaSFlowData\" [color]=\"pointColor\"-->\n                                                 <!--field=\"amount\" categoryField=\"period\" summaryField=\"summary\">-->\n                          <!--<kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-value-axis>-->\n                        <!--<kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">-->\n                        <!--</kendo-chart-value-axis-item>-->\n                      <!--</kendo-chart-value-axis>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Profitable Growth</h6>-->\n                  <!--<div class=\"chart profChart\">-->\n                    <!--<kendo-chart style=\"height: 120px;\">-->\n                      <!--<kendo-chart-title text=\"BGM\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"tempPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                    <!--<kendo-chart style=\"height: 120px;\">-->\n                      <!--<kendo-chart-title text=\"Discount\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card1\">-->\n                <!--<div class=\"panel  panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Summary - Bkg,Fcst & Pipeline</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n\n                  <!--<span class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\" data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\">R</span>-->\n\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check1()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart style=\"height: 100px!important;\">-->\n                      <!--<kendo-chart-title text=\"Forecast To Go\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                    <!--<kendo-chart style=\"height: 100px!important;\">-->\n                      <!--<kendo-chart-title text=\"Days Remaining in Qtr\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n                  <!--</div>-->\n\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px;height: 300px\" id=\"card2\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Bookings Attainment by Regions</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--<span class=\"\" data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check2()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart style=\"height: 100px!important;\">-->\n                      <!--<kendo-chart-title text=\"Americas\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                    <!--<kendo-chart style=\"height: 100px!important;\">-->\n                      <!--<kendo-chart-title text=\"GSP\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Profitable Growth</h6>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart style=\"height: 120px;\">-->\n                      <!--<kendo-chart-title text=\"Temperature [&deg;C]\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                    <!--<kendo-chart style=\"height: 120px;\">-->\n                      <!--<kendo-chart-title text=\"Humidity [%]\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card3\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">IB-Attach,Renew</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\"  (click)=\"check3()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<ng-template kendoChartDonutCenterTemplate>-->\n                        <!--<h6>22.5%</h6>-->\n                      <!--</ng-template>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item-->\n                          <!--type=\"donut\" [data]=\"iBdata\"-->\n                          <!--categoryField=\"kind\" field=\"share\">-->\n                          <!--<kendo-chart-series-item-labels-->\n                            <!--[content]=\"IBlabelContent\"-->\n                            <!--color=\"#fff\" background=\"none\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card4\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Propensity to Buy - P</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check4()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px ; height: 300px\" id=\"card5\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Annual Waterfall</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check5()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart [title]=\"{ text: '' }\">-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"waterfall\"-->\n                                                 <!--[data]=\"cashFlowData\" [color]=\"pointColor\"-->\n                                                 <!--field=\"amount\" categoryField=\"period\" summaryField=\"summary\">-->\n                          <!--<kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-value-axis>-->\n                        <!--<kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">-->\n                        <!--</kendo-chart-value-axis-item>-->\n                      <!--</kendo-chart-value-axis>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"\" style=\"width:33%\">\n          <div class=\"panel\">\n            <div class=\"\">\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px;height: 300px\" id=\"card6\" >-->\n                <!--<div class=\"panel  panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Funnel Health</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check6()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item-->\n                          <!--type=\"donut\" [data]=\"data\"-->\n                          <!--categoryField=\"kind\" field=\"share\">-->\n                          <!--<kendo-chart-series-item-labels-->\n                            <!--[content]=\"FlabelContent\"-->\n                            <!--color=\"#fff\" background=\"none\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>-->\n                    <!--</kendo-chart>-->\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card17\">\n                <div class=\"panel panel--loose panel--raised panel--fluid\">\n                  <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Goal Attainment</h6>\n                  <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                  <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\"  class=\"\" style=\"float: right;-->\n                  <!--background: #049fd9;-->\n                  <!--color: white;-->\n                  <!--padding: 5px 10px 0px 10px;-->\n                  <!--margin-top: -30px;-->\n                  <!--margin-right: 10px;-->\n                  <!--border-radius: 31px;-->\n                  <!--height: 30px;-->\n                  <!--width: 30px;-->\n                  <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                  <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check17()\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"checkbox__input\"></span>\n                  </label>\n                  <div class=\"chart attainmentChart\">\n                    <kendo-chart style=\"height: 120px;\">\n                      <kendo-chart-series>\n                        <kendo-chart-series-item type=\"bullet\" [data]=\"attainment\" color=\"#6EC9BC\">\n                        </kendo-chart-series-item>\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-value-axis>\n                          <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                       [min]=\"0\" [max]=\"100\" [plotBands]=\"AttainmentPlotBands\">\n                          </kendo-chart-value-axis-item>\n                        </kendo-chart-value-axis>\n                      </kendo-chart-series>\n                      <kendo-chart-tooltip>\n                        <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                          Goal: 100 % <br />\n                          Attainment: {{ value.current }}\n                        </ng-template>\n                      </kendo-chart-tooltip>\n                    </kendo-chart>\n                    <div>\n                      <i class=\"fas fa-square\" style=\"padding: 40px; font-size: 30px; color: #005474\">   <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 20px\">Goal - 120 M</span></i>\n                      <i class=\"fas fa-square\" style=\"padding: 40px; font-size: 30px;  color: #6EC9BC\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 20px\">Attainment - 30 M</span></i>\n\n\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n\n\n\n              <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">\n                <div class=\"panel panel--loose panel--raised panel--fluid\">\n                  <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Customer Heatmap</h6>\n                  <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                  <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                  <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"checkbox__input\"></span>\n                  </label>\n                  <div class=\"chart\">\n                    <!--<img src=\"../assets/heatmap.png\" height=\"230\" width=\"650\" />-->\n                    <table>\n                      <tr>\n                        <th></th>\n                        <th>Collab</th>\n                        <th>Security</th>\n                        <th>Routing</th>\n                        <th>Switching</th>\n                      </tr>\n                      <tr>\n                        <td>Apple</td>\n                        <td style=\"background: #D11c2a; text-align: center; opacity: 0.8\"></td>\n                        <td style=\"background: #FF7300; text-align: center; opacity: 0.8\"><i class=\"fas fa-star\" style=\"color: #ffcd00\"></i></td>\n                        <td style=\"background: #D11c2a; opacity: 0.8\"></td>\n                        <td style=\"background: #8bca8a; opacity: 0.8\"></td>\n\n                      </tr>\n                      <tr>\n                        <td>TCS</td>\n                        <td style=\"background: #69c242; opacity: 0.8\"></td>\n                        <td style=\"background: #D11c2a; text-align: center; opacity: 0.8\"></td>\n                        <td style=\"background: #8bca8a; opacity: 0.8\"></td>\n                        <td style=\"background: #69c242; text-align: center; opacity: 0.8\"><i class=\"fas fa-star\" style=\"color: #ffcd00\"> </i></td>\n                      </tr>\n                      <tr>\n                        <td>Amazon</td>\n                        <td style=\"background: #FF7300\"></td>\n                        <td style=\"background: #8bca8a; text-align: center; opacity: 0.8\"><i class=\"fas fa-star\" style=\"color: #ffcd00\"> </i></td>\n                        <td style=\"background: #D11c2a; text-align: center; opacity: 0.8\"></td>\n                        <td style=\"background: #FF7300; text-align: center; opacity: 0.8\"><i class=\"fas fa-star\" style=\"color: #ffcd00\">  </i></td>\n                      </tr>\n                    </table>\n                    <div style=\"margin-top: 10px\"><i class=\"fas fa-star\" style=\"padding: 5px; color: #ffcd00\">  <span style=\"color: #444444\">IB</span></i>\n                      <i class=\"fas fa-square\" style=\"padding: 5px; color: #D11c2a\"> <span style=\"color: #444444\">Not since FY 2016</span></i>\n                      <i class=\"fas fa-square\" style=\"padding: 5px; color: #8bca8a\">   <span style=\"color: #444444\">Active Opty</span></i>\n                      <i class=\"fas fa-square\" style=\"padding: 5px; color:#69c242\">   <span style=\"color: #444444\">Bookings + Funnel</span></i>\n                      <i class=\"fas fa-square\" style=\"padding: 5px; color: #FF7300\">   <span style=\"color: #444444\">Funnel Only</span></i></div>\n                  </div>\n                </div>\n              </div>\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px;\" id=\"card7\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Pipeline Waterfall</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--<span  data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check7()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart [title]=\"{ text: '' }\">-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"waterfall\"-->\n                                                 <!--[data]=\"cashFlowData\" [color]=\"pointColor\"-->\n                                                 <!--field=\"amount\" categoryField=\"period\" summaryField=\"summary\">-->\n                          <!--<kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-value-axis>-->\n                        <!--<kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">-->\n                        <!--</kendo-chart-value-axis-item>-->\n                      <!--</kendo-chart-value-axis>-->\n                    <!--</kendo-chart>-->\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card14\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\" >Growth Drivers</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\"></span>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check14()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item-->\n                          <!--type=\"donut\" [data]=\"gData\"-->\n                          <!--categoryField=\"kind\" field=\"share\">-->\n                          <!--<kendo-chart-series-item-labels-->\n                            <!--[content]=\"glabelContent\"-->\n                            <!--color=\"#fff\" background=\"none\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card12\">-->\n                <!--<div class=\"panel  panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Competitor Analyis</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check12()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-category-axis>-->\n                        <!--<kendo-chart-category-axis-item [categories]=\"['Collab', 'Security', 'Analytics']\">-->\n                        <!--</kendo-chart-category-axis-item>-->\n                      <!--</kendo-chart-category-axis>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bar\" [stack]=\"true\" [gap]=\"2\" [spacing]=\".25\" [data]=\"[100, 123, 234]\" name=\"Alcatel\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-series-item type=\"bar\" [data]=\"[120, 67, 231]\" name=\"VM Ware\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-series-item type=\"bar\" [data]=\"[45, 124, 189]\" name=\"Huawei\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-series-item type=\"bar\" [data]=\"[87, 154, 210]\" name=\"Zoom\">-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                    <!--</kendo-chart>-->\n                    <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card9\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Bookings Trend</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check9()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-title text=\"Units sold\"></kendo-chart-title>-->\n                      <!--<kendo-chart-category-axis>-->\n                        <!--<kendo-chart-category-axis-item-->\n                          <!--[categories]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\"-->\n                          <!--[title]=\"{ text: 'Months' }\">-->\n                        <!--</kendo-chart-category-axis-item>-->\n                      <!--</kendo-chart-category-axis>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"line\" [data]=\"[123, 276, 310, 212, 240, 156, 98]\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-series-item type=\"line\" [data]=\"[165, 210, 287, 144, 190, 167, 212]\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-series-item type=\"line\" [data]=\"[56, 140, 195, 46, 123, 78, 95]\">-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card10\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Forecast Accuracy</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check10()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px\" id=\"card11\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Lead to Opportunity</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check11()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"\" style=\"width:33%\">\n          <div class=\"panel\">\n            <div class=\"\">\n\n              <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card16\">\n                <div class=\"panel panel--loose panel--raised panel--fluid\">\n                  <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Recommendations</h6>\n                  <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                  <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                  <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"checkbox__input\"></span>\n                  </label>\n                  <div class=\"chart\">\n\n                    <ul style=\"font-size: 18px;color:black;\">\n\n                      <li style=\"padding: 10px;background:#f6f6f6; margin-bottom: 5px\"> Upcoming <font style=\"color: #049fd9;  font-weight: 400\" (click)=\"clickonCust4()\">Microsoft </font> renewal for Security,  <font Style=\"color:#049fd9; font-weight: 400\"> $ 3 M </font> ,Customer NPS Score<font Style=\"color:#049fd9;  font-weight: 400\"> 8  </font>points, Propensity to Renew is <font style=\"color:#049fd9;  font-weight: 400\"> 80%.</font> Adds <font style=\"color: #049fd9;  font-weight: 400\"> 5 % </font>to attainment.</li>\n\n                      <li style=\"padding: 10px;background:#f6f6f6; margin-bottom: 5px\"> <font Style=\"color:#049fd9;  font-weight: 400\"> $ 4 M  </font> Upside Opportunity <font style=\"color: #049fd9;  font-weight: 400\" (click)=\"clickonCust4()\">Microsoft</font>  for Collab,Propensity to buy is <font Style=\"color:#049fd9;  font-weight: 400\">75 %  </font>Competitor is Zoom. Adds <font style=\"color: #049fd9;  font-weight: 400\"> 6 % </font>Commit Coverage.</li>\n\n\n                      <!--<li style=\"padding-bottom: 10px\">Close Active Opportunities  - <font Style=\"color:#049fd9\"> $ 200 K</font> and ATR contracts <font Style=\"color:#049fd9\"> 1M </font>to achieve predicted bookings attainment of <font style=\"color:#049fd9\">160 % (historical avg. of 120%)</font></li>-->\n                      <!--<li style=\"padding-bottom: 10px\"><font Style=\"color:#049fd9\">~200K</font> worth churn expected in May with predicted increase of<font Style=\"color:#049fd9\"> 20% </font></li>-->\n\n                      <!--<li style=\"padding-bottom: 10px\"> <font Style=\"color:#049fd9\">$400K </font>opportunities up for renew (IB).-->\n                      <!--</li>-->\n                      <!--<li style=\"padding-bottom: 10px\">High touch opportunity for zoom for Collab - Deal id –<font Style=\"color:#049fd9\"> 2321312</font>-->\n                      <!--</li>-->\n                    </ul>\n\n\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"\">\n              <div class=\"panel panel--loose panel--raised panel--fluid\">\n              <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n              margin-top: 0px!important;\">Recurring Growth <sub>In Millions</sub></h6>\n              <span class=\"icon-more icon-medium\" style=\"float: right;\n              margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n              <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n              <!--background: #049fd9;-->\n              <!--color: white;-->\n              <!--padding: 5px 10px 0px 10px;-->\n              <!--margin-top: -30px;-->\n              <!--margin-right: 10px;-->\n              <!--border-radius: 31px;-->\n              <!--height: 30px;-->\n              <!--width: 30px;-->\n              <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n              <label class=\"checkbox\" style=\"float: right;\n              margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">\n              <input type=\"checkbox\" checked>\n              <span class=\"checkbox__input\"></span>\n              </label>\n              <div class=\"chart\">\n              <kendo-chart [title]=\"{ text: '' }\">\n              <kendo-chart-series>\n                <kendo-chart-axis-defaults\n\n                  [majorGridLines]=\"false\"\n                  [minorGridLines]=\"false\"\n\n                ></kendo-chart-axis-defaults>\n              <kendo-chart-series-item type=\"waterfall\"\n              [data]=\"saaSFlowData\" [color]=\"pointColor\"\n              field=\"amount\" categoryField=\"period\" summaryField=\"summary\">\n              <kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">\n              </kendo-chart-series-item-labels>\n              </kendo-chart-series-item>\n              </kendo-chart-series>\n              <kendo-chart-value-axis>\n              <kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">\n              </kendo-chart-value-axis-item>\n              </kendo-chart-value-axis>\n              </kendo-chart>\n\n              </div>\n              </div>\n              </div>\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card3\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Install Base - 208 M</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n                  <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n                  <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n                  <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n                  <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n                  <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n                  <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n                  <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n                  <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n                  <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\"  (click)=\"check3()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"iBchart\">-->\n                    <!--&lt;!&ndash;<kendo-chart>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<ng-template kendoChartDonutCenterTemplate>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<h6>208B</h6>&ndash;&gt;-->\n                      <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<kendo-chart-series>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-series-item&ndash;&gt;-->\n                          <!--&lt;!&ndash;type=\"donut\" [data]=\"iBdata\"&ndash;&gt;-->\n                          <!--&lt;!&ndash;categoryField=\"kind\" field=\"share\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-series-item-labels&ndash;&gt;-->\n                            <!--&lt;!&ndash;[content]=\"IBlabelContent\" position=\"outsideEnd\"&ndash;&gt;-->\n                            <!--&lt;!&ndash;color=\"gray\" background=\"none\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-series-item-labels>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                      <!--&lt;!&ndash;</kendo-chart-series>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>&ndash;&gt;-->\n                    <!--&lt;!&ndash;</kendo-chart>&ndash;&gt;-->\n                    <!--<img src=\"../assets/ibChart.png\" height=\"240\" width=\"400\" />-->\n                  <!--</div>-->\n\n                  <!--&lt;!&ndash;<div class=\"iBChartNew\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<kendo-chart style=\"height: 120px;\">&ndash;&gt;-->\n                      <!--&lt;!&ndash;<kendo-chart-title>Install Base - 208 M</kendo-chart-title>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<kendo-chart-series>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-series-item type=\"bullet\" [data]=\"attach\" color=\"#6EC9BC\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-category-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-category-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-category-axis>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-value-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"&ndash;&gt;-->\n                                                       <!--&lt;!&ndash;[min]=\"0\" [max]=\"100\" [plotBands]=\"AttachPlotBands\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-value-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-value-axis>&ndash;&gt;-->\n                      <!--&lt;!&ndash;</kendo-chart-series>&ndash;&gt;-->\n\n                    <!--&lt;!&ndash;</kendo-chart>&ndash;&gt;-->\n\n                    <!--&lt;!&ndash;<kendo-chart style=\"height: 120px;\">&ndash;&gt;-->\n                      <!--&lt;!&ndash;<kendo-chart-series>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-series-item type=\"bullet\" [data]=\"Refresh\" color=\"#6EC9BC\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-category-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-category-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-category-axis>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-value-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"&ndash;&gt;-->\n                                                       <!--&lt;!&ndash;[min]=\"0\" [max]=\"100\" [plotBands]=\"RefreshPlotBands\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-value-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-value-axis>&ndash;&gt;-->\n                      <!--&lt;!&ndash;</kendo-chart-series>&ndash;&gt;-->\n                    <!--&lt;!&ndash;</kendo-chart>&ndash;&gt;-->\n                    <!--&lt;!&ndash;<kendo-chart style=\"height: 120px;\">&ndash;&gt;-->\n                      <!--&lt;!&ndash;<kendo-chart-series>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-series-item type=\"bullet\" [data]=\"Renew\" color=\"#6EC9BC\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-category-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-category-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-category-axis>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-value-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"&ndash;&gt;-->\n                                                       <!--&lt;!&ndash;[min]=\"0\" [max]=\"100\" [plotBands]=\"ReNewPlotBands\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-value-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-value-axis>&ndash;&gt;-->\n                      <!--&lt;!&ndash;</kendo-chart-series>&ndash;&gt;-->\n\n                    <!--&lt;!&ndash;</kendo-chart>&ndash;&gt;-->\n\n                    <!--&lt;!&ndash;<div>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px; color: #D4ECD4\">   <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Attach - 120 M</span></i>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px;  color: #118E7C\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Refresh - 30 M</span></i>&ndash;&gt;-->\n                      <!--&lt;!&ndash;<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px;  color: #B37000\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Renew - 30 M</span></i>&ndash;&gt;-->\n\n                      <!--&lt;!&ndash;<i class=\"fas fa-square\" style=\"padding: 5px; font-size: 20px;  color: #6EC9BC\"> <span style=\"color: #444444; font-weight: 400!important; padding-left: 10px; font-size: 17px\">Propensity to Renew - 30 M</span></i>&ndash;&gt;-->\n\n\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n                  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card17\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Goal Attainment</h6>-->\n                  <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                  <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\"  class=\"\" style=\"float: right;&ndash;&gt;-->\n    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check17()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"column\" name=\"Goal\" [spacing]=\"2\" [data]=\"[ 5]\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-series-item type=\"column\" name=\"Bookings\" [data]=\"[ 3]\">-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n\n\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card113\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Customer Buying Pattern</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check13()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-legend position=\"top\"></kendo-chart-legend>-->\n\n                      <!--<kendo-chart-title text=\"\"></kendo-chart-title>-->\n                    <!--<kendo-chart-category-axis>-->\n                      <!--<kendo-chart-category-axis-item [categories]=\"['Q1', 'Q2', 'Q3', 'Q4']\">-->\n                      <!--</kendo-chart-category-axis-item>-->\n                    <!--</kendo-chart-category-axis>-->\n                      <!--<kendo-chart-legend position=\"top\"></kendo-chart-legend>-->\n\n                      <!--<kendo-chart-series>-->\n                      <!--<kendo-chart-series-item type=\"bar\" [gap]=\"2\" [spacing]=\".25\" [data]=\"[100, 123, 234, 343]\">-->\n                      <!--</kendo-chart-series-item>-->\n                      <!--<kendo-chart-series-item type=\"bar\" [data]=\"[120, 67, 231, 196]\">-->\n                      <!--</kendo-chart-series-item>-->\n                      <!--<kendo-chart-series-item type=\"bar\" [data]=\"[45, 124, 189, 143]\">-->\n                      <!--</kendo-chart-series-item>-->\n                      <!--<kendo-chart-series-item type=\"bar\" [data]=\"[87, 154, 210, 215]\">-->\n                      <!--</kendo-chart-series-item>-->\n                    <!--</kendo-chart-series>-->\n                    <!--</kendo-chart>-->\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card14\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Growth Drivers</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check14()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item-->\n                          <!--type=\"donut\" [data]=\"gData\"-->\n                          <!--categoryField=\"kind\" field=\"share\">-->\n                          <!--<kendo-chart-series-item-labels-->\n                            <!--[content]=\"glabelContent\"-->\n                            <!--color=\"#fff\" background=\"none\">-->\n                          <!--</kendo-chart-series-item-labels>-->\n                        <!--</kendo-chart-series-item>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card15\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">ACV/RO Summary</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check15()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n                    <!--<kendo-chart style=\"height: 120px;\">-->\n                      <!--<kendo-chart-title text=\"\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                        <!--<kendo-chart-series-item type=\"bullet\" [data]=\"ACV\" color=\"#5392ff\">-->\n                        <!--</kendo-chart-series-item>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-value-axis>-->\n                          <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                                                       <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"ACVPlotBands\">-->\n                          <!--</kendo-chart-value-axis-item>-->\n                        <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                        <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                          <!--Maximum: {{ value.target }} <br />-->\n                          <!--Average: {{ value.current }}-->\n                        <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                    <!--</kendo-chart>-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n              <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card16\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                  <!--<h6 class=\"base-margin-top\">Customer Heatmap includes wallet share</h6>-->\n                  <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">-->\n                    <!--<input type=\"checkbox\" checked>-->\n                    <!--<span class=\"checkbox__input\"></span>-->\n                  <!--</label>-->\n                  <!--<div class=\"chart\">-->\n\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</div>-->\n\n            </div>\n          </div>\n        </div>\n        </div>\n\n\t\t\t\t<!--<div class=\"row\">-->\n\t\t\t\t\t<!--<div class=\"col-md-12\">-->\n\t\t\t\t\t\t<!--<cui-alert [options]=\"alert\"></cui-alert>-->\n\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;primary\" (click)=\"showAlert()\">{{i18n.get('_ShowAlert_')}}</button>-->\n\t\t\t\t\t\t<!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;secondary\" (click)=\"popToast()\">{{i18n.get('_PopToast_')}}</button>-->\n\t\t\t\t\t<!--</div>-->\n\t\t\t\t\t<!--<div class=\"col-md-3 base-margin-top\">-->\n\t\t\t\t\t\t<!--<date-picker (dateSelected)=\"onDateChange($event)\"></date-picker>-->\n\t\t\t\t\t<!--</div>-->\n\t\t\t\t<!--</div>-->\n\t\t\t\t<!--<div class=\"row base-margin-top\">-->\n\t\t\t\t\t<!--<div class=\"col-md-12\">-->\n\t\t\t\t\t\t<!--Page Source: <a href=\"https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample\">https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample</a>-->\n\t\t\t\t\t<!--</div>-->\n\t\t\t\t<!--</div>-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n  <div class=\"content content-background--alt\" *ngIf=\"customer1\">\n    <div class=\"flex-fill half-margin-top\">\n      <div class=\"container-fluid\">\n        <div style=\"display: flex\">\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Waiting Leads</h6>\n\n                    <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                    <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check1()\">\n                      <input type=\"checkbox\" checked>\n                      <span class=\"checkbox__input\"></span>\n                    </label>\n                    <div class=\"chart leadChart\">\n                      <kendo-chart>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"funnel\" [neckRatio]=\"0.1\" [data]=\"model\" [dynamicSlope]=\"false\"\n                                                   field=\"count\" categoryField=\"stat\" colorField=\"color\">\n                            <kendo-chart-series-item-labels background=\"none\" color=\"white\" format=\"N0\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-category=\"category\">\n                            {{ category }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                        <kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>\n                      </kendo-chart>\n                    </div>\n\n                  </div>\n                </div>\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px;height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Profitable Growth</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check2()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<kendo-chart style=\"height: 100px!important;\">-->\n                      <!--<kendo-chart-title text=\"Bookings Gross Margin\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                      <!--<kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">-->\n                      <!--</kendo-chart-series-item>-->\n                      <!--<kendo-chart-category-axis>-->\n                      <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                      <!--</kendo-chart-category-axis-item>-->\n                      <!--</kendo-chart-category-axis>-->\n                      <!--<kendo-chart-value-axis>-->\n                      <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                      <!--[min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">-->\n                      <!--</kendo-chart-value-axis-item>-->\n                      <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                      <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                      <!--Maximum: {{ value.target }} <br />-->\n                      <!--Average: {{ value.current }}-->\n                      <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                      <!--</kendo-chart>-->\n\n                      <!--<kendo-chart style=\"height: 100px!important;\">-->\n                      <!--<kendo-chart-title text=\"Discount\"></kendo-chart-title>-->\n                      <!--<kendo-chart-series>-->\n                      <!--<kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">-->\n                      <!--</kendo-chart-series-item>-->\n                      <!--<kendo-chart-category-axis>-->\n                      <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                      <!--</kendo-chart-category-axis-item>-->\n                      <!--</kendo-chart-category-axis>-->\n                      <!--<kendo-chart-value-axis>-->\n                      <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                      <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">-->\n                      <!--</kendo-chart-value-axis-item>-->\n                      <!--</kendo-chart-value-axis>-->\n                      <!--</kendo-chart-series>-->\n                      <!--<kendo-chart-tooltip>-->\n                      <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                      <!--Maximum: {{ value.target }} <br />-->\n                      <!--Average: {{ value.current }}-->\n                      <!--</ng-template>-->\n                      <!--</kendo-chart-tooltip>-->\n                      <!--</kendo-chart>-->\n\n\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Profitable Growth</h6>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart style=\"height: 120px;\">-->\n                <!--<kendo-chart-title text=\"Temperature [&deg;C]\"></kendo-chart-title>-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-category-axis>-->\n                <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                <!--</kendo-chart-category-axis-item>-->\n                <!--</kendo-chart-category-axis>-->\n                <!--<kendo-chart-value-axis>-->\n                <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                <!--[min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">-->\n                <!--</kendo-chart-value-axis-item>-->\n                <!--</kendo-chart-value-axis>-->\n                <!--</kendo-chart-series>-->\n                <!--<kendo-chart-tooltip>-->\n                <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                <!--Maximum: {{ value.target }} <br />-->\n                <!--Average: {{ value.current }}-->\n                <!--</ng-template>-->\n                <!--</kendo-chart-tooltip>-->\n                <!--</kendo-chart>-->\n\n                <!--<kendo-chart style=\"height: 120px;\">-->\n                <!--<kendo-chart-title text=\"Humidity [%]\"></kendo-chart-title>-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-category-axis>-->\n                <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                <!--</kendo-chart-category-axis-item>-->\n                <!--</kendo-chart-category-axis>-->\n                <!--<kendo-chart-value-axis>-->\n                <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">-->\n                <!--</kendo-chart-value-axis-item>-->\n                <!--</kendo-chart-value-axis>-->\n                <!--</kendo-chart-series>-->\n                <!--<kendo-chart-tooltip>-->\n                <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                <!--Maximum: {{ value.target }} <br />-->\n                <!--Average: {{ value.current }}-->\n                <!--</ng-template>-->\n                <!--</kendo-chart-tooltip>-->\n                <!--</kendo-chart>-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Wallet</h6>\n                    <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                    <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\"  (click)=\"check3()\">\n                      <input type=\"checkbox\" checked>\n                      <span class=\"checkbox__input\"></span>\n                    </label>\n                    <div class=\"chart\">\n\n                      <kendo-chart>\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['Q1', 'Q2', 'Q3', 'Q4']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"column\" name=\"Bookings\" [data]=\"[11, 22, 13, 5]\" color=\"#f2A374\">\n                          </kendo-chart-series-item>\n\n                          <kendo-chart-series-item type=\"line\" name=\"Wallet\" [data]=\"[13, 27, 32, 22]\" color=\"#c65919\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card4\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Propensity to Buy - P</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check4()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px ; height: 300px\" id=\"card5\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Annual Waterfall</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check5()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart [title]=\"{ text: '' }\">-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item type=\"waterfall\"-->\n                <!--[data]=\"cashFlowData\" [color]=\"pointColor\"-->\n                <!--field=\"amount\" categoryField=\"period\" summaryField=\"summary\">-->\n                <!--<kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">-->\n                <!--</kendo-chart-series-item-labels>-->\n                <!--</kendo-chart-series-item>-->\n                <!--</kendo-chart-series>-->\n                <!--<kendo-chart-value-axis>-->\n                <!--<kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">-->\n                <!--</kendo-chart-value-axis-item>-->\n                <!--</kendo-chart-value-axis>-->\n                <!--</kendo-chart>-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n              </div>\n            </div>\n          </div>\n\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px;height: 300px\" id=\"card6\" >-->\n                <!--<div class=\"panel  panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Funnel Health</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check6()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart>-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item-->\n                <!--type=\"donut\" [data]=\"data\"-->\n                <!--categoryField=\"kind\" field=\"share\">-->\n                <!--<kendo-chart-series-item-labels-->\n                <!--[content]=\"FlabelContent\"-->\n                <!--color=\"#fff\" background=\"none\">-->\n                <!--</kendo-chart-series-item-labels>-->\n                <!--</kendo-chart-series-item>-->\n                <!--</kendo-chart-series>-->\n                <!--<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>-->\n                <!--</kendo-chart>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px;\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Top Opportunities</h6>\n                    <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n                    <!--background: #049fd9;-->\n                    <!--color: white;-->\n                    <!--padding: 5px 10px 0px 10px;-->\n                    <!--margin-top: -30px;-->\n                    <!--margin-right: 10px;-->\n                    <!--border-radius: 31px;-->\n                    <!--height: 30px;-->\n                    <!--width: 30px;-->\n                    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n\n                    <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check7()\">\n                      <input type=\"checkbox\" checked>\n                      <span class=\"checkbox__input\"></span>\n                    </label>\n                    <div class=\"chart topOp\">\n\n                      <table id=\"t01\">\n                        <tr>\n                          <th>Deal Id</th>\n                          <th>Opportunity Name</th>\n                          <th>Competitor</th>\n                          <th>Expected $</th>\n\n                          <th>Propensity to Buy</th>\n\n                        </tr>\n                        <tr>\n                          <td style=\"color:#049fd9; font-weight: 700\">80</td>\n                          <td style=\"color:#444444; font-weight: 700\">MS_Collab</td>\n                          <td style=\"color:#444444; font-weight: 700\">Huawei</td>\n                          <td style=\"color:#049fd9; font-weight: 700; text-align: right\">1 M</td>\n                          <td style=\"color:#42a942; font-weight: 700; text-align: right\">80 %</td>\n\n\n                        </tr>\n                        <tr>\n                          <td style=\"color:#049fd9; font-weight: 700\">71</td>\n                          <td style=\"color:#444444; font-weight: 700\">MS_Security_DNA</td>\n                          <td style=\"color:#444444; font-weight: 700\">VMware</td>\n                          <td style=\"color:#049fd9; font-weight: 700; text-align: right\">0.75 M</td>\n                          <td style=\"color:#ff7300; font-weight: 700; text-align: right\">70 %</td>\n                        </tr>\n                        <tr>\n                          <td style=\"color:#049fd9; font-weight: 700\">92</td>\n                          <td style=\"color:#444444; font-weight: 700\">MS_Renew_C1</td>\n                          <td style=\"color:#444444; font-weight: 700\">NetGear</td>\n                          <td style=\"color:#049fd9; font-weight: 700; text-align: right\">0.5 M</td>\n                          <td style=\"color:#ff7300; font-weight: 700; text-align: right\">75 %</td>\n                        </tr>\n                        <tr>\n                          <td style=\"color:#049fd9; font-weight: 700\">43</td>\n                          <td style=\"color:#444444; font-weight: 700\">MS_Computing_UCS</td>\n                          <td style=\"color:#444444; font-weight: 700\">Ruckus Networks</td>\n                          <td style=\"color:#049fd9; font-weight: 700; text-align: right\">0.4 M</td>\n                          <td style=\"color:#42a942; font-weight: 700; text-align: right\">80 %</td>\n                        </tr>\n                      </table>\n\n                      <!--<kendo-grid [data]=\"custGridData2\" [height]=\"222\">-->\n                        <!--<kendo-grid-column field=\"ProductID\" title=\" Deal ID\" width=\"70\" color=\"#049fd9\">-->\n                        <!--</kendo-grid-column>-->\n                        <!--<kendo-grid-column field=\"ProductName\" title=\"Opportunity Name\" width=\"150\">-->\n                        <!--</kendo-grid-column>-->\n                        <!--<kendo-grid-column field=\"QuantityPerUnit\" title=\"Competitor\" width=\"150\">-->\n                        <!--</kendo-grid-column>-->\n                        <!--<kendo-grid-column field=\"UnitPrice\" title=\"Expected $\" width=\"80\">-->\n                        <!--</kendo-grid-column>-->\n                        <!--<kendo-grid-column field=\"UnitsOnOrder\" title=\"Propensity to Buy\" width=\"100\">-->\n                        <!--</kendo-grid-column>-->\n                      <!--</kendo-grid>-->\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Recurring Growth <sub>In Millions</sub></h6>\n                    <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n                    <!--background: #049fd9;-->\n                    <!--color: white;-->\n                    <!--padding: 5px 10px 0px 10px;-->\n                    <!--margin-top: -30px;-->\n                    <!--margin-right: 10px;-->\n                    <!--border-radius: 31px;-->\n                    <!--height: 30px;-->\n                    <!--width: 30px;-->\n                    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                    <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check17()\">\n                      <input type=\"checkbox\" checked>\n                      <span class=\"checkbox__input\"></span>\n                    </label>\n                    <div class=\"chart\">\n\n\n                      <kendo-chart [title]=\"{ text: '' }\">\n                        <kendo-chart-series>\n                          <kendo-chart-axis-defaults\n\n                            [majorGridLines]=\"false\"\n                            [minorGridLines]=\"false\"\n\n                          ></kendo-chart-axis-defaults>\n                          <kendo-chart-series-item type=\"waterfall\"\n                                                   [data]=\"custSaasFlowData\" [color]=\"pointColor\"\n                                                   field=\"amount\" categoryField=\"period\" summaryField=\"summary\">\n                            <kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-value-axis>\n                          <kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">\n                          </kendo-chart-value-axis-item>\n                        </kendo-chart-value-axis>\n                      </kendo-chart>\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item-->\n                            <!--[categories]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\"-->\n                            <!--[title]=\"{ text: 'Time' }\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" name=\"Begin MRR\" [data]=\"[123, 276, 310, 212, 240, 156, 98]\" color=\"#15a792\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"iMRR\" [data]=\"[13, 26, 30, 22, 24, 15, 98]\" color=\"#604287\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"Ending MRR\" [data]=\"[165, 210, 287, 144, 190, 167, 212]\" color=\"#007ba9\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"Churn\" [data]=\"[-56, -14, -15, -46, -23, -78, -95]\" color=\"#d11c2a\">-->\n                          <!--</kendo-chart-series-item>-->\n\n                          <!--<kendo-chart-legend [visible]=\"true\" position=\"bottom\"></kendo-chart-legend>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n\n                    </div>\n                  </div>\n                </div>\n\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Install Base</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n                    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n                    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n                    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<img src=\"../assets/ibChart.png\" height=\"230\" width=\"400\" />-->\n\n                      <!--&lt;!&ndash;<kendo-chart>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-category-axis>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-category-axis-item&ndash;&gt;-->\n                            <!--&lt;!&ndash;[categories]=\"['May', 'June', 'July']\"&ndash;&gt;-->\n                            <!--&lt;!&ndash;[title]=\"{ text: 'Months' }\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-category-axis-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-category-axis>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<kendo-chart-series>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-series-item type=\"line\" name=\"\" [data]=\"[123, 76, 410]\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-series-item type=\"line\" name=\"\" [data]=\"[165, 210, 287]\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-series-item type=\"area\" name=\"\" [data]=\"[123, 276, 310]\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-series-item type=\"area\" name=\"\" [data]=\"[165, 210, 287]\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                          <!--&lt;!&ndash;<kendo-chart-series-item type=\"area\" name=\"\"  [data]=\"[56, 140, 195]\">&ndash;&gt;-->\n                          <!--&lt;!&ndash;</kendo-chart-series-item>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</kendo-chart-series>&ndash;&gt;-->\n                      <!--&lt;!&ndash;</kendo-chart>&ndash;&gt;-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">SAAS Metircs</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check17()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item-->\n                            <!--[categories]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\"-->\n                            <!--[title]=\"{ text: 'Time' }\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" name=\"Net New MRR\" [data]=\"[123, 276, 310, 212, 240, 156, 98]\" color=\"#15a792\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"New MRR\" [data]=\"[13, 26, 30, 22, 24, 15, 98]\" color=\"#604287\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"Expansion MRR\" [data]=\"[165, 210, 287, 144, 190, 167, 212]\" color=\"#007ba9\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"Churned MRR\" [data]=\"[-56, -14, -15, -46, -23, -78, -95]\" color=\"#d11c2a\">-->\n                          <!--</kendo-chart-series-item>-->\n\n                          <!--<kendo-chart-legend [visible]=\"true\" position=\"bottom\"></kendo-chart-legend>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px;\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Top Opportunities</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check7()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<kendo-grid [data]=\"custGridData\" [height]=\"222\">-->\n                      <!--<kendo-grid-column field=\"ProductID\" title=\" Deal ID\" width=\"100\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"ProductName\" title=\"Opportunity Name\" width=\"150\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"Category.CategoryName\" title=\" Expected Book date\" width=\"150\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"UnitPrice\" title=\"Expected $\" width=\"100\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--<kendo-grid-column field=\"UnitsInStock\" title=\"Opty Status\" width=\"100\">-->\n                      <!--</kendo-grid-column>-->\n                      <!--</kendo-grid>-->\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">CSAT / TAC</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--<span  data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check14()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item [categories]=\"['Q1', 'Q2', 'Q3', 'Q4']\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n                          <!--<kendo-chart-series-item type=\"bar\" [stack]=\"true\" [gap]=\"2\" [spacing]=\".25\" [data]=\"[100, 123, 234, 50]\" name=\"Detractor\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"bar\" [data]=\"[120, 67, 231, 60]\" name=\"Passive\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"bar\" [data]=\"[45, 124, 189, 87]\" name=\"Promoter\">-->\n                          <!--</kendo-chart-series-item>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">SAAS Metircs</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check17()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item-->\n                            <!--[categories]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\"-->\n                            <!--[title]=\"{ text: 'Time' }\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n                          <!--<kendo-chart-series-item type=\"line\" name=\"Churned MRR\" [data]=\"[-56, -14, -15, -46, -23, -78, -95]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" name=\"New MRR\" [data]=\"[123, 276, 310, 212, 240, 156, 98]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" name=\"Net New MRR\" [data]=\"[13, 26, 30, 22, 24, 15, 98]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" name=\"Expansion MRR\" [data]=\"[165, 210, 287, 144, 190, 167, 212]\">-->\n                          <!--</kendo-chart-series-item>-->\n\n                          <!--<kendo-chart-legend [visible]=\"true\" position=\"bottom\"></kendo-chart-legend>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card8\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Top 20 Deals</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check8()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-grid [data]=\"gridData\" [height]=\"222\">-->\n                <!--<kendo-grid-column field=\"ProductID\" title=\"ID\" width=\"40\">-->\n                <!--</kendo-grid-column>-->\n                <!--<kendo-grid-column field=\"ProductName\" title=\"Name\" width=\"250\">-->\n                <!--</kendo-grid-column>-->\n                <!--<kendo-grid-column field=\"Category.CategoryName\" title=\"Category\">-->\n                <!--</kendo-grid-column>-->\n                <!--<kendo-grid-column field=\"UnitPrice\" title=\"Price\" width=\"80\">-->\n                <!--</kendo-grid-column>-->\n                <!--<kendo-grid-column field=\"UnitsInStock\" title=\"In stock\" width=\"80\">-->\n                <!--</kendo-grid-column>-->\n                <!--<kendo-grid-column field=\"Discontinued\" title=\"Discontinued\" width=\"120\">-->\n                <!--<ng-template kendoGridCellTemplate let-dataItem>-->\n                <!--<input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled/>-->\n                <!--</ng-template>-->\n                <!--</kendo-grid-column>-->\n                <!--</kendo-grid>-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card9\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Bookings Trend</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check9()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart>-->\n                <!--<kendo-chart-title text=\"Units sold\"></kendo-chart-title>-->\n                <!--<kendo-chart-category-axis>-->\n                <!--<kendo-chart-category-axis-item-->\n                <!--[categories]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\"-->\n                <!--[title]=\"{ text: 'Months' }\">-->\n                <!--</kendo-chart-category-axis-item>-->\n                <!--</kendo-chart-category-axis>-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item type=\"line\" [data]=\"[123, 276, 310, 212, 240, 156, 98]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-series-item type=\"line\" [data]=\"[165, 210, 287, 144, 190, 167, 212]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-series-item type=\"line\" [data]=\"[56, 140, 195, 46, 123, 78, 95]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--</kendo-chart-series>-->\n                <!--</kendo-chart>-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card10\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Forecast Accuracy</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check10()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px\" id=\"card11\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Lead to Opportunity</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check11()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n              </div>\n            </div>\n          </div>\n\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n  margin-top: 0px!important;\">Recomendations</h6>\n                    <span class=\"icon-more icon-medium\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                    <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n    <!--background: #049fd9;-->\n    <!--color: white;-->\n    <!--padding: 5px 10px 0px 10px;-->\n    <!--margin-top: -30px;-->\n    <!--margin-right: 10px;-->\n    <!--border-radius: 31px;-->\n    <!--height: 30px;-->\n    <!--width: 30px;-->\n    <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                    <label class=\"checkbox\" style=\"float: right;\n    margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check12()\">\n                      <input type=\"checkbox\" checked>\n                      <span class=\"checkbox__input\"></span>\n                    </label>\n                    <div class=\"chart\">\n\n\n                      <ul style=\"font-size: 16px; color:black; \">\n\n\n\n                        <li style=\"padding: 10px;background:#f6f6f6; margin-bottom: 5px\">  Upcoming renewal <font Style=\"color:#049fd9; font-weight: 400\"> $ 0.5 M</font>, Propensity to renew is  <font Style=\"color:#049fd9; font-weight: 400\"> >80% ( historical avg. 75%) </font> will increase the ARR by  <font Style=\"color:#049fd9; font-weight: 400\"> 15% </font></li>\n\n\n                        <li style=\"padding: 10px;background:#f6f6f6; margin-bottom: 5px\">   <font Style=\"color:#049fd9; font-weight: 400\">170</font> open Prospects, predicted  pipeline conversion rate is  <font Style=\"color:#049fd9; font-weight: 400\"> >88% </font> based on past customer buying pattern. wallet and market share.</li>\n\n                        <li style=\"padding: 10px;background:#f6f6f6; margin-bottom: 5px\"> Active Opportunity <font Style=\"color:#049fd9; font-weight: 400\"> 1 M </font>for Collab, Key competitor is Huawei with propensity to buy <font Style=\"color:#049fd9; font-weight: 400\"> >75% </font>will boost the commit coverage by <font Style=\"color:#049fd9; font-weight: 400\"> +1.5% </font>& current quarter attainment to  <font Style=\"color:#049fd9; font-weight: 400\"> 8%. </font> .</li>\n\n\n                      </ul>\n\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">\n                <div class=\"panel panel--loose panel--raised panel--fluid\">\n                <h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;\n                margin-top: 0px!important;\">Install Base</h6>\n                <span class=\"icon-more icon-medium\" style=\"float: right;\n                margin-top: -30px;\" *ngIf=\"!editmode\"></span>\n                <!--<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;-->\n                <!--background: #049fd9;-->\n                <!--color: white;-->\n                <!--padding: 5px 10px 0px 10px;-->\n                <!--margin-top: -30px;-->\n                <!--margin-right: 10px;-->\n                <!--border-radius: 31px;-->\n                <!--height: 30px;-->\n                <!--width: 30px;-->\n                <!--font-weight: bold;\" *ngIf=\"!editmode\">R</span>-->\n                <label class=\"checkbox\" style=\"float: right;\n                margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">\n                <input type=\"checkbox\" checked>\n                <span class=\"checkbox__input\"></span>\n                </label>\n                <div class=\"chart\">\n                  <kendo-chart>\n                    <ng-template kendoChartDonutCenterTemplate>\n                      <h6>5.7M</h6>\n                    </ng-template>\n                    <kendo-chart-series>\n                      <kendo-chart-series-item\n                        type=\"donut\" [data]=\"CustiBdata\"\n                        categoryField=\"kind\" field=\"share\">\n                        <kendo-chart-series-item-labels\n                          [content]=\"IBlabelContent\" position=\"outsideEnd\"\n                          color=\"gray\" background=\"none\">\n                        </kendo-chart-series-item-labels>\n                      </kendo-chart-series-item>\n                    </kendo-chart-series>\n                    <kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>\n                    <kendo-chart-title text=\"Propensity to Renew - 70 %\"></kendo-chart-title>\n\n                  </kendo-chart>\n\n                </div>\n                </div>\n                </div>\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">SAAS Metircs</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n                    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n                    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n                    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n                    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check17()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item-->\n                            <!--[categories]=\"['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']\"-->\n                            <!--[title]=\"{ text: 'Time' }\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\" name=\"Net New MRR\" [data]=\"[123, 276, 310, 212, 240, 156, 98]\" color=\"#15a792\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"New MRR\" [data]=\"[13, 26, 30, 22, 24, 15, 98]\" color=\"#604287\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"Expansion MRR\" [data]=\"[165, 210, 287, 144, 190, 167, 212]\" color=\"#007ba9\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" style=\"smooth\"  name=\"Churned MRR\" [data]=\"[-56, -14, -15, -46, -23, -78, -95]\" color=\"#d11c2a\">-->\n                          <!--</kendo-chart-series-item>-->\n\n                          <!--<kendo-chart-legend [visible]=\"true\" position=\"bottom\"></kendo-chart-legend>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Funnel Health</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"!editmode\"></span>-->\n                    <!--&lt;!&ndash;<span data-balloon=\"Lorem ipsum dolor sit amet, consectetur adipiscing eli\" data-balloon-pos=\"down\" data-balloon-length=\"xlarge\" class=\"\" style=\"float: right;&ndash;&gt;-->\n    <!--&lt;!&ndash;background: #049fd9;&ndash;&gt;-->\n    <!--&lt;!&ndash;color: white;&ndash;&gt;-->\n    <!--&lt;!&ndash;padding: 5px 10px 0px 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-top: -30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;margin-right: 10px;&ndash;&gt;-->\n    <!--&lt;!&ndash;border-radius: 31px;&ndash;&gt;-->\n    <!--&lt;!&ndash;height: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;width: 30px;&ndash;&gt;-->\n    <!--&lt;!&ndash;font-weight: bold;\" *ngIf=\"!editmode\">R</span>&ndash;&gt;-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n                      <!--&lt;!&ndash;<img src=\"../assets/heatmap.png\" height=\"230\" width=\"650\" />&ndash;&gt;-->\n\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item-->\n                            <!--[categories]=\"['May', 'June', 'July']\"-->\n                            <!--[title]=\"{ text: 'Months' }\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n                          <!--<kendo-chart-series-item type=\"line\" name=\"\" [data]=\"[123, 76, 410]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"line\" name=\"\" [data]=\"[165, 210, 287]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"\" [data]=\"[123, 276, 310]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"\" [data]=\"[165, 210, 287]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"\"  [data]=\"[56, 140, 195]\">-->\n                          <!--</kendo-chart-series-item>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\">-->\n                  <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                    <!--<h6 class=\"base-margin-top\" style=\"margin-bottom: 10px!important;-->\n  <!--margin-top: 0px!important;\">Empty</h6>-->\n                    <!--<span class=\"icon-more icon-medium\" style=\"float: right;-->\n    <!--margin-top: -30px;\"></span>-->\n                    <!--<label class=\"checkbox\" style=\"float: right;-->\n    <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">-->\n                      <!--<input type=\"checkbox\" checked>-->\n                      <!--<span class=\"checkbox__input\"></span>-->\n                    <!--</label>-->\n                    <!--<div class=\"chart\">-->\n\n                    <!--</div>-->\n                  <!--</div>-->\n                <!--</div>-->\n\n\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card113\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Customer Buying Pattern</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check13()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart>-->\n                <!--<kendo-chart-legend position=\"top\"></kendo-chart-legend>-->\n\n                <!--<kendo-chart-title text=\"\"></kendo-chart-title>-->\n                <!--<kendo-chart-category-axis>-->\n                <!--<kendo-chart-category-axis-item [categories]=\"['Q1', 'Q2', 'Q3', 'Q4']\">-->\n                <!--</kendo-chart-category-axis-item>-->\n                <!--</kendo-chart-category-axis>-->\n                <!--<kendo-chart-legend position=\"top\"></kendo-chart-legend>-->\n\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item type=\"bar\" [gap]=\"2\" [spacing]=\".25\" [data]=\"[100, 123, 234, 343]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-series-item type=\"bar\" [data]=\"[120, 67, 231, 196]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-series-item type=\"bar\" [data]=\"[45, 124, 189, 143]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-series-item type=\"bar\" [data]=\"[87, 154, 210, 215]\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--</kendo-chart-series>-->\n                <!--</kendo-chart>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card14\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Growth Drivers</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check14()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart>-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item-->\n                <!--type=\"donut\" [data]=\"gData\"-->\n                <!--categoryField=\"kind\" field=\"share\">-->\n                <!--<kendo-chart-series-item-labels-->\n                <!--[content]=\"glabelContent\"-->\n                <!--color=\"#fff\" background=\"none\">-->\n                <!--</kendo-chart-series-item-labels>-->\n                <!--</kendo-chart-series-item>-->\n                <!--</kendo-chart-series>-->\n                <!--<kendo-chart-legend [visible]=\"true\"></kendo-chart-legend>-->\n                <!--</kendo-chart>-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n\n\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card15\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">ACV/RO Summary</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check15()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n                <!--<kendo-chart style=\"height: 120px;\">-->\n                <!--<kendo-chart-title text=\"\"></kendo-chart-title>-->\n                <!--<kendo-chart-series>-->\n                <!--<kendo-chart-series-item type=\"bullet\" [data]=\"ACV\" color=\"#5392ff\">-->\n                <!--</kendo-chart-series-item>-->\n                <!--<kendo-chart-category-axis>-->\n                <!--<kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">-->\n                <!--</kendo-chart-category-axis-item>-->\n                <!--</kendo-chart-category-axis>-->\n                <!--<kendo-chart-value-axis>-->\n                <!--<kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"-->\n                <!--[min]=\"0\" [max]=\"100\" [plotBands]=\"ACVPlotBands\">-->\n                <!--</kendo-chart-value-axis-item>-->\n                <!--</kendo-chart-value-axis>-->\n                <!--</kendo-chart-series>-->\n                <!--<kendo-chart-tooltip>-->\n                <!--<ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">-->\n                <!--Maximum: {{ value.target }} <br />-->\n                <!--Average: {{ value.current }}-->\n                <!--</ng-template>-->\n                <!--</kendo-chart-tooltip>-->\n                <!--</kendo-chart>-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"\" style=\"margin: 0 15px 30px 15px; height: 300px\" id=\"card16\">-->\n                <!--<div class=\"panel panel&#45;&#45;loose panel&#45;&#45;raised panel&#45;&#45;fluid\">-->\n                <!--<h6 class=\"base-margin-top\">Customer Heatmap includes wallet share</h6>-->\n                <!--<label class=\"checkbox\" style=\"float: right;-->\n                <!--margin-top: -30px;\" *ngIf=\"editmode\" (click)=\"check16()\">-->\n                <!--<input type=\"checkbox\" checked>-->\n                <!--<span class=\"checkbox__input\"></span>-->\n                <!--</label>-->\n                <!--<div class=\"chart\">-->\n\n                <!--</div>-->\n                <!--</div>-->\n                <!--</div>-->\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-12\">-->\n        <!--<cui-alert [options]=\"alert\"></cui-alert>-->\n        <!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;primary\" (click)=\"showAlert()\">{{i18n.get('_ShowAlert_')}}</button>-->\n        <!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;secondary\" (click)=\"popToast()\">{{i18n.get('_PopToast_')}}</button>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-3 base-margin-top\">-->\n        <!--<date-picker (dateSelected)=\"onDateChange($event)\"></date-picker>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row base-margin-top\">-->\n        <!--<div class=\"col-md-12\">-->\n        <!--Page Source: <a href=\"https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample\">https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample</a>-->\n        <!--</div>-->\n        <!--</div>-->\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"content content-background--alt disnone\" id=\"tab2\">\n    <div class=\"flex-fill half-margin-top\">\n      <div class=\"container-fluid\">\n        <div style=\"display: flex\">\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Funnel / Forecasting</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [legend]=\"{visible:true, position:'bottom'}\" [valueAxis]=\"{majorUnit:20}\" style=\"height:250px\">\n                        <kendo-chart-title text=\"\"></kendo-chart-title>\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item\n                            [categories]=\"['FY17 Q1', 'FY17 Q2', 'FY17 Q3', 'FY17 Q4', 'FY18 Q1']\"\n                            [title]=\"{ text: '' }\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"area\" name=\"Attach Rate-Corporate\" [data]=\"[72.4, 72.1, 73.5, 73.4, 71.2]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"area\" name=\"Attach Rate-SWSS\" [data]=\"[81.3, 78.7, 80.3, 84.8, 83.2]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"area\" name=\"Discount Rate\" [data]=\"[60.8, 71, 64.2, 64.7, 62.3]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"area\" name=\"Renewal Conversion Rate\" [data]=\"[45, 61.3, 66.4, 91.2, 58.3]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Real Time Attainment</h6>\n                    <div class=\"chart\">\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Temperature [&deg;C]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Humidity [%]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Atmospheric pressure [mmHg]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"mmhg\" color=\"#111\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"715\" [max]=\"795\" [plotBands]=\"mmhgPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Profitable Growth</h6>\n                    <div class=\"chart\">\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Temperature [&deg;C]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Humidity [%]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Install Base - 208 M</h6>\n                    <div class=\"chart\">\n                      <img src=\"../assets/ibChart.png\" height=\"240\" width=\"400\" />\n                      <!--<kendo-chart>-->\n                        <!--<kendo-chart-series>-->\n                          <!--<kendo-chart-series-item-->\n                            <!--type=\"donut\" [data]=\"data\"-->\n                            <!--categoryField=\"kind\" field=\"share\">-->\n                            <!--<kendo-chart-series-item-labels-->\n                              <!--[content]=\"labelContent\"-->\n                              <!--color=\"#fff\" background=\"none\">-->\n                            <!--</kendo-chart-series-item-labels>-->\n                          <!--</kendo-chart-series-item>-->\n                        <!--</kendo-chart-series>-->\n                        <!--<kendo-chart-legend [visible]=\"false\"></kendo-chart-legend>-->\n                      <!--</kendo-chart>-->\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Quarterly Business Review</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [title]=\"{ text: 'Cash flow' }\">\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"waterfall\"\n                                                   [data]=\"cashFlowData\" [color]=\"pointColor\"\n                                                   field=\"amount\" categoryField=\"period\" summaryField=\"summary\">\n                            <kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-value-axis>\n                          <kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">\n                          </kendo-chart-value-axis-item>\n                        </kendo-chart-value-axis>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Customer Analytics</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [legend]=\"{visible:true}\" [axisDefaults]=\"{visible:true, labels:{visible:false}, majorGridLines:{visible:false}}\" style=\"width:100%; height:100%\">\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['FY18']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"column\" [gap]=\"5\" [spacing]=\"0\" [data]=\"[9765]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[1714]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2397]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2616]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[3038]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Goal Commission Visibility</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [legend]=\"{visible:true}\" [axisDefaults]=\"{visible:true, labels:{visible:false}, majorGridLines:{visible:false}}\" style=\"width:100%; height:100%\">\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['FY18']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"column\" [gap]=\"5\" [spacing]=\"0\" [data]=\"[9765]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[1714]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2397]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2616]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[3038]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Actual Planning</h6>\n                    <div class=\"chart\">\n                      <kendo-chart>\n                        <kendo-chart-title text=\"Units sold\"></kendo-chart-title>\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['Q1', 'Q2', 'Q3', 'Q4']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bar\" [gap]=\"2\" [spacing]=\".25\" [data]=\"[100, 123, 234, 343]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"bar\" [data]=\"[120, 67, 231, 196]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"bar\" [data]=\"[45, 124, 189, 143]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"bar\" [data]=\"[87, 154, 210, 215]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Install Base</h6>\n                    <div class=\"chart\">\n                      <kendo-chart title=\"\" style=\"height:250px\">\n                        <ng-template kendoChartDonutCenterTemplate>\n                          <h3>52</h3>\n                        </ng-template>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item\n                            type=\"donut\" [data]=\"[69, 17, 14]\"\n                            categoryField=\"kind\" field=\"share\">\n                            <kendo-chart-series-item-labels\n                              [content]=\"labelContent\"\n                              color=\"#fff\" background=\"none\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-legend [visible]=\"false\"></kendo-chart-legend>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-12\">-->\n        <!--<cui-alert [options]=\"alert\"></cui-alert>-->\n        <!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;primary\" (click)=\"showAlert()\">{{i18n.get('_ShowAlert_')}}</button>-->\n        <!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;secondary\" (click)=\"popToast()\">{{i18n.get('_PopToast_')}}</button>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-3 base-margin-top\">-->\n        <!--<date-picker (dateSelected)=\"onDateChange($event)\"></date-picker>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row base-margin-top\">-->\n        <!--<div class=\"col-md-12\">-->\n        <!--Page Source: <a href=\"https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample\">https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample</a>-->\n        <!--</div>-->\n        <!--</div>-->\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"content content-background--alt disnone\" id=\"tab3\">\n    <div class=\"flex-fill half-margin-top\">\n      <div class=\"container-fluid\">\n        <div style=\"display: flex\">\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Funnel / Forecasting</h6>\n                    <div class=\"chart\">\n                      <!--<kendo-chart [legend]=\"{visible:true, position:'bottom'}\" [valueAxis]=\"{majorUnit:20}\" style=\"height:250px\">-->\n                        <!--<kendo-chart-title text=\"\"></kendo-chart-title>-->\n                        <!--<kendo-chart-category-axis>-->\n                          <!--<kendo-chart-category-axis-item-->\n                            <!--[categories]=\"['FY17 Q1', 'FY17 Q2', 'FY17 Q3', 'FY17 Q4', 'FY18 Q1']\"-->\n                            <!--[title]=\"{ text: '' }\">-->\n                          <!--</kendo-chart-category-axis-item>-->\n                        <!--</kendo-chart-category-axis>-->\n                        <!--<kendo-chart-series>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"Attach Rate-Corporate\" [data]=\"[72.4, 72.1, 73.5, 73.4, 71.2]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"Attach Rate-SWSS\" [data]=\"[81.3, 78.7, 80.3, 84.8, 83.2]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"Discount Rate\" [data]=\"[60.8, 71, 64.2, 64.7, 62.3]\">-->\n                          <!--</kendo-chart-series-item>-->\n                          <!--<kendo-chart-series-item type=\"area\" name=\"Renewal Conversion Rate\" [data]=\"[45, 61.3, 66.4, 91.2, 58.3]\">-->\n                          <!--</kendo-chart-series-item>-->\n                        <!--</kendo-chart-series>-->\n                      <!--</kendo-chart>-->\n                    </div>\n\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Real Time Attainment</h6>\n                    <div class=\"chart\">\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Temperature [&deg;C]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Humidity [%]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Atmospheric pressure [mmHg]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"mmhg\" color=\"#111\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"715\" [max]=\"795\" [plotBands]=\"mmhgPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Profitable Growth</h6>\n                    <div class=\"chart\">\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Temperature [&deg;C]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"temp\" color=\"#fff\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"-10\" [max]=\"45\" [plotBands]=\"tempPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                      <kendo-chart style=\"height: 120px;\">\n                        <kendo-chart-title text=\"Humidity [%]\"></kendo-chart-title>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bullet\" [data]=\"hum\" color=\"#0058e9\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-category-axis>\n                            <kendo-chart-category-axis-item [majorGridLines]=\"hidden\" [minorGridLines]=\"hidden\">\n                            </kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-value-axis>\n                            <kendo-chart-value-axis-item [majorGridLines]=\"hidden\" [minorTicks]=\"hidden\"\n                                                         [min]=\"0\" [max]=\"100\" [plotBands]=\"humPlotBands\">\n                            </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                        </kendo-chart-series>\n                        <kendo-chart-tooltip>\n                          <ng-template kendoChartSeriesTooltipTemplate let-value=\"value\">\n                            Maximum: {{ value.target }} <br />\n                            Average: {{ value.current }}\n                          </ng-template>\n                        </kendo-chart-tooltip>\n                      </kendo-chart>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Recurring Offers</h6>\n                    <div class=\"chart\">\n                      <kendo-chart>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item\n                            type=\"donut\" [data]=\"data\"\n                            categoryField=\"kind\" field=\"share\">\n                            <kendo-chart-series-item-labels\n                              [content]=\"labelContent\"\n                              color=\"#fff\" background=\"none\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-legend [visible]=\"false\"></kendo-chart-legend>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Quarterly Business Review</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [title]=\"{ text: 'Cash flow' }\">\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"waterfall\"\n                                                   [data]=\"cashFlowData\" [color]=\"pointColor\"\n                                                   field=\"amount\" categoryField=\"period\" summaryField=\"summary\">\n                            <kendo-chart-series-item-labels format=\"C0\" position=\"insideEnd\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-value-axis>\n                          <kendo-chart-value-axis-item [labels]=\"{ format: 'C0' }\">\n                          </kendo-chart-value-axis-item>\n                        </kendo-chart-value-axis>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Customer Analytics</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [legend]=\"{visible:true}\" [axisDefaults]=\"{visible:true, labels:{visible:false}, majorGridLines:{visible:false}}\" style=\"width:100%; height:100%\">\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['FY18']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"column\" [gap]=\"5\" [spacing]=\"0\" [data]=\"[9765]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[1714]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2397]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2616]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[3038]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"\" style=\"width:33%\">\n            <div class=\"panel\">\n              <div class=\"\">\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel  panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Goal Commission Visibility</h6>\n                    <div class=\"chart\">\n                      <kendo-chart [legend]=\"{visible:true}\" [axisDefaults]=\"{visible:true, labels:{visible:false}, majorGridLines:{visible:false}}\" style=\"width:100%; height:100%\">\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['FY18']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"column\" [gap]=\"5\" [spacing]=\"0\" [data]=\"[9765]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[1714]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2397]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[2616]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"column\" [data]=\"[3038]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Actual Planning</h6>\n                    <div class=\"chart\">\n                      <kendo-chart>\n                        <kendo-chart-title text=\"Units sold\"></kendo-chart-title>\n                        <kendo-chart-category-axis>\n                          <kendo-chart-category-axis-item [categories]=\"['Q1', 'Q2', 'Q3', 'Q4']\">\n                          </kendo-chart-category-axis-item>\n                        </kendo-chart-category-axis>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item type=\"bar\" [gap]=\"2\" [spacing]=\".25\" [data]=\"[100, 123, 234, 343]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"bar\" [data]=\"[120, 67, 231, 196]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"bar\" [data]=\"[45, 124, 189, 143]\">\n                          </kendo-chart-series-item>\n                          <kendo-chart-series-item type=\"bar\" [data]=\"[87, 154, 210, 215]\">\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\" style=\"margin: 0 15px 30px 15px\">\n                  <div class=\"panel panel--loose panel--raised panel--fluid\">\n                    <h6 class=\"base-margin-top\">Install Base</h6>\n                    <div class=\"chart\">\n                      <kendo-chart title=\"\" style=\"height:250px\">\n                        <ng-template kendoChartDonutCenterTemplate>\n                          <h3>52</h3>\n                        </ng-template>\n                        <kendo-chart-series>\n                          <kendo-chart-series-item\n                            type=\"donut\" [data]=\"[69, 17, 14]\"\n                            categoryField=\"kind\" field=\"share\">\n                            <kendo-chart-series-item-labels\n                              [content]=\"labelContent\"\n                              color=\"#fff\" background=\"none\">\n                            </kendo-chart-series-item-labels>\n                          </kendo-chart-series-item>\n                        </kendo-chart-series>\n                        <kendo-chart-legend [visible]=\"false\"></kendo-chart-legend>\n                      </kendo-chart>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-12\">-->\n        <!--<cui-alert [options]=\"alert\"></cui-alert>-->\n        <!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;primary\" (click)=\"showAlert()\">{{i18n.get('_ShowAlert_')}}</button>-->\n        <!--<button type=\"button\" class=\"btn btn&#45;&#45;small btn&#45;&#45;secondary\" (click)=\"popToast()\">{{i18n.get('_PopToast_')}}</button>-->\n        <!--</div>-->\n        <!--<div class=\"col-md-3 base-margin-top\">-->\n        <!--<date-picker (dateSelected)=\"onDateChange($event)\"></date-picker>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row base-margin-top\">-->\n        <!--<div class=\"col-md-12\">-->\n        <!--Page Source: <a href=\"https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample\">https://wwwin-gitlab-sjc.cisco.com/cisco-ui-ngx/componentsexample</a>-->\n        <!--</div>-->\n        <!--</div>-->\n      </div>\n    </div>\n  </div>\n\n  <!--<cui-footer></cui-footer>-->\n  <!--<footer class=\"footer footer&#45;&#45;new\"> <div class=\"footer__links\"> <ul class=\"list\">-->\n    <!--<li> <a target=\"_blank\" href=\"http://www.cisco.com/cisco/web/siteassets/contacts/index.html\">Contacts</a> </li>-->\n    <!--<li> <a target=\"_blank\" href=\"https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ\">Feedback</a> </li>-->\n    <!--<li> <a target=\"_blank\" href=\"http://www.cisco.com/c/en/us/about/sitemap.html\">Site Map</a> </li>-->\n    <!--<li> <a target=\"_blank\" href=\"http://www.cisco.com/web/siteassets/legal/terms_condition.html\">Terms &amp; Conditions</a> </li>-->\n    <!--<li> <a target=\"_blank\" href=\"http://www.cisco.com/web/siteassets/legal/privacy_full.html\">Privacy Statement</a> </li>-->\n    <!--<li> <a target=\"_blank\" href=\"http://www.cisco.com/web/siteassets/legal/privacy_full.html#cookies\">Cookie Policy</a> </li>-->\n    <!--<li> <a target=\"_blank\" href=\"http://www.cisco.com/web/siteassets/legal/trademark.html\">Trademarks</a> </li> </ul> </div>-->\n  <!--<div class=\"footer__legal\"> <div class=\"footer__logo\"> <a href=\"http://www.cisco.com\" target=\"_blank\"> <span class=\"icon-cisco\"></span> </a> </div>-->\n    <!--<div class=\"footer__copyright\"> <div>Copyright © 2017 Cisco Systems Inc.</div>-->\n      <!--<div>All rights reserved.</div> </div>-->\n\n  <!--</div>-->\n    <!--<div class=\"footer__legal\">-->\n      <!--<button class=\"btn btn&#45;&#45;primary\" (click)=\"enableEditMode()\">Add / Remove</button>-->\n\n    <!--</div>-->\n  <!--</footer>-->\n\n</div>\n<cui-toast></cui-toast>\n<cui-spinner class=\"absolute-center\" *ngIf=\"!i18nReady\"></cui-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disnone {\n  display: none !important; }\n\n.display {\n  display: block !important; }\n\n.attainmentChart > .k-chart {\n  height: 100px !important; }\n\n.k-chart, .k-stockchart {\n  height: 222px !important; }\n\n.cui .base-margin-top {\n  margin-bottom: 10px !important;\n  margin-top: 0px !important; }\n\n.smallChart > .k-chart {\n  height: 50px !important; }\n\n.fa-arrow-up {\n  color: Green; }\n\n.fa-arrow-down {\n  color: red; }\n\ntable {\n  width: 510px;\n  height: 150px; }\n\nth, td {\n  padding: 10px;\n  text-align: left; }\n\n.iBChartNew > .k-chart {\n  height: 60px !important; }\n\n.profChart > .k-chart {\n  height: 100px !important; }\n\n.base-margin-top {\n  font-weight: 600 !important; }\n\ntable#t01 tr:nth-child(even) {\n  background-color: #f6f6f6; }\n\ntable#t01 tr:nth-child(odd) {\n  background-color: #fff; }\n\ntable#t01 th {\n  background-color: #049fd9;\n  color: white; }\n\ntable#t01 {\n  width: 600px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products__ = __webpack_require__("../../../../../src/app/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_auto_complete__ = __webpack_require__("../../../../ng-auto-complete/ng-autocomplete.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__ = __webpack_require__("../../../../@cisco-ngx/cui-utils/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cisco_ngx_cui_components__ = __webpack_require__("../../../../@cisco-ngx/cui-components/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.AttainmentPlotBands = [{
                from: 0, to: 100, color: '#005474'
            }];
        this.attainment = [[25]];
        this.AttachPlotBands = [{
                from: 0, to: 20, color: '#D4ECD4'
            }];
        this.attach = [[0]];
        this.RefreshPlotBands = [{
                from: 0, to: 50, color: '#118E7C'
            }];
        this.Refresh = [[0]];
        this.ReNewPlotBands = [{
                from: 0, to: 30, color: '#B37000'
            }];
        this.Renew = [[10]];
        this.model = [{
                stat: 'MQL',
                count: 1200,
                color: '#3eaee2'
            }, {
                stat: 'SAL - 75 %',
                count: 899,
                color: '#319fd2'
            }, {
                stat: 'SQL - 26 %',
                count: 230,
                color: '#2185b4'
            }, {
                stat: 'Prospect - 74 %',
                count: 170,
                color: '#166f99'
            }];
        this.customer1 = false;
        this.selectedItem = {};
        this.selectedCustName = '';
        this.card1 = { group: { key: "completer" }, item: { title: "Amazon", id: "1", original: { title: "Amazon", id: "1" } } };
        this.card2 = { group: { key: "completer" }, item: { title: "Apple", id: "2", original: { title: "Apple", id: "2" } } };
        this.card3 = { group: { key: "completer" }, item: { title: "Paypal", id: "3", original: { title: "Paypal", id: "3" } } };
        this.card4 = { group: { key: "completer" }, item: { title: "Microsoft", id: "4", original: { title: "Microsoft", id: "4" } } };
        this.card5 = { group: { key: "completer" }, item: { title: "TATA", id: "5", original: { title: "TATA", id: "5" } } };
        this.nullCard = { group: { key: "completer" }, item: null };
        this.group = [
            Object(__WEBPACK_IMPORTED_MODULE_4_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search Customers', 'completer', [
                { title: 'Amazon', id: '1' },
                { title: 'Apple', id: '2' },
                { title: 'Paypal', id: '3' },
                { title: 'Microsoft', id: '4' },
                { title: 'TATA', id: '5' }
            ], { titleKey: 'title', childrenKey: null }),
        ];
        this.timeGroup = [
            Object(__WEBPACK_IMPORTED_MODULE_4_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search Quarter', 'completer', [
                { title: 'Q1 FY19', id: '1' },
                { title: 'Q2 FY19', id: '2' },
                { title: 'Q3 FY19', id: '3' },
                { title: 'Q4 FY19', id: '4' }
            ], { titleKey: 'title', childrenKey: null }),
        ];
        this.banksData = [
            { name: "Price", pre: 116, post: 64 },
            { name: "Advertisement", pre: 165, post: 85 },
            { name: "Service", pre: 215, post: 97 },
            { name: "Sales Channel", pre: 75, post: 27 },
            { name: "Quantiity", pre: 100, post: 16 },
            { name: "Durability", pre: 49, post: 26 },
            { name: "Diversity", pre: 80, post: 35 }
        ];
        this.editmode = false;
        this.showCard1 = true;
        this.showCard2 = true;
        this.showCard3 = true;
        this.showCard4 = true;
        this.showCard5 = true;
        this.showCard6 = true;
        this.showCard7 = true;
        this.showCard8 = true;
        this.showCard9 = true;
        this.showCard10 = true;
        this.showCard11 = true;
        this.showCard12 = true;
        this.showCard13 = true;
        this.showCard14 = true;
        this.showCard15 = true;
        this.showCard16 = true;
        this.showCard17 = true;
        this.bulletData = [21, 23];
        this.bulletValueAxis = {
            min: 0,
            max: 30,
            plotBands: [{
                    from: 0, to: 15, color: "#787878", opacity: 0.15
                }, {
                    from: 15, to: 22, color: "#787878", opacity: 0.3
                }, {
                    from: 22, to: 30, color: "#787878", opacity: 0.15
                }]
        };
        this.gridData = __WEBPACK_IMPORTED_MODULE_3__products__["c" /* products */];
        this.custGridData = __WEBPACK_IMPORTED_MODULE_3__products__["a" /* Custproducts */];
        this.custGridData2 = __WEBPACK_IMPORTED_MODULE_3__products__["b" /* Custproducts2 */];
        this.cashFlowData = [
            {
                period: 'Start',
                amount: 30
            }, {
                period: 'New/Increased',
                amount: 11
            }, {
                period: 'Pushed Out',
                amount: -3
            }, {
                period: 'Past Due',
                amount: -2
            }, {
                period: 'Lost',
                amount: -2
            }, {
                period: 'Finish',
                summary: 'runningTotal'
            }
        ];
        this.custSaasFlowData = [
            {
                period: 'Begin MRR',
                amount: 3
            }, {
                period: 'iMRR',
                amount: 2
            }, {
                period: 'Churn',
                amount: -1
            }, {
                period: 'Ending MRR',
                summary: 'runningTotal'
            }
        ];
        this.saaSFlowData = [{
                period: 'Start',
                amount: 14
            }, {
                period: 'New Bookings',
                amount: 8
            }, {
                period: 'Renew',
                amount: 6
            }, {
                period: 'Expansion',
                amount: 4
            }, {
                period: 'Churn',
                amount: -2
            }, {
                period: 'Exit',
                summary: 'runningTotal'
            }];
        this.hidden = { visible: false };
        this.tempPlotBands = [{
                from: 0, to: 84.5, color: '#7899DD', opacity: 1
            }];
        this.ACVPlotBands = [{
                from: 60, to: 100, color: '#ffc000', opacity: 1
            }, {
                from: 0, to: 60, color: '#5392ff', opacity: 1
            }];
        this.humPlotBands = [{
                from: 0, to: 67.2, color: '#005474', opacity: .6
            }];
        this.mmhgPlotBands = [{
                from: 715, to: 752, color: '#ccc', opacity: .6
            }, {
                from: 752, to: 772, color: '#ccc', opacity: .3
            }];
        this.temp = [[0, 88.6]];
        this.ACV = [[25, 60]];
        this.hum = [[0, 68.8]];
        this.mmhg = [[750, 762]];
        this.data = [{
                kind: 'Commit Coverage', share: 0.8
            }, {
                kind: 'Uncovered', share: 0.2
            }];
        this.iBdata = [
            {
                kind: 'Attach 4 M', share: 25, color: '#D4ECD4'
            }, {
                kind: 'Refresh 10 M', share: 63, color: '#118E7C'
            }, {
                kind: 'Renew 2 M', share: 12, color: '#B37000'
            }
        ];
        this.CustiBdata = [
            {
                kind: 'Attach 3 M', share: 55, color: '#D4ECD4'
            }, {
                kind: 'Refresh 2 M', share: 36, color: '#118E7C'
            }, {
                kind: 'Renew 0.75 M', share: 9, color: '#B37000'
            }
        ];
        this.gData = [{
                kind: 'Collab', share: 0.3
            }, {
                kind: 'Core', share: 0.4
            },
            {
                kind: 'Meraki', share: 0.1
            }, ,
            {
                kind: 'Security', share: 0.2
            }];
        this.i18n = __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */];
        this.i18nReady = false;
        this.alert = {};
        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_6__cisco_ngx_cui_components__["d" /* CuiHeaderOptions */]({});
        this.prepareApp();
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.group);
    };
    AppComponent.prototype.Selected = function (item) {
        console.log(item);
        this.selectedItem = item;
        if (this.selectedItem.item == null) {
            this.customer1 = false;
        }
        else {
            if (this.selectedItem.item.title) {
                this.customer1 = true;
                this.selectedCustName = this.selectedItem.item.title;
            }
            else {
                this.customer1 = false;
            }
        }
    };
    AppComponent.prototype.clickonCust1 = function () {
        this.Selected(this.card1);
        this.customer1 = true;
    };
    AppComponent.prototype.clickonCust2 = function () {
        this.Selected(this.card2);
        this.customer1 = true;
    };
    AppComponent.prototype.clickonCust3 = function () {
        this.Selected(this.card3);
        this.customer1 = true;
    };
    AppComponent.prototype.clickonCust4 = function () {
        this.Selected(this.card4);
        this.customer1 = true;
    };
    AppComponent.prototype.clickonCust5 = function () {
        this.Selected(this.card5);
        this.customer1 = true;
    };
    AppComponent.prototype.clickonBack = function () {
        this.Selected(this.nullCard);
        this.customer1 = false;
    };
    AppComponent.prototype.labelContent = function (e) {
        return e.dataItem.time.substring(0, 2) + "h";
    };
    AppComponent.prototype.pointColor = function (point) {
        var summary = point.dataItem.summary;
        if (summary) {
            return summary == 'total' ? '#555' : 'gray';
        }
        if (point.value > 0) {
            return 'green';
        }
        else {
            return 'red';
        }
    };
    AppComponent.prototype.glabelContent = function (e) {
        return e.category;
    };
    AppComponent.prototype.FlabelContent = function (e) {
        return e.category;
    };
    AppComponent.prototype.IBlabelContent = function (e) {
        return e.category + ": \n " + e.value + "%";
    };
    /**
     * Retrieves the localization dictionary from assets and adds it to the I18n utility.
     */
    AppComponent.prototype.getI18n = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, err_1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 4]);
                        _b = (_a = __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */]).injectDictionary;
                        return [4 /*yield*/, this.http.get("assets/i18n/" + __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["c" /* Language */].getPreferred() + ".json")
                                .toPromise()];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        this.i18nReady = true;
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _e.sent();
                        _d = (_c = __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */]).injectDictionary;
                        return [4 /*yield*/, this.http.get('assets/i18n/en-US.json')
                                .toPromise()];
                    case 3:
                        _d.apply(_c, [_e.sent()]);
                        this.i18nReady = true;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Prepares the app for display.
     */
    AppComponent.prototype.prepareApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getI18n()];
                    case 1:
                        _a.sent();
                        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_6__cisco_ngx_cui_components__["d" /* CuiHeaderOptions */]({
                            title: 'New Sales Strategy',
                            toolbarButtons: [{
                                    icon: 'feedback'
                                }, {
                                    icon: 'sign-out'
                                }],
                            primaryNav: [{
                                    label: __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */].get('_Home_'),
                                    active: true,
                                }, {
                                    label: 'Second Home',
                                    active: false,
                                }, {
                                    label: 'Third Home',
                                    active: true,
                                }],
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Shows an alert
     */
    AppComponent.prototype.showAlert = function () {
        this.alert.show(__WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */].get('_AlertText_'), 'success');
    };
    /**
     * Pops a toast
     */
    AppComponent.prototype.popToast = function () {
        this.toast.addToast('success', __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */].get('_ToastTitle_'), __WEBPACK_IMPORTED_MODULE_5__cisco_ngx_cui_utils__["b" /* I18n */].get('_ToastMessage_'));
    };
    AppComponent.prototype.onDateChange = function (date) {
        console.log(date);
    };
    AppComponent.prototype.tabone = function () {
        document.getElementById('firstTab').classList.add('active');
        document.getElementById('secondTab').classList.remove('active');
        document.getElementById('thirdTab').classList.remove('active');
        document.getElementById('tab1').classList.remove('disnone');
        document.getElementById('tab2').classList.remove('display');
        document.getElementById('tab3').classList.remove('display');
        document.getElementById('tab1').classList.add('display');
        document.getElementById('tab2').classList.add('disnone');
        document.getElementById('tab3').classList.add('disnone');
    };
    AppComponent.prototype.tabtwo = function () {
        document.getElementById('firstTab').classList.remove('active');
        document.getElementById('secondTab').classList.add('active');
        document.getElementById('thirdTab').classList.remove('active');
        document.getElementById('tab1').classList.remove('display');
        document.getElementById('tab2').classList.remove('disnone');
        document.getElementById('tab3').classList.remove('display');
        document.getElementById('tab1').classList.add('disnone');
        document.getElementById('tab2').classList.add('display');
        document.getElementById('tab3').classList.add('disnone');
    };
    AppComponent.prototype.tabthree = function () {
        document.getElementById('firstTab').classList.remove('active');
        document.getElementById('secondTab').classList.remove('active');
        document.getElementById('thirdTab').classList.add('active');
        document.getElementById('tab1').classList.remove('display');
        document.getElementById('tab2').classList.remove('display');
        document.getElementById('tab3').classList.remove('disnone');
        document.getElementById('tab1').classList.add('disnone');
        document.getElementById('tab2').classList.add('disnone');
        document.getElementById('tab3').classList.add('display');
    };
    AppComponent.prototype.enableEditMode = function () {
        this.editmode = !this.editmode;
    };
    AppComponent.prototype.check1 = function () {
        this.showCard1 = !this.showCard1;
    };
    AppComponent.prototype.check2 = function () {
        this.showCard2 = !this.showCard2;
    };
    AppComponent.prototype.check3 = function () {
        this.showCard3 = !this.showCard3;
    };
    AppComponent.prototype.check4 = function () {
        this.showCard4 = !this.showCard4;
    };
    AppComponent.prototype.check5 = function () {
        this.showCard5 = !this.showCard5;
    };
    AppComponent.prototype.check6 = function () {
        this.showCard6 = !this.showCard6;
    };
    AppComponent.prototype.check7 = function () {
        this.showCard7 = !this.showCard7;
    };
    AppComponent.prototype.check8 = function () {
        this.showCard8 = !this.showCard8;
    };
    AppComponent.prototype.check9 = function () {
        this.showCard9 = !this.showCard9;
    };
    AppComponent.prototype.check10 = function () {
        this.showCard10 = !this.showCard10;
    };
    AppComponent.prototype.check11 = function () {
        this.showCard11 = !this.showCard11;
    };
    AppComponent.prototype.check12 = function () {
        this.showCard12 = !this.showCard12;
    };
    AppComponent.prototype.check13 = function () {
        this.showCard13 = !this.showCard13;
    };
    AppComponent.prototype.check14 = function () {
        this.showCard14 = !this.showCard14;
    };
    AppComponent.prototype.check15 = function () {
        this.showCard15 = !this.showCard15;
    };
    AppComponent.prototype.check16 = function () {
        this.showCard16 = !this.showCard16;
    };
    AppComponent.prototype.check17 = function () {
        this.showCard17 = !this.showCard17;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ng_auto_complete__["c" /* NgAutocompleteComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng_auto_complete__["c" /* NgAutocompleteComponent */])
    ], AppComponent.prototype, "completer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__cisco_ngx_cui_components__["h" /* CuiToastComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__cisco_ngx_cui_components__["h" /* CuiToastComponent */])
    ], AppComponent.prototype, "toast", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_charts__ = __webpack_require__("../../../../@progress/kendo-angular-charts/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_auto_complete__ = __webpack_require__("../../../../ng-auto-complete/ng-autocomplete.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__ = __webpack_require__("../../../../@cisco-ngx/cui-components/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__datepicker_datepicker_component__["a" /* DatepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__customer_customer_component__["a" /* CustomerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__["a" /* CuiAlertModule */],
                __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__["c" /* CuiHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__["f" /* CuiInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__["b" /* CuiFooterModule */],
                __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__["g" /* CuiSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__cisco_ngx_cui_components__["i" /* CuiToastModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_charts__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_12__customer_customer_component__["a" /* CustomerComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_auto_complete__["b" /* NgAutoCompleteModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background:#049fd9; padding: 20px\">\n  <div class=\"col-md-1\">\n    <div class=\"panel panel--blue\">\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"panel panel--raised-medium\">\n      <div>Amazon</div>\n\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"panel panel--raised-medium\">\n      <div>Apple</div>\n\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"panel panel--raised-medium\">\n      <div>Paypal</div>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"panel panel--raised-medium\">\n      <div>Microsoft's</div>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"panel panel--raised-medium\">\n      <div>TATA</div>\n    </div>\n  </div>\n  <div class=\"col-md-1\">\n    <div class=\"panel panel--blue\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'customer',
            template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<cui-input #datepicker [label]=\"label || i18n.get('_Datepicker_')\"></cui-input>"

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pikaday__ = __webpack_require__("../../../../pikaday/pikaday.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pikaday___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pikaday__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cisco_ngx_cui_utils__ = __webpack_require__("../../../../@cisco-ngx/cui-utils/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cisco_ngx_cui_components__ = __webpack_require__("../../../../@cisco-ngx/cui-components/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.i18n = __WEBPACK_IMPORTED_MODULE_2__cisco_ngx_cui_utils__["b" /* I18n */];
        this.dateSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DatepickerComponent.prototype.ngAfterViewInit = function () {
        var element = document.getElementById("input-" + this.datepickerInput.guid);
        this.picker = new __WEBPACK_IMPORTED_MODULE_1_pikaday__({
            field: element,
            onSelect: this.onDateSelected.bind(this),
        });
    };
    DatepickerComponent.prototype.onDateSelected = function (date) {
        this.date = date;
        this.dateSelected.emit(date);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatepickerComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DatepickerComponent.prototype, "dateSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('datepicker'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__cisco_ngx_cui_components__["e" /* CuiInputComponent */])
    ], DatepickerComponent.prototype, "datepickerInput", void 0);
    DatepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'date-picker',
            template: __webpack_require__("../../../../../src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/datepicker/datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sampleProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Custproducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Custproducts2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return products; });
var sampleProducts = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 8, 20)
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 7, 12)
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 8, 26)
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 7, 17)
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "FirstOrderedOn": new Date(1996, 7, 22)
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 11, 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        },
        "FirstOrderedOn": new Date(1997, 1, 21)
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        },
        "FirstOrderedOn": new Date(1996, 8, 5)
    }
];
var Custproducts = [{
        "ProductID": 70,
        "ProductName": "Azure",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0000,
        "UnitsInStock": "Active",
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "July 10 2018",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 71,
        "ProductName": "Axure RP",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5000,
        "UnitsInStock": "Active",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "June 25 2018",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 72,
        "ProductName": "Windows",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8000,
        "UnitsInStock": "Active",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "August 2 2018",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 73,
        "ProductName": "One Drive",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0000,
        "UnitsInStock": "Active",
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "July 4 2018",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 74,
        "ProductName": "Edge",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0000,
        "UnitsInStock": "Active",
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "June 23 2018",
            "Description": "Dried fruit and bean curd"
        }
    }];
var Custproducts2 = [{
        "ProductID": 80,
        "ProductName": "MS_Collab",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "Huawei",
        "UnitPrice": "1 M",
        "UnitsInStock": "Active",
        "UnitsOnOrder": "80 %",
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "July 10 2018",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 71,
        "ProductName": "MS_Security_DNA",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "PaloAlto Networks",
        "UnitPrice": "0,75 M",
        "UnitsInStock": "Active",
        "UnitsOnOrder": "70 %",
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "June 25 2018",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 92,
        "ProductName": "MS_Routers_CAT9K",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "NetGear",
        "UnitPrice": " 0.6 M",
        "UnitsInStock": "Active",
        "UnitsOnOrder": "75 %",
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "August 2 2018",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 43,
        "ProductName": "MS_Computing_UCS",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "Ruckus Networks",
        "UnitPrice": "0.4 M",
        "UnitsInStock": "Active",
        "UnitsOnOrder": "80 %",
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "July 4 2018",
            "Description": "Seaweed and fish"
        }
    }];
var products = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0000,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10.0000,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22.0000,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.3500,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25.0000,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30.0000,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40.0000,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97.0000,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31.0000,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 11,
        "ProductName": "Queso Cabrales",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "1 kg pkg.",
        "UnitPrice": 21.0000,
        "UnitsInStock": 22,
        "UnitsOnOrder": 30,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 12,
        "ProductName": "Queso Manchego La Pastora",
        "SupplierID": 5,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 38.0000,
        "UnitsInStock": 86,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 13,
        "ProductName": "Konbu",
        "SupplierID": 6,
        "CategoryID": 8,
        "QuantityPerUnit": "2 kg box",
        "UnitPrice": 6.0000,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 14,
        "ProductName": "Tofu",
        "SupplierID": 6,
        "CategoryID": 7,
        "QuantityPerUnit": "40 - 100 g pkgs.",
        "UnitPrice": 23.2500,
        "UnitsInStock": 35,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 15,
        "ProductName": "Genen Shouyu",
        "SupplierID": 6,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 250 ml bottles",
        "UnitPrice": 15.5000,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 16,
        "ProductName": "Pavlova",
        "SupplierID": 7,
        "CategoryID": 3,
        "QuantityPerUnit": "32 - 500 g boxes",
        "UnitPrice": 17.4500,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 17,
        "ProductName": "Alice Mutton",
        "SupplierID": 7,
        "CategoryID": 6,
        "QuantityPerUnit": "20 - 1 kg tins",
        "UnitPrice": 39.0000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 18,
        "ProductName": "Carnarvon Tigers",
        "SupplierID": 7,
        "CategoryID": 8,
        "QuantityPerUnit": "16 kg pkg.",
        "UnitPrice": 62.5000,
        "UnitsInStock": 42,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 19,
        "ProductName": "Teatime Chocolate Biscuits",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 12 pieces",
        "UnitPrice": 9.2000,
        "UnitsInStock": 25,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 20,
        "ProductName": "Sir Rodney's Marmalade",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "30 gift boxes",
        "UnitPrice": 81.0000,
        "UnitsInStock": 40,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 21,
        "ProductName": "Sir Rodney's Scones",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "24 pkgs. x 4 pieces",
        "UnitPrice": 10.0000,
        "UnitsInStock": 3,
        "UnitsOnOrder": 40,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 22,
        "ProductName": "Gustaf's Knäckebröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 500 g pkgs.",
        "UnitPrice": 21.0000,
        "UnitsInStock": 104,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 23,
        "ProductName": "Tunnbröd",
        "SupplierID": 9,
        "CategoryID": 5,
        "QuantityPerUnit": "12 - 250 g pkgs.",
        "UnitPrice": 9.0000,
        "UnitsInStock": 61,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 24,
        "ProductName": "Guaraná Fantástica",
        "SupplierID": 10,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 355 ml cans",
        "UnitPrice": 4.5000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 25,
        "ProductName": "NuNuCa Nuß-Nougat-Creme",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "20 - 450 g glasses",
        "UnitPrice": 14.0000,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 26,
        "ProductName": "Gumbär Gummibärchen",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 250 g bags",
        "UnitPrice": 31.2300,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 27,
        "ProductName": "Schoggi Schokolade",
        "SupplierID": 11,
        "CategoryID": 3,
        "QuantityPerUnit": "100 - 100 g pieces",
        "UnitPrice": 43.9000,
        "UnitsInStock": 49,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 28,
        "ProductName": "Rössle Sauerkraut",
        "SupplierID": 12,
        "CategoryID": 7,
        "QuantityPerUnit": "25 - 825 g cans",
        "UnitPrice": 45.6000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 29,
        "ProductName": "Thüringer Rostbratwurst",
        "SupplierID": 12,
        "CategoryID": 6,
        "QuantityPerUnit": "50 bags x 30 sausgs.",
        "UnitPrice": 123.7900,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 30,
        "ProductName": "Nord-Ost Matjeshering",
        "SupplierID": 13,
        "CategoryID": 8,
        "QuantityPerUnit": "10 - 200 g glasses",
        "UnitPrice": 25.8900,
        "UnitsInStock": 10,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 31,
        "ProductName": "Gorgonzola Telino",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "12 - 100 g pkgs",
        "UnitPrice": 12.5000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 70,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 32,
        "ProductName": "Mascarpone Fabioli",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 32.0000,
        "UnitsInStock": 9,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 33,
        "ProductName": "Geitost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "500 g",
        "UnitPrice": 2.5000,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 34,
        "ProductName": "Sasquatch Ale",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0000,
        "UnitsInStock": 111,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 35,
        "ProductName": "Steeleye Stout",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 18.0000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 36,
        "ProductName": "Inlagd Sill",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 250 g  jars",
        "UnitPrice": 19.0000,
        "UnitsInStock": 112,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 37,
        "ProductName": "Gravad lax",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 500 g pkgs.",
        "UnitPrice": 26.0000,
        "UnitsInStock": 11,
        "UnitsOnOrder": 50,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 38,
        "ProductName": "Côte de Blaye",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "12 - 75 cl bottles",
        "UnitPrice": 263.5000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 39,
        "ProductName": "Chartreuse verte",
        "SupplierID": 18,
        "CategoryID": 1,
        "QuantityPerUnit": "750 cc per bottle",
        "UnitPrice": 18.0000,
        "UnitsInStock": 69,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 40,
        "ProductName": "Boston Crab Meat",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 4 oz tins",
        "UnitPrice": 18.4000,
        "UnitsInStock": 123,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 41,
        "ProductName": "Jack's New England Clam Chowder",
        "SupplierID": 19,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 12 oz cans",
        "UnitPrice": 9.6500,
        "UnitsInStock": 85,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 42,
        "ProductName": "Singaporean Hokkien Fried Mee",
        "SupplierID": 20,
        "CategoryID": 5,
        "QuantityPerUnit": "32 - 1 kg pkgs.",
        "UnitPrice": 14.0000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 43,
        "ProductName": "Ipoh Coffee",
        "SupplierID": 20,
        "CategoryID": 1,
        "QuantityPerUnit": "16 - 500 g tins",
        "UnitPrice": 46.0000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 10,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 44,
        "ProductName": "Gula Malacca",
        "SupplierID": 20,
        "CategoryID": 2,
        "QuantityPerUnit": "20 - 2 kg bags",
        "UnitPrice": 19.4500,
        "UnitsInStock": 27,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 45,
        "ProductName": "Rogede sild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "1k pkg.",
        "UnitPrice": 9.5000,
        "UnitsInStock": 5,
        "UnitsOnOrder": 70,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 46,
        "ProductName": "Spegesild",
        "SupplierID": 21,
        "CategoryID": 8,
        "QuantityPerUnit": "4 - 450 g glasses",
        "UnitPrice": 12.0000,
        "UnitsInStock": 95,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 47,
        "ProductName": "Zaanse koeken",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 - 4 oz boxes",
        "UnitPrice": 9.5000,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 48,
        "ProductName": "Chocolade",
        "SupplierID": 22,
        "CategoryID": 3,
        "QuantityPerUnit": "10 pkgs.",
        "UnitPrice": 12.7500,
        "UnitsInStock": 15,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 49,
        "ProductName": "Maxilaku",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "24 - 50 g pkgs.",
        "UnitPrice": 20.0000,
        "UnitsInStock": 10,
        "UnitsOnOrder": 60,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 50,
        "ProductName": "Valkoinen suklaa",
        "SupplierID": 23,
        "CategoryID": 3,
        "QuantityPerUnit": "12 - 100 g bars",
        "UnitPrice": 16.2500,
        "UnitsInStock": 65,
        "UnitsOnOrder": 0,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 51,
        "ProductName": "Manjimup Dried Apples",
        "SupplierID": 24,
        "CategoryID": 7,
        "QuantityPerUnit": "50 - 300 g pkgs.",
        "UnitPrice": 53.0000,
        "UnitsInStock": 20,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 52,
        "ProductName": "Filo Mix",
        "SupplierID": 24,
        "CategoryID": 5,
        "QuantityPerUnit": "16 - 2 kg boxes",
        "UnitPrice": 7.0000,
        "UnitsInStock": 38,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 53,
        "ProductName": "Perth Pasties",
        "SupplierID": 24,
        "CategoryID": 6,
        "QuantityPerUnit": "48 pieces",
        "UnitPrice": 32.8000,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 54,
        "ProductName": "Tourtière",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "16 pies",
        "UnitPrice": 7.4500,
        "UnitsInStock": 21,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 55,
        "ProductName": "Pâté chinois",
        "SupplierID": 25,
        "CategoryID": 6,
        "QuantityPerUnit": "24 boxes x 2 pies",
        "UnitPrice": 24.0000,
        "UnitsInStock": 115,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        }
    }, {
        "ProductID": 56,
        "ProductName": "Gnocchi di nonna Alice",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 38.0000,
        "UnitsInStock": 21,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 57,
        "ProductName": "Ravioli Angelo",
        "SupplierID": 26,
        "CategoryID": 5,
        "QuantityPerUnit": "24 - 250 g pkgs.",
        "UnitPrice": 19.5000,
        "UnitsInStock": 36,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 58,
        "ProductName": "Escargots de Bourgogne",
        "SupplierID": 27,
        "CategoryID": 8,
        "QuantityPerUnit": "24 pieces",
        "UnitPrice": 13.2500,
        "UnitsInStock": 62,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 59,
        "ProductName": "Raclette Courdavault",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 55.0000,
        "UnitsInStock": 79,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 60,
        "ProductName": "Camembert Pierrot",
        "SupplierID": 28,
        "CategoryID": 4,
        "QuantityPerUnit": "15 - 300 g rounds",
        "UnitPrice": 34.0000,
        "UnitsInStock": 19,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 61,
        "ProductName": "Sirop d'érable",
        "SupplierID": 29,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 500 ml bottles",
        "UnitPrice": 28.5000,
        "UnitsInStock": 113,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 62,
        "ProductName": "Tarte au sucre",
        "SupplierID": 29,
        "CategoryID": 3,
        "QuantityPerUnit": "48 pies",
        "UnitPrice": 49.3000,
        "UnitsInStock": 17,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 63,
        "ProductName": "Vegie-spread",
        "SupplierID": 7,
        "CategoryID": 2,
        "QuantityPerUnit": "15 - 625 g jars",
        "UnitPrice": 43.9000,
        "UnitsInStock": 24,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 64,
        "ProductName": "Wimmers gute Semmelknödel",
        "SupplierID": 12,
        "CategoryID": 5,
        "QuantityPerUnit": "20 bags x 4 pieces",
        "UnitPrice": 33.2500,
        "UnitsInStock": 22,
        "UnitsOnOrder": 80,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 5,
            "CategoryName": "Grains/Cereals",
            "Description": "Breads, crackers, pasta, and cereal"
        }
    }, {
        "ProductID": 65,
        "ProductName": "Louisiana Fiery Hot Pepper Sauce",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "32 - 8 oz bottles",
        "UnitPrice": 21.0500,
        "UnitsInStock": 76,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 66,
        "ProductName": "Louisiana Hot Spiced Okra",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "24 - 8 oz jars",
        "UnitPrice": 17.0000,
        "UnitsInStock": 4,
        "UnitsOnOrder": 100,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        "ProductID": 67,
        "ProductName": "Laughing Lumberjack Lager",
        "SupplierID": 16,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 14.0000,
        "UnitsInStock": 52,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 68,
        "ProductName": "Scottish Longbreads",
        "SupplierID": 8,
        "CategoryID": 3,
        "QuantityPerUnit": "10 boxes x 8 pieces",
        "UnitPrice": 12.5000,
        "UnitsInStock": 6,
        "UnitsOnOrder": 10,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 3,
            "CategoryName": "Confections",
            "Description": "Desserts, candies, and sweet breads"
        }
    }, {
        "ProductID": 69,
        "ProductName": "Gudbrandsdalsost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 kg pkg.",
        "UnitPrice": 36.0000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 70,
        "ProductName": "Outback Lager",
        "SupplierID": 7,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 355 ml bottles",
        "UnitPrice": 15.0000,
        "UnitsInStock": 15,
        "UnitsOnOrder": 10,
        "ReorderLevel": 30,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 71,
        "ProductName": "Flotemysost",
        "SupplierID": 15,
        "CategoryID": 4,
        "QuantityPerUnit": "10 - 500 g pkgs.",
        "UnitPrice": 21.5000,
        "UnitsInStock": 26,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 72,
        "ProductName": "Mozzarella di Giovanni",
        "SupplierID": 14,
        "CategoryID": 4,
        "QuantityPerUnit": "24 - 200 g pkgs.",
        "UnitPrice": 34.8000,
        "UnitsInStock": 14,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 4,
            "CategoryName": "Dairy Products",
            "Description": "Cheeses"
        }
    }, {
        "ProductID": 73,
        "ProductName": "Röd Kaviar",
        "SupplierID": 17,
        "CategoryID": 8,
        "QuantityPerUnit": "24 - 150 g jars",
        "UnitPrice": 15.0000,
        "UnitsInStock": 101,
        "UnitsOnOrder": 0,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        }
    }, {
        "ProductID": 74,
        "ProductName": "Longlife Tofu",
        "SupplierID": 4,
        "CategoryID": 7,
        "QuantityPerUnit": "5 kg pkg.",
        "UnitPrice": 10.0000,
        "UnitsInStock": 4,
        "UnitsOnOrder": 20,
        "ReorderLevel": 5,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        }
    }, {
        "ProductID": 75,
        "ProductName": "Rhönbräu Klosterbier",
        "SupplierID": 12,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 0.5 l bottles",
        "UnitPrice": 7.7500,
        "UnitsInStock": 125,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 76,
        "ProductName": "Lakkalikööri",
        "SupplierID": 23,
        "CategoryID": 1,
        "QuantityPerUnit": "500 ml",
        "UnitPrice": 18.0000,
        "UnitsInStock": 57,
        "UnitsOnOrder": 0,
        "ReorderLevel": 20,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        "ProductID": 77,
        "ProductName": "Original Frankfurter grüne Soße",
        "SupplierID": 12,
        "CategoryID": 2,
        "QuantityPerUnit": "12 boxes",
        "UnitPrice": 13.0000,
        "UnitsInStock": 32,
        "UnitsOnOrder": 0,
        "ReorderLevel": 15,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
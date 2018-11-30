sap.ui.define([
	"opensap/soviewer/SalesOrderViewer/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("opensap.soviewer.SalesOrderViewer.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
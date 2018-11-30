sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Arrangement",
	"./NavigationJourneyPhone",
	"./NotFoundJourneyPhone",
	"./BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "opensap.soviewer.SalesOrderViewer.view.",
		autoWait: true
	});
});

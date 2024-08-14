sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
	"sap/m/MessageBox",
	'sap/ui/core/Fragment',
],
function (Controller, MessageToast, MessageBox, Fragment) {
    "use strict";

    return Controller.extend("vehicleapp.ui.vehicleapp.controller.View1", {
        onInit: function () {

        },

        onAfterRendering: function() {

			this._ModelInitialLoad();
			this.ReadServicesMaterial();

		},

        _ModelInitialLoad: function() {
			
			var oData = {

                "CWMaterial": []
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel, "oViewModel");

		},


        ReadServicesMaterial:function(){
			var oModel = this.getView().getModel("oViewModel");
			// BusyIndicator.show();
			this.getView().getModel("viservice").read("/Material", {
				success: function (oData, oResp) {
					alert("hit")

					// var aMaterial = [];
					// for (var i = 0; i < oData.results.length; i++) {
					// 	var obj = {
					// 		Material: oData.results[i].Material,
					// 		MaterialDesc: oData.results[i].MaterialDesc,
					// 		Price: oData.results[i].Price,
					// 		Currency: oData.results[i].Currency,
					// 		Highlight: "None",  //  Field added in Ui for Highlight
					// 		Type: "Active",   //  Field added in Ui for Type

					// 	};
					// 	aMaterial.push(obj);
					// }
					oModel.setProperty("/CWMaterial", oData.results);
					oModel.refresh(true);
				}.bind(this),
				error: function (oError) {
					// BusyIndicator.hide();
					MessageBox.error(oError.message);
				}
			});
		
		},
    });
});

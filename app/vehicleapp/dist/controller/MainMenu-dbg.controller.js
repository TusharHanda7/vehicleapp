sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
], function(Controller, UIComponent, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("vehicleapp.ui.vehicleapp.controller.MainMenu", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf vehicleapp.ui.vehicleapp.view.MainMenu
		 */
		onInit: function() {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.attachRouteMatched(this.handleRouteMatched, this);
			this.onPressBanner();

		},

		handleRouteMatched: function(oEvent) {
			// var username = sap.ushell.Container.getService("UserInfo").getId();
			// this.getView().byId("iduser").setText(username);
		},
		onAfterRendering: function() {
			this.oBundle = this.getView().getModel("i18n").getResourceBundle();
			this._ModelInitialLoad();
			this.onPressPlant();
		},

		_ModelInitialLoad: function() {
			var oData = {
				"SearchList": []

			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel, "SearchViewModel");

		},

		onPressBanner: function(oEvent) {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("Home", false);

			if (sap.ui.Device.system.phone === true) {
				var oToolPage = this.byId("id_CarwashtoolPage");
				var bSideExpanded = oToolPage.getSideExpanded();
				oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
			}

		},
		onPressService: function(oEvent) {
			var MainPlant = this.getView().getModel("oGlobalModel").getProperty("/MainPlant");
			if (MainPlant) {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("Services", false);

				if (sap.ui.Device.system.phone === true) {
					var oToolPage = this.byId("id_CarwashtoolPage");
					var bSideExpanded = oToolPage.getSideExpanded();
					oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
				}

			} else {
				MessageToast.show("Please Select plant");
			}

		},

		onPressPlant: function() {
			if (!this.PlantF4) {
				this.PlantF4 = sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.PlantF4", this); // Fragments for Process select
				this.getView().addDependent(this.PlantF4);
			}
			this.PlantF4.open();
		},

		onPlantConfirm: function(oEvent) {
			var PlantObject = oEvent.getParameter("selectedItem").getBindingContext("oGlobalModel").getObject();
			this.getView().getModel("oGlobalModel").setProperty("/MainPlant", PlantObject.Plant);
			oEvent.getSource().getBinding("items").filter([]);

			var listItem = sap.ui.getCore().byId("id_PlantF4");
			var oBinding = listItem.getBinding("items");
			oBinding.filter([]);

			if (PlantObject.Operation === "CW") {
				this.getView().getModel("oGlobalModel").setProperty("/CW_ProcessVisible", true);
				this.getView().getModel("oGlobalModel").setProperty("/LPG_ProcessVisible", false);

				this.onPressSearchCustomer();

			} else {
				this.getView().getModel("oGlobalModel").setProperty("/LPG_ProcessVisible", true);
				this.getView().getModel("oGlobalModel").setProperty("/CW_ProcessVisible", false);
			}
		},

		onClosePlant: function() {

			var listItem = sap.ui.getCore().byId("id_PlantF4");
			var oBinding = listItem.getBinding("items");
			oBinding.filter([]);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf vehicleapp.ui.vehicleapp.view.MainMenu
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf vehicleapp.ui.vehicleapp.view.MainMenu
		 */
		//	onAfterRendering: function() {
		//
		//	},

		onSideNavButtonPress: function() {
			var oToolPage = this.byId("id_CarwashtoolPage");
			var bSideExpanded = oToolPage.getSideExpanded();
			// this._setToggleButtonTooltip(bSideExpanded);
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		_setToggleButtonTooltip: function(bLarge) {
			var oToggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		},

		/*Search Vehicle Code Start*/
		onGopress: function() {

			var SearchList = [{
				"BP": "6000000175",
				"BPType": "",
				"Name": "Mohamed Hafiz",
				"Mobile": "+919843647118",
				"Email": "mohamed123@gmail.com",
				"PlateNo": "20621",
				"PlateCode": "A",
				"PlateCat": "Private",
				"Emirates": "Dubai",
				"Manufacturer": "BMW",
				"Model": "BMW",
				"CarType": "SEDAN",
				"VinNo": "5871427853458734",
				"Highlight": "None",
				"Type": "Active"
			}];
			this.getView().getModel("SearchViewModel").getData().SearchList = SearchList;
			this.getView().getModel("SearchViewModel").refresh();
		},

		onSelectCustomer: function(oEvent) {
			var oSeletedValue = oEvent.getSource().getBindingContext("SearchViewModel").getObject();
			var aSearchList = this.getView().getModel("SearchViewModel").getData().SearchList;
			var oGlobalModel = this.getView().getModel("oGlobalModel");

			if (oSeletedValue.Highlight === "None") {
				setTimeout(function() {
					MessageToast.show("Seleted");
				}, 100);

				oEvent.getSource().getBindingContext("SearchViewModel").getObject().Highlight = "Information";
				oGlobalModel.getData().Profile_BPNo = oSeletedValue.BP;
				oGlobalModel.getData().Profile_BPType = oSeletedValue.BPType;
				oGlobalModel.getData().Profile_Name = oSeletedValue.Name;
				oGlobalModel.getData().Profile_Mobile = oSeletedValue.Mobile;
				oGlobalModel.getData().Profile_Email = oSeletedValue.Email;
				oGlobalModel.getData().Profile_PlateNo = oSeletedValue.PlateNo;
				oGlobalModel.getData().Profile_PlateCode = oSeletedValue.PlateCode;
				oGlobalModel.getData().Profile_Emirates = oSeletedValue.Emirates;
				oGlobalModel.getData().Profile_Model = oSeletedValue.Model;
				oGlobalModel.getData().Profile_CarType = oSeletedValue.CarType;
				oGlobalModel.getData().Profile_VINNo = oSeletedValue.VinNo;
				this.getView().getModel("SearchViewModel").refresh();
				oGlobalModel.refresh();

				for (var i = 0; i < aSearchList.length; i++) {
					if (aSearchList[i].Highlight === "None") {
						aSearchList[i].Type = "Inactive";
						oEvent.getSource().removeStyleClass("Cl_SearchCustomerBox");
						oEvent.getSource().addStyleClass("Cl_SearchCustomerBoxNotSeleted");
					}
				}

				this.onPressCloseSearch();

				
				
				
				this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this._oRouter.navTo("Services", true);
			
				
					this.onPressCloseSearch();
				

			} else {
				setTimeout(function() {
					MessageToast.show("Un-Seleted");
				}, 100);
				oEvent.getSource().getBindingContext("SearchViewModel").getObject().Highlight = "None";

				for (var i = 0; i < aSearchList.length; i++) {
					if (aSearchList[i].Highlight === "None") {
						aSearchList[i].Type = "Active";
						oEvent.getSource().removeStyleClass("Cl_SearchCustomerBoxNotSeleted");
						oEvent.getSource().removeStyleClass("Cl_SearchCustomerBox");
						oEvent.getSource().addStyleClass("Cl_SearchCustomerBoxSeleted");
					}
				}

			}
			this.getView().getModel("SearchViewModel").refresh();
		},

		onPressSearchCustomer: function(oEvent) {

			var oGlobalModel = this.getView().getModel("oGlobalModel");

			// if (oEvent.getParameter("name") === "Services") {

			// if (oGlobalModel.getData().MainPlant !== "" && (oGlobalModel.getData().Profile_PlateNo === "" && oGlobalModel.getData().Profile_PlateCode ===
			// 		"")) {

			/*Enable Vehicle Details Input*/
			if (!this.SearchVehicle) {
				this.SearchVehicle = sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.SearchVehicle", this); // Fragments for Process select
				this.getView().addDependent(this.SearchVehicle);
			}
			this.SearchVehicle.open();

			// }

			// }

		},

		onPressCreateCustomer: function() {

			this.SearchVehicle.close();

			// this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// this._oRouter.navTo("Home", true);

			if (!this.Create) {
				this.Create = sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.CreateCustomer", this); // Fragments for Process select
				this.getView().addDependent(this.Create);
			}
			this.Create.open();
		},

		onCancelCreateCustomer: function() {
			this.Create.close();
		},

		onPressCloseSearch: function() {
			this.SearchVehicle.close();
		},
		/*Search Vehicle Code End*/

	});

});
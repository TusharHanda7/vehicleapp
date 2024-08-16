jQuery.sap.declare("vehicleapp.ui.vehicleapp.model.formatter");
vehicleapp.ui.vehicleapp.model.formatter = {
	
	MaterialSelectionRemove: function(v1) {
		var that = this;
		if (v1 === "Information") {
			that.removeStyleClass("cl_bluegridlist");
			that.addStyleClass("cl_Materialgridlist");
		} else {
			that.removeStyleClass("cl_bluegridlist");
			that.addStyleClass("cl_Materialgridlist");
		}
	},
	MaterialSelectionText: function(v1, v2) {
		var that = this;
		if (v2 === "Information") {
			that.removeStyleClass("cl_blueTXT");
			that.addStyleClass("cl_whiteTXT");
		} else {
			that.removeStyleClass("cl_whiteTXT");
			that.addStyleClass("cl_blueTXT");
		}
		return v1;
	},

	DynamicBanner: function(v1) {

		if (v1.desktop || v1.tablet) {
			return true;
		} else if (v1.phone) {
			return false;
		}
		// return v1;
	},
	
	DynamicBannerPhone:function(v1) {

		if (v1.phone){
			return true;
		} else if (v1.desktop || v1.tablet){
			return false;
		}
		// return v1;
	},

	CWMaterialSelected: function(v1) {
		if (v1 === "Information") {
			return true;
		} else {
			return false;
		}
	},
	MaterialNotSelected: function(v1) {
		if (v1 === "None") {
			return true;
		} else {
			return false;
		}
	},

};
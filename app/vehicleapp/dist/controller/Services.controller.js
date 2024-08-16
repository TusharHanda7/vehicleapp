sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/m/MessageBox","sap/ui/core/Fragment","sap/ui/core/BusyIndicator"],function(e,t,i,r,a){"use strict";return e.extend("vehicleapp.ui.vehicleapp.controller.Services",{onInit:function(){this._oRouter=sap.ui.core.UIComponent.getRouterFor(this);this._oRouter.attachRouteMatched(this.handleRouteMatched,this)},handleRouteMatched:function(e){var t=this.getView().getModel("oGlobalModel");if(e.getParameter("name")==="Services"){var i=this.getView().getModel("oGlobalModel").getData().MainPlant;this._ModelInitialLoad();this.ReadServicesMaterial();var r=this.getView().getModel("ServicesViewModel").getData().CWMaterial;for(var a=0;a<r.length;a++){r[a].Highlight==="None";r[a].Type="Active";this.getView().addStyleClass("cl_wgridlist");this.getView().removeStyleClass("cl_wgridlistSeleted")}}},onExit:function(){alert("Exit")},onPressCloseSearch:function(){this.SearchVehicle.close()},onPressmainHome:function(){var e=sap.ushell.Container.getService("CrossApplicationNavigation");e.toExternal({target:{shellHash:"#Shell-home"}});var t=sap.ushell.Container.getRenderer("fiori2");t.setHeaderVisibility(true,false)},onSearchNewMaterialF4:function(e){var t=e.getParameter("newValue");var i=new Array;var r=new sap.ui.model.Filter([new sap.ui.model.Filter("Material",sap.ui.model.FilterOperator.Contains,t),new sap.ui.model.Filter("MaterialName",sap.ui.model.FilterOperator.Contains,t)],false);i=r;var a=this.getView().byId("idgridlist");var o=a.getBinding("items");o.filter(i)},onSearchLPGMaterialSearch:function(){var e=oEvent.getParameter("newValue");var t=new Array;var i=new sap.ui.model.Filter([new sap.ui.model.Filter("Material",sap.ui.model.FilterOperator.Contains,e),new sap.ui.model.Filter("MaterialName",sap.ui.model.FilterOperator.Contains,e)],false);t=i;var r=this.getView().byId("idgridlist");var a=r.getBinding("items");a.filter(t)},onAfterRendering:function(){this._ModelInitialLoad()},_ModelInitialLoad:function(){var e={GassItemBG:"{imageModel>/path}/image/DesignCar.png",CWMaterial:[],LPGMaterial:[{Material:"2800000090",MaterialName:"Gas Cylinder 5.5Kg",Price:"8.00",Tax:"2.5",Highlight:"None",Type:"Active"},{Material:"2800000010",MaterialName:"Gas Cylinder 11Kg",Price:"14.00",Tax:"2.5",Highlight:"None",Type:"Active"},{Material:"2800000011",MaterialName:"Gas Cylinder 22Kg",Price:"25.00",Tax:"2.5",Highlight:"None",Type:"Active"},{Material:"2800000011",MaterialName:"Gas Cylinder 44Kg",Price:"25.00",Tax:"2.5",Highlight:"None",Type:"Active"},{Material:"2800000030",MaterialName:"Small LPG 25lbs",Price:"35.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2800000031",MaterialName:"Large LPG 50lbs",Price:"70.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2800000032",MaterialName:"LPG regulator 25mbar",Price:"14.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2756492720",MaterialName:"LPG regulator 30mbar",Price:"70.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2822957303",MaterialName:"LPG regulator 10mbar",Price:"50.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2822957305",MaterialName:"1.5M LPG Rubber Hose Pipe ",Price:"10.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2754362613",MaterialName:"2.5M LPG Rubber Hose Pipe",Price:"20.00",Tax:"1",Highlight:"None",Type:"Active"},{Material:"2754362614",MaterialName:"5M LPG Rubber Hose Pipe",Price:"34.00",Tax:"1",Highlight:"None",Type:"Active"}],ProceedSOButtomVisible:true,PaymentButtomVisible:false,IdentifyVisible:false,MOPVisible:false,CashMOPPanelExpand:false,CardMOPPanelExpand:false,Cash_CheckBoxSeleted:false,Card_CheckBoxSeleted:false,LoyaltyMOPPanelExpand:false,Loyalty_CheckBoxSeleted:false,Loyalty_ScanedID:"",Loyalty_ScanedPoint:"",Loyalty_ScanedAmount:"",Cart_Material:"",Cart_MaterialDesc:"",Cart_TotalAmount:"",Cart_NetAmount:"",Cart_TaxAmount:"",MaterialList:[{Material:"1500083163",MaterialName:"Lube Change",MaterialType:"SER",UOM:"L",NetPrice:"49.00",TaxPrice:"1.50",Total:"50.50",Stock:"25.00",ConsignmentStock:"125.00",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083168",MaterialName:"Tire Change",MaterialType:"SER",UOM:"EA",NetPrice:"29.00",TaxPrice:"1.50",Total:"30.50",Stock:"200",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083170",MaterialName:"Voyager Gold",MaterialType:"SER",UOM:"EA",NetPrice:"19.00",TaxPrice:"1.00",Total:"20.00",Stock:"70",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083171",MaterialName:"Voyager Silver",MaterialType:"SER",UOM:"EA",NetPrice:"14.00",TaxPrice:"1.00",Total:"15.00",Stock:"100",ConsignmentStock:"10",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083172",MaterialName:"Voyager Bronze",MaterialType:"SER",UOM:"EA",NetPrice:"20.00",TaxPrice:"1.50",Stock:"100",ConsignmentStock:"25",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083174",MaterialName:"Grease",MaterialType:"SER",UOM:"EA",NetPrice:"10.00",TaxPrice:"1.50",Stock:"100",ConsignmentStock:"55",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083175",MaterialName:"Brake Fluid",MaterialType:"SER",UOM:"EA",NetPrice:"25.00",TaxPrice:"1.50",Stock:"100",ConsignmentStock:"75",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083176",MaterialName:"Engine Oil",MaterialType:"SER",UOM:"EA",NetPrice:"55.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"50",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083178",MaterialName:"Windshield Washer",MaterialType:"SER",UOM:"EA",NetPrice:"25.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"30",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083179",MaterialName:"Oil Filter",MaterialType:"SER",UOM:"EA",NetPrice:"25.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"30",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083180",MaterialName:"Clutch Fluid",MaterialType:"SER",UOM:"EA",NetPrice:"25.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083181",MaterialName:"Air Filter Cleaner",MaterialType:"SER",UOM:"EA",NetPrice:"55.00",TaxPrice:"1.50",Stock:"120",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083182",MaterialName:"Coolant Fluid ",MaterialType:"SER",UOM:"L",NetPrice:"35.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083183",MaterialName:"Brake Fluid",MaterialType:"SER",UOM:"EA",NetPrice:"35.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083185",MaterialName:"Tire Puncture",MaterialType:"SER",UOM:"EA",NetPrice:"35.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"30",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083187",MaterialName:"Wiper Blade",MaterialType:"SER",UOM:"EA",NetPrice:"55.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083188",MaterialName:"Check Engine Flushing",MaterialType:"SER",UOM:"EA",NetPrice:"55.00",TaxPrice:"1.50",Stock:"10",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083189",MaterialName:"Check Engine Fulign",MaterialType:"SER",UOM:"EA",NetPrice:"55.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083190",MaterialName:"Power Steering Fluid",MaterialType:"SER",UOM:"EA",NetPrice:"65.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083191",MaterialName:"Battery Condition",MaterialType:"SER",UOM:"EA",NetPrice:"25.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:""},{Material:"1500083192",MaterialName:"Gas",MaterialType:"SER",UOM:"EA",NetPrice:"25.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:"X"},{Material:"1500083193",MaterialName:"Cyliner",MaterialType:"SER",UOM:"EA",NetPrice:"35.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:"X"},{Material:"1500083194",MaterialName:"Gas Tube",MaterialType:"SER",UOM:"EA",NetPrice:"15.00",TaxPrice:"1.50",Stock:"120",ConsignmentStock:"20",Highlight:"None",Type:"Active",LPG:"X"}],MyCartItems:[],MyCartItemCount:"0",MyCartTotal:"0"};var t=new sap.ui.model.json.JSONModel(e);this.getView().setModel(t,"ServicesViewModel");var e={CNC_NewCustomer:false,CNC_CustomerForm:true,CNC_VehicleForm:true};var i=new sap.ui.model.json.JSONModel(e);this.getView().setModel(i,"HomeViewModel");var e={CC_FirstName:"",CC_LastName:"",CC_Email:"",CC_MobileNo:"",CC_HouseNo:"",CC_Street:"",CC_City:"",CC_PostalCode:"",CC_Country:"",CC_Remark:"",CC_FirstName_ValueState:"None",CC_MobileNo_ValueState:"None",AddVehicleData:[],CC_AddVehicleSwitch:false,CC_Emirates:"",CC_Category:"",CC_PlateCode:"",CC_PlateNo:"",CC_VINNo:"",CC_Manfacturer:"",CC_Model:"",CC_CarType:"",CC_FuelType:"",CC_Year:"",AddVehicleList:[],EmiratesF4:[{Emirates:"Abu Dhabi"},{Emirates:"Dubai"},{Emirates:"Sharjah"},{Emirates:"Ajman"},{Emirates:"Umm Al Quwain"},{Emirates:"Ras Al Khaimah"},{Emirates:"Fujairah"},{Emirates:"Others"}],PlateCategoryF4:[{Category:"Classic"},{Category:"Export"},{Category:"MotorCycle"},{Category:"Other"},{Category:"Private"},{Category:"Taxi"},{Category:"Police"},{Category:"Trade Plate"}],PlateCodeF4:[{PlateCode:"A"},{PlateCode:"1"},{PlateCode:"B"},{PlateCode:"2"},{PlateCode:"C"},{PlateCode:"3"},{PlateCode:"D"},{PlateCode:"4"}],FuelTypeF4:[{FuelType:"Diesel"},{FuelType:"Petrol"},{FuelType:"Gas"},{FuelType:"Electric"},{FuelType:"Others"}],ManufacturerF4:[{Manufacture:"Audi"},{Manufacture:"BMW"},{Manufacture:"Benz"},{Manufacture:"Ford"},{Manufacture:"Ferrari"},{Manufacture:"Hyundai"},{Manufacture:"Honda"},{Manufacture:"Land Rover"},{Manufacture:"Porsche"},{Manufacture:"Rolls-Royce"},{Manufacture:"Toyota"},{Manufacture:"Others"}],ModelF4Set:[{Manufacture:"Audi",Model:"A1"},{Manufacture:"Audi",Model:"A2"},{Manufacture:"Audi",Model:"A3"},{Manufacture:"Audi",Model:"Q1"},{Manufacture:"Audi",Model:"Q3"},{Manufacture:"BMW",Model:"X1"},{Manufacture:"BMW",Model:"X3"},{Manufacture:"BMW",Model:"M2"},{Manufacture:"Benz",Model:"EQS"},{Manufacture:"Benz",Model:"GLB"},{Manufacture:"Benz",Model:"GLC"},{Manufacture:"Ford",Model:"Aerostar"},{Manufacture:"Ford",Model:"Mustang"},{Manufacture:"Ford",Model:"EcoSport"},{Manufacture:"Ferrari",Model:"F8 Tributo"},{Manufacture:"Hyundai",Model:"Creta"},{Manufacture:"Honda",Model:"Amaze"},{Manufacture:"Land Rover",Model:"Range Rover"},{Manufacture:"Land Rover",Model:"Defender"},{Manufacture:"Porsche",Model:"GTS"},{Manufacture:"Rolls-Royce",Model:"Ghost"},{Manufacture:"Rolls-Royce",Model:"Cullinan"},{Manufacture:"Toyota",Model:"Glanza"},{Manufacture:"Others"}],ModelF4:[]};var r=new sap.ui.model.json.JSONModel(e);this.getView().setModel(r,"oViewModel")},ReadServicesMaterial:function(){var e=this.getView().getModel("ServicesViewModel");a.show();this.getView().getModel("viservice").read("/Material",{success:function(t,i){a.hide();var r=[];for(var o=0;o<t.results.length;o++){var l={Material:t.results[o].MATERIAL,MaterialDesc:t.results[o].MATERIALDESC,Price:t.results[o].PRICE,Currency:t.results[o].CURRENCY,Tax:"0",Highlight:"None",Type:"Active"};r.push(l)}e.setProperty("/CWMaterial",r);e.refresh(true)}.bind(this),error:function(e){a.hide();i.error(e.message)}})},onPressCart:function(){this.AddToCart=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.AddToCart",this);this.getView().addDependent(this.AddToCart);this.AddToCart.open();var e=this.getView().getModel("ServicesViewModel").getProperty("/MyCartItems");this.getView().getModel("ServicesViewModel").setProperty("/MyCartItemCount",e.length);var t=e.reduce((e,t)=>parseFloat(e)+parseFloat(t.Total),0);this.getView().getModel("ServicesViewModel").setProperty("/MyCartTotal",t.toFixed(2));this.getView().getModel("ServicesViewModel").setProperty("/ProceedSOButtomVisible",true);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/IdentifyVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/MOPVisible",false);this.getView().getModel("ServicesViewModel").refresh()},onCloseCart:function(){sap.m.MessageBox.confirm("Are you sure want to close?",{icon:sap.m.MessageBox.Icon.CONFIRM,title:"Confirmation",actions:[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO],onClose:function(e){if(e==="YES"){this.AddToCart.close();this.getView().getModel("ServicesViewModel").setProperty("/ProceedSOButtomVisible",true);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/IdentifyVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/MOPVisible",false);this.getView().getModel("ServicesViewModel").refresh()}else if(e==="NO"){}}.bind(this)})},onPressProceedSale:function(){this.getView().getModel("ServicesViewModel").setProperty("/ProceedSOButtomVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",true);t.show("#7000018150 Saleorder created successfully");this.getView().getModel("ServicesViewModel").setProperty("/MOPVisible",true)},onPressContinueguest:function(){this.getView().getModel("ServicesViewModel").setProperty("/IdentifyVisible",true);this.getView().getModel("ServicesViewModel").setProperty("/MOP",true);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",true)},onPressCashSelect:function(e){var t=e.getSource().getSelected();if(t){this.getView().getModel("ServicesViewModel").setProperty("/CashMOPPanelExpand",true)}else{this.getView().getModel("ServicesViewModel").setProperty("/CashMOPPanelExpand",false)}this.getView().getModel("ServicesViewModel").refersh()},onPressCardSelect:function(e){var t=e.getSource().getSelected();if(t){this.getView().getModel("ServicesViewModel").setProperty("/CardMOPPanelExpand",true)}else{this.getView().getModel("ServicesViewModel").setProperty("/CardMOPPanelExpand",false)}this.getView().getModel("ServicesViewModel").refersh()},onPressLoyaltySelect:function(e){var t=e.getSource().getSelected();if(t){this.getView().getModel("ServicesViewModel").setProperty("/LoyaltyMOPPanelExpand",true)}else{this.getView().getModel("ServicesViewModel").setProperty("/LoyaltyMOPPanelExpand",false)}this.getView().getModel("ServicesViewModel").refersh()},onExpandCash:function(e){var t=e.getSource().getExpanded();if(t){this.getView().getModel("ServicesViewModel").setProperty("/Cash_CheckBoxSeleted",true)}else{this.getView().getModel("ServicesViewModel").setProperty("/Cash_CheckBoxSeleted",false)}},onExpandCard:function(e){var t=e.getSource().getExpanded();if(t){this.getView().getModel("ServicesViewModel").setProperty("/Card_CheckBoxSeleted",true)}else{this.getView().getModel("ServicesViewModel").setProperty("/Card_CheckBoxSeleted",false)}},onExpandLoyalty:function(e){var t=e.getSource().getExpanded();if(t){this.getView().getModel("ServicesViewModel").setProperty("/Loyalty_CheckBoxSeleted",true)}else{this.getView().getModel("ServicesViewModel").setProperty("/Loyalty_CheckBoxSeleted",false)}},onPress1:function(e){var i=this.getView().getModel("oGlobalModel").getProperty("/Profile_PlateNo");var r=this.getView().getModel("oGlobalModel").getProperty("/Profile_PlateCode");if(r!==""&&r!==""){var a=e.getSource().getBindingContext("ServicesViewModel").getObject();var o=this.getView().getModel("ServicesViewModel").getData().CWMaterial;if(a.Highlight==="None"){e.getSource().getBindingContext("ServicesViewModel").getObject().Highlight="Information";e.getSource().removeStyleClass("cl_wgridlist");e.getSource().addStyleClass("cl_wgridlistSeleted");var l=parseFloat(a.Price)+parseFloat(a.Tax);var s={Material:a.Material,MaterialDesc:a.MaterialDesc,Price:a.Price,Tax:a.Tax,Total:l};var n=this.getView().getModel("ServicesViewModel").getProperty("/MyCartItems");n.push(s);this.getView().getModel("ServicesViewModel").refresh();for(var g=0;g<o.length;g++){if(o[g].Highlight==="None"){o[g].Type="Inactive"}}}else{e.getSource().getBindingContext("ServicesViewModel").getObject().Highlight="None";e.getSource().removeStyleClass("cl_wgridlistSeleted");e.getSource().addStyleClass("cl_wgridlist");var n=this.getView().getModel("ServicesViewModel").getProperty("/MyCartItems");n=n.filter(function(e){return e.Material!==a.Material});this.getView().getModel("ServicesViewModel").setProperty("/MyCartItems",n);this.getView().getModel("ServicesViewModel").refresh();for(var g=0;g<o.length;g++){if(o[g].Highlight==="None"){o[g].Type="Active"}}}this.getView().getModel("ServicesViewModel").refresh()}else{this.onPressSearchCustomer();t.show("Please select the vehicle")}},onDeleteCartItem:function(e){var t=e.getParameter("listItem").getBindingContext("ServicesViewModel").getPath();var i=e.getSource().getModel("ServicesViewModel");var r=parseInt(t.substring(t.lastIndexOf("/")+1),10);var a=e.getParameter("listItem").getBindingContext("ServicesViewModel").getObject().Material;sap.m.MessageBox.confirm("Do you want to delete?",{icon:sap.m.MessageBox.Icon.CONFIRM,title:"Confirmation",actions:[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO],onClose:function(e){if(e==="YES"){var t=i.getProperty("/MyCartItems");t.splice(r,1);i.setProperty("/MyCartItems",t);this.getView().getModel("ServicesViewModel").setProperty("/MyCartItemCount",t.length);var o=this.getView().getModel("ServicesViewModel").getProperty("/CWMaterial");for(var l=0;l<o.length;l++){if(a===o[l].Material){o[l].Highlight="None";o[l].Type="Active";this.getView().getModel("ServicesViewModel").refresh();var s=that.getView().byId("idgridlist");var n=s.getItems();for(var g=0;g<n.length;g++){if(n[g].Material===sDeletedMateriall){n[g].removeStyleClass("cl_wgridlistSeleted");n[g].addStyleClass("cl_wgridlist");this.getView().getModel("ServicesViewModel").refresh()}}}}}else if(e==="NO"){}}.bind(this)})},onResetCarwash:function(){var e=this.getView().getModel("ServicesViewModel").getProperty("/CWMaterial");for(var t=0;t<e.length;t++){e[t].Highlight="None";e[t].Type="Active"}this.getView().getModel("ServicesViewModel").setProperty("/CWMaterial","");this.getView().getModel("ServicesViewModel").setProperty("/CWMaterial",e);this.getView().getModel("ServicesViewModel").refresh()},onResetProduct:function(){var e=this.getView().getModel("ServicesViewModel").getProperty("/MaterialList");for(var t=0;t<e.length;t++){e[t].Highlight="None";e[t].Type="Active"}this.getView().getModel("ServicesViewModel").setProperty("/MaterialList","");this.getView().getModel("ServicesViewModel").setProperty("/MaterialList",e);this.getView().getModel("ServicesViewModel").refresh()},onPress2:function(e){var t=e.getSource().getBindingContext("ServicesViewModel").getObject();var i=this.getView().getModel("ServicesViewModel").getData().LPGMaterial;if(t.Highlight==="None"){e.getSource().getBindingContext("ServicesViewModel").getObject().Highlight="Information";this.getView().getModel("ServicesViewModel").setProperty("/Price",t.Price);e.getSource().removeStyleClass("cl_wgridlist");e.getSource().addStyleClass("cl_wgridlistSeleted");this.getView().getModel("ServicesViewModel").setProperty("/Cart_Material",t.Material);this.getView().getModel("ServicesViewModel").setProperty("/Cart_MaterialDesc",t.MaterialName);this.getView().getModel("ServicesViewModel").setProperty("/Cart_NetAmount",t.Price);this.getView().getModel("ServicesViewModel").setProperty("/Cart_TaxAmount",t.Tax);this.getView().getModel("ServicesViewModel").refresh();for(var r=0;r<i.length;r++){if(i[r].Highlight==="None"){i[r].Type="Inactive"}}}else{e.getSource().getBindingContext("ServicesViewModel").getObject().Highlight="None";e.getSource().removeStyleClass("cl_wgridlistSeleted");e.getSource().addStyleClass("cl_wgridlist");this.getView().getModel("ServicesViewModel").setProperty("/Cart_Material","");this.getView().getModel("ServicesViewModel").setProperty("/Cart_MaterialDesc","");this.getView().getModel("ServicesViewModel").setProperty("/Cart_TotalAmount","");this.getView().getModel("ServicesViewModel").setProperty("/Cart_NetAmount","");this.getView().getModel("ServicesViewModel").setProperty("/Cart_TaxAmount","");this.getView().getModel("ServicesViewModel").refresh();for(var r=0;r<i.length;r++){if(i[r].Highlight==="None"){i[r].Type="Active"}}}this.getView().getModel("ServicesViewModel").refresh()},onPressCancelCW:function(){var e=this.getView().getModel("ServicesViewModel").getProperty("/CWMaterial");for(var t=0;t<e.length;t++){e[t].Highlight="None";e[t].Type="Active"}this.getView().getModel("ServicesViewModel").setProperty("/CWMaterial","");this.getView().getModel("ServicesViewModel").setProperty("/CWMaterial",e);this.getView().getModel("ServicesViewModel").refresh()},onPressCancelGas:function(){var e=this.getView().getModel("ServicesViewModel").getProperty("/LPGMaterial");for(var t=0;t<e.length;t++){e[t].Highlight="None";e[t].Type="Active"}this.getView().getModel("ServicesViewModel").setProperty("/LPGMaterial","");this.getView().getModel("ServicesViewModel").setProperty("/LPGMaterial",e);this.getView().getModel("ServicesViewModel").refresh()},onPressCheckCard:function(){if(!this.RewardCheck){this.RewardCheck=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.RewardCheck",this);this.getView().addDependent(this.RewardCheck)}this.RewardCheck.open()},onPressCloseCheckCard:function(){this.RewardCheck.close()},onCloseCart:function(){sap.m.MessageBox.confirm("Are you sure want to close?",{icon:sap.m.MessageBox.Icon.CONFIRM,title:"Confirmation",actions:[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO],onClose:function(e){if(e==="YES"){this.AddToCart.close();this.getView().getModel("ServicesViewModel").setProperty("/ProceedSOButtomVisible",true);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/IdentifyVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/MOPVisible",false);this.getView().getModel("ServicesViewModel").refresh()}else if(e==="NO"){}}.bind(this)})},onScanSuccess:function(e){if(e.getParameter("cancelled")){t.show("Scan cancelled",{duration:1e3})}else{if(e.getParameter("text")){this.getView().getModel("ServicesViewModel").setProperty("/Loyalty_ScanedID",e.getParameter("text"))}}},onScanError:function(e){t.show("Scan failed: "+e,{duration:1e3})},onScanLiveupdate:function(e){},onPressLPGCart:function(){var e=this.getView().getModel("ServicesViewModel").getProperty("/Cart_Material");if(e){if(!this.AddToCartLPG){this.AddToCartLPG=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.AddToCartLPG",this);this.getView().addDependent(this.AddToCartLPG)}this.AddToCartLPG.open();this.getView().getModel("ServicesViewModel").setProperty("/ProceedSOButtomVisible",true);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/IdentifyVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/MOPVisible",false);this.getView().getModel("ServicesViewModel").refresh()}else{sap.m.MessageToast.show("Please Select Material")}},onCloseLPGCart:function(){sap.m.MessageBox.confirm("Are you sure want to close?",{icon:sap.m.MessageBox.Icon.CONFIRM,title:"Confirmation",actions:[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO],onClose:function(e){if(e==="YES"){this.AddToCartLPG.close();this.getView().getModel("ServicesViewModel").setProperty("/ProceedSOButtomVisible",true);this.getView().getModel("ServicesViewModel").setProperty("/PaymentButtomVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/IdentifyVisible",false);this.getView().getModel("ServicesViewModel").setProperty("/MOPVisible",false);this.getView().getModel("ServicesViewModel").refresh()}else if(e==="NO"){}}.bind(this)})},onPressNavtoPaymentapp:function(){},onGopress:function(){var e=[{BP:"6000000175",BPType:"",Name:"Mohamed Hafiz",Mobile:"+919843647118",Email:"mohamed123@gmail.com",PlateNo:"20621",PlateCode:"A",PlateCat:"Private",Emirates:"Dubai",Manufacturer:"BMW",Model:"BMW",CarType:"SEDAN",VinNo:"5871427853458734",Highlight:"None",Type:"Active"}];this.getView().getModel("SearchViewModel").getData().SearchList=e;this.getView().getModel("SearchViewModel").refresh()},onSelectCustomer:function(e){var i=e.getSource().getBindingContext("SearchViewModel").getObject();var r=this.getView().getModel("SearchViewModel").getData().SearchList;var a=this.getView().getModel("oGlobalModel");if(i.Highlight==="None"){setTimeout(function(){t.show("Seleted")},100);e.getSource().getBindingContext("SearchViewModel").getObject().Highlight="Information";a.getData().Profile_BPNo=i.BP;a.getData().Profile_BPType=i.BPType;a.getData().Profile_Name=i.Name;a.getData().Profile_Mobile=i.Mobile;a.getData().Profile_Email=i.Email;a.getData().Profile_PlateNo=i.PlateNo;a.getData().Profile_PlateCode=i.PlateCode;a.getData().Profile_Emirates=i.Emirates;a.getData().Profile_Model=i.Model;a.getData().Profile_CarType=i.CarType;a.getData().Profile_VINNo=i.VinNo;this.getView().getModel("SearchViewModel").refresh();a.refresh();for(var o=0;o<r.length;o++){if(r[o].Highlight==="None"){r[o].Type="Inactive";e.getSource().removeStyleClass("Cl_SearchCustomerBox");e.getSource().addStyleClass("Cl_SearchCustomerBoxNotSeleted")}}this.SearchVehicle.close()}else{setTimeout(function(){t.show("Un-Seleted")},100);e.getSource().getBindingContext("SearchViewModel").getObject().Highlight="None";for(var o=0;o<r.length;o++){if(r[o].Highlight==="None"){r[o].Type="Active";e.getSource().removeStyleClass("Cl_SearchCustomerBoxNotSeleted");e.getSource().removeStyleClass("Cl_SearchCustomerBox");e.getSource().addStyleClass("Cl_SearchCustomerBoxSeleted")}}}this.getView().getModel("SearchViewModel").refresh()},onPressSearchCustomer:function(e){var t=this.getView().getModel("oGlobalModel");if(!this.SearchVehicle){this.SearchVehicle=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.SearchVehicle",this);this.getView().addDependent(this.SearchVehicle)}this.SearchVehicle.open()},onPressCreateCustomer:function(){this.SearchVehicle.close();if(!this.Create){this.Create=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.CreateCustomer",this);this.getView().addDependent(this.Create)}this.Create.open()},onCancelCreateCustomer:function(){this.Create.close()},onPressSaveCustomer:function(){var e=this.getView().getModel("HomeViewModel").getData().CNC_NewCustomer;var i=this.getView().getModel("oViewModel").getData();if(e){if(i.CC_FirstName!==""&&i.CC_MobileNo!==""){t.show("Customer created successfully");this.onClearCNCInput()}else{if(i.CC_FirstName===""){i.CC_FirstName_ValueState="Error";this.getView().getModel("oViewModel").setProperty("/CC_FirstName_ValueState","Error")}if(i.CC_MobileNo===""){i.CC_MobileNo_ValueState="Error";this.getView().getModel("oViewModel").setProperty("/CC_MobileNo_ValueState","Error")}t.show("Please fill mandatory details");this.getView().getModel("oViewModel").refresh(true)}}else{if(i.CC_FirstName!==""&&i.CC_MobileNo!==""&&i.CC_Emirates!==""&&i.CC_Category!==""&&i.CC_PlateCode!==""&&i.CC_PlateNo!==""&&i.CC_Manfacturer!==""&&i.CC_Model!==""){t.show("Customer created successfully");this.onClearCNCInput()}else{if(i.CC_FirstName===""){i.CC_FirstName_ValueState="Error";this.getView().getModel("oViewModel").setProperty("/CC_FirstName_ValueState","Error")}if(i.CC_MobileNo===""){i.CC_MobileNo_ValueState="Error";this.getView().getModel("oViewModel").setProperty("/CC_MobileNo_ValueState","Error")}t.show("Please Fill All Mandatory Details");this.getView().getModel("oViewModel").refresh(true)}}},onMobileNoLiveChange:function(e){var i=e.getSource().getValue();if(i.charAt(0)==="0"){t.show("Mobile number does not start with zero");e.getSource().setValue("")}else{var r=i.replace(/\D/g,"");e.getSource().setValue(r);if(i.length>9){this.getView().getModel("oViewModel").setProperty("/CC_MobileNo_ValueState","None")}else{this.getView().getModel("oViewModel").setProperty("/CC_MobileNo_ValueState","Error")}}},onFirstNameLiveChange:function(e){var t=e.getSource().getValue();t=t.replace(/[^a-zA-Z0-9_ ]/g,"");e.getSource().setValue(t);if(t.length>2){this.getView().getModel("oViewModel").setProperty("/CC_FirstName_ValueState","Information")}else{this.getView().getModel("oViewModel").setProperty("/CC_FirstName_ValueState","Error")}},onOpenManufactureF4:function(e){this.source=e.getSource();if(!this.Manfacturer){this.Manfacturer=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.ManfacturerF4",this);this.getView().addDependent(this.Manfacturer)}this.Manfacturer.open()},onSearchManufacture:function(e){var t=e.getParameters().value;var i=["Manufacture"];var r=e.getSource().getBinding("items");this.onSearchF4(t,i,r)},onSearchModel:function(e){var t=e.getParameters().value;var i=["Model"];var r=e.getSource().getBinding("items");this.onSearchF4(t,i,r)},onSearchF4:function(e,t,i){var r=[];for(var a=0;a<t.length;a++){r.push(new Filter(t[a],FilterOperator.Contains,e))}var o=new Filter(r);i.filter([o])},onManfacturerConfirm:function(e){var t=this.getView().getModel("oViewModel");t.setProperty("/CC_Model","");t.getData().CC_Manfacturer=e.getParameter("selectedItem").getBindingContext("oViewModel").getObject().Manufacture;e.getSource().getBinding("items").filter([]);var i=t.getProperty("/ModelF4Set");var r=[];r=i.filter(function(e){return e.Manufacture===t.getData().CC_Manfacturer});t.setProperty("/ModelF4",r);t.refresh()},onOpenModelF4:function(e){this.source=e.getSource();if(!this.ModelF4){this.ModelF4=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.ModelF4",this);this.getView().addDependent(this.ModelF4)}this.ModelF4.open()},onModelConfirm:function(e){var t=this.getView().getModel("oViewModel");t.getData().CC_Model=e.getParameter("selectedItem").getBindingContext("oViewModel").getObject().Model;t.refresh();e.getSource().getBinding("items").filter([])},onResetForm:function(){var e=this.getView().getModel("oViewModel");e.getData().CC_FirstName="";e.getData().CC_MobileNo="";e.getData().CC_Email="";e.getData().CC_Emirates="";e.getData().CC_Category="";e.getData().CC_PlateCode="";e.getData().CC_PlateNo="";e.getData().CC_VINNo="";e.getData().CC_Manfacturer="";e.getData().CC_Model="";e.getData().CC_CarType="";e.refresh()},onCNCSwitchOn:function(e){var t=this.getView().getModel("HomeViewModel");var i=e.getSource().getState();if(i){t.setProperty("/CNC_NewCustomer",true);this.getView().getModel("HomeViewModel").setProperty("/CNC_VehicleForm",false);this.getView().getModel("HomeViewModel").setProperty("/CNC_CustomerForm",true)}else if(!i){t.setProperty("/CNC_NewCustomer",false);this.getView().getModel("HomeViewModel").setProperty("/CNC_VehicleForm",true);this.getView().getModel("HomeViewModel").setProperty("/CNC_CustomerForm",true)}},onPressAddonMaterial:function(){if(!this.MaterialF4){this.MaterialF4=sap.ui.xmlfragment("vehicleapp.ui.vehicleapp.fragment.MaterialF4",this);this.getView().addDependent(this.MaterialF4)}this.MaterialF4.open()},onSelectMaterial:function(e){var t=e.getSource().getBindingContext("ServicesViewModel").getObject();var i=this.getView().getModel("ServicesViewModel").getData().MaterialList;if(t.Highlight==="None"){e.getSource().getBindingContext("ServicesViewModel").getObject().Highlight="Information";this.getView().getModel("ServicesViewModel").setProperty("/Price",t.Price);e.getSource().removeStyleClass("cl_wgridlist");e.getSource().addStyleClass("cl_wgridlistSeleted");var r=parseFloat(t.NetPrice)+parseFloat(t.TaxPrice);this.getView().getModel("ServicesViewModel").setProperty("/Cart_TotalAmount",parseFloat(r).toFixed(2));var a={Material:t.Material,MaterialName:t.MaterialName,Price:t.NetPrice,Tax:t.TaxPrice,Total:parseFloat(r).toFixed(2)};var o=this.getView().getModel("ServicesViewModel").getProperty("/MyCartItems");o.push(a);this.getView().getModel("ServicesViewModel").refresh()}else{e.getSource().getBindingContext("ServicesViewModel").getObject().Highlight="None";e.getSource().removeStyleClass("cl_wgridlistSeleted");e.getSource().addStyleClass("cl_wgridlist");var o=this.getView().getModel("ServicesViewModel").getProperty("/MyCartItems");o=o.filter(function(e){return e.Material!==t.Material});this.getView().getModel("ServicesViewModel").setProperty("/MyCartItems",o);this.getView().getModel("ServicesViewModel").refresh()}this.getView().getModel("ServicesViewModel").refresh()},onCloseMaterialF4:function(){this.MaterialF4.close()}})});
//# sourceMappingURL=Services.controller.js.map
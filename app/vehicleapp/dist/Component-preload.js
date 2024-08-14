//@ui5-bundle vehicleapp/ui/vehicleapp/Component-preload.js
sap.ui.require.preload({
	"vehicleapp/ui/vehicleapp/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","vehicleapp/ui/vehicleapp/model/models"],function(e,i,t){"use strict";return e.extend("vehicleapp.ui.vehicleapp.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"vehicleapp/ui/vehicleapp/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("vehicleapp.ui.vehicleapp.controller.App",{onInit:function(){}})});
},
	"vehicleapp/ui/vehicleapp/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/m/MessageBox","sap/ui/core/Fragment"],function(e,i,t,r){"use strict";return e.extend("vehicleapp.ui.vehicleapp.controller.View1",{onInit:function(){},onAfterRendering:function(){this._ModelInitialLoad();this.ReadServicesMaterial()},_ModelInitialLoad:function(){var e={CWMaterial:[]};var i=new sap.ui.model.json.JSONModel(e);this.getView().setModel(i,"oViewModel")},ReadServicesMaterial:function(){var e=this.getView().getModel("oViewModel");this.getView().getModel("viservice").read("/Material",{success:function(i,t){alert("hit");e.setProperty("/CWMaterial",i.results);e.refresh(true)}.bind(this),error:function(e){t.error(e.message)}})}})});
},
	"vehicleapp/ui/vehicleapp/i18n/i18n.properties":'# This is the resource bundle for vehicleapp.ui.vehicleapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Vehicle App\n\n#YDES: Application description\nappDescription=Vehicle Fiori App\n#XTIT: Main view title\ntitle=Vehicle App\n\n#XFLD,33\nflpTitle=Vehicle App\n\n#XFLD,72\nflpSubtitle=Vehicle Test Application\n',
	"vehicleapp/ui/vehicleapp/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"vehicleapp.ui.vehicleapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.3","toolsId":"e9fb2af8-3ad3-4b2f-96f7-72e0039c8aad"},"dataSources":{"viservice":{"uri":"odata/v2/viservice/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"vehicleapp-manage":{"semanticObject":"vehicleapp","action":"manage","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"vehicleapp.ui.vehicleapp.i18n.i18n"}},"viservice":{"dataSource":"viservice","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"vehicleapp.ui.vehicleapp.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"vehicleapp.ui.vehicleapp.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"vehicleapp"}}',
	"vehicleapp/ui/vehicleapp/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"vehicleapp/ui/vehicleapp/view/App.view.xml":'<mvc:View controllerName="vehicleapp.ui.vehicleapp.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"vehicleapp/ui/vehicleapp/view/View1.view.xml":'<mvc:View controllerName="vehicleapp.ui.vehicleapp.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><List\n\t\titems="{oViewModel>/CWMaterial}"\n\t\theaderText="Material"><items><ObjectListItem\n\t\t\t\ttitle="{oViewModel>MATERIAL}"\n\t\t\t\ttype="Active"\n\t\t\t\tpress="onListItemPress"\n\t\t\t\tnumber="{oViewModel>PRICE}"\n\t\t\t\tnumberUnit="{oViewModel>CURRENCY}"><attributes><ObjectAttribute text="{oViewModel>MATERIALDESC}" /></attributes></ObjectListItem></items></List></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map

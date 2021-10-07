sap.ui.define(["sap/ui/model/json/JSONModel",
                "sap/ui/core/mvc/Controller",
                "sap/ui/model/resource/ResourceModel"
],

function (JSONModel,Controller,ResourceModel){
    "use strict";
return Controller.extend("search.po.controller.App",{


// *-------------------------------------------------------------------------------*//  
// -> Create local model inside controller and keep that model in the initialization 
// -> Create object of that model and keep it in the variablea and then set the same
//    variable in the model this.getView().setModel(oModel).
// *-------------------------------------------------------------------------------*//
    onInit: function ()
    {
        var poinput = {
                            poinput : {
                                            ponumber : "milly"
                                      }
                      };

         var oModel = new JSONModel(poinput);
         this.getView().setModel(oModel);
// *----------------Internalization -------------------------------------------------*
// -> Okay now we want label description should come from i18n file 
// -> for that we create one folder i18n and use the resource model class in the controller 
// -> create new object for the resourcemodel and use the bundlename property for the same
// -> Pass the path of i18n then set the model with the view 
// *----------------------------------------------------------------------------------*
         var i18nmodel = new ResourceModel({
            bundleName :"search.po.i18n.i18n"
                                          });    
    this.getView().setModel(i18nmodel,"i18n");
    },
    Onclick : function ()
    {
        alert("hello");
    }
});
         
});
// - This is program no:1.
// - Just to trigger alert function.
// sap.ui.define([
// ], function(
// ) {
// 	"use strict";

//    alert("Hello");
// });


// * -------In this Example we took the Text class and create an object of the same----*
//          and then place the same in the content .
// Note: Here we have use the property of class text and put value as hardcoded.
// *-----------------------------------------------------------------------------*
// sap.ui.define([ 
//     "sap/m/Text"       
// ],
//     function(Text){
//     "use strict";
//     new Text({
//         text : "Purchase Order"
//     }).placeAt("content");

// });



// *--------------------------------------------------------------------------------*
//  In this example we are going to use the xml view 
//   1. Use the xml class name and then create the object for the same
//   2. In the SDK we can see XMLView has a create method with Promise 
//   3. Which means its having a return type so we get the view from App.xml and place it in the content. 
// *--------------------------------------------------------------------------------*

// *---------------------------------------------------------------------------------*
// 1.Intial system load the index.html file 
// 2.index.html file load the index.js file 
// 3.from index.js file we are calling the App.xml file and place it in the body content of HTML.
// *---------------------------------------------------------------------------------*

// sap.ui.define(["sap/ui/model/json/JSONModel",
//                 "sap/ui/core/mvc/Controller"
// ],

// function (JSONModel,Controller){
//     "use strict";
// return Controller.extend("search.po.controller.App",{

//     onInit: function ()
//     {
//         var poinput = {
//                             poinput : {
//                                             ponumber : ""
//                                       }
//                       };

//          var oModel = new JSONModel(poinput);
//          this.getView().setModel(oModel);

//     }

// });
         
// });
	


sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    ],function(XMLView){
        "use strict";
       new XMLView.create({
            viewName : "search.po.view.App"
        }).then(function(oView){
            oView.placeAt("content");
        });
    });
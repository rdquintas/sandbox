sap.ui.define([
    "deloitte/r2022/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(BaseController, JSONModel, MessageToast) {
    "use strict";

    return BaseController.extend("deloitte.r2022.controller.Home", {

        onInit: function() {

        },

        onNavTile1: function() {
            this.getRouter().navTo("selectOD");
        },

        onPress: function() {
            MessageToast.show("Não funciona neste protótipo...");
        }
    });

});
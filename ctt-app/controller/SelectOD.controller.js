sap.ui.define([
    "deloitte/r2022/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(BaseController, JSONModel, MessageToast) {
    "use strict";

    return BaseController.extend("deloitte.r2022.controller.SelectOD", {

        onInit: function() {

        },

        onPress: function() {
            this.getRouter().navTo("tarefasList");
        }
    });

});
sap.ui.define([
    "deloitte/r2022/controller/BaseController"
], function(BaseController) {
    "use strict";

    return BaseController.extend("deloitte.r2022.controller.NotFound", {

        /**
         * Navigates to the worklist when the link is pressed
         * @public
         */
        onLinkPressed: function() {
            this.getRouter().navTo("worklist");
        }

    });

});
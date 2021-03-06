/* globals module */

module.exports = {
    afterInstall: function() {
        var self = this;

        return this.addBowerPackageToProject( 'bootstrap-datepicker' )
            .then( function() {
                return self.addBowerPackageToProject( 'fontawesome' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'highcharts' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'moment' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'moment-timezone' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'select2' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'typeahead.js' );
            })
            .then( function() {
                return self.addBowerPackageToProject( 'git@github.com:softlayer/sl-ember-components.git' );
            });
    },

    normalizeEntityName: function() {}
};

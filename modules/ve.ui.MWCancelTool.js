ve.init.mw.targetFactory.on( 'register', ( name, target ) => {
	if ( name === 'article' ) {
		target.static.actionGroups.push( {
			name: 'cancel',
			type: 'bar',
			include: [ 'cancel' ]
		} );
	}
} );

/**
 * MediaWiki cancel tool
 *
 * @class
 * @abstract
 * @extends ve.ui.Tool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.MWCancelTool = function VeUiMWCancelTool() {
	// Parent constructor
	ve.ui.MWCancelTool.super.apply( this, arguments );
};

/* Inheritance */
OO.inheritClass( ve.ui.MWCancelTool, ve.ui.Tool );

/* Static properties */
ve.ui.MWCancelTool.static.name = 'cancel';

ve.ui.MWCancelTool.static.flags = [ 'destructive' ];
ve.ui.MWCancelTool.static.displayBothIconAndLabel = true;
ve.ui.MWCancelTool.static.group = 'cancel';
ve.ui.MWCancelTool.static.commandName = 'cancel';
ve.ui.MWCancelTool.static.autoAddToCatchall = false;
ve.ui.MWCancelTool.static.autoAddToGroup = false;
ve.ui.MWCancelTool.static.title = OO.ui.deferMsg( 'cancel' );

/* Registration */
ve.ui.toolFactory.register( ve.ui.MWCancelTool );

/**
 * retrieveData - PRD extension, usable on the form only.<br/>
 * Creates functions that will perform object queries for multiple attributes at different detail levels,
 * while caching the results per LDAP DN in the local browser session. Cache expires on page/form/module reload. <br/>
 * Module loads as PRD.extensions.retrieveData<br/>
 * @module retrieveData
 * @requires PRD
 * @version 1.0.2
 * @license MIT License
 */
(function IIFE() {
  var arr, major, minor, patch, cache, logmsg, dbgmsg, isString;
  cache = {}; // used to store query results for the current session

  // Validates we have the PRD module loaded, and if so extendes it with retrieveData
  if ( window != null && window.PRD != null && PRD.hasOwnProperty( 'version' ) ) {
    arr = PRD.version().split( '.' );
    major = Number( arr[ 0 ] );
    minor = Number( arr[ 1 ] );
    patch = Number( arr[ 2 ] );
    if ( major === 1 && ( minor > 0 || ( minor === 0 && patch >= 6 )) ) {
      if ( ! PRD.hasOwnProperty( 'extensions' ) ) {
        PRD.extensions = {};
      }
      if ( ! PRD.hasOwnProperty( 'retrieveData' ) ) {
        PRD.extensions.retrieveData = {
          factory:factory,
          version:version,
          clearcache:clearcache,
          removefromcache:removefromcache,
          listentries:listentries,
        };
        // Function abstractions for easier refactoring
        logmsg = PRD.util.logerror;
        dbgmsg = PRD.util.debugmsg;
        isString = PRD.util.isString;
        logmsg( 'Module loaded: PRD.extensions.retrieveData version ' + version() );

      }
    } else {
      console.log( 'Incorrect PRD module version. Requires 1.0.6 or later, found: ' + arr.join( '.' ) );
    }
  } else {
    console.log( 'PRD module not loaded.' );
  }

  /**
   * Return extension version.
   * @memberof module:retrieveData
   * @since 1.0.0
   *
   * @type {string}
   * @return {string} Module's version in the format M.m.p (Major, minor, patch)
   */
  function version() {
    return '1.0.2';
  }

  /**
   * Clear module's query cache. Returns nothing.
   * @memberof module:retrieveData
   * @since 1.0.0
   */
  function clearcache() {
    dbgmsg( 'retrieveData: Internal cache contain attribute values for: ' + Object.keys( cache ).sort().join( '; ' ) );
    cache = {};
    logmsg( 'retrieveData: cache cleared.' );
  }

  /**
   * Remove a single LDAP DN from the cache.
   * @memberof module:retrieveData
   * @since 1.0.1
     * @param {string} ldapdn     User DN in FQDN LDAP format
     * @type {boolean}
     * @return {boolean} true if cache entry removed successfully, false if entry was not present.
   */
  function removefromcache( ldapdn ) {
    if ( cache.hasOwnProperty( ldapdn) ) {
      delete cache[ ldapdn ];
      return true;
    }
    return false;
  }

  /**
   * Lists all cached entries LDAP DNs.
   * @memberof module:retrieveData
   * @since 1.0.1
   * @type {string[]}
   * @return {string[]} Array of strings containing all cached DNs.
   */
  function listentries() {
    return Object.keys( cache ).sort();
  }

  /**
   * mapObject structure, used to define detail level and corresnponding attributes for the factory().
   * @typedef {object} attributemap
   * @property {...string} detaillevel - ECMA Object property whose actual name is the detail level to be selected when calling the generated function.
   * @property {string[]}  detaillevel.attributeArray - DAL attribute key values for attributes to be queried at that detail level.
   */

  /**
   * Generate retrieval function for objects where the function reads multiple DAL attributes.
   * @memberof module:retrieveData
   * @since 1.0.0
   *
   * @example
   * var mapobj = {extended:[ 'CN', 'FirstName', 'LastName', 'Title', 'Description' ],base:[ 'CN', 'FirstName', 'LastName' ]};
   * // Returns an instance of the function readEntity into the userdata variable:
   * var userdata = PRD.extensions.retrieveData.factory( 'user', mapobj, 'userdata' );
   * // Queries details from cwookie. Since no detail level was passed it will default the first mapobj key in alphabetical order.
   * var userinfo = userdata( 'cn=cwookie,ou=users,o=data' );
   * // This time the detail level desired has been set, so will return the attribute values from the 'extended' property's Array.
   * var usermoreinfo = userdata( 'cn=cwookie,ou=users,o=data', 'extended' );
   * // userinfo will contain:
   * // userinfo.CN with the value [ 'cwookie' ]
   * // userinfo.FirstNAme with the value [ 'Chewie' ]
   * // userinfo.LastName with the value [ 'Wookie' ]
   * // usermoreinfo will contain the same values plus the usermoreinfo.<attribute> = [ attribute values] for Title and Description
   *
   * @param {string}        dalEntity           DAL entity key.
   * @param {attributemap}  mapObject           Map Object in the format. { 'level of details':[ attribute array ],... }
   * @param {string=}       [childFnLogName]   Trace name to be used by the generated function.
   * @type {function}
   * @return {function} readEntity function for the selected DAL entity and map object.
   */
  function factory( dalEntity, mapObject, childFnLogName ) {
    var fname, invalidParams, i, details;
    fname = 'PRD.extensions.retrieveData.factory(): ';
    // Input parameter validation
    invalidParams = false;
    if ( ! isString( dalEntity ) ) {
      logmsg( fname + 'dalEntity must be a string and match a valid DAL entity key.' );
      invalidParams = true;
    }
    if ( ! isString( childFnLogName ) ) {
      childFnLogName = 'retrieve' + dalEntity + 'Data';
    }
    if ( mapObject == null || typeof mapObject !== 'object' ) {
      logmsg( fname + 'mapObject must be an object with the outlined structure.' );
      invalidParams = true;
    } else {
      details = Object.keys( mapObject ).sort();
      dbgmsg( fname + 'mapObject detail levels retrieved: ' + details.join( '; ' ) );
      if ( details.length <= 0 ) {
        logmsg( fname + 'mapObject must contain at least one detail level property.' );
        invalidParams = true;
      }
      for ( i in details ) {
        if ( ! ( mapObject[ details[ i ] ] instanceof Array ) ) {
          logmsg( fname + 'mapObject key "' + details[ i ] + '" must be an array of strings with the DAL attribute keys.' );
          invalidParams = true;
        }
      }
    }
    if ( invalidParams ) {
      logmsg( fname + 'Invalid parameters received, aborting funciton generation.' );
      return null;
    }

    /**
     * Retrieves DAL entity key's details
     * @param {string} ldapdn     User DN in FQDN LDAP format
     * @param {string} detaillvl  How much information to retrieve, as defined in the provided map object
     * @type {object}
     * @return {object} ECMA object whose properties are created using the attribute's DAL key and their values are the attribute's value.
     *   If invalid parameters are passed an empty object is returned.
     */
    function readEntity( ldapdn, detaillvl ) {
      var fname, attrs, res;
      fname = childFnLogName + '(): ';
      res = {};
      // input parameter validation
      if ( ldapdn === '' || ! isString( ldapdn ) ) {
        logmsg( fname + 'ldapdn must be a string representation of a LDAP FQDN.' );
        return res;
      }
      if ( details.indexOf( String( detaillvl ) ) === -1 ) {
        detaillvl = details[ 0 ];
      }
      dbgmsg( fname + 'LDAP DN: "' + ldapdn + '", Detail level: "' + detaillvl + '"' );

      // Data retrieval using IDVault.get() approach.
      attrs = mapObject[ detaillvl ].slice();
      // Populate return object with attribute queries
      if ( ! cache.hasOwnProperty( ldapdn ) ) { // cache setup
        cache[ ldapdn ] = {};
      }
      attrs.forEach( function getValues( attribute ) {
        if ( cache[ ldapdn ].hasOwnProperty( attribute ) ) {
          res[ attribute ] = cache[ ldapdn ][ attribute ].slice();
          dbgmsg( fname + 'from Session cache: Attribute: "' + attribute + '", Value(s): "' + res[ attribute ].join( '"; "' ) + '"' );
        } else {
          res[ attribute ] = PRD.IDVget( ldapdn, dalEntity, attribute );
          cache[ ldapdn ][ attribute ] = res[ attribute ].slice();
          dbgmsg( fname + 'from IDVault.get: Attribute: "' + attribute + '", Value(s): "' + res[ attribute ].join( '"; "' ) + '"' );
        }
      });

      return res;
    }

    return readEntity;
  }

})();
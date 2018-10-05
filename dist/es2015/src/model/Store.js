'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The Store model module.
* @module model/Store
*/
var Store = function () {
    /**
    * Constructs a new <code>Store</code>.
    * @alias module:model/Store
    * @class
    */

    function Store() {
        _classCallCheck(this, Store);

        this.object = undefined;
        this.id = undefined;
        this.name = undefined;
        this.name_raw = undefined;
    }

    /**
    * Constructs a <code>Store</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Store} obj Optional instance to populate.
    * @return {module:model/Store} The populated <code>Store</code> instance.
    */


    _createClass(Store, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new Store();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('name_raw')) {
                    obj['name_raw'] = _ApiClient2.default.convertToType(data['name_raw'], 'String');
                }
            }
            return obj;
        }

        /**
        * Object of store
        * @member {String} object
        */

        /**
        * Id of store
        * @member {String} id
        */

        /**
        * Store name
        * @member {String} name
        */

        /**
        * Store name raw
        * @member {String} name_raw
        */

    }]);

    return Store;
}();

exports.default = Store;
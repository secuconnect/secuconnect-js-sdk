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
* The AddressComponents model module.
* @module model/AddressComponents
*/
var AddressComponents = function () {
    /**
    * Constructs a new <code>AddressComponents</code>.
    * @alias module:model/AddressComponents
    * @class
    */

    function AddressComponents() {
        _classCallCheck(this, AddressComponents);

        this.long_name = undefined;
        this.short_name = undefined;
        this.types = undefined;
    }

    /**
    * Constructs a <code>AddressComponents</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AddressComponents} obj Optional instance to populate.
    * @return {module:model/AddressComponents} The populated <code>AddressComponents</code> instance.
    */


    _createClass(AddressComponents, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AddressComponents();

                if (data.hasOwnProperty('long_name')) {
                    obj['long_name'] = _ApiClient2.default.convertToType(data['long_name'], 'String');
                }
                if (data.hasOwnProperty('short_name')) {
                    obj['short_name'] = _ApiClient2.default.convertToType(data['short_name'], 'String');
                }
                if (data.hasOwnProperty('types')) {
                    obj['types'] = _ApiClient2.default.convertToType(data['types'], ['String']);
                }
            }
            return obj;
        }

        /**
        * Long name
        * @member {String} long_name
        */

        /**
        * Short name
        * @member {String} short_name
        */

        /**
        * Types
        * @member {Array.<String>} types
        */

    }]);

    return AddressComponents;
}();

exports.default = AddressComponents;
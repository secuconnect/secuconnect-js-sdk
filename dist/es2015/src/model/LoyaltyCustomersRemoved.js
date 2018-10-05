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
* The LoyaltyCustomersRemoved model module.
* @module model/LoyaltyCustomersRemoved
*/
var LoyaltyCustomersRemoved = function () {
    /**
    * Constructs a new <code>LoyaltyCustomersRemoved</code>.
    * @alias module:model/LoyaltyCustomersRemoved
    * @class
    */

    function LoyaltyCustomersRemoved() {
        _classCallCheck(this, LoyaltyCustomersRemoved);

        this.deleted = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCustomersRemoved</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCustomersRemoved} obj Optional instance to populate.
    * @return {module:model/LoyaltyCustomersRemoved} The populated <code>LoyaltyCustomersRemoved</code> instance.
    */


    _createClass(LoyaltyCustomersRemoved, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCustomersRemoved();

                if (data.hasOwnProperty('deleted')) {
                    obj['deleted'] = _ApiClient2.default.convertToType(data['deleted'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * Result is true or false
        * @member {Boolean} deleted
        */

    }]);

    return LoyaltyCustomersRemoved;
}();

exports.default = LoyaltyCustomersRemoved;
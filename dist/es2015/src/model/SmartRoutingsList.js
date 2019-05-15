'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _SmartRoutingsProductModel = require('./SmartRoutingsProductModel');

var _SmartRoutingsProductModel2 = _interopRequireDefault(_SmartRoutingsProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartRoutingsList model module.
 * @module model/SmartRoutingsList
 */
var SmartRoutingsList = function () {
    /**
     * Constructs a new <code>SmartRoutingsList</code>.
     * @alias module:model/SmartRoutingsList
     * @class
     */

    function SmartRoutingsList() {
        _classCallCheck(this, SmartRoutingsList);

        this.count = undefined;
        this.data = undefined;
    }

    /**
    * Constructs a <code>SmartRoutingsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsList} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsList} The populated <code>SmartRoutingsList</code> instance.
    */


    _createClass(SmartRoutingsList, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartRoutingsList();

                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_SmartRoutingsProductModel2.default]);
                }
            }
            return obj;
        }

        /**
         * Number of existing smart routings
         * @member {Number} count
         */


        /**
         * GET Smart/Routings
         * @member {Array.<module:model/SmartRoutingsProductModel>} data
         */

    }]);

    return SmartRoutingsList;
}();

exports.default = SmartRoutingsList;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ProductInstanceUID = require('./ProductInstanceUID');

var _ProductInstanceUID2 = _interopRequireDefault(_ProductInstanceUID);

var _SmartRoutingsAssign = require('./SmartRoutingsAssign');

var _SmartRoutingsAssign2 = _interopRequireDefault(_SmartRoutingsAssign);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The SmartRoutingsProductModel model module.
 * @module model/SmartRoutingsProductModel
 */
var SmartRoutingsProductModel = function () {
    /**
     * Constructs a new <code>SmartRoutingsProductModel</code>.
     * @alias module:model/SmartRoutingsProductModel
     * @class
     */

    function SmartRoutingsProductModel() {
        _classCallCheck(this, SmartRoutingsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.merchant = undefined;
        this.store = undefined;
        this.created = undefined;
        this.updated = undefined;
        this.description = undefined;
        this.assign = undefined;
    }

    /**
    * Constructs a <code>SmartRoutingsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsProductModel} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsProductModel} The populated <code>SmartRoutingsProductModel</code> instance.
    */


    _createClass(SmartRoutingsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartRoutingsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('merchant')) {
                    obj['merchant'] = _ProductInstanceUID2.default.constructFromObject(data['merchant']);
                }
                if (data.hasOwnProperty('store')) {
                    obj['store'] = _Store2.default.constructFromObject(data['store']);
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'String');
                }
                if (data.hasOwnProperty('updated')) {
                    obj['updated'] = _ApiClient2.default.convertToType(data['updated'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('assign')) {
                    obj['assign'] = _ApiClient2.default.convertToType(data['assign'], [_SmartRoutingsAssign2.default]);
                }
            }
            return obj;
        }

        /**
         * Object of smart routing
         * @member {String} object
         */


        /**
         * Id of smart routing
         * @member {String} id
         */


        /**
         * Merchant
         * @member {module:model/ProductInstanceUID} merchant
         */


        /**
         * Store
         * @member {module:model/Store} store
         */


        /**
         * Created at date
         * @member {String} created
         */


        /**
         * Updated at date
         * @member {String} updated
         */


        /**
         * Description
         * @member {String} description
         */


        /**
         * Assign
         * @member {Array.<module:model/SmartRoutingsAssign>} assign
         */

    }]);

    return SmartRoutingsProductModel;
}();

exports.default = SmartRoutingsProductModel;
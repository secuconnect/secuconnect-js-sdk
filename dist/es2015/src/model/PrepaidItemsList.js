'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PrepaidItemsProductModel = require('./PrepaidItemsProductModel');

var _PrepaidItemsProductModel2 = _interopRequireDefault(_PrepaidItemsProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PrepaidItemsList model module.
* @module model/PrepaidItemsList
*/
var PrepaidItemsList = function () {
    /**
    * Constructs a new <code>PrepaidItemsList</code>.
    * @alias module:model/PrepaidItemsList
    * @class
    */

    function PrepaidItemsList() {
        _classCallCheck(this, PrepaidItemsList);

        this.count = undefined;
        this.data = undefined;
    }

    /**
    * Constructs a <code>PrepaidItemsList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidItemsList} obj Optional instance to populate.
    * @return {module:model/PrepaidItemsList} The populated <code>PrepaidItemsList</code> instance.
    */


    _createClass(PrepaidItemsList, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidItemsList();

                if (data.hasOwnProperty('count')) {
                    obj['count'] = _ApiClient2.default.convertToType(data['count'], 'Number');
                }
                if (data.hasOwnProperty('data')) {
                    obj['data'] = _ApiClient2.default.convertToType(data['data'], [_PrepaidItemsProductModel2.default]);
                }
            }
            return obj;
        }

        /**
        * Number of existing prepaid items
        * @member {Number} count
        */

        /**
        * GET Prepaid/Items
        * @member {Array.<module:model/PrepaidItemsProductModel>} data
        */

    }]);

    return PrepaidItemsList;
}();

exports.default = PrepaidItemsList;
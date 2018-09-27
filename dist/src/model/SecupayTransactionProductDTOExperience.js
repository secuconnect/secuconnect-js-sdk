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
* The SecupayTransactionProductDTOExperience model module.
* @module model/SecupayTransactionProductDTOExperience
*/
var SecupayTransactionProductDTOExperience = function () {
    /**
    * Constructs a new <code>SecupayTransactionProductDTOExperience</code>.
    * Customer experience score
    * @alias module:model/SecupayTransactionProductDTOExperience
    * @class
    */

    function SecupayTransactionProductDTOExperience() {
        _classCallCheck(this, SecupayTransactionProductDTOExperience);

        this.positive = undefined;
        this.negative = undefined;
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTOExperience</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTOExperience} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTOExperience} The populated <code>SecupayTransactionProductDTOExperience</code> instance.
    */


    _createClass(SecupayTransactionProductDTOExperience, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SecupayTransactionProductDTOExperience();

                if (data.hasOwnProperty('positive')) {
                    obj['positive'] = _ApiClient2.default.convertToType(data['positive'], 'Number');
                }
                if (data.hasOwnProperty('negative')) {
                    obj['negative'] = _ApiClient2.default.convertToType(data['negative'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Score of positive experience (paid orders)
        * @member {Number} positive
        */

        /**
        * Score of negative experience (open/unpaid orders)
        * @member {Number} negative
        */

    }]);

    return SecupayTransactionProductDTOExperience;
}();

exports.default = SecupayTransactionProductDTOExperience;
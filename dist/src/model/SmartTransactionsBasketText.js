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
* The SmartTransactionsBasketText model module.
* @module model/SmartTransactionsBasketText
*/
var SmartTransactionsBasketText = function () {
    /**
    * Constructs a new <code>SmartTransactionsBasketText</code>.
    * @alias module:model/SmartTransactionsBasketText
    * @class
    */

    function SmartTransactionsBasketText() {
        _classCallCheck(this, SmartTransactionsBasketText);

        this.id = undefined;
        this.parent = undefined;
        this.desc = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsBasketText</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketText} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketText} The populated <code>SmartTransactionsBasketText</code> instance.
    */


    _createClass(SmartTransactionsBasketText, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsBasketText();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
                if (data.hasOwnProperty('parent')) {
                    obj['parent'] = _ApiClient2.default.convertToType(data['parent'], 'Number');
                }
                if (data.hasOwnProperty('desc')) {
                    obj['desc'] = _ApiClient2.default.convertToType(data['desc'], 'String');
                }
            }
            return obj;
        }

        /**
        * Text id
        * @member {Number} id
        */

        /**
        * Parent
        * @member {Number} parent
        */

        /**
        * Desc
        * @member {String} desc
        */

    }]);

    return SmartTransactionsBasketText;
}();

exports.default = SmartTransactionsBasketText;
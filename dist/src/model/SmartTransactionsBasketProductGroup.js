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
* The SmartTransactionsBasketProductGroup model module.
* @module model/SmartTransactionsBasketProductGroup
*/
var SmartTransactionsBasketProductGroup = function () {
    /**
    * Constructs a new <code>SmartTransactionsBasketProductGroup</code>.
    * @alias module:model/SmartTransactionsBasketProductGroup
    * @class
    */

    function SmartTransactionsBasketProductGroup() {
        _classCallCheck(this, SmartTransactionsBasketProductGroup);

        this.id = undefined;
        this.desc = undefined;
        this.level = undefined;
    }

    /**
    * Constructs a <code>SmartTransactionsBasketProductGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartTransactionsBasketProductGroup} obj Optional instance to populate.
    * @return {module:model/SmartTransactionsBasketProductGroup} The populated <code>SmartTransactionsBasketProductGroup</code> instance.
    */


    _createClass(SmartTransactionsBasketProductGroup, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartTransactionsBasketProductGroup();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('desc')) {
                    obj['desc'] = _ApiClient2.default.convertToType(data['desc'], 'String');
                }
                if (data.hasOwnProperty('level')) {
                    obj['level'] = _ApiClient2.default.convertToType(data['level'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Group id
        * @member {String} id
        */

        /**
        * Desc
        * @member {String} desc
        */

        /**
        * Level
        * @member {Number} level
        */

    }]);

    return SmartTransactionsBasketProductGroup;
}();

exports.default = SmartTransactionsBasketProductGroup;
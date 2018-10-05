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
* The VirtualTerminalData model module.
* @module model/VirtualTerminalData
*/
var VirtualTerminalData = function () {
    /**
    * Constructs a new <code>VirtualTerminalData</code>.
    * @alias module:model/VirtualTerminalData
    * @class
    */

    function VirtualTerminalData() {
        _classCallCheck(this, VirtualTerminalData);

        this.store = undefined;
        this.tid = undefined;
        this.actions = undefined;
        this.gift_terminal = undefined;
        this.amount_split_enabled = undefined;
    }

    /**
    * Constructs a <code>VirtualTerminalData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VirtualTerminalData} obj Optional instance to populate.
    * @return {module:model/VirtualTerminalData} The populated <code>VirtualTerminalData</code> instance.
    */


    _createClass(VirtualTerminalData, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new VirtualTerminalData();

                if (data.hasOwnProperty('store')) {
                    obj['store'] = _ApiClient2.default.convertToType(data['store'], Object);
                }
                if (data.hasOwnProperty('tid')) {
                    obj['tid'] = _ApiClient2.default.convertToType(data['tid'], 'String');
                }
                if (data.hasOwnProperty('actions')) {
                    obj['actions'] = _ApiClient2.default.convertToType(data['actions'], ['String']);
                }
                if (data.hasOwnProperty('gift_terminal')) {
                    obj['gift_terminal'] = _ApiClient2.default.convertToType(data['gift_terminal'], 'Number');
                }
                if (data.hasOwnProperty('amount_split_enabled')) {
                    obj['amount_split_enabled'] = _ApiClient2.default.convertToType(data['amount_split_enabled'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Store
        * @member {Object} store
        */

        /**
        * Terminal id
        * @member {String} tid
        */

        /**
        * Actions
        * @member {Array.<String>} actions
        */

        /**
        * Gift terminal
        * @member {Number} gift_terminal
        */

        /**
        * Amount split enabled
        * @member {Number} amount_split_enabled
        */

    }]);

    return VirtualTerminalData;
}();

exports.default = VirtualTerminalData;
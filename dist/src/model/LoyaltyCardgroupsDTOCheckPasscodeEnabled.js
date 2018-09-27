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
* The LoyaltyCardgroupsDTOCheckPasscodeEnabled model module.
* @module model/LoyaltyCardgroupsDTOCheckPasscodeEnabled
*/
var LoyaltyCardgroupsDTOCheckPasscodeEnabled = function () {
    /**
    * Constructs a new <code>LoyaltyCardgroupsDTOCheckPasscodeEnabled</code>.
    * @alias module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled
    * @class
    */

    function LoyaltyCardgroupsDTOCheckPasscodeEnabled() {
        _classCallCheck(this, LoyaltyCardgroupsDTOCheckPasscodeEnabled);

        this.action = undefined;
        this.cardnumber = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCardgroupsDTOCheckPasscodeEnabled</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled} The populated <code>LoyaltyCardgroupsDTOCheckPasscodeEnabled</code> instance.
    */


    _createClass(LoyaltyCardgroupsDTOCheckPasscodeEnabled, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCardgroupsDTOCheckPasscodeEnabled();

                if (data.hasOwnProperty('action')) {
                    obj['action'] = _ApiClient2.default.convertToType(data['action'], 'String');
                }
                if (data.hasOwnProperty('cardnumber')) {
                    obj['cardnumber'] = _ApiClient2.default.convertToType(data['cardnumber'], 'String');
                }
            }
            return obj;
        }

        /**
        * Action type
        * @member {String} action
        */

        /**
        * Secucard number
        * @member {String} cardnumber
        */

    }]);

    return LoyaltyCardgroupsDTOCheckPasscodeEnabled;
}();

exports.default = LoyaltyCardgroupsDTOCheckPasscodeEnabled;
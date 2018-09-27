'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _LoyaltyCardsDTOAccount = require('./LoyaltyCardsDTOAccount');

var _LoyaltyCardsDTOAccount2 = _interopRequireDefault(_LoyaltyCardsDTOAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The LoyaltyCardsProductModel model module.
* @module model/LoyaltyCardsProductModel
*/
var LoyaltyCardsProductModel = function () {
    /**
    * Constructs a new <code>LoyaltyCardsProductModel</code>.
    * @alias module:model/LoyaltyCardsProductModel
    * @class
    */

    function LoyaltyCardsProductModel() {
        _classCallCheck(this, LoyaltyCardsProductModel);

        this.object = undefined;
        this.id = undefined;
        this.account = undefined;
        this.cardnumber = undefined;
        this.created = undefined;
    }

    /**
    * Constructs a <code>LoyaltyCardsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoyaltyCardsProductModel} obj Optional instance to populate.
    * @return {module:model/LoyaltyCardsProductModel} The populated <code>LoyaltyCardsProductModel</code> instance.
    */


    _createClass(LoyaltyCardsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new LoyaltyCardsProductModel();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('account')) {
                    obj['account'] = _LoyaltyCardsDTOAccount2.default.constructFromObject(data['account']);
                }
                if (data.hasOwnProperty('cardnumber')) {
                    obj['cardnumber'] = _ApiClient2.default.convertToType(data['cardnumber'], 'String');
                }
                if (data.hasOwnProperty('created')) {
                    obj['created'] = _ApiClient2.default.convertToType(data['created'], 'Date');
                }
            }
            return obj;
        }

        /**
        * Object of loyalty card
        * @member {String} object
        */

        /**
        * Id of loyalty card
        * @member {String} id
        */

        /**
        * Loyalty card account
        * @member {module:model/LoyaltyCardsDTOAccount} account
        */

        /**
        * Loyalty card number
        * @member {String} cardnumber
        */

        /**
        * Creation date
        * @member {Date} created
        */

    }]);

    return LoyaltyCardsProductModel;
}();

exports.default = LoyaltyCardsProductModel;
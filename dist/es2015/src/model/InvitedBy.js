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
* The InvitedBy model module.
* @module model/InvitedBy
*/
var InvitedBy = function () {
    /**
    * Constructs a new <code>InvitedBy</code>.
    * @alias module:model/InvitedBy
    * @class
    */

    function InvitedBy() {
        _classCallCheck(this, InvitedBy);

        this.object = undefined;
        this.id = undefined;
        this.invited = undefined;
    }

    /**
    * Constructs a <code>InvitedBy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvitedBy} obj Optional instance to populate.
    * @return {module:model/InvitedBy} The populated <code>InvitedBy</code> instance.
    */


    _createClass(InvitedBy, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new InvitedBy();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('invited')) {
                    obj['invited'] = _ApiClient2.default.convertToType(data['invited'], 'String');
                }
            }
            return obj;
        }

        /**
        * Object of invited by
        * @member {String} object
        */

        /**
        * Id of invited by
        * @member {String} id
        */

        /**
        * Invited
        * @member {String} invited
        */

    }]);

    return InvitedBy;
}();

exports.default = InvitedBy;
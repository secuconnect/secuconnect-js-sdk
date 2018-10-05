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
* The GeneralStoresDTOReason model module.
* @module model/GeneralStoresDTOReason
*/
var GeneralStoresDTOReason = function () {
    /**
    * Constructs a new <code>GeneralStoresDTOReason</code>.
    * @alias module:model/GeneralStoresDTOReason
    * @class
    */

    function GeneralStoresDTOReason() {
        _classCallCheck(this, GeneralStoresDTOReason);

        this.reason = undefined;
    }

    /**
    * Constructs a <code>GeneralStoresDTOReason</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralStoresDTOReason} obj Optional instance to populate.
    * @return {module:model/GeneralStoresDTOReason} The populated <code>GeneralStoresDTOReason</code> instance.
    */


    _createClass(GeneralStoresDTOReason, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralStoresDTOReason();

                if (data.hasOwnProperty('reason')) {
                    obj['reason'] = _ApiClient2.default.convertToType(data['reason'], 'String');
                }
            }
            return obj;
        }

        /**
        * Reason
        * @member {String} reason
        */

    }]);

    return GeneralStoresDTOReason;
}();

exports.default = GeneralStoresDTOReason;
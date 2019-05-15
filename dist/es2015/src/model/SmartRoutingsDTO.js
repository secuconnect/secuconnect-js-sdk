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
 * The SmartRoutingsDTO model module.
 * @module model/SmartRoutingsDTO
 */
var SmartRoutingsDTO = function () {
    /**
     * Constructs a new <code>SmartRoutingsDTO</code>.
     * @alias module:model/SmartRoutingsDTO
     * @class
     */

    function SmartRoutingsDTO() {
        _classCallCheck(this, SmartRoutingsDTO);

        this.store = undefined;
        this.description = undefined;
    }

    /**
    * Constructs a <code>SmartRoutingsDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsDTO} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsDTO} The populated <code>SmartRoutingsDTO</code> instance.
    */


    _createClass(SmartRoutingsDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartRoutingsDTO();

                if (data.hasOwnProperty('store')) {
                    obj['store'] = _ApiClient2.default.convertToType(data['store'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
            }
            return obj;
        }

        /**
         * General store ID
         * @member {String} store
         */


        /**
         * Description
         * @member {String} description
         */

    }]);

    return SmartRoutingsDTO;
}();

exports.default = SmartRoutingsDTO;
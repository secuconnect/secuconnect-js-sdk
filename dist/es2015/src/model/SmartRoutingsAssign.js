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
 * The SmartRoutingsAssign model module.
 * @module model/SmartRoutingsAssign
 */
var SmartRoutingsAssign = function () {
    /**
     * Constructs a new <code>SmartRoutingsAssign</code>.
     * @alias module:model/SmartRoutingsAssign
     * @class
     */

    function SmartRoutingsAssign() {
        _classCallCheck(this, SmartRoutingsAssign);

        this.object = undefined;
        this.id = undefined;
        this.type = undefined;
        this.description = undefined;
        this.priority = undefined;
    }

    /**
    * Constructs a <code>SmartRoutingsAssign</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingsAssign} obj Optional instance to populate.
    * @return {module:model/SmartRoutingsAssign} The populated <code>SmartRoutingsAssign</code> instance.
    */


    _createClass(SmartRoutingsAssign, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartRoutingsAssign();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('priority')) {
                    obj['priority'] = _ApiClient2.default.convertToType(data['priority'], 'Number');
                }
            }
            return obj;
        }

        /**
         * Object of smart routing assign
         * @member {String} object
         */


        /**
         * Id of smart routing assign
         * @member {String} id
         */


        /**
         * Type
         * @member {String} type
         */


        /**
         * Description
         * @member {String} description
         */


        /**
         * Priority
         * @member {Number} priority
         */

    }]);

    return SmartRoutingsAssign;
}();

exports.default = SmartRoutingsAssign;
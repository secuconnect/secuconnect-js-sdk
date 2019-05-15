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
 * The SmartRoutingPriority model module.
 * @module model/SmartRoutingPriority
 */
var SmartRoutingPriority = function () {
    /**
     * Constructs a new <code>SmartRoutingPriority</code>.
     * @alias module:model/SmartRoutingPriority
     * @class
     */

    function SmartRoutingPriority() {
        _classCallCheck(this, SmartRoutingPriority);

        this.priority = undefined;
    }

    /**
    * Constructs a <code>SmartRoutingPriority</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SmartRoutingPriority} obj Optional instance to populate.
    * @return {module:model/SmartRoutingPriority} The populated <code>SmartRoutingPriority</code> instance.
    */


    _createClass(SmartRoutingPriority, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new SmartRoutingPriority();

                if (data.hasOwnProperty('priority')) {
                    obj['priority'] = _ApiClient2.default.convertToType(data['priority'], 'Number');
                }
            }
            return obj;
        }

        /**
         * Priority
         * @member {Number} priority
         */

    }]);

    return SmartRoutingPriority;
}();

exports.default = SmartRoutingPriority;
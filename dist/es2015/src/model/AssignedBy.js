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
 * The AssignedBy model module.
 * @module model/AssignedBy
 */
var AssignedBy = function () {
    /**
     * Constructs a new <code>AssignedBy</code>.
     * @alias module:model/AssignedBy
     * @class
     */

    function AssignedBy() {
        _classCallCheck(this, AssignedBy);

        this.object = undefined;
        this.id = undefined;
        this.owner = undefined;
    }

    /**
    * Constructs a <code>AssignedBy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssignedBy} obj Optional instance to populate.
    * @return {module:model/AssignedBy} The populated <code>AssignedBy</code> instance.
    */


    _createClass(AssignedBy, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AssignedBy();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('owner')) {
                    obj['owner'] = _ApiClient2.default.convertToType(data['owner'], 'Boolean');
                }
            }
            return obj;
        }

        /**
         * Object of assigned by
         * @member {String} object
         */


        /**
         * Id of assigned by
         * @member {String} id
         */


        /**
         * Owner
         * @member {Boolean} owner
         */

    }]);

    return AssignedBy;
}();

exports.default = AssignedBy;
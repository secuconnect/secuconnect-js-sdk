'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _PrepaidMappingZvtItem = require('./PrepaidMappingZvtItem');

var _PrepaidMappingZvtItem2 = _interopRequireDefault(_PrepaidMappingZvtItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PrepaidMappingZvt model module.
 * @module model/PrepaidMappingZvt
 */
var PrepaidMappingZvt = function () {
    /**
     * Constructs a new <code>PrepaidMappingZvt</code>.
     * @alias module:model/PrepaidMappingZvt
     * @class
     */

    function PrepaidMappingZvt() {
        _classCallCheck(this, PrepaidMappingZvt);

        this.item = undefined;
        this.vtc_id = undefined;
    }

    /**
    * Constructs a <code>PrepaidMappingZvt</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidMappingZvt} obj Optional instance to populate.
    * @return {module:model/PrepaidMappingZvt} The populated <code>PrepaidMappingZvt</code> instance.
    */


    _createClass(PrepaidMappingZvt, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidMappingZvt();

                if (data.hasOwnProperty('item')) {
                    obj['item'] = _PrepaidMappingZvtItem2.default.constructFromObject(data['item']);
                }
                if (data.hasOwnProperty('vtc_id')) {
                    obj['vtc_id'] = _ApiClient2.default.convertToType(data['vtc_id'], 'String');
                }
            }
            return obj;
        }

        /**
         * @member {module:model/PrepaidMappingZvtItem} item
         */


        /**
         * Vtc id
         * @member {String} vtc_id
         */

    }]);

    return PrepaidMappingZvt;
}();

exports.default = PrepaidMappingZvt;
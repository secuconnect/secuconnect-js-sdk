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
 * The PrepaidMappingZvtItem model module.
 * @module model/PrepaidMappingZvtItem
 */
var PrepaidMappingZvtItem = function () {
    /**
     * Constructs a new <code>PrepaidMappingZvtItem</code>.
     * Prepaid item
     * @alias module:model/PrepaidMappingZvtItem
     * @class
     */

    function PrepaidMappingZvtItem() {
        _classCallCheck(this, PrepaidMappingZvtItem);

        this.id = undefined;
    }

    /**
    * Constructs a <code>PrepaidMappingZvtItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidMappingZvtItem} obj Optional instance to populate.
    * @return {module:model/PrepaidMappingZvtItem} The populated <code>PrepaidMappingZvtItem</code> instance.
    */


    _createClass(PrepaidMappingZvtItem, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidMappingZvtItem();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'Number');
                }
            }
            return obj;
        }

        /**
         * prepaid item id
         * @member {Number} id
         */

    }]);

    return PrepaidMappingZvtItem;
}();

exports.default = PrepaidMappingZvtItem;
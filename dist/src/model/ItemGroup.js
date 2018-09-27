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
* The ItemGroup model module.
* @module model/ItemGroup
*/
var ItemGroup = function () {
    /**
    * Constructs a new <code>ItemGroup</code>.
    * @alias module:model/ItemGroup
    * @class
    */

    function ItemGroup() {
        _classCallCheck(this, ItemGroup);

        this.object = undefined;
        this.id = undefined;
        this.description = undefined;
        this.logo = undefined;
        this.enabled = undefined;
    }

    /**
    * Constructs a <code>ItemGroup</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ItemGroup} obj Optional instance to populate.
    * @return {module:model/ItemGroup} The populated <code>ItemGroup</code> instance.
    */


    _createClass(ItemGroup, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ItemGroup();

                if (data.hasOwnProperty('object')) {
                    obj['object'] = _ApiClient2.default.convertToType(data['object'], 'String');
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('enabled')) {
                    obj['enabled'] = _ApiClient2.default.convertToType(data['enabled'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * Object of item group
        * @member {String} object
        */

        /**
        * Id of item group
        * @member {String} id
        */

        /**
        * Description
        * @member {String} description
        */

        /**
        * Logo
        * @member {String} logo
        */

        /**
        * Enabled
        * @member {Boolean} enabled
        */

    }]);

    return ItemGroup;
}();

exports.default = ItemGroup;
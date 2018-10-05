'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _DocumentUploadsBaseProductModel = require('./DocumentUploadsBaseProductModel');

var _DocumentUploadsBaseProductModel2 = _interopRequireDefault(_DocumentUploadsBaseProductModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The DocumentUploadsProductModel model module.
* @module model/DocumentUploadsProductModel
*/
var DocumentUploadsProductModel = function () {
    /**
    * Constructs a new <code>DocumentUploadsProductModel</code>.
    * @alias module:model/DocumentUploadsProductModel
    * @class
    * @implements module:model/DocumentUploadsBaseProductModel
    */

    function DocumentUploadsProductModel() {
        _classCallCheck(this, DocumentUploadsProductModel);

        this.type = undefined;
        this.name = undefined;
        this.size = undefined;
        this.object = undefined;
        this.id = undefined;
        this.created = undefined;


        _DocumentUploadsBaseProductModel2.default.call(this);
    }

    /**
    * Constructs a <code>DocumentUploadsProductModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocumentUploadsProductModel} obj Optional instance to populate.
    * @return {module:model/DocumentUploadsProductModel} The populated <code>DocumentUploadsProductModel</code> instance.
    */


    _createClass(DocumentUploadsProductModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new DocumentUploadsProductModel();

                _DocumentUploadsBaseProductModel2.default.constructFromObject(data, obj);

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('size')) {
                    obj['size'] = _ApiClient2.default.convertToType(data['size'], 'Number');
                }
            }
            return obj;
        }

        /**
        * Type
        * @member {String} type
        */

        /**
        * Name
        * @member {String} name
        */

        /**
        * Size
        * @member {Number} size
        */


        // Implement DocumentUploadsBaseProductModel interface:
        /**
        * Object of document upload
        * @member {String} object
        */

        /**
            * Id of document upload
            * @member {String} id
            */

        /**
            * Created at date
            * @member {Date} created
            */

    }]);

    return DocumentUploadsProductModel;
}();

exports.default = DocumentUploadsProductModel;
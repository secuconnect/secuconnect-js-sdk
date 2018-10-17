
import ApiClient from './ApiClient';
import Authenticator from './authentication/Authenticator';
import OAuthApplicationUserCredentials from './authentication/OAuthApplicationUserCredentials';
import OAuthClientCredentials from './authentication/OAuthClientCredentials';
import OAuthDeviceCredentials from './authentication/OAuthDeviceCredentials';
import SDKCache from './cache/SDKCache';
import FileCache from './cache/FileCache';
import Address from './model/Address';
import AddressComponents from './model/AddressComponents';
import AssignedBy from './model/AssignedBy';
import BankAccountDescriptor from './model/BankAccountDescriptor';
import Contact from './model/Contact';
import DayTime from './model/DayTime';
import DocumentUploadsBaseProductModel from './model/DocumentUploadsBaseProductModel';
import DocumentUploadsDTOContent from './model/DocumentUploadsDTOContent';
import GeneralMerchantsCheckoutOptions from './model/GeneralMerchantsCheckoutOptions';
import GeneralMerchantsCheckoutOptionsCollection from './model/GeneralMerchantsCheckoutOptionsCollection';
import GeneralMerchantsCheckoutOptionsCollectionSmartDevices from './model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices';
import GeneralMerchantsCheckoutOptionsShipping from './model/GeneralMerchantsCheckoutOptionsShipping';
import GeneralMerchantsDTO from './model/GeneralMerchantsDTO';
import GeneralMerchantsLegalDetails from './model/GeneralMerchantsLegalDetails';
import GeneralMerchantsList from './model/GeneralMerchantsList';
import GeneralMerchantsProductModel from './model/GeneralMerchantsProductModel';
import GeneralMerchantsUrls from './model/GeneralMerchantsUrls';
import GeneralMerchantsUser from './model/GeneralMerchantsUser';
import GeneralStoresDTO from './model/GeneralStoresDTO';
import GeneralStoresDTOReason from './model/GeneralStoresDTOReason';
import GeneralStoresDTOType from './model/GeneralStoresDTOType';
import GeneralStoresList from './model/GeneralStoresList';
import GeneralStoresProductModel from './model/GeneralStoresProductModel';
import GeoAddress from './model/GeoAddress';
import GeoAddressGeometry from './model/GeoAddressGeometry';
import InvitedBy from './model/InvitedBy';
import ItemGroup from './model/ItemGroup';
import LoyaltyCardgroupsDTO from './model/LoyaltyCardgroupsDTO';
import LoyaltyCardgroupsDTOCheckPasscodeEnabled from './model/LoyaltyCardgroupsDTOCheckPasscodeEnabled';
import LoyaltyCardgroupsDTOMerchant from './model/LoyaltyCardgroupsDTOMerchant';
import LoyaltyCardgroupsList from './model/LoyaltyCardgroupsList';
import LoyaltyCardgroupsProductModel from './model/LoyaltyCardgroupsProductModel';
import LoyaltyCardsDTOAccount from './model/LoyaltyCardsDTOAccount';
import LoyaltyCardsList from './model/LoyaltyCardsList';
import LoyaltyCardsProductModel from './model/LoyaltyCardsProductModel';
import LoyaltyCustomersContactDTO from './model/LoyaltyCustomersContactDTO';
import LoyaltyCustomersDTO from './model/LoyaltyCustomersDTO';
import LoyaltyCustomersList from './model/LoyaltyCustomersList';
import LoyaltyCustomersPaymentContainerModel from './model/LoyaltyCustomersPaymentContainerModel';
import LoyaltyCustomersProductModel from './model/LoyaltyCustomersProductModel';
import LoyaltyCustomersRemoved from './model/LoyaltyCustomersRemoved';
import LoyaltyDTOMerchant from './model/LoyaltyDTOMerchant';
import LoyaltyDTOStore from './model/LoyaltyDTOStore';
import LoyaltyMerchantcardsDTO from './model/LoyaltyMerchantcardsDTO';
import LoyaltyMerchantcardsDTOCardsAmount from './model/LoyaltyMerchantcardsDTOCardsAmount';
import LoyaltyMerchantcardsDTOCheckPasscode from './model/LoyaltyMerchantcardsDTOCheckPasscode';
import LoyaltyMerchantcardsDTOCsc from './model/LoyaltyMerchantcardsDTOCsc';
import LoyaltyMerchantcardsDTOLock from './model/LoyaltyMerchantcardsDTOLock';
import LoyaltyMerchantcardsDTOPaymentContainer from './model/LoyaltyMerchantcardsDTOPaymentContainer';
import LoyaltyMerchantcardsDTOResetPasscode from './model/LoyaltyMerchantcardsDTOResetPasscode';
import LoyaltyMerchantcardsDTOTransaction from './model/LoyaltyMerchantcardsDTOTransaction';
import LoyaltyMerchantcardsDTOValidateMerchantCard from './model/LoyaltyMerchantcardsDTOValidateMerchantCard';
import LoyaltyMerchantcardsList from './model/LoyaltyMerchantcardsList';
import LoyaltyMerchantcardsProductModel from './model/LoyaltyMerchantcardsProductModel';
import LoyaltyMerchantcardsValidateMerchantCard from './model/LoyaltyMerchantcardsValidateMerchantCard';
import LoyaltyStoregroupsDTO from './model/LoyaltyStoregroupsDTO';
import LoyaltyStoregroupsDTOStoresAddressComponents from './model/LoyaltyStoregroupsDTOStoresAddressComponents';
import LoyaltyStoregroupsList from './model/LoyaltyStoregroupsList';
import LoyaltyStoregroupsProductModel from './model/LoyaltyStoregroupsProductModel';
import OpenHours from './model/OpenHours';
import ParentModel from './model/ParentModel';
import PaymentContainerMandate from './model/PaymentContainerMandate';
import PaymentContainersDTO from './model/PaymentContainersDTO';
import PaymentContainersDTOCustomer from './model/PaymentContainersDTOCustomer';
import PaymentContainersDTOPrivate from './model/PaymentContainersDTOPrivate';
import PaymentContainersList from './model/PaymentContainersList';
import PaymentContainersProductModel from './model/PaymentContainersProductModel';
import PaymentContractsDTO from './model/PaymentContractsDTO';
import PaymentContractsDTOClone from './model/PaymentContractsDTOClone';
import PaymentContractsDTOIFrameOpts from './model/PaymentContractsDTOIFrameOpts';
import PaymentContractsDTORequestId from './model/PaymentContractsDTORequestId';
import PaymentContractsList from './model/PaymentContractsList';
import PaymentContractsProductModel from './model/PaymentContractsProductModel';
import PaymentContractsRequestIdResult from './model/PaymentContractsRequestIdResult';
import PaymentCustomersDTO from './model/PaymentCustomersDTO';
import PaymentCustomersList from './model/PaymentCustomersList';
import PaymentCustomersProductModel from './model/PaymentCustomersProductModel';
import PaymentInformation from './model/PaymentInformation';
import PaymentTransactionsCancelList from './model/PaymentTransactionsCancelList';
import PaymentTransactionsList from './model/PaymentTransactionsList';
import PaymentTransactionsProductModel from './model/PaymentTransactionsProductModel';
import PaymentTransactionsProductModelCustomer from './model/PaymentTransactionsProductModelCustomer';
import PaymentTransactionsProductModelDetails from './model/PaymentTransactionsProductModelDetails';
import PaymentTransactionsProductModelMerchant from './model/PaymentTransactionsProductModelMerchant';
import PaymentTransactionsShippingUrl from './model/PaymentTransactionsShippingUrl';
import PrepaidItemsList from './model/PrepaidItemsList';
import PrepaidItemsProductModel from './model/PrepaidItemsProductModel';
import PrepaidSalesItem from './model/PrepaidSalesItem';
import PrepaidSalesProductModel from './model/PrepaidSalesProductModel';
import PrepaidSalesSmartDevice from './model/PrepaidSalesSmartDevice';
import ProductExceptionPayload from './model/ProductExceptionPayload';
import ProductInstanceID from './model/ProductInstanceID';
import ProductInstanceUID from './model/ProductInstanceUID';
import ReceiptType from './model/ReceiptType';
import ReceiptValue from './model/ReceiptValue';
import SecupayBasketItem from './model/SecupayBasketItem';
import SecupaySubTransactionProductModel from './model/SecupaySubTransactionProductModel';
import SecupayTransactionCancelDTO from './model/SecupayTransactionCancelDTO';
import SecupayTransactionCaptureDTO from './model/SecupayTransactionCaptureDTO';
import SecupayTransactionDTOExternalInvoicePdf from './model/SecupayTransactionDTOExternalInvoicePdf';
import SecupayTransactionExternalInvoicePdf from './model/SecupayTransactionExternalInvoicePdf';
import SecupayTransactionExternalInvoicePdfDocument from './model/SecupayTransactionExternalInvoicePdfDocument';
import SecupayTransactionProductDTO from './model/SecupayTransactionProductDTO';
import SecupayTransactionProductDTOExperience from './model/SecupayTransactionProductDTOExperience';
import SecupayTransactionProductDTOOptData from './model/SecupayTransactionProductDTOOptData';
import SecupayTransactionProductDTORedirectUrl from './model/SecupayTransactionProductDTORedirectUrl';
import SecupayTransactionProductDTOSubscription from './model/SecupayTransactionProductDTOSubscription';
import SecupayTransactionProductModel from './model/SecupayTransactionProductModel';
import SecupayTransactionProductModelRedirectUrl from './model/SecupayTransactionProductModelRedirectUrl';
import SecupayTransactionProductModelTransferAccount from './model/SecupayTransactionProductModelTransferAccount';
import SecupayTransactionProductModelUsedPaymentInstrument from './model/SecupayTransactionProductModelUsedPaymentInstrument';
import SecupayTransactionReverseAccrualDTO from './model/SecupayTransactionReverseAccrualDTO';
import SecupayTransactionSetShippingInformationDTO from './model/SecupayTransactionSetShippingInformationDTO';
import SecupayTransactionUpdateBasketDTO from './model/SecupayTransactionUpdateBasketDTO';
import SmartDeviceProductsEnabled from './model/SmartDeviceProductsEnabled';
import SmartDeviceProductsPrepaid from './model/SmartDeviceProductsPrepaid';
import SmartDevicesDTO from './model/SmartDevicesDTO';
import SmartDevicesDTOPrepaidTid from './model/SmartDevicesDTOPrepaidTid';
import SmartDevicesDTOSecubaseConfig from './model/SmartDevicesDTOSecubaseConfig';
import SmartDevicesDevice from './model/SmartDevicesDevice';
import SmartDevicesList from './model/SmartDevicesList';
import SmartDevicesList1 from './model/SmartDevicesList1';
import SmartDevicesProductModel from './model/SmartDevicesProductModel';
import SmartDevicesProducts from './model/SmartDevicesProducts';
import SmartDevicesSecubaseConfig from './model/SmartDevicesSecubaseConfig';
import SmartDevicesSecubaseConfigLogging from './model/SmartDevicesSecubaseConfigLogging';
import SmartDevicesSecubaseConfigLoggingFileNet from './model/SmartDevicesSecubaseConfigLoggingFileNet';
import SmartTransactionsBasket from './model/SmartTransactionsBasket';
import SmartTransactionsBasketInfo from './model/SmartTransactionsBasketInfo';
import SmartTransactionsBasketProduct from './model/SmartTransactionsBasketProduct';
import SmartTransactionsBasketProductGroup from './model/SmartTransactionsBasketProductGroup';
import SmartTransactionsBasketText from './model/SmartTransactionsBasketText';
import SmartTransactionsBonusProducts from './model/SmartTransactionsBonusProducts';
import SmartTransactionsCheckin from './model/SmartTransactionsCheckin';
import SmartTransactionsDTO from './model/SmartTransactionsDTO';
import SmartTransactionsIdent from './model/SmartTransactionsIdent';
import SmartTransactionsList from './model/SmartTransactionsList';
import SmartTransactionsPickupOptions from './model/SmartTransactionsPickupOptions';
import SmartTransactionsPreTransactionModel from './model/SmartTransactionsPreTransactionModel';
import SmartTransactionsProductModel from './model/SmartTransactionsProductModel';
import SmartTransactionsReceipt from './model/SmartTransactionsReceipt';
import SmartTransactionsReceiptValue from './model/SmartTransactionsReceiptValue';
import Store from './model/Store';
import VirtualTerminalData from './model/VirtualTerminalData';
import DocumentUploadsProductModel from './model/DocumentUploadsProductModel';
import LoyaltyMerchantcardsDTONewPasscode from './model/LoyaltyMerchantcardsDTONewPasscode';
import LoyaltyMerchantcardsProductWithReceiptModel from './model/LoyaltyMerchantcardsProductWithReceiptModel';
import ReceiptTypeValue from './model/ReceiptTypeValue';
import SmartTransactionsMerchant from './model/SmartTransactionsMerchant';
import DocumentUploadsApi from './api/DocumentUploadsApi';
import GeneralMerchantsApi from './api/GeneralMerchantsApi';
import GeneralStoresApi from './api/GeneralStoresApi';
import LoyaltyCardgroupsApi from './api/LoyaltyCardgroupsApi';
import LoyaltyCardsApi from './api/LoyaltyCardsApi';
import LoyaltyCustomersApi from './api/LoyaltyCustomersApi';
import LoyaltyMerchantcardsApi from './api/LoyaltyMerchantcardsApi';
import LoyaltySalesApi from './api/LoyaltySalesApi';
import LoyaltyStoregroupsApi from './api/LoyaltyStoregroupsApi';
import PaymentContainersApi from './api/PaymentContainersApi';
import PaymentContractsApi from './api/PaymentContractsApi';
import PaymentCustomersApi from './api/PaymentCustomersApi';
import PaymentSecupayCreditcardsApi from './api/PaymentSecupayCreditcardsApi';
import PaymentSecupayDebitsApi from './api/PaymentSecupayDebitsApi';
import PaymentSecupayInvoicesApi from './api/PaymentSecupayInvoicesApi';
import PaymentSecupayPrepaysApi from './api/PaymentSecupayPrepaysApi';
import PaymentTransactionsApi from './api/PaymentTransactionsApi';
import PrepaidItemsApi from './api/PrepaidItemsApi';
import SmartDevicesApi from './api/SmartDevicesApi';
import SmartTransactionsApi from './api/SmartTransactionsApi';
import StompClient from './stomp/StompClient';
import StompSmartTransactionsApi from './stomp/api/StompSmartTransactionsApi';
import Environments from './stomp/StompGlobals';
import FrameCommands from './stomp/StompGlobals';
import Frame from './stomp/frame/Frame';
import Stomp from './stomp/main/Stomp';
import BrowserSocket from './stomp/socket/BrowserSocket';
import NodeSocket from './stomp/socket/NodeSocket';
import SocketProvider from './stomp/socket/SocketProvider';

/**
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SecuconnectJsSdk = require('index'); // See note below*.
* var xxxSvc = new SecuconnectJsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SecuconnectJsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SecuconnectJsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SecuconnectJsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Authenticator constructor.
     * @property {module:Authenticator}
     */
    Authenticator,

    /**
     * The OAuthApplicationUserCredentials constructor.
     * @property {module:OAuthApplicationUserCredentials}
     */
    OAuthApplicationUserCredentials,

    /**
     * The OAuthClientCredentials constructor.
     * @property {module:OAuthClientCredentials}
     */
    OAuthClientCredentials,

    /**
     * The OAuthDeviceCredentials constructor.
     * @property {module:OAuthDeviceCredentials}
     */
    OAuthDeviceCredentials,

    /**
    * The SDKCache constructor.
    * @property {module:cache/SDKCache}
    */
    SDKCache,

    /**
    * The FileCache constructor.
    * @property {module:cache/FileCache}
    */
    FileCache,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The AddressComponents model constructor.
     * @property {module:model/AddressComponents}
     */
    AddressComponents,

    /**
     * The AssignedBy model constructor.
     * @property {module:model/AssignedBy}
     */
    AssignedBy,

    /**
     * The BankAccountDescriptor model constructor.
     * @property {module:model/BankAccountDescriptor}
     */
    BankAccountDescriptor,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The DayTime model constructor.
     * @property {module:model/DayTime}
     */
    DayTime,

    /**
     * The DocumentUploadsBaseProductModel model constructor.
     * @property {module:model/DocumentUploadsBaseProductModel}
     */
    DocumentUploadsBaseProductModel,

    /**
     * The DocumentUploadsDTOContent model constructor.
     * @property {module:model/DocumentUploadsDTOContent}
     */
    DocumentUploadsDTOContent,

    /**
     * The GeneralMerchantsCheckoutOptions model constructor.
     * @property {module:model/GeneralMerchantsCheckoutOptions}
     */
    GeneralMerchantsCheckoutOptions,

    /**
     * The GeneralMerchantsCheckoutOptionsCollection model constructor.
     * @property {module:model/GeneralMerchantsCheckoutOptionsCollection}
     */
    GeneralMerchantsCheckoutOptionsCollection,

    /**
     * The GeneralMerchantsCheckoutOptionsCollectionSmartDevices model constructor.
     * @property {module:model/GeneralMerchantsCheckoutOptionsCollectionSmartDevices}
     */
    GeneralMerchantsCheckoutOptionsCollectionSmartDevices,

    /**
     * The GeneralMerchantsCheckoutOptionsShipping model constructor.
     * @property {module:model/GeneralMerchantsCheckoutOptionsShipping}
     */
    GeneralMerchantsCheckoutOptionsShipping,

    /**
     * The GeneralMerchantsDTO model constructor.
     * @property {module:model/GeneralMerchantsDTO}
     */
    GeneralMerchantsDTO,

    /**
     * The GeneralMerchantsLegalDetails model constructor.
     * @property {module:model/GeneralMerchantsLegalDetails}
     */
    GeneralMerchantsLegalDetails,

    /**
     * The GeneralMerchantsList model constructor.
     * @property {module:model/GeneralMerchantsList}
     */
    GeneralMerchantsList,

    /**
     * The GeneralMerchantsProductModel model constructor.
     * @property {module:model/GeneralMerchantsProductModel}
     */
    GeneralMerchantsProductModel,

    /**
     * The GeneralMerchantsUrls model constructor.
     * @property {module:model/GeneralMerchantsUrls}
     */
    GeneralMerchantsUrls,

    /**
     * The GeneralMerchantsUser model constructor.
     * @property {module:model/GeneralMerchantsUser}
     */
    GeneralMerchantsUser,

    /**
     * The GeneralStoresDTO model constructor.
     * @property {module:model/GeneralStoresDTO}
     */
    GeneralStoresDTO,

    /**
     * The GeneralStoresDTOReason model constructor.
     * @property {module:model/GeneralStoresDTOReason}
     */
    GeneralStoresDTOReason,

    /**
     * The GeneralStoresDTOType model constructor.
     * @property {module:model/GeneralStoresDTOType}
     */
    GeneralStoresDTOType,

    /**
     * The GeneralStoresList model constructor.
     * @property {module:model/GeneralStoresList}
     */
    GeneralStoresList,

    /**
     * The GeneralStoresProductModel model constructor.
     * @property {module:model/GeneralStoresProductModel}
     */
    GeneralStoresProductModel,

    /**
     * The GeoAddress model constructor.
     * @property {module:model/GeoAddress}
     */
    GeoAddress,

    /**
     * The GeoAddressGeometry model constructor.
     * @property {module:model/GeoAddressGeometry}
     */
    GeoAddressGeometry,

    /**
     * The InvitedBy model constructor.
     * @property {module:model/InvitedBy}
     */
    InvitedBy,

    /**
     * The ItemGroup model constructor.
     * @property {module:model/ItemGroup}
     */
    ItemGroup,

    /**
     * The LoyaltyCardgroupsDTO model constructor.
     * @property {module:model/LoyaltyCardgroupsDTO}
     */
    LoyaltyCardgroupsDTO,

    /**
     * The LoyaltyCardgroupsDTOCheckPasscodeEnabled model constructor.
     * @property {module:model/LoyaltyCardgroupsDTOCheckPasscodeEnabled}
     */
    LoyaltyCardgroupsDTOCheckPasscodeEnabled,

    /**
     * The LoyaltyCardgroupsDTOMerchant model constructor.
     * @property {module:model/LoyaltyCardgroupsDTOMerchant}
     */
    LoyaltyCardgroupsDTOMerchant,

    /**
     * The LoyaltyCardgroupsList model constructor.
     * @property {module:model/LoyaltyCardgroupsList}
     */
    LoyaltyCardgroupsList,

    /**
     * The LoyaltyCardgroupsProductModel model constructor.
     * @property {module:model/LoyaltyCardgroupsProductModel}
     */
    LoyaltyCardgroupsProductModel,

    /**
     * The LoyaltyCardsDTOAccount model constructor.
     * @property {module:model/LoyaltyCardsDTOAccount}
     */
    LoyaltyCardsDTOAccount,

    /**
     * The LoyaltyCardsList model constructor.
     * @property {module:model/LoyaltyCardsList}
     */
    LoyaltyCardsList,

    /**
     * The LoyaltyCardsProductModel model constructor.
     * @property {module:model/LoyaltyCardsProductModel}
     */
    LoyaltyCardsProductModel,

    /**
     * The LoyaltyCustomersContactDTO model constructor.
     * @property {module:model/LoyaltyCustomersContactDTO}
     */
    LoyaltyCustomersContactDTO,

    /**
     * The LoyaltyCustomersDTO model constructor.
     * @property {module:model/LoyaltyCustomersDTO}
     */
    LoyaltyCustomersDTO,

    /**
     * The LoyaltyCustomersList model constructor.
     * @property {module:model/LoyaltyCustomersList}
     */
    LoyaltyCustomersList,

    /**
     * The LoyaltyCustomersPaymentContainerModel model constructor.
     * @property {module:model/LoyaltyCustomersPaymentContainerModel}
     */
    LoyaltyCustomersPaymentContainerModel,

    /**
     * The LoyaltyCustomersProductModel model constructor.
     * @property {module:model/LoyaltyCustomersProductModel}
     */
    LoyaltyCustomersProductModel,

    /**
     * The LoyaltyCustomersRemoved model constructor.
     * @property {module:model/LoyaltyCustomersRemoved}
     */
    LoyaltyCustomersRemoved,

    /**
     * The LoyaltyDTOMerchant model constructor.
     * @property {module:model/LoyaltyDTOMerchant}
     */
    LoyaltyDTOMerchant,

    /**
     * The LoyaltyDTOStore model constructor.
     * @property {module:model/LoyaltyDTOStore}
     */
    LoyaltyDTOStore,

    /**
     * The LoyaltyMerchantcardsDTO model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTO}
     */
    LoyaltyMerchantcardsDTO,

    /**
     * The LoyaltyMerchantcardsDTOCardsAmount model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOCardsAmount}
     */
    LoyaltyMerchantcardsDTOCardsAmount,

    /**
     * The LoyaltyMerchantcardsDTOCheckPasscode model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOCheckPasscode}
     */
    LoyaltyMerchantcardsDTOCheckPasscode,

    /**
     * The LoyaltyMerchantcardsDTOCsc model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOCsc}
     */
    LoyaltyMerchantcardsDTOCsc,

    /**
     * The LoyaltyMerchantcardsDTOLock model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOLock}
     */
    LoyaltyMerchantcardsDTOLock,

    /**
     * The LoyaltyMerchantcardsDTOPaymentContainer model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOPaymentContainer}
     */
    LoyaltyMerchantcardsDTOPaymentContainer,

    /**
     * The LoyaltyMerchantcardsDTOResetPasscode model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOResetPasscode}
     */
    LoyaltyMerchantcardsDTOResetPasscode,

    /**
     * The LoyaltyMerchantcardsDTOTransaction model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOTransaction}
     */
    LoyaltyMerchantcardsDTOTransaction,

    /**
     * The LoyaltyMerchantcardsDTOValidateMerchantCard model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTOValidateMerchantCard}
     */
    LoyaltyMerchantcardsDTOValidateMerchantCard,

    /**
     * The LoyaltyMerchantcardsList model constructor.
     * @property {module:model/LoyaltyMerchantcardsList}
     */
    LoyaltyMerchantcardsList,

    /**
     * The LoyaltyMerchantcardsProductModel model constructor.
     * @property {module:model/LoyaltyMerchantcardsProductModel}
     */
    LoyaltyMerchantcardsProductModel,

    /**
     * The LoyaltyMerchantcardsValidateMerchantCard model constructor.
     * @property {module:model/LoyaltyMerchantcardsValidateMerchantCard}
     */
    LoyaltyMerchantcardsValidateMerchantCard,

    /**
     * The LoyaltyStoregroupsDTO model constructor.
     * @property {module:model/LoyaltyStoregroupsDTO}
     */
    LoyaltyStoregroupsDTO,

    /**
     * The LoyaltyStoregroupsDTOStoresAddressComponents model constructor.
     * @property {module:model/LoyaltyStoregroupsDTOStoresAddressComponents}
     */
    LoyaltyStoregroupsDTOStoresAddressComponents,

    /**
     * The LoyaltyStoregroupsList model constructor.
     * @property {module:model/LoyaltyStoregroupsList}
     */
    LoyaltyStoregroupsList,

    /**
     * The LoyaltyStoregroupsProductModel model constructor.
     * @property {module:model/LoyaltyStoregroupsProductModel}
     */
    LoyaltyStoregroupsProductModel,

    /**
     * The OpenHours model constructor.
     * @property {module:model/OpenHours}
     */
    OpenHours,

    /**
     * The ParentModel model constructor.
     * @property {module:model/ParentModel}
     */
    ParentModel,

    /**
     * The PaymentContainerMandate model constructor.
     * @property {module:model/PaymentContainerMandate}
     */
    PaymentContainerMandate,

    /**
     * The PaymentContainersDTO model constructor.
     * @property {module:model/PaymentContainersDTO}
     */
    PaymentContainersDTO,

    /**
     * The PaymentContainersDTOCustomer model constructor.
     * @property {module:model/PaymentContainersDTOCustomer}
     */
    PaymentContainersDTOCustomer,

    /**
     * The PaymentContainersDTOPrivate model constructor.
     * @property {module:model/PaymentContainersDTOPrivate}
     */
    PaymentContainersDTOPrivate,

    /**
     * The PaymentContainersList model constructor.
     * @property {module:model/PaymentContainersList}
     */
    PaymentContainersList,

    /**
     * The PaymentContainersProductModel model constructor.
     * @property {module:model/PaymentContainersProductModel}
     */
    PaymentContainersProductModel,

    /**
     * The PaymentContractsDTO model constructor.
     * @property {module:model/PaymentContractsDTO}
     */
    PaymentContractsDTO,

    /**
     * The PaymentContractsDTOClone model constructor.
     * @property {module:model/PaymentContractsDTOClone}
     */
    PaymentContractsDTOClone,

    /**
     * The PaymentContractsDTOIFrameOpts model constructor.
     * @property {module:model/PaymentContractsDTOIFrameOpts}
     */
    PaymentContractsDTOIFrameOpts,

    /**
     * The PaymentContractsDTORequestId model constructor.
     * @property {module:model/PaymentContractsDTORequestId}
     */
    PaymentContractsDTORequestId,

    /**
     * The PaymentContractsList model constructor.
     * @property {module:model/PaymentContractsList}
     */
    PaymentContractsList,

    /**
     * The PaymentContractsProductModel model constructor.
     * @property {module:model/PaymentContractsProductModel}
     */
    PaymentContractsProductModel,

    /**
     * The PaymentContractsRequestIdResult model constructor.
     * @property {module:model/PaymentContractsRequestIdResult}
     */
    PaymentContractsRequestIdResult,

    /**
     * The PaymentCustomersDTO model constructor.
     * @property {module:model/PaymentCustomersDTO}
     */
    PaymentCustomersDTO,

    /**
     * The PaymentCustomersList model constructor.
     * @property {module:model/PaymentCustomersList}
     */
    PaymentCustomersList,

    /**
     * The PaymentCustomersProductModel model constructor.
     * @property {module:model/PaymentCustomersProductModel}
     */
    PaymentCustomersProductModel,

    /**
     * The PaymentInformation model constructor.
     * @property {module:model/PaymentInformation}
     */
    PaymentInformation,

    /**
     * The PaymentTransactionsCancelList model constructor.
     * @property {module:model/PaymentTransactionsCancelList}
     */
    PaymentTransactionsCancelList,

    /**
     * The PaymentTransactionsList model constructor.
     * @property {module:model/PaymentTransactionsList}
     */
    PaymentTransactionsList,

    /**
     * The PaymentTransactionsProductModel model constructor.
     * @property {module:model/PaymentTransactionsProductModel}
     */
    PaymentTransactionsProductModel,

    /**
     * The PaymentTransactionsProductModelCustomer model constructor.
     * @property {module:model/PaymentTransactionsProductModelCustomer}
     */
    PaymentTransactionsProductModelCustomer,

    /**
     * The PaymentTransactionsProductModelDetails model constructor.
     * @property {module:model/PaymentTransactionsProductModelDetails}
     */
    PaymentTransactionsProductModelDetails,

    /**
     * The PaymentTransactionsProductModelMerchant model constructor.
     * @property {module:model/PaymentTransactionsProductModelMerchant}
     */
    PaymentTransactionsProductModelMerchant,

    /**
     * The PaymentTransactionsShippingUrl model constructor.
     * @property {module:model/PaymentTransactionsShippingUrl}
     */
    PaymentTransactionsShippingUrl,

    /**
     * The PrepaidItemsList model constructor.
     * @property {module:model/PrepaidItemsList}
     */
    PrepaidItemsList,

    /**
     * The PrepaidItemsProductModel model constructor.
     * @property {module:model/PrepaidItemsProductModel}
     */
    PrepaidItemsProductModel,

    /**
     * The PrepaidSalesItem model constructor.
     * @property {module:model/PrepaidSalesItem}
     */
    PrepaidSalesItem,

    /**
     * The PrepaidSalesProductModel model constructor.
     * @property {module:model/PrepaidSalesProductModel}
     */
    PrepaidSalesProductModel,

    /**
     * The PrepaidSalesSmartDevice model constructor.
     * @property {module:model/PrepaidSalesSmartDevice}
     */
    PrepaidSalesSmartDevice,

    /**
     * The ProductExceptionPayload model constructor.
     * @property {module:model/ProductExceptionPayload}
     */
    ProductExceptionPayload,

    /**
     * The ProductInstanceID model constructor.
     * @property {module:model/ProductInstanceID}
     */
    ProductInstanceID,

    /**
     * The ProductInstanceUID model constructor.
     * @property {module:model/ProductInstanceUID}
     */
    ProductInstanceUID,

    /**
     * The ReceiptType model constructor.
     * @property {module:model/ReceiptType}
     */
    ReceiptType,

    /**
     * The ReceiptValue model constructor.
     * @property {module:model/ReceiptValue}
     */
    ReceiptValue,

    /**
     * The SecupayBasketItem model constructor.
     * @property {module:model/SecupayBasketItem}
     */
    SecupayBasketItem,

    /**
     * The SecupaySubTransactionProductModel model constructor.
     * @property {module:model/SecupaySubTransactionProductModel}
     */
    SecupaySubTransactionProductModel,

    /**
     * The SecupayTransactionCancelDTO model constructor.
     * @property {module:model/SecupayTransactionCancelDTO}
     */
    SecupayTransactionCancelDTO,

    /**
     * The SecupayTransactionCaptureDTO model constructor.
     * @property {module:model/SecupayTransactionCaptureDTO}
     */
    SecupayTransactionCaptureDTO,

    /**
     * The SecupayTransactionDTOExternalInvoicePdf model constructor.
     * @property {module:model/SecupayTransactionDTOExternalInvoicePdf}
     */
    SecupayTransactionDTOExternalInvoicePdf,

    /**
     * The SecupayTransactionExternalInvoicePdf model constructor.
     * @property {module:model/SecupayTransactionExternalInvoicePdf}
     */
    SecupayTransactionExternalInvoicePdf,

    /**
     * The SecupayTransactionExternalInvoicePdfDocument model constructor.
     * @property {module:model/SecupayTransactionExternalInvoicePdfDocument}
     */
    SecupayTransactionExternalInvoicePdfDocument,

    /**
     * The SecupayTransactionProductDTO model constructor.
     * @property {module:model/SecupayTransactionProductDTO}
     */
    SecupayTransactionProductDTO,

    /**
     * The SecupayTransactionProductDTOExperience model constructor.
     * @property {module:model/SecupayTransactionProductDTOExperience}
     */
    SecupayTransactionProductDTOExperience,

    /**
     * The SecupayTransactionProductDTOOptData model constructor.
     * @property {module:model/SecupayTransactionProductDTOOptData}
     */
    SecupayTransactionProductDTOOptData,

    /**
     * The SecupayTransactionProductDTORedirectUrl model constructor.
     * @property {module:model/SecupayTransactionProductDTORedirectUrl}
     */
    SecupayTransactionProductDTORedirectUrl,

    /**
     * The SecupayTransactionProductDTOSubscription model constructor.
     * @property {module:model/SecupayTransactionProductDTOSubscription}
     */
    SecupayTransactionProductDTOSubscription,

    /**
     * The SecupayTransactionProductModel model constructor.
     * @property {module:model/SecupayTransactionProductModel}
     */
    SecupayTransactionProductModel,

    /**
     * The SecupayTransactionProductModelRedirectUrl model constructor.
     * @property {module:model/SecupayTransactionProductModelRedirectUrl}
     */
    SecupayTransactionProductModelRedirectUrl,

    /**
     * The SecupayTransactionProductModelTransferAccount model constructor.
     * @property {module:model/SecupayTransactionProductModelTransferAccount}
     */
    SecupayTransactionProductModelTransferAccount,

    /**
     * The SecupayTransactionProductModelUsedPaymentInstrument model constructor.
     * @property {module:model/SecupayTransactionProductModelUsedPaymentInstrument}
     */
    SecupayTransactionProductModelUsedPaymentInstrument,

    /**
     * The SecupayTransactionReverseAccrualDTO model constructor.
     * @property {module:model/SecupayTransactionReverseAccrualDTO}
     */
    SecupayTransactionReverseAccrualDTO,

    /**
     * The SecupayTransactionSetShippingInformationDTO model constructor.
     * @property {module:model/SecupayTransactionSetShippingInformationDTO}
     */
    SecupayTransactionSetShippingInformationDTO,

    /**
     * The SecupayTransactionUpdateBasketDTO model constructor.
     * @property {module:model/SecupayTransactionUpdateBasketDTO}
     */
    SecupayTransactionUpdateBasketDTO,

    /**
     * The SmartDeviceProductsEnabled model constructor.
     * @property {module:model/SmartDeviceProductsEnabled}
     */
    SmartDeviceProductsEnabled,

    /**
     * The SmartDeviceProductsPrepaid model constructor.
     * @property {module:model/SmartDeviceProductsPrepaid}
     */
    SmartDeviceProductsPrepaid,

    /**
     * The SmartDevicesDTO model constructor.
     * @property {module:model/SmartDevicesDTO}
     */
    SmartDevicesDTO,

    /**
     * The SmartDevicesDTOPrepaidTid model constructor.
     * @property {module:model/SmartDevicesDTOPrepaidTid}
     */
    SmartDevicesDTOPrepaidTid,

    /**
     * The SmartDevicesDTOSecubaseConfig model constructor.
     * @property {module:model/SmartDevicesDTOSecubaseConfig}
     */
    SmartDevicesDTOSecubaseConfig,

    /**
     * The SmartDevicesDevice model constructor.
     * @property {module:model/SmartDevicesDevice}
     */
    SmartDevicesDevice,

    /**
     * The SmartDevicesList model constructor.
     * @property {module:model/SmartDevicesList}
     */
    SmartDevicesList,

    /**
     * The SmartDevicesList1 model constructor.
     * @property {module:model/SmartDevicesList1}
     */
    SmartDevicesList1,

    /**
     * The SmartDevicesProductModel model constructor.
     * @property {module:model/SmartDevicesProductModel}
     */
    SmartDevicesProductModel,

    /**
     * The SmartDevicesProducts model constructor.
     * @property {module:model/SmartDevicesProducts}
     */
    SmartDevicesProducts,

    /**
     * The SmartDevicesSecubaseConfig model constructor.
     * @property {module:model/SmartDevicesSecubaseConfig}
     */
    SmartDevicesSecubaseConfig,

    /**
     * The SmartDevicesSecubaseConfigLogging model constructor.
     * @property {module:model/SmartDevicesSecubaseConfigLogging}
     */
    SmartDevicesSecubaseConfigLogging,

    /**
     * The SmartDevicesSecubaseConfigLoggingFileNet model constructor.
     * @property {module:model/SmartDevicesSecubaseConfigLoggingFileNet}
     */
    SmartDevicesSecubaseConfigLoggingFileNet,

    /**
     * The SmartTransactionsBasket model constructor.
     * @property {module:model/SmartTransactionsBasket}
     */
    SmartTransactionsBasket,

    /**
     * The SmartTransactionsBasketInfo model constructor.
     * @property {module:model/SmartTransactionsBasketInfo}
     */
    SmartTransactionsBasketInfo,

    /**
     * The SmartTransactionsBasketProduct model constructor.
     * @property {module:model/SmartTransactionsBasketProduct}
     */
    SmartTransactionsBasketProduct,

    /**
     * The SmartTransactionsBasketProductGroup model constructor.
     * @property {module:model/SmartTransactionsBasketProductGroup}
     */
    SmartTransactionsBasketProductGroup,

    /**
     * The SmartTransactionsBasketText model constructor.
     * @property {module:model/SmartTransactionsBasketText}
     */
    SmartTransactionsBasketText,

    /**
     * The SmartTransactionsBonusProducts model constructor.
     * @property {module:model/SmartTransactionsBonusProducts}
     */
    SmartTransactionsBonusProducts,

    /**
     * The SmartTransactionsCheckin model constructor.
     * @property {module:model/SmartTransactionsCheckin}
     */
    SmartTransactionsCheckin,

    /**
     * The SmartTransactionsDTO model constructor.
     * @property {module:model/SmartTransactionsDTO}
     */
    SmartTransactionsDTO,

    /**
     * The SmartTransactionsIdent model constructor.
     * @property {module:model/SmartTransactionsIdent}
     */
    SmartTransactionsIdent,

    /**
     * The SmartTransactionsList model constructor.
     * @property {module:model/SmartTransactionsList}
     */
    SmartTransactionsList,

    /**
     * The SmartTransactionsMerchant model constructor.
     * @property {module:model/SmartTransactionsMerchant}
     */
    SmartTransactionsMerchant,

    /**
     * The SmartTransactionsPickupOptions model constructor.
     * @property {module:model/SmartTransactionsPickupOptions}
     */
    SmartTransactionsPickupOptions,

    /**
     * The SmartTransactionsPreTransactionModel model constructor.
     * @property {module:model/SmartTransactionsPreTransactionModel}
     */
    SmartTransactionsPreTransactionModel,

    /**
     * The SmartTransactionsProductModel model constructor.
     * @property {module:model/SmartTransactionsProductModel}
     */
    SmartTransactionsProductModel,

    /**
     * The SmartTransactionsReceipt model constructor.
     * @property {module:model/SmartTransactionsReceipt}
     */
    SmartTransactionsReceipt,

    /**
     * The SmartTransactionsReceiptValue model constructor.
     * @property {module:model/SmartTransactionsReceiptValue}
     */
    SmartTransactionsReceiptValue,

    /**
     * The Store model constructor.
     * @property {module:model/Store}
     */
    Store,

    /**
     * The VirtualTerminalData model constructor.
     * @property {module:model/VirtualTerminalData}
     */
    VirtualTerminalData,

    /**
     * The DocumentUploadsProductModel model constructor.
     * @property {module:model/DocumentUploadsProductModel}
     */
    DocumentUploadsProductModel,

    /**
     * The LoyaltyMerchantcardsDTONewPasscode model constructor.
     * @property {module:model/LoyaltyMerchantcardsDTONewPasscode}
     */
    LoyaltyMerchantcardsDTONewPasscode,

    /**
     * The LoyaltyMerchantcardsProductWithReceiptModel model constructor.
     * @property {module:model/LoyaltyMerchantcardsProductWithReceiptModel}
     */
    LoyaltyMerchantcardsProductWithReceiptModel,

    /**
     * The ReceiptTypeValue model constructor.
     * @property {module:model/ReceiptTypeValue}
     */
    ReceiptTypeValue,

    /**
    * The DocumentUploadsApi service constructor.
    * @property {module:api/DocumentUploadsApi}
    */
    DocumentUploadsApi,

    /**
    * The GeneralMerchantsApi service constructor.
    * @property {module:api/GeneralMerchantsApi}
    */
    GeneralMerchantsApi,

    /**
    * The GeneralStoresApi service constructor.
    * @property {module:api/GeneralStoresApi}
    */
    GeneralStoresApi,

    /**
    * The LoyaltyCardgroupsApi service constructor.
    * @property {module:api/LoyaltyCardgroupsApi}
    */
    LoyaltyCardgroupsApi,

    /**
    * The LoyaltyCardsApi service constructor.
    * @property {module:api/LoyaltyCardsApi}
    */
    LoyaltyCardsApi,

    /**
    * The LoyaltyCustomersApi service constructor.
    * @property {module:api/LoyaltyCustomersApi}
    */
    LoyaltyCustomersApi,

    /**
    * The LoyaltyMerchantcardsApi service constructor.
    * @property {module:api/LoyaltyMerchantcardsApi}
    */
    LoyaltyMerchantcardsApi,

    /**
    * The LoyaltySalesApi service constructor.
    * @property {module:api/LoyaltySalesApi}
    */
    LoyaltySalesApi,

    /**
    * The LoyaltyStoregroupsApi service constructor.
    * @property {module:api/LoyaltyStoregroupsApi}
    */
    LoyaltyStoregroupsApi,

    /**
    * The PaymentContainersApi service constructor.
    * @property {module:api/PaymentContainersApi}
    */
    PaymentContainersApi,

    /**
    * The PaymentContractsApi service constructor.
    * @property {module:api/PaymentContractsApi}
    */
    PaymentContractsApi,

    /**
    * The PaymentCustomersApi service constructor.
    * @property {module:api/PaymentCustomersApi}
    */
    PaymentCustomersApi,

    /**
    * The PaymentSecupayCreditcardsApi service constructor.
    * @property {module:api/PaymentSecupayCreditcardsApi}
    */
    PaymentSecupayCreditcardsApi,

    /**
    * The PaymentSecupayDebitsApi service constructor.
    * @property {module:api/PaymentSecupayDebitsApi}
    */
    PaymentSecupayDebitsApi,

    /**
    * The PaymentSecupayInvoicesApi service constructor.
    * @property {module:api/PaymentSecupayInvoicesApi}
    */
    PaymentSecupayInvoicesApi,

    /**
    * The PaymentSecupayPrepaysApi service constructor.
    * @property {module:api/PaymentSecupayPrepaysApi}
    */
    PaymentSecupayPrepaysApi,

    /**
    * The PaymentTransactionsApi service constructor.
    * @property {module:api/PaymentTransactionsApi}
    */
    PaymentTransactionsApi,

    /**
    * The PrepaidItemsApi service constructor.
    * @property {module:api/PrepaidItemsApi}
    */
    PrepaidItemsApi,

    /**
    * The SmartDevicesApi service constructor.
    * @property {module:api/SmartDevicesApi}
    */
    SmartDevicesApi,

    /**
    * The SmartTransactionsApi service constructor.
    * @property {module:api/SmartTransactionsApi}
    */
    SmartTransactionsApi,

    StompClient,
    StompSmartTransactionsApi,
    Environments,
    FrameCommands,
    Frame,
    Stomp,
    BrowserSocket,
    NodeSocket,
    SocketProvider
};

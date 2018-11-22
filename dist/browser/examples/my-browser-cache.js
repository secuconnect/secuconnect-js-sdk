// Simple implementation SDKCache in JavaScript ES5 supported by browsers

var MyBrowserCache = function () {
};

MyBrowserCache.prototype.exists = function (key) {
    return new Promise((resolve) => {
        resolve(false);
    });
};

MyBrowserCache.prototype.isExpired = function (item) {
    return false;
};

MyBrowserCache.prototype.setItem = function (key, value) {
};

MyBrowserCache.prototype.getItem = function (key) {
    return key;
};

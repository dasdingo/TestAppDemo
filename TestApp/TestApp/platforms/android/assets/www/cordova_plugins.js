cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.msopentech.test-plugin/www/testPlugin.js",
        "id": "com.msopentech.test-plugin.testPlugin",
        "runs": true
    },
    {
        "file": "plugins/nl.x-services.plugins.flashlight/www/Flashlight.js",
        "id": "nl.x-services.plugins.flashlight.Flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.msopentech.test-plugin": "0.0.1",
    "nl.x-services.plugins.flashlight": "2.0.4"
}
// BOTTOM OF METADATA
});
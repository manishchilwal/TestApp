// Wait for the deviceready event before using any of Cordova's device APIs.
document.addEventListener('deviceready', onDeviceReady, false);

// Add event listeners for CleverTap
document.addEventListener('onCleverTapProfileSync', onCleverTapProfileSync, false);
document.addEventListener('onCleverTapProfileDidInitialize', onCleverTapProfileDidInitialize, false);
document.addEventListener('onCleverTapInAppNotificationDismissed', onCleverTapInAppNotificationDismissed, false);
document.addEventListener('onDeepLink', onDeepLink, false);
document.addEventListener('onPushNotification', onPushNotification, false);
document.addEventListener('onCleverTapInboxDidInitialize', onCleverTapInboxDidInitialize, false);
document.addEventListener('onCleverTapInboxMessagesDidUpdate', onCleverTapInboxMessagesDidUpdate, false);
document.addEventListener('onCleverTapInboxButtonClick', onCleverTapInboxButtonClick, false);
document.addEventListener('onCleverTapInAppButtonClick', onCleverTapInAppButtonClick, false);
document.addEventListener('onCleverTapFeatureFlagsDidUpdate', onCleverTapFeatureFlagsDidUpdate, false);
document.addEventListener('onCleverTapProductConfigDidInitialize', onCleverTapProductConfigDidInitialize, false);
document.addEventListener('onCleverTapProductConfigDidFetch', onCleverTapProductConfigDidFetch, false);
document.addEventListener('onCleverTapProductConfigDidActivate', onCleverTapProductConfigDidActivate, false);
document.addEventListener('onCleverTapDisplayUnitsLoaded', onCleverTapDisplayUnitsLoaded, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Initialize CleverTap
    CleverTap.notifyDeviceReady();
    CleverTap.registerPush();
    CleverTap.setDebugLevel(3);
}

// Define event handler functions
function onCleverTapProfileSync(e) {
    console.log('Profile synced:', e);
}

function onCleverTapProfileDidInitialize(e) {
    console.log('Profile initialized:', e);
}

function onCleverTapInAppNotificationDismissed(e) {
    console.log('In-app notification dismissed:', e);
}

function onDeepLink(e) {
    console.log('Deep link received:', e.deeplink);
}

function onPushNotification(e) {
    console.log('Push notification received:', JSON.stringify(e.notification));
}

function onCleverTapInboxDidInitialize() {
    CleverTap.showInbox({"navBarTitle": "My App Inbox", "tabs": ["tag1", "tag2"], "navBarColor": "#FF0000"});
}

function onCleverTapInboxMessagesDidUpdate() {
    CleverTap.getInboxMessageUnreadCount(function(val) {
        console.log("Inbox unread message count: " + val);
    });
    CleverTap.getInboxMessageCount(function(val) {
        console.log("Inbox read message count: " + val);
    });
}

function onCleverTapInAppButtonClick(e) {
    console.log("In-app button clicked:", e.customExtras);
}

function onCleverTapInboxButtonClick(e) {
    console.log("Inbox button clicked:", e.customExtras);
}

function onCleverTapFeatureFlagsDidUpdate() {
    console.log("Feature flags updated");
}

function onCleverTapProductConfigDidInitialize() {
    console.log("Product config initialized");
}

function onCleverTapProductConfigDidFetch() {
    console.log("Product config fetched");
}

function onCleverTapProductConfigDidActivate() {
    console.log("Product config activated");
}

function onCleverTapDisplayUnitsLoaded(e) {
    console.log("Display units loaded:", e.units);
}

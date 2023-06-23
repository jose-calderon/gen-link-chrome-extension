document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('enable');
    if (!checkButton) return;

    chrome.storage.sync.get('pdFeatureEnabled', function(data) {
        checkButton.checked = data.pdFeatureEnabled;
    });

    checkButton.addEventListener('click', function() {
        chrome.storage.sync.set({ pdFeatureEnabled: checkButton.checked }, function() {
            chrome.storage.sync.get('pdFeatureEnabled', function(data) {
                checkButton.checked = data.pdFeatureEnabled;
            });
        });
    });
}, false);
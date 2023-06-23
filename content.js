chrome.storage.sync.get('pdFeatureEnabled', function(data) {
    if (!data.pdFeatureEnabled) {
        return;
    }

    document.addEventListener('click', function(event) {
        // Get the clicked element
        const clickedElement = document.elementFromPoint(event.clientX, event.clientY);

        const form = clickedElement.parentElement;
        if (form.tagName !== 'FORM') {
            console.log('Not a form');
            return;
        }

        let qs = form.action + '?';
            
        const inputs = form.querySelectorAll("input");
        inputs.forEach(function(item) {
            qs = qs.concat(item.name, '=', item.value, '&');
        });

        const url = qs;
        navigator.clipboard.writeText(url)
        .then(() => {
            console.log('Text copied to clipboard', url);
        })
        .catch((error) => {
            console.error('Failed to copy text: ', error);
        });
    });

});
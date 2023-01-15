document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.how-item-button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.how-block').forEach(function(tabContent) {
                tabContent.classList.remove('how-block-active')
            })
            document.querySelector('[data-target="${path}"]').classList.add('how-block-active')
        })
    })
})
function remove(e) {
    $(e).slideUp("fast", function () { $(this).remove(); });
}

$(document).ready(function () {

    $('#filterList').sortable({ handle: '.handle' });

    for (let i = 0; i < 40; i++) {
        let filter = document.getElementById('filter').content.cloneNode(true);
        document.getElementById('filterList').appendChild(filter);
    }

});
$(document).ready(function () {
    for (let i = 0; i < 40; i++) {
        let teamItem = document.getElementById('teamItem').content.cloneNode(true);
        document.getElementById('teamList').appendChild(teamItem);
    }
});

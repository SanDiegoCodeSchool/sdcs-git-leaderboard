// TODO: this is a work in progress, should be able to add new users to the list to track
function addUser() {
    var usernameInput = {
        "username": document.getElementById("user-input").value
    };
    $.post("http://localhost:3000/postUser", usernameInput);
};

function populateTable() {
    $.get("http://localhost:3000/getUserScores", function (data) {
        data.sort((a, b) => b.points - a.points);
        var sortedData = data.map((student, i) =>
            `<tr>
            <td>${i + 1}</td>
            <td>${student.username}</td>
            <td>${student.points}</td>
        </tr>`);
        $('tbody').append(sortedData);
    });
}

populateTable();

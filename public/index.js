var competitors = {};

// TODO: this is a work in progress, should be able to add new users to the list to track
function addUser() {
    var userInput = document.getElementById("user-input").value;
    console.log(userInput)
    userInput.appendTo("competitors");
    console.log(competitors)
};

function populateTable() {
    $.get("http://localhost:3000/test", function (data) {
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

var competitors = [];

// TODO: this is a work in progress, should be able to add new users to the list to track
function addUser() {
   var userInput = document.getElementById("user-input").value;
   var userObject = {username: userInput}
   competitors.push(userObject);
};

function populateTable(){
    competitors.sort( (a, b) => b.points-a.points);

    var sortedData = competitors.map((student, i) =>
        `<tr>
            <td>${i+1}</td>
            <td>${student.username}</td>
            <td>${student.points}</td>
        </tr>`);
    $('tbody').append(sortedData);
}

populateTable();

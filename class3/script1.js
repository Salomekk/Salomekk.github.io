var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. ";

var id = "container";

var el = document.getElementById(id);

for (var i = 0; i < 8; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var j = 0; j < 8; j++) {
        var col = document.createElement("div");
        col.classList.add("col");
        if (i % 2 == j % 2 )
        {
            var color="black"
        }
        else {
            var color="white"
        }
        col.innerHTML = lorem;
        col.style.backgroundColor=color;
        row.appendChild(col);
    }
    el.appendChild(row);
}

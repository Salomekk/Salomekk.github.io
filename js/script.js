var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";
/* ქმნის ცვლადს,სახელით lorem,რომელშიც წერს მოცემულ ტექსტს */

var id = "container";
/* ქმნის ცვლადს, რომელსაც ქვია id და მასში წერს კონტეინერს */
var el = document.getElementById(id);
/* ქმნის ცვლადს, რომელსაც ქვია el და მასში წერს, რომ დოკუმენტში უნდა მოიძებნოს ელემენტი რომლის აიდია კონტეინერი */

for (var i = 0; i < 10; i++) {
    /* იქმნება ცვლადი i, რომლის საწყისი მნიშვნელობა არის 0, მანამ სანამ i<10 და ყოველი ოპერაციის გამეორების შემდეგ იზრდება ერთით */
    var row = document.createElement("div");
    /* ცვლად სტრიქონში(row) იწერება, რომ დოკუმენტში შეიქმნას გარკვეული ტიპის ელემენტი, თაგის სახელით - "div" */
    row.classList.add("row");
    /* ელემენტს რომ ქონდეს გარკვეული თვისებები, გამოიყენება ეს ოპერაცია. classlist არის ობიექტი, რომელიც გააჩნია თითოეულ ელემენტს
     და ამ classlist-ს ვამატებთ კლას row-ს */
    for (var j = 0; j < 3; j++) {
        /* ცვლადი j საწყისი მნიშვნელობით 0, პირობაა, რომ j<3 და ყოველი ოპერაციის გამეორების შემდეგ იზრდება ერთით */
        var col = document.createElement("div");
        /* ცვლად სვეტში (col) შეიქმნას ახალი ელემენტი div */
        col.classList.add("col");
        /* classlist-ში დაემატა სვეტი */
        col.innerHTML = lorem;
        /* სვეტის innerHTML-ში ჩაჯდა ცვლადი lorem */
        col.style.backgroundColor = "#5" + i + j * 4;
        /* სვეტების ბექგრაუნდს სხვადასხვა ფერის კოდი მიენიჭა */
        row.appendChild(col);
        /* row-ში დაამატოს ახალი შვილი, ახალი ელემენტი - col(სვეტი) */
    }
    el.appendChild(row);
    /* ელემენტში დაამატოს ახალი შვილი -row (სტრიქონი) */
}
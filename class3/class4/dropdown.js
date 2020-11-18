var dropdownButtons = document.getElementsByClassName("dropdown-btn");
/* ცვლადი შემოგვაქვს და ვეუბნებით, რომ კლასის მიხედვით მოძებნოს ელემენტი */

for (var i=0; i<dropdownButtons.length; i++){
    /* ვიყენებთ ციკლს და ვუთითებთ მასივის სიგრძეს, i არასოდეს გაცდება ამ სიგრძეს */
    dropdownButtons[i].addEventListener("click", function (){
        // dropdownList.style.display = "flex";
        /* ვუთითებთ, რომ ელემენტი რომლის კლასია dropdownList დაჭერისას გამოჩნდეს */
        this.parentElement.getElementsByClassName("dropdown-list")[0].style.display= "flex";
    })
}

var textCols = document.getElementsByClassName("col");
var dropdownItems = document.getElementsByClassName("dropdown-item");
for(var i=0; i<dropdownItems.length; i++){
    dropdownItems[i].addEventListener("click", function (){
        for (var j=0; j<textCols.length; j++){
            textCols[j].style.display = "none";
        }
        /* ხდება იგივე რაც ზემოთ აღვწერე, ამ შემთხვევაში დაკლიკებისას ყველა სხვა ელემენტი ქრება, რადგან დისფლეიში მისი ვიზუალური
         წარდგენა არის ცარიელი (none) */
        this.parentElement.parentElement.getElementsByClassName("dropdown-btn")[0].innerHTML = this.innerHTML;
        this.parentElement.style.display = "none";
        document.getElementById(this.dataset.target).style.display = "flex";
    });
}
/* ჩამონათვალში რასაც გავხსნით ზემოთ select-ში მხოლოდ იმის სახელი დაეწერება მაგ: item 1, item 2.. */
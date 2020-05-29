function calculateInsurance() {
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var country = document.getElementById("country").value;
    var hp = document.getElementById("hp").value;

    switch (true) {
        case (country == "Austria"):
            i = Math.round((hp * 100) / (age + 50));

            document.getElementById('output').innerHTML = name + ", your insurance costs " + i + " €";

            break;
        case (country == "Hungary"):
            i = Math.round((hp * 120) / (age + 100));
            document.getElementById('output').innerHTML = name + ", your insurance costs " + i + " €";
            break;
        case (country == "Greece"):
            i = Math.round((hp * 150) / ((age + 3) + 50));
            document.getElementById('output').innerHTML = name + ", your insurance costs " + i + " €";
            break;
        default:
            error = "Error  -  review your javascript";
            console.log(error);
            break;
    }
}

document.getElementById("calculate").addEventListener("click", calculateInsurance);
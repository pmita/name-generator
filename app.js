//Array of names
names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", 
"Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", 
"Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", 
"Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", 
"Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", 
"Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", 
"Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James"];


//Grab all divs
const nameDivs = document.querySelectorAll('.name');
const lockButtons = document.querySelectorAll('.lock');
//Generate button
const refreshButton = document.querySelector('.generate');

/*                  Event Listeners                   */
//Check for locked elements
lockButtons.forEach( button =>{
    button.addEventListener('click', ()=>{
        button.classList.toggle('locked');
    });
});

//Refresh names
refreshButton.addEventListener('click',applyNamesToDivs);


/*                  Fuctions                           */
function generateName(){
    //Pink a random name from the array
    const randomName = names[Math.floor(Math.random()*44)];
    return randomName;
}

function checkGender(randomName){
    //Determine male from female names
    const baseline = names.indexOf(randomName);
    if (baseline < 20){
        return 'blue';
    } else {
        return 'pink';
    }
}

function applyNamesToDivs(){
    nameDivs.forEach( div =>{
        //Determine if button is locked
        const isLocked = div.querySelector('.lock').classList.contains('locked'); //returns true false

        if (isLocked){
            return;
        } else {
            //Find a name for each div
            const randomName = generateName();
            div.children[0].innerText = randomName;
            //Apply either blue or pink based on the gender
            const genderBackgroundColor = checkGender(randomName);
            div.style.backgroundColor = genderBackgroundColor;
        }



    });

}

applyNamesToDivs();


const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@",
    "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"
];

let passElOne = document.getElementById("pass1")
let passElTwo = document.getElementById("pass2")

// console.log(randomIndex);

let password_length = 15

function getPassword(){
    let password = ""
    let randomIndex = 0
    for (let i = 0; i < password_length; i++) {
        randomIndex = Math.floor(Math.random() * characters.length) 
        password += characters[randomIndex]
    }
    return password
}

function generatePassword(){
    let pass1 = getPassword()
    let pass2 = getPassword()

    passElOne.textContent = pass1
    passElTwo.textContent = pass2  
}

function copyText(id){
    let passwordText = document.getElementById(id)
    let textToCopy = passwordText.textContent
    if (!passwordText) return

    navigator.clipboard.writeText(textToCopy).then(()=>{
        alert("password copied to clipboard")
    }
)
}



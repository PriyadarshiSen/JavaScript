// Stack (premetive) and Heap (non premetive)

let myEmail = "aa@bb.com"

let anotherName = myEmail
anotherName = "dd@bb.com"

console.log(myEmail);
console.log(anotherName);

let user1 = {
    email: "user@user.com",
    upi: "upi@user1"
}

let user2 = user1

user2.email = "qwerty@bb.com"

console.log(user1.email);
console.log(user2.email);
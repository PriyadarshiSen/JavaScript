const accountId = 144553
let accountEmail = "Sunny@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ss@googl.com"
accountPassword = "111"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
Because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
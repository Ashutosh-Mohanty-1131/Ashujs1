const accountId = 144553
let accountEmail = "ashutoshmohanty339@outlook.com"
//try to use alway const and let...
var accountPassword = "12345"
accountCity = "Jajpur"
//it is a possiblity to declar a variable...
let accountState;

// accountId = 2 // not allowed

accountEmail = "ashu@gmail.com"
accountPassword = "1131"
accountCity = "kuakhia"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*its use show multiple data in a table */

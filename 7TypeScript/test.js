var num = 10;
var str = "string";
var bln = true;
var user = {
    name: "sagar",
    id: 1
};
console.log(user.name, user.id);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USERS"] = 1] = "USERS";
    Role[Role["MANAGER"] = 2] = "MANAGER";
})(Role || (Role = {}));
console.log(Role.USERS);

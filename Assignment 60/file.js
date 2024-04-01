var userProfile = (function () {
    var name = "jack";
    var age = 34;
    return {
        displayInfo: function () {
            console.log("user name is ".concat(name, " and age is ").concat(age));
        }
    };
})();
userProfile.displayInfo();

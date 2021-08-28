const person = () => {
    var saveName = "Name"

    return {
        getName: function () {
            return saveName
        },
        setName: function (name) {
            saveName = name
        }
    };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Victor");
console.log(newPerson.getName());
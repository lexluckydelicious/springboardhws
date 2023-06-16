// write a function that accepts three arguments and creates and object. 
// the arguments are species, verb, and noise. verb is a function and calls the noise.

var createAnimal = (species, verb, noise) => {
    let newObj = {
    species,
    verb() {
        return (noise);
    }
}
}

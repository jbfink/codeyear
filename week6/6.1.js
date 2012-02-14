var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

var sprache = languages.this;

// print hello in the 3 different languages
for (sprache in languages) {
    if (typeof languages[sprache] === "string") {
        console.log(languages[sprache]);
    }
    else continue;
}

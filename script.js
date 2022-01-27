const button = document.querySelector("#excuse-button");
const excuse = document.querySelector("#excuse");

const excuses = {
    intro: ["I can't come", "Forgive my absence,", "This is going to sound crazy but,", "Get this :", "I can't go because", "I know you're going to hate me but,", "I was minding my own business and boom!", "I feel terrible but,", "I regretfully cannot attend,", "This is going to sound like and excuse but," ],
    scapegoat: ["my nephew", "the ghost of Michael Jackson", "the Pope", "my ex", "a high school marching band", "Danny DeVito", "a sad clown", "the kid from Harry Potter", "a professional cricket team", "my Tinder date"],
    delay: ["just shit the bed.", "died in front of me.", "won't stop telling me knock knock jokes.", "is having a nervous breakdown.", "gave me syphilis.", "poured lemonade in my gas tank.", "stabbed me.", "found my box of human teeth.", "stole my shoes.", "posted my nudes on Instagram." ]
};

// Get a random string of an array.
const randomElement = (arr) => {
    let random = arr[Math.floor(Math.random() * arr.length)];
        return random;
};

// Get a String of each array and put a together
const randomExcuse = () => {
    const parts = ['intro', 'scapegoat', 'delay']; // in order within the message
    const message = parts.map((part) => randomElement(excuses[part])).join(' ');
        excuse.innerHTML = message;
};

button.onclick = randomExcuse;

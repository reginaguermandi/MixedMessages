const button = document.querySelector("#excuse-button");
const excuse = document.querySelector("#excuse");

const excuses = {
    intro: ["I can't come", "Forgive my absence,", "This is going to sound crazy but,", "Get this :", "I can't go because", "I know you're going to hate me but,", "I was minding my own business and boom!", "I feel terrible but,", "I regretfully cannot attend,", "This is going to sound like and excuse but," ],
    scapegoat: ["my nephew", "the ghost of Michael Jackson", "the Pope", "my ex", "a high school marching band", "Dan Rather", "a sad clown", "the kid from Harry Potter", "a professional cricket team", "my Tinder date"],
    delay: ["just shit the bed.", "died in front of me.", "won't stop telling me knock knock jokes.", "is having a nervous breakdown.", "gave me syphilis.", "poured lemonade in my gas tank.", "stabbed me.", "found my box of human teeth.", "stole my shoes.", "posted my nudes on Instagram." ]
};

// Select a random index of each array and put them together
const randomExcuse = (e) => {
    e.preventDefault();
    let introIndex = excuses.intro[Math.floor(Math.random()*excuses.intro.length)];
    let escapeIndex = excuses.scapegoat[Math.floor(Math.random()*excuses.scapegoat.length)];
    let delayIndex = excuses.delay[Math.floor(Math.random()*excuses.delay.length)];    
        return excuse.innerHTML = `${introIndex} ${escapeIndex} ${delayIndex}`;
};


button.onclick = randomExcuse;

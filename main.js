const {
    yellow, cyan, red, green
} = require('./pretty_print.js');

const prompt = require('prompt');


const init = () => {
    prompt.start();
    prompt.get(['cat', 'dog', 'bird'], function (err, inputtedValues) {
        doTheThing(inputtedValues)
    });
}

const doTheThing = (inputtedValues) => {
    yellow(inputtedValues.cat)
    cyan(inputtedValues.dog)
    green(inputtedValues.bird)
    red("!")
}


if (require.main === module) {
    init();
}
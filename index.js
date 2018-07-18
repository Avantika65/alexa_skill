'use strict';

const Alexa = require('alexa-sdk');
const recipes = require('./recipes');

const APP_ID = 'amzn1.ask.skill.f6238c7c-c5c5-4043-be35-12b2605c84bb'; // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            RECIPES: recipes.RECIPE_EN,
            SKILL_NAME: 'Avantika',
            WELCOME_MESSAGE: "Welcome to my home",
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
            HELP_MESSAGE: "You can ask questions such as, what\'s your portfolio  value, or, you can say goodbye...Now, what can I help you with?",
            HELP_REPROMPT: "You can say things like, what\'s your portfolio  value, or you can say goodbye...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            RECIPE_REPEAT_MESSAGE: 'Try saying repeat.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry ",
            RECIPE_NOT_FOUND_REPROMPT: ' just too bad man ',
        },
    },

};

const handlers = {
    //Use LaunchRequest, instead of NewSession if you want to use the one-shot model
    // Alexa, ask [my-skill-invocation-name] to (do something)...
    'LaunchRequest': function () {
        this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMPT');

        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },
    'OpenIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput =this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        this.attributes.repromptSpeech = this.t('');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },
    

     'PortfolioIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your  Z.');
        this.attributes.repromptSpeech = this.t('Mlio news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },
     'PnLIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Yes. I will ');
        this.attributes.repromptSpeech = this.t('ss news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

  
    'OutIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('xyzkldcn kclnw ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'StupidIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your Bloom portfolio currently consists of X (number) stocks. In your Arbor portfolio, you are invested in Y (number) stocks. ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMPT');

        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },
    'AMAZON.RepeatIntent': function () {
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        console.log(`Session ended: ${this.event.request.reason}`);
    },
    'Unhandled': function () {
        this.attributes.speechOutput = this.t('lol you are');
        this.attributes.repromptSpeech = this.t('huhh fish');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

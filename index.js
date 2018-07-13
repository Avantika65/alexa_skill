'use strict';

const Alexa = require('alexa-sdk');
const recipes = require('./recipes');

const APP_ID = 'amzn1.ask.skill.f6238c7c-c5c5-4043-be35-12b2605c84bb'; // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            RECIPES: recipes.RECIPE_EN,
            SKILL_NAME: 'minance',
            WELCOME_MESSAGE: "Welcome to minance , how can i help you",
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
        this.attributes.repromptSpeech = this.t('minance market new');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },
    'MarketIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Market are good today');
        this.attributes.repromptSpeech = this.t('minance market new');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

       'StockIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Stocks are good today');
        this.attributes.repromptSpeech = this.t('Minance stock news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

     'ProductIntent': function () {
       const x=this.attributes.speechIntput;
       if("Arbor" in x)
       {
        this.attributes.speechOutput = this.t('Your Arbor portfolio is at a profit of 10%  ');
        this.attributes.repromptSpeech = this.t('Minance Product news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
      }
      else if ('Bloom' in x) {
        this.attributes.speechOutput = this.t('Your Bloom portfolio is at a loss of 20%');
        this.attributes.repromptSpeech = this.t('Minance Product news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
      }
      else if ('APC' in x) {
        this.attributes.speechOutput = this.t('Your APC portfolio is at a loss of X% ');
        this.attributes.repromptSpeech = this.t('Minance Product news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
      }
      else {
        this.attributes.speechOutput = this.t('Your allover portfolio is at a profit of X% ');
        this.attributes.repromptSpeech = this.t('Minance Product news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
      }
    },

     'PortfolioIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your Portfolio currently stands at a Profit of 30%. The realized profit is rupees 250000 and the unrealized profit is 100000 rupees.  Your total investment capital is Rs. X. The total deployed capital is Rs. Y. The idle cash left in your account is Rs. Z.');
        this.attributes.repromptSpeech = this.t('Minance Portfolio news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },
     'PnLIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Yes. I will have your Profit and Loss statement to date shared with you');
        this.attributes.repromptSpeech = this.t('Minance Profit and Loss news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'FinancialIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Yes, I will have your Performance report for this financial year shared with you');
        this.attributes.repromptSpeech = this.t('Minance Finance news');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');
    },

    'BuyIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('There is a positive news on Stock A. Looks like the company is… This is why we decided to buy X shares of Stock A in your portfolio today.');
        this.attributes.repromptSpeech = this.t('Minance news regarding things that are bought are currently not available');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'ExpiryIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t(' Different underlying assets have different expiries. Arbor is Expiring on 25, bloom on 30.');
        this.attributes.repromptSpeech = this.t('We could not be able to fetch your expiry date for this month, Kindly try again later');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'RedeemableIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your total profit stands at Rs. X. You can redeem upto Rs. X from your account as of today.');
        this.attributes.repromptSpeech = this.t('Your account stands at a loss of Y%. If you want to withdraw funds, you will be withdrawing money from the capital. ');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'OutIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('You have Rs. X as free cash and Rs. Y as profits booked in your account as of today. You can redeem 100000 rupees. ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'StockNoIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your Bloom portfolio currently consists of X (number) stocks. In your Arbor portfolio, you are invested in Y (number) stocks. ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'PriceIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Stock name M G L can be bought for Rs. Y right now. ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'FinancialIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Yes, I will have your Profit and Loss/Performance report for this financial year  shared with you');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'InvestmentIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t(' You started with a total capital of Rs. X. Your deployed capital stands at Rs. Y. ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'IdleIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your total investment capital is Rs. X. The free cash left in your account is Rs. Z. ');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'CallIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('Your Investment Manager will contact you today as soon as possible, Thank you');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'ProfitIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('There are X  strategies running in your account currently. Out of these, Y of strategies are profitable as of today.');
        this.attributes.repromptSpeech = this.t('Sorry, try again after sometimes for this information');
        this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
        this.emit(':responseReady');

    },

    'LossIntent': function () {
       const x=this.attributes.speechIntput;
        this.attributes.speechOutput = this.t('There are X  strategies running in your account currently. Out of these, Y  of strategies are in a loss right now.');
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

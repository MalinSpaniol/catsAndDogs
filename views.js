/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

const intro = babeViews.intro({
    trials: 1,
    name: 'intro',
    text:   `Hello hello!
            <br />
            <br />
            Welcome to a great cats and dogs experiment.`,
    buttonText: 'yaay, further instructions'
});

const instructions = babeViews.instructions({
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `You will see pictures of cats and dogs and you have to say if what you see is a cat or a dog, and if it is cute or ugly.`,
    buttonText: 'to the experiment'
});


// submits the results
const thanks = babeViews.thanks({
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});


/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects


* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial lifecycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view   
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial

*/

// write shuffle method, so that order of images is random
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// this is the definition of the dropdown choices (10 images)
// also call shuffle
const dropdownChoice = babeViews.dropdownChoice({
    trials: 10,
    title: " Cats & Dogs",
    name: 'dropdown_choice',
    trial_type: 'dropdown_choice_main',
    data: this.shuffle(main_trials.dropdownChoice)
});



//const dropdownChoiceTwo = babeViews.dropdownChoiceTwo({
//    trials: 10,
//    title: " Cats & Dogs",
//    name: 'dropdown_choice',
//    trial_type: 'dropdown_choice_main',
//    data: main_trials.dropdownChoiceTwo
//});
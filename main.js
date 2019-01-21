// initialises a babe experiment with babeInit
$("document").ready(function() {
    

    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    };
    
           

    // calls babeInit
    babeInit({

        views_seq: [
            
            intro,
            instructions,
            dropdownChoice,
            thanks,
        ],
        deploy: {
            experimentID: "4",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "malin@spaniol.net",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        progress_bar: {
            in: [
                "dropdown_choice"
            ],
            style: "default",
            width: 100
        }
        
    });

});


// Set up Firebase with Codemirror
var firepadRef1 = new Firebase('https://codecompete1.firebaseio.com/');
var firepadRef2 = new Firebase('https://codecompete2.firebaseio.com/');
var firepad1 = Firepad.fromCodeMirror(firepadRef1, codeMirror1, {
    richTextShortcuts: false,
    richTextToolbar: false
});
var firepad2 = Firepad.fromCodeMirror(firepadRef2, codeMirror2, {
    richTextShortcuts: false,
    richTextToolbar: false
});

// Log object
var log = {
    array: [],
    text: function() {
        return this.array.join("");
    },
    output: function() {
        return this.array.join("\n");
    },
    reset: function() {
        this.array.length = 0;
        return;
    }
};

// Print function
function print(arg) {
    log.array.push(arg);
}

// Handler for when the user submits the Firepad code
$("#submit-firepad1").click(function() {
    log.reset();
    // Evaluate the user's Firepad code
    Function(firepad1.getText())();
    // Display the output
    $("#output1").html(log.output());
    // Check if the output is the correct answer
    if (ca === log.text()) {
        firepad1.setText("The code challenge has ended. This player has emerged victorious! ^^");
        firepad1.dispose();
        firepad2.dispose();
    }
});

$("#submit-firepad2").click(function() {
    log.reset();
    // Evaluate the user's Firepad code
    Function(firepad2.getText())();
    // Display the output
    $("#output2").html(log.output());
    // Check if the output is the correct answer
    if (ca === log.text()) {
        firepad2.setText("The code challenge has ended. This player has emerged victorious! ^^");
        firepad1.dispose();
        firepad2.dispose();
    }
});

// Challenge answers
var ca = "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz";

// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
const commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ]

  const words = commonWords.filter(word => word.lenght >= 3)

  const randIndex = Math.floor(Math.random() * words.length)
  var turns = 5
  var guesses = 0

  const answer = words[randIndex]
  console.log(answer)
  const underscores = answer.split("").map(l => "_")

  $("#underscores").html(underscores.join(""))

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  var buttonshtml = ""
  alphabet.split("").forEach(l => {
      buttonshtml += `<button>${l}</button>`
  })
  $("#buttons").html(buttonshtml)

  $("#buttons").on("click","button", function(e) {
      e.preventDefault()

      $(this).attr('disabled', true)

      var val = $(this).html()

      if (answer.indexOf(val) === -1) {
        guesses += 1
        if (guesses === turns) {
            var perc = 100 / turns * (turns - guesses)
            console.log(perc)
            $("meter").css('width', perc + "%")
            setTimeout(() => {
                $("#game").html("<h1>You Lose:(</h1>")
            }, 1000)
        } else {
          var perc = 100 / turns * (turns - guesses)
          console.log(perc)
          $("meter").css('width', perc + "%")
        //   $("#turns").html(turns + " guesses left")
        }
      } else { 
        answer.split("").forEach((l, i) => {
            if (val === l) {
                underscores[i] = l
  
                if (underscores.indexOf("_") === -1) {
                    //game win
                    $("#game").html("<h1>You Win!</h1>")
                }
            }
        })

        $("#underscores").html(underscores.join(""))
    }
})

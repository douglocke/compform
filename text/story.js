// require /text/tracery.min.js

const storyGrammar = {
    "story": ["It was a dark and stormy night. #continue_active#  #phrase#. #continue_reflective# #phrase#. #question# #quote# #throwaway_quote# #time# #phrase#, and #phrase#. #continue_reflective# #phrase#.  #ending"],
    "phrase": ["#subject.a# #verb# #object.a#"],
    "phrase_2": ["#subject.a# #verb# oneself"],
    "question": ["The #noun# asked, \"Does #object.a# #doubt# #verb_nos# #adverb#?\""],
    "quote": ["\"#answer# #subject.a# #verb# #object.a#\", the #noun# replied."],
    "doubt": ["always", "sometimes", "never"],
    "subject": ["#noun#", "#adjective# #noun#"],
    "object": ["#noun#", "#adjective# #noun#", "#adjective# #noun# and #adverb.a# #adjective# #noun#"],
    "adverb": ["devotedly", "eagerly", "silently", "gleefully", "innocently", "obiediently", "perfectly", "disturbingly", "annoyingly", "cheerfully", "faithfully", "boldy", "deftly"],
    "adjective": ["doomed", "uplifting", "forgetful", "louder", "smarter", "most intelligent", "sublime", "amazing", "dysfunctional","ugly"],
    "noun": ["king", "knight", "dog", "child", "friend", "cat", "beast","solider", "wolf", "princess", "prince", "priest" ],
    "thing": ["sword"],
    "connector": ["on", "with"],
    "throwaway_quote": ["\"So it goes.\"", "\"That's just the way it is.\"", "\"C\'est la vie, mon ami.\""],
    "time": ["Weeks later,", "The next day," ,"Soon thereafter ","Later on "],
    "answer": ["Of course, ", "Never,", "Sometimes,", "Occasionally,"],
    "verb": ["assaults", "forgives", "understands", "believes", "robs", "shoots", "pulverizes", "destroys", "thanks", "blesses", "listens to", "makes amends with", "has a drink with"],
    "verb_nos": ["assault", "forgive", "understand", "believe", "rob", "thank", "bless", "listen", "drink"],
    "verb_connector": ["goes for a walk with", "forges ahead towards", "plans the attack on"],
    "continue_active": ["Suddenly, ", "In a flash, ", "Slowly, "],
    "continue_reflective": ["Eventually, ", "Whereas, ", "Naturally, "],
    "ending": ["Everyone #adverb# understood what this meant, but the #noun# told no one.", "Everyone lived #adverb# ever after, especially, the #noun#."],
}


function main() {
    let grammar = tracery.createGrammar(storyGrammar);
    let story = grammar.flatten("#story#");

    const storyDiv = document.createElement('div');
    storyDiv.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
    storyDiv.textContent = story;

    document.body.insertAdjacentElement("beforeend", storyDiv);
}


setTimeout(main, 10);



var TermPhrase = {
    Id: 1,
    Gid: 1,
    Name: "Artificial Intelligence",
    Abreviation: "AI",
    Definition: "A branch of computer science focused on making machines smart enough to perform tasks that usually need human thought.",
    Source: "Google",
    Connections: "112,33,44"

};


function term_Dictionary(outId) {
    var Term = {
        Id: 1,
        Name: "Artificial Intelligence",
        Abreviation: "AI",
        Definition: "A branch of computer science focused on making machines smart enough to perform tasks that usually need human thought.",
        Source: "Google"

    };
    document.getElementById(outId).innerHTML = Term.Name;
}


function termPhrase_Edit(outId, str) {
    var action = "none"; // what
    var invalue = ""; // where
    switch (str) {
        case 'Delete':
            invalue = TermPhrase.Connections;
            delete TermPhrase.Connections;
            action = invalue + " Deleted";
        default:
        // notin
    }
    document.getElementById(outId).innerHTML = action;
}


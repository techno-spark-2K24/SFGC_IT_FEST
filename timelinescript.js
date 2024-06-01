const timelineArray = [

    {
        time: "10:00AM CS LAB-1",
        event:
            "GAMING(BGMI) ",
    },
    {
        time: "10:00AM (will be informed later)",
        event:
            "LOGO DESIGN",
    },
    {
        time: "10:00AM (will be informed later)",
        event:
            "VIDEOGRAPHY",
    },
    {
        time: "11:00AM (will be informed later)",
        event:
            "TREASURE HUNT ",
    },
    {
        time: "11:00AM Room 308(3rd floor)",
        event:
            "SUDOKU ",
    },
    {
        time: "11:00AM Sabhangana(GroundFloor)",
        event:
            "MATHS PPT",
    },
    {
        time: "12:00AM Room 304(3rd floor)",
        event:
            "DEBATE",
    }, {
        time: "12:00AM Room 307(3rd floor)",
        event:
            "RUBIKS CUBE",
    }, {
        time: "12:00AM Sabhangana(GroundFloor)",
        event:
            "ELECTRONICS PPT",
    },
    {
        time: "2:00PM CS LAB-2",
        event:
            "CODING & DEBUGGING ",
    },
    {
        time: "2:00PM Sabhangana (GroundFloor)",
        event:
            "IT QUIZ",
    },
    {
        time: "2:00PM ElectronicsLab(4rd floor)",
        event:
            "Electronic Circuit Analysis",
    },
    {
        time: "3:00PM AUDITORIUM",
        event:
            "Golgappa Challenge",
    },
    {
        time: "3:30PM AUDITORIUM",
        event:
            "Fashion Walk",
    },
];

function gfg() {
    timelineArray.map((e, i) => {
        let clss = "right";
        let dot = "dotRight";
        if (i % 2 == 0) {
            clss = "left";
            dot = "dotLeft";
        }
        const time = document.createElement("h3");
        time.innerText = e.time;
        const event = document.createElement("p");
        event.innerText = e.event;
        const item = document.createElement("div");
        item.appendChild(time);
        item.appendChild(event);
        item.classList.add("card");
        const contain = document.createElement("div");
        const li = document.createElement("li");
        contain.classList.add(dot);
        contain.appendChild(item);
        li.appendChild(contain);
        li.classList.add(clss);
        document.getElementById("menu").appendChild(li);
    });
}
gfg();

const timelineArray = [

    {
        time: "10:00AM Sabhangana (Ground Floor)",
        event:
            "DEBATE",
    },
    {
        time: "10:00AM Room 324 (3rd Floor)",
        event:
            "SUDOKU",
    },

    {
        time: "11:00AM Room 304 (3rd Floor)",
        event:
            "GAMING (BGMI) ",
    },
    {
        time: "11:00AM CS LAB-1 (3rd Floor)",
        event:
            "CODING",
    },
    {
        time: "11:00AM (3rd Floor)",
        event:
            "TREASURE HUNT",
    },
    {
        time: "11:00AM Room 322(3rd Floor) ",
        event:
            "LOGO DESIGN",
    },
    {
        time: "11:00AM (3rd Floor)",
        event:
            "VIDEOGRAPHY",
    },
     {
        time: "11:00AM Room 325 (3rd floor)",
        event:
            "Electronic PPT",
    },
    {
        time: "12:00AM Room 307(3rd floor)",
        event:
            "RUBIK'S CUBE",
    }, {
        time: "12:00AM Sabhangana(GroundFloor)",
        event:
            "IT QUIZ",
    },
    {
        time: "12:00AM Room 321(3rd Floor)",
        event:
            "MATHS PPT" ,
    },
    {
        time: "1:00PM ",
        event:
            "LUNCH",
    },
    {
        time: "2:00PM ElectronicsLab(4rd floor)",
        event:
            "Electronic Circuit Analysis",
    },
    {
        time: "2:00PM AUDITORIUM",
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

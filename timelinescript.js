const timelineArray = [
   

    {
        time: "Sabhangana (Ground Floor)",
        event:
            "DEBATE",
    },
    {
        time: "Room 324 (3rd Floor)",
        event:
            "SUDOKU",
    },

    {
        time: "Room 304 (3rd Floor)",
        event:
            "GAMING (BGMI) ",
    },
    {
        time: "CS LAB-1 (3rd Floor)",
        event:
            "CODING",
    },
    {
        time: "(3rd Floor)",
        event:
            "TREASURE HUNT",
    },
    {
        time: "Room 322(3rd Floor) ",
        event:
            "LOGO DESIGN",
    },
    {
        time: " (3rd Floor)",
        event:
            "VIDEOGRAPHY",
    },
     {
        time: "Room 325 (3rd floor)",
        event:
            "Electronic PPT",
    },
    {
        time: "Room 307(3rd floor)",
        event:
            "RUBIK'S CUBE",
    }, {
        time: "Sabhangana(GroundFloor)",
        event:
            "IT QUIZ",
    },
    {
        time: " Room 321(3rd Floor)",
        event:
            "MATHS PPT" ,
    },
    {
        time: "1:00PM ",
        event:
            "LUNCH",
    },
    {
        time: "ElectronicsLab(4rd floor)",
        event:
            "Electronic Circuit Analysis",
    },
    {
        time: "AUDITORIUM",
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

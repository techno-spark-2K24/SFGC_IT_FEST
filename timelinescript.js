const timelineArray = [
    {
        time: "9:00AM Sabangana",
        event:
            "Inauguration program of IT fest ",
    },
    {
        time: "10:00AM Lab1",
        event:
            "Coding and Debuging ",
    },
    {
        time: "10:00AM 307",
        event:
            "Gamming",
    },
    {
        time: "10:00AM auditorium",
        event:
            "Fashion Walk",
    },
    {
        time: "12:00AM",
        event:
            "Electronic Circuit Analysis ",
    },
    {
        time: "12:00AM",
        event:
            "IT Quiz",
    }, {
        time: "12:00AM",
        event:
            "Rubiks Cube",
    },
    {
        time: "1:00PM",
        event:
            "Lunch ",
    },
    {
        time: "2:00PM",
        event:
            "Price Distribution",
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

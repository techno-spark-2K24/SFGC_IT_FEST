const timelineArray = [
    {
        time: "9:00AM Sabangana",
        event:
            "JavaScript Introduced by Brendan Eich at Netscape",
    },
    {
        time: "9:00AM Sabangana",
        event:
            "ECMAScript created to Standardize JavaScript",
    },
    {
        time: "9:00AM Sabangana",
        event:
            "ECMAScript3: Introduction of RegEx, try-catch",
    },
    {
        time: "2009",
        event:
            "ECMAScript5: strict mode, Object method",
    },
    {
        time: "2015",
        event:
            "ES6: introduced classes, Arraow functons, let/const variables ",
    },
    {
        time: "2016 Onwards",
        event:
            "introducing features like async/await, spread/rest operators etc.",
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

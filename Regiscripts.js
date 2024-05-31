document.getElementById('loader').style.display = 'none';

function register() {
    // URL of the API endpoint

    let postApiUrl = 'https://getpantry.cloud/apiv1/pantry/1c4f9119-32de-4766-af1f-01141acb4e6d/basket/';
    function isValidEmail(email) {
        // Regular expression for validating an email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Data to be sent
    const postData = {
        TeamName: document.getElementById("Tname").value,
        Team_mate1: document.getElementById("Tname1").value,
        Team_mate2: document.getElementById("Tname2").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        college: document.getElementById("college").value,
        competition: document.getElementById("category").value
    };
    let numS = postData.phoneNumber;
    if (numS.toString().length != 10) {
        alert("Invalid Mobile Number ")
        return;
    }
    if (!isValidEmail(postData.email)) {
        alert("Invalid email ID ")
        return;
    }
    document.getElementById('loader').style.display = "block";
    // console.log(postData)
    if (postData.competition === "coding")
        postApiUrl += "coding"
    else if (postData.competition === "gaming")
        postApiUrl += "gaming"
    else if (postData.competition === "quiz")
        postApiUrl += "quiz";
    else if (postData.competition === "sudoku")
        postApiUrl += "sudoku"
    else if (postData.competition === "treasurHunt")
        postApiUrl += "treasurHunt"
    else if (postData.competition === "videography")
        postApiUrl += "videography"
    else if (postData.competition === "fashionWalk")
        postApiUrl += "fashionWalk"
    else if (postData.competition === "electronicsPPT")
        postApiUrl += "electronicsPPT"
    else if (postData.competition === "logoDesigne")
        postApiUrl += "logoDesigne"
    else if (postData.competition === "debate")
        postApiUrl += "debate"
    else if (postData.competition === "mathsPPT")
        postApiUrl += "mathsPPT"
    else if (postData.competition === "rubiksCube")
        postApiUrl += "rubiksCube"
    else if (postData.competition === "ECA")
        postApiUrl += "ECA"
    else if (postData.competition === "golgappa")
        postApiUrl += "golgappa"



    let data = {}

    fetch(postApiUrl)
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            return response.json();
        })
        .then(data => {

            //console.log(data);

            let d = postData.TeamName;

            if (traverseCheck(data, d)) {
                console.log("True")
                Object.assign(data, { [d]: postData });

                fetch(postApiUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        document.getElementById('loader').style.display = 'none';
                        alert("Registred Successfuly ")
                        window.location.href = "./index.html";
                        console.log('Data:', data);

                    })
                    .catch(error => {
                        document.getElementById('loader').style.display = 'none';
                        alert("Registred Successfuly ")
                        window.location.href = "./index.html";
                        console.error('There has been a problem with your fetch operation in PUT:', error);
                    });
            }



        })
        .catch(error => {
            fetch(postApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ [postData.TeamName]: postData })
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
                .then(data => {
                    document.getElementById('loader').style.display = 'none';
                    alert("Registred Successfuly")
                    window.location.href = "./index.html";
                    console.log('Data:', data);
                
                })
                .catch(error => {
                    document.getElementById('loader').style.display = 'none';
                    alert("Registred Successfuly")
                    window.location.href = "./index.html";
                    console.error('There has been a problem with your fetch operation in POST: at', postApiUrl, error);
                });


        });

}

function traverseCheck(data, target) {
    let temp = true;
    for (let info in data) {

        if (data.hasOwnProperty(info))
            if (typeof data[info] === 'object' && !Array.isArray(data[info])) {
                temp = temp && traverseCheck(data[info], target);
            } else {

                if (info === "TeamName" && data[info] === target) {
                    document.getElementById('loader').style.display = 'none';
                    alert("Team Name alrady Registred")
                    temp = temp && false;
                }
            }

    }
    return temp;
}



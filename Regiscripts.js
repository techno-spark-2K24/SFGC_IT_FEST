document.getElementById('loader').style.display = 'none';
let jsondata = {}
let url = ""

function register() {
    let temp = false;
    let data = {}

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
        Teammate1: document.getElementById("Tname1").value,
        Teammate2: document.getElementById("Tname2").value,
        teammates: document.getElementById("Tnames").value,
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
    if (!(postData.TeamName && postData.Teammate1 && postData.email && postData.phoneNumber && postData.college && postData.competition)) {
        alert("Fill All The Required Fieldes ")
        return;
    }
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
    document.getElementById('loader').style.display = "block";
    fetch(postApiUrl)
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            return response.json();
        })
        .then(da => {
            temp = traverseCheck(da, postData.TeamName);
            data = da
            console.log(data);
        }
        )
        .catch(error => {
            console.error(error)

        })
        .then(() => {
            if (data != {} && temp) {
                document.getElementById('loader').style.display = "none";
                alert("Continue to pay")
                document.getElementById("reg1").style.display = "none"
                document.getElementById("reg2").style.display = "block"
                document.getElementById('loader1').style.display = 'none';
                addAmount(postData);

                const submit = document.getElementById("finalSubmit")
                submit.addEventListener("click", () => {

                    document.getElementById('loader1').style.display = "block";
                    const paymentID = document.getElementById("TID").value;
                    postData["PaymentID"] = paymentID;
                    // console.log(postData)

                    console.log("True")
                    Object.assign(data, { [postData.TeamName]: postData });

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

                });
            }
            else if (Object.keys(data).length === 0) {
                document.getElementById('loader').style.display = "none";
                alert("Continue to pay")
                document.getElementById("reg1").style.display = "none"
                document.getElementById("reg2").style.display = "block"
                addAmount(postData)
                document.getElementById('loader1').style.display = 'none';


                const submit = document.getElementById("finalSubmit")
                submit.addEventListener("click", () => {

                    document.getElementById('loader1').style.display = "block";
                    const paymentID = document.getElementById("TID").value;
                    postData["PaymentID"] = paymentID;

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
                        .then(da => {
                            document.getElementById('loader1').style.display = 'none';
                            alert("Registred Successfuly")
                            window.location.href = "./index.html";
                            console.log('Data:', da);

                        })
                        .catch(error => {
                            document.getElementById('loader1').style.display = 'none';
                            alert("Registred Successfuly")
                            window.location.href = "./index.html";
                            console.error('There has been a problem with your fetch operation in POST: at', postApiUrl, error);
                        });
                });
            }

        });
}
function addAmount(postData) {
    let amount = document.getElementById("amount");
    if (postData.competition === "coding" || postData.competition === "quiz" || postData.competition === "debate" || postData.competition === "mathsPPT" ||
        postData.competition === "electronicsPPT" || postData.competition === "rubiksCube" || postData.competition === "ECA" || postData.competition === "videography" || postData.competition === "sudoku") {
        amount.innerHTML = "Pay 200Rs For Your Event "
    }
    else if (postData.competition === "treasurHunt")
        amount.innerHTML = "Pay 300Rs For Your Event "
    else if (postData.competition === "gaming")
        amount.innerHTML = "Pay 400Rs For Your Event "
    else if (postData.competition === "fashionWalk")
        amount.innerHTML = "Pay 500Rs For Your Event "
    else if (postData.competition === "logoDesigne")
        amount.innerHTML = "Pay 100Rs For Your Event "

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

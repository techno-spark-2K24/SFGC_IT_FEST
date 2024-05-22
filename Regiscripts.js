function register() {
    // URL of the API endpoint
    let postApiUrl = 'https://getpantry.cloud/apiv1/pantry/1c4f9119-32de-4766-af1f-01141acb4e6d/basket/';

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
    // console.log(postData)
    if (postData.competition === "coding")
        postApiUrl += "coding"
    else if (postData.competition === "gaming")
        postApiUrl += "gaming"
    else if (postData.competition === "quiz")
        postApiUrl += "quiz"



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

            if (!traverseCheck(data, d)) {
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
                        console.log('Data:', data);
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation in PUT:', error);
                    });
            }



        })
        .catch(error => {
            fetch(postApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ postData })
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
                .then(data => {
                    console.log('Data:', data);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation in POST:', error);
                });

            console.error('There was a problem with the fetch operation in GET:', error);
        });

}
function traverseCheck(data, target) {
    for (let info in data) {

        if (data.hasOwnProperty(info))
            if (typeof data[info] === 'object' && !Array.isArray(data[info])) {
                traverseCheck(data[info], target);
            } else {
                console.log("info.TeamName =" + info)
                if (info === "TeamName" && data[info] === target) {
                    alert("Team Name alrady Registred")
                    return true;
                }
            }

    }
    return false;
}


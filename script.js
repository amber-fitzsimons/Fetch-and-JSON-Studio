window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            for (i=0; i < json.length; i++) {
                const div = document.getElementById("container");
                let activeColor = document.getElementById("activeGreen");
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: <span>${json[i].active}</span></li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>

                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `

                // if (json[i].active === true){
                //     console.log(`I AM SUPPOSED TO BE GREEN!!!!!!!!`);
                //     let span = document.querySelector("span");
                //     span.setAttribute("id", "activeColor");
                //     activeColor.style.color = "green";
                   
                // } else {
                //     console.log(`Astronaut is not active.`);
                // };
            };

 
        });
        
    });
});


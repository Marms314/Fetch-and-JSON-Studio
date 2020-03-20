window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            function createAstronaut(astronautObject) {
                let skills = astronautObject.skills[0];
                for (let i = 1; i < astronautObject.skills.length; i++) {
                    skills += ", " + astronautObject.skills[i];
                };

                let container = document.getElementById("container");
                container.insertAdjacentHTML("beforeend",
                    `<div class="astronaut">
                        <div class="bio">
                            <h3>${astronautObject.firstName} ${astronautObject.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronautObject.hoursInSpace}</li>
                                <li>Active: ${astronautObject.active}</li>
                                <li>Skills: ${skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${astronautObject.picture}>
                    </div>`
                )
            }
            for (let i = 0; i < json.length; i++) {
                createAstronaut(json[i]);
            };
        });
    });
 });
document.querySelectorAll('.row').forEach((el, index) => {
  el.style.animationDelay = `${index * 0.2}s`;
});


fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector(".project-container");
        data.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'glass-card';

            projectElement.innerHTML = `
                <div class="project-info">
                    <div class="info">
                        <div class="info-title">
                            <h2>${project.title}</h2>
                            <div class="tech-stack">
                                ${project.techStack.map(tech => `<span class="tech">${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div class="info-desc">
                            <h3>${project.description}</h3>
                            <div class="links">
                                ${Object.entries(project.links).map(([key, value]) => `
                                    <a href=${value} target="_blank">
                                        <span class="tech">${key}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="active-acc-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </div>
                    <div class="acc-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>                                                </div>
                    </div>
                <div class="image-container">
                    <img class="project-image" src=${project.image} />
                </div>
            `;

            container.appendChild(projectElement);

            var acc = projectElement.querySelector(".project-info");
            var activeButton = projectElement.querySelector(".active-acc-button");
            var button = projectElement.querySelector(".acc-button");

            acc.addEventListener("click", function() {
                this.classList.toggle("active");

                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    activeButton.style.display = "block";
                    button.style.display = "none";

                } else {
                    panel.style.display = "block";
                    activeButton.style.display = "none";
                    button.style.display = "block";
                }
            });
        });
    })
    .catch(error => console.error('Error loading projects: ', error));
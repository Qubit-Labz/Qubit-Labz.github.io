const template = document.querySelector(".portfolio__item__template")
const category_list = document.querySelector(".portfolio__filter")
const gallery = document.querySelector(".portfolio__gallery")

set_categories();
set_projects();

function set_categories() {
    for (let category in categories) {
        let category_element = document.createElement("li");
        category_element.innerText = categories[category]
        category_element.setAttribute("data-filter", `.${category}`);
        category_list.appendChild(category_element);
    }
}

function set_projects() {
    for (let project of projects) {
        let project_element = template.cloneNode(true);
        project_element.classList.remove("d-none");
        project_element.classList.remove("portfolio__item__template");
        project_element.classList.remove("web");
        project_element.classList.add(project["category"]);

        project_element.querySelector(".portfolio__item__text h4").innerText = project["title"];
        project_element.querySelector(".portfolio__item__text ul li").innerText = (
            categories[project["category"]]
        );
        project_element.querySelector(".set-bg").dataset.setbg = project["image_url"];

        const demo_link = project_element.querySelector(".demo_link");
        demo_link.href = project["demo_link"];

        if (project["demo_link"]) {
            if (!project["is_demo_video"]) {
                demo_link.classList.remove("video-popup");
            }
        }
        else {
            demo_link.remove();
        }
            
        gallery.appendChild(project_element);
    }
    template.remove();
}
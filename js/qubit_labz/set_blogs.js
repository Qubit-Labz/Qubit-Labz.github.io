const template = document.querySelector(".blog_item_template")
const blog_display = document.querySelector(".blog .row")

set_blogs();

function set_blogs() {
    for (let blog of blogs) {
        let blog_element = template.cloneNode(true);
        blog_element.classList.remove("blog_item_template");

        blog_element.querySelector("h4").innerText = blog["title"];
        blog_element.querySelector("li").innerText = blog["date"];
        blog_element.querySelector("p").innerText = blog["caption"];
        blog_element.querySelector("a").href = blog["link"];

        blog_display.appendChild(blog_element);
    }
    template.remove();
}
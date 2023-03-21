const indices = [
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/place-listing?place_facets%5B0%5D=place_type%3A4285&text=&page=0",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/place-listing?place_facets%5B0%5D=place_type%3A4285&text=&page=1"
];

const parser = new DOMParser();
const pages = [];
const pools = {};

indices.forEach((index) => {
    fetch(index)
        .then((response) => response.text())
        .then((data) => parser.parseFromString(data, "text/html"))
        .then((output) => pages.push(output))
});

pages.forEach((page) => {
    try { 
        const array = Array.from(page.getElementsByClassName("views-field-title"));
        array.forEach((element) => {
            if (element.childNodes[0].href) {
                const href = element.childNodes[0].href;
                const name = element.childNodes[0].text;
                const address = element.parentElement.getElementsByClassName('address')[0].textContent;
                const entry = {
                    'href': href,
                    'address': address
                };

                pools[name] = entry;
            }
        });
    } catch (error) {
        console.log(error);
    } 
});
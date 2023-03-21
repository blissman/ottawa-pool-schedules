const indexes = [
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/place-listing?place_facets%5B0%5D=place_type%3A4285&text=&page=0",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/place-listing?place_facets%5B0%5D=place_type%3A4285&text=&page=1"
]

const array = Array.from(document.getElementsByClassName("views-field-title"));
array.forEach((element) => {
    console.log(element.childNodes[0].href);
});
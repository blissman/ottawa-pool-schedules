const indexes = [
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/place-listing?place_facets%5B0%5D=place_type%3A4285&text=&page=0",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/place-listing?place_facets%5B0%5D=place_type%3A4285&text=&page=1"
]

const array = Array.from(document.getElementsByClassName("views-field-title"));
array.forEach((element) => {
    console.log(element.childNodes[0].href);
});

const pools = [
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/aquaview-community-hall",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/bearbrook-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/beaverbrook-outdoor-pool-kanata",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/bob-macquarrie-recreation-complex-orleans",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/brewer-pool-and-arena",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/canterbury-recreation-complex",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/cardelrec-recreation-complex-goulbourn",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/champagne-fitness-centre",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/corkstown-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/crestview-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/deborah-anne-kirwan-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/dovercourt-recreation-centre",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/entrance-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/francois-dupuis-recreation-centre",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/general-burns-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/genest-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/glen-cairn-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/jack-purcell-community-centre",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/kanata-leisure-centre-and-wave-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/katimavik-outdoor-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/lowertown-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/minto-recreation-complex-barrhaven",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/nepean-sportsplex",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/pinecrest-recreation-complex",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/plant-recreation-centre",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/ray-friel-recreation-complex",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/richcraft-recreation-complex-kanata",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/sawmill-creek-community-centre-and-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/splash-wave-pool",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/st-laurent-complex",
    "https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/walter-baker-sports-centre"
];

let butts;
fetch("https://ottawa.ca/en/recreation-and-parks/recreation-facilities/facility-listing/aquaview-community-hall")
  .then((response) => response.text())
  .then((data) => butts = data)

const parser = new DOMParser();
parser.parseFromString(butts, "text/html");

const buttons = Array.from(document.getElementsByTagName("button"));
buttons.forEach((button) => {
    const expected = /Drop-in schedule - swim and aquafit/g;
    if (button.textContent.match(expected)) {
        const grandParent = button.parentElement.parentElement;
        const table = grandParent.getElementsByTagName('table');
    }
});
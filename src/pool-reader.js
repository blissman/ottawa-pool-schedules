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

const parser = new DOMParser();
const pages = [];
const tables = [];

pools.forEach((uri) => {
    fetch(uri)
        .then((response) => response.text())
        .then((data) => parser.parseFromString(data, "text/html"))
        .then((output) => pages.push(output))
});

const parsePages = () => {
    pages.forEach((page) => {
    const buttons = Array.from(page.getElementsByTagName("button"));
    buttons.forEach((button) => {
        const expected = /Drop-in schedule - swim and aquafit/g;
        if (button.textContent.match(expected)) {
            const grandParent = button.parentElement.parentElement;
            try {
                tables.push(grandParent.getElementsByTagName('table')[0].cloneNode(true));
            } catch (error) {
                console.warn(error);
            }
        }
    });
});
};
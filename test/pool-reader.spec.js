const reader = require('../src/pool-reader.js');

describe('pool-reader', () => {

    const example = {
        Chris: "chris@example.com",
        Felix: "felix@example.net",
        Elizabeth:"lizzy1994@example.com",
        André: "andre@example.fr",
        Milo: "milo.milo@example.com",
        Olivia: "olive99@example.net",
        Hugo: "hugo124@example.net",
        Amit: "amit.123@example.com",
        Ludwig:"ludwig@example.net",
        Raoul: "raoul@example.com"
    }

    const result = exchange(example);
    console.log(result);

    const receivers = [];

    for (const gifters in result) {
        receivers.push(result[gifters]);
    }

    it('should not pair you with yourself', () => {
        expect(result["Chris"]).not.toEqual("Chris");
        expect(result["Felix"]).not.toEqual("Felix");
        expect(result["Elizabeth"]).not.toEqual("Elizabeth");
        expect(result["André"]).not.toEqual("André");
        expect(result["Milo"]).not.toEqual("Milo");
        expect(result["Olivia"]).not.toEqual("Olivia");
        expect(result["Hugo"]).not.toEqual("Hugo");
        expect(result["Amit"]).not.toEqual("Amit");
        expect(result["Ludwig"]).not.toEqual("Ludwig");
        expect(result["Raoul"]).not.toEqual("Raoul");
    });

    it('should match you with someone', () => {
        expect(result["Chris"]).toBeDefined();
        expect(result["Felix"]).toBeDefined();
        expect(result["Elizabeth"]).toBeDefined();
        expect(result["André"]).toBeDefined();
        expect(result["Milo"]).toBeDefined();
        expect(result["Olivia"]).toBeDefined();
        expect(result["Hugo"]).toBeDefined();
        expect(result["Amit"]).toBeDefined();
        expect(result["Ludwig"]).toBeDefined();
        expect(result["Raoul"]).toBeDefined();

        expect(typeof(result["Chris"])).toEqual("string");
        expect(typeof(result["Felix"])).toEqual("string");
        expect(typeof(result["Elizabeth"])).toEqual("string");
        expect(typeof(result["André"])).toEqual("string");
        expect(typeof(result["Milo"])).toEqual("string");
        expect(typeof(result["Olivia"])).toEqual("string");
        expect(typeof(result["Hugo"])).toEqual("string");
        expect(typeof(result["Amit"])).toEqual("string");
        expect(typeof(result["Ludwig"])).toEqual("string");
        expect(typeof(result["Raoul"])).toEqual("string");
    });

    it('should include each person exactly once', () => {
        expect(receivers.indexOf("Chris")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Felix")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Elizabeth")).toBeGreaterThan(-1);
        expect(receivers.indexOf("André")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Milo")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Olivia")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Hugo")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Amit")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Ludwig")).toBeGreaterThan(-1);
        expect(receivers.indexOf("Raoul")).toBeGreaterThan(-1);
    });
});
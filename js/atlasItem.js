import AtlasClass from './AtlasClass.js';

export const doApi = async (query) => {
    if (query === "uk") {
        query = "united kingdom";
    }
    if (query === "gb") {
        query = "united kingdom";
    }
    if (query === "Macau") {
        query = "macau";
    }
    try {
        const url = `https://restcountries.com/v3.1/name/${query}/?fullText=true`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(`url is ${url}`);
        createAtlasList(data);
    } catch (err) {
        console.log(err);
        const url = `https://restcountries.com/v3.1/name/${query}`;
        console.log(`url is ${url}`);
        const resp = await fetch(url);
        const data = await resp.json();
        createAtlasList(data);
    }
};

const createAtlasList = (data) => {
    document.querySelector("#id_parent").innerHTML = "";
    const country = new AtlasClass("#id_parent", data[0], shortTofullCountry, doApi);
    country.render();
};

const shortTofullCountry = async (codeCountry) => {
    const url = `https://restcountries.com/v3.1/alpha/${codeCountry}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const fullCountry = data[0].name.common;
    return fullCountry;
};

export const declareEvents = (doApi) => {
    let idInput = document.querySelector("#id_input");
    let btnSearch = document.querySelector("#btn_Search");

    const countries = [
        { id: "id_usa", name: "USA" },
        { id: "id_israel", name: "ISRAEL" },
        { id: "id_gb", name: "GB" },
        { id: "id_france", name: "FRANCE" },
        { id: "id_thailand", name: "THAILAND" },
    ];

    const countriesPop = [
        { id: "id_usa_1", name: "USA" },
        { id: "id_israel_2", name: "ISRAEL" },
        { id: "id_gb_3", name: "GB" },
        { id: "id_france_4", name: "FRANCE" },
        { id: "id_thailand_5", name: "THAILAND" },
    ];

    countries.forEach(({ id, name }) => {
        let country = document.querySelector(`#${id}`);
        country.addEventListener("click", () => doApi(name));
    });

    countriesPop.forEach(({ id, name }) => {
        let country = document.querySelector(`#${id}`);
        country.addEventListener("click", () => doApi(name));
    });

    idInput.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') doApi(idInput.value);
    });

    btnSearch.addEventListener("click", () => doApi(idInput.value));
};

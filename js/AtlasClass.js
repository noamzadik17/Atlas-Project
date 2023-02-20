export default class AtlasClass {
    constructor(_parent, _item, shortTofullCountry, doApi) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.flag = _item.flags.svg;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.languages = Object.keys(_item.languages).map(language => language.toUpperCase());
        this.currency = Object.keys(_item.currencies);
        this.currencyDescription = Object.values(_item.currencies)[0].name.toUpperCase();
        this.capital = _item.capital;
        this.map = _item.latlng;
        this.borders = _item.borders;
        this.doApi = doApi;
        this.shortTofullCountry = shortTofullCountry;
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-12 mx-auto p-4 border shadow overflow-hidden rounded-5";
        div.style = "background: rgba(255, 255, 255, 0.8); color: #373737;"
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <img src="${this.flag}" alt="${this.name}." class="w-50 float-end ms-5">
        <h2 style="color: #00bbf0" >${this.name}: </h2>
        <div> - Population: ${this.pop}. </div>
        <div> - Region: ${this.region}. </div>
        <div> - Languages: ${this.languages}. </div>
        <div> - Currency:  ${this.currency}. </div>
        <div> - Currency Name: ${this.currencyDescription} </div>
        <div> - Capital: ${this.capital}. </div>
        <div class="mt-5 pt-2"><strong> - States With Borders:</strong><br>
        <div class="borders_div"></div>
        </div>
        
       <iframe class="rounded-2 mt-4 col-12" height="600" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>

       `

        let borders_div = div.querySelector(".borders_div");
        this.borders.forEach(async (item, index) => {
            let btn = document.createElement("button");
            btn.innerHTML = await this.shortTofullCountry(item) + " ";
            btn.style = "background:#00bbf0; color: white; border-radius: 10px";
            borders_div.append(btn);
            btn.addEventListener("click", () => {
                this.doApi(btn.innerHTML);
            })
            if (index !== this.borders.length - 1) {
                let spacer = document.createElement("span");
                spacer.innerHTML = "  ";
                borders_div.append(spacer);
            }

            btn.addEventListener("click", () => {
                this.doApi(btn.innerHTML);
            })
        })
    }
}

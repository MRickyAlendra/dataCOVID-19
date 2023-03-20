fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    const globalData = data.Global;
    const totalCases = globalData.TotalConfirmed;
    const totalDeaths = globalData.TotalDeaths;
    const totalRecovered = globalData.TotalRecovered;

    const countries = data.Countries;
    document.getElementById("totalCases").innerText += " " + totalCases;
    document.getElementById("totalDeaths").innerText += " " + totalDeaths;
    document.getElementById("totalRecovered").innerText +=
      " " + (totalCases - totalDeaths);
    console.log(countries.length);

    for (let i = 0; i < countries.length; i++) {
      const div = document.createElement("div");
      div.id = "country";
      document.getElementById("countries").appendChild(div);
    }
    for (let i = 0; i < countries.length; i++) {
      const ele = document.createElement("h3");
      ele.innerHTML = countries[i].Slug;

      const countryDeaths = document.createElement("h4");
      countryDeaths.innerText = "Deaths ";
      countryDeaths.innerText += countries[i].TotalDeaths;

      const countryCases = document.createElement("h4");
      countryCases.innerText = "Cases ";
      countryCases.innerText += countries[i].TotalConfirmed;

      document.querySelectorAll("#country")[i].appendChild(ele);
      document.querySelectorAll("#country")[i].appendChild(countryCases);
      document.querySelectorAll("#country")[i].appendChild(countryDeaths);
    }
  })

  .catch((error) => console.error(error));

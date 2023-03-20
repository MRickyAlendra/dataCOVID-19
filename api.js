fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(data => {
  const globalData = data.Global;
  const totalCases = globalData.TotalConfirmed;
  const totalDeaths = globalData.TotalDeaths;
  const totalRecovered = globalData.TotalRecovered;
  const country = data.Countries;
      document.getElementById("totalCases").innerText += " " + totalCases;
      document.getElementById("totalDeaths").innerText += " " + totalDeaths;
      document.getElementById("totalRecovered").innerText += " " + totalRecovered;

      for (let i = 0; i < country.length; i++) {
        const tableRow = document.createElement("tr");
        tableRow.id = "tableRow";
        document.getElementById("tableBody").appendChild(tableRow);
    }
    
      for (let i = 0; i < country.length; i++) {
        
        const countryList = document.createElement("td");
        countryList.innerHTML = country[i].Slug;
        
        const countryCases = document.createElement("td");
        countryCases.innerText += country[i].TotalConfirmed;
        
        const countryDeaths = document.createElement("td");
        countryDeaths.innerText += country[i].TotalDeaths;
        
        document.querySelectorAll("#tableRow")[i].appendChild(countryList);
        document.querySelectorAll("#tableRow")[i].appendChild(countryCases);
        document.querySelectorAll("#tableRow")[i].appendChild(countryDeaths);
      }
})
.catch(error => console.error(error));
$(document).ready(function () {
    $('#covidTable').DataTable();
});

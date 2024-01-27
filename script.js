let text = "لطفا فقط شهر های استان کردستان را در جستجو سرچ کنید !"
alert(text)

let citiesData = {
    sanandaj: {CITY: 'Sanandaj', TEMP: 12, CONDITION: 'Sunny', HUMIDITY: 23, WIND: 32},
    bane: {CITY: 'Bane', TEMP: 9, CONDITION: 'windy', HUMIDITY: 12, WIND: 14},
    diwandare: {CITY: 'Diwandare', TEMP: 1, CONDITION: 'rainy', HUMIDITY: 43, WIND: 12},
    saqqez: {CITY: 'Saqqez', TEMP: 16, CONDITION: 'snowy', HUMIDITY: 7, WIND: 24},
    marivan: {CITY: 'Marivan', TEMP: 23, CONDITION: 'Sunny', HUMIDITY: 15, WIND: 18},
  }
  
  let $ = document
  let searchBtn = $.getElementById('search')
  let searchBar = $.getElementById('searchInput')
  
  searchBtn.addEventListener('click', function () {
    let searchBarValue = searchBar.value // tabrix
    let mainCityDatas = citiesData[searchBarValue]
  
    console.log(mainCityDatas)
  
    if (mainCityDatas) {
      $.querySelector('.CITY').innerHTML = mainCityDatas.CITY
      $.querySelector('.TEMP').innerHTML = mainCityDatas.TEMP + '°C'
      $.querySelector('.CONDITION').innerHTML = mainCityDatas.CONDITION
      $.querySelector('.HUMIDITY').innerHTML = mainCityDatas.HUMIDITY
      $.querySelector('.WIND').innerHTML = mainCityDatas.WIND + 'km/h'
      // $.querySelector('.weather').classList.remove('loading')
    } else {
      alert('شهر مورد نظر را به درستی وارد نمایید')
    }
  
  })
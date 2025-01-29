var data = [
    { name: "i10", brand: "Hyundai", year: 2020 },
    { name: "mustand", brand: "ford", year: 2022 },
    { name: "x3", brand: "bmw", year: 2021 },
    { name: "i20", brand: "Hyundai", year: 2020 },
  ];
  
  var ans = [];
  
  ans = data.map( 
    (dataObj) => ({...dataObj, brand : dataObj.brand.toUpperCase()})
  ).filter((data => data.year == 2020))
  
   console.log(ans)
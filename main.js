search.addEventListener('click',()=>{
    console.log('search button clicked');
    const input = city.value
    if(input){
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
          fetch(url).then(response=>{
            if(response.status!==200){
                weather.innerHTML=`
                <p class="text-danger text-center">
                Please enter a valid city name
                </p>
                `
                return                
            }
            return response.json()
          })
          .then(data=>{                     

            weather.innerHTML=`
            <h2>${data.name}</h2> 
           <h1>${data.main.temp}</h1>
           <h2>${data.weather[0].description}</h2>

            `

            
            
          })

    }else{
      alert("Please enter a city")
      return
    }
})
    
    
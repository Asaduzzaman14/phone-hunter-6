

const spinner = (spinnerStyle) => {
    // document.querySelector('.spinner-border').style.display = spinnerStyle
    document.getElementById('spinner').style.display = spinnerStyle
}
// spinner('none')




const searchMobile = () => {


    document.getElementById('detail').textContent = ''
    document.getElementById('container').textContent = ''
    spinner('block')
    const inputValue = document.getElementById('input-fild').value;
    if (!inputValue) {
        alert('input fild empty')
        spinner('none')
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => showPhone(data.data))

    }
    document.getElementById('input-fild').value = ''

}


const showPhone = (phones) => {
    if (phones.length == 0) {
        alert('phone 00')
        spinner('none')
    }

    else {
        const phone = phones.slice(0, 20)

        const container = document.getElementById('container')
        phone.forEach(phone => {


            // console.log(phone);
            let div = document.createElement('div')
            div.classList.add('card')
            div.innerHTML = `
            <div class="img">
             <img class="" src="${phone.image}">
            </div>
            <div class="detail">
              <h2>Brand: ${phone.brand}</h2>
              <p>Name: ${phone.phone_name}</p>
            </div>
            <button class='btn-style'  onclick="moreDetails('${phone.slug}')">More Detail</button>
            
            `
            container.appendChild(div)
            spinner('none')
        });
    }


}

const moreDetails = (slugs) => {
    console.log(slugs);
    const url = `https://openapi.programming-hero.com/api/phone/${slugs}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))

}
const showDetails = (details) => {

    console.log(details);
    document.getElementById('detail').textContent = ''

    const detail = document.getElementById('detail')

    let div = document.createElement('div')
    div.classList.add('details-style')

    div.innerHTML = `
    <div class="img">
         <img class="" src="${details.image}">
    </div>

    <div class="detail">
         <h3>Brand: ${details.brand}</h3>
         <h4>Name: ${details.name}</h4>
         <p>releaseDate: ${details.releaseDate}</p>


         <h5>Others</h5>
         <span>Bluetooth: ${details?.others?.Bluetooth ? details.others.Bluetooth : 'not Fount'}  </span>
         <span>Radio: ${details?.others?.Radio ? details.others.Radio : 'not Fount'}</span>
         <p>Bluetooth: ${details?.others?.Radio ? details.others.Radio : 'not Fount'}</p>
         <p>Bluetooth: ${details?.others?.WLAN ? details.others.WLAN : 'not Fount'}</p>
         <p>Bluetooth: ${details?.others?.USB ? details.others.USB : 'not Fount'}</p>
      
      

         <h5>mainFeatures </h5>
         <hr class='hr-line'>
         <p>chipSet: ${details.mainFeatures.chipSet}</p>
         <p>storage: ${details.mainFeatures.storage}</p>
         <p>memory: ${details.mainFeatures.memory}</p>
         <p>displaySize: ${details.mainFeatures.displaySize}</p>
        
        
         <h5>Sensors </h5>
         <p>sensors: ${details.mainFeatures.sensors[5]}</p>
        

    </div>
     
    `
    detail.appendChild(div)




} 
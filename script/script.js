

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
    const morePhones = phones.slice(20, phones.length)
    console.log(morePhones, 'eeeeeeeeee');

    if (phones.length == 0) {
        alert('phone not found')
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
    // document.getElementById('detail').textContent = ''

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
         <p> <span id='name'>releaseDate: </span> ${details.releaseDate ? details.releaseDate : 'not found'}</p>


         <h5>Others</h5>
         <span><span id='name'>Bluetooth: </span> ${details?.others?.Bluetooth ? details.others.Bluetooth : 'not Found'}  </span>
         <span><span id='name'>GPS: </span> ${details?.others?.GPS ? details.others.GPS : 'not Found'}</span>
         <p><span id='name'>Radio: </span> ${details?.others?.Radio ? details.others.Radio : 'not Found'}</p>
         <p><span id='name'>WLAN: </span> ${details?.others?.WLAN ? details.others.WLAN : 'not Found'}</p>
         <p><span id='name'>USB: </span> ${details?.others?.USB ? details.others.USB : 'not Found'}</p>
         <p><span id='name'>NFC: </span> ${details?.others?.NFC ? details.others.NFC : 'not Found'}</p>
      
        
         <h5>mainFeatures </h5>
         <hr class='hr-line'>
         <p><span id='name'>chipSet: </span> ${details.mainFeatures.chipSet ? details.mainFeatures.chipSet : 'not Found'}</p>
         <p><span id='name'>storage: </span> ${details.mainFeatures.storage ? details.mainFeatures.storage : 'not found'}</p>
         <p><span id='name'>memory: </span> ${details.mainFeatures.memory ? details.mainFeatures.memory : 'not found'}</p>
         <p><span id='name'>displaySize: </span> ${details.mainFeatures.displaySize ? details.mainFeatures.displaySize : 'not found'}</p>
        
        
         <h5>Sensors </h5>
         <p class='sensors w-100 ms-0'>sensors: ${details.mainFeatures.sensors.join(', ')} </p>
        

    </div>
     
    `
    detail.appendChild(div)



} 
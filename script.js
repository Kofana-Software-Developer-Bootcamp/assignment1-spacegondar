

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
const data = [] // Girilen bilgilerin ilk alındığı dizi
const parti = [] // Her kişi bilgisinin saklandığı ana dizi
const son = []

// Radio button inputundan değer alabilmek için tanımlanan fonksiyon
function radiValue(name) {
    let radios = document.getElementsByName(name);
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            return radios[i].value
        }
    }
}









//Form Gönder Etkinliği
function formSubmit(event) {
    console.clear()         // Her bilgi girişinde console temizlenmesi için
    event.preventDefault() // default işlemi engellendi
    console.log("İşlem Gerçekleşti")
    // İnput değerleri alma
    let cityInputDOM = document.querySelector('#city')
    const bootInputDOM = document.querySelector('#bootcamps')
    let goodInputDOM = document.querySelector('#good')
    let badInputDOM = document.querySelector('#bad')

    // 
    function people(city, bootcamp, etkinlik, hoca, good, bad) {
        this.city = city
        this.bootcamp = bootcamp
        this.etkinlik = etkinlik
        this.hoca = hoca
        this.good = good
        this.bad = bad
    }
    function addPeople() {
        const peopleObj = new people(
            userForm[0].value,
            userForm[1].value,
            userForm[2].value,
            userForm[3].value,
            userForm[4].value,
            userForm[5].value
    
        );
        son.push(peopleObj)
        console.log(son)
    }
    // 




    // Diziye değerleri atama
    data[0] = cityInputDOM.value
    data[1] = bootInputDOM.value
    data[2] = radiValue("learn")
    data[3] = radiValue("hoca")
    data[4] = goodInputDOM.value
    data[5] = badInputDOM.value

    parti.push(data.slice())

    console.log(parti)
    addPeople()
    document.getElementById("userForm").reset();

    // Bilgileri loglamak için 
    // console.log(cityInputDOM.value)
    // console.log(bootInputDOM.value)
    // radiValue("learn")
    // radiValue("hoca")
    // console.log(goodInputDOM.value)
    // console.log(badInputDOM.value)


}


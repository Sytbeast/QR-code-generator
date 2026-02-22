const qrText = document.getElementById('qr-text')
const sizes = document.getElementById('sizes')
const genBtn = document.getElementById('generateBtn')
const DownloadBtn = document.getElementById('downloadBtn')

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value

// Generate button se qr code generate karega
genBtn.addEventListener('click', (e) => {
  e.preventDefault();   // isse submit nhi hoga
  if(qrText.value == ""){
    qrContainer.innerHTML = "Pehle text dal Chutiye"
    qrContainer.style.color = "red";
  }else{
    generateQRCode();
  }
})

// bina input ke disabled rhega select button
qrText.addEventListener('input',()=>{
    qrText.value.length > 0 ? sizes.disabled = false : sizes.disabled = true;
})


// QR code size ka logic
sizes.addEventListener('change', (e)=>{
    size = e.target.value;
})

DownloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img')

    if(img !== null){
        let imgAtrr = img.getAttribute('src')
        DownloadBtn.setAttribute("href", imgAtrr)
    }else{
        DownloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
        
    }
})

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode (qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
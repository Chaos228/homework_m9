let downloadImage = document.querySelector(".download_image");

const btnClick = document.querySelector(".btn");
btnClick.addEventListener("click", function(){
    downloadImage.innerHTML = '';
    const value = +document.querySelector('input').value;
    const block = 0;
    if (!value) {return};
    if (value<1 || value > 10) {
        let valueFalse = `<div class="result">число вне диапазона от 1 до 10</div>`;
        downloadImage.innerHTML = valueFalse;
    } else {
        const imagesList = `https://picsum.photos/v2/list?limit=${value}`;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', imagesList);
            xhr.send();
            xhr.onload = function() {
                if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
                } else { // если всё прошло гладко, выводим результат
                    const data = JSON.parse(xhr.response);
                    data.forEach((image, index) => {
                        let imageDiv = `<div class="image n${index}" style="background-image:url(${data[index].download_url})"></div>`;
                        downloadImage.innerHTML += imageDiv;
                    });
                }
            };
            
    }
    
})

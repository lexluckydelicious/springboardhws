let results = [];
let source = "";
function removeImgs() {
    $("#content").empty();
}

function onclickbutton() {
    let searchVal = document.getElementById("text").value;
    getGiph(searchVal);
}

async function getGiph(value) {

    results = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=YmXuHHqkXQDNqeRt0XViRQ27dIAvgRBi&q=` + value + `&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    console.log(results);
    let giphArea = document.getElementById("content");
    let newImg = document.createElement("img");
    newImg.src = results.data.data[0].images.original.url;
    newImg.classList.add("giph");
    giphArea.appendChild(newImg);

}


let button = document
  .querySelector("button")
  .addEventListener("click", getCard);
let ul = document.querySelector("ul");

function getCard() {
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

  // console.log(url)

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      let randomCard = () => Math.floor(Math.random() * data.data.length);
      for (let i = 0; i < 5; i++) {
        const r = randomCard();
        console.log("setCode",data.data[r].card_sets[0].set_code)
        fetch(
          "https://cors-anywhere.herokuapp.com/http://yugiohprices.com/api/price_for_print_tag/DUEA-EN014",
          {
            headers: {
              origin: "foobar",
            },
          }
        )
          .then((response) => response.json())
          .then((priceData) => {
            console.log(priceData, priceData.data.price_data.price_data);
          });
            ul.innerHTML += `   
              <li> 
              <img src = '${data.data[r].card_images[0].image_url}'>  
              </li>`;
          // });
      }

      // li.innerHTML=

      //  `
      //  <li>
      //  <img src = '${data.data[randomCard()].card_images[0].image_url}'>
      //  </li>

      //  <li>
      //  <img src = '${data.data[randomCard()].card_images[0].image_url}'>
      //  </li>
      //  <li>
      //  <img src = '${data.data[randomCard()].card_images[0].image_url}'>
      //  </li>
      //  <li>
      //  <img src = '${data.data[randomCard()].card_images[0].image_url}'>
      //  </li>
      //  <li>
      //  <img src = '${data.data[randomCard()].card_images[0].image_url}'>
      //  </li>
      //   `

      // fetch (`https://yugiohprices.com/api/get_card_prices/DOKURORIDER`)
      // .then
      // .then

      // find if its ID or Name and put it into the url www.tcg = something something${name}
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

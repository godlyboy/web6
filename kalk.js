function resultproiz()
{
    let znach1,znach2,rezult;
    znach1 = document.getElementById('a').value;
    znach1 = parseInt(znach1);
    znach2 = document.getElementById('b').value;
    znach2 = parseInt(znach2);
    if(znach1<0||znach2<0){
        alert('Вводите только числа(положительные)');
    }
    if(znach1===0||znach2===0){
        alert('Ввести');
    }
    rezult = znach1*znach2;
    if(rezult<=0){
        alert('Результат не может принимать отрицательные значения');
        let str = "Ошибка";
        document.getElementById('out').innerHTML = str;
    }
    else
    {
        document.getElementById('out').innerHTML = "Итог "+ rezult;
    }
}
window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result-btn");
    b.addEventListener("click",resultsproiz);
});
function calcu() {
  const proverka = /^-+\d+$|\d+$/;
  let x = document.getElementById("prodPrice").innerHTML;
  const re = /[0-9/.]+/;
  let first = x.match(re);
  console.log();
  let b = document.getElementsByName("number");
  if (proverka.test(first) == false || proverka.test(b[0].value) == false) {
    alert("Вы сделали что-то не так!");
  } else {
    let c = document.getElementById("result");
    first[0] = Number.parseInt(first[0]);
    b[0] = Number.parseInt(b[0]);
    var res = first * b[0].value;
	if(res<=0)
		alert("ВЫ СОВЕРШИЛИ ОШИБКУ,ВОЗМОЖНО,ВВЕЛИ ОТРИЦАТЕЛЬНЫЕ ЧИСЛА");
	else
    c.innerHTML = "Итог " + res;
    return false;
  }
}

function getPrices() {
  return {
    prodTypes: [70, 0, 0],
    prodOptions: {
      option1: 30,
      option2: 25,
      option3: 40,
    },
    prodProperties: {
      prop1: 799,
      prop2: 1599,
      prop3: 499,
    }
  };
}
function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value);
  price = prices.prodTypes[priceIndex];

  let radioDiv = document.getElementById("radios");
  if (select.value == "1") {
    radioDiv.style.display = "block";
  }
  else
    radioDiv.style.display = "none";
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      price += propPrice;
    }
  });
  let checkDiv = document.getElementById("checkboxes");
  if (select.value == "2") {
    checkDiv.style.display = "block";
  }
  else
    checkDiv.style.display = "none";
  let prodPrice = document.getElementById("prodPrice");
  if (select.value == "0") {
    price = 70;
  }
  prodPrice.innerHTML = price + " рублей";
}
window.addEventListener('DOMContentLoaded', function (event) {

  let button = document.getElementById("butt");
  button.addEventListener("Click", calcu);
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function (event) {
    let target = event.target;
    updatePrice();
  });
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      updatePrice();
    });
  });
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      updatePrice();
    });
  });
  updatePrice();
});

src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
crossorigin="anonymous"
(function () {
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;


let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "10/13/",
lastday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > lastday) {
lastday = dayMonth + nextYear;
}
//end

const countDown = new Date(lastday).getTime(),
x = setInterval(function() {    

  const now = new Date().getTime(),
        distance = countDown - now;

  // document.getElementById("days").innerText = 0,
  //   document.getElementById("hours").innerText = 0,
  //   document.getElementById("minutes").innerText = 0,
  //   document.getElementById("seconds").innerText = 0;
  document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

  
}, 0)
}());

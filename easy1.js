$("#div2").hide();
$(".gg").hide();
// navbar
$('.close').click(function () {
  $('body').toggleClass('overfh')
  if ($('body').hasClass('overfh')) {
    $('.remenucl').animate({ 'width': '100%' }, 500)
  }
  else {
    $('.remenucl').animate({ 'width': '0%' }, 500)
  }
})
$('.maga').click(function () {
  if ($(".maga").css("height") == "60px") {
    $('.maga .firlan').css("transform", "rotate(-180deg)");
    $(".maga").animate({ 'height': '200px' }, 500)
    $(".maga").toggleClass('bgcm');
    $('.top .firlan').css("transform", "rotate(0deg)");
    $('.top').animate({ 'height': '60px' }, 500)
    $('.top').removeClass('bgcm');
    $('.maga2 .firlan').css("transform", "rotate(0deg)");
    $(".maga2").animate({ 'height': '60px' }, 500)
    $(".maga2").removeClass('bgcm');
  }
  else {
    $('.maga .firlan').css("transform", "rotate(0deg)");
    $(".maga").animate({ 'height': '60px' }, 500)
    $(".maga").toggleClass('bgcm');
  }
});
$('.maga2').click(function () {
  if ($(".maga2").css("height") == "60px") {
    $('.maga2 .firlan').css("transform", "rotate(-180deg)");
    $(".maga2").animate({ 'height': '200px' }, 500)
    $(".maga2").toggleClass('bgcm');
    $('.top .firlan').css("transform", "rotate(0deg)");
    $('.top').animate({ 'height': '60px' }, 500)
    $('.top').removeClass('bgcm');
    $('.maga .firlan').css("transform", "rotate(0deg)");
    $(".maga").animate({ 'height': '60px' }, 500)
    $(".maga").removeClass('bgcm');
  }
  else {
    $('.maga2 .firlan').css("transform", "rotate(0deg)");
    $(".maga2").animate({ 'height': '60px' }, 500)
    $(".maga2").toggleClass('bgcm');
  }
});
$('.top').click(function () {
  if ($(".top").css("height") == "60px") {
    $('.top .firlan').css("transform", "rotate(-180deg)");
    $(".top").animate({ 'height': '200px' }, 500)
    $(".top").toggleClass('bgcm');
    $('.maga .firlan').css("transform", "rotate(0deg)");
    $(".maga").animate({ 'height': '60px' }, 500)
    $('.maga').removeClass('bgcm');
    $('.maga2 .firlan').css("transform", "rotate(0deg)");
    $(".maga2").animate({ 'height': '60px' }, 500)
    $(".maga2").removeClass('bgcm');
  }
  else {
    $('.top .firlan').css("transform", "rotate(0deg)");
    $(".top").animate({ 'height': '60px' }, 500)
    $(".top").toggleClass('bgcm');
  }
});


// array
const sekil = [{
  say: 1,
  ad: "gw",
  d: 40,
  h1: "God of War",
  src1: "./sekil/gw/gw1.jpg",
  src2: "./sekil/gw/gw2.jpg",
  src3: "./sekil/gw/gw3.jpg",
  src4: "./sekil/gw/gw4.jpg",
  src5: "./sekil/gw/gw5.jpg",
  caty: "Hekaye",
  cat: "story"
},
{
  say: 2,
  ad: "as",
  d: 30,
  h1: "Astroneer",
  src1: "./sekil/as/as1.jpg",
  src2: "./sekil/as/as2.jpg",
  src3: "./sekil/as/as3.jpg",
  src4: "./sekil/as/as4.jpg",
  src5: "./sekil/as/as5.jpg",
  caty: "Hayatta kalma",
  cat: "survivor"
},
{
  say: 3,
  ad: "cs",
  d: 20,
  h1: "CS GO",
  src1: "./sekil/cs/cs1.jpg",
  src2: "./sekil/cs/cs2.jpg",
  src3: "./sekil/cs/cs3.jpg",
  src4: "./sekil/cs/cs4.jpg",
  src5: "./sekil/cs/cs5.jpg",
  caty: "Savas",
  cat: "fight"
},
{
  say: 4,
  ad: "gt",
  d: 30,
  h1: "Gta V",
  src1: "./sekil/gt/gt1.jpg",
  src2: "./sekil/gt/gt2.jpg",
  src3: "./sekil/gt/gt3.jpg",
  src4: "./sekil/gt/gt4.jpg",
  src5: "./sekil/gt/gt5.jpg",
  caty: "Aciq dunya",
  cat: "openworld"
},
{
  say: 5,
  ad: "fz",
  d: 50,
  h1: "forza Horizon V",
  src1: "./sekil/fz/fz1.jpg",
  src2: "./sekil/fz/fz2.jpg",
  src3: "./sekil/fz/fz3.jpg",
  src4: "./sekil/fz/fz4.jpg",
  src5: "./sekil/fz/fz5.jpg",
  caty: "Hekaye",
  cat: "story"
},
{
  say: 6,
  ad: "dc",
  d: 9,
  h1: "Dead Cells",
  src1: "./sekil/dc/dc1.jpg",
  src2: "./sekil/dc/dc2.jpg",
  src3: "./sekil/dc/dc3.jpg",
  src4: "./sekil/dc/dc4.jpg",
  src5: "./sekil/dc/dc5.jpg",
  caty: "Hayatta kalma",
  cat: "survivor"
},
{
  say: 7,
  ad: "sf",
  d: 14,
  h1: "Satisfactory",
  src1: "./sekil/sf/sf1.jpg",
  src2: "./sekil/sf/sf2.jpg",
  src3: "./sekil/sf/sf3.jpg",
  src4: "./sekil/sf/sf4.jpg",
  src5: "./sekil/sf/sf5.jpg",
  caty: "Aciq dunya",
  cat: "openworld"
},
{
  say: 8,
  ad: "ss",
  d: 3,
  h1: "Salt and Sancuarty",
  src1: "./sekil/ss/ss1.jpg",
  src2: "./sekil/ss/ss2.jpg",
  src3: "./sekil/ss/ss3.jpg",
  src4: "./sekil/ss/ss4.jpg",
  src5: "./sekil/ss/ss5.jpg",
  caty: "Savas",
  cat: "fight"
}]
// setinterval

var siy = 0
function funk() {
  $(`[btnomr]`).css("background-color", "");
  if ($(".sek1 img").attr("src") == sekil[siy].src1) {
    siy++
    if (siy > sekil.length - 1) {
      siy = 0
    }
    $('.sek111').attr("src", sekil[siy].src1);
    $("#oa").text(sekil[siy].h1);
    $(".sek2").attr("src", sekil[siy].src2);
    $(".sek3").attr("src", sekil[siy].src3);
    $(".sek4").attr("src", sekil[siy].src4);
    $(".sek5").attr("src", sekil[siy].src5);
    $(".doller").text(sekil[siy].d + "$");
    $(".orta").attr("say", sekil[siy].say);
    $(`[btnomr="${siy}"]`).css("background-color", "rgb(148, 162, 181)");
  }
}
setInterval(funk, 3000);
// right left 

$("#iright").click(function () {
  funk()
})
$("#ileft").click(function () {
  $(`[btnomr]`).css("background-color", "");
  siy--
  if (siy < 0) {
    siy = sekil.length - 1
  }
  $('.sek111').attr("src", sekil[siy].src1);
  $("#oa").text(sekil[siy].h1);
  $(".sek2").attr("src", sekil[siy].src2);
  $(".sek3").attr("src", sekil[siy].src3);
  $(".sek4").attr("src", sekil[siy].src4);
  $(".sek5").attr("src", sekil[siy].src5);
  $(".doller").text(sekil[siy].d + "$");
  $(".orta").attr("say", sekil[siy].say);
  $(`[btnomr="${siy}"]`).css("background-color", "rgb(148, 162, 181)");
})

$(".s4sek div img").mouseover(function () {
  let a = $(".sek1 img").attr("src");
  $(".sek1 img").attr("src", this.src);
  $(".s4sek div img").mouseout(function () {
    $(".sek1 img").attr("src", a);
  });
  let b = $(".sek12 img").attr("src");
  $(".sek12 img").attr("src", this.src);
  $(".s4sek div img").mouseout(function () {
    $(".sek12 img").attr("src", b);
  });
});

for (let i = 0; i < sekil.length; i++) {
  const et = sekil[i];
  $('.spoy').append(`
  <div cati="${et.cat}" say="${et.say}" sadece1="${et.say}" class="sek" id="${et.ad}"><img src="${et.src1}" alt="">
    <h1>${et.h1}</h1>
    <p>${et.d}$</p>
    <h3>Cat: ${et.caty}</h3>
  </div>
  `)
  $(".btolan").append(`
    <button btnomr="${i}"></button>
  `);
  $("#sepet2").append(`
  <div class="hisse" sayy="${et.say}">
    <div class="img">
      <img src="${et.src1}" alt="">
    </div>
    <div class="sad">${et.h1}</div>
    <div class="spul">${et.d}$</div>
    <div>
      <button class="btras" cat="${et.say}">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
  `
  )
}
$(`[btnomr="0"]`).css("background-color", "rgb(148, 162, 181)");

$(".btolan button").click(function () {
  $(`[btnomr]`).css("background-color", "");
  siy = $(this).attr("btnomr");
  $('.sek111').attr("src", sekil[siy].src1);
  $("#oa").text(sekil[siy].h1);
  $(".sek2").attr("src", sekil[siy].src2);
  $(".sek3").attr("src", sekil[siy].src3);
  $(".sek4").attr("src", sekil[siy].src4);
  $(".sek5").attr("src", sekil[siy].src5);
  $(".doller").text(sekil[siy].d + "$");
  $(".orta").attr("say", sekil[siy].say);
  $(`[btnomr="${siy}"]`).css("background-color", "rgb(148, 162, 181)");
});

var say2
$(".spoy div").click(function () {
  say2 = $(this).attr("say") - 1
  $('.sek12').html(`<img src=${sekil[say2].src1} alt=""></img>`);
  $("#oa2").text(sekil[say2].h1);
  $(".sek22").attr("src", sekil[say2].src2);
  $(".sek32").attr("src", sekil[say2].src3);
  $(".sek42").attr("src", sekil[say2].src4);
  $(".sek52").attr("src", sekil[say2].src5);
  $(".doller2").text(sekil[say2].d + "$");
  $("#btn").attr("saybtn", sekil[say2].say);
  $(".g").hide();
  $(".gg").hide();
  $("footer").show();
  $("#div2").show();

  // 2.0
  $(".ff12").hide();
  $(".ff1").hide();
  if ($(this).hasClass("btnvar")) {
    $(".ff12").show();
  }
  else {
    $(".ff1").show();
  }

  window.scroll(0, 0)
});
$(".maq").click(function () {
  $(".g").show();
  $("#div2").hide();
  $(".gg").hide();
  $("footer").show();
  $(".main2").hide();
});
// sepet
$(".spt").click(function () {
  $(".gg").show();
  $(".g").hide();
  $("#div2").hide();
  $("footer").hide();
  $(".main2").hide();
});

$(".keshif").click(function () {
  $(".g").hide();
  $(".sepet").show();
  $(".main2").hide();
});

$(".main2").hide();
$(".qeyd").click(function () {
  $(".g").hide();
  $("#div2").hide();
  $("footer").hide();
  $(".gg").hide();
  $(".main2").show();
});

function saypullari() {
  totalsum = 0
  $(".spul").each(function () {
    if ($(this).css("display") != "none") {
      totalsum = totalsum + Number($(this).text().substring(0, $(this).text().length - 1))
    }
  });
}

$(".ff12").hide();
var textsay = 0
var totalsum = 0
$("#btn").click(function () {
  let ia = $(this).attr("saybtn");
  $(".hisse").each(function () {
    if ($(this).attr("sayy") == ia) {
      $(this).css("display", "flex")
      $(this).children().eq(2).css("display", "block")
      saypullari()
    }
  });
  $("#total").text(`Total ${totalsum}$`)
  $(`[sadece1="${ia}"]`).addClass("btnvar");
  // sepet (x)
  textsay++
  $(".spt").text(`Sepet (${textsay})`);
  $(".ff1").hide();
  $(".ff12").show();
});

$(".btras").click(function () {
  let ai = $(this).attr("cat");
  $(".hisse").each(function () {
    if ($(this).attr("sayy") == ai) {
      $(this).css("display", "none")
      $(this).children().eq(2).css("display", "none")
      saypullari()
    }
  })
  $("#total").text(`Total ${totalsum}$`)

  textsay--
  $(".spt").text(`Sepet (${textsay})`);

  $(`[sadece1="${ai}"]`).removeClass("btnvar");
});

$("#clear").click(function () {
  $(".hisse").each(function () {
    $(this).css("display", "none")
    $(this).children().eq(2).css("display", "none")
  })
  $("#total").text(`Total 0$`)
  textsay = 0
  $(".spt").text(`Sepet (${textsay})`)
  $(".spoy div").removeClass("btnvar");
});

// discord
var i1 = 0
var it1 = setInterval(function () {
  i1++
  $(".inst p").html(i1);
  if (i1 >= 736) {
    clearInterval(it1)
  }
}, 1)
var i2 = 0
var it2 = setInterval(function () {
  i2++
  $(".fc p").html(i2);
  if (i2 >= 233) {
    clearInterval(it2)
  }
}, 1)
var i3 = 0
var it3 = setInterval(function () {
  i3++
  $(".tw p").html(i3);
  if (i3 >= 659) {
    clearInterval(it3)
  }
}, 1)
var i4 = 0
var it4 = setInterval(function () {
  i4++
  $(".dsc p").html(i4);
  if (i4 >= 341) {
    clearInterval(it4)
  }
}, 1)

// ul li
for (let i = 0; i < 4; i++) {
  const et = sekil[i];
  $('.jsul ul').append(`<li cat="${et.cat}">${et.caty}</li>`)
}
$('.jsul ul li').toggleClass('blue');
$('.jsul ul li').click(function () {
  $(this).toggleClass('blue');
  if ($(this).text() == "Hamisi") {
    if ($(this).hasClass('blue')) {
      $('.jsul ul li').addClass('blue');
      $('.sek').show()
    }
    else {
      $('.jsul ul li').removeClass('blue');
      $('.sek').hide()
    }
  }
  else {
    if ($(this).hasClass("blue")) {
      $(`[cati=${$(this).attr("cat")}]`).show()
      var b = 0
      $(".jsul ul li").each(function () {
        if ($(this).hasClass("blue")) {
          b++
        }
        if (b == 4) {
          $('.all').addClass('blue')
        }
      });
    }
    else {
      $(`[cati=${$(this).attr("cat")}]`).hide()
      $('.all').removeClass('blue')
    }
  }
})

// mousemove
var px
$('body').mousemove(function (e) {
  px = Math.trunc($(".sec").css("width").slice(0, -2))
  if (px < 768) {
    $(".f").hide();
  }
  else {
    ab = document.querySelectorAll(".sepet")[0].scrollHeight;
    $('.f').css({ 'top': `${e.pageY - 626 - ab}px`, 'left': `${e.pageX - 24}px` })
    if (e.pageY > 626 + ab) {
      $('.f').css('display', 'flex')
    }
    else {
      $(".f").hide(300);
    }
  }
});
$('.sec').mousemove(function (e) {
  $('.js1').css({ 'top': `${(e.pageY - 1990) / 10}px`, 'left': `${(e.pageX - 670) / 10}px` })
  $('.js2').css({ 'top': `${-(e.pageY - 1990) / 10}px`, 'left': `${(e.pageX - 670) / 10}px` })
  $('.js3').css({ 'top': `${-(e.pageY - 1990) / 10}px`, 'left': `${-(e.pageX - 670) / 10}px` })
});

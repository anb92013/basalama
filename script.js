// اختيار الزر والقائمة من الوثيقة
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");

// إنشاء متغير لتتبع حالة القائمة (مفتوحة أو مغلقة)
var menuOpen = false;

// إضافة حدث النقر على الزر
menuBtn.addEventListener("click", function () {
  // إذا كانت القائمة مغلقة
  if (!menuOpen) {
    // تغيير حالة القائمة إلى مفتوحة
    menuOpen = true;
    // تغيير خاصية التحويل للقائمة لتظهر على الشاشة
    menu.style.transform = "translateX(0%)";
    // تغيير خاصية التحويل لخط الأعلى ليتحول إلى علامة ×
    menuBtn.children[0].style.transform = "rotate(45deg) translate(7px, 7px)";
    // تغيير خاصية الشفافية لخط الأوسط ليختفي
    menuBtn.children[1].style.opacity = "0";
    // تغيير خاصية التحويل لخط الأسفل ليتحول إلى علامة ×
    menuBtn.children[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
  } else {
    // إذا كانت القائمة مفتوحة
    // تغيير حالة القائمة إلى مغلقة
    menuOpen = false;
    // تغيير خاصية التحويل للقائمة لتختفي عن الشاشة
    menu.style.transform = "translateX(100%)";
    // تغيير خاصية التحويل لخط الأعلى ليعود إلى حالته الأصلية
    menuBtn.children[0].style.transform = "rotate(0deg) translate(0px, 0px)";
    // تغيير خاصية الشفافية لخط الأوسط ليظهر
    menuBtn.children[1].style.opacity = "1";
    // تغيير خاصية التحويل لخط الأسفل ليعود إلى حالته الأصلية
    menuBtn.children[2].style.transform = "rotate(0deg) translate(0px, 0px)";
  }
});
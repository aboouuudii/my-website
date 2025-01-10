// التاريخ المحدد: 21/07/2008
const targetDate = new Date(2008, 6, 21); // الشهر يبدأ من 0 (يناير = 0)

function updateTimer() {
    const now = new Date(); // التاريخ والوقت الحالي
    const difference = now - targetDate; // الفرق بالمللي ثانية

    // تحويل الفرق إلى أيام، ساعات، دقائق، وثواني
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // تحديث القيم في الصفحة
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// تحديث المؤقت كل ثانية
setInterval(updateTimer, 1000);

// تشغيل المؤقت فور تحميل الصفحة
updateTimer();
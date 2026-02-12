window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300);
    });
});
// Tizim rangini tekshirish va almashtirish
const toggle = document.createElement('div');
toggle.innerHTML = '<i class="fas fa-moon"></i>';
toggle.className = 'theme-toggle';
document.querySelector('.nav-container').appendChild(toggle);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
const text = "Full-stack Developer";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
            
            // Agar element ichida progress bar bo'lsa, uni to'ldirish
            const progressBar = element.querySelector('.progress');
            if (progressBar) {
                // HTML dagi style="width: 95%" ni o'qiydi
                const targetWidth = progressBar.getAttribute('style').split('width:')[1];
                progressBar.style.width = targetWidth;
            }
        }
    });
}




// 1. Telegram Bot Sozlamalari
const TOKEN = "8534434331:AAGxoHjV6GuepH4sRpnWlhzUf3dlT2HKz1c"; // BotFather'dan olgan tokeningiz
const CHAT_ID = "6629036833"; // userinfobot'dan olgan ID'ingiz
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const sendBtn = document.getElementById('send-btn');
    sendBtn.innerText = "Yuborilmoqda...";
    sendBtn.disabled = true;

    let message = `<b>Yangi xabar!</b>\n`;
    message += `<b>Ism:</b> ${document.getElementById('name').value}\n`;
    message += `<b>Email:</b> ${document.getElementById('email').value}\n`;
    message += `<b>Xabar:</b> ${document.getElementById('message').value}`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    }).then((res) => {
        alert("Xabar muvaffaqiyatli yuborildi!");
        this.reset();
    }).catch((err) => {
        alert("Xatolik yuz berdi. Qayta urinib ko'ring.");
    }).finally(() => {
        sendBtn.innerText = "Yuborish";
        sendBtn.disabled = false;
    });
});

// 2. Barcha Navigatsiya tugmalarini ishlatish
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    // Agar sayt 300px dan ko'proq pastga tushsa, tugmani ko'rsatish
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    // Tepaga silliq chiqish
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    // Sayt yuklangach 0.5 soniya kutib, keyin loaderni yopish
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 500);
});
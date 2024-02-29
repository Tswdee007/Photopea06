document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        // ทำการโหลดหน้าใหม่โดยใช้ AJAX หรือ Fetch API หรือตามวิธีที่คุณต้องการ
        console.log('กำลังโหลดหน้า: ' + page);
        // นี่คือตัวอย่างโค้ดที่คุณสามารถใช้ในการโหลดหน้าใหม่
    }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.querySelector('.featured-content h1');
    welcomeMessage.textContent = 'ยินดีต้อนรับสู่ Website teach How to use Photopee';

    const articles = document.querySelectorAll('.article-preview');
    articles.forEach(article => {
        article.addEventListener('mouseover', function() {
            article.style.backgroundColor = '#f8f9fa';
        });

        article.addEventListener('mouseout', function() {
            article.style.backgroundColor = '#ffffff';
        });
    });

    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Website teach How to use Photopee. สงวนลิขสิทธิ์`;
});  
// script.js เพิ่มสไตล์สำหรับ dynamic-bg
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    });
});

/* คำสั่งปุ่มวงกลมซ้ายล่างขวาทำให้เลื่อนขึ้นเปิด */
function scrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top-btn');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    scrollBtn.classList.add('active');

    setTimeout(() => {
        scrollBtn.classList.remove('active');
    }, 500);
    
}



// เพิ่มในไฟล์ script.js หรือไฟล์ JavaScript อื่น ๆ ที่คุณใช้
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
  
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
  
    if (isDarkMode) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    } else {
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    }
  
    // ตัวอย่างเพิ่มการปรับสีอื่น ๆ ตามที่คุณต้องการ
  }
  
  // ตรวจสอบ dark mode ที่เก็บไว้ใน local storage
  const savedDarkMode = localStorage.getItem('dark-mode');
  if (savedDarkMode) {
    document.body.classList.toggle('dark-mode', savedDarkMode === 'true');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
  
    if (savedDarkMode === 'true') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    } else {
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    }
  }
  
  function goToQuizPage2() {
    window.location.href = "lesson3.html"; // แทนที่ "quiz.html" ด้วย URL ที่ถูกต้อง
}

function goToQuizPage() {
    window.location.href = "lesson2.html"; // แทนที่ "quiz.html" ด้วย URL ที่ถูกต้อง
}

function goToQuizPage3() {
    window.location.href = "Posttest.html"; // แทนที่ "quiz.html" ด้วย URL ที่ถูกต้อง
}

// เรียกใช้ goToQuizPage2() เมื่อต้องการเปลี่ยนหน้าไปยัง lesson2.html
// ตัวอย่างเช่นเมื่อคลิกปุ่มหรือเหตุการณ์ใดๆ ที่ต้องการให้เปลี่ยนหน้า



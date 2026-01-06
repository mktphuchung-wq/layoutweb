document.addEventListener('DOMContentLoaded', () => {
    // Tùy chọn cho Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // Kích hoạt khi 15% phần tử xuất hiện
    };

    // Hàm callback khi scroll tới
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm class 'visible' để kích hoạt CSS transition
                entry.target.classList.add('visible');
                
                // Stop observing sau khi đã hiện (đỡ tốn tài nguyên)
                observer.unobserve(entry.target);
            }
        });
    };

    // Khởi tạo Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Bắt đầu theo dõi tất cả các card
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => observer.observe(card));
});

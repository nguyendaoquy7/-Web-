document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const addToCartButton = document.getElementById('addToCartButton');

    // Thay đổi hình ảnh chính khi nhấp vào hình thu nhỏ
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.getAttribute('data-image');
            // Xóa lớp active khỏi tất cả thumbnail và thêm lớp active vào thumbnail hiện tại
            thumbnails.forEach(img => img.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

    // Xử lý sự kiện thêm vào giỏ hàng
    addToCartButton.addEventListener('click', () => {
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    });
});

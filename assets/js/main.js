var header = document.querySelectorAll('.navbar__item');
    // console.log(header[0]);
    header[0].onclick = function() {
        alert('Chức năng chưa hoàn thiện');
    }
    header[1].onmouseover = function() {
        console.log(header[1].innerText);
        header[1].innerText = 'Chức năng không tồn tại';
}
var product_item = document.querySelectorAll('.home-product-item');
    product_item[0].onclick = function() {
        console.log(product_item[1].querySelectorAll('.home-product-item__sold')[0]);
    }
    console.log(product_item[1].getElementsByTagName('div'));
    console.log(product_item[1].querySelector('.home-product-item__sold')); 

var unread_notification = document.querySelectorAll('li .navbar__notification-item')[1];
    console.log(unread_notification);
    unread_notification.onmouseover = function () {
        unread_notification.setAttribute('class', 'navbar__notification-item--unread');
    }
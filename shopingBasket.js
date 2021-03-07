/* Реализовать модуль корзины.
 Создать блок товаров и блок корзины.
 У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины.
  Корзина должна уметь считать общую сумму заказа.
*/

document.addEventListener('DOMContentLoaded', () => {

    var warehouse = {
        '1234' : {
            "name": "Стул элегантный",
            "count": 5,
            "discount": 10,
            "price": 100,
            "image": "img/1234.jpg",
            "adv" : "Купи ещё это.."
    
        },
        '1284' : {
            "name": "Стул элегантный",
            "count": 5,
            "discount": 5,
            "price": 100,
            "image": "img/1284.jpg",
            "adv" : "Купи ещё это..",
            
        }
    }


    let orderUser = {
        '1234' : {
            "name": "Стул элегантный"
        },
        '1284' : {
            "name": "Стул элегантный",
            "count": 1
        }
    } 

    function renderShopinbBasket(id){
        var html = "";
        
        html += '<div class="orderGoods">';
        html += '<h3>' + warehouse[id]['name'] + '</h3>';
        html += '<p>Цена: ' + warehouse[id]['price'] + '</p>';  

        showCart =  document.getElementById('shoping-cart');
        showCart.innerHTML = html;

       // alert(orderUser[id]);
    }

     function addToBuy(id){
        orderUser[id]['count']++;
        renderShopinbBasket(id);

    }

    function showGoods (){
        var html = '';
        

        for (var key in warehouse){
           // alert(key);
            html += '<div class="itemGoods">';
            html += '<img src="' + warehouse[key].image +'">'; 
            html += '<h3>' + warehouse[key]['name'] + '</h3>';
            html += '<p>Цена: ' + warehouse[key]['price'] + '</p>';  
           // html += '<button class = "add-to-cart"  onclick="addToBuy('+key+')" id=' + key + '>Добавить в корзину</button>';
            html += '<button class = "add-to-cart" id=' + key + '>Добавить в корзину</button>';
            html +='</div>';
           
            goods = document.getElementById('itemProduct');
            goods.innerHTML = html;
            
            var func = document.getElementById(key);
            func.onclick = addToBuy(key);

        } 

    }

    showGoods();
})

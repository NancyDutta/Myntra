let bagItems;
//call function
onLoad();
function onLoad(){
let bagItemsStr=localStorage.getItem('bagItems');
bagItems=bagItemsStr? JSON.parse(bagItemsStr):[]; //this line will save the item value permently it will not refresh the card items
    displayItemsOnHomePage();
    displayBagIcon();
}
//button
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
} 
function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }
    
}
//display item on home page 
function displayItemsOnHomePage(){
    let itemComtainerElement=document.querySelector('.items-container');
    if(!itemComtainerElement){
        return;
    }

let innerHtml='';
items.forEach(item=>{
innerHtml +=`
<div class="item-container">
<img class="item-image" src="${item.image}" alt="item image">
<div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
<div class="company-name">${item.company_name}</div>
<div class="item-name">${item.item_name}</div>
<div class="price">
    <span class="current-price">Rs${item.current_price}</span>
    <span class="original-price">Rs${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
</div>
<Button class="btn-add-bag"onclick="addToBag(${item.id})">Add to Bag</Button>
</div>`;
})
itemComtainerElement.innerHTML=innerHtml;
}


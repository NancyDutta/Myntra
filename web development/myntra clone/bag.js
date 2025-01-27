const CONVENIENCE_FEES=99;
let bagItemsObjects;
onLoad();
function onLoad(){
loadBagItemsObjects();
displayBagItems();
displayBagSummary();
}

function displayBagSummary(){
  let BagSummaryElement= document.querySelector('.bag-summary');
  let totalItem=bagItemsObjects.length;
  let totalMRP=0;
  let totalDiscount=0;
  
  bagItemsObjects.forEach(bagItems => {
    totalMRP +=bagItems.original_price;
    totalDiscount =bagItems.original_price-bagItems.current_price;
  })
  let finalPayment=totalMRP-totalDiscount+ CONVENIENCE_FEES;


  BagSummaryElement.innerHTML=` <div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹ ${CONVENIENCE_FEES}</span>
  </div>
  <!-- <hr> -->
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹${finalPayment}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div></button>
  `;

}

//this is a way to get items by using id(unique value) provided in data.js file
function loadBagItemsObjects(){
console.log(bagItems);
bagItemsObjects=bagItems.map(itemId=>{
    for(let i=0;i<items.length;i++){
        if(itemId == items[i].id){
            return items[i];
        }
    }
});
console.log(bagItemsObjects);
}

function displayBagItems(){
    let containerElement=document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemsObjects.forEach(bagItems => {
        innerHTML += generateItemHtml(bagItems);
    });
    containerElement.innerHTML=innerHTML;
}




function removeFromBag(itemId){
bagItems=bagItems.filter(bagItemId => bagItemId != itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
loadBagItemsObjects();
displayBagIcon();
displayBagItems();
displayBagSummary();
}




function generateItemHtml(item){
return `
<div class="bag-items-container">
<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price} </span>
      <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
  </div>
  <div class="remove-from-cart"onclick="removeFromBag(${item.id})">X</div>
</div>

</div>
`;
}
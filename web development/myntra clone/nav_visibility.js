const men_section = document.querySelector('.men');
const men_section_item=document.querySelector('.men-section-item');

const women_section=document.querySelector('.women');
const women_section_item=document.querySelector('.women-section-item');

const kids_section=document.querySelector('.kids');
const kids_section_item=document.querySelector('.kids-section-items');

const home_section=document.querySelector('.home_living');
const home_section_item=document.querySelector('.home-section-items');

const beauty_section=document.querySelector('.beauty');
const beauty_section_item=document.querySelector('.beauty-section-items');

const profile=document.querySelector('.profile-display');
const profile_container= document.querySelector('.profile-container');

profile.onmouseover=()=>{
    profile_container.classList.remove('visibility');
}
profile.onmouseout=()=>{
    profile_container.classList.add('visibility');
}


home_section.onmouseover=()=>{
     home_section_item.classList.remove('visibility');
}
home_section.onmouseout=()=>{
     home_section_item.classList.add('visibility');
 }

 beauty_section.onmouseover=()=>{
    beauty_section_item.classList.remove('visibility');
 }
   beauty_section.onmouseout=()=>{
         beauty_section_item.classList.add('visibility');
}

 kids_section.onmouseover=()=>{
     kids_section_item.classList.remove('visibility');
}
kids_section.onmouseout=()=>{
    kids_section_item.classList.add('visibility');
}

men_section.onmouseover = () => {
    men_section_item.classList.remove('visibility');
}
men_section.onmouseout = () => {
    men_section_item.classList.add('visibility');
} 

women_section.onmouseover=()=>{
    women_section_item.classList.remove('visibility');
}

women_section.onmouseout=()=>{
    women_section_item.classList.add('visibility');
}
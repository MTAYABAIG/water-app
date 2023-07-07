const smallCups =document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percantage = document.getElementById('percantage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>highlighCup(idx))
    // console.log(idx)
})

function highlighCup(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }



    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup();

};
function updateBigCup(){
    const fullCup = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCup === 0){
        percantage.style.visibility = 'hidden';
        percantage.style.height =0;
    }else{
        percantage.style.visibility = 'visible';
        percantage.style.height = `${fullCup / totalCups * 330}px`;
        percantage.innerText =  `${fullCup / totalCups * 100}%` 
    }

    if(fullCup === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        listers.innerText = `${2 -(250 * fullCup / 1000)}L`
    }
}
/*Gestion des évènements liées au step 1 du formulaire */

let regexName=new RegExp('^[A-Za-z]{2,8}');
let champNom=document.getElementById('name');
let regexEmail=new RegExp("^[a-z0-9.-_]+@[a-z0-9]+\.[a-z]\{3}$");
let champEmail=document.getElementById('email');
let step1=document.getElementById("step1");
let step2=document.getElementById("step2");
let step3=document.getElementById("step3");
let bouton=document.querySelector('.next_step');
let numUser='',emailUser='',username='';


let regexNumber=new RegExp("^[\+]+[0-9]{8,16}");


let champNumber=document.getElementById('phoneNumber');
let error=  document.querySelectorAll(".error");
bouton.addEventListener('click' ,()=>

{
    let compteur=0;
    let sortie1=regexName.test(champNom.value);
    if(sortie1===false || champNom.value.trim()==="")
    {
        error[0].style.display='block';
        champNom.classList.add("invalid");
        champNom.classList.remove("valid");
    }
    else{
        error[0].style.display='none';
        champNom.classList.remove("invalid");
        champNom.classList.add('valid');
        compteur++;
        username=champNom.value;
    }

   
    let sortie2=regexEmail.test(champEmail.value);
    if(sortie2===false || champEmail.value.trim()==="")
    {
        error[1].style.display='block';
        champEmail.classList.add("invalid");
        champEmail.classList.remove("valid");
    }
    else{
        champEmail.classList.remove("invalid");
        champEmail.classList.add('valid');
        error[1].style.display='none';
        compteur++;
        emailUser=champEmail.value;
    }

    let sortie3=regexNumber.test(champNumber.value);
    if(sortie3===false || champNumber.value.trim()==="")
    {
        error[2].style.display='block';
        champNumber.classList.add("invalid");
        champNumber.classList.remove("valid");
    }
    else{
        champNumber.classList.remove("invalid");
        champNumber.classList.add('valid');
        error[2].style.display='none';
        compteur++;
        numUser=champNumber.value;
    }
    if(compteur===3)//i.e tous les champs sont bien remplies

    {  
        step1.classList.add("invisible");
        step2.classList.remove("invisible");
   }
})

/*Gestion des évènements relatifs au second step */
let switcher=document.getElementById('switcher');
let arcade=0,advanced=0,pro=0;
let plan=document.querySelectorAll('#Game .game');
let yearly=0,monthly=0;



    plan[0].addEventListener('click' ,()=>
    {
        if(plan[0].id!='arcade')
        {
            plan[0].id='arcade';
            plan[1].id='';
            plan[2].id='';

        }
        else{
            plan[0].id="";
        }
         
    })
   
    plan[1].addEventListener('click' ,()=>
    {
        if(plan[1].id!='arcade')
        {
            plan[1].id='arcade';
            plan[0].id='';
            plan[2].id='';

        }
        else{
            plan[1].id="";
        }
         
    })

    plan[2].addEventListener('click' ,()=>
    {
        if(plan[2].id!='arcade')
        {
            plan[2].id='arcade';
            plan[0].id='';
            plan[1].id='';

        }
        else{
            plan[2].id="";
        }
         
    })


   


document.getElementById('bouton2').addEventListener('click',()=>
{
    if(plan[0].id==='arcade')
    {
        arcade=1;
    }
    else{
        arcade=0;
    }

    if(plan[1].id==='arcade')
    {
        advanced=1;
    }
    else{
        advanced=0;
    }

    if(plan[2].id==='arcade')
    {
         pro=1;
    }
    else{
        pro=0;
    }
    /*Bouton switcher*/
    if(switcher.checked===true)
    {
        monthly=1;
        yearly=0;
    }
    else
    {
        monthly=0;
        yearly=1;
    }
    if(pro+arcade+advanced===0)//on vérifie si il y a au moins une sélection.
    {
        document.getElementById('bouton2').setAttribute('disabled');//sinon on désactive le bouton
    }
    else
    {
    document.getElementById('bouton2').removeAttribute('disabled');
    step2.classList.add('invisible');
    step3.classList.remove('invisible');
}
   
})

/*Gestion des évènements liés au step3 */

let bouton3=document.getElementById('bouton3');
let customizable=0,online=0,larger=0;
let checkbox=document.querySelectorAll('.checkbox');
let step4=document.getElementById('lastStep');

bouton3.addEventListener('click',()=>


{
    if(checkbox[0].checked)
    {
        online=1;
    }
    else
    { 
        online=0;
    }

    if(checkbox[1].checked)
    {
        larger=1;
    }
    else
    { 
        larger=0;
    }

    if(checkbox[2].checked)
    {
        customizable=1;
    }
    else
    { 
        customizable=0;
    }
    if(customizable+larger+online===0)//Désactivation du bouton si rien n'est cochée
    {
       bouton3.setAttribute('disabled');
    }
    else if(customizable+larger+online>0)
    {
        bouton3.removeAttribute('disabled');
        step3.classList.add('invisible');
        step4.classList.remove('invisible');
    }
    Confirmation();
})


/*Gestion des évènements liés au step4 */

let confirm=document.getElementById('confirm');

confirm.addEventListener('click',()=>
{
    document.querySelector('.subscription').style.display='none';
    document.querySelector('.success').style.display='flex';
   
})


/*....... Gestion des évènements relatifs au retour..........*/
//Retour 1

let goback1=document.getElementById('goback1');
console.log(goback1);

goback1.addEventListener('click' ,()=>
{
    step2.classList.toggle("invisible");
    step1.classList.remove('invisible');
   
})

//Retour2

goback2.addEventListener('click' ,()=>
{
    step3.classList.toggle("invisible");
    step2.classList.remove('invisible');
   
})

//Retour 3

goback3.addEventListener('click' ,()=>
{
    step4.classList.toggle("invisible");
    step3.classList.remove('invisible');
   
})


let subs=document.querySelectorAll('.subs');

function Confirmation(){
    if(arcade===1)
    {
        document.getElementById('choice').innerText='Arcade';
        document.getElementById('Price').innerText='9';
        sum=9;
    }
    
    else if(advanced===1)
    {
        document.getElementById('choice').innerText='Advanced';
        document.getElementById('Price').innerText='12';
    }
    else if(pro===1)
    {
        document.getElementById('choice').innerText='Pro';
        document.getElementById('Price').innerText='15';
    }

    if(monthly===1)
    {
        document.getElementById('duration').innerText='(Monthly)';
    }
    else{
        document.getElementById('duration').innerText='(Yearly)';
    }

  
    for(i=0;i<subs.length;i++)
    {
        if(checkbox[i].checked===false)
    {
        subs[i].classList.add('invisible');
    }
    else{
        subs[i].classList.remove('invisible');
    }

}
}


document.getElementById('change').addEventListener('click' ,()=>
{
    step4.classList.add('invisible');
    step2.classList.remove('invisible');
})

/*By repsorp39 */
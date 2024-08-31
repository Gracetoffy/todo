var body = document.getElementById('body');
var sun= document.getElementById('sun');
var moon = document.getElementById('moon');
var box = document.querySelectorAll('.box');
var addtodo = document.getElementById('addtodo');
var todolist= document.querySelector('.todoList');
var toggle = document.querySelector('.toggle');
var itemNo =document.getElementById('no');
var todoCont = document.querySelectorAll('.todoCont');
var tick =document.querySelectorAll('.check');
var cross =document.querySelectorAll('.cross');
var elements = document.querySelectorAll('.checkbox');
var todoItem =document.querySelectorAll('.todoItem');
var clrComp = document.getElementById('clearComp');
var checked = document.querySelectorAll('.checked');
var Completed = document.getElementById('completed');

//no of items in list
itemNo.innerHTML=`${todoItem.length}`;
    





addtodo.addEventListener('click',function(){

})

todoItem.forEach(function(item,index){   
    item.addEventListener("mouseenter", function(){
cross[index].style.display='block';
    })
    item.addEventListener("mouseleave", function(){
      cross[index].style.display='none';  
    })

    
})





cross.forEach(function(item,index){
    item.addEventListener("click", function() {
      
        todoItem[index].remove();

        
        itemNo.innerHTML=`${todoItem.length}`;
    })
})

//clear completed 
clrComp.addEventListener('click', function(){
    
    const CompletedItems = todolist.querySelectorAll('.comp')
    CompletedItems.forEach(function(item){
        item.remove();})
 
} 
)

// show completed
Completed.addEventListener('click',function(){
    const CompletedItems = todolist.querySelectorAll('.comp')
    
    
        if(ite.classList.contains('comp')){
            item.style.display ='block';
        }else{
            item.style.display ='none';
        }
    




})

    



elements.forEach(function(item,index){
    //check mark 
    item.addEventListener("click", function(){
        if(tick[index].style.display=='none'){
            tick[index].style.display='block'
            todoCont[index-1].classList.add('checked');
elements[index].style.background='linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
        todoCont[index-1].style.textDecorationLine='line-through';
        todoCont[index-1].style.color='hsl(236, 9%, 61%)';
        todoItem[index- 1].classList.add('comp');
        
}else{
            tick[index].style.display='none';
            elements[index].style.background='none';
            todoCont[index-1].style.textDecorationLine='none'; 
            if(sun.style.display=='block'){
                 todoCont[index-1].style.color='hsl(0, 0%, 98%)';
            }else{
               todoCont[index-1].style.color='hsl(235, 19%, 35%)'; 
           
            } 
            
            
             
        }
    console.log(index);

}
    
    )


})




//toggle btw dark and light mode
moon.addEventListener('click',function(){
   
        moon.style.display='none';
        sun.style.display='block';
        body.style.backgroundColor='hsl(235, 21%, 11%)'
        body.style.transition='backgroundColor, 1s';
        for(const element of box){
            element.style.backgroundColor='hsl(235, 24%, 19%)';
          
            addtodo.style.backgroundColor='hsl(235, 24%, 19%)'
            todolist.style.backgroundColor='hsl(235, 24%, 19%)'
            element.style.color='hsl(0 0% 98%)'
        }
        for(const element of todoCont){
        element.style.color='hsl(236, 33%, 92%)'
        }
          
        if( body.style.backgroundImage= 'url(./images/bg-desktop-light.jpg)'){
 body.style.backgroundImage='url(./images//bg-desktop-dark.jpg)'
        }else{
            body.style.backgroundImage='url(./images//bg-mobile-dark.jpg)'
        }
       
    
}
)
sun.addEventListener('click',function(){
    
        sun.style.display='none';
        moon.style.display='block';
        body.style.transition='backgroundColor, 1s'
        body.style.backgroundColor='hsl(0, 0%, 98%)'
        for(const element of box){
            element.style.backgroundColor='hsl(0 0% 98%)'
           element.style.color='hsl(235, 19%, 35%)'
            addtodo.style.backgroundColor='hsl(0 0% 98%)'
            todolist.style.backgroundColor='hsl(0 0% 98%)'
            addtodo.style.backgroundColor='hsl(236, 33%, 92%)'
            
            
        } for(const element of todoCont){
        element.style.color='hsl(235, 19%, 35%)'
        }
         
        if (body.style.backgroundImage='url(./images/bg-desktop-dark.jpg)') {
            body.style.backgroundImage= 'url(./images/bg-desktop-light.jpg)';
        }else{
            body.style.backgroundImage='url(./images//bg-mobile-light.jpg)'
        }
}
)


//Add task to list
addtodo.onkeydown= function(e){
    if (e.keyCode == 13){
        
        if(addtodo.value ===''){
            alert('write something!!')
        }
        else{
            let newTodo = document.createElement('div');
            let newcheck = document.createElement('div');
            let newtodocont = document.createElement('div');
            let newCross = document.createElement('img');
             newCross.setAttribute('src',"./images/icon-cross.svg")
            newcheck.classList.add('checkbox');
           
            
            newtodocont.classList.add('todoCont');
            newCross.classList.add('cross');
            newTodo.appendChild(newcheck);
            newTodo.appendChild(newtodocont);
            newTodo.appendChild(newCross);

            newtodocont.innerHTML=addtodo.value;
            newTodo.classList.add('box');
            todolist.appendChild(newTodo);

            if(moon.style.display=="none"){
                newTodo.style.backgroundColor='hsl(235, 24%, 19%)';
                newtodocont.style.color = 'hsl(236, 33%, 92%)';
      } else {
        // Apply light mode styles to the new elements
        newTodo.style.backgroundColor = 'hsl(0, 0%, 98%)';
        newtodocont.style.color = 'hsl(235, 19%, 35%)';
      }

            box = document.querySelectorAll('.box');
            todoCont = document.querySelectorAll('.todoCont');
      
            
        }
        addtodo.value = "";
    }
}







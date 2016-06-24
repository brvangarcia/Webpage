$(document).ready(function(){
  var items, count = 0;

  function init(){
      items = JSON.parse(localStorage.getItem('todos'));
     if(!items) {
      
       items = [];
     }
    for(var i = 0; i < items.length; i = i + 1){
      $('#todoList').prepend('<li class="list-group-item" value="'+count'">'+items[i]+'<span class="pull-right"><a href="#" class="complete">complete | </a><a href=# class="delete">x</a></span></li>');
      count = count + 1;
    }
  }

    init();


  function addInputText(event){
    event.preventDefault();
    var text = $('#todoInput').val();
    if (text != ""){
      items.push(text);
      $('#todoInput').val('');
      $('#todoList').prepend('<li class="list-group-item" value="'+count'">'+text+'<span class="pull-right"><a href="#" class="complete">complete | </a><a href=# class="delete">x</a></span></li>');
      count = count + 1;
      localStorage.setItem('todos', JSON.stringify(items));
    }
  }

  function check(event){
    event.preventDefault();
    var text = $(this).closest('li').html();
    $(this).closest('li').remove();
    $('#todoList').append('<li class="list-group-item list-group-item-danger" value="'+count'">'+text+'</li>');
  }

  function deleteItem(event){
    event.preventDefault();
    $(this).parent().parent().remove();
    var id = $(this).closest('li').val();
    items.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(items));
    
  }

  $('#todoAdd').click(addInputText);
  $('#todoList').on('click', 'a.delete', deleteItem);
  $('#todoList').on('click', 'a.complete', check);
})

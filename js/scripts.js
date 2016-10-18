//business logic
function Ticket (release, showTime, age){
  this.release = release;
  this.showTime = showTime;
  this.age = age;
}

Ticket.prototype.price = function(){
    var basePrice = 4

    if (this.release === 2) {
      basePrice -= 2 ;
    }

    if (this.showTime === 1) {
      basePrice += 2 ;
    }

    if (this.age > 54) {
      basePrice -= 2 ;
    }
}

//front end logic
$(document).ready(function() {
  $("form#movie-thing").submit(function(event) {
    event.preventDefault();

    var title = parseInt($("#title").val());
    var time = parseInt($("#time").val());
    var age = parseInt($("input#age").val());
    console.log(title);
    console.log(time);
    console.log(age);

    var newTicket = new Ticket (title, time, age);

    /*console.log(release);
    console.log(showTime);
    console.log(age);
    console.log(price);*/
    console.log(newTicket);
    console.log(newTicket.price());

    $("#output").append("<li>" + newTicket.price() + "</li>");

  });
});

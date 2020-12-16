class Form {
    constructor() {
      this.input = createInput("Enter Name");
      this.button = createButton('Go');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
        this.name=null;
      this.title.html("Time Sheduler App");
      this.title.position(350, 0);
      this.input.position(200,120);
      this.button.position(430,100);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.name = this.input.value();
        this.greeting.html("Hi" + this.name)
        this.greeting.position(330,100);
      });
    }
  }
  
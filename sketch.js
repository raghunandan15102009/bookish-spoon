var form,state;

function setup(){
  createCanvas(1200,400);
 form=new Form();
 state=new State();
  database=firebase.database();
}

function draw(){
  display();
}

function display (){
 form.display();
 state.display();
}
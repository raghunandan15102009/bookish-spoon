class State {
  constructor() {
    this.button1 = createButton('teacher');
    this.button2 = createButton('student');
    this.input1 = createInput('Task1');
    this.input2 = createInput('Task2');
    this.input3 = createInput('Task3');
    this.input4 = createInput('Task4');
    this.input5 = createInput('Task5');
    this.apply = createButton('apply');
    this.greeting1 = createElement('h2');
  }
  hide() {
    this.button1.hide();
    this.button2.hide();
  }
  display() {
    update();
    this.button1.position(200, 200);
    this.button2.position(600, 200);
    this.button1.mousePressed(() => {
      hide();
      this.input1.position(600,350);
      this.input2.position(600,300);
      this.input3.position(600,250);
      this.input4.position(600,200);
      this.input5.position(600,150);
    })
    if ((this.input1 !== null && this.input2 !== null && this.input3 !== null && this.input4 !== null && this.input5 !== null) && this.apply.mousePressed) {
      this.greeting1.html("Yay tasks are assigned to the student");
      this.greeting1.position();
    }
  }
  update() {
    database.ref(task1).set({
      task1: this.input1
    })
    database.ref(task2).set({
      task2: this.input2
    })
    database.ref(task3).set({
      task3: this.input3
    })
    database.ref(task4).set({
      task4: this.input4
    })
    database.ref(task5).set({
      task5: this.input5
    })
  }
}
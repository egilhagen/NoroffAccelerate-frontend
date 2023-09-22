console.log("Console message")

let globalMessage = "Global";

function outerFunc(){
    console.log(globalMessage);
}

function funcA(){
    let globalMessage = "innerA";

    outerFunc();
}

funcA();

function Duck(id, habitat){
    this.id = id;
    this.habitat = habitat;
    let sound = "quack";
}

let duckObj = new Duck(1,"swamp");
console.log(duckObj);
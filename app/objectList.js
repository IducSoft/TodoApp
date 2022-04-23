class ObjectList{

    constructor(todo){

        this.todo= todo;
        this.complete = false;
        this.RandomNumber = this.Random();
    }


    Random(){

        let number = Math.floor(Math.random() * 10000) + 1;
        return number
    }

    
}

export default ObjectList;
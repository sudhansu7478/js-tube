const people={
    printIntroduction: function()
    {
        console.log(`my name is ${this.name}.Am i human? ${this.isHuman}`);
    }    
    };
    const me = Object.create(people);
    me.name = "marry";
    me.isHuman = true;
    me.printIntroduction();
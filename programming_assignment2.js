/* const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    bird.canJump = true;
    console.log("This bird: ", bird)
    
    bird.hasFeathers = true;
    bird.canJump = true
    
    function birdCan(){
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
     }
    }
    birdCan();
    */

    /* function logDiary(diary) {
        var diary = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
        console.log(diary)
    }
    logDiary();
    */

    const animal = {

        canJump: true
        
        };
        
        const bird = Object.create(animal);
        
        bird.canFly = true;
        bird.canJump = true;
        console.log("This bird: ", bird)
        
        bird.hasFeathers = true;
        bird.canJump = true;
        
        function animalCan(){
        for (prop of Object.keys(bird)) {
            console.log(prop + ": " + bird[prop]);
         }
        }
        animalCan();
        
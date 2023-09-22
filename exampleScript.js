
// LECTURE 1: INTRODUCTION TO JAVASCRIPT




/** LECTURE 2: FUNDAMENTAL CODING CONSTRUCTS
 * CLOSURE
 * Closure is ....
 */ 

        // A closure
        function getDatabase(database, table){
            return function(data){
                database.add(table, data);
            }
        }

        //Create user
        const createUser = getDatabase(db, 'user');
        createUser('Egil')

        //Create todo
        const createTodo = getDatabase(db, 'todo');
        createUser('Buy milk')
    
    ////////////////////////////////////////////////////
    
    /**
     * PASSING BY REFERENCE VS VALUE
     * ...................
     */

        const price = 5;
        const coffee = {
            description: 'Black',
            price: 5
        };

        function changeArgument(price, coffee){
            price = price * 2;
            coffee.price = coffee.price * 2;
        }

        changeArgument(price,coffee);

        console.log(price);         //Returns 5
        console.log(coffee.price);  //Returns 10

    ////////////////////////////////////////////////////

    /**
     * COLLECTION
     * ...................
     */

    const array = ['JavaScript', 'js', 'dog'];
    console.log(array.length);                   // Returns 3
    array.push('cat');                           // Adds cat to the array
    array.pop();                                 // Removes cat from the array
    const getWord = array[2];                    // Gets dog
    const characters = getWord.split('');        // Gives ['d', 'o', 'g']
    const sentence = 'Can i pet that dog?';
    const sentenceArray = Array.from(sentence);  // Gives ['C', 'a', 'n', ' ', 'i', ' ', 'p', 'e', 't', ' ', 't', 'h', 'a', 't', ' ', 'd', 'o', 'g', '?']

    const placeHolder = Array(5).fill('?')       // Gives ['?', '?', '?', '?', '?']




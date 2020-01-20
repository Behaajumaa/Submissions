
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {


  if (text === 'quit\n' || text ==='exit\n' ) {
    quit();
  }
  else if(text === 'hello\n'){
    hello(text);
  }else if(text === 'help\n'){
    help();
  }
// I added the below
  else if(text.substring(0,5) === 'hello'){
    hello(text); 
  }// I added the above
  else if(text === 'list\n'){
    list();
  }

  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

/**
 * Says hello
 *@param  {string}
 * @returns {void}
 */
function hello(text){
  console.log(text)
  var Newtext = text.substring(5,text.length-1); 
  console.log('hello'+Newtext+'!')
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help the application
 *its return what commands you can inter 
 * @returns {string}
 */

function help() {
    console.log(' \n\nYou can inter these commands \n  exit\n  quit\n  help \n  hello or any text start with hello word ' )
  }


  function list (){
    let listOFTasks = ["exit", "quit", "help","hello","list","hello and any string after it "]; 
    console.log("\nThe list of tasks you can use them in this App are:")

      for (let i =1;i<listOFTasks.length;i++)
      console.log(i+'.'+listOFTasks[i])
  }
// The following line starts the application
startApp("Behaa Jumaa ")

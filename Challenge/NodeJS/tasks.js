
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
function startApp(name) {
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


  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if (text === 'hello\n') {
    hello(text);
  } else if (text === 'help\n') {
    help();
  }
  // I added the below
  else if (text.substring(0, 5) === 'hello') {
    hello(text);
  }// I added the above
  else if (text === 'list\n') {
    list();
  }

  else if (text.substring(0, 3) === 'add') {//Here I divid the string 'add blabal'to  just  add 
    add(text.substring(4, text.length)); //useing the blabla here :) 
  }

  else if (text.substring(0, 6) === 'remove') {//Here I divid the string 'remove number'to  just  remove 
    remove(text.substring(6, text.length-1)); //useing the number here :) 
  }

  else if (text.substring(0, 4) === 'edit') {//Here I divid the string 'remove number'to  just  edit 
    edit(text.substring(5, text.length-1)); //useing the number and 'new text' here :) 
  }

  else if (text.substring(0, 5) === 'check') {
    check(text.substring(5, text.length-1)); //useing the number and 'new text' here :) 
  }
  else if (text.substring(0, 7) === 'uncheck') {
    uncheck(text.substring(7, text.length-1)); //useing the number and 'new text' here :) 
  }

  else {
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
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}

/**
 * Says hello
 *@param  {string}
 * @returns {void}
 */
function hello(text) {
  console.log(text)
  var Newtext = text.substring(5, text.length-1);
  console.log('hello' + Newtext + '!')
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Help the application
 *its return what commands you can inter 
 * @returns {string}
 * 
 * 
 */ 


var fs = require("fs");
  var fileContent = ["exit", "quit", "help", "hello", "list","add","remove","edit","check","uncheck","hello and any string after it "];

fs.writeFile("./database.json",JSON.stringify( fileContent,null,4) ,(err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});


let listOFTasks = ["exit", "quit", "help", "hello", "list","add","remove","edit","check","uncheck", "hello and any string after it "];

let data = JSON.stringify(listOFTasks);

let undone = '';  let done = '✓';



function help() {
  console.log(' \n\nYou can inter these commands \n')

  for (let i = 0; i < listOFTasks.length; i++){

  if (listOFTasks[i]==="check")
  console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i]+":  which let you know if this task is done  ")
  
  else if (listOFTasks[i]==="uncheck")
  console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i]+":  which let you know if this task isn't done  ")

  else 
  console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])

  
}
}
// list function list all tasks in the App
function list() {
  console.log("\nThe list of tasks you can use them in this App are:")

  for (let i = 1; i < listOFTasks.length; i++)
  console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])

}
// add function add   a new task into the list of tasks and display the new list 
function add(x) {
  if (x.length < 1)
    console.log("Error: YOU SHOULD ADD SOME THING")
  else if (x.length > 0) {
    listOFTasks.push(x);
    console.log("\nThe list of tasks after add " + x + "is:")
    for (let i = 1; i < listOFTasks.length; i++)
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])
  }

}

// add function add   a new task into the list of tasks and display the new list 
function remove(x) {

  console.log("\nThe list of tasks before remove is:")
  for (let i = 0; i < listOFTasks.length; i++) {
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])
  }

 if (x == 0) {
    console.log(listOFTasks.pop());
    console.log("\nThe list of tasks after remove last emement is:")
    for (let i = 1; i < listOFTasks.length; i++)
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])
  }

  else if (x<0 || x > listOFTasks.length){
    console.log("\n   ERROR:Can not remove element does not exist !!\n\t You enter a number that does not exist")
  }

  else {
        listOFTasks.splice(x-1, 1);
        console.log("\nThe list of tasks after remove emement by index is:")
        for (let i = 1; i < listOFTasks.length; i++)
        console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])
      }  

}// end of remove function



function edit(x) {

  if (x.length ==0)
    console.log("Error: YOU SHOULD ADD number and NEW TEXT ")

  else if (x == "new text" ) {
    listOFTasks[listOFTasks.length-1]="new text";
    console.log("\nThe list of tasks after add " + x + "is:")
    for (let i = 1; i < listOFTasks.length; i++)
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])
  }
  else if (x == "1 new text" ) {
    listOFTasks[0]="new text";
    console.log("\nThe list of tasks after add " + x + "is:")
    for (let i = 1; i < listOFTasks.length; i++)
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])

  }

}// end of edit function


function check(x) {

  if (x.length ==0){
    console.log(x)
    console.log("Error: YOU SHOULD ADD check plus number ")
  }

  else if (x >= 1 ) {
    for (let i = 1; i < listOFTasks.length; i++)
    if (x==i)
    console.log(i + '. ['+done+' ]' +''+ listOFTasks[i])
    else
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])

  }

}// end of check function

function uncheck(x) {

  if (x.length ==0){
    console.log(x)
    console.log("Error: YOU SHOULD ADD Uncheck plus number ")
  }

  else if (x >= 1 ) {
    for (let i = 1; i < listOFTasks.length; i++)
    if (x==i)
    console.log(i + '. [ '+undone+' ]' +''+ listOFTasks[i])
    else
    console.log(i + '. ['+done+' ]' +''+ listOFTasks[i])

  }

}// end of uncheck function









// The following line starts the application
startApp("Behaa Jumaa ")

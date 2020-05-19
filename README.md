# Typog.js
A library for a javascript typewriter ⌨️


## How to use Typog.js
First of all, integrate Typog.js into your site via this html code
```html
<script src="https://cozax.github.io/typog/js/stable/typog.min.js"></script>
```
Next, here is a code template in order to configure typog.js
```js
//The "addEventListener" is very important for the code or it'll be an error
document.addEventListener("DOMContentLoaded", () => {
	//Call the class
	let writer = new typog("TypeText", 70); //new typog("ID of your element", typingSpeed)
	writer.write("This text will be written with typog yey! Awesome."); //There are other functions
})
```

## Available functions

> # .wait(ms)
> This function can be used instead of setTimeout.
```js 
writer.wait(1500).then(() => {console.log("GG")});
```
 ![Wait function example](https://media.discordapp.net/attachments/709086749082779648/712309215120850984/waitms.gif)


> # .write(string)
> This function is used to write a string that will be visible via the element you have defined
```js 
writer.write("Typog.js");
```
 ![Write function example](https://media.discordapp.net/attachments/709086749082779648/712095455860752464/write.gif)



> # .del(chars)
> This function deletes the text content of the element you have defined.
```js 
writer.del(); //Without arguments, the entire string will be removed.
writer.del(7) //Only 7 characters will be removed
```
![Del function without args example](https://media.discordapp.net/attachments/709086749082779648/712097352948645980/del.gif)
![Del function with args example](https://media.discordapp.net/attachments/709086749082779648/712310183409221722/delnum.gif)


> # .infinite(string, timeout)
> Writes and deletes a user-defined string. The timeout is set to 1500ms by default, and can be changed. The timeout argument is completely optional 
```js
writer.infinite("Ahr ma boi I need donut! 🍩");
```
![Infinite function with string arg example](https://media.discordapp.net/attachments/709086749082779648/712098913720467486/infinitestring.gif)



> # .infinite(array, timeout)
> Writes and deletes a user-defined array of strings. The timeout is set to 1500ms by default, and can be changed. The timeout argument is completely optional 
```js
writer.infinite([
	"Phrase number one, yeehaw",
	"Ahr phrase number two",
	"nUmBeR tHrEe"
]);
```
![Infinite function with array arg example](https://media.discordapp.net/attachments/709086749082779648/712100266689691729/infinitearray.gif)

# Typog.js
A library for a javascript typewriter ⌨️

** **

## How to use Typog.js
First of all, integrate Typog.js into your site via this html code
```html
<script src="https://cozax.github.io/typog/js/typog.js"></script>
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

> # .write(string)
> This function is used to write a string that will be visible via the element you have defined
```js 
writer.write("Typog.js");
```
 ![enter image description here](https://media.discordapp.net/attachments/709086749082779648/712095455860752464/write.gif)

** **

> # .del()
> This function deletes the text content of the element you have defined.
```js 
writer.del(); //No arguments needed
```
![enter image description here](https://media.discordapp.net/attachments/709086749082779648/712097352948645980/del.gif)

** **

> # .infinite(string, timeout)
> Writes and deletes a user-defined string. The timeout is set to 1500ms by default, and can be changed. The timeout argument is completely optional 
```js
writer.infinite("Ahr ma boi I need donut! 🍩");
```
![enter image description here](https://media.discordapp.net/attachments/709086749082779648/712098913720467486/infinitestring.gif)

** **

> # .infinite(array, timeout)
> Writes and deletes a user-defined array of strings. The timeout is set to 1500ms by default, and can be changed. The timeout argument is completely optional 
```js
writer.infinite([
	"Phrase number one, yeehaw",
	"Ahr phrase number two",
	"nUmBeR tHrEe"
]);
```
![enter image description here](https://media.discordapp.net/attachments/709086749082779648/712100266689691729/infinitearray.gif)

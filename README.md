# **_`Java Script Lecture 5`_**

![]()

# **`Table of contents`**

- [ **Object**](#object)
- [ **Destructuring**](#destructuring)
- [**Spread**](#spread)
- [**This**](#this)
- [**New Date()**](<#new-date()>)

# **`Object`**

- [**What is a object in Java Script**](#what-is-a-object-in-java-script)
- [**Create Object**](#create-object)
- [**Methods Object**](#methods-object)

<br>

## **`What is a object in Java Script`**

---

In JavaScript, an object is a collection of properties, where each property is a key-value pair. Objects can be created using object literals, constructor functions, or classes.

For example, here's an object created using object literal notation:

![](/img/1.ex.png)

This object has three properties: `name`, `age`, and `hobbies`. The `name` and `age` properties are simple values (a string and a number, respectively), while the `hobbies` property is an array.

You can access object properties using dot notation or bracket notation like this:

![](/img/2.ex.png)

<br>

## **`Create Object`**

---

Here's an example of creating an object using object literal notation:

![](/img/3.ex.png)

In this example, we've created an object called `person` with three properties: `name`, `age`, and `hobbies`. The `name` property is a string, the `age` property is a number, and the `hobbies` property is an array of strings.

We can also create objects using constructor functions or classes. Here's an example using a constructor function:

![](/img/4.ex.png)

In this example, we've defined a constructor function called `Person` that takes three parameters: `name`, `age`, and `hobbies`. Inside the constructor function, we use the `this` keyword to set the properties of the object being created. We then create a new object `joh`n using the `Person` constructor function and passing in the appropriate values for each parameter.

<br>

## **`Methods Object`**

---

In addition to custom methods, there are some built-in methods in JavaScript that can help you work with objects. Here are a few examples:

- [**Object.entries()**](<#object.entries()>)
- [**Object.keys()**](<#object.keys()>)
- [**Object.values()**](<#object.values()>)

<br>

### **`Object.entries()`**

---

`Object.entries()`: This method returns an array of key-value pairs for each property in an object.

![](/img/5.ex.png)

In this example, we've used the `Object.entries()` method to get an array of key-value pairs for the `person` object. Each element in the resulting array is itself an array where the first element is the property key and the second element is the value.

<br>

### **`Object.keys()`**

---

`Object.keys()`: This method returns an array of all the keys (property names) in an object.

![](/img/6.ex.png)

In this example, we've used the `Object.keys()` method to get an array of all the keys in the `person` object.

<br>

### **`Object.values()`**

---

`Object.values()`: This method returns an array of all the values in an object.

![](/img/7.ex.png)

In this example, we've used the `Object.values()` method to get an array of all the values in the `person` object.

`Note that all of these methods work for any object, not just objects created using literal notation. They can be especially helpful when working with larger or more complex objects where it can be difficult to keep track of all the properties and values.`

<br>
<br>
<br>

## **`Destructuring`**

## **`Spread`**

---

### **`What is Destructuring and Spread in JavaScript`**

Destructuring and spread are two powerful features in JavaScript that can help make your code more concise and clear.

Destructuring is a way to extract values from arrays or objects and assign them to variables. This can be useful when you want to access specific properties of an object or certain elements of an array without having to write lengthy property or element references.

For example, let's say we have an object `person` with properties `name`, `age`, and `hobbies`:

![](/img/8.png)

We can use destructuring to extract the `name` and `age` properties of the `person` object like this:

![](/img/9.png)

Now we can use the name and age variables, which are assigned the corresponding values from the person object:

![](/img/10.png)

Spread syntax allows us to expand arrays or objects into individual elements or properties. This can be useful when we want to create a new array or object by combining existing ones.

For example, let's say we have two arrays of numbers:

![](/img/11.png)

We can use spread syntax to combine these arrays into a new one:

![](/img/12.png)

We can also use spread syntax to create a copy of an array or object:

![](/img/13.png)

Spread syntax can also be used for function arguments to pass an array or object as individual arguments:

![](/img/14.png)

Overall, destructuring and spread are powerful features in JavaScript that can make your code more concise and readable.

<br>
<br>
<br>

## **`This`**

---

### **`What is keyword "This" in JavaScript`**

---

In JavaScript, the keyword "this" refers to the object that is currently executing a function. When a function is called in JavaScript, the "this" keyword is set to the value of the object that the function is a method of. If the function is not a method of any object, then "this" will refer to the global object in non-strict mode and undefined in strict mode.

The value of "this" can also change depending on how the function is called. For example, if a function is called using the call() or apply() methods, you can explicitly set the value of "this" to a specific object. Additionally, when a function is used as an event handler, the value of "this" is set to the element that fired the event.

Understanding the behavior of "this" in JavaScript is important for writing effective and robust code.

### **`How the this keyword works`**
---
The behavior of the "this" keyword in JavaScript can be a bit complex, but it essentially refers to the object that is currently executing a function.

When a function is called, the value of "this" inside that function depends on how the function was invoked. There are several rules that determine the value of "this":

1) If the function is called using dot notation (i.e. as a method of an object), then "this" refers to the object that the method is called on.

2) If the function is called using call() or apply(), then "this" is set explicitly to the first argument passed to those methods.

3) If the function is called using the new keyword, then "this" refers to the instance of the object being created by the constructor function.

4) If none of the above rules apply, then "this" defaults to the global object in non-strict mode and undefined in strict mode.

Here's an example to illustrate how "this" works:

![](/img/15.png)

In this example, when we call `"myObj.myMethod()"`, `"this"` refers to `"myObj"`. But when we assign `"myObj.myMethod"` to a variable `"myFunc"` and call it without the dot notation, `"this"` now refers to the global object (or `undefined` in strict mode) because no other rules apply.

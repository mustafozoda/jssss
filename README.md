# **_`Java Script Lecture 5`_**

![]()

# **`Table of contents`**

- [ **Object**](#object)
- [ **Destructuring**](#destructuring)
- [**Spread**](#spread)
- [**This**](#this)
- [**New Date()**](<#new-date()>)

<br>
<br>
<br>

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


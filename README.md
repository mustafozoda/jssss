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

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
1.1getElementById("id")
Selects one element by its ID.
1.2etElementsByClassName("class")
Selects all elements with that class (HTMLCollection).
1.3querySelector("selector")
Selects the first element that matches any CSS selector.
1.4querySelectorAll("selector")
selects all matching elements (NodeList).

2. How do you create and insert a new element into the DOM?
ans:
Create element → document.createElement("div")
Add content → element.innerText = "Hello"
Insert it → parent.appendChild(element)

3. What is Event Bubbling? And how does it work?
ans:
Event starts from the clicked element and Then moves upward to parent elements 

4. What is Event Delegation in JavaScript? Why is it useful?
ans:
Adding event listener to a parent instead of many child elements.


5. What is the difference between preventDefault() and stopPropagation() methods? ans these in simple way
preventDefault()
ans:
Stops the default browser action
(Example: Stop form from submitting)

stopPropagation()
Stops the event from moving to parent elements
(Stops bubbling)

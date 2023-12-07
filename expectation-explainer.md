# I "EXPECT" a Visual Demo! - Visualizing the Linearity of Expectation

The linearity of expectation can at first be an unintuitive concept without many visual elements. What is this property? How do we try and find ways to visualize expectation? Why does this matter in the long run of our probability-related journey? This project seeks to use visuals, examples, and intuition to give a primer on the linearity of expectation without solely relying on mathematical derivation.

# LINEARITY OF EXPECTATION
<img src="expectationimgs/Fulllinearityequation.png" alt="Equation for the Linearity of Expectation">

Assuming that _a_ and _b_ are constants, the left hand side of the equation yields the same result as the right hand side. When we need to compute the expectation of an equation with multiple steps, the right hand side is a less daunting task. Instead of multiplying a and adding b to each iteration of the summation, this property allows us to calculate the expectation of X first. Then, we can multiply by the constant _a_ and add the constant _b_.
# THE EXAMPLE STORY
One simple example using a random variable and two constants is the calculation of salaries. In the fictional company Probability Inc., each person can calculate the salary they can make within a day using the same equation below. Every person at Probability Inc. makes salary _a_ dollars per hour and receives a bonus of _b_ dollars each day. Not everyone works the same amount of hours, as hours are equally distributed between 1-10.
![Image showing the defintion of the salary equation](expectationimgs/equationmeaning.png)

With our equation _$ = aX + b_, it is now possible to calculate the amount of money that one person expects to make after a work day.

<img src="expectationimgs/1) Set Up Equation.gif" alt="Set Up Each Individual">

By extension, it is also possible to set this up as an expectation-related problem. We can calculate how much money _n_ people make and also calculate the updated expectation based off of the data of the people's salary weighed by the equal factor P(X=x). 

<img src="expectationimgs/2) Multiple People.gif" alt="Set Up Five Individuals">

# THE FIRST HALF

<img src="expectationimgs/Equationfirsthalf.png" alt="First Half of Linearity Equation">

<iframe src="https://rooyi.github.io/salarydemo/salarydemo.html" width="500px" height="450px"></iframe>

# THE SECOND HALF
<img src="expectationimgs/Equationsecondhalf.png" alt="Second Half of Linearity Equation">

And the second half of the equation:
<iframe src="https://rooyi.github.io/salarycount/salarycount.html" width="500px" height="350px"></iframe>

<img src="expectationimgs/3) Newest.gif" alt="Second Half of Linearity Equation">



# WHAT DOES THIS MEAN?
<img src="expectationimgs/4) Wrap Up.gif" alt="Conclusion">

# FURTHER EXPLORATION
The example illustrated by this interactive tool is based off of the [MIT RES.6-012 Introduction to Probability](https://www.youtube.com/watch?v=0IJFBMIU6x4), Spring 2018 lecture on Linearity of Expectations as delivered by John Tsitsiklis.

If you enjoy seeing probability be visually depicted, the [Seeing Theory project](https://seeing-theory.brown.edu/) from a team at Brown University offers a wide range of probability concepts.

**Credits:**
Inspired by the open-source code from the Seeing Theory project from Brown University.
ChatGPT-3.5 has been used to help with some parts of code debugging/implementation.

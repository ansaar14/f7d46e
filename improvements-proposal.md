## Part 2: Written Evaluation

## Question 1:

The changes I would have to make to the application if the data came from an API instead of a json file would be; making an axios call to the endpoint to be able to retrieve the data. Furthermore, pulling from a json file means that it is synchronous, pulling from an API would make the processes asynchronous so the application has to wait for the data to load once the API has been hit. A useEffect hook would need to be used, for when the component is mounted and reruns if a prop or state changes. Moreover, the data that is returned from the API would then be stored either using useState (if needed locally) or stored globally using some sort of state management.

Upon fetching data with the useEffect hook, the next steps would be a loading indicator and error handling. A loading component can be added before the actual return statement, this way, the main statement is not executed if the component is not ready, and error handling would display the appropriate message to the user. Another solution for improving if the number of blog posts were really large, would be limiting the amount of data coming in, from the server-side, perhaps 10 blog posts at a time and enabling pagination that would help lower the data coming from the API.

## Question 2:

According to the nanoid documentation, it is advised not to use nanoid for React key prop since it should be consistent among renders. The React documentation specifies that keys are given to the elements in an array to give the elements a stable identity. By using this random generator, every element in the array is always viewed as new or changed; it consequently causes a rerender. This can have unwarranted effects and may cause some of your functionality to behave unpredictably.

Instead of nanoid I would use the index value of the loop, this way it would maintain a stable identity and would not catalyze any side effects.

import React from "react";

const Questions = () => {
  return (
    <div className="container">
      <p>
        <strong>1. Q: How React works?</strong>
      </p>

      <p>
        <strong>Ans. :</strong> React is a javaScript library which is very easy
        to use for building app and website. It works step by step up to down
        and single thead way. Although it is single way but we can use according
        to our requirements. getting any command to work React, first react make
        a virtual DOM (Document Object Model) after that it will compare with
        main DOM then it will set in main DOM. Since, React is component based
        so it is easy to control any parts application.
      </p>
      <hr />
      <p>
        <strong>2. Q: What are the difference between Props Vs State?</strong>
      </p>

      <p>
        <strong>Ans. :</strong> <br /> <strong>Props - </strong> <br />
        a) Props is one of object in React. <br />
        b) Props can not change value for use in components. <br />
        c) Props passing value, function.
        <br />
        <br />
        <strong>State -</strong> <br />
        a) State is javaScript object. <br />
        b) it use in react for representing for current situation of components.
        <br />
        c) trigger to change state update in react components.
      </p>
      <hr />
      <p>
        <strong>3. Q: How useState works?</strong>
      </p>

      <p>
        <strong>Ans. :</strong> useState is a most important hook in React. it
        takes two value, first is variable, second is a function which by set
        value like setValue. we can use it to change any things happened in
        application.
      </p>
    </div>
  );
};

export default Questions;

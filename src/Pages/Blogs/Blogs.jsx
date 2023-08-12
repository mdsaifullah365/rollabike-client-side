/* eslint-disable react/no-unescaped-entities */

const Blogs = () => {
  return (
    <section className='container py-12'>
      {/* Title */}
      <div className='text-5xl text-center text-base-100 mb-16 uppercase'>
        Our <span className='text-primary'>Blogs</span>
      </div>
      {/* Article One */}
      <article className='mb-10'>
        <h1 className='text-primary text-4xl mb-5'>
          How will you improve the performance of a React Application?
        </h1>
        <p className='text-base-100 text-2xl mb-5'>
          React uses virtual DOM and other clever techniques to improve the
          performance of a react application. But there is still we can make it
          better if we consider the things described below.
        </p>
        <ul className='text-base-100 list-disc text-xl ml-5 md:ml-14'>
          <li className='mb-3'>
            We should use react state as immutable. If we directly mutate an
            object or array in a state, react doesn't re-render the UI. Instead
            of mutating directly we can make a duplicate copy of an object using
            spread operator, then we should mutate the duplicate version. After
            that we can call setState to update the state. Otherwise react will
            not update the state when mutating directly.
          </li>
          <li className='mb-3'>
            In a react application we use multiple dependencies. But we don't
            use all methods of them. We can remove unused methods in the final
            bundle using lodash-webpack-plugin.
          </li>
          <li className='mb-3'>
            We can use react fragments to avoid additional wrapper. React
            fragments lets us group a list of children without adding an extra
            node in DOM.
          </li>
          <li className='mb-3'>
            Avoid inline function definition as prop. Instead, we can use an
            arrow function wrapper, then use that function as a prop.
          </li>
          <li className='mb-3'>
            Using array index as a key prop sometimes show incorrect results,
            specially when we remove or add an item in the list. Using other
            unique id is better. Or we can use 'shortid' module to generate
            unique id.
          </li>
        </ul>
      </article>

      {/* Article Two */}
      <article className='mb-10'>
        <h1 className='text-primary text-4xl mb-5'>
          What are the different ways to manage a state in a React application?
        </h1>
        <p className='text-base-100 text-2xl mb-5'>
          There are multiple categories of states. The most used four states are
          local state, global state, server state and the url state. Here are
          different ways to manage them.
        </p>
        <ul className='text-base-100 list-disc text-xl ml-5 md:ml-14'>
          <li className='mb-3'>
            Local state is used in one or another component. We manage local
            state using useState and useReducer.
          </li>
          <li className='mb-3'>
            Some times we need to lift up or pass callbacks down to update state
            from components. When we need to update a state from anywhere in the
            app, we should use global state. Context API is a built in solution
            to avoid props drilling. But its not a state management solution. We
            should use third party libraries like Redux, Zustand, Jotai to
            manage global state.
          </li>
          <li className='mb-3'>
            When we need to fetch data from the server we use server state.
            Fetching data takes time. So, we usually show a loading spinner when
            fetching. After fetching we show the data or the error in the UI. To
            manage these state is tricky as we need to handle the fetching
            states. SWR or React query are the two libraries for managing these
            types of server state. These libraries make our life easier for
            handling server state
          </li>
          <li className='mb-3'>
            When we access data from the url we use URL state. URL state is
            nicely managed if we use the latest version of React router or
            Next.js. If we use React router we can get all the information using
            some custom hooks like useHistory or useLocation.
          </li>
        </ul>
      </article>

      {/* Article Three */}
      <article className='mb-10'>
        <h1 className='text-primary text-4xl mb-5'>
          How does prototypical inheritance work?
        </h1>
        <p className='text-base-100 text-2xl mb-5'>
          Prototypical inheritance is a features in javascript which gives us
          ability to inherit object methods and properties from another object.
          At first we can set a prototype using methods and properties from
          existing object constructor then we can tell an object to inherit
          methods and properties from the prototype. So basically prototypical
          inheritance lets us to reuse object properties through a reference
          pointer function. we use Object.getPrototypeOf to get an prototype and
          Object.setPrototypeOf to set the prototype generally.
        </p>
      </article>

      {/* Article Four */}
      <article className='mb-10'>
        <h1 className='text-primary text-4xl mb-5'>
          Why you do not set the state directly in React?
        </h1>
        <p className='text-base-100 text-2xl mb-5'>
          React renders the UI using virtual DOM, It uses state management
          system to re-render UI. React re-renders an UI element when
          corresponding states has been changed. To change the state we should
          use setState function. Directly mutating object gives odd bugs and
          become hard to optimize. When we directly set a state without using
          setter function react can't update the state. So we see no changes in
          UI. It only make changes to that reference. Thats why we always use
          setter function (setState) to update the state.
        </p>
      </article>

      {/* Article Five */}
      <article className='mb-10'>
        <h1 className='text-primary text-4xl mb-5'>
          What is a unit test? Why should write unit tests?
        </h1>
        <p className='text-base-100 text-2xl mb-5'>
          Unit test is basically testing an individual component of a software
          or application to check if its working as expected. It is done in
          development phase. Proper unit testing can save time and money in the
          end.
        </p>
        <ul className='text-base-100 list-disc text-xl ml-5 md:ml-14'>
          <li className='mb-3'>
            Unit test can help fix bugs early. So that no bugs found in
            production. It can save money and time.
          </li>
          <li className='mb-3'>
            Writing unit test can help other developers to understand the code
            base clearly
          </li>
          <li className='mb-3'>
            Developers can read unit tests to get a basic idea of a application
            codebase.
          </li>
          <li className='mb-3'>
            Writing Unit tests make individual component reusable and reliable
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Blogs;

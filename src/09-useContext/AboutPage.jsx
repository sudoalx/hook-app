export const AboutPage = () => {
  return (
    <>
      <h1>About this app</h1>
      <hr />
      <div className="container">
        <p>
          This is a demo app to show the use of React Hooks. It's super basic.
        </p>
        <p>The app was created using:</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Bootstrap</li>
          <li>Vite</li>
        </ul>
        <p>Design was not a priority so it's not the best.</p>
      </div>
      <div className="lead text-start fst-italic">
        Source:{" "}
        <a
          className="text-decoration-none"
          href="https://github.com/sudoalx/hook-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </>
  );
};

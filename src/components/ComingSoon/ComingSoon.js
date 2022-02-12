import './ComingSoon.css';

function ComingSoon() {
  return (
    <div className="center">
      <h1 className="google-text-1">
        <span className="text-google-blue">C</span>
        <span className="text-google-red">o</span>
        <span className="text-google-yellow">m</span>
        <span className="text-google-blue">i</span>
        <span className="text-google-green">n</span>
        <span className="text-google-red">g </span>
        <span className="text-google-green"> S</span>
        <span className="text-google-yellow">o</span>
        <span className="text-google-red">o</span>
        <span className="text-google-blue">n</span>
        <span className="text-google-yellow">.</span>
        <span className="text-google-green">.</span>
        <span className="text-google-red">.</span>
      </h1>
      <br />
      <h2 className="google-text-2 text-google-blue">
        This page is currently under development and we hope it will be
        completed soon!
      </h2>
      <p className="google-text-3 text-align-center text-google-green">
        {' '}
        If you're interested in seeing our progress you can check our{' '}
        <span>
          {' '}
          <a
            className="text-google-yellow"
            href="https://github.com/gdsc-conestoga/website"
          >
            {' '}
            GitHub.
          </a>{' '}
        </span>
      </p>
    </div>
  );
}

export default ComingSoon;

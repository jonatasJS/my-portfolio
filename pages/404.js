import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function ErrorPage() {
  const [count, setCount] = useState(0);

  function addNumberAndCheckToChangePage () {
    console.log(count);
    if(count >= 20) return Router.push('/dashboard');

    setCount(count+1);
  }

  return (
    <div className="flexContainer">
      <title>Page not found</title>
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon.png"
      />

      <div className="textCenter">
        <h1>
          <span className="fade-in" onClick={addNumberAndCheckToChangePage} id="digit1">4</span>
          <span className="fade-in" onClick={addNumberAndCheckToChangePage} id="digit2">0</span>
          <span className="fade-in" onClick={addNumberAndCheckToChangePage} id="digit3">4</span>
        </h1>
        <h3 className="fade-in">PAGE NOT FOUND</h3>
        <Link
          href="/"
        >Return To Home</Link>
      </div>
    </div>
  )
}

export async function getStaticProps(_) {

  return {
    props: {}
  };
}
import Link from 'next/link'

const Header = () => (
  <div>
    <div>
      <h1>RED</h1>
    </div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>{`
      h1 {
        font-family: 'Open Sans';
        text-align: center;
        color: #AC0909;
      }

      a {
        color: #046CA0;
        font-size: 14px;
        text-decoration: none;
        font-family: "Open Sans"
        margin: 30px;
      }

      a:hover {
        color: #0452a0;
        font-size: 14px;
        text-decoration: none;
        font-family: "Open Sans"
        margin: 30px;
      }
      `}</style>
  </div>
)

export default Header

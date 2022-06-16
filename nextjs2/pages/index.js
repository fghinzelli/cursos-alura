import Link
  from "next/link";
function HomePage() {
  return (
    <>
      <div>Welcome to NextJS!</div>
      <img src="/images/avatar.png" alt="" />
      <Link href="/about"><a>Sobre</a></Link>
    </>
  )
}

export default HomePage;

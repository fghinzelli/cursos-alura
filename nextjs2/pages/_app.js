function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
        * {
          font-family: sans-serif;
          font-size: 24px;
        }
      `}</style>
     <Component {...pageProps} />
    </>
  )
}

export default MyApp

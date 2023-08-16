function Home() {
  const underConstructionStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "34px",
    color: "BLACK",
    textAlign: "center",
    paddingTop: "50px",
    height: "100vh",
    backgroundColor: "WHITE",
  };

  return (
    <body style={underConstructionStyles}>
      <span>🚧</span>
      <strong>EM CONSTRUÇÃO, UM LOCAL COM CONTEÚDOS DE VALOR CONCRETO</strong>
    </body>
  );
}

export default Home;

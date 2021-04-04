function Home() {
  return (
    <div>
      <p>Home Page</p>
      {data &&
        data.map((item) => {
          return <p>{item.firstName}</p>;
        })}
    </div>
  );
}

export default Home;

import { useFetch } from "./hooks/useFetch";

function App() {
  const data = useFetch();
  // const { result } = datas.data;
  // console.log(result);
  const { results } = data;
  console.log(results);

  return (
    <div className="App">
      <div className="Cards">
        <h1>hola</h1>
        {results.map((ele) => {
          return <p key={ele.id}>{ele.name}</p>;
        })}
        {/* {data.result.map((ele) => {
          return <p key={ele.id}>{ele.name}</p>;
        })} */}
      </div>
    </div>
  );
}

export default App;

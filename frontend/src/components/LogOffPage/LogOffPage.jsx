import { useNavigate } from "react-router-dom";

function LogOffPage (){
  const navigate = useNavigate();

  const MainPage = () => {
    navigate("/");
  }

  return(
    <div>
      <h1>Saiu</h1>
      <button onClick={MainPage}>Ir para a página principal</button>
    </div>
  )
}

export default LogOffPage

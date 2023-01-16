import {Container} from "react-bootstrap";  //페이지내 위치이동 자동 중앙 처리기능
import Layout from "./layouts/Layout";

function App() {
  return ( // Layout파일 처리,컨테이너블록 크기
  <Layout> 
     <Container style={{minHeight:"75vh"}}>App</Container> 
  </Layout> );
};
export default App;

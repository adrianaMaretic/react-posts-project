import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModal(event) {
    setModalIsVisible(false);
  }

  function showModal(event) {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModal}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModal}/>
      </main>
    </>
  );
}

export default App;

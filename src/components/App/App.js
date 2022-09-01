import "./App.css"

function CVQuestionairre() {
  return (
      <>
        <div>
        {/*Add the personal*/}
          <section>
            <input placeholder={"First name"}></input>
            <input placeholder={"Second name"}></input>
            <input placeholder={"title"}></input>
            <input placeholder={"Photo"}></input>
            <input placeholder={"Streetname and number"}></input>
            <input placeholder={"Email Address"}></input>
            <input placeholder={"Phone number"}></input>
            <input placeholder={"Github profile"}></input>
            <input placeholder={"Preferred Jobsite Profile"}></input>
            <textarea placeholder={"Describe yourself"}></textarea>
          </section>
        {/*Add the information like education*/}
        {/*Add the information like skills or languages and certs*/}
        {/*Add the information like job experiences*/}
        </div>
        </>
  )
}

function App() {

  return (<div id={"root"}>
      <header id={"app-header"}>
        <h1>Hello World</h1>
      </header>
      <div id={"wrapper"}>
        <section id={"cv-questioner"}>
          <div>
          <CVQuestionairre />
          </div>
          </section>
        <section id={"cv-result"}>
          sdfs
        </section>
      </div>
      </div>
  )
}

export default App
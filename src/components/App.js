import './App.css';

function App() {
  return (
    <div>
      <header className='p-5 bg-slate-800 text-center'>
        <h1 className='text-white text-3xl'>CV Builder</h1>
      </header>
      <div className='px-4 bg-gray-400 grid grid-flow-row'>
        <section className='p-12 justify-self-center  bg-slate-300'>
          <article>

            <form className='flex flex-col p-3 w-96 justify-center'>
              <div className='p-1 flex flex-row'>
                <label htmlFor='add-photo'>Add Photo</label>
                <input id='add-photo' ></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label>First name (optional)</label>
                <input></input>

                <label>Middle name (optional)</label>
                <input></input>

                <label>Last Name</label>
                <input></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label>Birthday</label>
                <input></input>

                <label>Birthplace</label>
                <input></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label>Street</label>
                <input></input>

                <label>Street nr.</label>
                <input></input>

                <label>ZIP</label>
                <input></input>

                <label>City</label>
                <input></input>

                <label>Country</label>
                <input></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label>E-Mail</label>
                <input></input>

                <label>Phonenumber</label>
                <input></input>
                <label>LinkedIn</label>
                <input></input>
                <label>XING</label>
                <input></input>
                <label>Github</label>
                <input></input>
              </div>
              <button className='bg-red-400 m-1 justify-self-center'>Save</button>

            </form>
          </article>

          <article>Education
            <form className='flex flex-col p-3 w-96 justify-center'>
              <div className='p-1 grid grid-flow-row'>
                <label>School</label>
                <input></input>
                <label>Education</label>
                <input></input>
                <label>Starting Year</label>
                <input></input>
                <label>Ending Year</label>
                <input></input>

              </div>
              <button className='m-1 bg-cyan-400 justify-self-center'>Add more?</button>

              <div className='p-1 grid grid-flow-row'>
                <label>College</label>
                <input></input>
                <label>Degree</label>
                <input></input>
                <label>Starting Year</label>
                <input></input>
                <label>Starting Year</label>
                <input></input>
                <label>Ending Year</label>
                <input></input>
              </div>
              <button className='m-1 bg-cyan-400 justify-self-center'>Add more?</button>

              <div className='p-1 grid-flow-row grid'>
                <label>Certificate</label>
                <input></input>

                <label>Link</label>
                <input></input>
              </div>
              <button className='m-1 bg-cyan-400 justify-self-center'>Add more?</button>

              <div className='p-1 grid grid-flow-row'>
                <label>Language</label>
                <input></input>

                <label>Proficiency?</label>
                <input></input>


              </div>
              <button className='m-1 bg-cyan-400 justify-self-center'>Add more?</button>


              <button className='bg-red-400 m-1 justify-self-center'>Save</button>

            </form>

          </article>
          <article>Practical
            <form className=' flex flex-col p-3 w-96 justify-center'>
              <div className='p-1 grid grid-flow-row'>
                <label>Job description</label>
                <input></input>
                <label>short description</label>
                <input></input>
                <label>Start year</label>
                <input></input>
                <label>End yaer</label>
                <input></input>
                <label>Accomplishments (short)</label>
                <input></input>
                <button>Add more?</button>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label>Project name</label>
                <input></input>

                <label>explanation</label>
                <input></input>

                <label>short url to repo</label>
                <input></input>

                <label>url to github pages or another deployment</label>
                <input></input>

              </div>
              <button className='m-1 bg-cyan-400 justify-self-center'>Add more?</button>
              <button className='bg-red-400 m-1 justify-self-center'>Save</button>

            </form>

          </article>
        </section>
        <section className='p-12 justify-self-center  bg-white m'>
          Finished CV to download
        </section>
      </div>
    </div >
  );
}

export default App;

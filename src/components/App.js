import './App.css';
import Profile from '../images/pexels.jpg'
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
                <label htmlFor='first-name'>First name (optional)</label>
                <input id="first-name"></input>

                <label htmlFor='middle-name'>Middle name (optional)</label>
                <input id='middle-name'></input>

                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name'></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='birthday'>Birthday</label>
                <input id='birthday'></input>

                <label htmlFor='birthplace'>Birthplace</label>
                <input id='birthplace'></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='street'>Street</label>
                <input id='street'></input>

                <label htmlFor='street-nr'>Street nr.</label>
                <input id='street-nr'></input>

                <label htmlFor='zip'>ZIP</label>
                <input id='zip'></input>

                <label htmlFor='city'>City</label>
                <input id='city'></input>

                <label htmlFor='country'>Country</label>
                <input id='country'></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='e-mail'>E-Mail</label>
                <input id='e-mail'></input>

                <label htmlFor='phone-number'>Phonenumber</label>
                <input id='phone-number'></input>
                <label htmlFor='linkedin'>LinkedIn</label>
                <input id='linkedin'></input>
                <label htmlFor='xing'>XING</label>
                <input id='xing'></input>
                <label htmlFor='github'>Github</label>
                <input id='github'></input>
              </div>
              <button className='bg-red-400 m-1 justify-self-center'>Save</button>

            </form>
          </article>

          <article>Education
            <form className='flex flex-col p-3 w-96 justify-center'>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='school-name'>School</label>
                <input id='school-name'></input>
                <label htmlFor='education'>Education</label>
                <input id='education'></input>
                <label htmlFor='starting-year'>Starting Year</label>
                <input id='starting-year'></input>
                <label htmlFor='ending-year'>Ending Year</label>
                <input id='ending-year'></input>

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
              </div>
              <button className='m-1 bg-cyan-400'>Add more?</button>
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
              <button className='m-1 bg-green-400 justify-self-center'>Save as a tabular CV (german)</button>
              <button className='m-1 bg-amber-300 justify-self-center'>Save as an international CV </button>

            </form>

          </article>
        </section>

        <section className='p-12 justify-self-center bg-white w-6/12 text-[10px]'>
          <header className='py-4 pl-4 flex flex-col'>
            <h1 className='text-cyan-600 text-2xl relative top-10'>Max Muster</h1>
            <div className='bg-cyan-600 text-white flex relative pt-12 pb-1 w-16 px-9 justify-center bottom-24 left-8'><h5>Lebenslauf</h5></div>
            <div className='relative pl-[24rem] bottom-28'>
              <img className="w-32" src={Profile} alt='profile'></img>
              <span className='bg-cyan-600 w-[3.05rem] h-[5.1rem] block relative left-[7.6rem] bottom-[5.1rem]'></span>
            </div>
          </header>
          <div className='content-wrapper grid grid-cols-2 pl-4 relative bottom-40 gap-x-8'>
            <article className='left-side'>
              <div className='person-card'>
                <h2 className='text-base font-thin border-b border-blue-100 mb-2'>Persönliche Daten</h2>
                <div>
                  <div className='grid grid-cols-2'>
                    <h4>Name</h4>
                    <p>Max Muster</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>Addresse</h4>
                    <p><span>Musterstraße 1</span><span>12345 Musterstad</span></p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>Tel.</h4>
                    <p>+49 234 1222344323</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>E-Mail</h4>
                    <p>Testmail@doesn'texist.com</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>Date of Birth and Birthplace</h4>
                    <p>2.3.4.1111 in whatever</p>
                  </div>
                </div>
              </div>
              <div className='education-card'>
                <h2 className='text-base font-thin border-b border-blue-100 mb-2'>Ausbildung</h2>
                <div className='grid grid-rows-3 border-b border-blue-100 pb-1 mb-1'>
                  <h4 className='text-cyan-600 font-medium'>2003 - 2006</h4>
                  <p>College of whatever</p>
                  <p>Degree: Are they even worth anything anymore?</p>
                </div>
                <div className='grid grid-rows-3 border-b border-blue-100 pb-1 mb-1'>
                  <h4 className='text-cyan-600 font-medium'>1999 - 2003</h4>
                  <p>School of power and friendship</p>
                  <p>Degree: The real world and it's ignored problems</p>
                </div>
              </div>
              <div className='abilities-skills'>
                <h4 className='text-base font-thin border-b border-blue-100 mb-2'>Skillsets</h4>
                <div className='grid'>
                  <h4 className='text-cyan-600 font-medium'>Subject</h4>
                  <p>short description and url</p>
                </div>
              </div>
            </article>
            <article className='right-side' >
              <div className='job-description'>
                <h2 className='text-base font-thin border-b border-blue-100 mb-2'>Berufliche Laufbahn</h2>
                <div>
                  <h4 className='text-cyan-600 font-medium'> Month and year until</h4>
                  <h5>Name of company</h5>
                  <h6>Title</h6>
                  <ul>
                    <li>Short descriptor</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div >
  );
}

export default App;

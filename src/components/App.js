import './App.css';
import Profile from '../images/pexels.jpg'
import LinkedIn from '../images/linkedin.svg'
import Github from '../images/github.svg'
import Xing from '../images/xing.svg'
import { useState } from 'react';
function App() {
  const [personal, setPersonal] = useState({
  })
  const [education, setEducation] = useState({
    school: [],
    college: [],

  })
  const [skills, setSkills] = useState({
    certs: [],
    languages: [],
  })
  const [workAndPersonal, setWorkAndPersonal] = useState({
    jobs: [],
    projects: []
  })

  function handlePersonal(event) {
    event.preventDefault()
    let newData = {}
    for (let i = 0; i < event.target.length; i++) {
      newData[event.target[i].name] = event.target[i].value
      //event.target[i].value = ""
    }
    console.log(newData)
    setPersonal(newData)
  }

  function handleCollege(event) {
    event.preventDefault()
    console.log("pipi", event.target[0].value)
    let edu = {}
    for (let i = 0; i < event.target.length; i++) {
      edu[event.target[i].name] = event.target[i].value
      event.target[i].value = ""
    }


    setEducation({
      ...education,
      college: [...education.college, edu]
    })
  }

  function handleLanguages(event) {
    event.preventDefault()
    let edu = {}
    for (let i = 0; i < event.target.length; i++) {
      edu[event.target[i].name] = event.target[i].value
      event.target[i].value = ""
    }
    console.log(edu)
    setSkills({
      ...skills,
      languages: [...skills.languages, edu]
    })

  }
  // FIXME: Causing an TypeError, not iterable
  function handleCerts(event) {
    event.preventDefault()
    let edu = {}
    edu[event.target[0].name] = event.target[0].value
    console.log(edu)
    setSkills({
      ...skills,
      certs: [...skills.certs, edu]
    })

  }

  function handleSchool(event) {
    event.preventDefault()
    let edu = {}
    for (let i = 0; i < event.target.length; i++) {
      edu[event.target[i].name] = event.target[i].value
      event.target[i].value = ""

    }
    setEducation({
      ...education,
      school: [...education.school, edu]
    })
    console.log(edu, education)
  }
  return (

    <div>
      <header className='p-5 bg-slate-800 text-center'>
        <h1 className='text-white text-3xl'>CV Builder</h1>
      </header>
      <div className='px-4 bg-gray-400 grid grid-flow-row'>
        <section className='p-12 justify-self-center  bg-slate-300'>
          <article>
            <form onSubmit={handlePersonal} className='flex flex-col p-3 w-96 justify-center'>
              <div className='p-1 flex flex-row'>
                <label htmlFor='add-photo'>Add Photo</label>
                <input name='photo' id='add-photo' ></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='first-name'>First name (optional)</label>
                <input required={true} name="firstName" id="first-name"></input>

                <label htmlFor='middle-name'>Middle name (optional)</label>
                <input name="middleName" id='middle-name'></input>

                <label htmlFor='last-name'>Last Name</label>
                <input required={true} name="lastName" id='last-name'></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='birthday'>Birthday</label>
                <input name="birthday" id='birthday'></input>

                <label htmlFor='birthplace'>Birthplace</label>
                <input name='birthplace' id='birthplace'></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='street'>Street</label>
                <input name='streetName' id='street'></input>

                <label htmlFor='street-nr'>Street nr.</label>
                <input name='streetNr' id='street-nr'></input>

                <label htmlFor='zip'>ZIP</label>
                <input name='zip' id='zip'></input>

                <label htmlFor='city'>City</label>
                <input name='city' id='city'></input>

                <label htmlFor='country'>Country</label>
                <input name='country' id='country'></input>
              </div>
              <div className='p-1 grid grid-flow-row'>
                <label htmlFor='e-mail'>E-Mail</label>
                <input required={true} name='mail' id='e-mail'></input>

                <label htmlFor='phone-number'>Phonenumber</label>
                <input name='phone' id='phone-number'></input>
                <label htmlFor='linkedin'>LinkedIn</label>
                <input name='linkedIn' id='linkedin'></input>
                <label htmlFor='xing'>XING</label>
                <input name="xing" id='xing'></input>
                <label htmlFor='github'>Github</label>
                <input name="github" id='github'></input>
              </div>
              <button type="submit" className='bg-red-400 m-1 justify-self-center hover:bg-red-600 hover:text-white active:bg-red-800'>Save</button>
            </form>
          </article>
          <article>
            <h2>Education</h2>
            <div onSubmit={handleSchool} className='flex flex-col p-3 w-96 justify-center'>
              <form className='p-1 grid grid-flow-row'>
                <label htmlFor='school-name'>School</label>
                <input required={true} name="schoolName" id='school-name'></input>
                <label htmlFor='education'>Education</label>
                <input required={true} name="degree" id='education'></input>
                <label htmlFor='starting-year'>Starting Year</label>
                <input required={true} name="educationStart" id='starting-year'></input>
                <label htmlFor='ending-year'>Ending Year</label>
                <input required={true} name="educationEnd" id='ending-year'></input>
                <button type="submit" className='my-2 bg-cyan-400 justify-self-stretch hover:bg-cyan-600 hover:text-white active:bg-cyan-800'>Add more?</button>
              </form>
              <form onSubmit={handleCollege} className='p-1 grid grid-flow-row'>
                <label htmlFor='college-name'>College Name</label>
                <input id='college-name' name='schoolName' required={true} ></input>
                <label htmlFor='degree'>Degree</label>
                <input id='degree' name='degree' required={true}></input>
                <label htmlFor='starting-year'>Starting Year</label>
                <input id='starting-year' name='startingyear' required={true}></input>
                <label htmlFor='ending-year'>Ending Year</label>
                <input id='ending-year' name='endingyear' required={true} ></input>
                <div className='flex'>
                  <label className='grow' htmlFor='finished'>Finished?</label>
                  <input className="relative" type={"checkbox"}></input>
                </div>
                <button type="submit" className='my-2 bg-cyan-400 justify-self-stretch hover:bg-cyan-600 hover:text-white active:bg-cyan-800'>Add more?</button>

              </form>
              <form onSubmit={handleCerts} className='p-1 grid-flow-row grid'>
                <label htmlFor='certificate'>Certificate</label>
                <input required={true} id='certificate' name='certificate'></input>
                <button type="submit" className='my-2 bg-cyan-400 justify-self-stretch hover:bg-cyan-600 hover:text-white active:bg-cyan-800'>Add more?</button>
              </form>
              <form onSubmit={handleLanguages} className='p-1 grid grid-flow-row'>
                <label htmlFor='language'>Language</label>
                <input id='language' name='language' required={true} ></input>
                <label htmlFor='proficiency'>Proficiency?</label>
                <input id='proficiency' name='proficiency' required={true}></input>
                <button type="submit" className='my-2 bg-cyan-400 justify-self-stretch hover:bg-cyan-600 hover:text-white active:bg-cyan-800'>Add more?</button>
              </form>
              <button className='bg-red-400 m-1 justify-self-center'>Save</button>
            </div>
          </article>
          <article>Practical
            <div className=' flex flex-col p-3 w-96 justify-center'>
              <form className='p-1 grid grid-flow-row'>
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
                <button type="submit" className='my-2 bg-cyan-400 justify-self-stretch hover:bg-cyan-600 hover:text-white active:bg-cyan-800'>Add more?</button>
              </form>
              <form className='p-1 grid grid-flow-row'>
                <label>Project name</label>
                <input></input>

                <label>explanation</label>
                <input></input>

                <label>short url to repo</label>
                <input></input>

                <label>url to github pages or another deployment</label>
                <input></input>

                <button type="submit" className='my-2 bg-cyan-400 justify-self-stretch hover:bg-cyan-600 hover:text-white active:bg-cyan-800'>Add more?</button>

                <button type="submit" className='bg-red-400 my-1 justify-self-stretch hover:bg-red-600 hover:text-white active:bg-red-800'>Save</button>

              </form>              <button className='m-1 bg-green-400 justify-self-center'>Save as a tabular CV (german)</button>
              <button className='m-1 bg-amber-300 justify-self-center'>Save as an international CV </button>

            </div>

          </article>
        </section>

        <section className='block p-12 justify-self-center bg-white w-6/12 text-[10px]'>
          <header className='py-4 pl-4 flex flex-col'>
            <h1 className='text-cyan-600 text-2xl relative top-10'>{Object.keys(personal).length === 0 ? "Max Mustermann" : personal.firstName + " " + personal.lastName}</h1>
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
                    <p>{Object.keys(personal).length !== 0 ? (personal.middleName == null) ? personal.firstName + " " + personal.lastName : personal.firstName + " " + personal.middleName + " " + personal.lastName
                      : "Max Maximillian Mustermann"}</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>Addresse</h4>
                    <p>{Object.keys(personal).length !== 0 ? personal.streetName + " " + personal.streetNr + " " + personal.zip + " " + personal.city : "Test Street Testing Zip Testing City"}</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>Tel.</h4>
                    <p>{Object.keys(personal).length !== 0 ? personal.phone : "+9909234 2342342"}</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>E-Mail</h4>
                    <p>{Object.keys(personal).length !== 0 ? personal.mail : "Mail@mail.com"}</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <h4>Date of Birth and Birthplace</h4>
                    <p>{Object.keys(personal).length !== 0 ? personal.birthday + " in " + personal.birthplace : "05.78.2003 - Berlin"}</p>
                  </div>
                  <div>
                    <ul>
                      <ProfileList
                        profileLink={personal.LinkedIn}
                        image={LinkedIn}
                      />

                      <ProfileList
                        profileLink={personal.xing}
                        image={Xing}
                      />

                      <ProfileList
                        profileLink={personal.github}
                        image={Github}
                      />
                    </ul>
                  </div>
                </div>
              </div>
              <div className='education-card'>
                <h2 className='text-base font-thin border-b border-blue-100 mb-2'>Bildung</h2>
                <div className='grid grid-rows-3 border-b border-blue-100 pb-1 mb-1'>
                  <h4 className='text-cyan-600 font-medium'>2003 - 2006</h4>
                  <p>College of Muster</p>
                  <p>Degree: Are they even worth anything anymore?</p>
                </div>

                <ul>

                  <li className='grid grid-rows-3 border-b border-blue-100 pb-1 mb-1'>
                    <h4 className='text-cyan-600 font-medium'>1999 - 2003</h4>
                    <p>School of power and friendship</p>
                    <p>Degree: The real world and it's ignored problems</p>
                    <p>Finished?</p>
                  </li>
                </ul>
              </div>
              <div className='abilities-skills'>
                <h4 className='text-base font-thin border-b border-blue-100 mb-2'>Fertigkeiten</h4>
                <div className='grid'>
                  <h4 className='text-cyan-600 font-medium'>Subject</h4>
                  <p>short description and url</p>
                </div>
              </div>
            </article>
            <article className='right-side' >
              <div className='job-description'>
                <h2 className='text-base font-thin border-b border-blue-100 mb-2'>Berufliche Laufbahn, Persönliche Projekte</h2>
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


function ProfileList({ profileLink, image }) {
  if (profileLink === undefined) {
    return (
      <li>
        <a className='grid grid-cols-2' href={"#"}>
          <img className='w-3' src={image} alt="logo" ></img><span>an Url to the profile</span>
        </a>
      </li>
    )
  }
  return (
    <>
      <li>
        <a className='grid grid-cols-2' href={profileLink}>
          <img className='w-3' src={image} alt="logo" ></img><span>{profileLink}</span>
        </a>
      </li>
    </>
  )
}

export default App;

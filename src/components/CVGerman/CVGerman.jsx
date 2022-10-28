/* this is the layout I am thinking of:
 * 2 Parts Division
 * Left Personal
 * Right Experiences
 * 
 * 
 * 
 */
import './CVGerman.css';
import Image from '../../images/pexels.jpg';
import Jobs from '../Jobs/Jobs';
import Education from '../Education/Education';
import Qualities from '../Qualities/Qualities';
export default function CVGerrman({ personal, school, certs, jobs }) {
    console.log(personal.photo)
    return (
        <div id="cvg-wrapper">
            <section id="cvg-profile">
                <div id='profile-header'>
                    <img id='profile-picture' src={ personal.photo === undefined? Image: personal.photo } alt='profile'></img>
                    <p>Birthday: { personal["birthday"] === undefined ? "02.02.1990" : personal["birthday"] }</p>
                    <p>Birthplace: { personal["birthplace"] === undefined ? "Somewhereville" : personal["birthplace"] }</p>
                </div>
                <div id='profile'>
                    <p>LinkedIn: { personal.linkedIn === undefined ? "not available" : personal.linkedIn } </p>
                    <p>Github: { personal.github === undefined ? "not available" : personal.github }</p>
                    <p>XING: { personal.xing === undefined ? "not available" : personal.xing }</p>
                    <p></p>
                </div>
                <div id='profile-footer'>
                    <p>Address: { personal["address"] === undefined ? "Somestr. 343, 23452 Munchenhausen" : personal["address"] }</p>
                    <p>Phone: { personal["phone"] === undefined ? "03452 3452345" : personal["phone"] }</p>
                    <p>Mail: { personal["mail"] === undefined ? "bla@blabla.com" : personal["mail"] }</p>
                </div>
            </section>
            <section id="cvg-infos">
                <header id='cv-header'>
                    <h1>Lebenslauf</h1>
                    <h2>
                        <span>{ personal.firstName === undefined ? "Nobodyssa " : personal.firstName + " " }</span>
                        <span>{ personal.secondName === undefined ? "Businessa" : personal.secondName }</span>
                    </h2>
                </header>
                <main>
                    <article>
                        <h3>
                            Jobs and Experiences
                        </h3>    
                        <Jobs jobs={ jobs } />
                    </article>
                    <article>
                        <h3>
                            Education
                        </h3>
                        {/* also should be mapped */ }
                        <Education education={school}/>
                    </article>
                    <article>
                        <h3>Relevant certs, skills, hobbys</h3>
                        {/* can be mapped */ }
                        <div className='certs-grid'>
                        <Qualities certs={certs}/>
                        </div>
                    </article>
                </main>
            </section>
        </div>
    );
}
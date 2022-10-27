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

export default function CVGerrman({ personal, school, certs, jobs }) {
    return (
        <div id="cvg-wrapper">
            <section id="cvg-profile">
                <div id='profile-header'>
                    <img id='profile-picture' src={ Image } alt='profile'></img>
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
                    {/*could be used as a component here */ }
                    <article>
                        <h3>
                            Jobs and Experiences
                        </h3>
                        {/*map this, too. */ }
                        <Jobs jobs={ jobs }></Jobs>

                    </article>
                    <article>
                        <h3>
                            Education
                        </h3>
                        {/* also should be mapped */ }



                        <div className='information'>
                            <div className='left'>
                                <p>Start and end date</p>
                            </div>
                            <div className='right'>
                                <h4>Education name</h4>
                                <p>What it is</p>
                                <p>when and if finished</p>
                            </div>
                        </div>
                        <div className='information'>
                            <div className='left'>
                                <p>Start and end date</p>
                            </div>
                            <div className='right'>
                                <h4>Education name</h4>
                                <p>What it is</p>
                                <p>when and if finished</p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <h3>Relevant certs, skills, hobbys</h3>
                        {/* can be mapped */ }
                        <div className='certs-grid'>
                            <div>
                                <h4>What it is</h4>
                                <p>proficiency, optional</p>
                                <p>proof, ooptional</p>
                            </div>
                            <div>
                                <h4>What it is</h4>
                                <p>proficiency, optional</p>
                                <p>proof, ooptional</p>
                            </div>
                            <div>
                                <h4>What it is</h4>
                                <p>proficiency, optional</p>
                                <p>proof, ooptional</p>
                            </div>
                        </div>
                    </article>
                </main>
            </section>
        </div>
    );
}
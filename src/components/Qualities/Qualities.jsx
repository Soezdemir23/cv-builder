export default function Qualities({certs}) {
    console.log(certs[0])
    if (certs.length === 0) {
    return (
        <div>
            <h4>What it is</h4>
            <p>proficiency, optional</p>
            <p>proof, ooptional</p>
        </div>
        )
    } else {

        return(<>
            {certs.map((cert) => (
                <div key={cert.id}>
                    <h4>{cert.name}</h4>
                    <p>{cert.proficiency}</p>
                    <p>{cert.proof}</p>
                </div>
            ))}
        </>)
    }
}
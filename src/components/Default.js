import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Default = () => {
    return (
    <div className="flex flex-col h-full flex items-center justify-center">
        <p className="text-5xl h-16 font-semibold">Nirmal Gautam</p>
        <p className="text-xl h-10">Computer Science Junior</p>
        <table>
            <tr>
                <td className="mx-4">
                    <a target = "_blank" rel = "noreferrer" href="mailto:nirmalg626@gmail.com"> 
                    <FontAwesomeIcon  className = "mx-2" icon ={faEnvelope} color = "#9CA3AF" />
                    </a>
                </td>
                <td>
                    <a target = "_blank" rel = "noreferrer" href="https://www.linkedin.com/in/nirmal-gautam-365b74206/"> 
                    <FontAwesomeIcon  className = "mx-2" icon ={faLinkedin} color = "#9CA3AF" />
                    </a>
                </td>
                <td>
                    <a target = "_blank" rel = "noreferrer" href="https://github.com/itsnirmal"> 
                    <FontAwesomeIcon  className = "mx-2" icon ={faGithub} color = "#9CA3AF" />
                    </a>
                </td>
            </tr>
        </table>
        
        
    </div>
    );
}

export default Default;
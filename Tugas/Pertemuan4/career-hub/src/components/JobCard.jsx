import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";

function JobCard({ title, company, location, type, salary, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            {company && (
                <p>
                    <FaBuilding className="icon" /> <b>Company:</b> {company}
                </p>
            )}
            {location && (
                <p>
                    <FaLocationDot className="icon" /> <b>Location:</b> {location}
                </p>
            )}
            {type && (
                <p>
                    <FaClock className="icon" /> <b>Type:</b> {type}
                </p>
            )}
            {salary && (
                <p>
                    <FaMoneyBillWave className="icon" /> <b>Salary:</b> {salary}
                </p>
            )}
            {description && <p className="description">{description}</p>}
            <button className="detail-btn">See Details</button>
        </div>
    );
}

export default JobCard;
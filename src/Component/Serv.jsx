import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function Serv({ iconType, header, para, margin }) {
    return (
        <div className={`serv d-flex align-items-center ${margin} gap-3`}>
            <div className="icon">
                <FontAwesomeIcon icon={iconType} />
            </div>
            <div className={`info `}>
                <h2>{header}</h2>
                <p>{para}</p>
            </div>
        </div>
    )
}

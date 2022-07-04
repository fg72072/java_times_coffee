import { JavaTimes, BranchFooter } from "./Images"

function BranchCard(props) {
    return <>
        <div className="branch-card">
            <img src={JavaTimes} />
            <h3 className="mt-2 primary-text">{props.title}</h3>
            <p>{props.address}</p>
            <img src={BranchFooter} />
        </div>
    </>
}

export default BranchCard
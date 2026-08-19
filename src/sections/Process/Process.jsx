import "../Process/procces.css"
import ProccessCard from "./ProcessCard"

export default function Prosses() {
    return (
        <div className="container_procces">
            <h1 className="heading_procces">Этапы разработки</h1>
            <div className="cards_procces">
                {}
                <ProccessCard />
                {}
                <button className="button_procces">Оставить заявку</button>
            </div>
        </div>
    )
}

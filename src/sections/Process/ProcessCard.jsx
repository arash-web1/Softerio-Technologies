import { ProccesData } from "./processData";
import "../Process/procces.css";

export default function ProccessCard() {
  return (
    <>
      {ProccesData.map((item) => (
        <div className="proccess_card_item" key={item.id}>
          <div className="procces_image">
            {item.top_img && (
              <img 
                src={item.top_img} 
                alt="ball" 
                className={`ball ${item.ballPosition || ""}`} 
              />
            )}
            {item.img && <img src={item.img} alt={item.title} />}
          </div>
          <div className="card_title_row">
            <span className="card_number">{item.id}</span>
            <h3>{item.title}</h3>
          </div>
          <div className="card_paragraph_wrapper">
             <p>{item.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
}

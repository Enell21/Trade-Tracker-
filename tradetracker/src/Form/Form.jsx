import { useState } from "react";
import { useData } from "../context/DataContext";

const CreateTradeForm = ({ onTradeSubmit }) => {
  const { addTrade, addChartData } = useData();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const trade = {
      tradeEntry: formData.get("tradeEntry"),
      prizeOnSell: formData.get("prizeOnSell"),
      tradeSize: formData.get("tradeSize"),
      PNL: formData.get("PNL"),
      tradeDescription: formData.get("tradeDescription"),
      tradeImage: formData.get("tradeImage"),
    };

    if (
      trade.tradeEntry &&
      trade.prizeOnSell &&
      trade.tradeSize &&
      trade.PNL &&
      trade.tradeDescription
    ) {
      addTrade(trade);
      addChartData({ date: new Date().toLocaleDateString(), PNL: trade.PNL });
      setIsOpen(false);
    }

    e.target.reset();
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        Add Trade
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create Trade</h2>
            <form onSubmit={handleSubmit}>
              <label>Trade Entry</label>
              <input type="text" name="tradeEntry" required />

              <label>Prize on Sell</label>
              <input type="text" name="prizeOnSell" required />

              <label>Trade Size</label>
              <input type="text" name="tradeSize" required />

              <label>PNL</label>
              <input type="number" name="PNL" required />

              <label>Trade Description</label>
              <input type="text" name="tradeDescription" required />

              <label>Trade Image</label>
              <input type="file" name="tradeImage" />

              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTradeForm;

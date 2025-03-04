import { useState } from "react";
import { useData } from "../context/DataContext";

const CreateTradeForm = () => {
  const { addTrade, addChartData, formData, updatedFormData, resetFormData } =
    useData();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.selectedMonth && formData.PNL) {
      addChartData({
        date: formData.selectedMonth,
        PNL: parseInt(formData.PNL, 10),
      });
    }

    if (
      formData.tradeEntry &&
      formData.prizeOnSell &&
      formData.tradeSize &&
      formData.PNL &&
      formData.tradeDescription
    ) {
      const trade = {
        tradeEntry: formData.tradeEntry,
        prizeOnSell: formData.prizeOnSell,
        tradeSize: formData.tradeSize,
        PNL: parseInt(formData.PNL, 10),
        tradeDescription: formData.tradeDescription,
      };
      addTrade(trade);
      setIsOpen(false);
    }

    resetFormData();
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
              <select
                value={formData.selectedMonth}
                onChange={(e) =>
                  updatedFormData("selectedMonth", e.target.value)
                }
                className="border p-2 mr-2"
              >
                <option value="">Select Month</option>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <label>Trade Entry</label>
              <input
                type="text"
                value={formData.tradeEntry}
                onChange={(e) => updatedFormData("tradeEntry", e.target.value)}
                placeholder="Trade Entry"
                className="border p-2 mr-2"
                required
              />
              <label>Prize on Sell</label>
              <input
                type="text"
                value={formData.prizeOnSell}
                onChange={(e) => updatedFormData("prizeOnSell", e.target.value)}
                placeholder="Prize on Sell"
                className="border p-2 mr-2"
                required
              />

              <label>Trade Size</label>
              <input
                type="text"
                value={formData.tradeSize}
                onChange={(e) => updatedFormData("tradeSize", e.target.value)}
                placeholder="Trade Size"
                className="border p-2 mr-2"
                required
              />

              <label>PNL</label>
              <input
                type="number"
                value={formData.PNL}
                onChange={(e) => updatedFormData("PNL", e.target.value)}
                placeholder="PNL"
                className="border p-2 mr-2"
                required
              />

              <label>Trade Description</label>
              <input
                type="text"
                value={formData.tradeDescription}
                onChange={(e) =>
                  updatedFormData("tradeDescription", e.target.value)
                }
                placeholder="Trade Description"
                className="border p-2 mr-2"
                required
              />

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

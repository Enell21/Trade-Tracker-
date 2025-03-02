const CreateTradeForm = ({ onTradeSubmit }) => {
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
      onTradeSubmit(trade);
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <label>Trade Entry</label>
      <input type="text" name="tradeEntry" required />
      <label>Prize on Sell</label>
      <input type="text" name="prizeOnSell" required />
      <label>Trade Size</label>
      <input type="text" name="tradeSize" required />
      <label>PNL</label>
      <input type="decimal" name="PNL" required />
      <label>Trade Description</label>
      <input type="text" name="tradeDescription" required />
      <label>Trade Image</label>
      <input type="file" name="tradeImage" />
      <button type="submit">Create Trade</button>
    </form>
  );
};

export default CreateTradeForm;

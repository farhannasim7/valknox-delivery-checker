const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("VALKNOX Delivery Checker backend is running.");
});

app.post("/api/check-delivery", async (req, res) => {
  const pincode = String(req.body.pincode || "");

  if (!/^[1-9][0-9]{5}$/.test(pincode)) {
    return res.status(400).json({
      success: false,
      message: "Enter a valid 6-digit Indian pincode."
    });
  }

  // Live courier integration will be added after API access is configured.
  return res.status(503).json({
    success: false,
    message: "Live delivery checking is not configured yet."
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`VALKNOX backend running on port ${PORT}`);
});

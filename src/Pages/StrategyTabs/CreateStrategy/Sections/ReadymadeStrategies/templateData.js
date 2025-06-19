const strategyTemplates = {
  rsiOversold: {
    title: "RSI Oversold Strategy",
    type: "indicator",
    transactionType: "both",
    settings: {
      indicator: "RSI",
      period: 14,
      oversoldLevel: 30,
      entryCondition: "crosses_below",
      exitCondition: "take_profit",
      takeProfit: 5,
      stopLoss: 2,
      positionSize: 2
    }
  }
};
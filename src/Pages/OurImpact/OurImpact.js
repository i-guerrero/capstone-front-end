import "./OurImpact.css";

function AmountDisplayer({ label, initialAmount, targetAmount, isCurrency }) {
  return (
    <div className="amount-displayer">
      <h4 className="label">{label}</h4>
      <div
        style={{
          "--initial-amount": initialAmount,
          "--target-amount": targetAmount,
        }}
        className="amount"
      >
        {isCurrency && "$"}
      </div>
    </div>
  );
}

export default function OurImpact() {
  return (
    <div className="home">
      <section className="container pt-5">
        <header className="text-center mb-5">
          <h2>Our volunteers save Nonprofit organizations time and money</h2>
        </header>

        <div className="d-flex flex-column align-items-center gap-4">
          <AmountDisplayer
            label="Nonprofits have saved:"
            initialAmount={0}
            targetAmount={25230}
            isCurrency
          />

          <AmountDisplayer
            label="Volunteer developer hours donated:"
            initialAmount={0}
            targetAmount={373}
          />

          <AmountDisplayer
            label="Developer real-world experiences:"
            initialAmount={0}
            targetAmount={115}
          />
        </div>
      </section>
    </div>
  );
}

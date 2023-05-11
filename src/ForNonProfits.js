import ProposalForm from "./ProposalForm";
export default function ForNonProfits() {
  return (
    <div className="home">
      <article>
        Fill out the form below and be contacted by one of our mentors to
        determine with you the technology needs of your organization:
      </article>
      <button onClick={() => <ProposalForm />}>
        Fill out the proposal form
      </button>
    </div>
  );
}

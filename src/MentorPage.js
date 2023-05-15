import { mockProposalsList } from "./mocks/proposals";

export default function MentorPage() {
  console.log(mockProposalsList);
  return (
    <div className="home">
      <article>
        See all these Non-Profits Organization which you can colaborate now!
      </article>

      <div>
        {mockProposalsList.map((proposal) => (
          <div key={proposal.title}>{proposal.title}</div>
        ))}
      </div>
    </div>
  );
}

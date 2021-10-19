import Score from './Score.js';

function Scores({ label1, label2, scores }) {
  return (
    <div>
      {scores.map(({ p1score, p2score }) => (
        <section className="scores">
          <Score label={label1} score={p1score} />
          <Score label={label2} score={p2score} />
        </section>
      ))}
    </div>
  );
}

export default Scores;
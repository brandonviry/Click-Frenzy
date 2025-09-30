const ClickEffect = ({ click }) => {
  return (
    <div
      className="absolute text-yellow-400 font-bold text-xl animate-bounce pointer-events-none z-20"
      style={{ left: click.x, top: click.y }}
    >
      +{click.points}
    </div>
  );
};

export default ClickEffect;
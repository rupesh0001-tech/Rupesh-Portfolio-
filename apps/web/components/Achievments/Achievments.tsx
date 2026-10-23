import AchievmentCard from "./AchievmentCard";

const Achievments = () => {
  return (
    <section className="mt-15">
      <h2
        className={`mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400`}
      >
        Achievments
      </h2>
      <h2 className={`mb-2 text-3xl font-bold`}>Achievments</h2>
      <AchievmentCard />

      <hr className="mt-15" />
    </section>
  );
};

export default Achievments;

export function OverviewBox({
  title,
  number,
  icon = <></>,
}: {
  title: string;
  number: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-primary rounded-md text-white p-3 flex-grow flex justify-between">
      <div>
        <h6 className="font-semi-bold text-md mb-4">{number}</h6>
        <p>{title} applicant</p>
      </div>
      {icon && (
        <div className="bg-white text-black rounded size-10 flex justify-center items-center self-center">
          {icon}
        </div>
      )}
    </div>
  );
}

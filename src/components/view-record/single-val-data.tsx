interface SingleValDataProps {
  label: string;
  value: string;
}

const SingleValData: React.FC<SingleValDataProps> = ({ label, value }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="px-4 py-2 font-semibold">{label}</div>
      <div className="px-4 py-2">{value}</div>
    </div>
  );
};

export default SingleValData;

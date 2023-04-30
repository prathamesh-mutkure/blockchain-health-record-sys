interface DataEventProps {
  title: string;
  date: string;
}

const DataEvent: React.FC<DataEventProps> = ({ title, date }) => {
  return (
    <li>
      <div className="text-teal-600">{title}</div>
      <div className="text-gray-500 text-xs">{date}</div>
    </li>
  );
};

export default DataEvent;

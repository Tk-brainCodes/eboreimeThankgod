import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";

interface CompanyProps {
  name: string;
  company: string;
  date: string;
}

interface Company {
  company: CompanyProps;
}

const JobCard = ({ company }: Company) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className='basis-1/3 w-100 mb-8'>
      <p
        className={`text-lg font-normal ${
          dark ? "text-gray-300" : "text-white"
        } mb-2`}
      >
        {company.name}
      </p>
      <p
        className={`text-lg font-normal ${
          dark ? "text-gray-400" : "text-gray-700"
        } mb-5`}
      >
        {company.company}
      </p>
      <p
        className={`text-lg font-normal ${
          dark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {company.date}
      </p>
    </div>
  );
};

export default JobCard;

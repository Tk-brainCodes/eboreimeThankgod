import { useContext } from "react";
import { ThemeContext } from "../../provider/theme.provider";

interface CompanyProps {
  name: string;
  company: string;
  date: string
}

interface Company {
  company: CompanyProps;
}

const JobCard = ({ company }: Company) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className='companies'>
      <p className='role-type' style={{ color: `${dark ? "#999" : "black"}` }}>
        {company.name}
      </p>
      <p
        className='company-title'
        style={{
          color: `${dark ? "#CCCCCC" : "rgba(0, 0, 0, 0.707)"}`,
        }}
      >
        {company.company}
      </p>
      <p
        className='date'
        style={{
          color: `${dark ? "#999999" : "rgba(0, 0, 0, 0.707)"}`,
        }}
      >
        {company.date}
      </p>
    </div>
  );
};

export default JobCard;

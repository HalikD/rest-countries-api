import Country from "@/components/Country/Country";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOneCountry } from "@/http/countriesAPI";
import { IOneCountry, processedOneCountry } from "@/utils/countryProcessing";
import Button from "@/components/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

const DetailPage = () => {
  const [country, setCountry] = useState<IOneCountry | null>(null);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneCountry(name as string)
      .then((unProcessedData) => processedOneCountry(unProcessedData[0]))
      .then((processedData) => setCountry(processedData));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <FaArrowLeft />
        Back
      </Button>
      {country && <Country {...country} />}
    </div>
  );
};

export default DetailPage;

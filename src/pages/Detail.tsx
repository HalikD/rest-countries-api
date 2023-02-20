import Country from "@/components/Country/Country";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOneCountry } from "@/http/countriesAPI";
import { processedOneCountry } from "@/utils/countryProcessing";
import Button from "@/components/Button/Button";
import { FaArrowLeft } from "react-icons/fa";

const Detail = () => {
  const [country, setCountry] = useState(null);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneCountry(name)
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

export default Detail;

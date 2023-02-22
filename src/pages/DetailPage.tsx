import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Country from "@/components/Country/Country";
import Button from "@/components/Button/Button";
import Loader from "@/components/Loader/Loader";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchOneCountry } from "@/store/countryDetail/contryDetailAsyncActions";

const DetailPage = () => {
  const { country, status } = useAppSelector((state) => state.countryDetail);

  const dispatch = useAppDispatch();

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOneCountry(name as string));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <FaArrowLeft />
        Back
      </Button>
      {status === "loading" ? <Loader /> : country && <Country {...country} />}
    </div>
  );
};

export default DetailPage;

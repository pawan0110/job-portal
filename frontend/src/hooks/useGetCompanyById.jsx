import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { COMPANY_API_END_POINT } from "@/utils/constant";
import { setSingleCompany } from "@/redux/companySlice";

const useGetCompanyById = () => {
  const dispatch = useDispatch();

  useEffect(
    (companyId) => {
      const fetchSingleCompany = async () => {
        try {
          const res = await axios.get(
            `${COMPANY_API_END_POINT}/get/${companyId}`,
            {
              withCredentials: true,
            }
          );

          if (res.data.success) {
            dispatch(setSingleCompany(res.data.company));
          }
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      };

      fetchSingleCompany();
    },
    [companyId, dispatch]
  ); // ✅ Added dependency
};

export default useGetCompanyById;

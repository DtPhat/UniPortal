import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  isSchoolPage?: boolean;
};


const AdminHeader = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [openSchool, setOpenSchool] = useState(false);
  const [value, setValue] = useState("fpt");
  return (
    <section className="border-b-2 flex justify-center px-1 sticky top-0 z-10 bg-white">
      <div className="px-6 w-full flex justify-center items-center">
        <div className="w-full flex py-2 justify-between">
          <div className="flex gap-8">
            <Link to="/">
              <span className="text-3xl flex justify-end font-bold">
                UniPortal
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AdminHeader;
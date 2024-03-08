import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { TrophyIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logout, setCredentials } from "../../features/auth/authSlice";
import UserMenu from "./UserMenu";

type Props = {
  isSchoolPage?: boolean;
};

const schools = [
  {
    value: "fpt",
    label: "FPT University",
  },
  {
    value: "bach khoa ha noi",
    label: "Bách khoa Hà Nội",
  },
  {
    value: "hutech",
    label: "Hutech University",
  },
];

const Header = ({ isSchoolPage }: Props) => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [openSchool, setOpenSchool] = useState(false);
  const [value, setValue] = useState("fpt");

  return (
    <section className="border-b-2 flex justify-center px-1 sticky top-0 z-10 bg-white">
      <div className="max-w-7xl w-full flex justify-center items-center">
        <div className="w-full flex py-2 justify-between">
          <div className="flex gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src="/icon.png" className="w-9 h-9" />
              <div className="text-3xl flex justify-end font-bold font-serif">
                <span className="text-black">Uni</span>
                <span className="text-accent-dark">Portal</span>
              </div>
            </Link>
            {isSchoolPage && (
              <Popover open={openSchool} onOpenChange={setOpenSchool}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openSchool}
                    className="w-64 justify-between"
                  >
                    {value
                      ? schools.find((school) => school.value === value)?.label
                      : "Select school..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search school..."
                      className="h-9"
                    />
                    <CommandEmpty>No school found.</CommandEmpty>
                    <CommandGroup>
                      {schools.map((school) => (
                        <CommandItem
                          key={school.value}
                          value={school.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpenSchool(false);
                          }}
                        >
                          {school.label}
                          <CheckIcon
                            className={`ml-auto h-4 w-4 ${value === school.value
                              ? "opacity-100"
                              : "opacity-0"
                              }`}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            )}
          </div>
          <div className="flex gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-base"
                    onClick={() => navigate("/admission")}
                  >
                    Admission
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col px-4 pb-2 md:w-[25rem] lg:w-[28rem] list-none divide-y gap-2">
                      <li className="font-semibold text-gray-700 hover:text-accent pt-2">
                        <Link to='/admission'>
                          Tổng hợp về các phương thức xét tuyển
                        </Link>
                      </li>
                      <li className="font-semibold text-gray-700 hover:text-accent pt-2">
                        <Link to='/admission/subject-group'>
                          Danh sách các khối thi và tổ hợp xét tuyển đại học
                        </Link>
                      </li>
                      <li className="font-semibold text-gray-700 hover:text-accent pt-2">
                        <Link to='/admission'>
                          Kế hoạch tuyển sinh năm {new Date().getFullYear()}
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-base"
                    onClick={() => navigate("/news")}
                  >
                    News
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col px-4 pb-2 gap-2 divide-y font-semibold md:w-[12rem] lg:w-[16rem]">
                      <li className="font-semibold text-gray-700 hover:text-accent pt-2">
                        <Link to="/news" className="pt-2">Technology Intelligence</Link>
                      </li>
                      <li className="font-semibold text-gray-700 hover:text-accent pt-2">
                        <Link to="/news" className="pt-2">Vovinam Performance</Link>
                      </li>
                      <li className="font-semibold text-gray-700 hover:text-accent pt-2">
                        <Link to="/news" className="pt-2">RMIT Pioneer</Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <Link to="/ranking">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <TrophyIcon size={20} />
                  <span>Ranking</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenu>

            {
              userInfo ?
                <div><UserMenu /></div>
                : <div className="flex gap-2">
                  <Button variant="outline" className="" onClick={() => navigate('/signin')}>
                    Sign in
                  </Button>
                  <Button onClick={() => navigate('/signup')}>
                    Sign up
                  </Button>
                </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
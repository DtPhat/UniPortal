import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { TrophyIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useGetUserDetailsQuery } from "@/services/authService"
import { logout, setCredentials } from '../features/auth/authSlice'

type Props = {
  isSchoolPage?: boolean
}

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
]


const Header = ({ isSchoolPage }: Props) => {

  const { userInfo } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const { data, isFetching } = useGetUserDetailsQuery({})
  const [openSchool, setOpenSchool] = useState(false)
  const [value, setValue] = useState("fpt")
  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch]);
  return (
    <section className='border-b-2 flex justify-center px-1 sticky top-0 z-10 bg-white'>
      <div className='max-w-7xl w-full flex justify-center items-center'>
        <div className='w-full flex py-2 justify-between'>
          <div className="flex gap-8">
            <Link to='/'>
              <span className='text-3xl flex justify-end font-bold'>UniPortal</span>
            </Link>
            {isSchoolPage && <Popover open={openSchool} onOpenChange={setOpenSchool}>
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
                  <CommandInput placeholder="Search school..." className="h-9" />
                  <CommandEmpty>No school found.</CommandEmpty>
                  <CommandGroup>
                    {schools.map((school) => (
                      <CommandItem
                        key={school.value}
                        value={school.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpenSchool(false)
                        }}
                      >
                        {school.label}
                        <CheckIcon className={`ml-auto h-4 w-4 ${value === school.value ? "opacity-100" : "opacity-0"}`}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            }
          </div>
          <div className='flex gap-8'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='text-base'>Admission</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* <NavigationMenuLink>Hello</NavigationMenuLink> */}
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='text-base'>News</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* <NavigationMenuLink>Hello</NavigationMenuLink> */}
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
            {/* {
              isFetching ?
                <div>Loading...</div> 
                : userInfo ? <p>{userInfo.name}</p>
                : <div className='flex gap-2'>
                  <Button variant="outline" className=''>Sign in</Button>
                  <Button>Sign up</Button>
                </div>
            } */}
            <div className='flex gap-2'>
              <Button variant="outline" className=''>Sign in</Button>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
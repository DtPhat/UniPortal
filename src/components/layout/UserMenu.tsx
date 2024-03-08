import { roles } from "@/app/constants"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout, selectUserInfo } from "@/features/auth/authSlice"
import { BookOpen, BookOpenText, ChevronDown, LogOut, Settings, SquareUser, UserRound } from "lucide-react"
import React from 'react'
import { useNavigate } from "react-router-dom"


const UserMenu = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userInfo = useAppSelector(selectUserInfo)
  const anonymous = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_rW9tvc5tzHfImg0xXTReFOQIAuAbt-EXuFdvzgB9g&s"
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center rounded bg-transparent hover:bg-slate-50 border p-1 gap-2 justify-between cursor-pointer'>
          {/* <Avatar>
            <AvatarImage className="" src={userInfo?.avatarLink || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_rW9tvc5tzHfImg0xXTReFOQIAuAbt-EXuFdvzgB9g&s"} />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar> */}
          <img src={userInfo?.avatarLink || anonymous} alt="avatar" className="rounded-full w-8 h-8" />
          <span className='w-32 text-base truncate font-medium hidden xl:block'>
            {userInfo?.firstName} {userInfo?.lastName}
          </span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserRound className="w-4 h-4 text-black/70" />
            <p>Profile</p>
          </DropdownMenuItem>
          {
            userInfo?.role == roles.STUDENT &&
            <DropdownMenuItem>
              <BookOpen className="w-4 h-4 text-black/70" />
              School Transcript
            </DropdownMenuItem>
          }
          <DropdownMenuItem>
            <Settings className="w-4 h-4 text-black/70" />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => { dispatch(logout()); navigate('/signin') }}>
          <LogOut className="w-4 h-4 text-black/70" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <section className='border-b-2 flex justify-center px-1'>
      <div className='max-w-7xl w-full flex justify-center items-center'>
        <div className='w-full flex py-2 justify-between'>
          <span className='text-3xl flex justify-end font-bold'>UniPortal</span>
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
            </NavigationMenu>
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
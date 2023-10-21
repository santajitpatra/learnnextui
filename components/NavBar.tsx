import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'

const NavBar = () => {
  return (
      <Navbar shouldHideOnScroll>
          <NavbarBrand>
              <p className="font-bold text-inherit">Shantah</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                  <Link color="foreground" className='text-blue-500' href="/">
                      Home
                  </Link>
              </NavbarItem>
              <NavbarItem isActive>
                  <Link href="/products" className='text-blue-500' aria-current="page">
                      Products
                  </Link>
              </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                  <ThemeSwitcher />
              </NavbarItem>
            
          </NavbarContent>
      </Navbar>  )
}

export default NavBar
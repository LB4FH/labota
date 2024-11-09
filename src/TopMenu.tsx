import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

import './TopMenu.css'

function TopMenu() {
  return (
    <>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/home">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/about">About BOTA</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              References <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <li>
                  <NavigationMenu.Link asChild className="ListItemLink">
                    <a className="ListItemLink" href="/references">
                      <div className="ListItemHeading">Reference list</div>
                      <p className="ListItemText">See our references</p>
                    </a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild className="ListItemLink">
                    <a className="ListItemLink" href="/add-references">
                      <div className="ListItemHeading">Add references</div>
                      <p className="ListItemText">Learn about adding your own references</p>
                    </a>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

        </NavigationMenu.List >
      </NavigationMenu.Root>
    </>
  )
}



export default TopMenu

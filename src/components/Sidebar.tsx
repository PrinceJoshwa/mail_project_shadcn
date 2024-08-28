'use client'


import { User, Inbox, CreditCard, Bell, Settings, GlobeLock, MessageSquareText } from "lucide-react"
import UserItem from "./UserItem"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  



export default function Sidebar() {
    const menuList = [
        {
          group : "Genral" ,
          items: [
              {
                  link: "/",
                  icon: <User />,
                  text: "Profile"
              },
              {
                  link: "/",
                  icon: <Inbox />,
                  text: "Inbox"
              },
              {
                  link: "/",
                  icon: <CreditCard />,
                  text: "Billing"
              },
              {
                link: "/",
                icon: <Bell />,
                text: "Notifications"
              }
        ]
        },
        {
            group : "Settings" ,
            items: [
                {
                    link: "/",
                    icon:<Settings />,
                    text: "Genral Settings"
                },
                {
                    link: "/",
                    icon: <GlobeLock />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <MessageSquareText />,
                    text: "Logs"
                }
          ]
          }
    ]
    return <div className=" fixed  flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4 min-h-screen">
    <div>
        <UserItem/>
    </div>
    <div className="grow">
    <Command style={{overflow:'visible'}}>
  <CommandList style={{overflow:'visible'}}>
    {menuList.map((menu: any, key: number) => (
    <CommandGroup key={key} heading={menu.group}>
    {menu.items.map((option: any, optionKey: number) => 
    <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
        {option.icon}
        {option.text}
        </CommandItem>)}
    </CommandGroup>
    ))}
  </CommandList>
</Command>

    </div>
    <div>Settings / Notifications</div>
    </div>
}
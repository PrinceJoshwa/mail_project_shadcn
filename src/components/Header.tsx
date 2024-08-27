'use client'

import { BellIcon } from "lucide-react"
import { CommandDemo } from "./Command"
import { Button } from "./ui/button"

export default function Header() {
    return <div className="grid grid-cols-2 gap-4 p-4 border-b">
        <CommandDemo />
        <div>
            <Button variant="outline" size="icon">
                <BellIcon className="h-4 w-4" />
            </Button>
        </div>
    </div>
}
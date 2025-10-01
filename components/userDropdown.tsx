import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const UserDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuLabel>Billing</DropdownMenuLabel>
                <DropdownMenuLabel>Team</DropdownMenuLabel>
                <DropdownMenuLabel>Subscription</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown

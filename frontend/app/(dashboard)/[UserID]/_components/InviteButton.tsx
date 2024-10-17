import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/Dialog";

import { Button } from "@/components/ui/Button";

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2"/>
                    Invite Members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                <OrganizationProfile/>
            </DialogContent>
        </Dialog>
    );
};
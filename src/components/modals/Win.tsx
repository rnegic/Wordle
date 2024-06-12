import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";

import {
    Button,
} from "@/components/ui/button";

interface WinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Win: React.FC<WinModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black">
                <DialogHeader>
                    <DialogTitle>Congratulations!</DialogTitle>
                </DialogHeader>
                <div className="py-4 px-6">You won this level!</div>
                <DialogFooter>
                    <Button onClick={() => {
                        onClose();
                        window.location.reload();
                    }}>
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Win;
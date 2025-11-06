import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { ReactNode } from "react";

interface BZModalProps {
  buttonText?: string;
  title?: string;
  body?: ReactNode;
  onAction?: () => void;
  // children?: React.ReactNode;
}

export default function BZModal({
  buttonText,
  title,
  body,

  onAction,
}: BZModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] 
             text-white font-semibold shadow-md hover:shadow-lg 
             hover:from-[#c6a134] hover:to-[#9b7605] transition-all duration-300"
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{body}</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="
    px-6 py-2 rounded-lg 
    bg-gradient-to-r from-[#d4af37] to-[#b8860b] 
    text-white font-semibold 
    shadow-md hover:shadow-lg 
    hover:from-[#c6a134] hover:to-[#9b7605] 
    transition-all duration-300
  "
                >
                  Close
                </Button>
                <Button
                  className="
    px-6 py-2 rounded-lg 
    bg-gradient-to-r from-[#d4af37] to-[#b8860b] 
    text-white font-semibold 
    shadow-md hover:shadow-lg 
    hover:from-[#c6a134] hover:to-[#9b7605] 
    transition-all duration-300
  "
                  color="primary"
                  onPress={() => {
                    if (onAction) onAction(); // 👈 Call the delete function
                    onClose(); // 👈 Then close modal
                  }}
                >
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

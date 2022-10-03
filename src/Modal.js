import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";

export let dialog;

export default function Modal() {
  dialog = useDialogState({visible: true});
  return (
    <>
      <DialogDisclosure {...dialog}>
        Open dialog
      </DialogDisclosure>
      <Dialog 
        {...dialog} 
        aria-label="Welcome" 
        tabIndex="0" 
        style={{
          backgroundColor: "#ffffff",
          position: "fixed",
          top: 28,
          left: "25%",
          width: "50%"
        }}
        >
        Welcome to Reakit!
      </Dialog>
    </>
  );
}
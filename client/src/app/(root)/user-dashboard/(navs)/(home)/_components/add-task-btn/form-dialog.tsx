"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { closeform } from "@/store/states/form";
import formComponents from "./task-forms";

function FormDialog() {
  const forms = useAppSelector((state: RootState) => state.form.forms);
  const dispatch = useAppDispatch();

  const handleClose = (formKey: string) => {
    dispatch(closeform(formKey));
  };

  return (
    <>
      {Object.entries(forms).map(([key, isOpen]) => {
        if (!isOpen) {
          return null;
        }

        const FormComponent = formComponents[key];

        return (
          <Dialog open={isOpen} onOpenChange={() => handleClose(key)} key={key}>
            <DialogContent className="h-[90vh] md:min-w-[40%] overflow-auto bg-secondary">
              <DialogHeader>
                <DialogTitle className="text-center uppercase">
                  {key.replace("form", "")} Form
                </DialogTitle>
              </DialogHeader>
              <div>
                {FormComponent ? <FormComponent /> : <div>No Form Found</div>}
              </div>
              <DialogFooter>
                <Button onClick={() => handleClose(key)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </>
  );
}

export default FormDialog;
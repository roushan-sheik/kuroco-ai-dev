import React from "react";
import { Button } from "~/components/ui/button";
import { PlusCircle, ClipboardList, Save, Undo2, Redo2 } from "lucide-react";

const ButtonVariants = () => {
  return (
    <div className="my-10 lg:px-20 px-4">
      <div>
        <h2 className="text-center text-display2 mb-4 font-bold">
          Welcome to Home
        </h2>

        <h2 className="text-center text-title3">KUROCO AI Button Variants </h2>
        <div className="flex flex-col justify-center w-full  p-8">
          <div className="flex gap-4 my-8">
            <Button>Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="outline" size="sm">
              Undo
            </Button>
            <Button variant="secondary" size="default">
              Secondary
            </Button>
            <Button variant="ghost" size="lg">
              Ghost
            </Button>
            <Button variant="link">Learn More</Button>
            <Button variant="text">Back</Button>
          </div>
          <div className="flex gap-4 my-8">
            <Button variant="default" size="default">
              <PlusCircle className="size-5" />
              Create Project
            </Button>

            <Button variant="success" size="default">
              <ClipboardList className="size-5" />
              Interview Sheet
            </Button>

            <Button variant="outline" size="sm">
              <Undo2 className="size-4" />
              Undo
            </Button>

            <Button variant="outline" size="sm">
              <Redo2 className="size-4" />
              Redo
            </Button>

            <Button variant="default" size="default">
              <Save className="size-5" />
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonVariants;

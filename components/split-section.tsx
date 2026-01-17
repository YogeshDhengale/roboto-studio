import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { InView } from "./ui/in-view";

const SplitSection = ({
  buttons,
  imageUrl,
  title,
  subTitle,
  description,
  className,
}: {
  buttons: React.ReactNode;
  imageUrl: string;
  subTitle?: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <section className={cn("py-20 relative overflow-hidden", className)} aria-label="Fireplaces">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 container mx-auto ">
        <div className="space-y-8 w-full flex flex-col items-center justify-center max-w-md mx-auto">
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
          once
        >
            {subTitle && (
              <p className="text-base font-medium text-center">{subTitle}</p>
            )}
            <h2 className="text-4xl text-center font-medium">{title}</h2>
            <p className="text-base font-medium">{description}</p>
            <div className="flex flex-col items-center justify-center gap-4">
              {buttons}
            </div>
        </InView>
          </div>
        <div className="w-full flex items-center justify-center">
          <InView
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewOptions={{ margin: "0px 0px -350px 0px" }}
          >
            <Image
              src={imageUrl}
              alt={"image" + title}
              width={583}
              height={734}
            />
          </InView>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
